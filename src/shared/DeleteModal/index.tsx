import { FunctionComponent } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import S, { RowBox } from './styled';
import theme from 'src/theme';
import Button from '../Button';
import Label from '../Label';
import { DialogContent } from '@mui/material';

export interface Props {
    open?: boolean;
    title?: string;
    onClose?: () => void;
    handleDelete?: () => void;
    dialogStyle?: {};
    hasCrossIcon: boolean;
}

const DeleteModal: FunctionComponent<Props> = ({
    open = false,
    title,
    onClose,
    handleDelete,
    dialogStyle,
    hasCrossIcon = true
}: Props) => (
    <Dialog
        open={open}
        onClose={onClose}
        sx={dialogStyle}
        PaperProps={{
            sx: S.dailogPaperPropsSX
        }}
        fullWidth
    >
        {title && (
            <DialogTitle sx={S.modalTitle}>
                {title}
                {hasCrossIcon && (
                    <IconButton aria-label="close" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                )}
            </DialogTitle>
        )}
        <DialogContent sx={S.modalContent}>
            <RowBox>
                <Button
                    color={theme.color.tuna}
                    styles={S.btnCanStyle}
                    onClick={onClose}
                >
                    <Label sxOverrides={S.btnText}>Cancel</Label>
                </Button>
                <Button
                    color={theme.gradients.goldenYellow}
                    styles={S.btnStyle}
                    onClick={handleDelete}
                >
                    <Label sxOverrides={S.btnText}>Save</Label>
                </Button>
            </RowBox>
        </DialogContent>
    </Dialog>
);

export default DeleteModal;
