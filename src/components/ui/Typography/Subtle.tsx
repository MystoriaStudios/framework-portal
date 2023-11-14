import { cn } from '@/utils/cn';
import { ComponentProps } from 'react';

export function Subtle({ className, ...rest }: ComponentProps<'p'>) {
  const classNames = cn(
    'text-sm text-neutral-500 dark:text-neutral-400',
    className
  );
  return <p className={classNames} {...rest}></p>;
}
