import { createUserWithEmailAndPassword } from "@firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { useState } from "react";
import { useAuth, useFirestore } from "reactfire";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [photoURL, setPhotoURL] = useState(
    "https://randomuser.me/api/portraits/lego/5.jpg"
  );

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const genderChangeHandler = (e) => {
    setGender(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(Number(e.target.value) || 0);
  };
  const locationChangeHandler = (e) => {
    setLocation(e.target.value);
  };
  const contactChangeHandler = (e) => {
    setContact(e.target.value);
  };
  const photoURLChangeHandler = (e) => {
    setPhotoURL(e.target.value);
  };

  const auth = useAuth();
  const firestore = useFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await createUserWithEmailAndPassword(auth, email, password);
    const docRef = doc(firestore, "users", user.user.uid);
    await setDoc(docRef, {
      age,
      contact,
      gender,
      location,
      name,
      photo_url: photoURL,
      verified: false,
    });

    setAge(0);
    setContact("");
    setGender("");
    setLocation("");
    setName("");
    setPhotoURL("https://randomuser.me/api/portraits/lego/5.jpg");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center p-4 bg-gray-400">
      <div className="p-4 bg-green-100 rounded-lg shadow-lg flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Sign up for TravelAmigo!</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={emailChangeHandler}
              className="rounded-md border-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={passwordChangeHandler}
              className="rounded-md border-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={nameChangeHandler}
              className="rounded-md border-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Age</label>
            <input
              type="number"
              value={age}
              onChange={ageChangeHandler}
              className="rounded-md border-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Gender</label>
            <input
              type="text"
              value={gender}
              onChange={genderChangeHandler}
              className="rounded-md border-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Location</label>
            <input
              type="text"
              value={location}
              onChange={locationChangeHandler}
              className="rounded-md border-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Contact</label>
            <textarea
              value={contact}
              onChange={contactChangeHandler}
              className="rounded-md border-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={photoURLChangeHandler}
              className="rounded-md border-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <p>Image preview:</p>
            <img
              src={photoURL}
              alt=""
              className="w-32 h-32 mx-auto rounded-full shadow-lg border-4 border-gray-700"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-2">
            <button
              type="submit"
              className="w-full bg-yellow-400 p-2 rounded-md shadow-md "
            >
              Submit
            </button>
            <button
              type="reset"
              className="w-full bg-yellow-400 p-2 rounded-md shadow-md "
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
