import emailjs from '@emailjs/browser';
import { useState } from "react";
import { Button, Icon, Textarea, TextInput } from 'react-materialize';


// const Result = ()=>{
//     return(
//         <p className="">Your message has been successfully sent</p>
//     )
// }


function JoinUs() {

    // const [result, showResult] = useState(false);

    // const sendEmail = (e) => {


    //     e.preventDefault();
    
    //     emailjs.sendForm('service_9hu6ylh', 'template_0bgribe', e.target, '22bwCC-s2W01YpJuy')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //       e.target.reset();
    //       showResult(true);
    //   };



    return(
        
        <div id="main-content">
            <div className="container joinUsPage">
                <h1>Join Us</h1>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScCZxqZzC0ELcqu60kYRycJzQbADVZeV1wjeKUeJTN4c_vOzQ/viewform?embedded=true" width="640" height="3764" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                <br />
                <div>
                <h2>Contact Us</h2>
                    <p className="align-left">
                        {/* heading for join us section */}
                            {/* links to various joining options */}
                            <Button
                                href="tel:+919074342615"
                                node="a"
                                waves="light"
                                className="amber lighten-2 white-text">
                                    <Icon left>phone</Icon>
                                    <span className="button-text">+919074342615</span>
                            </Button>
                            <br /><br />
                            <Button
                                href="mailto:connect@promocrew.in"
                                node="a"
                                waves="light"
                                className="amber lighten-2 white-text">
                                    <Icon left>mail</Icon>
                                    <span className="button-text">connect@promocrew.in</span>
                            </Button>
                    </p>
                </div>

                <div>
                <h2>Location</h2>
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3086.4280113567243!2d77.62974956015064!3d12.929839965117164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1460d1af3721%3A0x7547770171fb3d5!2sWeWork!5e0!3m2!1sen!2sin!4v1651050303718!5m2!1sen!2sin" width="450" height="300" className="map"/>
                </div>
                <br/>
            </div>
        </div>

    );
}

export default JoinUs;