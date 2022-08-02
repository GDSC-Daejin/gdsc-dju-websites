import { useEffect, useRef, useState } from 'react';
import firebase from 'firebase/compat';
import firestore = firebase.firestore;
import { DocumentData, onSnapshot, Query } from 'firebase/firestore';

interface idType {
  id: string;
}

export function useFirestoreQuery<T>(query: Query<DocumentData>): T {
  const [docs, setDocs] = useState<unknown>();

  // Store current query in ref
  const queryRef = useRef(query);

  // Compare current query with the previous one
  // useEffect(() => {
  //   // Use Firestore built-in 'isEqual' method
  //   // to compare queries
  //   if (!queryRef?.current?.isEqual(query)) {
  //     queryRef.current = query;
  //   }
  // });

  // Re-run data listener only if query has changed
  useEffect(() => {
    if (!queryRef.current) {
      return;
    }
    // Subscribe to query with onSnapshot
    const unSubscribe = onSnapshot(queryRef.current, (querySnapshot) => {
      // Get all documents from collection - with IDs
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // Update state
      setDocs(data);
    });

    // Detach listener
    return () => {
      unSubscribe;
    };
  }, [queryRef]);

  return docs as T;
}
