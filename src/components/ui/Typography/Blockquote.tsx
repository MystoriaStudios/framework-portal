import {cn} from '@/utils/cn';
import {ComponentProps} from 'react';

export function Blockquote({
                             className,
                             ...rest
                           }: ComponentProps<'blockquote'>) {
  const classNames = cn(
    'mt-6 border-l-2 border-neutral-300 pl-6 italic text-neutral-800 dark:border-neutral-600 dark:text-neutral-200',
    className
  );
  return <blockquote className={classNames} {...rest}></blockquote>;
}
