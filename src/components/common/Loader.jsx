import styled from 'styled-components';
import { FaPizzaSlice } from 'react-icons/fa'

const Loader = styled(FaPizzaSlice)`
font-size: 6rem;
  animation-name: rotate;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;

  @keyframes rotate {
    0% { transform: scale(1); }
    50% { transform: scale(2); }
    100% { transform: scale(1); }
  }
`

export default Loader;