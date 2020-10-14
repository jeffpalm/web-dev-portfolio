import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minWidth: 300,
    height: '100%'
  },
  field: {
    margin: theme.spacing(0, 1),
    color: theme.palette.text.primary,
    zIndex: theme.zIndex.modal - 1
  },
  switchContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(0, 1)
  },
  submitBtn: {
    width: 120,
    color: theme.palette.success.main,
    borderColor: theme.palette.success.dark,
    marginTop: theme.spacing(1),
    '&:hover': {
      borderColor: theme.palette.success.light,
      color: theme.palette.background.default,
      backgroundColor: theme.palette.success.main
    }
  },
  msgContainer: {
    position: 'relative',
    width: '100%',
    margin: theme.spacing(0, 1)
  }
}));
