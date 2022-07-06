import { memo, SVGProps } from 'react';

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M25 7 7 25M25 25 7 7'
      stroke='#fff'
      strokeOpacity={0.4}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(XIcon);
export { Memo as XIcon };
