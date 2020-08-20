import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div>
      {label}
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default Input;
