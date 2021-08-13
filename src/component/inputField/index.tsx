import { debounce } from 'lodash';
import { FC, useState } from 'react';

const InputFieldComponent : FC <{}> = () => {
  const [, setValue] = useState<string>('')

  const handleChange = debounce((e) => {
    setValue(e.target.value)
  }, 1000)

  return (
    <>
      <input type="text" placeholder="type something here ..." onChange={handleChange} />
    </>
  )
}

export default InputFieldComponent;
