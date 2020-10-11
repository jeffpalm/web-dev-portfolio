import React from 'react';
import PropTypes from 'prop-types';
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
            <Icon key={name + i} icon={palmTree} height={24} color='#fff' />
          )
      )}
    </motion.div>
  );
};

SkillStars.propTypes = {
  starCount: PropTypes.number,
  name: PropTypes.string
};

export default SkillStars;
