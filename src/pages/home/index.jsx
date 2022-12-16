import Header from "../../components/header"
import Slides from "../../components/slides"
import { HomePageContainer } from "./style"

const HomePage = () => {
    
    return (
        <HomePageContainer>
            <Header selected={1}/>
            <Slides />
        </HomePageContainer>
    )
}

export default HomePage