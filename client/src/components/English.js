import { Button, Carousel, Col, Row, Icon, CardPanel } from 'react-materialize';

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
                <Row className="center-align">
                    <CardPanel className="left-align blue-grey darken-2 white-text story-card">
                        <h2>What is YESTHRA ?</h2>
                        <p>
                            In the initial days of flood relief works in Kerala, we came across a heartbreaking scene, a mother sobbing, clutching her two kids close, around her ruined pieces of shirts and pants strewn about in the running mud. She was inconsolable, later we came to know that she was the only breadwinner in her family, looking after and raising her two kids on her own. She had lost her only livelihood and faced an uncertain future alone. We did our best to help her and her family during that time and that was when we came to know a shocking truth.
                        </p>
                        <p>
                            She and her family produced apparel for a quite well known local brand, but of the profits the brand enjoyed she and her family received only a very small portion. With the damage due to the floods, the orders were cancelled as they were left high and dry by the brand. During the relief works that followed we interacted with many more families who shared such plights and working with them allowed us to understand more about their situations and the problems that they face. The time we spent with them was also the time we saw how widespread exploitation and near poverty life was in the apparel making industry. Unless they were a big manufacturer or established designer it was very hard to grow and expand on their own, it was almost impossible to be competitive against the big-name brands by themselves.
                        </p>
                        <p>
                            Yesthra was formed to address their problems and come up with practical, real-world solutions for their concerns. To empower them to rise above on their own and create strong community movements that allow them to flourish and overcome the exploitation that they face. Providing them with the tools for dismantling the hold of foreign entities and big brands in the Indian apparel and fashion industry.
                        </p>
                        <p>
                            Through Yesthra we will provide a platform for them on which a much wider range of audiences can be reached, furthermore through unique and tailored marketing strategies we will transform these individual creators into renowned brands of their own. Even new designers or creators with no online presence or sales on their own can approach us for help in creating a portfolio, we will be providing our help in all sectors from photography and modelling to brand and logo designing to help them get started. Furthermore, by providing reliable logistics services we will make sure that their orders can be fulfilled without hiccups on a pan India and even global scale.
                        </p>
                        <Row className="center-align">
                            {/* first column full size */}
                            <Col s={12}>
                                <h4>Be a part of the change</h4>
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
                    </CardPanel>
                </Row>
            </section>
        </div>
    );
}

export default English;