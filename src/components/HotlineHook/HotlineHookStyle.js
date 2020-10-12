import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  hotline: {
    position: 'fixed',
    top: 0,
    left: 0
  },
  hotlineHook: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: theme.zIndex.modal + 5
  }
}));
