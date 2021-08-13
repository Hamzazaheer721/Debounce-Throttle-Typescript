import { FC, useCallback, useState } from 'react';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle'
import {
  Container, HighlightedText, MiniContainer, Text,
} from './index.styled';

const InputFieldComponent : FC <{}> = () => {
  const [debouncedValue, setDebouncedValue] = useState<string>('')
  const [throttledValue, setThrottledValue] = useState<string>('');

  const applyDebounce = debounce((_value: string) => {
    setDebouncedValue(_value)
  }, 1000)

  const applyThrottle = throttle((_value: string) => {
    setThrottledValue(_value)
  }, 1000)
  const handleChange = useCallback((e : any) => {
    applyDebounce(e.target.value);
    applyThrottle(e.target.value);
  }, [])
  return (
    <Container>
      <input type="text" placeholder="type something here ..." onChange={handleChange} />
      <MiniContainer>
        <HighlightedText>Debounce : </HighlightedText>
        <Text>{debouncedValue}</Text>
      </MiniContainer>
      <MiniContainer>
        <HighlightedText>Throttle :</HighlightedText>
        <Text>{throttledValue}</Text>
      </MiniContainer>
    </Container>
  )
}

export default InputFieldComponent;
