import { FunctionComponent } from 'react';
import {
    ColumnView,
    Container,
    Divider,
    GridView,
    MiddleColumnView,
    RowView,
    TitleContainer,
    VerticalDivider,
    avgTaskColorText,
    avgTaskText,
    colorTitleText,
    dividerStyle,
    marginText,
    offWhiteText,
    titleText,
    white90Text,
    whiteText
} from './styled';
import { Label } from 'src/shared';
import { IBudget } from 'src/types/budget';

type Props = {
    projectBudget: IBudget;
};

const Budget: FunctionComponent<Props> = ({ projectBudget }) => {
    return (
        <Container>
            <TitleContainer>
                <Label sxOverrides={titleText}>Budget</Label>
                <Label sxOverrides={colorTitleText}>
                    {projectBudget.total}
                </Label>
            </TitleContainer>
            <RowView>
                <Label sxOverrides={avgTaskText}>Average task</Label>
                <Label sxOverrides={avgTaskColorText}>
                    {projectBudget.avg_task}
                </Label>
            </RowView>
            <Divider />
            <GridView>
                <ColumnView>
                    <Label sxOverrides={avgTaskColorText}>
                        {projectBudget.coding}
                    </Label>
                    <Label sxOverrides={offWhiteText}>Coding</Label>
                </ColumnView>
                <VerticalDivider />
                <MiddleColumnView>
                    <Label sxOverrides={avgTaskColorText}>
                        {projectBudget.code_review}
                    </Label>
                    <Label sxOverrides={offWhiteText}>Code review</Label>
                </MiddleColumnView>
                <VerticalDivider />
                <ColumnView>
                    <Label sxOverrides={avgTaskColorText}>
                        {projectBudget.qa}
                    </Label>
                    <Label sxOverrides={offWhiteText}>QA</Label>
                </ColumnView>
            </GridView>
            <Divider sx={dividerStyle} />
            <RowView sx={marginText}>
                <Label sxOverrides={whiteText}>Cost per task</Label>
                <Label sxOverrides={white90Text}>
                    {projectBudget.cost_per_week}
                </Label>
            </RowView>
            <Divider />
            <RowView sx={marginText}>
                <Label sxOverrides={whiteText}>Cost per hour</Label>
                <Label sxOverrides={white90Text}>
                    {projectBudget.cost_per_hour}
                </Label>
            </RowView>
            <Divider />{' '}
            <RowView sx={marginText}>
                <Label sxOverrides={whiteText}>Cost per line</Label>
                <Label sxOverrides={white90Text}>
                    {projectBudget.const_per_line}
                </Label>
            </RowView>
        </Container>
    );
};

export default Budget;
