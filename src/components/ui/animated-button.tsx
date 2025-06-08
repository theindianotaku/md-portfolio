'use client';

import { Button } from '@/components/ui/button';

export default function AnimatedButton({ className = '', ...props }) {
  return (
    <Button
      className={`transition-transform duration-150 ease-in-out hover:scale-[1.03] active:scale-[0.98] ${className}`}
      {...props}
    />
  );
}
