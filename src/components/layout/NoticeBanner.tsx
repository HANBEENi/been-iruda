import { styled } from 'styled-components';

const NoticeBanner = ({
  title,
  descript,
}: {
  title: string;
  descript: string;
}) => {
  return (
    <Layout>
      <Thumbnail />
      <Contents>
        <p className="title">{title}</p>
        <p className="descript">{descript}</p>
      </Contents>
    </Layout>
  );
};
export default NoticeBanner;

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding: 10px 20px;
  gap: 15px;

  width: 100%;

  border-radius: 20px;
  background: rgba(112, 110, 107, 0.6);

  color: ${({ theme }) => theme.noticeBanner.color};
  font-size: 15px;
`;

const Thumbnail = styled.div`
  width: 45px;
  height: 45px;

  border-radius: 10px;
  background-image: url('/images/notice-thumbnail.png');
  background-size: cover;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  white-space: normal;
  overflow-wrap: break-word;

  .title {
    font-weight: 700;
  }
  .descript {
    font-weight: 500;
  }
`;
