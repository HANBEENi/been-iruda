import { useEffect, useRef } from 'react';

interface AudioVisualizerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  barCount?: number;
  width?: number;
  height?: number;
  color?: string;
}

const DEFAULT_BAR_COUNT = 32;

const AudioVisualizer = ({
  audioRef,
  barCount = DEFAULT_BAR_COUNT,
  width = 400,
  height = 60,
  color = '#FF6297',
}: AudioVisualizerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    // 오디오 컨텍스트 생성 (최초 1회만)
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }
    const audioCtx = audioCtxRef.current;

    // AnalyserNode는 항상 새로 생성
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = Math.pow(2, Math.ceil(Math.log2(barCount * 2)));
    analyserRef.current = analyser;

    // **이미 연결된 소스가 있으면 재연결하지 않음**
    // (아예 없으면 새로 연결)
    if (!(audioElement as any).__mediaSource) {
      (audioElement as any).__mediaSource =
        audioCtx.createMediaElementSource(audioElement);
      (audioElement as any).__mediaSource.connect(audioCtx.destination);
    }
    // 새로 만든 분석기에만 연결
    (audioElement as any).__mediaSource.connect(analyser);

    // 그리기
    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.moveTo(0, height - 1);
      ctx.lineTo(width, height - 1);
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      const barWidth = width / barCount;
      for (let i = 0; i < barCount; i++) {
        // 첫 2칸은 무시하고, 2번째부터 값을 샘플링
        let bufferIdx = Math.floor(((i + 2) * bufferLength) / (barCount + 4));
        let value = dataArray[bufferIdx];

        // [감도 조절] 더 극적으로 보이게 증폭
        // 1.5~2배 증폭. 값이 120 넘으면 120으로 제한
        value = Math.min(120, value * 2);

        // [Non-linear] 더 뾰족하게: 1.5제곱 곡선
        const barHeight = Math.pow(value / 120, 1.4) * (height - 10);

        ctx.fillStyle = color;
        ctx.fillRect(
          i * barWidth + barWidth * 0.2,
          height - barHeight - 2,
          barWidth * 0.6,
          barHeight
        );
      }
      animationIdRef.current = requestAnimationFrame(draw);
    };
    draw();

    // 오디오 재생시 컨텍스트 resume
    const handlePlay = () => {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    };
    audioElement.addEventListener('play', handlePlay);

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      audioElement.removeEventListener('play', handlePlay);

      // 분석기만 연결해제 (MediaSource는 AudioContext가 살아있는 동안 1개만)
      try {
        analyser.disconnect();
      } catch {}
      analyserRef.current = null;

      // AudioContext와 MediaSource는 여러 시각화가 겹치지 않는 이상 close 하지 않는 게 안전함
    };
  }, [audioRef, barCount, width, height, color]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        display: 'block',
        width: width,
        height: height,
        background: 'transparent',
        margin: '0 auto',
      }}
    />
  );
};

export default AudioVisualizer;
