// 뮤직바 배경이미지
export const MusicBarBackgroundSVG = () => (
  // <svg
  //   width="676"
  //   height="78"
  //   viewBox="0 0 676 78"
  //   fill="none"
  //   xmlns="http://www.w3.org/2000/svg"
  // >
  //   <path
  //     d="M0 0H0.00192736H676C646.355 0 624.844 11.4222 614.107 21.34C605.96 28.8659 595.186 45.8946 583.161 60.3441C571.136 74.7941 539.95 78.1326 532.637 77.996H149.069C129.526 77.996 110.757 65.8631 104.442 60.3441C96.2996 53.2289 84.0538 35.1393 62.0074 19.7042C39.9598 4.26923 11.483 0.136828 0 0Z"
  //     fill="currentColor"
  //   />
  // </svg>
  <svg
    width="756"
    height="158"
    viewBox="0 0 756 158"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_893_697)">
      <path
        d="M40 36H40.0019H716C686.355 36 664.844 47.4222 654.107 57.34C645.96 64.8659 635.186 81.8946 623.161 96.3441C611.136 110.794 579.95 114.133 572.637 113.996H189.069C169.526 113.996 150.757 101.863 144.442 96.3441C136.3 89.2289 124.054 71.1393 102.007 55.7042C79.9598 40.2692 51.483 36.1368 40 36Z"
        fill="#FF6297"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_893_697"
        x="0"
        y="0"
        width="756"
        height="158"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="20" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_893_697"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_893_697"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

// 셔플
export const ShuffleSVG = () => (
  <svg
    width="20"
    height="16"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.75 10.2501L18.9999 12.5L16.75 14.7499"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.75 1.25012L18.9999 3.50001L16.75 5.7499"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 12.5002H4.99337C5.61064 12.5002 6.21846 12.3478 6.76272 12.0565C7.30703 11.7652 7.77091 11.3441 8.11345 10.8305L10.0002 8.00012"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 3.50012H4.99337C5.61064 3.50012 6.21846 3.65251 6.76272 3.94377C7.30703 4.23508 7.77091 4.65622 8.11345 5.16981L11.8869 10.8306C12.2295 11.3442 12.6933 11.7654 13.2376 12.0566C13.7819 12.3479 14.3897 12.5003 15.007 12.5003H17.5004"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.4984 3.50012H15.0054C14.3882 3.50012 13.7804 3.65247 13.2362 3.94373C12.692 4.235 12.2282 4.65606 11.8857 5.16964L11.499 5.74985"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 이전
export const BackSVG = () => (
  <svg
    width="15"
    height="16"
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 16L5 8L15 0V16Z" fill="currentColor" />
    <path
      d="M1 15V1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

// 재생
export const PlaySVG = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="22" cy="22" r="22" fill="currentColor" />
    <path d="M20 14H16V30H20V14Z" fill="currentColor" />
    <path d="M28 14H24V30H28V14Z" fill="currentColor" />
  </svg>
);

// 정지
export const StopSVG = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="22" cy="22" r="22" fill="currentColor" />
    <path
      d="M31.2258 21.9999L17.9194 30.6043L17.9194 13.3956L31.2258 21.9999Z"
      fill="currentColor"
    />
  </svg>
);

// 다음
export const NextSVG = () => (
  <svg
    width="15"
    height="16"
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 16L10 8L0 0V16Z" fill="currentColor" />
    <path
      d="M14 15V1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

// 반복
export const RepeatSVG = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 4.25V3.75H0.5V4.25H1ZM17.8536 4.60355C18.0488 4.40829 18.0488 4.09171 17.8536 3.89645L14.6716 0.714466C14.4763 0.519204 14.1597 0.519204 13.9645 0.714466C13.7692 0.909728 13.7692 1.22631 13.9645 1.42157L16.7929 4.25L13.9645 7.07843C13.7692 7.27369 13.7692 7.59027 13.9645 7.78553C14.1597 7.9808 14.4763 7.9808 14.6716 7.78553L17.8536 4.60355ZM1 8.25H1.5V4.25H1H0.5V8.25H1ZM1 4.25V4.75H17.5V4.25V3.75H1V4.25Z"
      fill="currentColor"
    />
    <path
      d="M17.5 13.75V14.25H18V13.75H17.5ZM0.646446 13.3964C0.451185 13.5917 0.451185 13.9083 0.646446 14.1036L3.82843 17.2855C4.02369 17.4808 4.34027 17.4808 4.53553 17.2855C4.7308 17.0903 4.7308 16.7737 4.53553 16.5784L1.70711 13.75L4.53553 10.9216C4.7308 10.7263 4.7308 10.4097 4.53553 10.2145C4.34027 10.0192 4.02369 10.0192 3.82843 10.2145L0.646446 13.3964ZM17.5 9.75H17V13.75H17.5H18V9.75H17.5ZM17.5 13.75V13.25H1V13.75V14.25H17.5V13.75Z"
      fill="currentColor"
    />
  </svg>
);

// 반복(1곡만)
export const ReapeatOneSVG = ({ color }: { color: string }) => (
  <svg
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 6.25V5.75H0.5V6.25H1ZM17.8536 6.60355C18.0488 6.40829 18.0488 6.09171 17.8536 5.89645L14.6716 2.71447C14.4763 2.5192 14.1597 2.5192 13.9645 2.71447C13.7692 2.90973 13.7692 3.22631 13.9645 3.42157L16.7929 6.25L13.9645 9.07843C13.7692 9.27369 13.7692 9.59027 13.9645 9.78553C14.1597 9.9808 14.4763 9.9808 14.6716 9.78553L17.8536 6.60355ZM1 10.25H1.5V6.25H1H0.5V10.25H1ZM1 6.25V6.75H17.5V6.25V5.75H1V6.25Z"
      fill="currentColor"
    />
    <path
      d="M17.5 15.75V16.25H18V15.75H17.5ZM0.646447 15.3964C0.451184 15.5917 0.451184 15.9083 0.646447 16.1036L3.82843 19.2855C4.02369 19.4808 4.34027 19.4808 4.53553 19.2855C4.7308 19.0903 4.7308 18.7737 4.53553 18.5784L1.70711 15.75L4.53553 12.9216C4.7308 12.7263 4.7308 12.4097 4.53553 12.2145C4.34027 12.0192 4.02369 12.0192 3.82843 12.2145L0.646447 15.3964ZM17.5 11.75H17V15.75H17.5H18V11.75H17.5ZM17.5 15.75V15.25H1V15.75V16.25H17.5V15.75Z"
      fill="currentColor"
    />
    <rect width="10" height="10" rx="5" fill="currentColor" />
    <path
      d="M6.13379 2.13672V8.5H4.80664V3.39355H4.77148L3.3125 4.30762V3.13867L4.88574 2.13672H6.13379Z"
      fill={color}
    />
  </svg>
);
