import { signOut } from "@firebase/auth";
import { useAuth, useUser } from "reactfire";

const Dashboard = () => {
  const auth = useAuth();
  const { status, data: user } = useUser();

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{status}</h2>

      {status === "success" && <p>{JSON.stringify(user)}</p>}
      <button onClick={() => signOut(auth)}>Sign out!</button>
    </div>
  );
};

export default Dashboard;
