import { memo, SVGProps } from 'react';

const Ellipse19Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={6} cy={6} r={5} stroke='#000' strokeOpacity={0.8} />
  </svg>
);

const Memo = memo(Ellipse19Icon);
export { Memo as Ellipse19Icon };
