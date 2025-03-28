import { FunctionComponent } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { IContributorState } from 'src/types/contributors';
import { Label } from 'src/shared';
import { tableStyles } from '../ProjectContributors/styled';
import { contributorStateMapper } from './helpers';
import ReactCountryFlag from 'react-country-flag';
import { IProjectContributor } from 'src/types/projects';

export interface Props {
    row: IProjectContributor;
}

const ContributorRow: FunctionComponent<Props> = ({ row }: Props) => {
    const getActiveState = (active: boolean | undefined): IContributorState => {
        if (active === null) {
            return IContributorState.INACTIVE;
        }
        return active ? IContributorState.ACTIVE : IContributorState.PENDING;
    };

    return (
        <TableRow sx={tableStyles.dataRow}>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.firstHeadCell,
                    ...tableStyles.dataCellPadding
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
                    ...tableStyles.dataCellPadding
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.flagCell
                    }}
                >
                    <ReactCountryFlag countryCode={row.country} />
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.dataCellPadding
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.statusCell
                    }}
                >
                    {contributorStateMapper[getActiveState(row.active)]}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCellLg,
                    ...tableStyles.dataCellPadding
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.lastWork && row.lastWork.slice(0, 19)}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCellXl,
                    ...tableStyles.dataCellPadding
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.lastEngagement && row.lastEngagement.slice(0, 19)}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCellMd,
                    ...tableStyles.dataCellPadding
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.reservedWorks}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCellMd,
                    ...tableStyles.dataCellPadding
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.worksInReview}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.dataCellPadding
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.baseLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {'$' + row.hourlyRate}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.lastHeadCell,
                    ...tableStyles.dataCellPadding
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
        </TableRow>
    );
};

export default ContributorRow;
