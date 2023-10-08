import * as React from 'react';
import type { SVGProps } from 'react';
const SvgVector = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || props.height || 16}
    height={props.height || props.width || 16}
    viewBox="0 0 24 24"
  >
    <path d="M21 16v-4a8.983 8.983 0 0 0-3.356-7h2.633a1.991 1.991 0 1 0-.009-2h-4.41a3.981 3.981 0 0 0-7.716 0H3.723a1.991 1.991 0 1 0 .009 2h2.624A8.983 8.983 0 0 0 3 12v4a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3v-4a7 7 0 0 1 3.521-6.065 3.963 3.963 0 0 0 6.958 0A7 7 0 0 1 19 12v4a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3ZM6 19v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm6-13a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm10 15a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z" />
  </svg>
);
export default SvgVector;
