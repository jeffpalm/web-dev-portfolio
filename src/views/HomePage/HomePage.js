import React from 'react'
// STYLE/ANIMATION
import useStyles from 'views/HomePage/HomePageStyle'
// COMPONENTS
import FullPage from 'components/FullPage/FullPage'
import Palmytree from 'components/Palmytree/Palmytree'
import EnterBtn from 'components/Buttons/EnterBtn/EnterBtn'

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
