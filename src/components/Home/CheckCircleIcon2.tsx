import { memo, SVGProps } from 'react';

const CheckCircleIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M7.333 3.693V4A3.333 3.333 0 1 1 5.357.953' stroke='#fff' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.333 1.333 4 4.67l-1-1' stroke='#fff' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(CheckCircleIcon2);
export { Memo as CheckCircleIcon2 };
