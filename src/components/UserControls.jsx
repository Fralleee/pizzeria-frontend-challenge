import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { FcPortraitMode, FcExpand, FcCollapse } from "react-icons/fc";

// #region styled
const Container = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  min-width: 240px;
  font-size: 1.25rem;
`

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  user-select: none;

  svg {
    margin: 0 .5rem;
  }
`

const Options = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  min-height: 100px;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 8%);
  font-size: 1rem;
  list-style: none;
  padding: .5rem 0;
  
  & button {    
    font-size: 1rem;
  }
`

const Option = styled.li`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 50px;

  &:hover {
    background-color: rgb(250, 250, 250);
  }
`
// #endregion

const UserControls = ({ auth }) => {
  const ref = useRef()
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    const checkIfClickedOutside = e => open && !ref.current?.contains(e.target) && setOpen(false);    
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => document.removeEventListener("mousedown", checkIfClickedOutside)
  }, [open])
  
  return (
    <Container onClick={() => setOpen(!open)} ref={ref}>
      <Header>
        <FcPortraitMode /> 
        {user.displayName}
        {open ? <FcCollapse /> : <FcExpand />}
      </Header>

      {open && <Options>
        <Option onClick={() => console.log('TODO')}>My orders</Option>
        <Option onClick={() => signOut(auth)}>Sign-out</Option>
      </Options>
}
    </Container>
  );
};

export default UserControls;