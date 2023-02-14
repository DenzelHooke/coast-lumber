import React from "react";
import Employee from "./Employee";

const Employees = () => {
  const data = [
    {
      first_name: "Jennifer",
      last_name: "Smith",
      bio: "Honoured to lead Coast Lumber in giving back, respecting the environment, and upholding values through hard work.",
      position: "Owner",
      get email() {
        return `${this.first_name}.${this.last_name}@coastlumber.com`;
      },
    },
    {
      first_name: "Thomas",
      last_name: "Smith",
      bio: "Proud to carry the family legacy forward with innovation and stride.",
      position: "Owner",
      get email() {
        return `${this.first_name}.${this.last_name}@coastlumber.com`;
      },
    },
    {
      first_name: "Jason",
      last_name: "Matthews",
      bio: " Experienced in design and engineered lumber, dedicated to providing top-notch building material solutions.",
      position: "Contract Sales",
      get email() {
        return `${this.first_name}.${this.last_name}@coastlumber.com`;
      },
    },
    {
      first_name: "Sarah",
      last_name: "Gonzalez",
      bio: "Passionate about building and sales, committed to delivering high-quality products.",
      position: "Contract Sales",
      get email() {
        return `${this.first_name}.${this.last_name}@coastlumber.com`;
      },
    },

    {
      first_name: "David",
      last_name: "Chen",
      bio: "Skilled contractor, specializing in high-quality door and window solutions.",
      position: "Doors and Windows Specialist",
      get email() {
        return `${this.first_name}.${this.last_name}@coastlumber.com`;
      },
    },
    // {
    //   first_name: "Emily",
    //   last_name: "Chen",
    //   bio: "Detail-oriented expert in doors and windows, passionate about improving homes.",
    //   position: "Doors and Windows Specialist",
    //   get email() {
    //     return `${this.first_name}.${this.last_name}@coastlumber.com`;
    //   },
    // },
  ];

  return (
    <div className="team-info-wrappper">
      <div className="global-container">
        <div className="center-text header-wrapper">
          <h2 className="center-text reg-text">
            Meet the <span className="bold">Team</span>
          </h2>
        </div>
        <div className="employee-container flex flex-wrap">
          {data.map((employee, i) => (
            <Employee
              firstname={employee.first_name}
              lastname={employee.last_name}
              bio={employee.bio}
              position={employee.position}
              email={employee.email}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employees;
