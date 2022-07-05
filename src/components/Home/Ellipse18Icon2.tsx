import { memo, SVGProps } from 'react';

const Ellipse18Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 11 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={5.5} cy={6} rx={4.5} ry={5} stroke='#000' strokeOpacity={0.8} />
  </svg>
);

const Memo = memo(Ellipse18Icon2);
export { Memo as Ellipse18Icon2 };
