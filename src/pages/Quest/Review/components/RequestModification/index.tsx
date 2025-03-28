import { FC, useState, useCallback } from 'react';
import { Title, Subtitle } from 'src/shared';
import color from 'src/theme/color';
import { Container, RichTextEditor } from './styled';
import MDEditor from '@uiw/react-md-editor';
import { ReviewButtons } from 'src/pages/Quest/Review/styled';
import ReviewButton from '../ReviewButton';
import useAppDispatch from 'src/hooks/useAppDispatch';
import { postRequestModifications } from 'src/redux/quests/service';
import { setSnackbarAttributes } from 'src/redux/snackbar/slice';

interface RequestModificationProps {
    questId: string;
    onSuccess: () => void;
    onCancel: () => void;
}

const RequestModification: FC<RequestModificationProps> = ({
    questId,
    onSuccess,
    onCancel
}) => {
    const dispatch = useAppDispatch();

    const [description, setDescription] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleEditorChange = useCallback((value: string | undefined) => {
        setDescription(value || '');
    }, []);

    const onSubmit = useCallback(() => {
        setIsLoading(true);
        dispatch(
            postRequestModifications({
                questId,
                params: { feedback: description }
            })
        )
            .unwrap()
            .then(() => {
                dispatch(
                    setSnackbarAttributes({
                        snackbarOpen: true,
                        snackbarType: 'success',
                        snackbarMessage:
                            'Modification request submitted successfully.'
                    })
                );
                onSuccess();
            })
            .catch(() => {
                dispatch(
                    setSnackbarAttributes({
                        snackbarOpen: true,
                        snackbarType: 'error',
                        snackbarMessage:
                            'An error occurred while submitting your feedback. Please try again.'
                    })
                );
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [dispatch, questId, description, onSuccess]);

    const isDescriptionValid = description.trim().length > 0;

    return (
        <Container>
            <Title>Request Modification</Title>
            <Subtitle>
                You can add additional details in addition to the PR comments
            </Subtitle>

            <RichTextEditor>
                <MDEditor
                    style={{
                        backgroundColor: color.blackRock,
                        color: color.white90
                    }}
                    height="100%"
                    minHeight={300}
                    preview="edit"
                    visibleDragbar={false}
                    onChange={handleEditorChange}
                    value={description}
                    aria-label="Markdown editor for request modification"
                />
            </RichTextEditor>

            <ReviewButtons>
                <ReviewButton
                    label="Cancel"
                    onClick={onCancel}
                    width="150px"
                    aria-label="Cancel the modification request"
                />
                <ReviewButton
                    label="Save"
                    onClick={onSubmit}
                    width="150px"
                    aria-label="Save the modification request"
                    disabled={!isDescriptionValid}
                    isLoading={isLoading}
                />
            </ReviewButtons>
        </Container>
    );
};

export default RequestModification;
