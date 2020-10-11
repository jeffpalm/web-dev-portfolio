import React from 'react';
// import StarIcon from '@material-ui/icons/Star'
import { Icon } from '@iconify/react';
import palmTree from '@iconify/icons-twemoji/palm-tree';
import { motion } from 'framer-motion';

const SkillStars = ({ starCount, name }) => {
  const stars = [null, null, null, null, null];
  return (
    <motion.div>
      {stars.map(
        (star, i) =>
          i + 1 <= starCount && (
            // <StarIcon key={name + i} color='primary' />
            <Icon key={name + i} icon={palmTree} height={24} color='#fff' />
          )
      )}
    </motion.div>
  );
};

export default SkillStars;
