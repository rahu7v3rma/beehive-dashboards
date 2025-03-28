import { FunctionComponent } from 'react';
import LinkWithIcon from 'src/shared/LinkWithIcon';
import { ILabels } from 'src/types/labels';
import { ContributorLinkContainer } from '../../styled';

type Props = {
    SOCIAL_LINKS: ILabels[];
};

const ContributorLink: FunctionComponent<Props> = ({ SOCIAL_LINKS }: Props) => {
    return (
        <ContributorLinkContainer>
            {SOCIAL_LINKS?.map((el: ILabels) => {
                return (
                    <LinkWithIcon
                        link={el.url}
                        icon={el.icon}
                        linkName={el.link}
                    />
                );
            })}
        </ContributorLinkContainer>
    );
};

export default ContributorLink;
