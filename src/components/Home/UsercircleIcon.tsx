import { memo, SVGProps } from 'react';

const UsercircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z'
      stroke='#000'
      strokeOpacity={0.3}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16 20a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z'
      stroke='#000'
      strokeOpacity={0.3}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.975 24.925a9.001 9.001 0 0 1 16.05 0'
      stroke='#000'
      strokeOpacity={0.3}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(UsercircleIcon);
export { Memo as UsercircleIcon };
