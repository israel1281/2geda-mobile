import { memo, SVGProps } from 'react';

const VectorIcon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 4 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M2 3.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z' fill='#000' fillOpacity={0.3} />
  </svg>
);

const Memo = memo(VectorIcon9);
export { Memo as VectorIcon9 };
