import { useEffect, useState } from "react";
import firebase from "firebase";
import { useRouter } from "next/router";

function UserPage({ user }) {
  const router = useRouter();
  // const [user, setUser] = useState(null);
  // const [loaded, setLoaded] = useState(null);

  useEffect(() => {
    // if (firebase.auth().currentUser) {
    //   setUser(firebase.auth().currentUser);
    //   setLoaded(true);
    // } else {
    //   // history.replace("/");
    //   setLoaded(false);
    // }
  }, []);

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setUser(null);
      })
      .catch(function (error) {
        console.log(error);
      });
    router.replace("/");
  };

  return (
    <div>
      {user && user.email}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UserPage;
