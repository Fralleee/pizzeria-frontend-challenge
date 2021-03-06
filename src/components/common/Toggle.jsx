import { useState } from "react"
import styled from "styled-components"

//#region styled
const Container = styled.div`
  display: flex;
  padding: .5rem;
`

const Option = styled.button`
  width: 2em;
  height: 2em;
  margin: 0 .5em;
  background-color: #f0f0f0;
  color: #666;  
  font-size: 24px;
  border-radius: 5px;
  cursor: pointer;
  
  @media (max-width: 500px) {
    font-size: 16px;
  }
  
  &.active{
    background-color: var(--primary-color);
    color: white;  
  }
`
//#endregion

const Toggle = ({ items, defaultChecked, callback }) => {
  const defaultSelected = defaultChecked ? items.indexOf(defaultChecked) : -1
  const [selected, setSelected] = useState(defaultSelected)

  const handleClick = (e, i) => {
    setSelected(i)
    callback(e, i)
  }

  return (
    <Container>
      {items.map((item, i) =>
        <Option key={i} name={item} className={i === selected ? "active" : ""} tabIndex={0} onClick={e => handleClick(e, i)}>
          {item}
        </Option>
      )}
    </Container>
  )
}

export default Toggle
