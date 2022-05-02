import { Button, CardPanel, Carousel, Col, Row, Icon } from 'react-materialize';

function Malayalam() {
    return(
        <div id="main-content">
            <div className="carousel-holder" id="image-carousel">
                {/* Photo Carousel */}
                <Carousel carouselId="Carousel-1" options={{ fullWidth: true}}>
                    {/* carousel div where the links and images */}
                    <div className="carousel-image-1"></div>
                </Carousel>
            </div>
            
            {/* Parallax */}'
            {/* <Parallax image={<img src={banner3} alt="banner3" className="responsive-img" />} options={{responsiveThreshold: 0}} /> */}
            {/* Feedback */}

            <section className="container section" id="feedback">
                {/* new row inside the section for feedback title */}
                <Row className="center-align">
                    {/* first column full size */}
                    <Col s={12}>
                        <h2>Testimonials</h2>
                    </Col>
                </Row>
                {/* new row for feedbacks */}
                <Row className="center-align">
                    {/* first column */}
                    <Col s={12} l={6}>
                        {/* card div to give it card like styling */}
                        <CardPanel className="card-panel center-align">
                            {/* content of the card */}
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempore reprehenderit aut esse iure laborum fugit quisquam sequi cumque aliquid. Provident unde explicabo eaque nihil atque earum id, minima quibusdam.
                            </p>
                        </CardPanel>
                    </Col>
                    {/* second column */}
                    <Col s={12} l={6}>
                        <CardPanel className="card-panel center-align">
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt dignissimos dolores fuga. Quidem, id, temporibus esse quos officiis ipsam explicabo sit tempora labore sapiente provident sint quis iste est.
                            </p>
                        </CardPanel>
                    </Col>
                </Row>
            </section>
            
            {/* Parallax */}
            {/* <Parallax image={<img src={banner4} alt="banner4" className="responsive-img" />} options={{responsiveThreshold: 0}} /> */}

            <section  className="container section" id="joinUsButtonSection">
                <Row className="center-align">
                    {/* first column full size */}
                    <Col s={12}>
                        <Button
                                href="/JoinUs"
                                node="a"
                                waves="light"
                                className="blue-grey darken-4 white-text joinUsButton">
                                    <Icon left>handshake</Icon>
                                    <span className="button-text">Join Us</span>
                            </Button>
                    </Col>
                </Row>
            </section>

        </div>
    );
}

export default Malayalam;