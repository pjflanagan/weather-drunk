import React, { useState, useEffect } from 'react';

import * as Style from './style.module.scss';

type BlurbComponentProps = {
  children: string
}

export const BlurbComponent = ({
  children: blurb
}: BlurbComponentProps) => {
  const [animationKey, setAnimationKey] = useState<string>('key-0');

  useEffect(() => {
    const newKey = `key-${Math.random()}-${blurb.replace(' ', '').substring(0, 5)}`;
    setAnimationKey(newKey);
  }, [blurb]);

  return (
    <div className={Style.phraseHolder}>
      <div
        key={animationKey}
        className={Style.phrase}
      // onTransitionEnd={onTransitionEnd}
      >
        {blurb}
      </div>
    </div>
  );
}