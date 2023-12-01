const BootstrapIcon = ({className = ""}) => (
  <svg
    width="128"
    height="128"
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className= {className} 
  >
    <path
      d="M14.985 27.712C14.748 20.897 20.057 14.613 27.234 14.613H100.774C107.951 14.613 113.26 20.897 113.023 27.712C112.795 34.258 113.091 42.738 115.225 49.652C117.366 56.588 120.976 60.971 126.889 61.535V67.922C120.976 68.486 117.366 72.869 115.225 79.805C113.091 86.719 112.795 95.199 113.023 101.745C113.26 108.56 107.951 114.843 100.774 114.843H27.234C20.057 114.843 14.748 108.559 14.985 101.745C15.213 95.199 14.917 86.719 12.782 79.805C10.642 72.87 7.02201 68.486 1.10901 67.922V61.535C7.02201 60.972 10.642 56.588 12.782 49.652C14.917 42.738 15.212 34.258 14.985 27.712Z"
      fill="url(#paint0_linear_3_5)"
    />
    <g filter="url(#filter0_d_3_5)">
      <path
        d="M67.1098 91.7363C78.7288 91.7363 85.7303 86.0473 85.7303 76.6638C85.7303 69.5708 80.7346 64.4358 73.3166 63.6229V63.3274C78.7666 62.4408 83.0433 57.3797 83.0433 51.7276C83.0433 43.6741 76.6851 38.428 66.9963 38.428H45.1964V91.7363H67.1098ZM53.6741 45.1886H64.9526C71.0838 45.1886 74.5656 47.9223 74.5656 52.8726C74.5656 58.1555 70.5161 61.1108 63.1738 61.1108H53.6741V45.1886ZM53.6741 84.9757V67.428H64.8767C72.9002 67.428 77.0634 70.3832 77.0634 76.1464C77.0634 81.9094 73.014 84.9757 65.3688 84.9757H53.6741Z"
        fill="url(#paint1_linear_3_5)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_3_5"
        x="41.2659"
        y="35.4801"
        width="48.395"
        height="61.1693"
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
        <feOffset dy="0.98264" />
        <feGaussianBlur stdDeviation="1.96528" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_3_5"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_3_5"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_3_5"
        x1="19.7996"
        y1="17.2656"
        x2="129.708"
        y2="104.512"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#9013FE" />
        <stop offset="1" stop-color="#6610F2" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_3_5"
        x1="49.0317"
        y1="41.9361"
        x2="73.5977"
        y2="83.4845"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="#F1E5FC" />
      </linearGradient>
    </defs>
  </svg>
);

export default BootstrapIcon;
