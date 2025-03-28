import { FunctionComponent } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Label } from 'src/shared';
import { statusStyles, tableStyles } from '../CommunityContributors/styled';
import ReactCountryFlag from 'react-country-flag';
import { IContributorBreakdown } from 'src/types/community';
import BillableHoursRatio from 'src/shared/BillableHoursRatio';
import CircleIcon from '@mui/icons-material/Circle';

export interface Props {
    row: IContributorBreakdown;
}

const ContributorRow: FunctionComponent<Props> = ({ row }: Props) => {
    return (
        <TableRow sx={tableStyles.dataRow}>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCellMdPlus,
                    ...tableStyles.dataCellPadding,
                    ...tableStyles.underline
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.dataLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.name}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.dataCellPadding,
                    ...tableStyles.headCellXsPlus,
                    ...tableStyles.flagCell
                }}
            >
                {row.country && (
                    <ReactCountryFlag countryCode={row.country} svg />
                )}
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.dataCellPadding,
                    ...tableStyles.headCellXsPlus,
                    ...tableStyles.statusCell
                }}
            >
                <CircleIcon
                    sx={statusStyles(
                        'active' in row
                            ? row.active
                                ? 'green'
                                : 'yellow'
                            : 'red'
                    )}
                />
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,

                    ...tableStyles.headCellXsPlus,
                    ...tableStyles.dataCellPadding
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.dataLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.lastWork && row.lastWork.slice(0, 16)}
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
                        ...tableStyles.dataLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.lastEngagement && row.lastEngagement.slice(0, 16)}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCellXsPlus,
                    ...tableStyles.dataCellPadding
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.dataLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.reservedWorks}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCellXsPlus,
                    ...tableStyles.dataCellPadding
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.dataLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.worksInReview}
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
                        ...tableStyles.dataLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    <BillableHoursRatio ratio={row.billableHoursRatio / 100} />
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
                        ...tableStyles.dataLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.weeklyAvailability}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCellXs,
                    ...tableStyles.dataCellPadding
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.dataLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {'$' + row.hourlyRate}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCellXlPlus,
                    ...tableStyles.dataCellPadding
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.dataLabel,
                        ...tableStyles.dataCell
                    }}
                >
                    {row.projects.join(', ')}
                </Label>
            </TableCell>
            <TableCell
                sx={{
                    ...tableStyles.muiTableCell,
                    ...tableStyles.headCellLgPlus,
                    ...tableStyles.dataCellPadding
                }}
            >
                <Label
                    component="span"
                    sxOverrides={{
                        ...tableStyles.dataLabel,
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
