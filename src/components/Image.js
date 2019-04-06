import React from 'react';
import PropTypes from 'prop-types';

import { resolvePath } from '../utils';

const Image = ({ src, alt, ...restProps }) => (
  <img
    src={resolvePath(src)}
    alt={alt}
    {...restProps}
  />
);

Image.defaultProps = {
  className: '',
  alt: '',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Image;


