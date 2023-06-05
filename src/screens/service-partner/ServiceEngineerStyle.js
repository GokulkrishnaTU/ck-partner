import styled from 'styled-components';
import { COLORS } from '../../assests/Themes/Themes';

export const Div = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 80px;
  font-family: 'Poppins', sans-serif;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const Div6 = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Poppins', sans-serif;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ServiceEngineerDiv = styled.div`
  display: flex;
  width: 100%;
`;
const close = 'translateX(-120%)';
const open = 'translateX(0%)';

export const SidebarDiv = styled.div`
  position: fixed;
  margin-top: 80px;
  top: 0;
  left: 0;
  z-index: 99;
  height: 100vh;
  min-width: 250px;
  transition: all 0.5s ease;
  background-color: #ffffff;
  box-shadow: 0px 7px 30px ${COLORS.boxShadow};
  @media (max-width: 768px) {
    transform: ${(props) => (props.menuOpen ?   close : open)};
  }
`;

export const P1 = styled.p`
  font-size: 1.6rem;
  font-family: 'Poppins', sans-serif;
`;

export const SidebarHeadingDiv = styled.div`
  padding: 2rem;
`;

export const P2 = styled.p`
  color: gray;
  font-family: 'Poppins', sans-serif;
`;

export const Title = styled.label`
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  padding: 5px;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 20px;
  height: 20px;
`;

export const SidebarItemDiv2 = styled.div`
  padding-inline: 2rem;
  padding-top: 1rem;
  a {
    display: flex;
    border-radius: 5px;
    text-align: center;
    align-items: center;
    justify-content: start;
    max-width: 170px;
  }
`;

export const ItemContentDiv = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

export const ServiceEngineerHeaderDiv = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 7px 30px rgba(70, 105, 232, 0.12);
  border-radius: 10px;
  button {
    background-color: #4669e8;
    color: white;
    border: 0px;
    font-size: 12px;
    padding: 14px;
    border-radius: 10px;
  }
  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    @media (max-width: 600px) {
      padding: 10px;
    }
  }
  label {
    font-size: 12px;
    color: #c4c4c4;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 234px) {
    width: 100%;
    min-width: 155px;
  }
`;
export const SidebarItemDiv = styled.div`
  /* padding-inline: 2rem; */
  cursor: pointer;
`;

export const DrawerSidebarDiv = styled.div`
  padding: 40px;
  width: 100%;
  /* overflow-x: scroll; */
  /* overflow-y: scroll; */
  padding-left: 280px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 40px;
  }
`;
export const Table = styled.table`
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-weight: 100;
  border-collapse: collapse;
  th {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 0.8rem;
    height: 50px;
    background-color: ${COLORS.tableHeading};
  }
  td {
    text-align: center;
    font-size: 0.8rem;
    padding: 20px;
    font-weight: 300;
    a {
      cursor: pointer;
    }
  }
  tr {
    border: 1px solid;
    height: 50px;
    :hover {
      background-color: hsl(232deg 100% 98%);
    }
  }
`;

export const TableMainDiv = styled.div`
  margin-top: 30px;
  width: 100%;
  /* overflow-x: scroll;
        overflow-y: scroll; */
  overflow: auto;
`;

export const Icon = styled.span`
  color: rgba(70, 105, 232, 0.25);
  padding: 10px;
  cursor: pointer;
  svg {
    color: rgb(40 79 222 / 25%);
  }
`;
export const Icon1 = styled.span`
  color: black;
  padding: 10px;
  cursor: pointer;
`;
export const Drawer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: contents;
  }
`;

export const Sidebar = styled.div`
  display: none;
  transition: all 0.5s ease;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    height: 100%;
    z-index: 99;
    left: 0;
    top: 0;
    background-color: ${COLORS.whiteColor};
    transform: ${(props) =>
      props.isOpen ? 'translateX(0)' : 'translateX(-110%)'};
  }
`;
export const LinkDiv = styled.div`
  display: flex;
  border-radius: 5px;
  text-align: center;
  padding: 5px;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-width: 170px;
  cursor: pointer;
  background-color: ${(props) =>
    props && props.selectedItem ? 'rgba(70, 105, 232, 0.25)' : 'white'};
  box-shadow: ${(props) =>
    props && props.selectedItem ? 'none' : `0px 7px 30px ${COLORS.boxShadow}`};
  @media (max-width: 768px) {
  }
`;
export const LinkDiv2 = styled.div`
  display: flex;
  border-radius: 5px;
  text-align: center;
  padding: 5px;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-width: 170px;
  cursor: pointer;
  background-color: ${(props) =>
    props.selectedItem === 'view-tickets'
      ? 'rgba(70, 105, 232, 0.25)'
      : 'white'};
  box-shadow: ${(props) =>
    props.selectedItem === 'view-tickets'
      ? 'none'
      : `0px 7px 30px ${COLORS.boxShadow}`};
  @media (max-width: 768px) {
  }
`;

export const CloseIcon = styled.div`
  padding: 10px;
  text-align: right;
`;

export const ModalContentHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: hsl(232deg 88% 90%);
  p {
    padding: 10px;
    display: flex;
    font-size: 0.8rem;
    font-weight: 500;
    align-items: center;
  }
`;

export const SidebarContentHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const WelcomeDiv = styled.div`
  padding: 1rem;
`;

export const SidebarItemMainDiv = styled.div`
  padding-top: 2rem;
  font-size: 20px;
`;

export const InputFieldDiv = styled.div`
  padding: 1rem;
  p {
    font-size: 12px;
    color: #c4c4c4;
    padding-bottom: 5px;
  }
`;

export const StatusDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  label {
    color: #c4c4c4;
  }
  p {
    font-size: 12px;
    color: #c4c4c4;
  }
`;

export const InputField = styled.input`
  border: 1px solid;
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const InputField1 = styled.input`
  width: 100%;
  padding: 10px 20px;
`;

export const Button = styled.div`
  padding: 1rem;
  button {
    padding: 1rem;
    background-color: #4669e8;
    color: white;
    border: 0px;
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    font-size: 12px;
    cursor: pointer;
  }
`;

export const StatusText = styled.div`
  display: flex;
  label {
    padding: 10px;
    font-size: 12px;
    @media (max-width: 768px) {
      padding: 0px;
      font-size: 12px;
    }
  }
`;
export const ServiceEngMainDiv = styled.div`
  width: 100%;
  /* pointer-events: ${(props) =>
    props.drawerClose == false ? 'all' : 'none'};  */
  @media (max-width: 768px) {
    padding-left: 10px;
  }
`;
export const ProfileDiv = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 10px;
  gap: 5px;
  svg {
    /* color: ${COLORS.tableHeading}; */
  }
  span {
    cursor: pointer;
  }
`;
export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
  }
`;
export const ProfileCont = styled.div`
  display: none;
  /* display: flex;
    flex-direction: column; */
  position: absolute;
  top: 70px;
  left: 166px;
  font-size: 12px;
  background-color: ${COLORS.whiteColor};
  box-shadow: 0px 7px 30px ${COLORS.boxShadow};
  transition: all 0.5s ease;
  z-index: 99;
  :hover {
  }
  label {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;

    :hover {
      background-color: ${COLORS.tableHeading};
    }
  }
  display: ${(props) => (props.profile == true ? 'flex' : 'none')};
  flex-direction: ${(props) => (props.profile ? 'column' : 'none')};
  transform: ${(props) =>
    props.profile ? 'translateX(0)' : 'translateX(-110%)'};
`;
