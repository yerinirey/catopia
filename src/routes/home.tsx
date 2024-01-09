import { useEffect, useState } from "react";
import styled from "styled-components";
import CatRandImg from "../randomPic";
// import Getapi from "../getapi";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 70px;
    justify-content: center;
    align-items: center;
    
`
const Load = styled.div`
    font-size: 60px;
    font-weight: 600;
    `;
const Header = styled.div`
font-size: 72px;
font-weight: 600;
margin-top: 50px;
`;

const Description = styled.div`
font-size: 32px;
`;

const ImgBox = styled.div`
  height: 400px;
`;

const RandomImg = styled.img`
height: 100%;
`;

const API_KEY =
 "live_PaYgmQfEgScuaaCTljYR7iktbxPc6M8ZhaBFHtIe99OL8NceMmxzzFlwt41edxrZ";

export default function Home() {
    
    const [ranPic, setRanPic] = useState<CatRandImg[]>([]);
    const [loading, setLoading] = useState(true);
    const getRand = async () => {
        await(
            await fetch(`https://api.thecatapi.com/v1/images/search?limit=4&api_key=${API_KEY}`)
      ).json().then(json => setRanPic(json));
      setLoading(false);
    };


    useEffect(() => {
      getRand();
    }, []);
    return loading ? (
      <Wrapper>
        <Load>Loading ...</Load>
      </Wrapper>
    ) : (
      <Wrapper>
        <Header>Hello There!</Header>
        <Description>Love Jiwonee {"<"}3 hehe</Description>
        <ImgBox>
        {ranPic.map((cat) => (
        <RandomImg src={cat.url} />))}
        </ImgBox>
      </Wrapper>
    );
}