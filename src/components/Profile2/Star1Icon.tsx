import { memo, SVGProps } from 'react';

const Star1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='m7 0 1.63.915 1.87.023.955 1.607 1.607.955.023 1.87L14 7l-.915 1.63-.023 1.87-1.607.955-.955 1.607-1.87.023L7 14l-1.63-.915-1.87-.023-.955-1.607L.938 10.5.915 8.63 0 7l.915-1.63.023-1.87 1.607-.955L3.5.938 5.37.915 7 0Z'
      fill='#4F0DA3'
    />
  </svg>
);

const Memo = memo(Star1Icon);
export { Memo as Star1Icon };
