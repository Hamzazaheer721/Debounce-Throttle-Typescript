import { FC, useState } from 'react';
import { debounce } from 'lodash'
import InputFieldComponent from '../inputField';

const WelcomeComponent : FC <{}> = () => {
  const [showField, setShowField] = useState<boolean>(false);
  const handleShowField = debounce(() => {
    setShowField(!showField)
  }, 1000) // adding delay of 1 second
  return (
    <div>
      <button type="button" onClick={handleShowField}>
        {' '}
        {showField ? 'Hide Field' : 'Show Field'}
      </button>
      {showField && <InputFieldComponent />}
    </div>
  )
}
export default WelcomeComponent;
