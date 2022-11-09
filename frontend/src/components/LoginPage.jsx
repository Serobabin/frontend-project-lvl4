import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { name, type, placeholder } = props;
  const { value, onChange, onBlur } = field;
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const Login = () => (
  <>
    <h1>Login!</h1>
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required('Required'),
        password: Yup.string()
          .required('Required'),
      })}

    >
      <Form>
        <TextInput
          label="Username"
          name="username"
          type="text"
          placeholder="Ваш ник"
        />
        <br />
        <TextInput
          label="User password"
          name="password"
          type="text"
          placeholder="Пароль"
        />
        <br />
        <button type="submit">Войти</button>
      </Form>
    </Formik>
  </>
);

export default Login;
