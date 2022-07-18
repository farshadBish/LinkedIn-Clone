/** @format */

import { Nav, Navbar, Container, Dropdown } from "react-bootstrap";
import "../style/Navbar.css"
import { useSelector } from "react-redux"
import { FaSearch, FaGripHorizontal } from "react-icons/fa"
import { GrNotification } from "react-icons/gr"
import { MdWork, MdPeopleAlt } from "react-icons/md"
import { FiMessageSquare } from "react-icons/fi"
import { ImHome3 } from "react-icons/im"
import { Link } from "react-router-dom";
import ToggleMenu from "./ToggleMenu";
import HomePage from "./HomePage";


const Customnavbar = (props) => {
  const { setSearchResult, setSearchTerm, searchTerm, searchResult } = props
  const myProfile = useSelector((state) => state.myProfile.profileData)
  const allProfiles = useSelector((state) => state.allProfiles.allProfilesData)
  // const [searchTerm, setSearchTerm] = useState('')
  // const [modalShow, setModalShow] = useState(false);
  // console.log(myProfile[0]._id)


  const handleSearch = (profileName) => {
    if (profileName.length > 2) {
      const filteredProfiles = allProfiles[0].filter((profile) =>
        profile.name.toLowerCase().includes(profileName.toLowerCase()) || profile.surname.toLowerCase().includes(profileName.toLowerCase() || profile.username.toLowerCase().includes(profileName.toLowerCase())))
      setSearchResult(filteredProfiles)
    }

  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event.target.value)

    }
  }

  return (

    <Navbar className="navbarbg pb-0 pt-0" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="mr-0"><img src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png" alt="" height={50} /></Navbar.Brand>
        <span className="mr-sm-auto mr-md-auto mr-auto forSearch">
          <input type="text"
            value={searchTerm}
            onKeyDown={(e) => { handleKeyPress(e) }}
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
            placeholder="Search"
            className="mr-sm-5 navbarSearch"
          />
          <FaSearch className="searchIcon giveColor" />
        </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ backgroundColor: 'white' }}>
          <Nav className="mr-auto position-relative">
            {searchResult && (searchResult.length > 0) && <div className="position-absolute search-dropdown">
              {searchResult.map((result) =>
                <p key={result._id} style={{ borderBottom: '1px solid', padding: '3px 5px 3px 5px', margin: '0' }}>{result.name}<br />{result.surname}</p>
              )}
            </div>}


          </Nav>
          <Link to="/" element={<HomePage />} className=" ml-lg-5 ml-md-4 marginForHome ml-sm-3 ml-3 forHover giveColor"><ImHome3 className="d-block HomeMargin iconFont3 " /><small className="">Home</small></Link>
          <Nav.Link to="/" className=" giveMargin2 ml-md-1 forHover giveColor"><MdPeopleAlt className="d-block ml-4 iconFont2 " /><small className="">MyNetwork</small></Nav.Link>
          <Nav.Link to="/" className=" giveMargin ml-lg-0 ml-md-4 ml-sm-4 ml-4 forHover giveColor"><MdWork className="d-block iconFont5" /><small className="">jobs</small></Nav.Link>
          <Nav.Link to="/" className=" marginForMessaging ml-md-1 forHover giveColor"><FiMessageSquare className="d-block iconFont1" /><small className="">Messaging</small></Nav.Link>
          <Nav.Link to="/" className=" marginForNotif ml-md-1 forHover giveColor"><GrNotification className="iconFont d-block marginNotif
    "/><small className="">Notification</small></Nav.Link>
          <Dropdown className="pr-3 ml-lg-0 marginForMe">
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              <span>
                <img src={myProfile.image} alt="" className="ml-2 d-block iconFont nav-profile-image" />
                {/* <FaFlushed className="ml-1 d-block iconFont" /> */}
                <div className="d-inline"><small>Me</small></div>
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="px-1 nav-profile-dropdown">
                <div className="nav-dropdown-section01 d-flex">
                  <div className="p-1"><img src={myProfile.image} alt="" className="ml-2 d-block iconFont nav-profile-image-dropdown" /></div>
                  <div className="ml-3 nav-profile-dropdown-details">
                    <p className="font-weight-bold">{myProfile.name} {myProfile.surname}</p>
                    <p>{myProfile.title}</p>
                  </div>

                </div>
                {/* <button type="button" className="btn btn-outline-info btn-block rounded-pill px-5 py-1">View profile</button> */}
                <Link className="btn btn-outline-info btn-block rounded-pill py-1" to={`/profile-page/${myProfile.name}_${myProfile.surname}`}>View profile</Link>                <div className="nav-dropdown-section02">
                  <div className="ml-3 nav-profile-dropdown-details">
                    <p className="font-weight-bold">Account</p>
                    <p><Link to="/">Settings & Privacy</Link></p>
                    <p><Link to="/">Help</Link></p>
                    <p><Link to="/">Language</Link></p>
                  </div>
                </div>
                <div className="nav-dropdown-section03 border-top">
                  <div className="ml-3 nav-profile-dropdown-details">
                    <p className="font-weight-bold">Manage</p>
                    <p><Link to="/">Posts & Activity</Link></p>
                    <p><Link to="/">Job Posting Account</Link></p>
                    <div className="border-top">
                      <p><Link to="/">Sign Out</Link></p>
                    </div>

                  </div>
                </div>
              </div>
              {/* <Dropdown.Item href="#/action-1">{myProfile.name} {myProfile.surname}</Dropdown.Item>
              <Dropdown.Item href="#/action-2">{myProfile.title}</Dropdown.Item>
              <Dropdown.Item href="#/action-3">{myProfile.area}</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>




          <Dropdown className="giveBorder pl-3 ml-0">
            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
              <span>
                <FaGripHorizontal className="ml-2 d-block iconFont" />
                <div className="d-inline"><small>Work</small></div>
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="toggle-container">
              <ToggleMenu />
              {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
        <Nav.Link className="premiumFree mb-1 ml-auto mr-auto "><small>Network Smarter,Try Premium Free</small></Nav.Link>
      </Container>
    </Navbar>
  )
}
export default Customnavbar
