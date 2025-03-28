import { FC } from 'react';
import { ReactComponent as CloseIcon } from 'src/assets/icons/close-yellow.svg';
import { ReactComponent as SaveIcon } from 'src/assets/icons/save.svg';
import { Label } from 'src/shared';
import { Wrapper, cancelLabel, saveLavel } from './styled';

interface Props {
    onClickCancel: () => void;
    onClickSave: () => void;
}

const Actions: FC<Props> = (props) => {
    const { onClickCancel, onClickSave } = props;
    return (
        <Wrapper>
            <Label sxOverrides={cancelLabel} onClick={onClickCancel}>
                Cancel <CloseIcon />
            </Label>
            <Label sxOverrides={saveLavel} onClick={onClickSave}>
                Save <SaveIcon />
            </Label>
        </Wrapper>
    );
};

export default Actions;
