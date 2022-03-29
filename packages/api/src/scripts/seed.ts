import { conectDB } from '../lib/db';
import { Images } from '../models/Images.model';

(async () => {
  const { close } = await conectDB();
  try {
    await Images.collection.drop();
  } catch (error) {
    console.log('There are no images to drop from db');
  }

  const imagesList = [{ title1: 'image1' }, { title2: 'image2' }, { title3: 'image3' }, { title4: 'image4' }];

  await Promise.all(imagesList.map(async (i) => {
    await Images.create({ title: Object.keys(i)[0], img: Object.values(i)[0] })
      .then((e) => console.log(`📷 New image with title ${e.title} loaded successfully`))
      .catch((error) => console.log(error));
  }));

  await close();
})();
