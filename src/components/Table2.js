import React from 'react';
import data from './data.json';

const UsersDetails = () => {
  return (
    <div className='mx-3 mt-4  rounded-2' style={{ overflowX: 'scroll', maxWidth: '100%' }} >
      <table className="table table-striped">
          
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>Username</th>
            <th>Email</th>
            <th>Street</th>
            <th>Suite</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.street}</td>
              <td>{item.address.suite}</td>
              <td>{item.address.city}</td>
              <td>{item.address.zipcode}</td>
              <td>{item.address.geo.lat}</td>
              <td>{item.address.geo.lng}</td>
            </tr>
          ))}
        </tbody>
      </table>

            

    </div>
  );
};

export default UsersDetails;
