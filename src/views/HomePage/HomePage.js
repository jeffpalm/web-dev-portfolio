import React from 'react'
import FullPage from 'components/FullPage/FullPage'
import Palmytree from 'components/Palmytree/Palmytree'
import useStyles from 'assets/jss/pages/HomePage/root'
import EnterBtn from 'components/Buttons/EnterBtn'

const HomePageVideo = () => {
    const classes = useStyles()

    return (
        <FullPage name='home' className={classes.root}>
            <div className={classes.palmyContainer}>
                <Palmytree variant='home' />
                <EnterBtn to='about' />
            </div>
        </FullPage>
    )
}

export default HomePageVideo
