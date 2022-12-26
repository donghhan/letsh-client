import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Main = styled.main`
  width: 100%;
`;

export default function Layout() {
  return (
    <Main>
      <Outlet />
    </Main>
  );
}
