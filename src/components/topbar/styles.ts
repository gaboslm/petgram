import styled, { css } from "styled-components";

export const Topbar = styled.section`
    height: 158px;
`

export const Container = styled.div`
    transition: all 0.3s ease-in-out;
    background-color: #fff;
    ${props => props.fixed && css`
    background-color: #fff;
        position: fixed;
        top: 0;
        z-index: 1;
        transition: transform .3s ease-in;
        width: 500px;
        height: 50px;
    `}
    /* &.fixed {
    } */
`