import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Data from '../components/Data';
import Pagination from 'react-bootstrap/Pagination';

const RecordsPerPage = 10;
const Tables = () => {
    const { userId } = useParams();
    const Navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastRecord = currentPage * RecordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - RecordsPerPage;
    const currentRecords = Data.slice(indexOfFirstRecord, indexOfLastRecord);

    const totalPages = Math.ceil(Data.length / RecordsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const handleview = (userId) => {
        Navigate(`/user/${userId}`);
    };

    return (
        <div className="w-100">
            <div className='my-3'>
                <span className='fw-semibold fs-4 mx-3'>Datas</span>
            </div>

            <div className='mx-3 mt-4  rounded-2' style={{ overflowX: 'scroll', maxWidth: '100%' }}>
                <table className="table  table-striped m-0 w-100 ">

                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">GENDER</th>
                            <th scope="col">COMPANY</th>
                            <th scope="col">AGE</th>
                            <th className='d-flex justify-content-center' scope="col">Action</th>


                        </tr>
                    </thead>
                    <tbody>
                        {currentRecords.map((user, index) => (
                            <tr key={user._id}>

                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.gender}</td>
                                <td>{user.company}</td>
                                <td>{user.age}</td>
                                <td className='d-flex justify-content-center text-decoration-none'>
                                    <span onClick={() => handleview(user._id)}> View Details</span>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>


                <div className='pt-3  d-flex justify-content-center'>
                    <Pagination>
                        {[...Array(totalPages).keys()].map((page) => (
                            <Pagination.Item key={page + 1} active={page + 1 === currentPage} onClick={() => handlePageChange(page + 1)}>
                                {page + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default Tables;
5