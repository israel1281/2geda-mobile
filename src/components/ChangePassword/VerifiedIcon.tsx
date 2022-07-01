import { memo, SVGProps } from "react";

const VerifiedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m25 0 5.823 3.267 6.677.082 3.41 5.741 5.74 3.41.083 6.677L50 25l-3.267 5.823-.082 6.677-5.741 3.41-3.41 5.74-6.677.083L25 50l-5.823-3.267-6.677-.082-3.41-5.741-5.74-3.41-.083-6.677L0 25l3.267-5.823.082-6.677L9.09 9.09l3.41-5.74 6.677-.083L25 0Z"
      fill="#4F0DA3"
    />
    <path
      d="M24 28.75a2.344 2.344 0 1 0 0-4.688 2.344 2.344 0 0 0 0 4.688ZM24 28.75v2.813"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33.375 20.313h-18.75a.937.937 0 0 0-.938.937v13.125c0 .518.42.938.938.938h18.75c.518 0 .938-.42.938-.938V21.25a.937.937 0 0 0-.938-.938Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.781 20.313v-4.22a4.219 4.219 0 0 1 8.438 0"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Memo = memo(VerifiedIcon);
export { Memo as VerifiedIcon };
