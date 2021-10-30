const Pill = ({ children }) => {
  return (
    <div className="text-xs text-blue-900 bg-blue-300 font-bold rounded-full shadow-md px-4 py-2">
      {children}
    </div>
  );
};

const UserProfileView = ({
  name,
  contact,
  gender,
  age,
  location,
  photo_url,
}) => {
  return (
    <div className="bg-purple-100 p-8 shadow-lg rounded-lg flex flex-col gap-4 relative ">
      <div>
        <div className="absolute top-0 left-0 right-0 rounded-lg h-24 bg-gradient-to-b from-green-500 to-indigo-500"></div>
        <img
          src={photo_url}
          alt={`${name}'s profile`}
          className="h-24 w-24 block rounded-full z-10 relative mx-auto shadow-lg"
        />
      </div>
      <div className="text-3xl text-center font-bold">{name}</div>
      <div className="text-xs font-bold rounded-md w-full text-center shadow-md px-4 py-2 bg-pink-300 text-pink-900">
        {contact}
      </div>
      <div className="flex justify-center items-center gap-2 w-full">
        <Pill>{age}</Pill>
        <Pill>{gender.toUpperCase()}</Pill>
        <Pill>{location}</Pill>
      </div>
    </div>
  );
};

export default UserProfileView;
