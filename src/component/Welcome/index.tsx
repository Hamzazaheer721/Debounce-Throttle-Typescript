import { FC, useState } from 'react';
import { debounce } from 'lodash'
import InputFieldComponent from '../inputField';
import { Container, Button } from './index.styled';

const WelcomeComponent : FC <{}> = () => {
  const [showField, setShowField] = useState<boolean>(false);

  const handleShowField = debounce(() => {
    setShowField(!showField)
  }, 1000) // adding delay of 1 second

  return (
    <Container>
      <Button type="button" onClick={handleShowField}>
        {' '}
        {showField ? 'Hide Field' : 'Show Field'}
      </Button>
      {showField && <InputFieldComponent />}
    </Container>
  )
}
export default WelcomeComponent;
