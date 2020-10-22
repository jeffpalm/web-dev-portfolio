import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    position: 'absolute',
    bottom: 5,
    left: 'calc(50vw - 50px)',
    '&:hover': {
      cursor: 'pointer'
    }
  }
}));
