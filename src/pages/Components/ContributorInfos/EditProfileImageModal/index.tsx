import { Modal } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { Button, Label, UploadFile } from 'src/shared';
import theme from 'src/theme';
import { RowBox, StyledBox, btnCanStyle, btnStyle, btnText } from './styled';

export type Props = {
    open: boolean;
    onClose: () => void;
    onSave: (file?: File) => void;
};

const EditProfileImageModal: FunctionComponent<Props> = ({
    open,
    onClose,
    onSave
}: Props) => {
    const [file, setFile] = useState<File>();

    const onChange = (fileImage: File) => {
        setFile(fileImage);
    };

    const handleSave = () => {
        onSave(file);
    };

    return (
        <Modal
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            open={open}
            onClose={onClose}
        >
            <StyledBox>
                <UploadFile onFileUpload={onChange} />
                <RowBox>
                    <Button
                        color={theme.color.tuna}
                        styles={btnCanStyle}
                        onClick={onClose}
                    >
                        <Label sxOverrides={btnText}>Cancel</Label>
                    </Button>
                    <Button
                        color={theme.gradients.goldenYellow}
                        styles={btnStyle}
                        onClick={handleSave}
                    >
                        <Label sxOverrides={btnText}>Save</Label>
                    </Button>
                </RowBox>
            </StyledBox>
        </Modal>
    );
};

export default EditProfileImageModal;
