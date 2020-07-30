import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';

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

  const [users, setUsers] = useState<User[]>(usersData);

  type UserForm = {
    id: number | null;
    name: string;
    username: string;
  };

  const addUser: (userForm: UserForm) => void = (userForm) => {
    const user: User = { ...userForm, id: users.length + 1 };
    setUsers([...users, user]);
  };

  return (
    <div className="container">
      <h1>ユーザーCRUDアプリ</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>ユーザーを追加する</h2>
          <AddUserForm addUser={addUser} />
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
