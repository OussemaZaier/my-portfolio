import React from 'react'

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <g id="O" transform="translate(35.000000, 35.000000)">
          <path
            fill="currentColor"
            d="M 14.743, 0
             C 22.275, 0 28.986, 6.711 28.986, 14.743
             28.986, 22.275 22.275, 28.986 14.743, 28.986
             7.211, 28.986 0.5, 22.275 0.5, 14.743
             0.5, 7.211 7.211, 0.5 14.743, 0.5
             Z
             M 2.618, 14.743
             C 2.618, 21.244 7.744, 26.369 14.245, 26.369
             20.747, 26.369 25.872, 21.244 25.872, 14.743
             25.872, 8.241 20.747, 3.116 14.245, 3.116
             7.744, 3.116 2.618, 8.241 2.618, 14.743
             Z"
          />
        </g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
           L 16, 22.5
           L 8, 58
           L 50, 95
           L 92, 58
           L 84, 22.5 z"
        />
      </g>
    </svg>
  )
}

export default Logo
