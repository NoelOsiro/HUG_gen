/// <reference types="react-scripts" />
declare module 'react-parallax' {
    import { ReactNode } from 'react';

    interface ParallaxProps {
        bgImage: string;
        bgImageAlt?: string;
        strength?: number;
        renderLayer?: (percentage: number) => ReactNode;
        children?: ReactNode;
        className?: string;
        style?: React.CSSProperties;
    }

    export const Parallax: React.FC<ParallaxProps>;
}
