import styled from "styled-components";
import {Card} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

export const LoginStyled = styled(Card)`
width: 360px;
height: 640px;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
grow:1;
`

export const PageTitle = styled.p`
  font-weight: bold;
`

export const FormStyled = styled.form`
  width: 360px;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`

export const StyledBtnCadastro = styled(Button)`
font-weight: bold;
color: black;
margin: 10px;
:hover{
    background: none;
}
`

export const StyledTextField = styled(TextField)`
  padding: 1px;
  width: 328px;
  height: 56px;
  border-radius: 2px;
  margin: 10px;
`
