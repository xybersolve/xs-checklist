/*
  CheckList

  Reusable React List with checkable items
    * Checklist Items expect and depend on:
       {display: 'What is shown', id: 'unique identifier'}
       - { destrusture: rename } - if necessary

  Dependencies:
    xs-checkbox.js - XyberSolve's reusable custom checkbox

  Items passed in are expected to contain these keys:
    display: what will be shown,
    enabled: is it check or not
    id: its unique indentifier
*/
import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const CheckList = (props) => (
  <ul className={props.className}>
    {props.items.map((item, idx) =>
      <Item
        key={idx}
        { ...item }
        onChange={props.onChange}
        checkedIcon={props.checkedIcon}
        unCheckedIcon={props.unCheckedIcon}
      />
    )}
  </ul>
);

CheckList.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checkedIcon: PropTypes.string,
  unCheckedIcon: PropTypes.string,
};

CheckList.defaultProps = {
  items: [],
  className: 'CheckList',
  checkedIcon: '✔' ,
  unCheckedIcon: ' ',
  onChange: () => {},
};

export default CheckList;
