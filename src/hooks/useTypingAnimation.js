import { useState, useEffect } from 'react';
import { codeSyntaxColor } from './utils/utils';

const useTypingAnimation = (
  text,
  speed,
  startDelay = 0,
  enter = true,
  codeHighlight = false,
  onEntered = null
) => {
  const [output, setOutput] = useState('');
  const [index, setIndex] = useState(0);
  // For start delay
  const [internalEnter, setInternalEnter] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (enter) {
        setInternalEnter(true);
      }
    }, startDelay);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enter]);

  useEffect(() => {
    let timeout;
    if (internalEnter) {
      timeout = setTimeout(() => {
        setOutput(output + text.charAt(index));
        if (index < text.length) {
          setIndex(index + 1);
        } else {
          if (onEntered) onEntered();
        }
      }, speed);
    }
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, output, speed, text, internalEnter]);

  return codeHighlight ? codeSyntaxColor(output) : output;
};

export default useTypingAnimation;
