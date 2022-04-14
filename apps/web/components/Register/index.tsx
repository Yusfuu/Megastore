/* eslint-disable react/jsx-props-no-spreading */
import { FC, useContext, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { useRegisterMutation } from '@/graphql/generated/graphql';
import ModalContext from '@/context/ModalContext';

interface RegisterFormInputs {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const Register: FC = () => {
  const { toggleModal } = useContext(ModalContext);
  const [register, { data, loading, error }] = useRegisterMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data: any) => {
    console.log('data submitted: ', data);
    await register({
      variables: {
        input: {
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
        },
      },
    });
  };

  useEffect(() => {
    try {
      if (data?.register) {
        console.log(data?.register);
        localStorage.setItem("token", data?.register?.token);
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
      <Controller
        name='firstName'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <TextField
            {...field}
            label='Firstname'
            variant='outlined'
            error={!!errors.firstName}
            helperText={errors.firstName ? errors.firstName?.message : ''}
            fullWidth
            margin='dense'
          />
        )}
      />
      <Controller
        name='lastName'
        control={control}
        defaultValue=''
        render={({ field }) => (
          <TextField
            {...field}
            label='Lastname'
            variant='outlined'
            error={!!errors.lastName}
            helperText={errors.lastName ? errors.lastName?.message : ''}
            fullWidth
            margin='dense'
          />
        )}
      />
      <button type='submit' className='w-full btn-primary h-[56px] mt-3'>
        Sign up
      </button>
    </form>
  );
};

export default Register;
