import styled from "styled-components";

export const NavOption = styled.div`
    display: flex;
  flex-direction: column;
  //   overflow-y:scroll;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
      align-items: center;

`
export const NavItems = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
`