import styled from "styled-components";
import { LineStyle, TagFaces,  CopyrightRounded } from '@material-ui/icons';

const Container = styled.div`
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;
const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;

const SidebarTitle = styled.h3`
  font-size: 13px;
  color: rgb(197, 194, 194);
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;

const SidebarListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <SidebarMenu>
          <SidebarTitle>Site Option</SidebarTitle>
          <SidebarList>
            <SidebarListItem><LineStyle />Title & Slogan</SidebarListItem>
          </SidebarList>
          <SidebarList>
            <SidebarListItem><LineStyle />Title & Slogan</SidebarListItem>
          </SidebarList>
          <SidebarList>
            <SidebarListItem><LineStyle />Title & Slogan</SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Site Option</SidebarTitle>
          <SidebarList>
            <SidebarListItem><LineStyle />Title & Slogan</SidebarListItem>
          </SidebarList>
          <SidebarList>
            <SidebarListItem><LineStyle />Title & Slogan</SidebarListItem>
          </SidebarList>
          <SidebarList>
            <SidebarListItem><LineStyle />Title & Slogan</SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Site Option</SidebarTitle>
          <SidebarList>
            <SidebarListItem><LineStyle />Title & Slogan</SidebarListItem>
          </SidebarList>
          <SidebarList>
            <SidebarListItem><LineStyle />Title & Slogan</SidebarListItem>
          </SidebarList>
          <SidebarList>
            <SidebarListItem><LineStyle />Title & Slogan</SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </Wrapper>
    </Container>
  )
}

export default Sidebar