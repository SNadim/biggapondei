import styled from "styled-components";
import { DoneRounded, HomeRounded,  CopyrightRounded, GroupRounded } from '@material-ui/icons';

const Container = styled.div`
  background-color: rgb(251, 251, 255);
  position: sticky;
`;
const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const SidebarMenu = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction:column;
  text-align: center;
`;
const TopContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 22px;
    cursor: pointer;
    &:hover{
      background-color: rgb(240,240, 255);
    }
`;
const TopText = styled.h3`
    margin-left: 10px;

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
    margin : 5px 0px;
    padding: 2px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    &:hover{
      background-color: rgb(240,240, 255);
    }
`;

const LoginButton = styled.button`
      font-weight: bold;
      font-size: 24px;
      border: none;
      background-color: rgb(251, 251, 255);
      cursor: pointer;
      padding: 10px 100px;
      border: 1px black solid;
      color: black;
      margin-bottom: 10px;
      &:hover{
        background-color: black;
        color: white;
      }
`;

const LoginTitle = styled.p`
      color: #444;
      font-size: 20px;
      
`;
const AcProfile = styled.img`
      height: 30px;
      widht: 30px;
      border-radius: 50%;
`;

const BrandTitle = styled.span`
      font-weight: bold;
      margin: 0px 10px;
`;

const SeeAll = styled.span`
      color: grey;
`;
const HashtagWrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
`;

const Hashtag = styled.span`
      padding: 10px 20px;
      border: 1px solid grey;
      margin: 0px 5px 10px 5px;;
      border-radius: 5px;
      cursor: pointer;
      &:hover{
        background-color: rgb(240,240, 255);
      }
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <SidebarMenu>
          <TopContainer><HomeRounded /><TopText> For You</TopText></TopContainer>
          <TopContainer><GroupRounded /><TopText> Following</TopText></TopContainer>
        </SidebarMenu>
        <SidebarMenu>
        <LoginTitle>Log in to follow your favourite brand and buy your desired products</LoginTitle>
            <LoginButton>Log in</LoginButton>
        </SidebarMenu>
        <SidebarMenu>
         <SidebarTitle>Suggested Brands</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <AcProfile src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"/>
              <BrandTitle>Bata</BrandTitle><DoneRounded style={{backgroundColor: "rgb(32,213,236)",color:"white",borderRadius:"50%",fontSize: "16px"}} />
            </SidebarListItem>
            <SidebarListItem>
              <AcProfile src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"/>
              <BrandTitle>Apex</BrandTitle><DoneRounded style={{backgroundColor: "rgb(32,213,236)",color:"white",borderRadius:"50%",fontSize: "16px"}} />
            </SidebarListItem>
            <SidebarListItem>
              <AcProfile src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"/>
              <BrandTitle>Guchi</BrandTitle><DoneRounded style={{backgroundColor: "rgb(32,213,236)",color:"white",borderRadius:"50%",fontSize: "16px"}} />
            </SidebarListItem>
            <SidebarListItem>
              <SeeAll>see all</SeeAll>
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Discover</SidebarTitle>
          <HashtagWrapper>
          <Hashtag># shirt</Hashtag>
          <Hashtag># pant</Hashtag>
          <Hashtag># saree</Hashtag>
          <Hashtag># panjabi</Hashtag>
          </HashtagWrapper>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarList>
            <SidebarListItem><CopyrightRounded /> 2022 biggapondei</SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </Wrapper>
    </Container>
  )
}

export default Sidebar