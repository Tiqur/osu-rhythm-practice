import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FlexDiv from './components/FlexDiv';
import Text from './components/Text';
import Container from './components/Container';
import { Table, TableRow } from './components/Table';
import PlaybackBar from './components/PlaybackBar';
import FooterDiv from './components/Footer';
import NavDiv from './components/NavDiv';
import LineGraph from './components/LineGraph';


// Main page
const BackgroundContainer = styled(FlexDiv)`
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: grid;
  width: auto;
  height: 100%;
  gap: 50px;
  margin: 0 50px 35px 50px;
  grid-template-columns: 250px 1fr 105px;
  grid-template-rows: 300px 300px;
  height: 700px;
  grid-template-areas: 
  "o g g"
  "c c k";
`;

// Keys
const Keys = styled(FlexDiv)`
  flex-direction: column;
  justify-content: space-between;
  margin-left: -35px;
  grid-area: k;
`;

const Key = styled(Container)`
  background-color: ${props => props.keyDown ? "#667293" : "#4e5874"};
  transform: ${props => props.keyDown ? "scale(1.04)" : "scale(1)"};
  color: ${props => props.keyDown ? "#26304F" : "#7783a3"};
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  font-size: 3em;
  width: 140px;
  height: 140px;
  transition: all .05s ease-in-out;
`



// Options container
const Options = styled(Container)`
  grid-area: o;
`;

// Game container
const Canvas = styled(Container)`
  grid-area: c;
`;






function App() {
  let mapInProgress = false;
  let startTime;



  // Keys
  const key1 = "x";
  const key2 = "z";
  let keyDown = [false, false];
  const [clicks, setClicks] = useState([]);
  const [key1State, setKey1State] = useState(0);
  const [key2State, setKey2State] = useState(0);
  const [keyIsDown1, setKeyDown1] = useState(0);
  const [keyIsDown2, setKeyDown2] = useState(0);

  function keyPress(ekey, down) {
    if ((ekey == key1 || ekey == key2) && mapInProgress) {
      setClicks(arr => [...arr, {"key": ekey, "pressed": down, "time": Date.now() - startTime}]);
      if (ekey == key1) {
        if (down) setKey1State(ks => ks + 1);
        setKeyDown1(down)
      } else {
        if (down) setKey2State(ks => ks + 1);
        setKeyDown2(down)
      }
   } else if (ekey == " " && down) {
     // Start
     console.log(!mapInProgress ? "Start" : "Stop")
     startTime = Date.now();
     mapInProgress = !mapInProgress;
   }
    return down;
  }

  function getIndex(key) {
    if (key == key1) {
      return 0;
    } else if (key == key2) {
      return 1;
    }
  }
  

  const keyPressHandle = (e) => {
    let id = getIndex(e.key);
    if (e.type == "keydown") {
      if (keyDown[id]) return;
      keyDown[id] = keyPress(e.key.toLowerCase(), true);
    } else {
      keyDown[id] = keyPress(e.key.toLowerCase(), false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPressHandle, false);
    document.addEventListener("keyup", keyPressHandle, false);

    return () => {
      document.removeEventListener("keydown", keyPressHandle, false);
      document.removeEventListener("keyup", keyPressHandle, false);
    };
  }, []);


  return (
    <BackgroundContainer>
      <NavDiv>
        <Text size={"35px"}>osu! Rhythm practice</Text>
      </NavDiv>


      <ContentContainer>
        <Options />
        <LineGraph clicks={clicks}/>
        <Canvas />

        <Keys>
          <Key id="key1" keyDown={keyIsDown1}>{key1State}</Key>
          <Key id="key2" keyDown={keyIsDown2}>{key2State}</Key>
        </Keys>
      </ContentContainer>

      <PlaybackBar />

      <Table>
        <TableRow></TableRow>
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
