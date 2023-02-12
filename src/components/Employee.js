import React from "react";

const Employee = ({ firstname, lastname, bio, position, email }) => {
  return (
    <div className="employee-item">
      <p className="employee-name">{`${firstname} ${lastname}`}</p>
      <p>{position}</p>
      <p>{bio}</p>
      <p>{email}</p>
    </div>
  );
};

export default Employee;
