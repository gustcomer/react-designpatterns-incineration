"use client"

interface ComponentProps {
  Left: React.FC,
  Right: React.FC,
  leftWidth?: number,
  rightWidth?: number
}

const SplitScreenEnhanced: React.FC<ComponentProps> = ({Left, Right, leftWidth=1, rightWidth=1}) => {
  return (
    <div className='flex'>
      <div className={`flex-${leftWidth}`}>
        <Left />
      </div>
      <div className={`flex-${rightWidth}`}>
        <Right />
      </div>
    </div>
  );
};

export default SplitScreenEnhanced;