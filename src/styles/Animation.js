import { keyframes } from "styled-components"

export const scaleInWithOrigin = origin => keyframes`
  from { 
    transform: translate(0, 0) scale(0.5);
    left: ${origin.left}px;
    top:  ${origin.top}px;
  }
  to {
    transform: translate(-50%, -50%) scale(1);
    left: 50%;
    top:  50%;
  }
`
export const scaleOutWithOrigin = origin => keyframes`
  from { 
    transform: translate(-50%, -50%) scale(1);
    left: 50%;
    top:  50%;
  }
  to {
    transform: translate(0, 0) scale(0);
    left: ${origin.left}px;
    top:  ${origin.top}px;
    opacity: 0;
  }
`

export const scaleInCenter = keyframes`
  from { 
    transform: translate(-50%, -50%) scale(0.5);
    left: 50%;
    top: 50%;
  }
  to {    
    transform: translate(-50%, -50%) scale(1);
    left: 50%;
    top: 50%;
  }
`
export const scaleOutCenter = keyframes`
  from { 
    transform: translate(-50%, -50%) scale(1);
    left: 50%;
    top: 50%;
  }
  to {
    transform: translate(-50%, -50%) scale(0);
    left: 50%;
    top: 50%;
    opacity: 0;
  }
`

export const scaleIn = keyframes`
  from { 
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`
export const scaleOut = keyframes`
  from { 
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`
