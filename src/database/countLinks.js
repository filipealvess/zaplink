import mongoClient from './mongodb';

export default async function countLinks() {
  const collection = mongoClient.db().collection('links');
  const count = await collection.countDocuments();

  return count;
}
