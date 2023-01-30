import { Container, Row, Col } from 'react-bootstrap';

import MyPhoto from '../../../assets/Max.jpg';

const Profile = () => {
    return (
        <Container className="container text-center my-5">
            <Row>
                <Col>
                    <h2 className='text-center m-5 font-weight-lighter'>About me</h2>
                </Col>
            </Row>
            <Row className="align-items-center my-3 summary__text font-weight-light">
                <Col>
                    <p>
                    Hi, I`m Junior front end developer with 1 year of hard self-education and mentoring process.
                    Developed more than 10 pet projects for deeper understanding in practice such
                    technologies as HTML5, CSS3 with BEM principal as well as JavaScript basic syntax.
                    In the last 6 months I have learnt JavaScript ES8 along with React JS. Also I developed
                    JavaScript project with OOP architecture pattern for growing practice skills in native JS,
                    JSON, data fetching, configured Webpack project build, to streamline the process of
                    development, used GIT control version system. My latest project is Drag and Drop To-
                    do List based on React JS with Redux implemented.
                    </p>
                    <br />
                    <p>
                        Social Links:
                    </p>
                    <p>Linkedin: <a href="https://www.linkedin.com/in/maks-rychkov-86bb93246/" className="text-decoration-none text-info" target="_blank" rel="noreferrer">https://www.linkedin.com/in/maks-rychkov</a></p>
                    <p>GitHub: <a href="https://github.com/flausdr" className="text-decoration-none text-info" target="_blank" rel="noreferrer">https://github.com/flausdr</a></p>
                </Col>
                <Col className="d-flex justify-content-center">
                    <img src={MyPhoto} alt="Max Rychkov" className="img-thumbnail img-fluid summary__img"/>
                </Col>
            </Row>
        </Container>
    )
};

export default Profile;