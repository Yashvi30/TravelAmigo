import { Link } from "react-router-dom";

const TripItem = ({
  uid,
  destination,
  date,
  wanted,
  username,
  showDelete,
  onDelete,
}) => {
  return (
    <div className="bg-white px-4 py-2 rounded-lg border-2 shadow-md flex flex-col gap-2">
      <div className="prose-xl">
        {showDelete ? (
          "I"
        ) : (
          <Link to={`/user/${uid}`} className="text-blue-500">
            {username}
          </Link>
        )}{" "}
        {showDelete ? "am" : "is"} going to{" "}
        <span className="text-green-500">{destination}</span> on{" "}
        <span className="text-purple-500">
          {new Date(date.seconds * 1000).toLocaleDateString("en-IN")}
        </span>
      </div>
      <div className="prose-md">Looking for upto {wanted} companions!</div>
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
