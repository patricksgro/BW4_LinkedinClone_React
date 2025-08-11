import { Col, Container, Row } from "react-bootstrap";
import HeaderMe from '../ComponentsME/HeaderMe'
import LanguageAndUrl from '../ComponentsME/LanguageAndUrl'
import UsersProfile from "../ComponentsME/UsersProfile";
import SezioneAnalisiMe from "../ComponentsME/SezioneAnalisiMe";
import InfoMe from "../ComponentsME/InfoMe";
import ActivitiesMe from "../ComponentsME/ActivitisMe";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ExperienceProvider } from "../Context/ContextExperiences";
import { MeContext } from "../Context/ContextMe";
import ExperiencesMe from "../ComponentsME/ExperiencesMe";

function Home() {

    const { ID } = useParams()

    const { personalProfile } = useContext(MeContext)


    let isMyProfile;

    if (!ID) {
        isMyProfile = true
    } else if (ID !== personalProfile._id) {
        isMyProfile = false
    } else {
        isMyProfile = true
    }

    return (
        <Container>
            <Row>
                <Col lg={9}>
                    <ExperienceProvider ID={ID ? ID : personalProfile ? personalProfile._id : null}>
                        <HeaderMe />
                        <SezioneAnalisiMe />
                        <InfoMe />
                        <ActivitiesMe />
                        <ExperiencesMe ID={ID ? ID : personalProfile ? personalProfile._id : null} />
                    </ExperienceProvider>
                </Col>

                <Col lg={3}>
                    <LanguageAndUrl />
                    <UsersProfile isMyProfile={isMyProfile} />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;