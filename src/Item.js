import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from 'xs-checkbox';

const Item = ({ id, display, enabled, onChange, checkedIcon, unCheckedIcon }) => {
  return (
    <li className="xs-checklist-item">
      <CheckBox
        checked={enabled}
        text={display}
        name={id}
        onChange={onChange}
        checkedIcon={checkedIcon}
        unCheckedIcon={unCheckedIcon}
      />
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  display: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  checkedIcon: PropTypes.string.isRequired,
  unCheckedIcon: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Item.defaultProps = {
  onChange: () => {},
};

export default Item;
