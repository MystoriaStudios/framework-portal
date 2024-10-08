'use client';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

export function NavLink({
  href,
  ...props
}: {
  href: string;
} & ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const isActive =
    href == '/' ? pathname == href : pathname.includes(href.substring(1));
  return (
    <Link
      {...props}
      href={href}
      className={cn(isActive ? 'font-bold text-rose-800' : 'font-medium')}
    ></Link>
  );
}
