import styled from "styled-components"
import CatInfo from "../catInfo";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
padding: 70px 16vw 200px 16vw;
color: var(--beige);
display: flex;
flex-direction: column;
align-items: center;
`;
const Header = styled.div`
padding: 50px 0;
font-size: 72px;
font-weight: 600;
`;
const HiddenBox = styled.div`
width: 100%;
height: 40px;
background-color: var(--lightgrey);
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0 20px;
`;
const CurrentBreed = styled.div``;
const Toggle = styled.div`
color: var(--darkgrey);
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
`;
const BreedBox = styled.div`
  width: 100%;
  height: 660px;
  background-color: var(--grey);
  border: 1px solid var(--darkgrey);

  :nth-child(8n + 1),
  :nth-child(8n + 2),
  :nth-child(8n + 3),
  :nth-child(8n + 4) {
    background-color: var(--lightgrey);
  }
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const BreedName = styled.div`
width: 100%;
padding: 10px 0;
border-right: 1px solid var(--grey);
font-weight: 500;
cursor: pointer;
`;

const Content = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: start;
`;
const Title = styled.div`
font-size: 40px;
font-weight: 600;
padding: 20px 0;
`;

const URLs = styled.div`
display: flex;
flex-direction: row;
gap: 14px;
font-size: 24px;
padding: 20px 0px;
`;
const URL = styled.a`
color: var(--beige);
text-decoration: none;
font-size: 16px;
align-self: end;
`;

const Image = styled.img`
  width: 50%;
  -webkit-box-reflect: below -2vw -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(transparent),
      color-stop(0.55, transparent),
      to(rgba(255, 255, 255, 0.25))
    );
`;
const Details = styled.div`
display: flex;
flex-direction: row;
text-align: start;
gap: 20px;

`;
const Description = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5em;
`;
const TextDetail = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;
const Character1 = styled.div`
width: 100%;
padding: 10px;
background-color: var(--beige);
color: var(--darkgrey);
border-radius:10px;
font-weight: 600;
text-align: center;
`;
const Character2 = styled.div`
  width: 100%;
  padding: 10px;
  background-color: var(--darkgrey);
  color: var(--beige);
  border-radius: 10px;
  font-weight: 600;
  text-align: center;
`;

export default function Breed() {
    const [data, setData] = useState<CatInfo[]>([]);
    const [toggle, setToggle] = useState(false);
    const [breed, setBreed] = useState("");
    const [curr, setCurr] = useState<CatInfo>();
    const [url, setUrl] = useState("");
    const onClick = () => {
        setToggle(t => !t);
    };
    const onSelect = (name: any) => {
        setBreed(name);
        const findBreed = data.find(cat => cat.name === name);
        setCurr(findBreed);
        console.log(breed);
        console.log(curr);
        // setUrl(`https://cdn2.thecatapi.com/images/${curr?.reference_image_id}.jpg`);
    };
    const getinfo = async () => {
      await (await fetch(`https://api.thecatapi.com/v1/breeds`))
        .json()
        .then((json) => setData(json));
    };
    
    useEffect(() => {
        getinfo();
    }, []);
    const getUrl = async () => {
      await setUrl(
        `https://cdn2.thecatapi.com/images/${curr?.reference_image_id}.jpg`
      );
    };
    useEffect(() => {
      getUrl();
    }, [curr]);
    return (
      <Wrapper>
        <Header>Every Breeds</Header>
        {!toggle ? (
          <HiddenBox>
            <CurrentBreed>Current: {breed}</CurrentBreed>
            <Toggle onClick={onClick}>Show More</Toggle>
          </HiddenBox>
        ) : (
          <BreedBox>
            {data.map((cat) => (
              <BreedName onClick={() => onSelect(cat.name)} key={cat.id}>
                {cat.name}
              </BreedName>
            ))}
            <Toggle
              style={{ backgroundColor: `var(--beige)` }}
              onClick={onClick}
            >
              Close Tab
            </Toggle>
          </BreedBox>
        )}
        {breed ? (
          <Content>
            <Title>{breed}</Title>
            <Details>
              {url ? <Image src={url} /> : null}
              <TextDetail>
                <Character1>From {curr?.origin}</Character1>
                <TextDetail style={{ flexDirection: "row" }}>
                  <Character2>Weight: {curr?.weight.metric} kg</Character2>
                  <Character2>Lifespan: {curr?.life_span} years</Character2>
                </TextDetail>
                <Character1>{curr?.temperament}</Character1>
                <Description>{curr?.description}</Description>
              </TextDetail>
            </Details>
            <URLs>
              more info..
              {curr?.wikipedia_url ? (
                <URL href={curr?.wikipedia_url}>Wiki Pedia</URL>
              ) : null}
              {curr?.cfa_url ? <URL href={curr.cfa_url}>CFA</URL> : null}
              {curr?.vetstreet_url ? (
                <URL href={curr?.vetstreet_url}>Vet Street</URL>
              ) : null}
              {curr?.vcahospitals_url ? (
                <URL href={curr?.vcahospitals_url}>Vca Hospitals</URL>
              ) : null}
            </URLs>
          </Content>
        ) : null}
      </Wrapper>
    );
}