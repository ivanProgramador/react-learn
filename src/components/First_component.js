import React from "react";

function Profile(){
    return(
        <div>
            <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson"/>
        </div>
    )
}

export default function Galery(){

    return(
        <>
         <section>
          <h2>Amazing Scientists</h2>

           <Profile/>
           <Profile/>
           <Profile/>

         </section>
        </>
    )


}