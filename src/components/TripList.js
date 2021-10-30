import { query } from "@firebase/database";
import { collection, deleteDoc, doc, where } from "@firebase/firestore";
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";
import Loader from "./Loader";

import TripItem from "./TripItem";

const TripList = ({ name, uid }) => {
  const { status: userStatus, data: userData } = useUser();
  const firestore = useFirestore();
  const tripCollectionRef = collection(firestore, "trips");
  const tripQuery = query(tripCollectionRef, where("user", "==", uid));
  const { status, data: tripData } = useFirestoreCollectionData(tripQuery, {
    idField: "id",
  });

  const deleteTrip = async (tripId) => {
    await deleteDoc(doc(firestore, "trips", tripId));
  };

  if (status === "loading" || userStatus === "loading") {
    return <Loader />;
  }

  if (status === "error" || !tripData) {
    return <div>Error: No trips found for user {uid}</div>;
  }

  const isUserProfile = uid === userData.uid;

  return (
    <div className="bg-purple-50 rounded-lg shadow-lg p-4 w-full">
      <h1 className="text-3xl font-bold mb-4">Trips</h1>
      <div className="flex flex-col gap-4">
        {tripData.map((trip) => (
          <TripItem
            key={trip.id}
            uid={trip.user}
            username={name}
            date={trip.date}
            destination={trip.destination}
            wanted={trip.wanted}
            showDelete={isUserProfile}
            onDelete={isUserProfile ? () => deleteTrip(trip.id) : () => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default TripList;
