import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBurgerMenu = (props: SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || props.height || 16}
    height={props.height || props.width || 16}
    viewBox="0 0 24 24"
  >
    <rect width={24} height={2} y={11} rx={1} />
    <rect width={24} height={2} y={4} rx={1} />
    <rect width={24} height={2} y={18} rx={1} />
  </svg>
);
export default SvgBurgerMenu;
