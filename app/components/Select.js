import React from 'react';
const Select = ({ name, title, value, onChangePost, placeholder, options }) => {
  return (
    <div>
      <label htmlFor={name}> {title} </label>
      <select name={name} value={value} onChange={e => onChangePost(e)}>
        <option value="">{placeholder}</option>
        {options.map(option => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
