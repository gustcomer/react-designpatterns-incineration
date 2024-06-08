interface Author {
  name: string;
  age: number;
}

export interface SmallAuthorListItemProps {
  author: Author;
}

export const SmallAuthorListItem: React.FC<SmallAuthorListItemProps> = ({author}) => {
  const {name, age} = author;
  return(
    <p>Name: {name}, Age: {age}</p>
  );
}