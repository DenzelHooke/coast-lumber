import React from "react";

const Employee = ({ firstname, lastname, bio, position, email }) => {
  return (
    <div className="employee-item">
      <div className="immediate-info">
        <p className="employee-name">{`${firstname} ${lastname}`}</p>
        <p className="email light-text">{email}</p>
        <p className="position">{position}</p>
      </div>
      <p className="bio">{bio}</p>
    </div>
  );
};

export default Employee;
