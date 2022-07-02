import { memo, SVGProps } from "react";

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M44 0C19.712 0 0 19.712 0 44s19.712 44 44 44 44-19.712 44-44S68.288 0 44 0Zm0 13.2c7.304 0 13.2 5.896 13.2 13.2 0 7.304-5.896 13.2-13.2 13.2-7.304 0-13.2-5.896-13.2-13.2 0-7.304 5.896-13.2 13.2-13.2Zm0 62.48c-11 0-20.724-5.632-26.4-14.168.132-8.756 17.6-13.552 26.4-13.552 8.756 0 26.268 4.796 26.4 13.552C64.724 70.048 55 75.68 44 75.68Z"
      fill="#fff"
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
