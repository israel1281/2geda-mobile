import { memo, SVGProps } from 'react';

const VectorIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 22 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18.7 0c1.754 0 3.194 1.44 3.294 3.248L22 3.45v11.5c0 1.834-1.377 3.339-3.106 3.444l-.194.006h-3.85l-2.97 4.14c-.208.29-.534.46-.88.46-.303 0-.59-.13-.797-.357l-.083-.103-2.97-4.14H3.3c-1.754 0-3.194-1.44-3.294-3.248L0 14.95V3.45C0 1.616 1.377.111 3.106.006L3.3 0h15.4Zm0 2.3H3.3c-.563 0-1.029.445-1.093 1.016L2.2 3.45v11.5c0 .588.426 1.076.972 1.142l.128.008h4.4c.303 0 .59.13.797.357l.083.103L11 19.933l2.42-3.373a1.09 1.09 0 0 1 .751-.452l.129-.008h4.4c.563 0 1.029-.445 1.093-1.016l.007-.134V3.45c0-.588-.426-1.076-.972-1.142L18.7 2.3Zm-2.2 8.05c.607 0 1.1.515 1.1 1.15 0 .59-.425 1.076-.972 1.142l-.128.008h-11c-.607 0-1.1-.515-1.1-1.15 0-.59.425-1.076.972-1.142l.128-.008h11Zm0-4.6c.607 0 1.1.515 1.1 1.15 0 .59-.425 1.076-.972 1.142l-.128.008h-11c-.607 0-1.1-.515-1.1-1.15 0-.59.425-1.076.972-1.142L5.5 5.75h11Z'
      fill='#0E8119'
    />
  </svg>
);

const Memo = memo(VectorIcon6);
export { Memo as VectorIcon6 };
