import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';

type User = {
  id?: number;
  name: string;
  username: string;
};

type EditUserFormProps = {
  currentUser: User;
  updateUser: (userForm: User, id?: number) => void;
  setEditing: (boolean: boolean) => void;
};

const EditUserForm: React.FC<EditUserFormProps> = (props) => {
  const [userForm, setUserForm] = useState<User>(props.currentUser);

  useEffect(() => {
    setUserForm(props.currentUser);
  }, [props]);

  const handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void = (
    event
  ) => {
    const { name, value } = event.target;
    setUserForm({ ...userForm, [name]: value });
  };

  return (
    <form
      onSubmit={(event: FormEvent) => {
        event.preventDefault();
        props.updateUser(userForm, userForm.id);
      }}
    >
      <label>名前</label>
      <input
        type="text"
        name="name"
        value={userForm.name}
        onChange={handleInputChange}
      />
      <label>ユーザーネーム</label>
      <input
        type="text"
        name="username"
        value={userForm.username}
        onChange={handleInputChange}
      />
      <button>更新</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        取り消す
      </button>
    </form>
  );
};

export default EditUserForm;
