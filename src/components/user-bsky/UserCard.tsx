import Image from 'next/image';

export interface User {
  username: string;
  handle: string;
  followers: number;
  following: number;
  posts: number;
  profileImage: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user: {username, profileImage, handle, followers, following, posts} }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white p-4">
      <div className="flex items-center">
        <Image className="w-16 h-16 rounded-full mr-4" src={profileImage} alt="User profile" width={64} height={64} />
        <div className="text-left">
          <div className="text-xl mb-2">{username}</div>
          <p className="text-gray-400 text-sm">@{handle}</p>
        </div>
      </div>
      <div className="mt-4 flex text-sm">
        <p className=""><span className="font-bold">{followers}</span> followers</p>
        <p className="ml-2"><span className="font-bold">{following}</span> following</p>
        <p className="ml-2"><span className="font-bold">{posts}</span> posts</p>
      </div>
    </div>
  );
};

export default UserCard;