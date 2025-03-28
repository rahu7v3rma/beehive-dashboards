import React from 'react';
import { Skeleton } from 'src/shared';

const DescriptionSectionSkeleton: React.FC = () => {
    return (
        <div style={{ marginTop: '30px' }}>
            <Skeleton height={200} width="100%" />
        </div>
    );
};

export default DescriptionSectionSkeleton;
