import React from 'react';
import PropTypes from 'prop-types';

export const Icon = (props) => {
  const {
    name, color, size, display, height,
  } = props;
  const SVGComponent = name;
  const displayCustom = display ?? 'block';

  if (!SVGComponent) {
    return <div />;
  }

  return (
    <div style={{
      width: size,
      height: height ?? size,
      display: displayCustom,
    }}
    >
      <SVGComponent
        fill={color || color || '#000'}
        width={size}
        height={height ?? size}
        display={displayCustom}
        {...props}
      />
    </div>
  );
};

Icon.propTypes = {
  name: PropTypes.objectOf(PropTypes.any).isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  height: PropTypes.number,
};
Icon.defaultProps = {
  height: null,
};
