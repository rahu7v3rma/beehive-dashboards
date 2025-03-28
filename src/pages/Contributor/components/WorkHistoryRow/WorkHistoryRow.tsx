import { FunctionComponent } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {
    IContributorState,
    IContributor,
    IWorkHistory
} from 'src/types/contributors';
import { Label, Status } from 'src/shared';
import { tableStyles } from '../WorkHistory/styled';
import RatingView from '../Rating';
import { StatusType } from 'src/shared/Status';

export interface IContributorRow extends Omit<IContributor, 'active'> {
    active: IContributorState;
}
export interface Props {
    row: IWorkHistory;
}

const ContributorRow: FunctionComponent<Props> = ({ row }: Props) => {
    return (
        <TableRow sx={tableStyles.dataRow}>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCell,
                    ...tableStyles.centerItems
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.id}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.firstHeadCell,
                    ...tableStyles.headCell,
                    ...tableStyles.centerItems
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.name}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.firstHeadCell,
                    ...tableStyles.headCell,
                    ...tableStyles.centerItems
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
                    ...tableStyles.headCellLg,
                    ...tableStyles.centerItems
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell,
                        ...tableStyles.centerItems
                    }}
                >
                    {row.project}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCell,
                    ...tableStyles.centerItems
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.duration}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCell,
                    ...tableStyles.centerItems
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.price}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCell,
                    ...tableStyles.centerItems
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.iteration}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCell,
                    ...tableStyles.centerItems
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    <RatingView value={row.rating} />
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCell,
                    ...tableStyles.lastHeadCell,
                    ...tableStyles.centerItems
                }}
            >
                <Status status={row.status as StatusType} />
            </TableCell>
        </TableRow>
    );
};

export default ContributorRow;
