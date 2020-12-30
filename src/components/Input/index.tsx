import { InputHTMLAttributes } from 'react'

type InputProps = {
  label: string
  placeholder: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({
  label,
  value,
  onChange,
  placeholder,
  className
}: InputProps) => {
  const textInputClass = className ? `${className} field` : 'field'

  return (
    <div className={textInputClass}>
      <div className="control">
        <label className="label">{label}</label>
        <input
          className="input is-primary"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default Input
