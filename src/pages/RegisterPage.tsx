import Form from '../components/UI/Form/Form';
import { InputType } from '../components/UI/Form/Input';
import { UserAuthStateType } from '../components/AuthLayout/AuthLayout';
import SocialNetworks from '../components/SocialNetworks/SocialNetworks';

const loginInputs: InputType[] = [
  { name: 'email', type: 'email', value: '', placeholder: 'Email' },
  { name: 'password', type: 'password', value: '', placeholder: 'Password' },
  { name: 'confirm', type: 'password', value: '', placeholder: 'Confirm password' },
];

const initialState: UserAuthStateType = { email: '', password: '', confirm: '' };

const RegisterPage = () => {
  const handleSubmit = (state: UserAuthStateType) => {
    console.log(state);
  };

  return (
    <>
      <Form<UserAuthStateType>
        formType="register"
        initialState={initialState}
        inputs={loginInputs}
        onSubmit={handleSubmit}
        buttonText="Registration"
      />
      <SocialNetworks />
    </>
  );
};

export default RegisterPage;
