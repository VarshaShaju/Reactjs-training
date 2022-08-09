import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";
import { useState } from "react";
import "../styles/style.css";
import HeadSection from "../components/HeadSection";
import SideNav from "../components/SideNav";
import {  useUpdateEmployeeByIdMutation } from "../services/baseApi";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useGetEmployeeByIdQuery } from "../services/baseApi";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"

const UpdateEmployee = () => {

    const navigate = useNavigate();
    const goToNextPage=()=>{
        navigate("/list");
    }


    const {id}=useParams();
    const { data, error, isLoading } = useGetEmployeeByIdQuery(id);
    const [UpdateEmployeeById, result]=useUpdateEmployeeByIdMutation()
    const [state, setState] = useState({
        name: "",
        username:"",
        password:"",
        departmentId:"",
        address:"",
        dateOfJoining: "",
        role:"",
        status:"",
        experience:"",
        line1:"",
        line2:"",
        city:"",
        state:"",
        country:"",
        pin:""
    });
    useEffect(() => {
        if(data?.data) {
            setState({
                name: data.data.name,
                departmentId:data.data.departmentId,
                id:data.data.id,
                dateOfJoining: data.data.dateOfJoining,
                role:data.data.role,
                status:data.data.status,
                username:data.data.username,
                password:data.data.password,
                experience:data.data.experience,
                line1:data.data.address.line1,
                line2:data.data.address.line2,
                 city:data.data.address.city,
                 state:data.data.address.state,
                 country:data.data.address.country,
                 pin:data.data.address.pin
            })
        }
    }, [data]);
    const onsubmit = () =>{
        const body= {
            name: state.name,
            departmentId:state.departmentId,
            id:state.id,
            dateOfJoining: state.dateOfJoining,
            role:state.role,
            username:state.username,
            password:state.password,
            status:state.status,
            experience:state.experience,
            address: {
                line1:state.line1,
                line2:state.line2,
                city:state.city,
                state:state.state,
                country:state.country,
                pin:state.pin
            }
            
        }
    UpdateEmployeeById({id,body});

    }
    
    const onChangeValue = (key, value) =>{
        setState({
            ...state,
            [key]: value,
        })
    }
    return (
        <div className="page">
        <SideNav />
        <main>
        <HeadSection label={'Edit Details'} />
            <section className="mainsection">
            <div className="form">
                    <div className="input">
                        <InputField type="text" label="Employee Name: " id="name" placeholder="Employee Name" value={state.name} name= "empname" onChange={(value) => onChangeValue("name", value)}/><br/>
                    </div>
                    <div>
                    <InputField type="text" label="Joining Date:" id="dateOfJoining" placeholder="Joining Date" value={state.dateOfJoining} name= "dateOfJoining" onChange={(value) => onChangeValue("dateOfJoining", value)}/><br/>
                    </div>
                    <div >
            <InputSelect
                    label="Role :" id="role" defaultvalue={state.role} isEdit={!!id} onChange={(value) => onChangeValue("role", value)}
                    options ={[
                        {key:'Role', label:''},
                        {key:'Developer', label:'Developer'},
                        {key:'QA', label:'QA'},
                        {key:'Dev Ops', label:'Dev Ops'},
                        {key:'admin',label:'Admin'}
                    ]}
                    />
            </div><br/>
            <div className="input" >
            <InputSelect
                    label="Status :" id="status" defaultvalue={state.status}  onChange={(value) => onChangeValue("status", value)}
                    options ={[
                        {key:'status', label:'' },
                        {key:'Probation', label:'Probation'},
                        {key:'Active', label:'Active'},
                        {key:'Inactive', label:'Inactive'}
                    ]}
                    />
            </div><br/>
                    <div>
                    <br/>
                        <InputField type="number" label="Experience:" id="experience" placeholder="Experience" name= "experience" value={state.experience} onChange={(value) => onChangeValue("experience", value)} /><br/>
                    </div>
                    <div>
                    <br/>
                    <InputField type="text" label="Address Line 1:" id="line1" placeholder="Line 1" name= "line1" value={state.line1} onChange={(value) => onChangeValue("line1", value)}/><br/>
                    </div>
                    <div>
                    <br/>
                    <InputField type="text" label="Address Line 2:" id="line2" placeholder="Line 2" name= "line2" value={state.line2} onChange={(value) => onChangeValue("line2", value)}/><br/>
                    </div>
                    <div>
                    <br/>
                    <InputField type="text" label="City:" id="city" placeholder="City" name= "city" value={state.city} onChange={(value) => onChangeValue("city", value)} /><br/>
                    </div>
                    <div>
                    <br/>
                    <InputField type="text" label="State:" id="state" placeholder="State" name= "state" value={state.state} onChange={(value) => onChangeValue("state", value)}/><br/>
                    </div>
                    <div>
                    <br/>
                    <InputField type="text" label="Country:" id="country" placeholder="Country" name= "country" value={state.country} onChange={(value) => onChangeValue("country", value)}/><br/>
                    </div>
                    <div>
                    <br/>
                    <InputField type="text" label="Pin:" id="pin" placeholder="pin" name= "pin" value={state.pin} onChange={(value) => onChangeValue("pin", value)}/><br/>
                    {/* <div>
                        <InputField type="text" label="Username" id="Username" placeholder="Username" name= "Username" onChange={(value) => onChangeValue("Username", value)}/><br/>
                    </div>
                    <div>
                        <InputField type="text" label="Password" id="Password" placeholder="Password" name= "Password" onChange={(value) => onChangeValue("Password", value)}/><br/>
                    </div> */}
                    </div>
                        <div>
                        <InputField className="upload" type="file" label="Upload ID Proof" id="uploadphoto" value={state.uploadphoto} placeholder="Choose a file" name= "photo" onChange={(value) => onChangeValue("uploadphoto", value )}/><br/>
                        </div>
                    <br/>
                    <div className="button">
                        
                        {/* <Button className="button" label="Submit" id="btn_create" handleClick={()=>UpdateEmployeeById({
                            id:state.id,
                    name: state.name,
                    username:"dummy",
                    password:"dummy",
                    departmentId:"12ad0ae0-669d-4bb8-bb6a-d3de24f47a3b",
                    role:state.role,
                    dateofjoining:state.dateofjoining,
                    status:state.status,
                    experience:Number(state.experience),
                    address:{
                    line1:state.line1,
                    line2:state.line2,
                    city:state.city,
                    state:state.state,
                    country:state.country,
                    pin:state.pin
                    }
                })}
                    /> */}
                    <Button className="button" label="Submit" id="btn_create" handleClick={()=>onsubmit()} />
                <Button className="button"
                label="Cancel"
                id="btn_cancel"
                handleClick={goToNextPage}
                />
                    </div>
                </div>
                </section>
                </main>
                </div>
    );
}
export default UpdateEmployee;