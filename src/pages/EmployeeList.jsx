import HeadSection from "../components/HeadSection";
import SideNav from "../components/SideNav"
import '../styles/style.css'
import {MdOutlineAdd, MdOutlineDelete, MdOutlineEdit} from "react-icons/md";
import Button from "../components/Button";
import {Link,useNavigate} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { useDeleteEmployeeByIdMutation, useGetAllEmployeesQuery, useUpdateEmployeeMutation } from "../services/baseApi";
import UpdateEmployee from "./UpdateEmployee";


const EmployeeList = () => {
    const {data,error,isLoading} = useGetAllEmployeesQuery();
    let {id}=useParams();
    const [DeleteEmployeeById, result] = useDeleteEmployeeByIdMutation(id)
    const navigate = useNavigate();
    const goToNextPage = (url) =>{
        navigate(url);
    }
    const functionDelete = (e) =>{
        e.stopPropagation();
        DeleteEmployeeById(id);
    }

    return(
        <>
            <SideNav />
            <main>
                <section id="sec1">
                <h1 id="headings" >Employee List</h1>
                <button id="ce" onClick={() => navigate('/create')}><div id="bc"><MdOutlineAdd className="plus"/></div>< div id="ce2"><h4>Create Employee</h4></div></button>
                </section>
                <>
        <table>
        <tr>
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>Joining Date</th>
            <th>Role</th>
            <th>Status</th>
            <th>Experience</th>
            <th>Action</th>
        </tr>
        {data && data.data.map(item =>
            <tr key={item.id} onClick={()=>goToNextPage(`/details/${item.id}`)}>
                <td>{item.name}</td>
                <td>{item.id}</td>
                <td>{item.dateOfJoining}</td>
                <td>{item.role}</td>
                <td><span className={item.status}>{item.status}</span></td>
                <td>{item.experience}</td>
                <td> 
                <div>
                                <span
                                className="delete"
                                onClick={(e)=>{ e.stopPropagation();DeleteEmployeeById(item.id)}}
                                ><MdOutlineDelete/></span>
                                <span
                                className="edit"
                                onClick={(e)=>{e.stopPropagation();navigate(`/edit/${item.id}`)}}
                                ><MdOutlineEdit/></span>
                </div>
                </td>
            </tr>
        )}
        </table>
        </>
            </main>
        </>
        
    )
}

export default EmployeeList;
