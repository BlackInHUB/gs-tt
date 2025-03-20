import { ChangeEvent, FormEvent } from 'react';
import { FormContainer } from './Form.styled';
import Input, { InputType } from './Input';
import Button from '../Button/Button';

type FormProps = {
  inputs: InputType[];
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: () => void;
  buttonText: string;
};

const Form = ({ inputs, handleInputChange, handleFormSubmit, buttonText }: FormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFormSubmit();
  };

  <FormContainer onSubmit={handleSubmit}>
    {inputs.map((input, i) => (
      <Input key={i} input={input} handleChange={handleInputChange} />
    ))}
    <Button type="submit" radii="s" children={buttonText} />
  </FormContainer>;
};

export default Form;
