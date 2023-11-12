import {cn} from '@/utils/cn';
import {ComponentProps} from 'react';

export function Large({className, ...rest}: ComponentProps<'div'>) {
  const classNames = cn(
    'text-lg font-semibold text-neutral-900 dark:text-neutral-50 krypton',
    className
  );
  return <div className={classNames} {...rest}></div>;
}
