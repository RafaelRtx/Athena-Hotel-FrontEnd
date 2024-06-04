import { Link, LinkProps, styled } from '@mui/material';
import theme from '.././theme';

const ButtonBooking = styled(Link)({
  padding: '0.5rem 1.25rem',
  color: theme.palette.secondary.main,
  borderRadius: '4px',
  border: '2px solid',
  boxShadow: '2px 2px 4px rgb(0,0,0,.25)',
  transition: '.3s',
  '&:hover': {
    color: theme.palette.common.white,
  },
});

const ButtonProfile = styled(Link)({
  padding: '0.5rem 1.25rem',
  borderRadius: '4px',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  boxShadow: '2px 2px 4px rgb(0,0,0,.25)',
  transition: '.3s',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: theme.palette.primary.light,
  },
});

const Button = (props: LinkProps) => {
  const button =
    props.type == 'golden' ? (
      <ButtonBooking underline="none" {...props}></ButtonBooking>
    ) : (
      <ButtonProfile
       underline="none"
       variant='font_1_s'
       {...props}
      >
      </ButtonProfile>
    );
  return button;
};

Button.muiName = 'Button'

export default Button;
