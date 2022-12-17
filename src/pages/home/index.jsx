import Header from "../../components/header"
import Slides from "../../components/slides"
import { HomePageContainer, Paragraphy, Title } from "./style"

const HomePage = () => {

    return (
        <HomePageContainer>
            <Header selected={1} />
            <Slides />
            <div className="description">
                <section>
                    <Title>O que é  furo humanizado?</Title>
                    <Paragraphy>
                        O furo de orelha humanizado é uma técnica que combina diversas ações para um procedimento sem traumas para o recém-nascido. São utilizadas técnicas de acupuntura e pomada anestésica para garantir um procedimento seguro e no tempo da sua bebê, além disso, os brincos devem ser esterilizados e antialérgicos.
                    </Paragraphy>
                </section>
                <Title>Diferença entre:</Title>
            </div>
        </HomePageContainer>
    )
}

export default HomePage