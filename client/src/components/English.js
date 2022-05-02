import { Button, CardPanel, Carousel, Col, Row, Icon } from 'react-materialize';

function English() {
    return(
        <div id="main-content">
            <div className="carousel-holder" id="image-carousel">
                {/* Photo Carousel */}
                <Carousel carouselId="Carousel-1" options={{ fullWidth: true}}>
                    {/* carousel div where the links and images */}
                    <div className="carousel-image-1"></div>
                </Carousel>
            </div>

            <section className="container section" id="whatis">
                {/* new row inside the section for feedback title */}
                <Row className="center-align">
                    {/* first column full size */}
                    <Col s={12}>
                        <h2>What is YESTHRA ?</h2>
                    </Col>
                </Row>
                {/* new row for feedbacks */}
                <Row className="center-align">
                    <div className="center-align">
                        <p>
                        Excepteur et sint cillum quis incididunt consequat consectetur velit irure sint duis. Consequat irure amet sint enim nostrud. Consequat reprehenderit aliquip veniam proident ad elit consectetur sint excepteur esse proident ad consectetur ullamco. Esse commodo anim est sint esse irure ipsum labore officia exercitation est. Ipsum incididunt dolor anim aliquip deserunt dolore fugiat aliqua mollit in sit. Nulla anim occaecat reprehenderit officia laboris culpa commodo id deserunt fugiat Lorem. Tempor magna sunt in in non laboris non id deserunt exercitation.
                        </p>
                        <p>
                            Est aliquip cillum Lorem fugiat velit reprehenderit. Officia mollit Lorem esse sit non. Officia aliquip velit sit sint occaecat eiusmod do sit non in ex et. Quis mollit veniam et nulla nostrud officia ullamco anim velit pariatur occaecat. Voluptate sunt qui ut culpa.
                        </p>
                        <p>
                        Sint officia Lorem nostrud proident duis cupidatat aliquip. Proident non et magna consequat qui ipsum voluptate commodo. Tempor duis nulla adipisicing officia enim aliquip in incididunt nostrud ullamco enim irure Lorem ea.
                        </p>
                    </div>
                </Row>
            </section>

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

export default English;