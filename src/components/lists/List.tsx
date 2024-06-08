import { SmallAuthorListItemProps } from "@/components/authors/SmallAuthorListItem";

interface ListProps {
  items: any[];
  sourceName: string;
  ItemComponent: React.FC<any>;
}

export const List = ({ items, sourceName, ItemComponent }: ListProps) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item}} />
      ))}
    </>
  );
}