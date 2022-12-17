import { CardWrapper } from "./style"

const Card = (props) => {
    return(
        <CardWrapper>
            <h3>{props.title}</h3>
            <ul>
                {props.topics.map(topic => <li key={topic}>{topic}</li>)} 
            </ul>
        </CardWrapper>
    )
}

export default Card