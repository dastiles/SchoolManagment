import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { GiAstronautHelmet } from "react-icons/gi";
import { Link } from "react-router-dom";

const Siderbar = () => {
  return (
    <div className="dlabnav">
      <div className="dlabnav-scroll">
        <ul className="metismenu" id="menu">
          <li>
            <a className="has-arrow ai-icon" aria-expanded="false">
              <i className="flaticon-381-networking"></i>
              <span className="nav-text">Dashboard</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <Link to={"/"} reloadDocument>
                  Dashboard
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a className="has-arrow ai-icon" aria-expanded="false">
              <FaChalkboardTeacher size={30} className="me-3" />
              <span className="nav-text">Teachers</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <Link to={"/teacher"} reloadDocument>
                  View Teachers
                </Link>
              </li>
              <li>
                <Link to={"/addteacher"} reloadDocument>
                  Add Teacher
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a className="has-arrow ai-icon" aria-expanded="false">
              <PiStudent size={30} className="me-3" />
              <span className="nav-text">Students</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <Link to={"/student"} reloadDocument>
                  View Student
                </Link>
              </li>
              <li>
                <Link to={"/addstudent"} reloadDocument>
                  Add Student
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a className="has-arrow ai-icon" aria-expanded="false">
              <GiAstronautHelmet size={30} className="me-3" />
              <span className="nav-text">Stuff</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <Link to={"/stuff"} reloadDocument>
                  View Stuff
                </Link>
              </li>
              <li>
                <Link to={"/addstuff"} reloadDocument>
                  Add Stuff
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Siderbar;
