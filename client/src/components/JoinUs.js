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
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScCZxqZzC0ELcqu60kYRycJzQbADVZeV1wjeKUeJTN4c_vOzQ/viewform?embedded=true" width="640" height="3898" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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
                                className="blue-grey darken-4white-text">
                                    <Icon left>phone</Icon>
                                    <span className="button-text">+919074342615</span>
                            </Button>
                            <br /><br />
                            <Button
                                href="mailto:connect@promocrew.in"
                                node="a"
                                waves="light"
                                className="blue-grey darken-4white-text">
                                    <Icon left>mail</Icon>
                                    <span className="button-text">connect@promocrew.in</span>
                            </Button>
                    </p>
                </div>
                <br /><br />
            </div>
        </div>

    );
}

export default JoinUs;