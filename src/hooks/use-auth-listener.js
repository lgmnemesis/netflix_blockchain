import { useState, useEffect, useContext} from 'react';
import { FirebaseContext } from '../context/firebase';

export default function UserAuthListener() {
  const [user, setUser] = useState(null);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((user) => {
      console.log('user:', user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    })
    return () => {
      console.log('############ done')
      return listener();
    };
  }, []);

  return { user };
}
