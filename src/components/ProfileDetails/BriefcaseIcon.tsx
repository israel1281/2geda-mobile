import { memo, SVGProps } from "react";

const BriefcaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.563 5.5h-3.438v-.688a2.071 2.071 0 0 0-2.063-2.062H8.939a2.071 2.071 0 0 0-2.063 2.063V5.5H3.437a1.375 1.375 0 0 0-1.374 1.375v11a1.375 1.375 0 0 0 1.374 1.375h15.126a1.375 1.375 0 0 0 1.375-1.375v-11A1.375 1.375 0 0 0 18.563 5.5ZM8.25 4.812a.688.688 0 0 1 .688-.687h4.124a.687.687 0 0 1 .688.688V5.5h-5.5v-.688Zm10.313 2.063v3.575A15.777 15.777 0 0 1 11 12.375a15.777 15.777 0 0 1-7.563-1.925V6.875h15.126ZM9.28 10.313a.688.688 0 0 1 .688-.688h2.062a.687.687 0 1 1 0 1.375H9.97a.687.687 0 0 1-.688-.688Z"
      fill="#000"
      fillOpacity={0.2}
    />
  </svg>
);

const Memo = memo(BriefcaseIcon);
export { Memo as BriefcaseIcon };
