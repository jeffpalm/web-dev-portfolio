import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  enterBtn: {
    height: 50,
    width: 150,
    background: 'none',
    fontFamily: theme.typography.fontFamily,
    fontSize: 24,
    borderRadius: theme.shape.borderRadius,
    marginRight: 25,
    marginTop: 20,
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
      border: 'none'
    },
    '&:focus': {
      outline: 'none'
    }
  }
}));
