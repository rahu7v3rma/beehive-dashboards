import { FunctionComponent } from 'react';
import { Container, Image, nameInitialStyle } from './styled';
import Label from '../Label';

export type Props = {
    size?: string;
    image?: string;
    name?: string;
    handleClick?: () => void;
    background?: string;
};

const Avatar: FunctionComponent<Props> = ({
    size = '40px',
    image = '',
    name = '',
    handleClick,
    background = ''
}: Props) => {
    return (
        <Container
            size={size}
            background={image === '' ? background : ''}
            onClick={handleClick}
        >
            {image !== '' ? (
                <Image src={image} size={size} />
            ) : (
                <Label sxOverrides={nameInitialStyle}>{name && name}</Label>
            )}
        </Container>
    );
};

export default Avatar;
