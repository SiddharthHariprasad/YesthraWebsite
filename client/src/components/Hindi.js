import { Button, Carousel, Col, Row, Icon, CardPanel } from 'react-materialize';

function Hindi() {
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
                {/* new row for feedbacks */}
                <Row className="center-align">
                    <CardPanel className="left-align blue-grey darken-2 white-text story-card hindi-text">
                        <h2>येस्त्रा क्या है ?</h2>
                        <p>
                            केरल में बाढ़ राहत कार्यों के शुरुआती दिनों में, हमें एक दिल दहला देने वाला दृश्य देखने को मिला, एक माँ सिसकती हुई, अपने दो बच्चों को पास में पकड़कर, अपनी शर्ट और पैंट के टूटे हुए टुकड़ों के चारों ओर दौड़ती हुई मिट्टी में बिखरी हुई थी। वह गमगीन थी, बाद में हमें पता चला कि वह अपने परिवार में अकेली कमाने वाली थी, अपने दो बच्चों की देखभाल और पालन-पोषण अकेले ही कर रही थी। उसने अपनी एकमात्र आजीविका खो दी थी और अकेले अनिश्चित भविष्य का सामना कर रही थी। हमने उस दौरान उसकी और उसके परिवार की मदद करने की पूरी कोशिश की और तभी हमें एक चौंकाने वाला सच पता चला। उसने और उसके परिवार ने एक प्रसिद्ध स्थानीय ब्रांड के लिए परिधान का उत्पादन किया, लेकिन ब्रांड ने जो लाभ प्राप्त किया, उसमें से उसे और उसके परिवार को केवल एक बहुत ही छोटा हिस्सा मिला। बाढ़ के कारण हुए नुकसान के साथ, ऑर्डर रद्द कर दिए गए क्योंकि उन्हें ब्रांड द्वारा उच्च और शुष्क छोड़ दिया गया था। इसके बाद हुए राहत कार्यों के दौरान हमने कई और परिवारों के साथ बातचीत की, जिन्होंने ऐसी दुर्दशा साझा की और उनके साथ काम करने से हमें उनकी स्थितियों और उनके सामने आने वाली समस्याओं के बारे में और अधिक समझने का मौका मिला। हमने उनके साथ जो समय बिताया वह वह समय भी था जब हमने देखा कि परिधान बनाने के उद्योग में कितना व्यापक शोषण और गरीबी के करीब जीवन था। जब तक वे एक बड़े निर्माता या स्थापित डिजाइनर नहीं थे, तब तक खुद को विकसित करना और विस्तार करना बहुत कठिन था, बड़े-नाम वाले ब्रांडों के खिलाफ खुद को प्रतिस्पर्धी होना लगभग असंभव था।
                        </p>
                        <p>
                            यस्त्रा का गठन उनकी समस्याओं का समाधान करने और उनकी चिंताओं के लिए व्यावहारिक, वास्तविक दुनिया के समाधान के साथ आने के लिए किया गया था। उन्हें अपने दम पर ऊपर उठने के लिए सशक्त बनाना और मजबूत सामुदायिक आंदोलनों का निर्माण करना जो उन्हें अपने शोषण का सामना करने और फलने-फूलने की अनुमति दें। उन्हें भारतीय परिधान और फैशन उद्योग में विदेशी संस्थाओं और बड़े ब्रांडों की पकड़ को खत्म करने के लिए उपकरण प्रदान करना।
                        </p>
                        <p>
                            यस्त्रा के माध्यम से हम उनके लिए एक मंच प्रदान करेंगे, जिस पर दर्शकों की एक विस्तृत श्रृंखला तक पहुंचा जा सकता है, इसके अलावा अनूठी और अनुरूप विपणन रणनीतियों के माध्यम से हम इन व्यक्तिगत रचनाकारों को अपने स्वयं के प्रसिद्ध ब्रांडों में बदल देंगे। यहां तक ​​कि नए डिज़ाइनर या निर्माता जिनके पास कोई ऑनलाइन उपस्थिति या बिक्री नहीं है, वे पोर्टफोलियो बनाने में मदद के लिए हमसे संपर्क कर सकते हैं, हम फोटोग्राफी और मॉडलिंग से लेकर ब्रांड और लोगो डिजाइनिंग तक सभी क्षेत्रों में अपनी सहायता प्रदान करेंगे ताकि उन्हें आरंभ करने में मदद मिल सके। इसके अलावा, विश्वसनीय लॉजिस्टिक्स सेवाएं प्रदान करके हम यह सुनिश्चित करेंगे कि उनके ऑर्डर पूरे भारत और यहां तक ​​कि वैश्विक स्तर पर बिना किसी रुकावट के पूरे किए जा सकें।
                        </p>
                        <Row className="center-align">
                            {/* first column full size */}
                            <Col s={12}>
                                <h4 className="hindi-text">इस बदलाव का हिस्सा बनें</h4>
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

export default Hindi;