import { memo, SVGProps } from "react";

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 26 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.375 10H6.625M14.5 15.833 6.625 10 14.5 4.167"
      stroke="#000"
      strokeOpacity={0.6}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Memo = memo(ArrowLeftIcon);
export { Memo as ArrowLeftIcon };
