import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  downArrow: {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '16px',
    left: 'calc(50vw - 50px)',
    '&:hover': {
      cursor: 'pointer'
    }
  }
}))