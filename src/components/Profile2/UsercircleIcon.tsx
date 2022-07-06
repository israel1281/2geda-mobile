import { memo, SVGProps } from 'react';

const UsercircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M32 0H0v32h32V0Z' fill='#fff' />
    <path
      d='M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z'
      fill='#4F0DA3'
      stroke='#4F0DA3'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z'
      stroke='#fff'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.975 23.925a9 9 0 0 1 16.05 0'
      stroke='#fff'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(UsercircleIcon);
export { Memo as UsercircleIcon };
