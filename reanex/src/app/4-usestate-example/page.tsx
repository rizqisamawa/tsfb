"use client";
import { UserProps } from "@/types/types";
import React, { useState } from "react";

const UseStateExample = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<UserProps | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: username,
      sessionId: Math.random(),
    });
  };

  const handleTo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser(null);
  };

  return (
    <div className="useStateExample">
      {user ? (
        <>
          <p>
            Hello {user.name}, your session id is {user.sessionId}
          </p>
          <button onClick={handleTo}>Back</button>
        </>
      ) : (
        <form>
          <input type="text" placeholder="Username" onChange={handleChange} />
          <button onClick={handleClick}>Login</button>
        </form>
      )}
    </div>
  );
};

export default UseStateExample;
