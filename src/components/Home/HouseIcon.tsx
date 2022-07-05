import { memo, SVGProps } from 'react';

const HouseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19 26v-6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V14.437a1.038 1.038 0 0 1 .325-.737l10-9.087a1 1 0 0 1 1.35 0l10 9.087a1.039 1.039 0 0 1 .325.738V26a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z'
      fill='#4F0DA3'
    />
  </svg>
);

const Memo = memo(HouseIcon);
export { Memo as HouseIcon };
