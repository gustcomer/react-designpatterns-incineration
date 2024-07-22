import UserProfile from "@/components/user/UserProfile";
import { user } from "@/components/user/user_data";

function App() {
  return (
    <>
      <UserProfile user={user} />
    </>
  );
}

export default App;