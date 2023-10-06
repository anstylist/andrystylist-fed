import LoginForm from '@/components/LoginForm/LoginForm';
import * as AuthService from "@/services/AuthService";

import "./EmailConfirmation.scss";


export async function getServerSideProps(ctx) {
  let error = new Error('unknown token');
  const confirmationToken = ctx?.query?.confirmation

  if (!confirmationToken) {
    return
  }

  try {
    const data = await AuthService.confirmEmail(confirmationToken)
    return { props: { data, error } }
  } catch (err) {
    error = err
    return { props: { error } }
  }
}

const EmailConfirmation = ({ data, error }) => {
  const confirmationAlert = () => {
    if (!error) {
      return {
        type: 'success',
        title: 'Email confirmed',
        message: "Your email has been confirmed successfully. Let's sign into the page to start building the best version of you."
      }
    } else if (error){
      return {
        type: 'error',
        title: 'Ups! An error has occurred',
        message: "The confirmation token has not been provided properly or it was already used."
      }
    }

    return null;
  }

  return (
    <>
      <LoginForm alert={confirmationAlert()} />
    </>
  );
};

export default EmailConfirmation;
