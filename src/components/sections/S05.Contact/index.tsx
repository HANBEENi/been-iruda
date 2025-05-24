import { ContentsLayout } from '@/components/layout/ContentsLayout';
import { MusicViewLayout } from '../S02.MusicMe';
import { styled } from 'styled-components';
import { colorGuide } from '@/styles/colorGuide';

export const S05_Contact = () => {
  return (
    <ContentsLayout>
      <MusicViewLayout>
        <Contents>
          <Wrap>
            <p className="title">이메일</p>
            <p className="link">BEEN.IRUDA@GMAIL.COM</p>
          </Wrap>
          <Wrap>
            <p className="title">이력서</p>
            <p className="link">BEEN.IRUDA@GMAIL.COM</p>
          </Wrap>
          <Wrap>
            <p className="title">깃허브</p>
            <p className="link">BEEN.IRUDA@GMAIL.COM</p>
          </Wrap>
          <Wrap>
            <p className="title">블로그</p>
            <p className="link">BEEN.IRUDA@GMAIL.COM</p>
          </Wrap>
        </Contents>
      </MusicViewLayout>
    </ContentsLayout>
  );
};

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 10px 0;

  height: 100%;
`;

const Wrap = styled.div`
  .title {
    padding-bottom: 20px;
    color: ${({ theme }) => theme.background.primary};
  }

  .link {
    color: ${colorGuide.C03_pink_700};
    font-weight: bold;

    cursor: pointer;
  }
`;
