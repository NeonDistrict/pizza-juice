import React from 'react';

import { motion } from 'framer-motion';

type SlideProps = {
  direction: 'left' | 'right' | 'up' | 'down';
  children: React.ReactNode;
  duration?: number;
};

export const Slide = ({ direction, children, duration = 0.3 }: SlideProps) => {
  const directions = {
    left: { initial: { x: '-100%' }, animate: { x: 0 } },
    right: { initial: { x: '100%' }, animate: { x: 0 } },
    up: { initial: { y: '100%' }, animate: { y: 0 } },
    down: { initial: { y: '-100%' }, animate: { y: 0 } },
  };

  return (
    <motion.div transition={{ duration }} {...directions[direction]}>
      {children}
    </motion.div>
  );
};
