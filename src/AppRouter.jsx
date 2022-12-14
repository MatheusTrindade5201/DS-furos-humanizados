import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import HomePage from "./pages/home"
import GlobalStyle from "./style/GlobalStyle"
import { theme } from "./style/Theme"

const AppRouter = ()=> {
    return(
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomePage />} path={'/'} />
                </Routes>
                <GlobalStyle />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default AppRouter