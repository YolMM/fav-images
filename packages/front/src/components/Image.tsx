import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateAnImage, deleteAnImage } from '../lib/actions';

const ImageWrap = styled.div`
padding: 5px;
border: 1px solid black;
margin: 5px;
display: flex;
justify-content: space-between;
`;

const ImageElement = styled.div`
display: flex;
flex-direction: colum;
margin: 5px;
`;

export const ImageDiv = ({ image: { _id, title, img } }: any) => {
  const imgBaseURL = img;
  const imgApi = axios.create({ baseURL: imgBaseURL });
  const getEachImg = async () => {
    const res = await imgApi.get('/');
    return res.data;
  };

  const dispatch = useDispatch();

  return (
    <ImageWrap>
      <ImageElement>
        {title}
      </ImageElement>
      <ImageElement>
        {getEachImg()}
      </ImageElement>
      <div>
        <button type="button" onClick={() => dispatch(updateAnImage(_id, { title, img }))}>Update</button>
      </div>
      <div>
        <button type="button" onClick={() => dispatch(deleteAnImage(_id))}>Delete</button>
      </div>
    </ImageWrap>
  );
};
