import React from 'react';

import { motion } from 'framer-motion';

type FadeInProps = {
  children: React.ReactNode;
  duration?: number;
};

// TODO: remove prune-ignore when use somewhere
// ts-prune-ignore-next
export const FadeInWhenVisible = ({
  children,
  duration = 0.3,
}: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{ opacity: 1 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};
