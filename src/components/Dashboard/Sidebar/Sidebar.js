import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faCalendar,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
// import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
//import { UserContext } from '../../../App';

const Sidebar = () => {
  //const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const [isDoctor, setIsDoctor] = useState(false);

  // useEffect(() => {
  //     fetch('https://salty-plateau-71286.herokuapp.com/isDoctor', {
  //         method: 'POST',
  //         headers: { 'content-type': 'application/json' },
  //         body: JSON.stringify({ email: loggedInUser.email })
  //     })
  //         .then(res => res.json())
  //         .then(data => setIsDoctor(data));
  // }, [])

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh", minWidth: "300px" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>

        <div>
          <li>
            <Link to="/dashboard/appointment" className="text-white">
              <FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/allPatients" className="text-white">
              <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/prescriptions" className="text-white">
              <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
            </Link>
          </li> */}
          <li>
            <Link to="/dashboard/addADoctor" className="text-white">
              <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="text-white">
              <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
