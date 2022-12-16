import { createGlobalStyle } from "styled-components";
import SarabunTtf from '../assets/fonts/Sarabun-Regular.ttf'

const FontStyle = createGlobalStyle`
    @font-face {
        font-family: 'Sarabun';
        src: url(${SarabunTtf}) format('ttf');
    }
`

export default FontStyle
