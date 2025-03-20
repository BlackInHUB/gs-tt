import { FormContainer } from './Form.styled';
import Input, { InputType } from './Input';
import Button from '../Button/Button';
import useForm from '../../../hooks/useForm';
import Checkbox from '../Checkbox/Checkbox';

type FormProps<T> = {
  formType: 'login' | 'register';
  inputs: InputType[];
  initialState: T;
  onSubmit: (state: T) => void;
  buttonText: string;
};

const Form = <T extends { [k: string]: string }>({
  formType,
  inputs,
  initialState,
  onSubmit,
  buttonText,
}: FormProps<T>) => {
  const { handleInputChange, handleSubmit, state } = useForm<T>(initialState, onSubmit);

  return (
    <FormContainer onSubmit={handleSubmit}>
      {inputs.map(({ name, type, placeholder }, i) => (
        <Input
          key={i}
          name={name}
          type={type}
          value={state[name] as string | number}
          placeholder={placeholder}
          handleChange={handleInputChange}
        />
      ))}
      {formType === 'register' && <Checkbox />}
      <Button padding="16px" type="submit" radii="s" children={buttonText} />
    </FormContainer>
  );
};

export default Form;
