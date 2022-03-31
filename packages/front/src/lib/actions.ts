import {
  addImages,
  deleteImages,
  updateImages,
  getImages,
} from './api';

// Redux action generator

// ACTION: Add an image
export const addImgs = (images: object) => {
  console.log('Adding image');
  return {
    type: 'ADDIMAGE',
    images,
  };
};

// ACTION: Update an image
export const updateImgs = (images: object) => {
  console.log('Updating image');
  return {
    type: 'UPDATEIMAGE',
    images,
  };
};

// Redux thunk: return a dispatch function from redux actions indicated (addImgs)

// THUNK: Call API to save an image and dispatch a addImgs() action
export const saveOnServer = (image: object) => {
  console.log('Saving on server...');
  return async (dispatch: any) => {
    const saveImg = await addImages(image);
    dispatch(addImages(saveImg));
  };
};

// THUNK: request API images, dispatch one addImgs action for each image recived by the API
export const refreshServerImages = () => async (dispatch: any) => {
  const imgs = await getImages();
  console.log('imgs', imgs);
  imgs.forEach((imag: object) => dispatch(addImgs(imag)));
};

// THUNK: update images on server via API call
export const updateAnImage = (id: string, image: object) => {
  console.log('Updating image on server...');
  return async (dispatch: any) => {
    const saveUpdatedImg = await updateImages(id, image);
    dispatch(updateImages(id, saveUpdatedImg));
  };
};

// THUNK: delete images on server via API call and refresh local visualization
export const deleteAnImage = (id: string) => async (dispatch: any) => {
  await deleteImages(id);
  dispatch(refreshServerImages);
};
