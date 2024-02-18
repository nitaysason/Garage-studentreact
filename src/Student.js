import React from 'react';

const Student = (props) => {
  const { name, age, email } = props.student;

  return (
    <div>
      <h2>Student Information</h2>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Student;
