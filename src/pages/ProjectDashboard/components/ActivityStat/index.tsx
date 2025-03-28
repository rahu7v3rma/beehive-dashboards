import React, { FunctionComponent } from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';
import theme from 'src/theme';
import {
    tableStyles,
    MyTableCell,
    MyMiddleTableCell,
    SecondTableCell
} from './styled';
import {
    Table,
    TableRow,
    TableBody,
    TableContainer,
    Paper
} from '@mui/material';
import { HistoryText } from '../../styled';
import { Label } from 'src/shared';
import { Lables } from 'src/constants/labels';
import { IActivityStat } from 'src/types/activityStat';

const StyledTableRow = styled(TableRow)(({}) => ({}));

export interface Props {
    activityStat: IActivityStat[];
}

const ActivityStat: FunctionComponent<Props> = ({ activityStat }: Props) => {
    return (
        <TableContainer component={Paper} sx={tableStyles.container}>
            <Container
                sx={tableStyles.titleText}
                maxWidth={false}
                component="div"
            >
                <Label sxOverrides={HistoryText}>{Lables.activityTitle}</Label>
            </Container>
            <Container sx={tableStyles.tableConatiner}>
                <Table>
                    <TableBody>
                        {activityStat?.map((statsValue: any, index) => {
                            let lastIndex = activityStat.length - 1;
                            return (
                                <React.Fragment key={index}>
                                    <StyledTableRow>
                                        <MyTableCell
                                            index={index}
                                            lastIndex={lastIndex}
                                            size="small"
                                            padding="none"
                                        >
                                            <Label
                                                sxOverrides={
                                                    tableStyles.activityStatText
                                                }
                                            >
                                                {statsValue.label}
                                            </Label>
                                        </MyTableCell>
                                        <MyMiddleTableCell
                                            index={index}
                                            lastIndex={lastIndex}
                                            size="small"
                                            padding="none"
                                        >
                                            <Label
                                                sxOverrides={{
                                                    ...tableStyles.baseLabel,
                                                    ...tableStyles.alignSelfText
                                                }}
                                            >
                                                {statsValue.value.value}
                                            </Label>
                                        </MyMiddleTableCell>
                                        <SecondTableCell
                                            index={index}
                                            lastIndex={lastIndex}
                                            size="small"
                                            padding="none"
                                        >
                                            <Label
                                                sxOverrides={{
                                                    ...tableStyles.baseLabel,
                                                    ...tableStyles.percentageText,
                                                    ...{
                                                        color: statsValue.value.percent.startsWith(
                                                            '+'
                                                        )
                                                            ? theme.color
                                                                  .freshGreen
                                                            : theme.color
                                                                  .orangyRed
                                                    }
                                                }}
                                            >
                                                {statsValue.value.percent}
                                            </Label>
                                        </SecondTableCell>
                                    </StyledTableRow>
                                    {index === 6 && (
                                        <Container
                                            sx={tableStyles.titleText1}
                                            maxWidth={false}
                                            component="div"
                                        >
                                            <Label sxOverrides={HistoryText}>
                                                {Lables.workInteraction}
                                            </Label>
                                        </Container>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </TableBody>
                </Table>
            </Container>
        </TableContainer>
    );
};

export default ActivityStat;
