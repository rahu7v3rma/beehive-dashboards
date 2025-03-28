import { FunctionComponent, Fragment, useState, useEffect } from 'react';
import {
    Box,
    FormControlLabel,
    Paper,
    TextField,
    Typography
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DoneIcon from '@mui/icons-material/Done';
import {
    AddChip,
    AddCriteriaChip,
    CheckboxItem,
    Container,
    CriteriaDescriptionSX,
    CriteriaListItem,
    CancelChip,
    SpecificCriteriaPaperSX,
    SuccessCriteriaBox,
    SuccessCriteriaWrapper
} from './styled';
import { SuccessCriteria } from 'src/types/quests';

interface SuccessCriteriaProps {
    initialData: SuccessCriteria[];
    onDataChange: (data: SuccessCriteria[]) => void;
    isDisabled?: boolean; // Optional prop to control disabled state
}

const newCriteriaItem: SuccessCriteria = {
    title: '',
    description: '',
    explanation: '',
    checked: false
};

const SuccessCriteriaPicker: FunctionComponent<SuccessCriteriaProps> = ({
    initialData,
    onDataChange,
    isDisabled = false
}) => {
    const [criterias, setCriterias] = useState<SuccessCriteria[]>(initialData);
    const [shouldShowAddCriteriaForm, setShouldShowAddCriteriaForm] =
        useState<boolean>(false);
    const [customCriteria, setCustomCriteria] =
        useState<SuccessCriteria>(newCriteriaItem);

    useEffect(() => {
        if (isDisabled) {
            setCriterias(initialData.filter((item) => item.checked));
        } else {
            setCriterias(initialData);
        }
    }, [initialData, setCriterias, isDisabled]);

    const handleExplanationChange = (value: string, title: string) => {
        const updatedCriterias = criterias.map((item) => {
            if (item.title === title) {
                return {
                    ...item,
                    explanation: value || ''
                };
            }
            return item;
        });

        setCriterias(updatedCriterias);
        onDataChange(updatedCriterias);
    };

    const toggleCriteria = (title: string) => {
        const updatedCriterias = criterias.map((item) => {
            if (item.title === title) {
                return { ...item, checked: !item.checked };
            }
            return item;
        });
        setCriterias(updatedCriterias);
        onDataChange(updatedCriterias);
    };

    const addCustomCriteriaHandler = () => {
        if (
            !customCriteria.title.trim() ||
            !customCriteria.description.trim()
        ) {
            alert('Please fill in custom criteria');
            return;
        }
        const newCustomCriteria = { ...customCriteria, checked: true };
        const updatedCriterias = [...criterias, newCustomCriteria];
        setCriterias(updatedCriterias);
        onDataChange(updatedCriterias);

        setShouldShowAddCriteriaForm(false);
        setCustomCriteria(newCriteriaItem);
    };

    const cancelCustomCriteriaHandler = () => {
        setShouldShowAddCriteriaForm(false);
        setCustomCriteria(newCriteriaItem);
    };

    const handleCustomCriteriaChange = (field: string, value: string) => {
        setCustomCriteria((prevCustomCriteria) => ({
            ...prevCustomCriteria,
            [field]: value
        }));
    };

    return criterias.length > 0 ? (
        <SuccessCriteriaBox>
            <SuccessCriteriaWrapper>
                <Box>
                    <Container>
                        {criterias.map((criteria, index) => (
                            <Fragment key={index}>
                                <CriteriaListItem>
                                    {!isDisabled && (
                                        <FormControlLabel
                                            label=""
                                            control={
                                                <CheckboxItem
                                                    checked={criteria.checked}
                                                    checkedIcon={
                                                        <DoneIcon
                                                            sx={{
                                                                color: '#DEA40D'
                                                            }}
                                                        />
                                                    }
                                                    onClick={() =>
                                                        toggleCriteria(
                                                            criteria.title
                                                        )
                                                    }
                                                />
                                            }
                                        />
                                    )}
                                    <Box style={{ width: '100%' }}>
                                        <Typography>
                                            {criteria.title}
                                        </Typography>
                                        <Typography sx={CriteriaDescriptionSX}>
                                            {criteria.description}
                                        </Typography>
                                        {isDisabled ? (
                                            <Typography
                                                sx={CriteriaDescriptionSX}
                                            >
                                                {criteria.explanation}
                                            </Typography>
                                        ) : (
                                            criteria.checked && (
                                                <Paper
                                                    component="form"
                                                    sx={SpecificCriteriaPaperSX}
                                                >
                                                    <TextField
                                                        id={`${criteria.title}-explanation`}
                                                        variant="standard"
                                                        value={
                                                            criteria.explanation ||
                                                            ''
                                                        }
                                                        onChange={(
                                                            e: React.ChangeEvent<HTMLInputElement>
                                                        ) =>
                                                            handleExplanationChange(
                                                                e.target.value,
                                                                criteria.title
                                                            )
                                                        }
                                                        InputProps={{
                                                            disableUnderline:
                                                                true,
                                                            style: {
                                                                color: 'white',
                                                                fontSize: 14
                                                            }
                                                        }}
                                                        sx={{ flex: 1 }}
                                                        multiline
                                                        disabled={isDisabled}
                                                        placeholder={`Write any specific criteria related to ${criteria.title}...`}
                                                    />
                                                </Paper>
                                            )
                                        )}
                                    </Box>
                                </CriteriaListItem>
                            </Fragment>
                        ))}
                        {!isDisabled && (
                            <AddCriteriaChip
                                label={
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '.25rem'
                                        }}
                                    >
                                        <p>Add Criteria</p>
                                        <AddCircleOutlineIcon />
                                    </Box>
                                }
                                onClick={() => {
                                    setShouldShowAddCriteriaForm(true);
                                }}
                            />
                        )}
                        {shouldShowAddCriteriaForm && (
                            <Paper
                                component="form"
                                sx={{
                                    ...SpecificCriteriaPaperSX,
                                    marginTop: '2rem'
                                }}
                            >
                                <TextField
                                    id="new-criteria-title"
                                    name="title"
                                    variant="standard"
                                    value={customCriteria.title || ''}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) =>
                                        handleCustomCriteriaChange(
                                            'title',
                                            e.target.value
                                        )
                                    }
                                    InputProps={{
                                        disableUnderline: true,
                                        style: {
                                            color: 'white',
                                            fontSize: 14
                                        }
                                    }}
                                    sx={{ flex: 1 }}
                                    placeholder={`Title...`}
                                />
                                <TextField
                                    id="new-criteria-description"
                                    name="description"
                                    variant="standard"
                                    value={customCriteria.description || ''}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) =>
                                        handleCustomCriteriaChange(
                                            'description',
                                            e.target.value
                                        )
                                    }
                                    InputProps={{
                                        disableUnderline: true,
                                        style: {
                                            color: 'white',
                                            fontSize: 14
                                        }
                                    }}
                                    sx={{ flex: 1 }}
                                    placeholder={`Write any specific criteria...`}
                                />
                                <CancelChip
                                    label="Cancel"
                                    onClick={cancelCustomCriteriaHandler}
                                />
                                <AddChip
                                    label="Add"
                                    onClick={addCustomCriteriaHandler}
                                />
                            </Paper>
                        )}
                    </Container>
                </Box>
            </SuccessCriteriaWrapper>
        </SuccessCriteriaBox>
    ) : (
        <SuccessCriteriaBox>
            <SuccessCriteriaWrapper>
                <Box>
                    <Container>
                        <Typography
                            style={{ color: 'white', fontSize: '14px' }}
                        >
                            No criteria chosen
                        </Typography>
                    </Container>
                </Box>
            </SuccessCriteriaWrapper>
        </SuccessCriteriaBox>
    );
};

export default SuccessCriteriaPicker;
