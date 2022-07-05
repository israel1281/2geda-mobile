import { memo, SVGProps } from 'react';

const Ellipse22Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 62 62' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={31} cy={31} r={31} fill='#4F0DA3' />
  </svg>
);

const Memo = memo(Ellipse22Icon);
export { Memo as Ellipse22Icon };
