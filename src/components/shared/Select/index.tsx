import React, { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  Label: string;
  options: Options[];
}

interface Options {
  label: string;
  value: string;
}

const Select: React.FC<SelectProps> = ({ Label, value, onChange, options }) => {
  return (
    <div>
      {Label}
      <select value={value} onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
