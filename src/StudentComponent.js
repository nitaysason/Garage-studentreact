import React from 'react';
import NameComponent from './NameComponent';
import AgeComponent from './AgeComponent';
import EmailComponent from './EmailComponent';

const StudentComponent = ({ name, age, email }) => {
  return (
    <div>
      <h2>Student Information</h2>
      <NameComponent name={name} />
      <AgeComponent age={age} />
      <EmailComponent email={email} />
    </div>
  );
}

export default StudentComponent;
