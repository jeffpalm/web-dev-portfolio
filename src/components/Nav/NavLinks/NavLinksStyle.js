import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  navLinksContainer: {
    height: '100%'
  },
  navBtn: {
    margin: theme.spacing(1)
  },
  activeNavBtn: {
    margin: theme.spacing(1),
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main
  }
}));
