import { memo, SVGProps } from 'react';

const StorefrontIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6 17.45V26a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-8.55M6.75 5h18.5a1.012 1.012 0 0 1 .962.725L28 12H4l1.787-6.275A1.012 1.012 0 0 1 6.75 5v0Z'
      stroke='#000'
      strokeOpacity={0.3}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 12v2a4 4 0 1 1-8 0v-2M20 12v2a4 4 0 1 1-8 0v-2M28 12v2a4 4 0 1 1-8 0v-2'
      stroke='#000'
      strokeOpacity={0.3}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(StorefrontIcon);
export { Memo as StorefrontIcon };
