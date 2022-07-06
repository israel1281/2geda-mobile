import { memo, SVGProps } from 'react';

const CheckCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 9 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#prefix__a)' stroke='#fff' strokeLinecap='round' strokeLinejoin='round'>
      <path d='M7.833 3.693V4A3.333 3.333 0 1 1 5.857.953' />
      <path d='M7.833 1.333 4.5 4.67l-1-1' />
    </g>
    <defs>
      <clipPath id='prefix__a'>
        <path fill='#fff' transform='translate(.5)' d='M0 0h8v8H0z' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(CheckCircleIcon);
export { Memo as CheckCircleIcon };
