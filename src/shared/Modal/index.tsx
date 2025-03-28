import { FunctionComponent } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import S from './styled';

export interface Props {
    open?: boolean;
    title?: string;
    children: React.ReactNode;
    onClose?: () => void;
    dialogStyle?: {};
    minHeight?: boolean;
    hasCrossIcon: boolean;
    dialogContentSx?: React.CSSProperties;
    dialogSx?: React.CSSProperties;
}

const Modal: FunctionComponent<Props> = ({
    open = false,
    title,
    children,
    onClose,
    dialogStyle,
    hasCrossIcon = true,
    dialogContentSx = {},
    dialogSx = {}
}: Props) => (
    <Dialog
        open={open}
        onClose={onClose}
        sx={{
            ...dialogStyle,
            ...dialogSx
        }}
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

        <DialogContent sx={{ ...S.modalContent, ...dialogContentSx }}>
            {children}
        </DialogContent>
    </Dialog>
);

export default Modal;
