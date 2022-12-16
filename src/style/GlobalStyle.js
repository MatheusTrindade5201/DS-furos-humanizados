import { createGlobalStyle } from "styled-components";
import FontStyle from "./FontsStyle";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0
    }

    body{
        background-color: ${props => props.theme.colors.primary};
        font-family: 'Sarabun', sans-serif
    }
`

export default GlobalStyle