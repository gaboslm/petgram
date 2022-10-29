import { css, keyframes } from "styled-components"

interface Animation {
    time?: string
    type?: string
}

export function FadeIn({ time, type }: Animation = { time: '1s', type: 'ease' }): any {
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


export function Liked({ time, type }: Animation = { time: '1s', type: 'ease' }): any {
    const LikedKeyFrames = keyframes`
        0% {
            transform: scale(1);
        }
        5% {
            transform: scale(1.3);
        }

        10% {
            transform: scale(1.2);
        }
        99%{
            transform: scale(1.2);
            opacity: 1;
        }
        100% {
            transform: scale(1.2);
            opacity: 0;
        }
    `;

    return css`animation: ${LikedKeyFrames} ${time} ${type};`
}