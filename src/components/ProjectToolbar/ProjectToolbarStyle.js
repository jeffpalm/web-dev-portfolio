import { makeStyles } from '@material-ui/core/styles'
import projects from '../../assets/data/projects'

const useStyles = makeStyles(theme => ({
    root: {
        // backgroundColor: theme.palette.background.paper,
        width: '100%',
        minHeight: 48,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
    },
    defaultTab: {
        backgroundColor: theme.palette.background.paper,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        borderLeft: `2px solid ${theme.palette.background.alt}`,
        borderTop: `2px solid ${theme.palette.background.alt}`,
        height: '100%',
        width: `calc(100% / ${projects.length})`,
        '&:hover': {
            cursor: 'pointer',
        },
        userSelect: 'none'
    },
    activeTab: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.default,
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
