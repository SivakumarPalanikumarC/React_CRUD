import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EachPersonDetailCard from './EachCard'

export default function ShowAllDetails(){
    const storedValue = useSelector(state => state.allDetail.value);
    return(
        <div className="showAll">
            <h1>Details</h1>
            <div className="allUserContainer">
                {storedValue.map((user, index = 0) => {
                    return <EachPersonDetailCard key={index} user={user}/>
                })}
            </div>
            <Link to ='/'>Go to Main Page</Link>
        </div>
    )
}