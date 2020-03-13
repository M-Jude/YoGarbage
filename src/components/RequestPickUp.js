import React from 'react';

export default function RequestPickUp(){
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
               <div className="topBar"></div>
               <div id="contentArea">
               		<fieldset>
               			<label>GARBAGE</label>
               				<div className="garData">
               					<label><p>Type</p></label><select></select>
               					<label><p>Quantity</p></label><select></select>
               				</div>
               		</fieldset>
               </div>
            </body>
		</>	
		)
}