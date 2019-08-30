import React from 'react';
import card from '../cardData';
import Card from '../card';
import headshot from '../../../assets/images/download.png';
import moon from '../../../assets/images/IMG_0002.jpg';

class SocialApp extends React.Component{

    render(){
        return(
            <div className="socialApp">
                <Card
                    logoURL={moon}
                    headline={card.headline}
                    name={card.name}
                    creditImageURL={headshot}
                    message={card.message}
                    url={card.url}
                    urlDisplayName={card.urlDisplayName}
                    />
            </div>
        );
    }

}

export default SocialApp;