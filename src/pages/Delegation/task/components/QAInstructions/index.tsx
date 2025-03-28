import { FunctionComponent } from 'react';
import { Dropdown2, Label, Link } from 'src/shared';
import {
    AnalyzeBox,
    RawInput,
    SxDescriptionTask,
    SxFooter1,
    SxFooter2,
    Description,
    Wrapper
} from '../../../shared/Delegate/styled';

import color from 'src/theme/color';
import { Formik } from 'formik';
import {
    CustomLabel,
    QATimesBox,
    QATimesSelectBox,
    maximumQATimesLabel,
    rawInputMargin,
    removeMargin,
    taskDescriptionStyle
} from './styled';
import { Box } from '@mui/material';

interface Props {
    handleQaParamsChange: (
        maxChainIterations: number,
        chainDescription: string
    ) => void;
}

const QAInstructions: FunctionComponent<Props> = ({
    handleQaParamsChange
}: Props) => {
    const validateFormValues = (values: { description: string }) => {
        const errors = { description: '' };
        if (!values.description) {
            errors.description = 'This field is required';
        }
        if (errors.description) {
            return errors;
        }
        return;
    };

    return (
        <Wrapper>
            <Formik
                initialValues={{
                    qaTimes: '1',
                    description: ''
                }}
                validateOnChange={false}
                validateOnBlur={false}
                validate={validateFormValues}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
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
                        <Description sx={taskDescriptionStyle}>
                            <Box height={15} />
                            <CustomLabel>
                                &nbsp;QA instructions and use cases&nbsp;
                            </CustomLabel>
                            <RawInput
                                id="outlined-helperText"
                                label="QA instructions and use cases&nbsp;"
                                name="description"
                                onChange={(e) => {
                                    handleChange(e);
                                    handleQaParamsChange(
                                        Number(values.qaTimes),
                                        e.target.value
                                    );
                                }}
                                onBlur={handleBlur}
                                value={values.description}
                                multiline
                                rows={20}
                                sx={rawInputMargin}
                                InputProps={{
                                    sx: SxDescriptionTask
                                }}
                                inputerror={errors.description}
                            />
                            {errors.description && (
                                <Label color="red">{errors.description}</Label>
                            )}
                            <AnalyzeBox>
                                <Label
                                    sxOverrides={{
                                        ...SxFooter1,
                                        ...removeMargin
                                    }}
                                >
                                    Good QA guidelines include the tested
                                    functionality as well as clear input and
                                    output of the
                                </Label>
                                <Label
                                    sxOverrides={{
                                        ...SxFooter2,
                                        ...removeMargin
                                    }}
                                >
                                    tested use cases. Learn more{' '}
                                    <Link
                                        href="https://docs.caas.ai/docs/best_practices/"
                                        color={color.yellow60}
                                    >
                                        here
                                    </Link>
                                    .
                                </Label>
                            </AnalyzeBox>
                            <QATimesBox>
                                <Label sxOverrides={maximumQATimesLabel}>
                                    Maximal number of QA iterations before
                                    passing the task for review
                                </Label>
                                <QATimesSelectBox>
                                    <Dropdown2
                                        name="qaTimes"
                                        value={values.qaTimes}
                                        onChange={(e) => {
                                            handleChange(e);
                                            handleQaParamsChange(
                                                Number(e.target.value),
                                                values.description
                                            );
                                        }}
                                        options={['1', '2', '3', '4', '5']}
                                        width={67}
                                        height={37}
                                    />
                                </QATimesSelectBox>
                            </QATimesBox>
                        </Description>
                    </form>
                )}
            </Formik>
        </Wrapper>
    );
};

export default QAInstructions;
