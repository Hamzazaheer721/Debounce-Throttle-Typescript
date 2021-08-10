import { debounce } from 'lodash';
import { FC, useState } from 'react';

const InputFieldComponent : FC <{}> = () => {
  const [value, setValue] = useState<string>('')
  const handleChange = debounce((e) => {
    setValue(e.target.value)
  }, 1000)
  return (
    <>
      <input type="text" placeholder="type something here ..." onChange={handleChange} />
      <h1>{value}</h1>
    </>
  )
}

export default InputFieldComponent;
