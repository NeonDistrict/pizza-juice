import React from 'react';

import { motion } from 'framer-motion';

type FadeInProps = {
  children: React.ReactNode;
  duration?: number;
};

export const FadeIn = ({ children, duration = 0.3 }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};
