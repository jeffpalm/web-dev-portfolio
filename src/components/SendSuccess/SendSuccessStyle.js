import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  successScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.success.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 9)
  }
}));
