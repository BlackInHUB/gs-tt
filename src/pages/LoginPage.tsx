import Form from '../components/UI/Form/Form';
import { InputType } from '../components/UI/Form/Input';
import { UserAuthStateType } from '../components/AuthLayout/AuthLayout';
import SocialNetworks from '../components/SocialNetworks/SocialNetworks';

const loginInputs: InputType[] = [
  { name: 'email', type: 'email', value: '', placeholder: 'Email' },
  { name: 'password', type: 'password', value: '', placeholder: 'Password' },
];

type LoginStateType = Omit<UserAuthStateType, 'confirm'>;
const initialState: LoginStateType = { email: '', password: '' };

const LoginPage = () => {
  const handleSubmit = (state: LoginStateType) => {
    console.log(state);
  };

  return (
    <>
      <Form<LoginStateType>
        formType="login"
        initialState={initialState}
        inputs={loginInputs}
        onSubmit={handleSubmit}
        buttonText="Login"
      />
      <SocialNetworks />
    </>
  );
};

export default LoginPage;
