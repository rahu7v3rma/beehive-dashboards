import { FunctionComponent } from 'react';
import { Container, Progress, ProgressContainer, Row } from './styled';
import Label from '../Label';
import theme from 'src/theme';

export type Props = {
    value: number;
};

const ProgressBar: FunctionComponent<Props> = ({ value }: Props) => {
    return (
        <Container>
            <Row>
                <ProgressContainer value={value}>
                    <Progress value={value}>
                        <Label
                            sxOverrides={{
                                width: '26.25px',
                                fontSize: '12px',
                                color:
                                    value < 25
                                        ? theme.color.orangyRed
                                        : value < 85
                                          ? theme.color.lightningYellow
                                          : theme.color.brightGreen,
                                paddingRight: '10px',
                                marginLeft: '20px'
                            }}
                        >
                            {value}%
                        </Label>
                    </Progress>
                </ProgressContainer>
            </Row>
        </Container>
    );
};

export default ProgressBar;
