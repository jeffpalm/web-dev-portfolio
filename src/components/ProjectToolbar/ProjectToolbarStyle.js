import { makeStyles } from '@material-ui/core/styles'
import projects from '../../assets/data/projects'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper + '40',
        width: '100%',
        height: 48,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
    },
    defaultTab: {
        backGroundColor: 'none',
        height: '100%',
        width: `calc(100% / ${projects.length})`,
        '&:hover': {
            cursor: 'pointer',
        },
    },
    activeTab: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.default + '80',
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        transition: 'all 200ms linear',
    },
    inactiveTab: {
        color: theme.palette.text.primary,
    },
}))

export default useStyles
