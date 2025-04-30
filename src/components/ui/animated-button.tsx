'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function AnimatedButton({ ...props }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Button {...props} />
    </motion.div>
  );
}
