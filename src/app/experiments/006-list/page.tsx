import { LargeAuthorListItem } from "@/components/authors/LargeAuthorListItem";
import { SmallAuthorListItem } from "@/components/authors/SmallAuthorListItem";
import { List } from "@/components/lists/List";
import { authors } from "@/data/authors";

function App() {
  return (
    <>
      <List items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem} />
      <List items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem} />
    </>
  );
}

export default App;