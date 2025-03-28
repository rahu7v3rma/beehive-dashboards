import {
    FunctionComponent,
    useCallback,
    useMemo,
    useRef,
    useState
} from 'react';
import { Label } from 'src/shared';
import {
    CustomLabel,
    RawInput,
    RichTextLabel,
    SxDescriptionTask,
    SxTitle,
    Description,
    Title,
    Wrapper,
    RichTextSwitch
} from './styled';
import color from 'src/theme/color';
import { Formik } from 'formik';
import useAppDispatch from 'src/hooks/useAppDispatch';
import { getDescriptionAnalysis } from 'src/redux/delegate/service';
import MDEditor from '@uiw/react-md-editor';
import { DelegationObjectType } from 'src/types/delegate';

interface Props {
    title: string | null;
    description: string | null;
    objectType: DelegationObjectType;
    handleDataChanged: (title: string, description: string) => void;
    titleDisabled?: boolean;
    descriptionDisabled?: boolean;
}

const Delegate: FunctionComponent<Props> = ({
    title,
    description,
    objectType,
    handleDataChanged,
    titleDisabled = false,
    descriptionDisabled = false
}: Props) => {
    const dispatch = useAppDispatch();
    var ref = useRef(null);
    const [richTextEditorSwitch, setRichTextEditorSwitch] =
        useState<boolean>(false);

    const onSubmit = (values: any, { setSubmitting }: any) => {
        setSubmitting(false);
        getDescriptionFeedback(values.title, values.description);
    };

    const getDescriptionFeedback = useCallback(
        async (obj_title: string, obj_desc: string) => {
            await dispatch(
                getDescriptionAnalysis({
                    title: obj_title,
                    description: obj_desc,
                    type: objectType
                })
            );
        },
        [dispatch, objectType]
    );

    const titleLabel = useMemo(() => {
        switch (objectType) {
            case DelegationObjectType.TASK:
                return 'Task title';
            case DelegationObjectType.QUEST:
                return 'Request title';
            default:
                return 'Title';
        }
    }, [objectType]);

    const descriptionLabel = useMemo(() => {
        switch (objectType) {
            case DelegationObjectType.TASK:
                return 'Task description';
            case DelegationObjectType.QUEST:
                return 'Request description';
            default:
                return 'Description';
        }
    }, [objectType]);
    return (
        <Wrapper>
            <Formik
                innerRef={ref}
                initialValues={{
                    title: title || '',
                    description: description || ''
                }}
                enableReinitialize={true}
                validateOnChange={false}
                validateOnBlur={false}
                validate={(values) => {
                    const errors = { title: '', description: '' };
                    if (!values.title) {
                        errors.title = 'This field is required';
                    }
                    if (!values.description) {
                        errors.description = 'This field is required';
                    }
                    if (errors.title || errors.description) {
                        return errors;
                    }
                    return;
                }}
                onSubmit={onSubmit}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Title>
                            <CustomLabel>&nbsp;{titleLabel}&nbsp;</CustomLabel>
                            <RawInput
                                id="outlined-helperText"
                                label={titleLabel}
                                name="title"
                                onChange={(e) => {
                                    handleChange(e);
                                    handleDataChanged(
                                        e.target.value,
                                        values.description || ''
                                    );
                                }}
                                onBlur={handleBlur}
                                value={values.title}
                                multiline
                                rows={1}
                                InputProps={{
                                    sx: SxTitle
                                }}
                                inputerror={errors.title}
                                disabled={titleDisabled}
                            />
                            {errors.title && (
                                <Label color="red">{errors.title}</Label>
                            )}
                        </Title>
                        <Description>
                            <CustomLabel>
                                &nbsp;{descriptionLabel}&nbsp;
                            </CustomLabel>
                            <RawInput
                                id="outlined-helperText"
                                label={descriptionLabel}
                                name="description"
                                onChange={(e) => {
                                    handleChange(e);
                                    handleDataChanged(
                                        values.title || '',
                                        e.target.value
                                    );
                                }}
                                onBlur={handleBlur}
                                value={values.description}
                                multiline
                                rows={descriptionDisabled ? undefined : 20}
                                InputProps={{
                                    sx: SxDescriptionTask
                                }}
                                inputerror={errors.description}
                                placeholder="Please fill detailed description"
                                disabled={descriptionDisabled}
                            />
                            {errors.description && (
                                <Label color="red">{errors.description}</Label>
                            )}
                            {!descriptionDisabled && (
                                <>
                                    <RichTextLabel>
                                        &nbsp;Rich text editor&nbsp;
                                    </RichTextLabel>
                                    <RichTextSwitch
                                        checked={richTextEditorSwitch}
                                        onChange={(e, checked) =>
                                            setRichTextEditorSwitch(checked)
                                        }
                                    />
                                    {richTextEditorSwitch && (
                                        <div>
                                            <MDEditor
                                                style={{
                                                    backgroundColor:
                                                        color.darkBlue,
                                                    color: color.white
                                                }}
                                                value={values.description}
                                                height="100%"
                                                minHeight={300}
                                                preview={'edit'}
                                                visibleDragbar={false}
                                                onChange={(v) => {
                                                    handleDataChanged(
                                                        values.title || '',
                                                        v || ''
                                                    );
                                                }}
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </Description>
                    </form>
                )}
            </Formik>
        </Wrapper>
    );
};

export default Delegate;
