import React from 'react';

const Message = props=>(
    <section className="message">
       <h4 className="mess_headline">
           {props.title}
           </h4> 
           <p className="mess_body">
               {props.message}
           </p>
           <a href={props.url} className="mess_url">
               {props.urlDisplayName}
           </a>
     </section>
)
export default Message;