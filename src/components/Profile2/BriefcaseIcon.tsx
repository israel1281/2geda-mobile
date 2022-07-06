import { memo, SVGProps } from 'react';

const BriefcaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.875 5.625H3.125a.625.625 0 0 0-.625.625v10c0 .345.28.625.625.625h13.75c.345 0 .625-.28.625-.625v-10a.625.625 0 0 0-.625-.625ZM13.125 5.625v-1.25a1.25 1.25 0 0 0-1.25-1.25h-3.75a1.25 1.25 0 0 0-1.25 1.25v1.25'
      stroke='#000'
      strokeOpacity={0.8}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.5 9.867a14.946 14.946 0 0 1-7.5 2.008 14.866 14.866 0 0 1-7.5-2.008M9.063 9.375h1.874'
      stroke='#000'
      strokeOpacity={0.8}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(BriefcaseIcon);
export { Memo as BriefcaseIcon };
