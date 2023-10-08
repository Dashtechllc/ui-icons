import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDiamond = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || props.height || 16}
    height={props.height || props.width || 16}
    data-name="Layer 1"
    viewBox="0 0 24 24"
  >
    <path d="M24 9a5 5 0 0 1-.845 2.016l-8.783 11.82a3 3 0 0 1-4.722.029L.824 10.8A5.045 5.045 0 0 1 .045 9h6.268l4.753 12.359a1 1 0 0 0 1.868 0L17.687 9zm-6.3-2h6.257a4.974 4.974 0 0 0-.857-1.871l-2.558-3.454A4.006 4.006 0 0 0 17.287 0h-2.2zm-6.592-7L8.449 7h7.112l-2.606-7zM6.31 7l2.658-7H6.646a3.99 3.99 0 0 0-3.235 1.649L.938 4.891A4.99 4.99 0 0 0 0 7zm9.234 2H8.456L12 18.214z" />
  </svg>
);
export default SvgDiamond;
