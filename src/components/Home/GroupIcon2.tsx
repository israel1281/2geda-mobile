import { memo, SVGProps } from 'react';

const GroupIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M26.34 19.142c.553-.704.818-1.459.784-2.237-.034-.856-.417-1.527-.732-1.938.366-.913.507-2.35-.716-3.466-.896-.817-2.417-1.183-4.525-1.081a17.677 17.677 0 0 0-2.772.355h-.006c-.282.05-.58.112-.885.18-.022-.36.04-1.257.705-3.274.789-2.4.744-4.237-.147-5.466C17.111.925 15.618.823 15.178.823c-.423 0-.811.175-1.087.496-.626.727-.553 2.068-.474 2.688-.744 1.995-2.829 6.886-4.592 8.244-.034.023-.062.05-.09.079a6.054 6.054 0 0 0-1.105 1.656 2.325 2.325 0 0 0-1.115-.281H3.277a2.346 2.346 0 0 0-2.344 2.344v9.157a2.346 2.346 0 0 0 2.344 2.344h3.438c.501 0 .969-.158 1.352-.428l1.324.157c.203.028 3.81.485 7.511.412.671.05 1.302.079 1.888.079 1.009 0 1.888-.08 2.62-.237 1.725-.367 2.902-1.099 3.5-2.175a3.45 3.45 0 0 0 .383-2.158c1.121-1.015 1.318-2.136 1.279-2.925a3.807 3.807 0 0 0-.231-1.133ZM3.278 26.028a.824.824 0 0 1-.822-.822v-9.163c0-.456.371-.822.822-.822h3.438c.456 0 .822.371.822.822V25.2a.824.824 0 0 1-.822.823H3.277v.005Zm21.621-7.545a.757.757 0 0 0-.101.919c0 .005.23.4.26.94.039.739-.316 1.393-1.06 1.95a.768.768 0 0 0-.26.868c0 .006.243.75-.152 1.454-.377.676-1.217 1.16-2.49 1.431-1.02.22-2.406.26-4.108.124h-.079c-3.623.079-7.286-.394-7.325-.4h-.006l-.57-.067c.035-.158.052-.327.052-.496v-9.163c0-.242-.04-.479-.107-.698.101-.378.383-1.218 1.048-1.933 2.53-2.006 5.004-8.774 5.11-9.067a.713.713 0 0 0 .034-.377c-.095-.631-.062-1.403.074-1.634.298.005 1.104.09 1.589.76.574.795.552 2.215-.068 4.097-.947 2.868-1.026 4.378-.276 5.043.372.332.868.35 1.228.22.344-.08.67-.147.98-.197l.074-.017c1.73-.378 4.83-.609 5.905.372.913.833.265 1.938.192 2.056a.754.754 0 0 0 .135.98c.006.006.598.564.626 1.314.022.501-.214 1.014-.705 1.521Z'
      fill='#0A75C4'
    />
  </svg>
);

const Memo = memo(GroupIcon2);
export { Memo as GroupIcon2 };
