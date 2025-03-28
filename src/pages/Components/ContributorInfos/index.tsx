import { FunctionComponent } from 'react';
import Container from '@mui/material/Container';
import { SkillWrapperBox } from 'src/pages/Contributor/styled';
import Grid from '@mui/material/Grid';
import Skills from 'src/shared/SkillsV2';
import ContributorDetails from './ContributorDetails';
import ContributorLink from './ContributorLinks';
import { SkillItems } from 'src/constants/skills';
import { SOCIAL_LINKS } from 'src/constants/labels';
import { Switch } from './../../../shared';
import { ContainerStyle, GridStyle, SwitchContainer } from './styled';

type Props = Record<string, never>;

const ContributorInfos: FunctionComponent<Props> = ({}: Props) => {
    return (
        <Container maxWidth={false} sx={ContainerStyle} component="div">
            <ContributorDetails />
            <Container maxWidth={false} sx={{ mt: '20px' }} component="div">
                <SkillWrapperBox>
                    <GridStyle>
                        <Grid item>
                            <Skills availableSkills={SkillItems} />
                        </Grid>
                    </GridStyle>
                    <SwitchContainer>
                        <Switch label="Explore tasks outside your skill set" />
                    </SwitchContainer>
                </SkillWrapperBox>
            </Container>
            <ContributorLink SOCIAL_LINKS={SOCIAL_LINKS} />
        </Container>
    );
};

export default ContributorInfos;
