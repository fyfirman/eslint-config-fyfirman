/* This is sample file to test whether eslint is work or not. */
/* Try to break the eslint and/or prettier rule, you should see red underline on it */
import * as React from "react";

interface UsersProps {
  nameFilter: string;
}

const Users = ({ nameFilter }: UsersProps) => {
  const users = [
    { name: "Janice", friends: ["Albert", "Nancy"], id: 23 },
  ].filter(({ name }) => name.toLowerCase().includes(nameFilter));

  return (
    <div className="user-list" data-testid="users" id="users-section">
      {users.map((user) => (
        <div key={user.id}>
          {`${user.name} is friends with ${user.friends.join(", ")}`}
        </div>
      ))}
    </div>
  );
};

export default Users;
