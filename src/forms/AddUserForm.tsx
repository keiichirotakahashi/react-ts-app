import React, { useState, FormEvent, ChangeEvent } from 'react';

type User = {
  id?: number;
  name: string;
  username: string;
};

type AddUserFormProps = {
  addUser: (userForm: User) => void;
};

const AddUserForm: React.FC<AddUserFormProps> = (props) => {
  const initialFormState: User = { name: '', username: '' };
  const [userForm, setUserForm] = useState<User>(initialFormState);

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
        if (!userForm.name || !userForm.username) return;

        props.addUser(userForm);
        setUserForm(initialFormState);
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
      <button>追加</button>
    </form>
  );
};

export default AddUserForm;
