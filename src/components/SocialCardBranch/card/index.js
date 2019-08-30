import React from 'react';
import Logo from '../logo';
import Headline from '../headline';
import CreditBox from '../creditbox';
import Message from '../message';

const Card = props =>(
    <div className="card">
        <section className="main">
            <Logo logo={props.logoURL}/>
            <Headline headline={props.headline}/>
            <CreditBox 
                name={props.name}
                creditImageURL={props.creditImageURL}
            />
        </section>
        <Message
            title={props.headline}
            message={props.message}
            url={props.url}
            urlDisplayName={props.urlDisplayName}
            />
    </div>
);

export default Card;
