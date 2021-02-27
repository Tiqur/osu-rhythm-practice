import styled from 'styled-components';
import FlexDiv from './components/FlexDiv';
import Text from './components/Text';
import Container from './components/Container';

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
  height: 80px;
  margin-bottom: 40px;
`;

const FooterDiv = styled(FlexDiv)`
  justify-content: center;
  align-items: center;
  background-color: #192035;
  width: 100%;
  height: 40px;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-area: 1/2/4/6;
  width: auto;
  height: 100%;
  margin: 0px 40px 0px 40px;
  grid-template-areas: 
  "o o o . . . . . . . . ."
  "o o o . . . . . . . . ."
  "o o o . . . . . . . . ."
  ". . . . . . . . . . . ."
  ". . . . . . . . . . . ."
  ". . . . . . . . . . . ."
  ". . . . . . . . . . . ."
  ". . . . . . . . . . . ."
  ". . . . . . . . . . . ."
  ". . . . . . . . . . . ."
  ". . . . . . . . . . . ."
  ". . . . . . . . . . . .";
`;


const Options = styled(Container)`
  grid-area: o;
`;


function App() {
  return (
    <BackgroundContainer>
      <NavDiv>
        <Text size={"35px"}>osu! Rhythm practice</Text>
      </NavDiv>
      <ContentContainer>
        <Options />
      </ContentContainer>
      <FooterDiv>

      </FooterDiv>
    </BackgroundContainer>
  );
}

export default App;
