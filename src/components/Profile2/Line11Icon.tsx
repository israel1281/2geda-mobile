import { memo, SVGProps } from 'react';

const Line11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 324 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path opacity={0.5} d='m1 2 322-1' stroke='#000' strokeOpacity={0.1} />
  </svg>
);

const Memo = memo(Line11Icon);
export { Memo as Line11Icon };
