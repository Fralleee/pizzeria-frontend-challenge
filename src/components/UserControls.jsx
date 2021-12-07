import styled from "styled-components"
import { useEffect, useRef, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"
import { FcPortraitMode, FcExpand, FcCollapse } from "react-icons/fc"
import { scaleIn } from "styles/Animation"
import ShoppingCart from "components/ShoppingCart"

//#region styled
const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 240px;
  font-size: 1.25rem;
  z-index: 999;
`

const Header = styled.div`
  position: fixed;
  cursor: pointer;
  padding: 2rem 1rem 1rem 1rem;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  user-select: none;

  svg {
    margin: 0 .5rem;
  }
`

const Options = styled.ul`
  position: fixed;
  top: 50px;
  width: 240px;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: auto;
  min-height: 100px;
  max-width: 300px;
  background: white;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 12px 24px 0px;
  font-size: 1rem;
  list-style: none;
  padding: .5rem 0;
  z-index: 1;
  animation: ${scaleIn} 200ms cubic-bezier(0.34, 1.56, 0.64, 1) 0ms forwards;
  
  @media (max-width: 500px) {
    margin: .5rem 0;
    width: 100%;
    max-width: none;
  }
  
  & button {    
    font-size: 1rem;
  }
`

const Option = styled.li`
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

const UserControls = ({ auth }) => {
  const ref = useRef()
  const [user] = useAuthState(auth)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = e => open && !ref.current?.contains(e.target) && setOpen(false)
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => document.removeEventListener("mousedown", checkIfClickedOutside)
  }, [open])

  return (
    <Container ref={ref}>
      <Header onClick={() => setOpen(!open)}>
        <FcPortraitMode />
        {user.displayName}
        {open ? <FcCollapse /> : <FcExpand />}
      </Header>

      {open && <Options>
        <Option onClick={() => console.log("TODO")}>My orders</Option>
        <Option onClick={() => signOut(auth)}>Sign-out</Option>
      </Options>}
      <ShoppingCart />
    </Container>
  )
}

export default UserControls