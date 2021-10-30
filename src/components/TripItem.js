const TripItem = ({
  destination,
  date,
  wanted,
  username,
  showDelete,
  onDelete,
}) => {
  return (
    <div className="bg-blue-50 p-4 rounded-sm shadow-md flex flex-col gap-4">
      <div className="prose-xl">
        <span to={`/user/{}`} className="text-blue-500">
          {showDelete ? "I" : username}
        </span>{" "}
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
            className="px-4 py-2 bg-red-600 text-red-50 rounded-lg"
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
