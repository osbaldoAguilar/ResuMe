import React from 'react';
import Card from '../../components/SocialCardBranch/card'

import img1 from '../../assets/images/IMG_0001.jpg';
import img2 from '../../assets/images/IMG_0003.jpg';
import img3 from '../../assets/images/IMG_0006.jpg';

class SocialCard extends React.Component{
   
    render(){
        return(
            <div className="socialCard-wrapper">
                    
                        <Card imgsrc={img1} title="Person One"
                        text="Image One has a picture of an astronaut on the moon"/>
                    
                    
                        <Card imgsrc={img2} title="Person Two"
                        text="Image Two has a neon mask holding the moon in one hand"/>
                    
                    
                        <Card imgsrc={img3} title="Person Three"
                        text="Image Three is of a skull with red and blue lines as if it were 3D"/>
            </div>
        );
    }
}

export default SocialCard