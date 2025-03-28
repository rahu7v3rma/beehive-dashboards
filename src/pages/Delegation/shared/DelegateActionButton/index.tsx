import { FunctionComponent } from 'react';
import { Button, Label, Link } from 'src/shared';
import CircularProgress from '@mui/material/CircularProgress';
import theme from 'src/theme';
import color from 'src/theme/color';
import {
    label,
    Wrapper,
    ButtonsWrapper,
    SxFooter1,
    SxFooter2,
    TooltipLabelContainer,
    labelStyles
} from './styled';
import { Tooltip } from '@mui/material';

interface Props {
    estimation?: number;
    leftTitle?: string;
    rightTitle?: string;
    leftDisabled?: boolean;
    rightDisabled?: boolean;
    onLeftClick?: () => void;
    onRightClick?: () => void;
    hideSubtitle?: boolean;
    isLoading?: boolean;
    loadingDescription: string | null;
    uniqueButtons?: boolean;
}

const DelegateActionButton: FunctionComponent<Props> = ({
    estimation,
    leftTitle,
    rightTitle,
    leftDisabled,
    rightDisabled,
    onLeftClick,
    onRightClick,
    hideSubtitle,
    isLoading,
    loadingDescription,
    uniqueButtons
}: Props) => {
    return (
        <Wrapper>
            {isLoading && (
                <CircularProgress
                    size={20}
                    style={{ color: theme.color.lightningYellow }}
                />
            )}
            {isLoading && loadingDescription && (
                <Label sxOverrides={SxFooter1}>{loadingDescription}</Label>
            )}
            {!isLoading && (
                <>
                    <ButtonsWrapper>
                        {leftTitle && (
                            <Button
                                color={theme.color.darkGray}
                                width="136px"
                                borderRadius="100px"
                                height="42px"
                                onClick={() => onLeftClick && onLeftClick()}
                                disabled={leftDisabled || isLoading}
                                styles={{}}
                            >
                                <Label
                                    sxOverrides={label(
                                        !!leftDisabled,
                                        !!uniqueButtons
                                    )}
                                >
                                    {leftTitle}
                                </Label>
                            </Button>
                        )}
                        {rightTitle && (
                            <Button
                                color={
                                    uniqueButtons
                                        ? theme.color.darkMintYellow
                                        : theme.gradients.goldenYellow
                                }
                                width={uniqueButtons ? '207px' : '136px'}
                                borderRadius="100px"
                                height={uniqueButtons ? '33px' : '42px'}
                                onClick={() => onRightClick && onRightClick()}
                                disabled={rightDisabled || isLoading}
                                styles={{}}
                            >
                                <Label
                                    sxOverrides={label(
                                        !!rightDisabled,
                                        !!uniqueButtons
                                    )}
                                >
                                    {rightTitle}
                                </Label>
                            </Button>
                        )}
                    </ButtonsWrapper>
                    {!estimation && !hideSubtitle && (
                        <>
                            <Label sxOverrides={SxFooter1}>
                                Good task descriptions are concise, explicit,
                            </Label>
                            <Label sxOverrides={SxFooter2}>
                                and self contained. Learn more{' '}
                                <Link
                                    href="https://docs.caas.ai/docs/best_practices/"
                                    color={color.yellow60}
                                >
                                    here
                                </Link>
                                .
                            </Label>
                        </>
                    )}
                    {estimation && (
                        <Tooltip
                            title="This is an estimate of how long the first iteration of the task will take."
                            arrow
                            placement="top"
                        >
                            <TooltipLabelContainer>
                                <Label sxOverrides={labelStyles}>
                                    {`${Math.floor(estimation)}-${Math.ceil(
                                        estimation
                                    )} work hours`}
                                </Label>
                            </TooltipLabelContainer>
                        </Tooltip>
                    )}
                </>
            )}
        </Wrapper>
    );
};

export default DelegateActionButton;
