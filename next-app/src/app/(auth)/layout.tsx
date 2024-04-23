import React from "react";

const Layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div>
        <h1></h1>
      <div>
        {}
        <label htmlFor="employeeName">Employee Name:</label>
        <input type="text" id="employeeName" name="employeeName" />
        <br />
        <label htmlFor="companyName">Company Name:</label>
        <input type="text" id="companyName" name="companyName" />
        <br />
        <label htmlFor="contactNumber">Contact Number:</label>
        <input type="text" id="contactNumber" name="contactNumber" />
        <br />
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button className="registration-button">Registration</button>
      </div>
    </div>
  )
}

export default Layout;
