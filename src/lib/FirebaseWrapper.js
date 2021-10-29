import { useFirebaseApp, AuthProvider, FirestoreProvider } from "reactfire";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import firebaseConfig from "./firebase.config";
import { FirebaseAppProvider } from "reactfire";

const FirebaseSDKWrapper = ({ children }) => {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={firestore}>{children}</FirestoreProvider>
    </AuthProvider>
  );
};

const FirebaseWrapper = ({ children }) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseSDKWrapper>{children}</FirebaseSDKWrapper>
    </FirebaseAppProvider>
  );
};

export default FirebaseWrapper;
