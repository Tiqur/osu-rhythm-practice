import styled from 'styled-components';

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
  "k c c";
`;


export default ContentContainer;