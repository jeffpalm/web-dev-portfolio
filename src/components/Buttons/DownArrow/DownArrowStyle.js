import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    borderTopRightRadius: theme.shape.borderRadius,
    // borderBottomRightRadius: theme.shape.borderRadius,
    zIndex: theme.zIndex.modal,
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));
