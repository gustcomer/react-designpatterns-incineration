"use client"

interface ComponentProps {
  Left: React.FC,
  Right: React.FC
}

const SplitScreen: React.FC<ComponentProps> = ({Left, Right}) => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Left />
      </div>
      <div className="flex-1">
        <Right />
      </div>
    </div>
  );
};

export default SplitScreen;