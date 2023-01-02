import mongoClient from './mongodb';

export default async function saveLink() {
  const document = { createdAt: new Date() };
  const collection = mongoClient.db().collection('links');

  await collection.insertOne(document);
}
