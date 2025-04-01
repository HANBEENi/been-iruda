// utils/scrollLock.ts

/** 스크롤 비활성화 */
export const disableScroll = (target: HTMLElement | null = document.body) => {
  if (!target) return;
  target.style.overflow = 'hidden';
};

/** 스크롤 활성화 */
export const enableScroll = (target: HTMLElement | null = document.body) => {
  if (!target) return;
  target.style.overflow = 'scroll';
};
