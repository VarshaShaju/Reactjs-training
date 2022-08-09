// import HeadSection from "../components/HeadSection";
// import DetailsCard from "../components/DetailsCard";
// import SideNav from "../components/SideNav"
// import TopDiv from "../components/TopDiv";
// import '../styles/style.css'
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useGetEmployeeByIdQuery } from '../services/baseApi'
// import { labels } from '../utils/constants';


// const EmployeeDetails = () => {
//     const { id: empId } = useParams();
// 	const { data: empData, error: empError, isLoading: empIsLoading } = useGetEmployeeByIdQuery(empId);
//     const [ employee, setEmployee ] = useState({});

//   useEffect(() => {
//     if(empData){
//       setEmployee({
//         ...empData.data,
//         ...empData.data.address
//       })
//     }
//   }, [empData])
    
//   return (
//     <>
//       <div className='page'>
//         <SideNav />
        
//         <main>
//         <TopDiv />
//         <HeadSection label={'Employee Details'} />
//           <div className='container'>
//             {empError ? (
//               <>There was an error</>
//             ) : empIsLoading ? (
//               <>Loading...</>
//             ) : empData ? (
//               <>
//                 {
// 			        <DetailsCard 
// 					    data={empData.data}
// 						fields={labels}
// 						className="emp-details-card"
// 					/>
//                 }
//               </>
//             ) : null}
//           </div>
//         </main>
//       </div>
//     </>
//   )

// }

// export default EmployeeDetails



import SideNav from "../components/SideNav"
// import "../styles/EmployeeDetails.css";
import{Link} from "react-router-dom"
import '../styles/style.css'
import { useGetEmployeeByIdQuery } from '../services/baseApi';
import {useParams} from "react-router-dom";
import {useNavigate} from 'react-router-dom'

const EmployeeDetails =()=>{
    const {id}= useParams();
    console.log("id=",id);
    const { data, isLoading } = useGetEmployeeByIdQuery(id);
    (data)?console.log(data.data):console.log("Empty");

    const navigate = useNavigate();
    const goToNextPage = () =>{
        navigate(`/edit/${id}`);
    };
    return(

        <div>
            <SideNav/>
            <main>
                <div className="heading">
                    <h1>Employee Details</h1>
                    <div className="edit-icon" onClick={goToNextPage}>  
                         <div className="edit-content">Edit</div>
                    </div>
                </div>

                <div className="emp-details">
                    <div className="emp-data">
                        <div className="emp-item">Employee Name</div>
                        <div className="emp-data-db">{data?.data?.name}</div>
                      
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Employee ID</div>
                        <div className="emp-data-db">{data?.data?.id}</div>
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Joining Date</div>
                        <div className="emp-data-db">{data?.data?.dateOfJoining}</div>
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Role</div>
                        <div className="emp-data-db">{data?.data?.role}</div>
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Status</div>
                        <div className={`emp-status ${data?.data?.status}`}>{data?.data?.status}</div>   
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Experience</div>
                        <div className="emp-data-db">{data?.data?.experience} Years</div>
                    </div>
                    <hr/>
                    <div className="emp-data">
                        <div className="emp-item">Address</div>
                        <div className="emp-data-db">{data?.data?.address.line1},{data?.data?.address.line2},</div>
                        <div className="emp-data-db">{data?.data?.address.city},{data?.data?.address.state},{data?.data?.address.pin}</div>
                    </div>
                    <div className="emp-data">
                        <div className="emp-item">Employee ID Proof</div>
                        <div className="emp-data-db"></div>
                    </div>
                </div>

            </main>
        </div>
    )
}
export default EmployeeDetails;