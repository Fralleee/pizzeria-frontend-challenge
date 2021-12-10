import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { IoCloseSharp } from "react-icons/io5"
import { CloseButton } from "components/common/Button"
import { scaleInCenter, scaleInWithOrigin, scaleOutCenter, scaleOutWithOrigin } from "styles/Animation"

//#region styled
const ModalContainer = styled.div`
  position: fixed;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  animation: ${props => props.origin ? scaleInWithOrigin(props.origin) : scaleInCenter} ${props => props.delay}ms var(--bounce) 0ms forwards;

  &.closing {
    animation: ${props => props.origin ? scaleOutWithOrigin(props.origin) : scaleOutCenter} ${props => props.delay * 0.5}ms ease-in 0ms forwards;
  }
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

const Modal = ({ isOpen, delay = 200, close, origin, children }) => {
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      close()
      setIsClosing(false)
    }, delay)
  }

  useEffect(() => {
    const closeOnEscape = (e) => e.key === "Escape" && handleClose()
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  })

  return ReactDOM.createPortal(isOpen ?
    <>
      <Overlay tabIndex={0} onClick={handleClose} />
      <ModalContainer className={isClosing ? "closing" : ""} delay={delay} origin={origin}>
        <CloseButton tabIndex={0} onClick={handleClose}><IoCloseSharp /></CloseButton>
        {children}
      </ModalContainer>
    </> : null,
    document.getElementById("modal-root")
  )
}

export default Modal