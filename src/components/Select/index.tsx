import { SelectHTMLAttributes } from 'react'

type Options = {
  label: string
  value: string
}

type SelectProps = {
  Label: string
  options: Options[]
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = ({
  Label,
  value,
  onChange,
  options,
  className
}: SelectProps) => {
  const selectClass = className ? `${className} field` : 'field'

  return (
    <div className={selectClass}>
      <div className="control">
        <label className="label">{Label}</label>
        <div className="select is-primary">
          <select value={value} onChange={onChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Select
