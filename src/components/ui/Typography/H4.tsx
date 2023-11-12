import { cn } from '@/utils/cn';
import { ComponentProps } from 'react';

export function H4({ className, ...rest }: ComponentProps<'h4'>) {
  const classNames = cn(
    'scroll-m-20 text-xl font-semibold tracking-tight krypton dark:text-white',
    className
  );
  return <h4 className={classNames} {...rest}></h4>;
}
