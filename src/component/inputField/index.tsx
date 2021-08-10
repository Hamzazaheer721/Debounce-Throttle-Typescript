import { FC, useState } from 'react';

const InputFieldComponent : FC <{}> = () => {
  const [value, setValue] = useState<string>('')

  return (
    <>
      <input type="text" placeholder="type something here ..." onChange={(e) => setValue(e.target.value)} />
      <h1>{value}</h1>
    </>
  )
}

export default InputFieldComponent;
