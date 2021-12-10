import styled from "styled-components"

//#region
const ButtonComponent = styled.button`
  display: block;
  text-align: center;
  background-color: var(--primary-color);
  color: white;
  height: 50px;
  width: 240px;
  box-shadow: var(--button-shadow);
  font-size: 16px;
  line-height: 48px;
  border-radius: 48px;
  border: 1px solid transparent;
  transition: all 200ms var(--bounce);
  cursor: pointer;
  user-select: none;  

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:hover:not([disabled]) {    
    border-color: var(--primary-color);
    background-color: white;
    color: var(--primary-color);
    transform: scale(1.1);
  }
`
//#endregion

export const ButtonNoStyle = styled.button`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
`

export const Button = ({ onClick, className, children, disabled, ...rest }) =>
  <ButtonComponent disabled={disabled} onClick={onClick} className={className} {...rest}>{children}</ButtonComponent>

export const CloseButton = styled(Button)`
  position: absolute;
  top: -.5em;
  right: -.5em;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  line-height: 2.25em;
  font-size: 2rem;
  z-index: 10;
  box-shadow: var(--button-shadow);
  
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`

export default Button