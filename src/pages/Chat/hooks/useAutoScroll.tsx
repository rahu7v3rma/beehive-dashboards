import { useEffect, useRef } from 'react';
import { MessageSchema } from 'src/types/chat';

export const useAutoScroll = (
    ref: React.RefObject<HTMLElement>,
    whenChanged: MessageSchema[]
) => {
    const mounted = useRef(false);

    useEffect(() => {
        ref.current?.scrollTo({
            top: ref.current?.scrollHeight,
            left: 0,
            behavior: mounted.current ? 'smooth' : 'auto'
        });
        return () => {
            mounted.current = true;
        };
    }, [whenChanged, mounted, ref]);

    return null;
};
