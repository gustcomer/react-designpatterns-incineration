import React from 'react';
import CenteredLayout from '@/components/layout/centered-layout/CenteredLayout';
import UserCard from '@/components/user-bsky/UserCard';
import { user } from '@/components/user-bsky/user_data';

const App: React.FC = () => {
  return (
    <CenteredLayout>
      <div>
        <h1>Centered Content</h1>
        <UserCard user={user} />
      </div>
    </CenteredLayout>
  );
};

export default App;