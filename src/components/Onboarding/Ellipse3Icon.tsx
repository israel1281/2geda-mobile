import { memo, SVGProps } from "react";

const Ellipse3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 4 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={2} cy={2} r={2} fill="#B469EF" />
  </svg>
);

const Memo = memo(Ellipse3Icon);
export { Memo as Ellipse3Icon };
