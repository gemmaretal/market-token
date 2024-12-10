import { Box, Button, styled } from '@mui/material';
type IGainLossProps = {
  color?: string;
};
export const GainLossValueWrapper = styled(Box)<IGainLossProps>(
  ({ color = '' }) => ({
    display: 'flex',
    alignItems: 'center',
    color: color,
    marginRight: '-5px',
    svg: {
      color: color,
      fontSize: '32px',
    },
    transition: 'color 0.5s ease',
  })

);

export const ButtonBuy = styled(Button)(() => ({
  borderRadius: '24px',
  textTransform: 'capitalize',
  fontWeight: 600,
  backgroundColor: '#0a68f4',
}));
