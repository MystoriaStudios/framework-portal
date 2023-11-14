import { cn } from '@/utils/cn';
import { ComponentProps } from 'react';

export function H1({ className, ...rest }: ComponentProps<'h1'>) {
  const classNames = cn(
    'scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl krypton dark:text-white',
    className
  );
  return <h1 className={classNames} {...rest}></h1>;
}
