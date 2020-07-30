import React, { useState } from 'react';
import UserTable from './tables/UserTable';

const App: React.FC = () => {
  type User = {
    id: number;
    name: string;
    username: string;
  };

  const usersData: User[] = [
    { id: 1, name: 'たぬきち', username: 'tanutanu' },
    { id: 2, name: 'まめきち', username: 'mamekko55' },
    { id: 3, name: 'つぶきち', username: 'tsubumaru' },
  ];

  const [users, setUsers] = useState(usersData);

  return (
    <div className="container">
      <h1>ユーザーCRUDアプリ</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>ユーザーを追加する</h2>
        </div>
        <div className="flex-large">
          <h2>ユーザー一覧</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
};

export default App;
