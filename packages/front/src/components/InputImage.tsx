/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { saveOnServer } from '../lib/actions';

const FormFlex = styled.div`
display: flex;
`;

const FormElement = styled.div`
display: flex;
flex-direction: colum;
margin: 5px;
`;

const ErrorMessage = styled.p`
margin: 0px;
color: red;
`;

// eslint-disable-next-line no-promise-executor-return
const timeout = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Error = ({ field, errors }: any) => {
  if (errors[field]) {
    return <ErrorMessage>{errors[field].message}</ErrorMessage>;
  }
  return <></>;
};

export const InputImage = connect()(({ dispatch }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(
    {
      defaultValues: { title: '', img: '' },
    },
  );

  const submit = handleSubmit(async (data) => {
    await timeout(2000);
    await dispatch(saveOnServer(data));
    reset();
  });

  return (
    <div>
      <FormFlex>
        <FormElement>
          <input placeholder="title" {...register('title', { required: 'Add a title' })} />
          <Error field="title" errors={errors} />
        </FormElement>
        <FormElement>
          <input placeholder="image" {...register('img', { required: 'Add an image URL' })} />
          <Error field="img" errors={errors} />
        </FormElement>
        <FormElement>
          <button type="button" onClick={(submit)}>Add new image</button>
        </FormElement>
      </FormFlex>
    </div>
  );
});
