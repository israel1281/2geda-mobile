import { memo, SVGProps } from "react";

const CameraIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.313 20.313H4.688a1.563 1.563 0 0 1-1.563-1.563V7.812A1.562 1.562 0 0 1 4.688 6.25h3.125l1.562-2.344h6.25l1.563 2.344h3.125a1.563 1.563 0 0 1 1.562 1.563V18.75a1.563 1.563 0 0 1-1.563 1.563Z"
      stroke="#000"
      strokeOpacity={0.5}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 16.406a3.516 3.516 0 1 0 0-7.03 3.516 3.516 0 0 0 0 7.03Z"
      stroke="#000"
      strokeOpacity={0.5}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Memo = memo(CameraIcon);
export { Memo as CameraIcon };
