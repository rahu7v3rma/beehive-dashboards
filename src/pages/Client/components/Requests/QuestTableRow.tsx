import { FunctionComponent, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Label, ProgressBar } from 'src/shared';
import { tableStyles } from 'src/shared/Table/styled';
import { ClientQuest, QuestStatusMap } from 'src/types/client';
import { QuestStatus } from 'src/enums/quests';
import { S } from './styled';
import {
    dateAndTimeSeperatedString,
    netTimeString
} from 'src/utils/dateFormat';
import theme from 'src/theme';
import { Button } from 'src/shared';
import color from 'src/theme/color';
import { RoutesEnum } from 'src/types/navigation';

export interface Props {
    clientQuest: ClientQuest;
}

const QuestTableRow: FunctionComponent<Props> = ({ clientQuest }: Props) => {
    const navigate = useNavigate();

    const { date, time } = useMemo(() => {
        return dateAndTimeSeperatedString(new Date(clientQuest.quest.created));
    }, [clientQuest.quest.created]);

    const handleTitleClick = useCallback(() => {
        navigate(
            `${RoutesEnum.QUEST_DETAIL.replace(
                ':id',
                clientQuest.quest.id.toString()
            )}`
        );
    }, [navigate, clientQuest.quest.id]);

    return (
        <TableRow sx={tableStyles.dataRow}>
            <TableCell sx={{ ...tableStyles.muiTableCell }}>
                <div
                    style={{ ...S.verticallyCentered, ...tableStyles.pointer }}
                    onClick={handleTitleClick}
                >
                    <Label
                        component="span"
                        sxOverrides={{
                            ...tableStyles.baseLabel
                        }}
                    >
                        {clientQuest.quest.title}
                    </Label>
                </div>
            </TableCell>
            <TableCell sx={tableStyles.muiTableCell}>
                <div style={S.verticallyCentered}>
                    <Label
                        component="span"
                        sxOverrides={{
                            ...tableStyles.baseLabel
                        }}
                    >
                        {date} {time}
                    </Label>
                </div>
            </TableCell>
            <TableCell sx={tableStyles.muiTableCell}>
                <div style={S.verticallyCentered}>
                    <Label
                        component="span"
                        sxOverrides={{
                            ...tableStyles.baseLabel
                        }}
                    >
                        {netTimeString(clientQuest.netTime)}
                    </Label>
                </div>
            </TableCell>
            <TableCell sx={tableStyles.muiTableCell}>
                <div style={S.verticallyCentered}>
                    {clientQuest.quest.status === QuestStatus.IN_PROCESS ? (
                        <>
                            <ProgressBar value={clientQuest.progress} />
                            {clientQuest.iteration > 1 ? (
                                <Label
                                    component="span"
                                    sxOverrides={{
                                        ...tableStyles.baseLabel
                                    }}
                                >
                                    {`Iteration ${clientQuest.iteration}`}
                                </Label>
                            ) : null}
                        </>
                    ) : clientQuest.quest.status === QuestStatus.IN_REVIEW ? (
                        <Button
                            onClick={() => {
                                navigate(
                                    `${RoutesEnum.QUEST_REVIEW.replace(
                                        ':id',
                                        clientQuest.quest.id.toString()
                                    )}`
                                );
                            }}
                            color={color.lightningYellow}
                            width="80px"
                            borderRadius="40px"
                        >
                            Review
                        </Button>
                    ) : (
                        <Label
                            sxOverrides={{
                                ...S.statusText,
                                color:
                                    clientQuest.quest.status ===
                                    QuestStatus.DONE
                                        ? theme.color.brightGreen
                                        : theme.color.bluishCayan,
                                backgroundColor:
                                    clientQuest.quest.status ===
                                    QuestStatus.DONE
                                        ? theme.color.darkMintGreen
                                        : theme.color.darkMintBlue
                            }}
                        >
                            {QuestStatusMap[clientQuest.quest.status - 1]}
                        </Label>
                    )}
                </div>
            </TableCell>
        </TableRow>
    );
};

export default QuestTableRow;
