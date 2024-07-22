import UserCard from "@/components/user-bsky/UserCard";
import { user } from "@/components/user-bsky/user_data";

function App() {
  return (
    <>
      <UserCard user={user} />
    </>
  );
}

export default App;