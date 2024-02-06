import data from './data.json';
const UsersDetails = () => {



  // return (
  //   // <div>

    //   <table>
    //   <thead>
    //     <tr>
    //       <th scope="col">ID</th>
    //       <th scope="col">NAME</th>
    //       <th scope="col">GENDER</th>
    //       <th scope="col">COMPANY</th>
    //       <th scope="col">AGE</th>
    //     </tr>
    //   </thead>

    //   <tbody>
  
    //     <tr key={data.id}>

    //       <td>{data.id}</td>
    //       <td>{data.name}</td>
    //       <td>{data.username}</td>
    //       <td>{data.email}</td>
    //       <td>{data.address}</td>
    //     </tr>
    // </tbody>
    // </table>
  //   // </div >
  // );


 
    return (
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <table>
              <thead>
                <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">Username</th>
              </tr>
              </thead>
              <tbody>
                <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            </tr>
            </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  }




export default UsersDetails;