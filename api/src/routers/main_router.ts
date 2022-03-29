import { FastifyPluginAsync, FastifyRequest } from 'fastify';
import { Images } from '../models/Images.model';

type Myrequest = FastifyRequest<{
    Body: {title: string, img: string};
    Params: {id: string};
}>

export const mainRouter: FastifyPluginAsync = async (app) => {
  // Get all images
  app.get('/', async () => {
    const images = await Images.find().lean();
    return images;
  });
  // Add a new image
  app.post('/', async (request: Myrequest) => {
    const { title, img } = request.body;
    const image = new Images({ title, img });
    await image.save();
    return image;
  });
  // Delete an image
  app.delete('/:id', async (request: Myrequest) => {
    const { id } = request.params;
    await Images.findByIdAndDelete(id);
    return { status: 'delete' };
  });
  // Update an image
  app.post('/:id', async (request: Myrequest) => {
    const { id } = request.params;
    const image = await Images.findOneAndUpdate({ _id: id }, request.body, {
      new: true,
    });
    return image;
  });
};
