import styled from 'styled-components';
import FlexDiv from './FlexDiv';


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
`;

export default { Keys, Key };