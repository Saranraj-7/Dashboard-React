
import { useNavigate, useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';  
import userData from "./Data";
const Viewdetails = ({ user}) => {
  const navigate=useNavigate();
    console.log(user);
    const  userId  = useParams();
    console.log(userId,"params")
    const usersdata = user.find((user) => user._id === userId.user_Id);
    console.log(usersdata);

    const handleGoBack = () => {
       
        navigate(`/table`);
      };
    

    


    return (
        <div className='d-flex flex-column  card w-100 m-2 m-md-5 m-md-0 '>
          <h2 className='ms-3'> Details</h2>
          <div className='d-md-flex flex-row '>
          <div className='d-md-none flex-md-column ms-3 py-3'>
            <div className='d-flex flex-column'>
              <span className='py-1'>Name: {usersdata.name}</span>
              <span className='py-1'>Gender: {usersdata.gender}</span>
              <span className='py-1'>Age: {usersdata.age}</span>
            </div>
            <div className='d-flex flex-column'>
              <span className='my-3 py-1'>About: {usersdata.about}</span>
              <span className='py-1' >Latitude: {usersdata.latitude}</span>
              <span className='py-1'>Longitude: {usersdata.longitude}</span>
            </div>
          </div>
          <div className='d-none d-md-flex flex-column px-4 py-3'>
              <div className='d-flex justify-content-between'>
               <div className='d-flex flex-column'>
                 <span className='py-1' >Name: {usersdata.name}</span>
                 <span className='py-1'>Gender: {usersdata.gender}</span>
                 <span className='py-1'>Age: {usersdata.age}</span>
                 <span className='py-1'>Company: {usersdata.company}</span>
                 <span className='py-1'>Email: {usersdata.email}</span>
                 <span className='py-1'>Phone: {usersdata.phone}</span>
                 <span className='py-1'>Company: {usersdata.company}</span>
                 <span className='py-1'>Email: {usersdata.email}</span>
                 <span className='py-1'>Phone: {usersdata.phone}</span>
                 <span className='py-1'>Address: {usersdata.address}</span>
                 <span className='py-1'>D.O.B: {usersdata.date_of_birth}</span>
               </div>
               {/* <div className='d-flex flex-column'> */}
          
               {/* </div> */}
              </div>
              <div className='my-4 d-flex flex-column'>
                <span className='my-3 py-1'>About: {usersdata.about}</span>
                <span className='py-1'>Latitude: {usersdata.latitude}</span>
                <span className='py-1'>Longitude: {usersdata.longitude}</span>
              </div>
          </div>
         
          
          
          </div>

          <div className='d-flex ms-md-4 m-3'>
        <button className='btn btn-primary' onClick={handleGoBack}>
          Back
        </button>
      </div>
        </div>
      );
};

export default Viewdetails;

