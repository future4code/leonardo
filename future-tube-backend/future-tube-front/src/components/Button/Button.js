import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const StyledBtn = styled(Button)`
background-color: #e86e5a;
font-weight: bold;
color: black;
width: 90%;
height: 42px;
border-radius: 2px;
margin: 10px;
:hover{
    background-color: #d06351;
}
:active{
    background-color: #e86e5a;
    box-shadow: 3px 3px #666;
    transform: translateY(3px);
}
`
