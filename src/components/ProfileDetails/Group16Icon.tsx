import { memo, SVGProps } from 'react';

const Group16Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 162 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect y={1} width={37} height={35} rx={8} fill='#C4C4C4' fillOpacity={0.2} />
    <rect x={45} width={37} height={35} rx={8} fill='#C4C4C4' fillOpacity={0.2} />
    <rect x={90} width={72} height={35} rx={8} fill='#C4C4C4' fillOpacity={0.2} />
  </svg>
);

const Memo = memo(Group16Icon);
export { Memo as Group16Icon };
