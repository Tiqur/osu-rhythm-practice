import styled from 'styled-components';

// Playback bar
const PlaybackBar = styled.input.attrs({
    type: 'range',
  })`
    margin: 0px 50px 0px 50px;
    grid-area: p;
  `;

export default PlaybackBar;