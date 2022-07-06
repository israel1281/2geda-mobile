import { memo, SVGProps } from 'react';

const Ellipse72Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 122 124' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={61} cy={62} rx={60} ry={61} stroke='url(#prefix__a)' strokeWidth={2} />
    <defs>
      <linearGradient id='prefix__a' x1={61} y1={1} x2={61} y2={123} gradientUnits='userSpaceOnUse'>
        <stop offset={0.336} stopColor='#B469EF' stopOpacity={0.79} />
        <stop offset={1} stopColor='#4F0DA3' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Ellipse72Icon);
export { Memo as Ellipse72Icon };
