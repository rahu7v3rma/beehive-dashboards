import { FunctionComponent } from 'react';
import { Link, Label } from 'src/shared';
import { FlexWrapper, Image, labelStyle } from './styled';

export type Props = {
    link?: string;
    icon: string;
    linkName: string;
};

const LinkWithIcon: FunctionComponent<Props> = ({
    link,
    icon,
    linkName
}: Props) => {
    const Icon = icon;
    return (
        <Link href={link}>
            <FlexWrapper>
                <Image src={Icon} />
                <Label sxOverrides={labelStyle}>{linkName}</Label>
            </FlexWrapper>
        </Link>
    );
};

export default LinkWithIcon;
