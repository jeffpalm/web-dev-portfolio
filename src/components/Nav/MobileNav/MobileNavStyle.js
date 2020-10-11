import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  MobileLink: {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.body1.fontFamily,
    padding: theme.spacing(2),
    '&:hover': {
      cursor: 'pointer'
    }
  },
  activeMobileLink: {
    color: theme.palette.primary.main
  },
  mobileLinkContainer: {
    width: '100%'
  }
}));
