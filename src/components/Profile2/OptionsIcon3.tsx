import { memo, SVGProps } from 'react';

const OptionsIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 34 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={5.5} cy={6} rx={4.5} ry={5} stroke='#000' strokeOpacity={0.8} />
    <circle cx={17} cy={6} r={5} stroke='#000' strokeOpacity={0.8} />
    <ellipse cx={28.5} cy={6} rx={4.5} ry={5} stroke='#000' strokeOpacity={0.8} />
  </svg>
);

const Memo = memo(OptionsIcon3);
export { Memo as OptionsIcon3 };
