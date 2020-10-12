import { useState, useEffect } from 'react';

const useDocumentSize = () => {
  const [output, setOutput] = useState({ height: 0, width: 0 });

  useEffect(() => {
    setOutput({
      height: document.body.scrollHeight,
      width: document.body.scrollWidth
    });
  }, []);

  return output;
};

export default useDocumentSize;
