import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { scaleInWithOrigin } from "styles/Animation"

//#region styled
const ModalContainer = styled.div`
  position: fixed;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  animation: ${props => scaleInWithOrigin(props.origin)} 300ms cubic-bezier(0.34, 1.56, 0.64, 1) 0ms forwards;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
  opacity: 0.5;
  z-index: 99999;
  cursor: pointer;
`
//#endregion

const Modal = ({ close, origin, children }) => {
  return ReactDOM.createPortal(
    <>
      <Overlay onClick={close} />
      <ModalContainer origin={origin}>{children}</ModalContainer>
    </>,
    document.getElementById("modal-root")
  )
}

export default Modal