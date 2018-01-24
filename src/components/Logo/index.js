import React from 'react';
import PT from 'prop-types';

const Logo = ({ color, props }) => (
  <svg width="60" height="59" {...props}>
    <defs>
      <path id="a" d="M0 0h60v58.134H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill={color}
        d="M42.448 43.221l3.065 8.373-8.454 3.085 1.263 3.455 8.459-3.048 3.513-1.26-4.371-11.864zM13.235 23.788L21.2 6.96l-3.578-1.626 1.5-3.148 6.574 3.032-1.114 2.349.076.038c1.696-1.44 4.31-1.514 6.267-.606 2.349 1.062 3.307 2.615 2.885 5.153 1.732-1.325 4.19-1.892 6.268-.946 5.344 2.465 3.463 6.444 2.349 8.753L35.73 34.094l-3.191-1.441 6.538-13.757c.733-1.513 1.772-4.09-.807-5.264-1.5-.684-4.23-.835-5.69 2.27l-6.5 13.757-3.19-1.436 6.538-13.757c.692-1.552 1.766-4.095-.848-5.27-1.46-.679-4.19-.834-5.65 2.277l-6.54 13.756-3.156-1.441z"
      />
      <mask id="b" fill={color}>
        <use xlinkHref="#a" />
      </mask>
      <path
        fill={color}
        mask="url(#b)"
        d="M41.912 37.42L55.578 7.17l-3.904-1.861 1.438-3.123L60 5.499 44.935 38.902zM0 28.683l3.353 1.477L17.206 1.522 13.853 0z"
      />
    </g>
  </svg>
);

Logo.propTypes = {
  color: PT.string,
};

Logo.defaultProps = {
  color: '#fff',
};

export default Logo;
