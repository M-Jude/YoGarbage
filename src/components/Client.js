import React from 'react';
import ReactDom from 'react-dom';

export default function Client(){
	return(
         <>
         	<body>
               <div id="sidebar">
                  <div className="toggle" onClick="toggle_btn()">
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <ul>
                     <li>Request a Pickup</li>
                     <li>Messages</li>
                     <li>Feedback</li>
                  </ul>
               </div>
            </body>
         </>
		)
}

