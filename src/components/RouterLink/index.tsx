import type React from 'react';
import { Link } from 'react-router';

type RouterLinkProps = {
    children: React.ReactNode;
    href: string;
} & React.ComponentProps<'a'>;

export function RouterLink({ children, href, ...rest }: RouterLinkProps) {
    return <Link to={href} {...rest}>{children}</Link>;
}