import React, { Component } from 'react';

import Select from 'react-select';
// import { ColourOption, colourOptions } from '../data';
// import { ActionMeta, OnChangeValue } from 'react-select';

const style = {
  width:'100%',
  height:40,
  maxWidth:550,
  fontSize: 12,
}

const Single = ({options, onInputChange, onChange}) => {
  return (
    // <div style={style}>
    <div data-testid="my-select-component" style={style}>
      <Select options={options} onInputChange={onInputChange} onChange={onChange} placeholder="Select an option"/>
      </div>
  );
}

export default Single;