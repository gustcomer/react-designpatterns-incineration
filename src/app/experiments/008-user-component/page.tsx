import UserProfile from "@/components/user/UserProfile";
import { user } from "@/data/user";

function App() {
  return (
    <>
      <UserProfile user={user} />
    </>
  );
}

export default App;