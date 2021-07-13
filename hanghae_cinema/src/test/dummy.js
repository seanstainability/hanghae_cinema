import shortId from "shortid";
import faker from "faker";

export const generateDummyMovie = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      title: faker.name.findName(),
      genre: faker.name.findName(),
      actor: faker.name.findName(),
      runtime: faker.datatype.number(),
      rating: faker.datatype.float(),
      image: faker.image.imageUrl(),
    }));

export const generateDummyReview = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      Movie: {
        id: shortId.generate(),
        title: faker.name.findName(),
      },
      contents: faker.lorem.sentence(),
    }));
