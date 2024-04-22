

// Sidebar.js
import React, { useState ,useContext} from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";
import logo from "../../imglogo/logo.svg";
import { IoIosLogOut } from "react-icons/io";
import SidebarData from "../Sidebar/SidebarData";
import { useNavigate , NavLink } from "react-router-dom"
import '../Sidebar/sidebar.css'
import "boxicons";
import "boxicons/css/boxicons.min.css";
import { LoginContext } from '../ContextProvider/Context';
import Cookies from 'js-cookie';
function Sidebar() {
  // const [mainSidebar, setMainSidebar] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  //   const handleSidebar = () => {
  //     setMainSidebar(!mainSidebar);
  //   };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  //const { sidebarOpen, setSidebarOpen } = state;
  const [SidebarItems, setSidebarItems] = useState(SidebarData);
  //let dark = window.localStorage.getItem("dark");

  const toggleSubmenu = (index) => {
    const updatedSidebarItems = [...SidebarItems];
    updatedSidebarItems[index].subNavOpen = !updatedSidebarItems[index].subNavOpen;
    setSidebarItems(updatedSidebarItems);
  };





//Logout

const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

const { logindata, setLoginData } = useContext(LoginContext);

    const history = useNavigate();

const logoutuser = async () => {

  let token = localStorage.getItem("usersdatatoken");
  // console.log(token)

  const res = await fetch("http://127.0.0.1:8080/common/login/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
     
  });

  const data = await res.json();
  console.log(data);

  if (data.status === 200) {
      console.log("user logout");
      localStorage.removeItem("usersdatatoken");
      Cookies.remove('userToken');
      setLoginData(false)
      history("/");
  } else {
      console.log("error");
  }
}




  return (
    <>

      <div className={` ${sidebarOpen ? "col-2 menu" : "col-1 menu"}`} >
        <div className={`sidebar ${sidebarOpen ? "" : "close"}`} >
          <header>
            <div className="image-text">
              <span className="image">
                <img src={logo} alt="" />
              </span>
              <div className="text logo-text">
                <span className="name">SNP</span>
              </div>
            </div>
          </header>
          <div className="toggle">
            <FaAngleLeft style={{ color: "white" }} onClick={toggleSidebar} />
          </div>

          {/* //todo sidebar map function */}
          <div className="menu-bar">
            <div className="menus" >
              <ul className="menu-links">

                {SidebarItems.map((item, index) => (
                  <li className="nav-link" key={index}>
                    <Link to={item.path} onClick={() => item.subNav && toggleSubmenu(index)}>
                      <i className="icon " onClick={toggleSidebar} >{item.icon}</i>
                      <span className="text nav-text">{item.title}</span>
                      {item.subNav && <i className={`bx ${item.subNavOpen ? "bx-chevron-down" : "bx-chevron-up"} caret-icon`} ></i>}
                    </Link>
                    {item.subNav && item.subNavOpen && (
                      <ul className="submenu d-block">
                        {item.subNav.map((subItem, subIndex) => (
                          <li className="subnav-link" key={subIndex}>
                            <Link to={subItem.path}>
                              <i className="icon " onClick={toggleSidebar} >{subItem.icon}</i>
                              <span className="text nav-text">{subItem.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

            </div>


            <div className='bottom-menu' >
                 <button  onClick={() => {
                                        logoutuser()
                                        handleClose()}}>
              <IoIosLogOut style={{float:'right', fontSize:'30px',  color: 'var(--text-color)'}}/>
              </button>
            </div>
          </div>

          {/* //todo sidebar map function */}
        </div>
      </div>

    </>

  );
}

export default Sidebar;
