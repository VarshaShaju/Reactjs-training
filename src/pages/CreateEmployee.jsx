import InputSelect from "../components/InputSelect";
import InputField from "../components/InputField";
import Button from "../components/Button";
import {useState} from "react";
import "../styles/style.css";

const CreateEmployee = () => {

    const [state, setState] = useState({
        name: " ",
        id: " ",
        date: " ",
        experience: " ",
        address: " ",
        uploadphoto : " ",
        role : " ",
        status : " ",
    });

    const onChangeValue = (key, value) =>{
        setState({
            ...state,
            [key]: value,
        })
    }
    return (
    
        <form name="fitem">
                    <div>                   
                         <InputField type="text" label="Employee Name: " id="name" placeholder="Employee Name" name= "empname" onChange={(value) => onChangeValue("name", value)}/> <br/>
                    </div>
                    <div> 
                        <InputField type="text" label="Employee ID: " id="id" placeholder="Employee ID" name= "empid" onChange={(value) => onChangeValue("id", value)}/><br/>
                    </div>
                    <div>
                        <InputField type="text" label="Joining Date " id="date" placeholder="Joining Date" name= "join" onChange={(value) => onChangeValue("date", value)}/><br/>
                    </div>
                    <div>
                    <InputSelect
                    label="Role"
                    id = "role"
                    onChange={(value) => onChangeValue("role", value)}
                    options ={[
                        {key:'DEV', label:'Developer'},
                        {key:'QA', label:'QA'},
                        {key:'DEVOPS', label:'Dev Ops'}
                    
                    ]}
                    /></div><br/>
        
                    <div>
                        <InputSelect
                        label="Status"
                        id ="status"
                        onChange={(value) => onChangeValue("status", value)}
                        options ={[
                            {key:'PROBATION', label:'Probation'},
                            {key:'ACTIVE', label:'Active'},
                        
                        ]}
                    /><br/>
                    </div>
                    <div>
                        <InputField type="text" label="Experience" id="experience" placeholder="Experience" name= "exp" onChange={(value) => onChangeValue("experience", value)}/><br/>
                    </div>
                    <div>
                        <InputField type="text" label="Address" id="address" placeholder="Address" name= "empid" onChange={(value) => onChangeValue("address", value)}/><br/>
                    </div>
                    <div>
                        <InputField className="Browse" type="file" label="Upload ID Proof" id="uploadphoto" placeholder="Choose a file" name= "photo" onChange={(value) => onChangeValue("uploadphoto", value )}/><br/>
                    </div>
  
                    <div class="button">
                        <Button classname="button" label = "Create" handleclick={''}/>
                        <Button classname="button" label = "Cancel" handleclick={''}/>
                    </div>
                 
            
                </form>
    )


}

export default CreateEmployee;