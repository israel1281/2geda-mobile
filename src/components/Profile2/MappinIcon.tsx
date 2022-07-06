import { memo, SVGProps } from 'react';

const MappinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10 10.625a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'
      stroke='#000'
      strokeOpacity={0.8}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.25 8.125c0 5.625-6.25 10-6.25 10s-6.25-4.375-6.25-10a6.25 6.25 0 0 1 12.5 0v0Z'
      stroke='#000'
      strokeOpacity={0.8}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(MappinIcon);
export { Memo as MappinIcon };
