import HeaderUser from '../ComponentsUSER/HaderUser'
import { Col, Container, Row } from "react-bootstrap";
import InfoUser from "../ComponentsUSER/InfoUser";
import ActivitiesUser from "../ComponentsUSER/ActivitiesUser";
import { ExperienceProvider } from '../Context/ContextExperiences'
import ExperiencesUser from '../ComponentsUSER/ExperiencesUser'
import { useParams } from 'react-router-dom';
import UsersProfile from '../ComponentsME/UsersProfile'

function UserProfile() {

    const { ID } = useParams()
    console.log("ID from useParams:", ID);

    return (
        <>
            <Container>
                <Row>
                    <Col lg={9}>
                        <ExperienceProvider ID={ID}>
                            <HeaderUser />
                            <InfoUser />
                            <ActivitiesUser />
                            <ExperiencesUser />
                        </ExperienceProvider>
                    </Col>

                    <Col lg={3}>
                        <UsersProfile />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserProfile;