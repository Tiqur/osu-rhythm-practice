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
  grid-template-rows: 300px 300px;
  grid-template-areas: 
  "o g g"
  "c c k"
  "p p p"
  "s s s";
`;


// Options container
const Options = styled(Container)`
  grid-area: o;
  width: 250px;
`;


// Graph container
const Graph = styled(Container)`
  grid-area: g;
  width: 100%;
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


// Table
const ScoreTable = styled.table`
  border-collapse: separate; 
  border-spacing:0 10px;
  margin-top: -20px;
  grid-area: s;
`;

const RowElement = styled.td`
  padding-left: 20px;
  background-color: #26304F;

  &:first-child {
    border-radius: 8px 0 0 8px;
  }  
  
  &:last-child {
    border-radius: 0 8px 8px 0;
  }
`;


// Playback bar
const PlaybackBar = styled.input.attrs({
  type: 'range',
})`
  grid-area: p;
  margin-top: -10px;
`;


const ScoreRow = () => {
  return (
    <tr height="46px">
        <RowElement></RowElement>
        <RowElement></RowElement>
    </tr>
  )
}



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

        <PlaybackBar></PlaybackBar>

        <ScoreTable>
          <ScoreRow />
          <ScoreRow />
          <ScoreRow />
          <ScoreRow />
          <ScoreRow />
          <ScoreRow />
          <ScoreRow />
          <ScoreRow />
        </ScoreTable>
      </ContentContainer>


      <FooterDiv>
      </FooterDiv>
    </BackgroundContainer>
  );
}

export default App;
