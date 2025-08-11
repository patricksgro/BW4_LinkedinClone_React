import { useContext } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MeContext } from "../Context/ContextMe";
import '../Style/Navigation.css'

function NavigationBar() {

    const { personalProfile } = useContext(MeContext)

    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-4" >
            <Container>
                <Navbar.Brand >
                    <img src="/assets/linkedin_hnwahk8yfu8b_32.png" alt="Logo" width={'40px'} height={'40px'} />
                </Navbar.Brand>
                <Nav.Link>
                    <img src="/assets/seo_nuil7ltlrho1_32.png" alt="Search" className="responsiveSearch" />
                    <input className="responsiveInput" type="text" placeholder="Cerca..." style={{ borderRadius: '25px', height: '38px', width: '250px' }} />
                </Nav.Link>
                <Nav.Link to="/" as={Link} >
                    <div className="align-items-center d-flex flex-column">
                        <img src="/assets/website_home_1kwgxhhc30uc_32.png" alt="Home" width={'25px'} height={'25px'} />
                        <span className="responsiveNavIcon" style={{ display: 'block' }}>Home</span>
                    </div>
                </Nav.Link>
                <Nav.Link href="#link" className="align-items-center d-flex flex-column">
                    <img src="/assets/users_x2gqj8tv1luy_32.png" alt="Users" width={'25px'} height={'25px'} />
                    <span className="responsiveNavIcon" style={{ display: 'block' }}>Rete</span>
                </Nav.Link>
                <Nav.Link href="#link" className="align-items-center d-flex flex-column">
                    <img src="/assets/briefcase_ybtx3eiq57aa_32.png" alt="Work" width={'25px'} height={'25px'} />
                    <span className="responsiveNavIcon" style={{ display: 'block' }}>Lavoro</span>
                </Nav.Link>
                <Nav.Link href="#link" className="align-items-center d-flex flex-column">
                    <img src="/assets/message_r7zqzs410veq_32.png" alt="Messages" width={'25px'} height={'25px'} />
                    <span className="responsiveNavIcon" style={{ display: 'block' }}>Messaggistica</span>
                </Nav.Link>
                <Nav.Link href="#link" className="align-items-center d-flex flex-column">
                    <img src="/assets/bell_toyynecv9380_32.png" alt="Notifiches" width={'25px'} height={'25px'} />
                    <span className="responsiveNavIcon" style={{ display: 'block' }}>Notifiche</span>
                </Nav.Link>
                <NavDropdown
                    id="nav-dropdown-tu"
                    align="end"
                    title={
                        <img
                            src={personalProfile.image}
                            alt="Tu"
                            style={{ width: "25px", height: "25px", borderRadius: "50%" }}
                        />
                    }
                >
                    <NavDropdown.Item href="#action/3.1">
                        <div className="d-flex gap-2">
                            <div>
                                <img src={personalProfile.image} alt="Tu" style={{ width: '45px', height: '45px', borderRadius: '50%' }} />
                            </div>

                            <div>
                                <p className=" fw-bold my-0">{personalProfile.name} {personalProfile.surname}</p>
                                <p>{personalProfile.bio}</p>
                            </div>
                        </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        <div className="d-flex gap-4">
                            <Button style={{ borderRadius: '25px', backgroundColor: 'white', color: 'blue' }}>Visualizza profilo</Button>
                            <Button style={{ borderRadius: '25px' }}>Verifica</Button>
                        </div>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        <p className="card-text my-0" ><small className="text-body-secondary">Impostazioni e privacy</small></p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                        <p className="card-text my-0" ><small className="text-body-secondary">Guida</small></p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                        <p className="card-text my-0" ><small className="text-body-secondary">Lingua</small></p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                        <p className="card-text my-0" ><small className="text-body-secondary">Privacy</small></p>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        <p className="card-text my-0 fs-5 fw-bold" >Gestisci</p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                        <p className="card-text my-0" ><small className="text-body-secondary">Post e attività</small></p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                        <p className="card-text my-0" ><small className="text-body-secondary">Account per la pubblicazione...</small></p>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        <p className="card-text my-0" ><small className="text-body-secondary">Esci</small></p>
                    </NavDropdown.Item>
                </NavDropdown>
                <div className="responsiveForWork" style={{ borderRight: 'solid 3px grey', width: '2px', height: '45px' }}>

                </div>
                <NavDropdown className="responsiveForWork" title="Per le aziende" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar >
    )
}

export default NavigationBar;