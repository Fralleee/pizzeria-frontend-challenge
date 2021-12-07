import styled from "styled-components"

//#region
const ButtonComponent = styled.button`
  background-color: var(--primary-color);
  color: white;
  height: 50px;
  width: 240px;
  box-shadow: 0 0 1px 1px rgba(100, 100, 111, 0.2);
  font-size: 16px;
  line-height: 48px;
  border-radius: 48px;
  border: 1px solid transparent;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:hover::not(:disabled) {    
    border-color: var(--primary-color);
    background-color: white;
    color: var(--primary-color);
  }
`
//#endregion

export const Button = ({ onClick, className, children, disabled }) => <ButtonComponent disabled={disabled} onClick={onClick} className={className}>{children}</ButtonComponent>

export default Button