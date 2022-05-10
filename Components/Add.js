import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser, changeIndexTo, updateUser } from "../app/Slice";

let temp = -1;

export default function AddDetail(){
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [about, setAbout] = useState("");
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const index = useSelector(state => state.allDetail.index);
    const storedValue = useSelector(state => state.allDetail.value);

    
    useEffect(() => {
        if(index !== -1){
            setName(storedValue[index].name.name);
            setDob(storedValue[index].dob.dob);
            setAbout(storedValue[index].about.about);
            document.getElementById("submit").innerText="Update";
            temp = index;
            dispatch(changeIndexTo(-1));
            
        }
      });

    const handleSubmit = (event) => {
        event.preventDefault();
        const userDetails = {
            name: {name},
            dob: {dob},
            about: {about}
        }
        if(temp === -1){
            dispatch(addUser(userDetails));
            alert("Submitted!")
        }
        else{
            userDetails.index = temp;
            dispatch(updateUser(userDetails));
            alert("Updated!")
            temp = -1;
        }
        navigate('showdetails');
    }

    return(
        <div className="addDetail">
            <h1>Add</h1>
            <div>
                <form action={'showdetails'} onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" id='name' name='name' onChange={(e) => setName(e.target.value)} value={name} required></input><br/><br/>
                    
                    <label>Father Name:</label>
                    <input type="text" id="about" name='about' onChange={(e) => setAbout(e.target.value)} value={about} required></input><br/><br/>
                    <label>DOB:</label>
                    <input type="date" id='dob' name='dob' onChange={(e) => setDob(e.target.value)} value={dob} required></input><br/><br/>
                    <button id="submit">Submit</button>
                    </form>
            </div>
            <Link to ='showdetails'>View Details</Link>
        </div>
    )
}