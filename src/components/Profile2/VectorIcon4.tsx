import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.675 19.1a11.988 11.988 0 1 1 4.2 4.2v0l-4.15 1.175A.988.988 0 0 1 1.5 23.25l1.175-4.15Z'
      stroke='#000'
      strokeOpacity={0.3}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
