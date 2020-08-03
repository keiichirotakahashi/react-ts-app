import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

const App: React.FC = () => {
  type User = {
    id?: number;
    name: string;
    username: string;
  };

  const usersData: User[] = [
    { id: 1, name: 'たぬきち', username: 'tanutanu' },
    { id: 2, name: 'まめきち', username: 'mamekko55' },
    { id: 3, name: 'つぶきち', username: 'tsubumaru' },
  ];

  const [users, setUsers] = useState<User[]>(usersData);
  const [editing, setEditing] = useState<boolean>(false);
  const initialFormState: User = { name: '', username: '' };
  const [currentUser, setCurrentUser] = useState<User>(initialFormState);

  const addUser: (userForm: User) => void = (userForm) => {
    const user: User = { ...userForm, id: users.length + 1 };
    setUsers([...users, user]);
  };

  const editRow: (user: User) => void = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser: (userForm: User, id?: number) => void = (userForm, id) => {
    setEditing(false);
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              id: userForm.id,
              name: userForm.name,
              username: userForm.username,
            }
          : user
      )
    );
  };

  const deleteUser: (id?: number) => void = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1>ユーザーCRUDアプリ</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>ユーザーを編集する</h2>
              <EditUserForm
                currentUser={currentUser}
                updateUser={updateUser}
                setEditing={setEditing}
              />
            </div>
          ) : (
            <div>
              <h2>ユーザーを追加する</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>ユーザー一覧</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
