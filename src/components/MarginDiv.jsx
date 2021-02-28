import styled from 'styled-components';
import FlexDiv from './FlexDiv';

const MarginDiv = styled(FlexDiv)`
  justify-content: center;
  align-items: center;
  background-color: #192035;
  width: 100%;
  height: ${props => props.nav ? "80px" : "50px"};
  margin-bottom: ${props => props.nav ? "30px" : ""};
`;

export default MarginDiv;

