import React from 'react'
import DownArrow from '../../components/DownArrow/DownArrow'
import FullPage from 'components/FullPage/FullPage'
import Palmytree from 'components/Palmytree/Palmytree'
import useStyles from 'assets/jss/pages/HomePage/root'
import useHslCycle from 'hooks/useHslCycle'

const HomePageVideo = () => {
    const classes = useStyles()
    const bgColorOne = useHslCycle(1, 0, 'forward')
    const bgColorTwo = useHslCycle(1, 0, 'backward')

    return (
        <FullPage name='home' className={classes.root}>
            <div className={classes.palmyContainer}>
                <Palmytree />
            </div>

            {/* <DownArrow
                to='about'
                bgColorOne={bgColorOne}
                bgColorTwo={bgColorTwo}
            /> */}
            
        </FullPage>
    )
}

export default HomePageVideo
