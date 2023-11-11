import {cn} from '@/utils/cn';
import {ComponentProps} from 'react';

export function H2({className, ...rest}: ComponentProps<'h2'>) {
  const classNames = cn(
    'dark:text-white mt-10 scroll-m-20 border-b border-b-neutral-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-neutral-700 krypton',
    className
  );
  return <h2 className={classNames} {...rest}></h2>;
}
