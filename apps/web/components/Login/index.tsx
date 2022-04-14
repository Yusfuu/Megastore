/* eslint-disable react/jsx-props-no-spreading */
import { FC, useContext, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { useLoginMutation } from '@/graphql/generated/graphql';
import ModalContext from '@/context/ModalContext';

interface LoginFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login: FC = () => {
  const { toggleModal } = useContext(ModalContext);
  const [login, { data, loading, error }] = useLoginMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data: any) => {
    console.log('data submitted: ', data);
    await login(
      {
        variables: {
          email: data.email,
          password: data.password,
        },
      },
    );
  };

  useEffect(() => {
    try {
      if (data?.login) {
        console.log(data?.login);
        localStorage.setItem("token", data?.login?.token);
        if (toggleModal) toggleModal();
      }
    } catch (error) {
      console.log(error);
    }
  }, [data, toggleModal]);

  return (
    <form className='grid gap-3' onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='email'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <TextField
            {...field}
            label='Email'
            variant='outlined'
            error={!!errors.email}
            helperText={errors.email ? errors.email?.message : ''}
            fullWidth
            margin='dense'
          />
        )}
      />
      <Controller
        name='password'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <TextField
            {...field}
            type='password'
            label='Password'
            variant='outlined'
            error={!!errors.password}
            helperText={errors.password ? errors.password?.message : ''}
            fullWidth
            margin='dense'
          />
        )}
      />
      <button type='submit' className='w-full btn-primary h-[56px] mt-3'>
        Sign in
      </button>
    </form>
  );
};

export default Login;
