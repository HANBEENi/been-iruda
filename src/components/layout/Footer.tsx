import styled from 'styled-components';
import Marquee from '../ui/Marquee';

const Footer = () => {
  return (
    <Layout>
      <Info className="global-layout">
        <span style={{ color: '#9A9A9A' }}>
          © 2024. KIM HANBEEN All Rights Reserved
        </span>
        <span>been.iruda@gmail.com</span>
      </Info>
      <Marquee $arrow={'right'} />
      <div className="bottom-effect" />
    </Layout>
  );
};
export default Footer;

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  height: 77px;
  .bottom-effect {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    z-index: 1005;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1003;

  flex: 1;

  font-size: 13px;
  font-weight: medium;

  :nth-child(2) {
    color: ${({ theme }) => theme.color};
  }
`;
