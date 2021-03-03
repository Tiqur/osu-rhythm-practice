import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Text from './components/Text';
import Container from './components/Container';
import { Table, TableRow } from './components/Table';
import PlaybackBar from './components/PlaybackBar';
import FooterDiv from './components/Footer';
import NavDiv from './components/NavDiv';
import { Keys, Key } from './components/Keys';
import LineGraph from './components/LineGraph';
import ContentContainer from './components/ContentContainer';
import BackgroundContainer from './components/BackgroundContainer';
import { useGraphData } from './contexts/GraphData';
import CanvasUtils from './utils/canvas';
import DrawUtils from './utils/draw';



// Options container
const Options = styled(Container)`
  grid-area: o;
`;

// Canvas container
const Canvas = styled.canvas`
  border-radius: 9px;
  grid-area: c;
`;

const App = () => {
  const canvasRef = useRef(null);
  let mapInProgress = false;

  // Keys
  const key1 = "q";
  const key2 = "w";
  let keyDown = [false, false];
  const {graphData, setGraphData} = useGraphData();
  const [key1State, setKey1State] = useState(0);
  const [key2State, setKey2State] = useState(0);
  const [keyIsDown1, setKeyDown1] = useState(0);
  const [keyIsDown2, setKeyDown2] = useState(0);



  const updateData = (ekey, down) => {
    // Set data
    setGraphData(gd => {
      const updatedClicks = [...gd.clicks, {"key": ekey, "pressed": down, "time": Date.now()}];
      const downClicks = updatedClicks.filter(c => c.pressed);
      if (downClicks.length == 0) return(gd);
      const updatedAvgBpm = [...graphData.avg_bpm, Math.round((((downClicks.length / (downClicks[downClicks.length-1].time - gd.startTime) * 60000) / 4) * 100) / 100)];

      return ({
        startTime: gd.startTime,
        clicks: updatedClicks,
        avg_accuracy: [],
        avg_unstable_rate: [],
        avg_bpm: updatedAvgBpm 
      })
    })
  }

  const keyPress = (ekey, down) => {
    if ((ekey == key1 || ekey == key2) && mapInProgress) {

      // Update graph data
      updateData(ekey, down);

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
     mapInProgress = !mapInProgress;

     if (mapInProgress) {
      // reset data
      setGraphData({
        startTime: Date.now(),
        clicks: [],
        avg_accuracy: [],
        avg_unstable_rate: [],
        avg_bpm: []
      })
     }
   }
    return down;
  }

  const getIndex = (key) => {
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
    // Initialize canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const Utils = new CanvasUtils(canvas, ctx);
    const Draw = new DrawUtils(canvas, ctx);


    let gameTime = -1000;
    const centerY = canvas.height / 2;
    const radius = 90;
    // change to bpm later
    const secsBetweenEachObject = 100;
    const AR = 9;


    const hitCircles = [];

    class HitCircle {
      constructor(time) {
        this.time = time;
      }

      draw() {
        Draw.hitCircle(this.time, centerY, radius, AR, gameTime)
      }
    }

    // create objects
    for (let i = 0; i < 100; i++) {
      const hc = new HitCircle((i+1)*secsBetweenEachObject);
      hitCircles.push(hc);
    }



    const draw = () => {
      if (!mapInProgress) return;
      // clear objects
      Utils.drawCanvasBackground();

      // draw objects
      hitCircles.forEach(o => {
        // draw if within canvas
        if (o.time-gameTime > 0 && o.time-gameTime  < canvas.width + radius) {
          o.draw();
        }
      })

      gameTime += 2; // draws every 10ms
    }

    // game loop
    setInterval(draw, 2);

  

    // Event listeners
    document.addEventListener("keydown", keyPressHandle, false);
    document.addEventListener("keyup", keyPressHandle, false);
    window.addEventListener("resize", Utils.winResizeHandle);

    return () => {
      document.removeEventListener("keydown", keyPressHandle, false);
      document.removeEventListener("keyup", keyPressHandle, false);
      window.removeEventListener("resize", Utils.winResizeHandle);
    };
  }, []);

  return (
    <BackgroundContainer>
      <NavDiv>
        <Text size={"35px"}>osu! Rhythm practice</Text>
      </NavDiv>


      <ContentContainer>
        <Options />
        <LineGraph />
        <Canvas ref={canvasRef} />

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
