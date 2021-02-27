import styled from 'styled-components';
import FlexDiv from './components/FlexDiv';
import Text from './components/Text';

// Main page
const BackgroundContainer = styled(FlexDiv)`
  background-color: #192035;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const NavDiv = styled(FlexDiv)`
  justify-content: center;
  align-items: center;
  background-color: #192035;
  width: 100%;
  height: 60px;
`;

const FooterDiv = styled(FlexDiv)`
  justify-content: center;
  align-items: center;
  background-color: red;
  width: 100%;
  height: 40px;
`;

const ContentContainer = styled(FlexDiv)`
  background-color: #192035;
  width: auto;
  height: 100%;
  margin: 0px 40px 0px 40px;
`;





function App() {
  return (
    <BackgroundContainer>
      <NavDiv>
        <Text size={"35px"}>osu! Rhythm practice</Text>
      </NavDiv>
      <ContentContainer>

      </ContentContainer>
      <FooterDiv>

      </FooterDiv>
    </BackgroundContainer>
  );
}

export default App;
