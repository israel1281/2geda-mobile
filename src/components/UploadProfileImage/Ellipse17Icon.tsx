import { memo, SVGProps } from "react";

const Ellipse17Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 170 170"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={85} cy={85} r={85} fill="#B469EF" fillOpacity={0.31} />
  </svg>
);

const Memo = memo(Ellipse17Icon);
export { Memo as Ellipse17Icon };
