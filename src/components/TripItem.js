import { Link } from "react-router-dom";

const TripItem = ({
  uid,
  destination,
  date,
  wanted,
  going,
  username,
  showDelete,
  onDelete,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg border-2 shadow-md flex flex-col gap-2">
      <div className="prose-xl">
        <span className="font-bold">Organizer: </span>
        <Link to={`/user/${uid}`} className="text-blue-500">
          {username}
        </Link>
      </div>
      <div>
        <span className="font-bold">Destination: </span>
        <span className="text-green-500">{destination}</span>
      </div>
      <div>
        <span className="font-bold">Date: </span>
        <span className="text-purple-500">
          {new Date(date.seconds * 1000).toLocaleDateString("en-IN")}
        </span>
      </div>
      <div className="prose-md font-bold">
        {going.length}/{wanted}
      </div>
      <div>
        {showDelete && (
          <button
            className="px-4 py-2 bg-red-600 text-red-50 rounded-lg shadow-md"
            onClick={() => window.confirm("Delete trip?") && onDelete()}
          >
            Delete trip
          </button>
        )}
      </div>
    </div>
  );
};

export default TripItem;
