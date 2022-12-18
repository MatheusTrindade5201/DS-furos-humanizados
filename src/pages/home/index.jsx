import Card from "../../components/card"
import Header from "../../components/header"
import Slides from "../../components/slides"
import Whatsapp from "../../components/whatsapp"
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
                <section>
                    <Title>Diferença entre:</Title>
                    <section className="cards">
                        <Card 
                        title={'Furo Humanizado'} 
                        topics={['Procedimento humanizado respeitando o tempo do bebê','Procedimento feito na casa do bebê durante em torno de 1 hora', 'Brincos finos e antialérgicos']} />
                        <div className="x">
                            <div></div>
                            <div></div>
                        </div>
                        <Card 
                        title={'Furo de Farmácia'} 
                        topics={['A bebê fica assustada com o barulho da pistola','Você terá que se deslocar com a bebê', 'Brinco mais grosso, causando incômodo']} />
                    </section>
                </section>
            </div>
            <Whatsapp />
        </HomePageContainer>
    )
}

export default HomePage