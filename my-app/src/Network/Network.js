import { auth, db } from "../firebase";
export const getCollectionDocs = collectionName => {
    return db.collection(collectionName).get();
  };
