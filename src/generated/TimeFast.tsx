import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTimeFast = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || props.height || 16}
    height={props.height || props.width || 16}
    data-name="Layer 1"
    viewBox="0 0 24 24"
  >
    <path d="M9 24H1a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM7 20H1a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM5 16H1a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z" />
    <path d="M13 23.955a1 1 0 0 1-.089-2A10 10 0 1 0 2.041 11.09a1 1 0 0 1-1.992-.18A12 12 0 0 1 24 12a11.934 11.934 0 0 1-10.91 11.951.917.917 0 0 1-.09.004z" />
    <path d="M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1z" />
  </svg>
);
export default SvgTimeFast;
