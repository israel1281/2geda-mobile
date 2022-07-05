import { memo, SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#prefix__a)'>
      <path
        d='m14.795 12.97-2.921-2.921a.703.703 0 0 0-.498-.205h-.478a6.064 6.064 0 0 0 1.29-3.75A6.093 6.093 0 0 0 6.093 0 6.093 6.093 0 0 0 0 6.094a6.093 6.093 0 0 0 6.094 6.093c1.415 0 2.716-.48 3.75-1.289v.478c0 .188.073.366.205.498l2.92 2.92a.7.7 0 0 0 .994 0l.829-.828a.706.706 0 0 0 .003-.996ZM6.094 9.844a3.748 3.748 0 0 1-3.75-3.75 3.748 3.748 0 0 1 3.75-3.75 3.748 3.748 0 0 1 3.75 3.75 3.748 3.748 0 0 1-3.75 3.75Z'
        fill='#000'
        fillOpacity={0.4}
      />
    </g>
    <defs>
      <clipPath id='prefix__a'>
        <path fill='#fff' d='M0 0h15v15H0z' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(SearchIcon);
export { Memo as SearchIcon };
