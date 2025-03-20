import { useState } from 'react';
import { CheckboxContainer, CheckboxInput, CheckboxLabel } from './Checkbox.styled';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <CheckboxContainer>
      <CheckboxInput type="checkbox" id="social" onChange={handleChange} checked={checked} />
      <CheckboxLabel htmlFor="social">Use social networks</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
