import { AmountGraphData } from 'src/shared/AmountStackGraph';
import gradients from 'src/theme/gradients';

export const AMOUNT_GRAPH_DATA: AmountGraphData[] = [
    {
        type: 'Tech lead',
        amount: 15000,
        color: gradients.goldenYellow
    },
    {
        type: 'QA',
        amount: 10000,
        color: gradients.yellow80
    },
    {
        type: 'Community',
        amount: 5000,
        color: gradients.darkGold
    }
];
