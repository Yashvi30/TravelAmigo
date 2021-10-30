const TripItem = ({ destination, date, username, wanted, got, onDelete }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-sm shadow-md">
      <div>Trip by {username}</div>
      <div>To {destination}</div>
      <div>On {new Date(date.seconds * 1000).toDateString()}</div>
      <div>Needed {wanted}</div>
      <div>Got {got}</div>
    </div>
  );
};

export default TripItem;
