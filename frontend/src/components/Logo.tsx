import React from 'react';
import { useTheme } from '@mui/material';

export function Logo({
  width,
  height,
  showSlogan,
  square = false,
}: {
  width?: number;
  height?: number;
  square?: boolean;
  showSlogan?: boolean;
}) {
  const theme = useTheme();

  return !square ? (
    <svg
      width={width}
      height={height}
      viewBox="0 0 332.8125 377.35520382244863"
      className="css-1j8o68f"
    >
      <g
        transform="matrix(6.709927577684827,0,0,6.709927577684827,0.00004937197020779118,0.028004188936314154)"
        fill={theme.palette.primary.main}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M23.11 55.78L1.69 43.41A3.39 3.39 0 0 1 0 40.48V15.75a3.39 3.39 0 0 1 1.69-2.94L23.11.45a3.39 3.39 0 0 1 3.39 0l21.41 12.37a3.39 3.39 0 0 1 1.69 2.94v24.72a3.39 3.39 0 0 1-1.69 2.94L26.5 55.78a3.39 3.39 0 0 1-3.39 0z"
        />
      </g>
      <g
        transform="matrix(0.9756323372592985,0,0,0.9756323372592985,118.21837941529307,100.21837941529306)"
        fill={theme.palette.secondary.main}
      >
        <g xmlns="http://www.w3.org/2000/svg">
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            points="49.896,32.681 22.749,6.951 49.896,48.498 77.043,6.951 49.896,32.681     "
          />
          <circle fillRule="evenodd" clipRule="evenodd" cx="49.896" cy="23.019" r="4.907" />
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            points="49.896,67.319 22.749,93.049 49.896,51.502 77.043,93.049 49.896,67.319     "
          />
          <circle fillRule="evenodd" clipRule="evenodd" cx="49.896" cy="76.981" r="4.907" />
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            points="32.681,49.7 6.951,76.846 48.498,49.7 6.951,22.553 32.681,49.7  "
          />
          <circle fillRule="evenodd" clipRule="evenodd" cx="23.019" cy="49.7" r="4.907" />
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            points="67.319,49.7 93.049,76.846 51.502,49.7 93.049,22.553 67.319,49.7  "
          />
          <circle fillRule="evenodd" clipRule="evenodd" cx="76.981" cy="49.7" r="4.907" />
        </g>
      </g>
      <g
        fill={theme.palette.primary.contrastText}
        transform="matrix(0.8919750757098823,0,0,0.8919750757098823,58.65007209120151,205.70561964305074)"
      >
        <path d="M27.42 39.32 c0.14 0.4 -0.04 0.68 -0.48 0.68 l-5.48 0 c-0.32 0 -0.56 -0.12 -0.68 -0.48 l-1.28 -3.88 l-10.02 0 l-1.28 3.88 c-0.1 0.36 -0.36 0.48 -0.68 0.48 l-5.48 0 c-0.44 0 -0.62 -0.28 -0.48 -0.68 l9.8 -26.84 c0.12 -0.32 0.36 -0.48 0.68 -0.48 l4.8 0 c0.32 0 0.66 0.16 0.78 0.48 z M11.3 30.18 l6.4 0 l-3.2 -9.68 z M51.620000000000005 17.68 l-6.34 0 l0 16.64 l6.34 0 c0.36 0 0.6 0.24 0.6 0.6 l0 4.48 c0 0.36 -0.24 0.6 -0.6 0.6 l-19.14 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -4.48 c0 -0.36 0.24 -0.6 0.6 -0.6 l6.34 0 l0 -16.64 l-6.34 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -4.48 c0 -0.36 0.24 -0.6 0.6 -0.6 l19.14 0 c0.36 0 0.6 0.24 0.6 0.6 l0 4.48 c0 0.36 -0.24 0.6 -0.6 0.6 z M77.32000000000001 26.48 c0.36 0 0.6 0.24 0.6 0.6 l0 3.84 c0 0.36 -0.24 0.6 -0.6 0.6 l-18.8 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -3.84 c0 -0.36 0.24 -0.6 0.6 -0.6 l18.8 0 z M108.14 39.32 c0.14 0.4 -0.04 0.68 -0.48 0.68 l-5.48 0 c-0.32 0 -0.56 -0.12 -0.68 -0.48 l-1.28 -3.88 l-10.02 0 l-1.28 3.88 c-0.1 0.36 -0.36 0.48 -0.68 0.48 l-5.48 0 c-0.44 0 -0.62 -0.28 -0.48 -0.68 l9.8 -26.84 c0.12 -0.32 0.36 -0.48 0.68 -0.48 l4.8 0 c0.32 0 0.66 0.16 0.78 0.48 z M92.02 30.18 l6.4 0 l-3.2 -9.68 z M121.32000000000001 28.02 c3.54 0.44 9.4 0.82 9.4 6.1 c0 3.9 -3.36 6.4 -9.16 6.4 c-5.68 0 -9.14 -1.64 -9.64 -6.78 c-0.04 -0.4 0.26 -0.6 0.62 -0.6 l4.72 0 c0.36 0 0.5 0.16 0.54 0.38 c0.26 1.34 1.32 1.96 3.6 1.96 c2.02 0 3.22 -0.42 3.22 -1.58 c0 -1 -1.5 -1.38 -3.3 -1.6 c-3.52 -0.44 -9.06 -0.7 -9.06 -5.92 c0 -3.92 3.26 -6.42 8.78 -6.42 c5.26 0 8.8 1.58 9.3 6.72 c0.04 0.4 -0.26 0.6 -0.62 0.6 l-4.74 0 c-0.36 0 -0.5 -0.16 -0.54 -0.38 c-0.26 -1.34 -1.4 -1.92 -3.24 -1.92 c-1.68 0 -2.82 0.42 -2.82 1.56 c0 0.92 1.18 1.28 2.94 1.48 z M144.64000000000001 28.02 c3.54 0.44 9.4 0.82 9.4 6.1 c0 3.9 -3.36 6.4 -9.16 6.4 c-5.68 0 -9.14 -1.64 -9.64 -6.78 c-0.04 -0.4 0.26 -0.6 0.62 -0.6 l4.72 0 c0.36 0 0.5 0.16 0.54 0.38 c0.26 1.34 1.32 1.96 3.6 1.96 c2.02 0 3.22 -0.42 3.22 -1.58 c0 -1 -1.5 -1.38 -3.3 -1.6 c-3.52 -0.44 -9.06 -0.7 -9.06 -5.92 c0 -3.92 3.26 -6.42 8.78 -6.42 c5.26 0 8.8 1.58 9.3 6.72 c0.04 0.4 -0.26 0.6 -0.62 0.6 l-4.74 0 c-0.36 0 -0.5 -0.16 -0.54 -0.38 c-0.26 -1.34 -1.4 -1.92 -3.24 -1.92 c-1.68 0 -2.82 0.42 -2.82 1.56 c0 0.92 1.18 1.28 2.94 1.48 z M168.8 17.06 c-1.84 0 -3.34 -1.48 -3.34 -3.32 s1.5 -3.32 3.34 -3.32 c1.82 0 3.32 1.48 3.32 3.32 s-1.5 3.32 -3.32 3.32 z M176.98000000000002 35 c0.36 0 0.6 0.24 0.6 0.6 l0 3.8 c0 0.36 -0.24 0.6 -0.6 0.6 l-17.54 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -3.8 c0 -0.36 0.24 -0.6 0.6 -0.6 l6.18 0 l0 -9.6 l-5.18 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -3.8 c0 -0.36 0.24 -0.6 0.6 -0.6 l10.82 0 c0.36 0 0.6 0.24 0.6 0.6 l0 14 l5.12 0 z M191.5 28.02 c3.54 0.44 9.4 0.82 9.4 6.1 c0 3.9 -3.36 6.4 -9.16 6.4 c-5.68 0 -9.14 -1.64 -9.64 -6.78 c-0.04 -0.4 0.26 -0.6 0.62 -0.6 l4.72 0 c0.36 0 0.5 0.16 0.54 0.38 c0.26 1.34 1.32 1.96 3.6 1.96 c2.02 0 3.22 -0.42 3.22 -1.58 c0 -1 -1.5 -1.38 -3.3 -1.6 c-3.52 -0.44 -9.06 -0.7 -9.06 -5.92 c0 -3.92 3.26 -6.42 8.78 -6.42 c5.26 0 8.8 1.58 9.3 6.72 c0.04 0.4 -0.26 0.6 -0.62 0.6 l-4.74 0 c-0.36 0 -0.5 -0.16 -0.54 -0.38 c-0.26 -1.34 -1.4 -1.92 -3.24 -1.92 c-1.68 0 -2.82 0.42 -2.82 1.56 c0 0.92 1.18 1.28 2.94 1.48 z M225.54 36.32 c0.18 0.22 0.28 0.56 0.1 0.84 c-0.76 1.12 -2.9 3.16 -6.86 3.16 c-4.42 0 -8.54 -1.3 -8.54 -8.04 l0 -6.88 l-4.54 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -3.8 c0 -0.36 0.24 -0.6 0.6 -0.6 l4.54 0 l0 -5.2 c0 -0.36 0.24 -0.6 0.6 -0.6 l5.04 0 c0.36 0 0.6 0.24 0.6 0.6 l0 5.2 l6.78 0 c0.36 0 0.6 0.24 0.6 0.6 l0 3.8 c0 0.36 -0.24 0.6 -0.6 0.6 l-6.78 0 l0 5.94 c0 3.14 1.88 3.46 3.56 3.46 c0.98 0 1.9 -0.36 2.64 -0.88 c0.28 -0.22 0.6 -0.24 0.84 0.04 z" />
      </g>
      {showSlogan && (
        <g
          fill={theme.palette.secondary.main}
          transform="matrix(0.2725050932799059,0,0,0.2725050932799059,59.68934419755912,260.6647248869998)"
        >
          <path d="M1.14 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 4.72 l-3 0 l0 -12.24 z M26.401 17.32 c1.46 0 2.3 -0.86 2.3 -2.32 s-0.84 -2.32 -2.3 -2.32 s-2.3 0.86 -2.3 2.32 s0.84 2.32 2.3 2.32 z M26.401 20.1 c-3.08 0 -5.3 -2.04 -5.3 -5.1 c0 -3.16 2.3 -5.1 5.3 -5.1 c3.1 0 5.3 2.04 5.3 5.1 c0 3.14 -2.32 5.1 -5.3 5.1 z M46.482 15 l0 5 l-3 0 l0 -4.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 z M83.264 15 c-0.08 -1.46 -0.74 -2.32 -2.26 -2.32 c-0.42 0 -0.78 0.06 -1.08 0.18 c-0.92 0.42 -1.26 1.2 -1.26 2.16 c0 0.32 0.04 0.62 0.14 0.88 c0.3 1.04 1.2 1.42 2.2 1.42 c1.52 0 2.26 -0.82 2.26 -2.32 z M87.064 20 l-3 0 c-0.2 -0.5 -0.38 -1 -0.5 -1.52 c-0.68 1.12 -1.72 1.62 -3 1.62 c-2.86 0 -4.9 -2.4 -4.9 -5.14 c0 -3.16 2.36 -5.06 5.34 -5.06 c3.18 0 5.18 2.04 5.26 5.1 c0.02 0.26 0.02 0.56 0.02 0.92 c0 1.4 0.22 2.8 0.78 4.08 z M112.926 19.68 l0 -2.8 c1.32 0.4 2.98 0.48 4.34 0.48 c0.54 0 0.96 -0.02 1.26 -0.08 c0.28 -0.04 0.42 -0.14 0.42 -0.28 c0 -0.06 -0.02 -0.1 -0.06 -0.16 c-0.2 -0.2 -0.64 -0.3 -0.9 -0.36 s-0.6 -0.14 -1.02 -0.22 c-0.34 -0.06 -0.74 -0.14 -1.2 -0.24 c-1.56 -0.34 -2.76 -1.22 -2.76 -2.9 c0 -2.48 2.42 -3.22 4.46 -3.22 c1.28 0 2.56 0.18 3.82 0.44 l0 2.82 c-1.26 -0.38 -2.68 -0.48 -4 -0.48 c-0.52 0 -0.88 0.02 -1.1 0.08 s-0.34 0.16 -0.34 0.28 c0 0.18 0.18 0.3 0.52 0.36 c0.34 0.08 0.82 0.18 1.4 0.28 c0.52 0.1 1.02 0.2 1.5 0.32 c1.48 0.38 2.54 1.18 2.54 2.78 c0 2.68 -2.7 3.34 -4.86 3.34 c-1.36 0 -2.7 -0.18 -4.02 -0.44 z M149.587 14.6 l0 5.4 l-3 0 l0 -5.4 c0 -1.14 -0.54 -1.92 -1.74 -1.92 c-1.18 0 -1.76 0.8 -1.76 1.92 l0 5.4 l-3 0 l0 -5.4 c0 -1.14 -0.58 -1.92 -1.78 -1.92 c-1.18 0 -1.72 0.8 -1.72 1.92 l0 5.4 l-3 0 l0 -5.4 c0 -2.9 1.98 -4.7 4.76 -4.7 c1.42 0 2.52 0.66 3.24 1.88 c0.72 -1.22 1.82 -1.88 3.24 -1.88 c2.88 0 4.76 1.9 4.76 4.7 z M168.808 15 c-0.08 -1.46 -0.74 -2.32 -2.26 -2.32 c-0.42 0 -0.78 0.06 -1.08 0.18 c-0.92 0.42 -1.26 1.2 -1.26 2.16 c0 0.32 0.04 0.62 0.14 0.88 c0.3 1.04 1.2 1.42 2.2 1.42 c1.52 0 2.26 -0.82 2.26 -2.32 z M172.60799999999998 20 l-3 0 c-0.2 -0.5 -0.38 -1 -0.5 -1.52 c-0.68 1.12 -1.72 1.62 -3 1.62 c-2.86 0 -4.9 -2.4 -4.9 -5.14 c0 -3.16 2.36 -5.06 5.34 -5.06 c3.18 0 5.18 2.04 5.26 5.1 c0.02 0.26 0.02 0.56 0.02 0.92 c0 1.4 0.22 2.8 0.78 4.08 z M187.16899999999998 15 l0 5 l-3 0 l0 -4.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 z M207.70999999999998 10.34 l0 2.78 l-2.8 0 l0 1.88 c0 1.54 1.02 2.32 2.5 2.32 c0.18 0 0.34 -0.02 0.48 -0.04 s0.26 -0.04 0.4 -0.06 l0 2.78 c-0.18 0.02 -0.32 0.06 -0.42 0.08 c-0.12 0.02 -0.32 0.02 -0.58 0.02 c-3.02 0 -5.38 -2.06 -5.38 -5.1 l0 -7.4 l3 0 l0 2.74 l2.8 0 z M222.49099999999999 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M228.151 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z M243.792 15 l0 5 l-3 0 l0 -4.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 z M262.333 18.9 l-1.44 4.1 l-1.44 0 l1.06 -3.04 c-0.92 -0.04 -1.54 -0.8 -1.54 -1.7 c0 -1.02 0.72 -1.74 1.74 -1.74 c1.06 0 1.72 0.68 1.72 1.74 c0 0.2 -0.04 0.42 -0.1 0.64 z M305.77500000000003 14.6 l0 5.4 l-3 0 l0 -5.4 c0 -1.14 -0.54 -1.92 -1.74 -1.92 c-1.18 0 -1.76 0.8 -1.76 1.92 l0 5.4 l-3 0 l0 -5.4 c0 -1.14 -0.58 -1.92 -1.78 -1.92 c-1.18 0 -1.72 0.8 -1.72 1.92 l0 5.4 l-3 0 l0 -5.4 c0 -2.9 1.98 -4.7 4.76 -4.7 c1.42 0 2.52 0.66 3.24 1.88 c0.72 -1.22 1.82 -1.88 3.24 -1.88 c2.88 0 4.76 1.9 4.76 4.7 z M322.6960000000001 17.32 c1.46 0 2.3 -0.86 2.3 -2.32 s-0.84 -2.32 -2.3 -2.32 s-2.3 0.86 -2.3 2.32 s0.84 2.32 2.3 2.32 z M322.6960000000001 20.1 c-3.08 0 -5.3 -2.04 -5.3 -5.1 c0 -3.16 2.3 -5.1 5.3 -5.1 c3.1 0 5.3 2.04 5.3 5.1 c0 3.14 -2.32 5.1 -5.3 5.1 z M342.77700000000004 15 l0 5 l-3 0 l0 -4.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 z M360.178 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M365.838 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z M395.94000000000005 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M401.6000000000001 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z M419.7010000000001 10.34 l0 2.78 l-2.46 0 l0 6.88 l-3 0 l0 -9.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 l0 0.34 l2.46 0 z M437.70200000000006 10.34 l0 2.78 l-2.46 0 l0 6.88 l-3 0 l0 -9.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 l0 0.34 l2.46 0 z M450.14300000000003 10 l3 0 l0 10 l-3 0 l0 -10 z M451.64300000000003 9.06 c-1.02 0 -1.74 -0.72 -1.74 -1.74 c0 -1.04 0.72 -1.72 1.74 -1.72 c1.04 0 1.72 0.68 1.72 1.72 c0 1.06 -0.66 1.74 -1.72 1.74 z M473.46400000000006 16.7 l0 3 c-1.02 0.34 -2.08 0.44 -3.14 0.44 c-3.1 0 -5.3 -2.06 -5.3 -5.12 c0 -3.18 2.28 -5.12 5.3 -5.12 c1.06 0 2.12 0.1 3.14 0.44 l0 3 c-0.88 -0.46 -1.98 -0.58 -2.96 -0.58 c-0.66 0 -1.46 0.14 -1.92 0.66 c-0.42 0.42 -0.56 1.02 -0.56 1.58 c0 0.32 0.04 0.62 0.14 0.88 c0.08 0.28 0.22 0.52 0.42 0.72 c0.44 0.54 1.26 0.68 1.92 0.68 c0.88 0 2.18 -0.16 2.96 -0.58 z M485.605 10 l3 0 l0 10 l-3 0 l0 -10 z M487.105 9.06 c-1.02 0 -1.74 -0.72 -1.74 -1.74 c0 -1.04 0.72 -1.72 1.74 -1.72 c1.04 0 1.72 0.68 1.72 1.72 c0 1.06 -0.66 1.74 -1.72 1.74 z M503.766 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M509.42600000000004 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z M532.267 15 l0 5 l-3 0 l0 -5 c0 -1.38 -0.64 -2.32 -2.1 -2.32 c-1.44 0 -2.1 0.96 -2.1 2.32 l0 5 l-3 0 l0 -5 c0 -3.08 2.12 -5.1 5.1 -5.1 c3.1 0 5.1 2.12 5.1 5.1 z M550.108 10.34 l0 2.78 l-2.8 0 l0 1.88 c0 1.54 1.02 2.32 2.5 2.32 c0.18 0 0.34 -0.02 0.48 -0.04 s0.26 -0.04 0.4 -0.06 l0 2.78 c-0.18 0.02 -0.32 0.06 -0.42 0.08 c-0.12 0.02 -0.32 0.02 -0.58 0.02 c-3.02 0 -5.38 -2.06 -5.38 -5.1 l0 -7.4 l3 0 l0 2.74 l2.8 0 z M580.05 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M585.7099999999999 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z M602.8909999999998 17.12 l-2.1 2.88 l-3.3 0 l3.76 -5.14 l-3.56 -4.86 l3.3 0 l1.9 2.6 l1.9 -2.6 l3.3 0 l-3.54 4.86 l3.74 5.14 l-3.3 0 z M622.7919999999999 15 c0 1.48 0.74 2.32 2.24 2.32 c0.42 0 0.8 -0.06 1.1 -0.2 c0.56 -0.22 0.94 -0.64 1.14 -1.22 c0.08 -0.28 0.12 -0.58 0.12 -0.9 s-0.04 -0.62 -0.12 -0.9 c-0.22 -0.62 -0.56 -0.96 -1.14 -1.24 c-0.3 -0.12 -0.68 -0.18 -1.1 -0.18 c-1.5 0 -2.24 0.84 -2.24 2.32 z M622.7919999999999 19 l0 5 l-3 0 l0 -9 c0 -3.2 2.26 -5.1 5.28 -5.1 c3.08 0 5.32 2.02 5.32 5.08 c0 2.84 -2.14 5.12 -4.98 5.12 c-0.58 0 -1.08 -0.1 -1.5 -0.3 c-0.44 -0.18 -0.82 -0.46 -1.12 -0.8 z M644.853 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M650.5129999999999 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z M666.1539999999999 15 l0 5 l-3 0 l0 -4.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 z M680.8749999999999 10 l3 0 l0 10 l-3 0 l0 -10 z M682.3749999999999 9.06 c-1.02 0 -1.74 -0.72 -1.74 -1.74 c0 -1.04 0.72 -1.72 1.74 -1.72 c1.04 0 1.72 0.68 1.72 1.72 c0 1.06 -0.66 1.74 -1.72 1.74 z M699.036 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M704.6959999999999 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z M727.5369999999999 15 l0 5 l-3 0 l0 -5 c0 -1.38 -0.64 -2.32 -2.1 -2.32 c-1.44 0 -2.1 0.96 -2.1 2.32 l0 5 l-3 0 l0 -5 c0 -3.08 2.12 -5.1 5.1 -5.1 c3.1 0 5.1 2.12 5.1 5.1 z M747.5979999999998 16.7 l0 3 c-1.02 0.34 -2.08 0.44 -3.14 0.44 c-3.1 0 -5.3 -2.06 -5.3 -5.12 c0 -3.18 2.28 -5.12 5.3 -5.12 c1.06 0 2.12 0.1 3.14 0.44 l0 3 c-0.88 -0.46 -1.98 -0.58 -2.96 -0.58 c-0.66 0 -1.46 0.14 -1.92 0.66 c-0.42 0.42 -0.56 1.02 -0.56 1.58 c0 0.32 0.04 0.62 0.14 0.88 c0.08 0.28 0.22 0.52 0.42 0.72 c0.44 0.54 1.26 0.68 1.92 0.68 c0.88 0 2.18 -0.16 2.96 -0.58 z M762.2589999999999 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M767.9189999999999 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z M783.9999999999998 18.38 c0 1.02 -0.7 1.72 -1.72 1.72 s-1.74 -0.68 -1.74 -1.72 c0 -1.02 0.72 -1.74 1.74 -1.74 c1.06 0 1.72 0.68 1.72 1.74 z" />
        </g>
      )}
    </svg>
  ) : (
    <svg width={height} height={width} viewBox="0 0 360 244" className="css-1j8o68f">
      <g
        transform="matrix(1.4634485058889477,0,0,1.4634485058889477,106.8275691229396,4.827569122939595)"
        fill={theme.palette.secondary.main}
      >
        <g xmlns="http://www.w3.org/2000/svg">
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            points="49.896,32.681 22.749,6.951 49.896,48.498 77.043,6.951 49.896,32.681     "
          />
          <circle fillRule="evenodd" clipRule="evenodd" cx="49.896" cy="23.019" r="4.907" />
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            points="49.896,67.319 22.749,93.049 49.896,51.502 77.043,93.049 49.896,67.319     "
          />
          <circle fillRule="evenodd" clipRule="evenodd" cx="49.896" cy="76.981" r="4.907" />
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            points="32.681,49.7 6.951,76.846 48.498,49.7 6.951,22.553 32.681,49.7  "
          />
          <circle fillRule="evenodd" clipRule="evenodd" cx="23.019" cy="49.7" r="4.907" />
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            points="67.319,49.7 93.049,76.846 51.502,49.7 93.049,22.553 67.319,49.7  "
          />
          <circle fillRule="evenodd" clipRule="evenodd" cx="76.981" cy="49.7" r="4.907" />
        </g>
      </g>
      <g
        id="SvgjsG1228"
        transform="matrix(1.3379626135648237,0,0,1.3379626135648237,17.975108136802266,147.05842946457608)"
        fill={theme.palette.primary.contrastText}
      >
        <path d="M27.42 39.32 c0.14 0.4 -0.04 0.68 -0.48 0.68 l-5.48 0 c-0.32 0 -0.56 -0.12 -0.68 -0.48 l-1.28 -3.88 l-10.02 0 l-1.28 3.88 c-0.1 0.36 -0.36 0.48 -0.68 0.48 l-5.48 0 c-0.44 0 -0.62 -0.28 -0.48 -0.68 l9.8 -26.84 c0.12 -0.32 0.36 -0.48 0.68 -0.48 l4.8 0 c0.32 0 0.66 0.16 0.78 0.48 z M11.3 30.18 l6.4 0 l-3.2 -9.68 z M51.620000000000005 17.68 l-6.34 0 l0 16.64 l6.34 0 c0.36 0 0.6 0.24 0.6 0.6 l0 4.48 c0 0.36 -0.24 0.6 -0.6 0.6 l-19.14 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -4.48 c0 -0.36 0.24 -0.6 0.6 -0.6 l6.34 0 l0 -16.64 l-6.34 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -4.48 c0 -0.36 0.24 -0.6 0.6 -0.6 l19.14 0 c0.36 0 0.6 0.24 0.6 0.6 l0 4.48 c0 0.36 -0.24 0.6 -0.6 0.6 z M77.32000000000001 26.48 c0.36 0 0.6 0.24 0.6 0.6 l0 3.84 c0 0.36 -0.24 0.6 -0.6 0.6 l-18.8 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -3.84 c0 -0.36 0.24 -0.6 0.6 -0.6 l18.8 0 z M108.14 39.32 c0.14 0.4 -0.04 0.68 -0.48 0.68 l-5.48 0 c-0.32 0 -0.56 -0.12 -0.68 -0.48 l-1.28 -3.88 l-10.02 0 l-1.28 3.88 c-0.1 0.36 -0.36 0.48 -0.68 0.48 l-5.48 0 c-0.44 0 -0.62 -0.28 -0.48 -0.68 l9.8 -26.84 c0.12 -0.32 0.36 -0.48 0.68 -0.48 l4.8 0 c0.32 0 0.66 0.16 0.78 0.48 z M92.02 30.18 l6.4 0 l-3.2 -9.68 z M121.32000000000001 28.02 c3.54 0.44 9.4 0.82 9.4 6.1 c0 3.9 -3.36 6.4 -9.16 6.4 c-5.68 0 -9.14 -1.64 -9.64 -6.78 c-0.04 -0.4 0.26 -0.6 0.62 -0.6 l4.72 0 c0.36 0 0.5 0.16 0.54 0.38 c0.26 1.34 1.32 1.96 3.6 1.96 c2.02 0 3.22 -0.42 3.22 -1.58 c0 -1 -1.5 -1.38 -3.3 -1.6 c-3.52 -0.44 -9.06 -0.7 -9.06 -5.92 c0 -3.92 3.26 -6.42 8.78 -6.42 c5.26 0 8.8 1.58 9.3 6.72 c0.04 0.4 -0.26 0.6 -0.62 0.6 l-4.74 0 c-0.36 0 -0.5 -0.16 -0.54 -0.38 c-0.26 -1.34 -1.4 -1.92 -3.24 -1.92 c-1.68 0 -2.82 0.42 -2.82 1.56 c0 0.92 1.18 1.28 2.94 1.48 z M144.64000000000001 28.02 c3.54 0.44 9.4 0.82 9.4 6.1 c0 3.9 -3.36 6.4 -9.16 6.4 c-5.68 0 -9.14 -1.64 -9.64 -6.78 c-0.04 -0.4 0.26 -0.6 0.62 -0.6 l4.72 0 c0.36 0 0.5 0.16 0.54 0.38 c0.26 1.34 1.32 1.96 3.6 1.96 c2.02 0 3.22 -0.42 3.22 -1.58 c0 -1 -1.5 -1.38 -3.3 -1.6 c-3.52 -0.44 -9.06 -0.7 -9.06 -5.92 c0 -3.92 3.26 -6.42 8.78 -6.42 c5.26 0 8.8 1.58 9.3 6.72 c0.04 0.4 -0.26 0.6 -0.62 0.6 l-4.74 0 c-0.36 0 -0.5 -0.16 -0.54 -0.38 c-0.26 -1.34 -1.4 -1.92 -3.24 -1.92 c-1.68 0 -2.82 0.42 -2.82 1.56 c0 0.92 1.18 1.28 2.94 1.48 z M168.8 17.06 c-1.84 0 -3.34 -1.48 -3.34 -3.32 s1.5 -3.32 3.34 -3.32 c1.82 0 3.32 1.48 3.32 3.32 s-1.5 3.32 -3.32 3.32 z M176.98000000000002 35 c0.36 0 0.6 0.24 0.6 0.6 l0 3.8 c0 0.36 -0.24 0.6 -0.6 0.6 l-17.54 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -3.8 c0 -0.36 0.24 -0.6 0.6 -0.6 l6.18 0 l0 -9.6 l-5.18 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -3.8 c0 -0.36 0.24 -0.6 0.6 -0.6 l10.82 0 c0.36 0 0.6 0.24 0.6 0.6 l0 14 l5.12 0 z M191.5 28.02 c3.54 0.44 9.4 0.82 9.4 6.1 c0 3.9 -3.36 6.4 -9.16 6.4 c-5.68 0 -9.14 -1.64 -9.64 -6.78 c-0.04 -0.4 0.26 -0.6 0.62 -0.6 l4.72 0 c0.36 0 0.5 0.16 0.54 0.38 c0.26 1.34 1.32 1.96 3.6 1.96 c2.02 0 3.22 -0.42 3.22 -1.58 c0 -1 -1.5 -1.38 -3.3 -1.6 c-3.52 -0.44 -9.06 -0.7 -9.06 -5.92 c0 -3.92 3.26 -6.42 8.78 -6.42 c5.26 0 8.8 1.58 9.3 6.72 c0.04 0.4 -0.26 0.6 -0.62 0.6 l-4.74 0 c-0.36 0 -0.5 -0.16 -0.54 -0.38 c-0.26 -1.34 -1.4 -1.92 -3.24 -1.92 c-1.68 0 -2.82 0.42 -2.82 1.56 c0 0.92 1.18 1.28 2.94 1.48 z M225.54 36.32 c0.18 0.22 0.28 0.56 0.1 0.84 c-0.76 1.12 -2.9 3.16 -6.86 3.16 c-4.42 0 -8.54 -1.3 -8.54 -8.04 l0 -6.88 l-4.54 0 c-0.36 0 -0.6 -0.24 -0.6 -0.6 l0 -3.8 c0 -0.36 0.24 -0.6 0.6 -0.6 l4.54 0 l0 -5.2 c0 -0.36 0.24 -0.6 0.6 -0.6 l5.04 0 c0.36 0 0.6 0.24 0.6 0.6 l0 5.2 l6.78 0 c0.36 0 0.6 0.24 0.6 0.6 l0 3.8 c0 0.36 -0.24 0.6 -0.6 0.6 l-6.78 0 l0 5.94 c0 3.14 1.88 3.46 3.56 3.46 c0.98 0 1.9 -0.36 2.64 -0.88 c0.28 -0.22 0.6 -0.24 0.84 0.04 z" />
      </g>
      {showSlogan && (
        <g
          id="SvgjsG1229"
          transform="matrix(0.4087576399198589,0,0,0.4087576399198589,19.534016296338685,218.9970873304997)"
          fill={theme.palette.secondary.main}
        >
          <path d="M1.14 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 4.72 l-3 0 l0 -12.24 z M26.401 17.32 c1.46 0 2.3 -0.86 2.3 -2.32 s-0.84 -2.32 -2.3 -2.32 s-2.3 0.86 -2.3 2.32 s0.84 2.32 2.3 2.32 z M26.401 20.1 c-3.08 0 -5.3 -2.04 -5.3 -5.1 c0 -3.16 2.3 -5.1 5.3 -5.1 c3.1 0 5.3 2.04 5.3 5.1 c0 3.14 -2.32 5.1 -5.3 5.1 z M46.482 15 l0 5 l-3 0 l0 -4.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 z M83.264 15 c-0.08 -1.46 -0.74 -2.32 -2.26 -2.32 c-0.42 0 -0.78 0.06 -1.08 0.18 c-0.92 0.42 -1.26 1.2 -1.26 2.16 c0 0.32 0.04 0.62 0.14 0.88 c0.3 1.04 1.2 1.42 2.2 1.42 c1.52 0 2.26 -0.82 2.26 -2.32 z M87.064 20 l-3 0 c-0.2 -0.5 -0.38 -1 -0.5 -1.52 c-0.68 1.12 -1.72 1.62 -3 1.62 c-2.86 0 -4.9 -2.4 -4.9 -5.14 c0 -3.16 2.36 -5.06 5.34 -5.06 c3.18 0 5.18 2.04 5.26 5.1 c0.02 0.26 0.02 0.56 0.02 0.92 c0 1.4 0.22 2.8 0.78 4.08 z M112.926 19.68 l0 -2.8 c1.32 0.4 2.98 0.48 4.34 0.48 c0.54 0 0.96 -0.02 1.26 -0.08 c0.28 -0.04 0.42 -0.14 0.42 -0.28 c0 -0.06 -0.02 -0.1 -0.06 -0.16 c-0.2 -0.2 -0.64 -0.3 -0.9 -0.36 s-0.6 -0.14 -1.02 -0.22 c-0.34 -0.06 -0.74 -0.14 -1.2 -0.24 c-1.56 -0.34 -2.76 -1.22 -2.76 -2.9 c0 -2.48 2.42 -3.22 4.46 -3.22 c1.28 0 2.56 0.18 3.82 0.44 l0 2.82 c-1.26 -0.38 -2.68 -0.48 -4 -0.48 c-0.52 0 -0.88 0.02 -1.1 0.08 s-0.34 0.16 -0.34 0.28 c0 0.18 0.18 0.3 0.52 0.36 c0.34 0.08 0.82 0.18 1.4 0.28 c0.52 0.1 1.02 0.2 1.5 0.32 c1.48 0.38 2.54 1.18 2.54 2.78 c0 2.68 -2.7 3.34 -4.86 3.34 c-1.36 0 -2.7 -0.18 -4.02 -0.44 z M149.587 14.6 l0 5.4 l-3 0 l0 -5.4 c0 -1.14 -0.54 -1.92 -1.74 -1.92 c-1.18 0 -1.76 0.8 -1.76 1.92 l0 5.4 l-3 0 l0 -5.4 c0 -1.14 -0.58 -1.92 -1.78 -1.92 c-1.18 0 -1.72 0.8 -1.72 1.92 l0 5.4 l-3 0 l0 -5.4 c0 -2.9 1.98 -4.7 4.76 -4.7 c1.42 0 2.52 0.66 3.24 1.88 c0.72 -1.22 1.82 -1.88 3.24 -1.88 c2.88 0 4.76 1.9 4.76 4.7 z M168.808 15 c-0.08 -1.46 -0.74 -2.32 -2.26 -2.32 c-0.42 0 -0.78 0.06 -1.08 0.18 c-0.92 0.42 -1.26 1.2 -1.26 2.16 c0 0.32 0.04 0.62 0.14 0.88 c0.3 1.04 1.2 1.42 2.2 1.42 c1.52 0 2.26 -0.82 2.26 -2.32 z M172.60799999999998 20 l-3 0 c-0.2 -0.5 -0.38 -1 -0.5 -1.52 c-0.68 1.12 -1.72 1.62 -3 1.62 c-2.86 0 -4.9 -2.4 -4.9 -5.14 c0 -3.16 2.36 -5.06 5.34 -5.06 c3.18 0 5.18 2.04 5.26 5.1 c0.02 0.26 0.02 0.56 0.02 0.92 c0 1.4 0.22 2.8 0.78 4.08 z M187.16899999999998 15 l0 5 l-3 0 l0 -4.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 z M207.70999999999998 10.34 l0 2.78 l-2.8 0 l0 1.88 c0 1.54 1.02 2.32 2.5 2.32 c0.18 0 0.34 -0.02 0.48 -0.04 s0.26 -0.04 0.4 -0.06 l0 2.78 c-0.18 0.02 -0.32 0.06 -0.42 0.08 c-0.12 0.02 -0.32 0.02 -0.58 0.02 c-3.02 0 -5.38 -2.06 -5.38 -5.1 l0 -7.4 l3 0 l0 2.74 l2.8 0 z M222.49099999999999 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M228.151 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z M243.792 15 l0 5 l-3 0 l0 -4.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 z M262.333 18.9 l-1.44 4.1 l-1.44 0 l1.06 -3.04 c-0.92 -0.04 -1.54 -0.8 -1.54 -1.7 c0 -1.02 0.72 -1.74 1.74 -1.74 c1.06 0 1.72 0.68 1.72 1.74 c0 0.2 -0.04 0.42 -0.1 0.64 z M305.77500000000003 14.6 l0 5.4 l-3 0 l0 -5.4 c0 -1.14 -0.54 -1.92 -1.74 -1.92 c-1.18 0 -1.76 0.8 -1.76 1.92 l0 5.4 l-3 0 l0 -5.4 c0 -1.14 -0.58 -1.92 -1.78 -1.92 c-1.18 0 -1.72 0.8 -1.72 1.92 l0 5.4 l-3 0 l0 -5.4 c0 -2.9 1.98 -4.7 4.76 -4.7 c1.42 0 2.52 0.66 3.24 1.88 c0.72 -1.22 1.82 -1.88 3.24 -1.88 c2.88 0 4.76 1.9 4.76 4.7 z M322.6960000000001 17.32 c1.46 0 2.3 -0.86 2.3 -2.32 s-0.84 -2.32 -2.3 -2.32 s-2.3 0.86 -2.3 2.32 s0.84 2.32 2.3 2.32 z M322.6960000000001 20.1 c-3.08 0 -5.3 -2.04 -5.3 -5.1 c0 -3.16 2.3 -5.1 5.3 -5.1 c3.1 0 5.3 2.04 5.3 5.1 c0 3.14 -2.32 5.1 -5.3 5.1 z M342.77700000000004 15 l0 5 l-3 0 l0 -4.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 z M360.178 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M365.838 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z M395.94000000000005 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M401.6000000000001 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z M419.7010000000001 10.34 l0 2.78 l-2.46 0 l0 6.88 l-3 0 l0 -9.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 l0 0.34 l2.46 0 z M437.70200000000006 10.34 l0 2.78 l-2.46 0 l0 6.88 l-3 0 l0 -9.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 l0 0.34 l2.46 0 z M450.14300000000003 10 l3 0 l0 10 l-3 0 l0 -10 z M451.64300000000003 9.06 c-1.02 0 -1.74 -0.72 -1.74 -1.74 c0 -1.04 0.72 -1.72 1.74 -1.72 c1.04 0 1.72 0.68 1.72 1.72 c0 1.06 -0.66 1.74 -1.72 1.74 z M473.46400000000006 16.7 l0 3 c-1.02 0.34 -2.08 0.44 -3.14 0.44 c-3.1 0 -5.3 -2.06 -5.3 -5.12 c0 -3.18 2.28 -5.12 5.3 -5.12 c1.06 0 2.12 0.1 3.14 0.44 l0 3 c-0.88 -0.46 -1.98 -0.58 -2.96 -0.58 c-0.66 0 -1.46 0.14 -1.92 0.66 c-0.42 0.42 -0.56 1.02 -0.56 1.58 c0 0.32 0.04 0.62 0.14 0.88 c0.08 0.28 0.22 0.52 0.42 0.72 c0.44 0.54 1.26 0.68 1.92 0.68 c0.88 0 2.18 -0.16 2.96 -0.58 z M485.605 10 l3 0 l0 10 l-3 0 l0 -10 z M487.105 9.06 c-1.02 0 -1.74 -0.72 -1.74 -1.74 c0 -1.04 0.72 -1.72 1.74 -1.72 c1.04 0 1.72 0.68 1.72 1.72 c0 1.06 -0.66 1.74 -1.72 1.74 z M503.766 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M509.42600000000004 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z M532.267 15 l0 5 l-3 0 l0 -5 c0 -1.38 -0.64 -2.32 -2.1 -2.32 c-1.44 0 -2.1 0.96 -2.1 2.32 l0 5 l-3 0 l0 -5 c0 -3.08 2.12 -5.1 5.1 -5.1 c3.1 0 5.1 2.12 5.1 5.1 z M550.108 10.34 l0 2.78 l-2.8 0 l0 1.88 c0 1.54 1.02 2.32 2.5 2.32 c0.18 0 0.34 -0.02 0.48 -0.04 s0.26 -0.04 0.4 -0.06 l0 2.78 c-0.18 0.02 -0.32 0.06 -0.42 0.08 c-0.12 0.02 -0.32 0.02 -0.58 0.02 c-3.02 0 -5.38 -2.06 -5.38 -5.1 l0 -7.4 l3 0 l0 2.74 l2.8 0 z M580.05 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M585.7099999999999 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z M602.8909999999998 17.12 l-2.1 2.88 l-3.3 0 l3.76 -5.14 l-3.56 -4.86 l3.3 0 l1.9 2.6 l1.9 -2.6 l3.3 0 l-3.54 4.86 l3.74 5.14 l-3.3 0 z M622.7919999999999 15 c0 1.48 0.74 2.32 2.24 2.32 c0.42 0 0.8 -0.06 1.1 -0.2 c0.56 -0.22 0.94 -0.64 1.14 -1.22 c0.08 -0.28 0.12 -0.58 0.12 -0.9 s-0.04 -0.62 -0.12 -0.9 c-0.22 -0.62 -0.56 -0.96 -1.14 -1.24 c-0.3 -0.12 -0.68 -0.18 -1.1 -0.18 c-1.5 0 -2.24 0.84 -2.24 2.32 z M622.7919999999999 19 l0 5 l-3 0 l0 -9 c0 -3.2 2.26 -5.1 5.28 -5.1 c3.08 0 5.32 2.02 5.32 5.08 c0 2.84 -2.14 5.12 -4.98 5.12 c-0.58 0 -1.08 -0.1 -1.5 -0.3 c-0.44 -0.18 -0.82 -0.46 -1.12 -0.8 z M644.853 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M650.5129999999999 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z M666.1539999999999 15 l0 5 l-3 0 l0 -4.98 c0 -3.32 2.44 -5.12 5.52 -5.12 c0.1 0 0.24 0 0.38 0.02 s0.3 0.06 0.44 0.08 l0 2.9 c-0.1 -0.02 -0.22 -0.04 -0.36 -0.06 s-0.26 -0.04 -0.36 -0.04 c-0.5 0 -0.9 0.06 -1.24 0.16 c-0.56 0.2 -1.06 0.58 -1.24 1.18 c-0.1 0.26 -0.14 0.56 -0.14 0.86 z M680.8749999999999 10 l3 0 l0 10 l-3 0 l0 -10 z M682.3749999999999 9.06 c-1.02 0 -1.74 -0.72 -1.74 -1.74 c0 -1.04 0.72 -1.72 1.74 -1.72 c1.04 0 1.72 0.68 1.72 1.72 c0 1.06 -0.66 1.74 -1.72 1.74 z M699.036 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M704.6959999999999 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z M727.5369999999999 15 l0 5 l-3 0 l0 -5 c0 -1.38 -0.64 -2.32 -2.1 -2.32 c-1.44 0 -2.1 0.96 -2.1 2.32 l0 5 l-3 0 l0 -5 c0 -3.08 2.12 -5.1 5.1 -5.1 c3.1 0 5.1 2.12 5.1 5.1 z M747.5979999999998 16.7 l0 3 c-1.02 0.34 -2.08 0.44 -3.14 0.44 c-3.1 0 -5.3 -2.06 -5.3 -5.12 c0 -3.18 2.28 -5.12 5.3 -5.12 c1.06 0 2.12 0.1 3.14 0.44 l0 3 c-0.88 -0.46 -1.98 -0.58 -2.96 -0.58 c-0.66 0 -1.46 0.14 -1.92 0.66 c-0.42 0.42 -0.56 1.02 -0.56 1.58 c0 0.32 0.04 0.62 0.14 0.88 c0.08 0.28 0.22 0.52 0.42 0.72 c0.44 0.54 1.26 0.68 1.92 0.68 c0.88 0 2.18 -0.16 2.96 -0.58 z M762.2589999999999 13.8 c0.3 0.1 0.64 0.18 1 0.22 c0.36 0.06 0.7 0.08 1.02 0.08 c0.4 0 1.42 -0.08 1.42 -0.66 c0 -0.62 -0.88 -0.64 -1.32 -0.64 c-0.88 0 -1.64 0.2 -2.12 1 z M767.9189999999999 16.88 l0 2.8 c-1.12 0.26 -2.24 0.44 -3.4 0.44 c-3.18 0 -5.54 -1.86 -5.54 -5.08 c0 -3.18 2.28 -5.14 5.3 -5.14 c2.06 0 4.44 0.98 4.44 3.32 c0 2.32 -2.52 3.18 -4.46 3.18 c-0.74 0 -1.48 -0.2 -2.16 -0.48 c0.4 1.12 1.6 1.3 2.64 1.3 c0.54 0 1.08 -0.02 1.62 -0.1 c0.5 -0.04 1.08 -0.1 1.56 -0.24 z M783.9999999999998 18.38 c0 1.02 -0.7 1.72 -1.72 1.72 s-1.74 -0.68 -1.74 -1.72 c0 -1.02 0.72 -1.74 1.74 -1.74 c1.06 0 1.72 0.68 1.72 1.74 z" />
        </g>
      )}
    </svg>
  );
}

Logo.defaultProps = {
  square: false,
  width: 512,
  height: 512,
  showSlogan: false,
};