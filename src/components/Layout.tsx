import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';

const Main = styled.main`
  min-height: calc(100vh - 160px); /* Account for header and footer */
`;

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
