import React from 'react';
import Card from '../../components/SocialCardBranch/card'

import img1 from '../../assets/images/IMG_0001.jpg';
import img2 from '../../assets/images/IMG_0003.jpg';
import img3 from '../../assets/images/IMG_0006.jpg';

class SocialCard extends React.Component{
   
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
               <div className="row">
                    
                    <div className ="col-md-4">
                        <Card imgsrc={img1} title="Person One"
                        text="Person 1 is an astronuant who made it to the Moon he is depressed"/>
                    </div>
                    <div className ="col-md-4">
                        <Card imgsrc={img2} title="Person Two"
                        text="Person 2 is ridiculous and has a big ego"/>
                    </div>
                    <div className ="col-md-4">
                        <Card imgsrc={img3} title="Person Three"
                        text="Person 3 is cold and very mean"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SocialCard