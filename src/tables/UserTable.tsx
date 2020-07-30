import React from 'react';

type User = {
  id: number;
  name: string;
  username: string;
};

type UserTableProps = {
  users: User[];
};

const UserTable: React.FC<UserTableProps> = (props) => (
  <table>
    <thead>
      <tr>
        <th>名前</th>
        <th>ユーザーネーム</th>
        <th>アクション</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button className="button muted-button">編集</button>
              <button className="button muted-button">削除</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>ユーザーはいません</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
