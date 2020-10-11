import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typed from 'typed.js';

const TypingAnimation = ({
  strings,
  options = {
    strings,
    typeSpeed: 50,
    backSpeed: 50,
    loop: false,
    cursorChar: ''
  }
}) => {
  const [spanElement, setSpanElement] = useState(null);

  useEffect(() => {
    if (!spanElement) return;

    // eslint-disable-next-line
    const typed = new Typed(spanElement, options);

    // eslint-disable-next-line consistent-return
    return () => {
      typed.destroy();
    };
    // eslint-disable-next-line
  }, [spanElement]);

  return (
    <>
      <span
        style={{ whiteSpace: 'pre' }}
        ref={(element) => {
          setSpanElement(element);
        }}
      />
    </>
  );
};

TypingAnimation.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.objectOf(PropTypes.any)
};

export default TypingAnimation;
