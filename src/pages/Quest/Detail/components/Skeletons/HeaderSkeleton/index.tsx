import React from 'react';
import { Skeleton } from 'src/shared';

const HeaderSkeleton: React.FC = () => {
    return (
        <div>
            <Skeleton height={5} width={80} />
            <Skeleton />
            <Skeleton height={10} width={100} />
        </div>
    );
};

export default HeaderSkeleton;
