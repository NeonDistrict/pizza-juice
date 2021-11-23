import * as React from 'react';
function SvgParts(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#parts_svg__pattern0)" d="M0 0h19.326v24H0z" />
      <defs>
        <pattern
          id="parts_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#parts_svg__image0_2932_6089"
            transform="scale(.00074 .0006)"
          />
        </pattern>
        <image
          id="parts_svg__image0_2932_6089"
          width={1344}
          height={1669}
        />
      </defs>
    </svg>
  );
}
export default SvgParts;