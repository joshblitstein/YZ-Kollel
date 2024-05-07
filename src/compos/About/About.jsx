import React from 'react';
import img from './str.png'
import './about.scss';

const About = () => {
    return (
        <div className="about">
            <h2>About Our Kollel</h2>
            <div className="content">
           
           
            <div className="right">
                    <img src={img}/>
                </div>
                <div className="left">
                    {/* <h2>About Our Kollel</h2> */}
                    <p>YZ Kollel is a platform that provides working and learning men an opportunity to join together in a Yissachar-Zevulun (YZ) Relationship. YZ Kollel distributes donor funds to its vast network of learning men and in exchange its donors receive a portion of the schar and a zchus for their personal parnassah. Through this process, YZ Kollel offers an opportunity for working individuals to have a stake in the learning of the YZ Kollel network through charitable contribution. Tax deductible reciepts can be provided as well. Click here to <a target='_blank' href='https://secure.merchpay.com/yz-kollel/'>DONATE.</a> </p>
                    
                </div>
           
               
            </div>
            
        </div>
    );
}

export default About;
