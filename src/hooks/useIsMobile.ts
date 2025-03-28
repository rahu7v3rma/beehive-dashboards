import { useLayoutEffect, useState } from 'react';
import debounce from 'lodash/debounce';

const useIsMobile = (breakpoint = 768): boolean => {
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const updateSize = (): void => {
            setIsMobile(window.innerWidth < breakpoint);
        };
        window.addEventListener('resize', debounce(updateSize, 250));
        return (): void => window.removeEventListener('resize', updateSize);
    }, [breakpoint]);

    return isMobile;
};

export default useIsMobile;
