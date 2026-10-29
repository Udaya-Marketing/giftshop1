import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function SearchIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></svg>;
}

export function BagIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><path d="M4.5 8h15l1 12h-17l1-12Z" /><path d="M8.5 9V6a3.5 3.5 0 0 1 7 0v3" /></svg>;
}

export function HeartIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><path d="M20.2 8.6c0 5-8.2 10.1-8.2 10.1S3.8 13.6 3.8 8.6a4.2 4.2 0 0 1 8.2-1.3 4.2 4.2 0 0 1 8.2 1.3Z" /></svg>;
}

export function MenuIcon({ open, ...props }: IconProps & { open: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}><path d={open ? "m6 6 12 12M18 6 6 18" : "M3 7h18M3 12h18M3 17h18"} /></svg>;
}

export function SprigIcon(props: IconProps) {
  return <svg viewBox="0 0 96 120" fill="none" aria-hidden="true" {...props}><path d="M47 111c2-29 1-59 4-94M49 73c-14-2-26-11-31-25 16 0 28 7 32 19M50 54c15-4 25-15 29-29-15 2-26 10-29 23M48 91c-12-1-21-7-27-17 13 0 22 5 28 12M51 79c11-3 19-10 23-22-12 2-21 8-24 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
