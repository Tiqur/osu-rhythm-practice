import styled from 'styled-components';
import FlexDiv from './FlexDiv';
import Container from './Container';

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

export { Keys, Key };