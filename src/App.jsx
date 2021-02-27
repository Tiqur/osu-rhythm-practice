import styled from 'styled-components';
import FlexDiv from './components/FlexDiv';
import Text from './components/Text';

// Main page
const BackgroundContainer = styled(FlexDiv)`
  background-color: #192035;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;


function App() {
  return (
    <BackgroundContainer>
      <Text size={"50px"}>osu! Rhythm practice</Text>
    </BackgroundContainer>
  );
}

export default App;
