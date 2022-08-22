import { css, keyframes } from "styled-components"

interface FadeInProps {
    time?: string
    type?: string
}

export function FadeIn({ time, type }: FadeInProps = { time: '1s', type: 'ease' }): any {
    const FadeInKeyframes = keyframes`
        from {
            filter: blur(5px);
            opacity: 0;
        }
        to {
            filter: blur(0px);
            opacity: 1;
        }
    `
    return css`animation: ${FadeInKeyframes} ${time} ${type};`
}