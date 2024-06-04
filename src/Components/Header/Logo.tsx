import { Link, styled } from '@mui/material';
import theme from '../../theme';

const StyledLink = styled(Link)({
  '&:before': {
    content: `'Athena'`,
    display: 'inline',
    position: 'absolute',
    top: 30,
    left: 45,
    fontFamily: 'Marcellus SC',
    fontSize: '1.5rem',
    color: theme.palette.secondary.light,
  },
  '&:after': {
    content: `'Hotel'`,
    display: 'inline',
    position: 'absolute',
    top: 30,
    right: 60,
    fontFamily: 'Marcellus SC',
    fontSize: '1.5rem',
    color: theme.palette.secondary.light,
  },
});

const Logo = () => {
  return (
    <StyledLink
      href="#"
      sx={{
        '@media (max-width: 500px)': {
          '&:before': { display: 'none' },
          '&:after': { display: 'none' },
        },
      }}
    >
      <img src="src/Assets/Logo.svg" alt="Athena-hotel-logo" />
    </StyledLink>
  );
};

export default Logo;
