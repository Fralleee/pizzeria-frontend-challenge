import styled from "styled-components"
import { useEffect, useRef, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut, getAuth } from "firebase/auth"
import { FcPortraitMode, FcExpand, FcCollapse } from "react-icons/fc"
import { scaleIn } from "styles/Animation"
import ShoppingCart from "components/ShoppingCart"
import Modal from "components/common/Modal"
import { ButtonNoStyle } from "components/common/Button"
import OrderHistory from "./orderHistory/OrderHistory"

//#region styled
const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 75px;
  font-size: 1.25rem;
  background-color: rgba(255,255,255,.9);
  z-index: 999;
`
const Header = styled(ButtonNoStyle)`  
  position: absolute;
  right: 0;
  padding: 2rem 1rem 1rem 1rem;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  user-select: none;
  transition: all 200ms var(--bounce);

  svg {
    margin: 0 .5rem;
  }

  &:hover:not([disabled]) {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.85) !important;
  }
`

const Options = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 1rem;
  width: 240px;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: auto;
  min-height: 100px;
  max-width: 300px;
  background: white;
  box-shadow: var(--button-shadow);
  font-size: 1rem;
  list-style: none;
  padding: .5rem 0;
  z-index: 1;
  animation: ${scaleIn} 200ms var(--bounce) 0ms forwards;
  
  @media (max-width: 500px) {
    right: 0;
    width: 100%;
    max-width: none;
  }
  
  & button {    
    font-size: 1rem;
  }
`

const Option = styled(ButtonNoStyle)`   
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 50px;
  user-select: none;
  cursor: pointer;  

  &:hover {
    background-color: rgb(250, 250, 250);
  }
`
//#endregion

const UserControls = () => {
  const auth = getAuth()
  const ref = useRef()
  const [user] = useAuthState(auth)
  const [open, setOpen] = useState(false)
  const [openHistory, setOpenHistory] = useState(false)

  const openModal = () => {
    setOpenHistory(true)
    setOpen(false)
  }

  const closeModal = () => setOpenHistory(false)

  useEffect(() => {
    const closeOnEscape = (e) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", closeOnEscape)
    const checkIfClickedOutside = e => open && !ref.current?.contains(e.target) && setOpen(false)
    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [open])

  return (
    <>
      <Container ref={ref}>
        <Header tabIndex={0} onClick={() => setOpen(!open)}>
          <FcPortraitMode />
          {user.displayName}
          {open ? <FcCollapse /> : <FcExpand />}
        </Header>

        {open && <Options>
          <Option tabIndex={0} onClick={openModal}>My orders</Option>
          <Option tabIndex={0} onClick={() => signOut(auth)}>Sign-out</Option>
        </Options>}
        <ShoppingCart />
      </Container>
      <Modal isOpen={openHistory} close={closeModal}><OrderHistory close={closeModal} /></Modal>
    </>
  )
}

export default UserControls