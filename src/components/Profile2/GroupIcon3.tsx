import { memo, SVGProps } from 'react';

const GroupIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 28 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='m27.049 13.186-1.484-9.244c-.288-2.32-1.91-3.654-4.45-3.654H9.613a3.76 3.76 0 0 0-2.735 1.196A1.355 1.355 0 0 0 5.827.991H1.52A1.37 1.37 0 0 0 .153 2.36V15a1.37 1.37 0 0 0 1.367 1.367h4.312c.498 0 .941-.27 1.18-.675l.16.039c.243.072 4.472 1.384 4.472 5.02v4.7a.66.66 0 0 0 .465.63c.05.017.714.222 1.567.222.736 0 1.61-.15 2.352-.697 1.019-.747 1.533-2.02 1.533-3.786v-4.196h5.818c.863 0 1.716-.321 2.397-.897.996-.852 1.489-2.214 1.273-3.542Zm-21.184 1.82a.038.038 0 0 1-.038.04H1.52a.038.038 0 0 1-.039-.04V2.365c0-.022.017-.039.039-.039h4.312c.022 0 .039.017.039.04v12.642h-.006Zm19.047.715a2.364 2.364 0 0 1-1.533.58h-6.487a.666.666 0 0 0-.665.665v4.86c0 1.318-.332 2.23-.985 2.712-.72.532-1.705.477-2.275.388v-4.168c0-1.97-.958-3.692-2.762-4.976-1.323-.936-2.635-1.312-2.69-1.329-.011 0-.017-.005-.028-.005L7.2 14.38v-10.6a.884.884 0 0 0 .028-.116 2.435 2.435 0 0 1 2.386-2.043H21.115c1.877 0 2.928.842 3.133 2.497 0 .01 0 .016.005.022l1.49 9.25c.138.88-.183 1.77-.83 2.33Z'
      fill='red'
    />
  </svg>
);

const Memo = memo(GroupIcon3);
export { Memo as GroupIcon3 };
