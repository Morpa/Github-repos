import React, { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  Label: string;
  options: Options[];
}

interface Options {
  label: string;
  value: string;
}

const Select: React.FC<SelectProps> = ({
  Label,
  value,
  onChange,
  options,
  className,
}) => {
  const selectClass = className ? `${className} field` : 'field';

  return (
    <div className={selectClass}>
      <div className="control">
        <label className="label">{Label}</label>
        <div className="select is-primary">
          <select value={value} onChange={onChange}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Select;
