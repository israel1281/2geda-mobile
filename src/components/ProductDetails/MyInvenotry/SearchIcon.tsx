import { memo, SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#prefix__a)">
      <path
        d="M9.863 8.646 7.916 6.7a.468.468 0 0 0-.332-.136h-.318A4.062 4.062 0 1 0 0 4.063a4.062 4.062 0 0 0 6.563 3.203v.318c0 .125.048.244.136.332l1.947 1.947c.184.184.481.184.663 0l.552-.552a.471.471 0 0 0 .002-.665Zm-5.8-2.084c-1.381 0-2.5-1.117-2.5-2.5 0-1.38 1.117-2.5 2.5-2.5 1.38 0 2.5 1.118 2.5 2.5 0 1.381-1.118 2.5-2.5 2.5Z"
        fill="#000"
        fillOpacity={0.4}
      />
    </g>
    <defs>
      <clipPath id="prefix__a">
        <path fill="#fff" d="M0 0h10v10H0z" />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(SearchIcon);
export { Memo as SearchIcon };
