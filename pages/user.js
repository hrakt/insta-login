import { useEffect, useState } from "react";
import firebase from "firebase";
import { useRouter } from "next/router";

function UserPage({ user }) {
  const router = useRouter();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {})
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user]);
  return (
    <div>
      {user && user.email}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UserPage;
