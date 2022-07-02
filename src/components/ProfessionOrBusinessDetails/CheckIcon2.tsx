import { memo, SVGProps } from 'react';

const CheckIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M10 3 4.5 8.5 2 6' stroke='#4F0DA3' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(CheckIcon2);
export { Memo as CheckIcon2 };
