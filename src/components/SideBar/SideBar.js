import React from 'react'
import useStyles from 'assets/jss/components/SideBar'
import { motion } from 'framer-motion'
import IconButton from '@material-ui/core/IconButton'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

const variants = {
    initial: {
        translateX: -60,
    },
    enter: {
        translateX: 0,
        transition: {
            delay: 1,
        },
    },
}

const SideBar = ({ controls }) => {
    const classes = useStyles()
    return (
        <motion.div
            className={classes.root}
            variants={variants}
            animate={controls}
            initial='initial'
        >
            <IconButton
                href='https://www.linkedin.com/in/jeffpalmdev/'
                target='_blank'
            >
                <LinkedInIcon fontSize='large' />
            </IconButton>
            <IconButton href='https://github.com/jeffpalm' target='_blank'>
                <GitHubIcon fontSize='large' />
            </IconButton>
            <IconButton href='https://jeffpalm.dev/resume' target='_blank'>
                <DescriptionOutlinedIcon fontSize='large' />
            </IconButton>
            <IconButton href='mailto:jeff@jeffpalm.dev' target='_blank'>
                <EmailIcon fontSize='large' />
            </IconButton>
        </motion.div>
    )
}

export default SideBar
