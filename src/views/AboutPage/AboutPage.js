import React from 'react'
import FullPage from '../../components/FullPage/FullPage'
import {MotionTypo} from '../../components/MuiMotion/MuiMotion'
import {motion} from 'framer-motion'
import Grid from '@material-ui/core/Grid'
import variants from 'assets/animation/pages/AboutPage/root'
import useStyles from 'assets/jss/pages/AboutPage/root'

const AboutPage = () => {
  const classes = useStyles()

  return (
    <FullPage name='about' className={classes.root}>
      <Grid
        className={classes.columnContainer}
        container
        direction='row'
      >
        <Grid
          className={classes.column}
          item
          container
          direction='column'
          justify='center'
          alignItems='center'
        >
          <motion.img
            variants={variants.text}
            custom={5}
            src='https://picsum.photos/500/500'
          />
        </Grid>
        <Grid
          className={classes.column}
          item
          container
          direction='column'
          justify='center'
          alignItems='center'
        >
          <MotionTypo
            variants={variants.text}
            exit='initial'
            variant='h2'
            color='textPrimary'
            custom={0}
          >
            Core values
          </MotionTypo>
          <MotionTypo
            variants={variants.text}
            exit='initial'
            variant='h4'
            color='textPrimary'
            custom={1}
          >
            Transparency
          </MotionTypo>
          <MotionTypo
            variants={variants.text}
            exit='initial'
            variant='h4'
            color='textPrimary'
            custom={2}
          >
            Accountability
          </MotionTypo>
          <MotionTypo
            variants={variants.text}
            exit='initial'
            variant='h4'
            color='textPrimary'
            custom={3}
          >
            Inclusivity
          </MotionTypo>
          <MotionTypo
            variants={variants.text}
            exit='initial'
            variant='h4'
            color='textPrimary'
            custom={4}
          >
            Teamwork
          </MotionTypo>
        </Grid>
      </Grid>
    </FullPage>
  )
}

export default AboutPage
