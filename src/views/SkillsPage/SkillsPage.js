import React, {useEffect} from 'react'
import useStyles from 'assets/jss/pages/SkillsPage/root'
import variants from 'assets/animation/pages/SkillsPage/root'
import FullPage from '../../components/FullPage/FullPage'
import {
    MotionGridList,
    MotionGridListTile,
} from '../../components/MuiMotion/MuiMotion'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import skills from './skills'
import useWindowSize from "../../hooks/useWindowSize"
import {useAnimation} from "framer-motion";

const SkillsPage = () => {
    const classes = useStyles()
    const wS = useWindowSize()
    const controls = useAnimation()

    useEffect(() => {
        controls.start('enter')
    }, [controls])

    return (
        <FullPage name='skills'>
            <MotionGridList
                className={classes.gridList}
                cellHeight={(wS.height - 84)/8}
                spacing={1}
                cols={wS.width >= wS.height ? 8 : 2}
                inital='hidden'
                animate={controls}
                variants={{}}
            >
                {skills.map((skill, i) => (
                    <MotionGridListTile
                        key={skill.title}
                        cols={skill.featured ? 1 : 1}
                        rows={skill.featured ? 1 : 1}
                        variants={variants.gridListTile}
                        custom={i * 0.05}
                    >
                        <img src={skill.image} alt={skill.title} />
                        <GridListTileBar
                            className={classes.titleBar}
                            title={skill.title}
                            titlePosition='top'
                        />
                    </MotionGridListTile>
                ))}
            </MotionGridList>
        </FullPage>
    )
}

export default SkillsPage
