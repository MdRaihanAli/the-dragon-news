import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import RightNav from '../shared/RightNav/RightNav'
import Header from '../shared/Header/Header'


function NewsLayout() {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}> <Outlet></Outlet> </Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default NewsLayout