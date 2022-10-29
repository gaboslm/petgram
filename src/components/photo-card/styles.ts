import styled from "styled-components";
import { FadeIn, Liked } from "../../styles/animation";


export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
    .interaction {
        height: 40px;
        width: 40px;
        position: absolute;
        top: 40%;
        left: 40%;
        ${Liked({ time: '2s', type: 'ease-in' })}
    }
`

export const Img = styled.img`
    ${FadeIn()};
    box-shadow: 0 10px 14px rgba(0 ,0 ,0 , .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    cursor:'pointer';
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding-top: 8px;
    color: black;
`

export const Article = styled.article`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 5px;
    margin-bottom: 1rem;
    & svg {
      margin: 4px  
    }
`