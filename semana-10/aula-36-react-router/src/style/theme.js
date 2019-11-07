import { createMuiTheme, Card } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import styled from 'styled-components';


export default createMuiTheme({
  palette: {
    primary: blue
  }


});

export const DivStyled = styled.div`
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
`
export const Div1 = styled.div`
  display:flex;
  flex: 0;
`
export  const Div2 = styled.div`
  display:flex;
  flex: 1;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

export  const CardStyled = styled(Card)`
  width: 400px;
  display:flex;
  flex-direction:column;
  padding:10px;
`