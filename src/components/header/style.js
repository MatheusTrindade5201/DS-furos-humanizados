import styled from "styled-components";
import LogoDesktop from '../../assets/images/Logo-Desktop.svg'
import LogoMobile from '../../assets/images/Logo-mobile.svg'

export const HeaderWrapper = styled.header`
    padding: 20px;
    box-shadow: ${props => props.theme.colors.shadow};
    display:flex;
    align-items:center;
    justify-content: space-between;
    position: relative;

    @media screen and (min-width: 900px) {
        justify-content: flex-start;
        gap: 25vw
    }
`

export const Logo = styled.span`
    background-image: url(${LogoMobile});
    background-repeat: no-repeat;
    display: inline-block;
    width: 70px;
    height: 70px;

    @media screen and (min-width: 700px){
        background-image: url(${LogoDesktop});
        width: 172px;
        height: 70px;
    }
`

export const MobileNav = styled.nav`
    transform: ${({open}) => open === false ? 'translate(-500%)' : 'translate(0)'};
    position: absolute;
    top: 110px;
    margin: 2rem 0;
    width: calc(100vw - 40px);
    padding: 1rem;
    box-shadow: ${props => props.theme.colors.shadow};
    box-sizing: border-box;
    border-radius: 8px;
    background-color: #ffffff;
    transition: .25s ease-in-out;

    ul{
        display:flex;
        flex-direction: column;
        gap: 2rem;
    }
    

    ul li{
        list-style: none;
        width: fit-content;
    }

    ul li:nth-child(${({selected}) => selected})::before{
        content:'';
        display: inline-block;
        width: 100px;
        height: 4px;
        position: relative;
        top: 30px;
        width: 100%;
        background-color: ${props => props.theme.colors.secondary}
    }

    @media screen and (min-width: 900px) {
        display: none
    }
`

export const DesktopNav = styled.nav`
    display: none;

    @media screen and (min-width: 900px){
        display: inline-block;

        ul{
            display:flex;
            gap: 2rem;
            align-items: center;
        }

        ul li:nth-child(${({selected}) => selected})::before{
        content:'';
        display: inline-block;
        position: relative;
        top: 20px;
        width: 100%;
        height: 4px;
        background-color: ${props => props.theme.colors.secondary};
    }

        ul li{
            list-style: none;
            line-height: 0
        }
        
    }
`