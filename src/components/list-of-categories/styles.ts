import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    gap: 10px;
    overflow: scroll;
    width: 100%;
    scrollbar-width: none;
    margin-bottom: 1rem;
    padding: 0 10px;
    ::-webkit-scrollbar {
        display: none;
    }
`

export const Item = styled.li`
    /* padding: 0 8px; */
`