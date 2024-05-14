import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Layout from "../Layout";
import { ProvidersProps } from "../Provider/types";
import Header from "../header/header";
import SideBar from "../sideBar/sideBar";

const PageTemplate = ({ children }: ProvidersProps) => {
  const { pathname } = useLocation();
  return (
    <Container>
      {pathname !== "/login" && <Header />}
      {pathname !== "/login" && <SideBar />}
      <Layout>{children}</Layout>
    </Container>
  );
};
const Container = styled.div`
  min-width:  800px;
  height: 100vh;
  display: flex;
`;
export default PageTemplate;
