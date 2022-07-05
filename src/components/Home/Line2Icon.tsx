import { memo, SVGProps } from 'react';

const Line2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 190 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 1h190' stroke='#000' strokeOpacity={0.1} />
  </svg>
);

const Memo = memo(Line2Icon);
export { Memo as Line2Icon };
