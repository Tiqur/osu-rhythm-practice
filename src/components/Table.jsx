import styled from 'styled-components';
import FlexDiv from './FlexDiv';

// Scores
const Table = styled(FlexDiv)`
  display: block;
  flex-direction: column;
  overflow: scroll;;
  overflow-x: hidden;
  align-items: center;
  margin: 0px 50px 0px 50px;
  margin-top: 35px;
  min-height: 300px;
  grid-area: s;

  &::-webkit-scrollbar {
    width: 18px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #425FB0;
    border-radius: 9px;
  }
`;

const TableRow = styled(FlexDiv)`
  background: #26304F;
  margin: 0 10px 6px 0;
  border-radius: 9px;
  height: 46px;

  &:hover {
    background: #2c3757;
    transition: all .2s ease-in-out;
    transform: scale(1.004);
    cursor: pointer;
  }
`;

export { Table, TableRow };
