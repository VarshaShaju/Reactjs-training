import HeadSection from "../components/HeadSection";
import SideNav from "../components/SideNav"
import TopDiv from "../components/TopDiv";
import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";
import Button from "../components/Button";
import {useState} from "react";
import { useCreateEmployeeMutation } from '../services/baseApi';
import {useNavigate} from "react-router-dom"


const CreateEmployee = ()=> {
    const navigate =useNavigate();
    const goToNextPage =() =>{
       navigate("/list")
    }
    const [state, setState] = useState({
        name: " ",
       // id: " ",
        date: " ",
        experience: " ",
        line1: " ",
        line2: " ",
        city: " ",
        state: " ",
        country: " ",
        pin: " ",
        username: " ",
        password: " ",
       // uploadphoto : " ",
        role : " ",
        status : " ",
    });

    const [addEmployee, result] = useCreateEmployeeMutation();
    const onChangeValue = (key, value) =>{
        setState({
            ...state,
            [key]: value,
        })
    }
    return(
        <>
            <SideNav />
            <main>
                <TopDiv />
                <HeadSection label={'Create Employee'} />
                <section className="mainsection">
                    
                <div name="fitem" className="form">
                    <div>                   
                         <InputField type="text" label="Employee Name: " id="name" placeholder="Employee Name" name= "empname" onChange={(value) => onChangeValue("name", value)}/> <br/>
                    </div>
                    {/* <div> 
                        <InputField type="text" label="Employee ID: " id="id" placeholder="Employee ID" name= "empid" onChange={(value) => onChangeValue("id", value)}/><br/>
                    </div> */}
                    <div>
                        <InputField type="text" label="Joining Date " id="date" placeholder="Joining Date" name= "join" onChange={(value) => onChangeValue("date", value)}/><br/>
                    </div>
                    <div>
                    <InputSelect
                    label="Role"
                    id = "role"
                    onChange={(value) => onChangeValue("role", value)}
                    options ={[
                        {label:'Choose Role'},
                        {key:'DEV', label:'Developer'},
                        {key:'QA', label:'QA'},
                        {key:'DEVOPS', label:'Dev Ops'},
                        {key:'admin', label:'admin'}
                    
                    ]}
                    /></div><br/>
        
                    <div>
                        <InputSelect
                        label="Status"
                        id ="status"
                        onChange={(value) => onChangeValue("status", value)}
                        options ={[
                            {label:'Status'},
                            {key:'PROBATION', label:'Probation'},
                            {key:'ACTIVE', label:'Active'},
                            {key:'INACTIVE', label:'Inactive'},
                        
                        ]}
                    /><br/>
                    </div>
                    <div>
                        <InputField type="number" label="Experience" id="experience" placeholder="Experience" name= "exp" onChange={(value) => onChangeValue("experience", value)}/><br/>
                    </div>
                    <div>
                        <InputField type="text" label="Address Line1" id="line1" placeholder="Address Line1" name= "line1" onChange={(value) => onChangeValue("line1", value)}/><br/>
                    </div>
                    <div>
                        <InputField type="text" label="Address Line2" id="line2" placeholder="Address Line2" name= "line2" onChange={(value) => onChangeValue("line2", value)}/><br/>
                    </div>
                    <div>
                        <InputField type="text" label="City" id="city" placeholder="City" name= "city" onChange={(value) => onChangeValue("city", value)}/><br/>
                    </div>
                    <div>
                        <InputField type="text" label="State" id="state" placeholder="State" name= "state" onChange={(value) => onChangeValue("state", value)}/><br/>
                    </div>
                    <div>
                        <InputField type="text" label="Country" id="country" placeholder="Country" name= "country" onChange={(value) => onChangeValue("country", value)}/><br/>
                    </div>
                    <div>
                        <InputField type="number" label="Pin Code" id="pin" placeholder="Pin Code" name= "pin" onChange={(value) => onChangeValue("pin", value)}/><br/>
                    </div>
                    {/* <div>
                        <InputField type="text" label="Username" id="Username" placeholder="Username" name= "Username" onChange={(value) => onChangeValue("Username", value)}/><br/>
                    </div>
                    <div>
                        <InputField type="text" label="Password" id="Password" placeholder="Password" name= "Password" onChange={(value) => onChangeValue("Password", value)}/><br/>
                    </div> */}
                    <div>
                        <InputField className="Browse" type="file" label="Upload ID Proof" id="uploadphoto" placeholder="Choose a file" name= "photo" onChange={(value) => onChangeValue("uploadphoto", value )}/><br/>
                    </div>
  
                    <div className="button">
                        <Button className="button" label="Create" id="btn_create" handleClick={()=>addEmployee({
                        name: state.name,
                        // id:"b99f4618-bc2d-4931-8ce5-4e614292b987",
                        username:state.username,
                        password:state.password,
                        departmentId:"e699592f-ade0-4638-bc72-a7f62a0b3fd2",
                        role:state.role,
                        dateOfJoining:state.date,
                        status:state.status,
                        experience:Number(state.experience),
                        address:{
                        line1:state.line1,
                        line2:state.line2,
                        city:state.city,
                        state:state.state,
                        country:state.country,
                        pin:Number(state.pin),
                        }
                    })}
                    />
                <Button className="button"
                label="Cancel"
                id="btn_cancel"
                handleClick={goToNextPage}
                />
                    </div>

                 
            
                </div>
                </section>
            </main>
        </>
    );
}

export default CreateEmployee;