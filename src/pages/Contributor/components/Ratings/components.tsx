import { FC } from 'react';

export const StarIconGradient: FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={0} height={0}>
        <defs>
            <svg height={0} width={0}>
                <defs>
                    <linearGradient
                        id="filledStar"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                        gradientTransform="rotate(15.23)"
                    >
                        <stop offset="0%" stopColor="#FABB18" />
                        <stop offset="100%" stopColor="#C48E02" />
                    </linearGradient>
                </defs>
            </svg>
        </defs>
    </svg>
);
