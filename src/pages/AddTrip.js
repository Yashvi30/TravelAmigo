import Loader from "../components/Loader";
import { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { useFirestore, useUser } from "reactfire";
import { useHistory } from "react-router";

const AddTrip = () => {
  const history = useHistory();
  const { status, data: userData } = useUser();
  const firestore = useFirestore();
  const tripCollectionRef = collection(firestore, "trips");

  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [wanted, setWanted] = useState(0);

  const destinationChangeHandler = (e) => setDestination(e.target.value);
  const dateChangeHandler = (e) => setDate(e.target.value);
  const wantedChangeHandler = (e) => setWanted(Number(e.target.value));

  if (status === "loading") {
    return <Loader />;
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log();

    await addDoc(tripCollectionRef, {
      destination,
      wanted,
      date: new Date(date),
      user: userData.uid,
      going: [],
    });

    setDestination("");
    setDate(new Date().toISOString().substr(0, 10));

    history.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-purple-50 p-4 shadow-xl border-purple-600 border-2 rounded-xl flex flex-col gap-2">
        <h1 className="prose-2xl font-bold text-center text-purple-900">
          Add a trip
        </h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label>Destination</label>
            <input
              type="text"
              value={destination}
              onChange={destinationChangeHandler}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Date</label>
            <input type="date" value={date} onChange={dateChangeHandler} />
          </div>

          <div className="flex flex-col gap-2">
            <label>Number of participants</label>
            <input type="text" value={wanted} onChange={wantedChangeHandler} />
          </div>

          <div className="flex gap-2">
            <button
              className="bg-green-500 px-4 py-2 rounded-md shadow-md font-bold text-white w-full"
              type="submit"
            >
              Submit
            </button>
            <button
              className="bg-red-500 px-4 py-2 rounded-md shadow-md font-bold text-white w-full"
              type="reset"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddTrip;
