import { memo, SVGProps } from 'react';

const Ellipse14Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 47 50' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={23.5} cy={25} rx={23.5} ry={25} fill='#E5E5E5' fillOpacity={0.33} />
  </svg>
);

const Memo = memo(Ellipse14Icon);
export { Memo as Ellipse14Icon };
