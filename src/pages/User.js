import { useFirestore, useFirestoreDocData } from "reactfire";
import { useParams } from "react-router-dom";
import { doc } from "@firebase/firestore";

import Loader from "../components/Loader";
import UserProfileView from "../components/UserProfileView";
import TripList from "../components/TripList";

const User = () => {
  const firestore = useFirestore();
  const { uid } = useParams();

  const ref = doc(firestore, "users", uid);
  const { status, data: userData } = useFirestoreDocData(ref);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "error" || !userData) {
    return <div>Error! User not found! {uid}</div>;
  }

  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      <UserProfileView
        name={userData.name}
        contact={userData.contact}
        age={userData.age}
        gender={userData.gender}
        location={userData.location}
        photo_url={userData.photo_url}
      />
      <TripList name={userData.name} uid={uid} />
    </div>
  );
};

export default User;
