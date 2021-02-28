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
  margin-bottom: 30px;
`;

const FooterDiv = styled(FlexDiv)`
  justify-content: center;
  align-items: center;
  background-color: #192035;
  width: 100%;
  height: 50px;
`;

const ContentContainer = styled.div`
  display: grid;
  width: auto;
  height: 100%;
  gap: 50px;
  margin: 0px 50px 0px 50px;
  grid-template-columns: 250px 1fr 105px;
  grid-template-rows: 300px 300px 1px;
  height: 700px;
  grid-template-areas: 
  "o g g"
  "c c k";
`;


// Options container
const Options = styled(Container)`
  grid-area: o;
`;


// Graph container
const Graph = styled(Container)`
  grid-area: g;
`;

// Game container
const Canvas = styled(Container)`
  grid-area: c;
`;


// Keys
const Keys = styled(FlexDiv)`
  flex-direction: column;
  justify-content: space-between;
  margin-left: -35px;
  grid-area: k;
`;

const Key = styled(Container)`
  background-color: #667293;
  width: 140px;
  height: 140px;
`


// Scores
const Table = styled(FlexDiv)`
  display: block;
  flex-direction: column;
  overflow: scroll;;
  overflow-x: hidden;
  align-items: center;
  margin: 0px 50px 0px 50px;
  margin-top: 40px;
  min-height: 300px;
  grid-area: s;
`;

const TableRow = styled(FlexDiv)`
  background: #26304F;
  margin-bottom: 6px;
  border-radius: 9px;
  height: 46px;
  width: 100%;
`;




// Playback bar
const PlaybackBar = styled.input.attrs({
  type: 'range',
})`
  margin: 0px 50px 0px 50px;
  grid-area: p;
  margin-top: -10px;
`;



function App() {
  return (
    <BackgroundContainer>
      <NavDiv>
        <Text size={"35px"}>osu! Rhythm practice</Text>
      </NavDiv>


      <ContentContainer>
        <Options />
        <Graph />
        <Canvas />

        <Keys>
          <Key />
          <Key />
        </Keys>
      </ContentContainer>

      <PlaybackBar></PlaybackBar>

      <Table>
        <TableRow></TableRow>
        <TableRow></TableRow>
        <TableRow></TableRow>
        <TableRow></TableRow>
        <TableRow></TableRow>
        <TableRow></TableRow>
        <TableRow></TableRow>
        <TableRow></TableRow>
      </Table>


      <FooterDiv>
      </FooterDiv>
    </BackgroundContainer>
  );
}

export default App;
