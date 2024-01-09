import styled from "styled-components"

const Wrapper = styled.footer`
width: 100vw;
height: 70px;
background-color: var(--darkgrey);
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;


const Footer = () => {
    return (
        <Wrapper>
            JIWONEE {'<'}3
        </Wrapper>
    )
}

export default Footer