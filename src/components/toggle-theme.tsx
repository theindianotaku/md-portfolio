'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  // Handle keyboard accessibility
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        toggleTheme();
      }
    },
    [toggleTheme],
  );

  if (!mounted) {
    // Render a placeholder to prevent layout shift
    return (
      <Button
        variant="ghost"
        size="icon"
        className="w-9 h-9"
        disabled
        aria-hidden="true"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] opacity-0" />
      </Button>
    );
  }

  // Determine current and target theme for accessibility labels
  const currentTheme = theme === 'dark' ? 'dark' : 'light';
  const targetTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      aria-label={`Switch to ${targetTheme} theme, current theme is ${currentTheme}`}
      className="w-9 h-9"
    >
      {theme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
