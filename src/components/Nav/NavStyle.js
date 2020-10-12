import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  navContainer: {
    width: '100%',
    height: '100%'
  },
  logoContainer: {
    height: '100%',
    width: 60,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  logoTitle: {
    width: '100%',
    padding: 0,
    margin: 0
  },
  logoSubTitle: {
    width: '100%'
  },
  AppBar: {
    top: 0,
    left: 0,
    zIndex: theme.zIndex.appBar + 1,
    // backgroundColor: theme.palette.background.paper + '80',
    transition: 'height 100ms linear'
  }
}));
