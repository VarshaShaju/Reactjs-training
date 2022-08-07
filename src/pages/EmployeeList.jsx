import React from 'react';
//import InputField from '../components/InputField';
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useGetEmployeeListQuery } from '../services/baseApi';

function EmployeeList() {    
    const { data, error, isLoading } = useGetEmployeeListQuery();
    const navigate= useNavigate();   const goToNextPage =()=>{
        navigate('/create');
        }

return (
    <div >
        <table >
            <thead>
                <tr>
                    <th>EmployeeName</th>
                    <th>EmployeeId</th>
                    <th>JoiningDate</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Experience</th>
                </tr>
            </thead>
            <tbody>
                {data?.data?.map(user =>
                    <tr >
                        <td>{user.name}</td>
                        <td>{user.id}</td>
                        <td>{user.dateOfJoining}</td>
                        <td>{user.role}</td>
                        <td>{user.status}</td>
                        <td>{user.experience}</td>
                    </tr>
                )}
            </tbody>
        </table>
        <Button label="cancel" handleClick={goToNextPage}/>
    </div>
);

}export default EmployeeList;