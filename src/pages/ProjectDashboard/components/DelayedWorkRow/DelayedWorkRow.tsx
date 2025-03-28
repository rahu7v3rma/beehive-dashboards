import { FunctionComponent } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Label } from 'src/shared';
import { tableStyles } from '../ProjectContributors/styled';
import { IProjectDelayedTask, ITaskTrelloLink } from 'src/types/projects';
export interface Props {
    row: IProjectDelayedTask;
    setTrelloLinks: (links: ITaskTrelloLink[] | null) => void;
}

const DelayedWorkRow: FunctionComponent<Props> = ({
    row,
    setTrelloLinks
}: Props) => {
    return (
        <TableRow sx={tableStyles.dataRow}>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCell,
                    ...tableStyles.rowView
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.createdAt}
                </Label>
            </TableCell>
            <TableCell
                onClick={() => {
                    setTrelloLinks(row.link ? [row.link] : null);
                }}
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCell,
                    ...tableStyles.rowView,
                    cursor: 'pointer'
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell,
                        ...tableStyles.underlineLable
                    }}
                >
                    {(row.taskName || '').slice(0, 70)}
                </Label>
            </TableCell>
            <TableCell
                onClick={() => {
                    setTrelloLinks(row.link ? [row.link] : null);
                }}
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCell,
                    ...tableStyles.rowView,
                    cursor: 'pointer'
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell,
                        ...tableStyles.underlineLable
                    }}
                >
                    {row.id}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCell,
                    ...tableStyles.rowView
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.skills.join(', ')}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCell,
                    ...tableStyles.rowView
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.status.replace('TaskStatus.', '')}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCell,
                    ...tableStyles.rowView
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {new Date(row.billableTime * 1000)
                        .toISOString()
                        .substring(11, 16)}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCell,
                    ...tableStyles.rowView
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.priority}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCell,
                    ...tableStyles.rowView
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.updatedAt}
                </Label>
            </TableCell>
        </TableRow>
    );
};

export default DelayedWorkRow;
