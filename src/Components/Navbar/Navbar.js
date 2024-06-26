// import React from 'react'

// const Navbar = () => {
//     return (
//         <>
//             <div className='navbar-container col-12' style={{ border: '1px solid red', height: '50px' }}></div>
//         </>
//     )
// }

// export default Navbar

import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import NewSidebar from '../Navbar/NewSidebar';
import '../Sidebar/sidebar.css'
const Navbar = () => {
    //   const [mainSidebar, setMainSidebar] = useState(false);
    // const [sidebarOpen, setSidebarOpen] = useState(false);
    const [newsidebar, setNewSidebar] = useState(false);
    const [searchbar, setSearchbar] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [accountform, setAccountForm] = useState(false);



    const handleAddNewCompanyClick = () => {
        setIsFormOpen(!isFormOpen);
    };
    const handleFormClose = () => {
        setNewSidebar(false);
        setSearchbar(false);
    };

    const handleAddAccount = () => {
        setAccountForm(!accountform);
    };



    const handleNewSidebar = () => {
        setNewSidebar(!newsidebar);
    };
    const handleSearchbar = () => {
        setSearchbar(!searchbar);
    };


    return (
        <>
            <div className='row'>
            <div className='navbar-container col-12' style={{  height: '50px' }}>
                {/* <div className={` ${sidebarOpen ? "col-10 menu2" : "col-11 menu2close"} }`}> */}
                    <div className="headers col-12" >
                        <div className="btns-grp ">
                            <button className="nbtn col-2" onClick={handleNewSidebar}>
                                New
                            </button>
                            <button className="sbtn col-2" onClick={handleSearchbar}>
                                <IoSearch className="bicon" style={{ marginTop: "4px" }} />
                            </button>
                        </div>

                    </div>

                {/* </div> */}
                {/* onclick new button new sidebar is open */}
                <div className={`sidebar3 col-2  ${newsidebar ? "open" : ""}`}>
                    <NewSidebar account={handleAddAccount} formclose={handleFormClose} contact={handleAddNewCompanyClick} />
                </div>
                {/* onclick new button new sidebar is open */}
            </div>
            </div>
        </>
    )
}

export default Navbar