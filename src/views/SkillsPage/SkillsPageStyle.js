import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  gridList: {
    transform: 'translateZ(0)'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(34, 56, 67,0.7) 0%, ' +
      'rgba(34, 56, 67,0.3) 70%, rgba(34, 56, 67,0) 100%)'
  },
  icon: {
    height: 50,
    width: 'auto'
  },
  skillCard: {
    minHeight: 30,
    width: 300,
    borderColor: theme.palette.background.paper,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
    padding: theme.spacing(0, 1),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  skillContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  gitHubBar: {},
  repoList: {
    padding: theme.spacing(1),
    textAlign: 'center'
  },
  tableContainer: {
    padding: theme.spacing(0, 2),
    paddingBottom: theme.spacing(2)
  },
  table: {
    padding: theme.spacing(1)
  },
  repoLink: {
    color: theme.palette.text.primary,
    transition: 'color 200ms ease-in-out',
    '&:visited': {
      color: theme.palette.text.primary
    },
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
}));
