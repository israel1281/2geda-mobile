import { memo, SVGProps } from 'react';

const DotsthreecircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z'
      stroke='#000'
      strokeOpacity={0.8}
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <path
      d='M16 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM22 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
      fill='#000'
    />
  </svg>
);

const Memo = memo(DotsthreecircleIcon);
export { Memo as DotsthreecircleIcon };
