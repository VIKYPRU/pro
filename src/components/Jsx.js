import React from "react";
import './Jsx.css'
import style from'./Style.module.css'
function Jsx(){
    let colors ={
        color:'blue',
        backgroundColor:'red',
        fontSize:'100px'


    }

   

return(
    <div>
    <h1  className="secondary">Welcomehjhjj</h1>
    {/* internal css */}
    <h1 style={colors}>hi</h1>
    {/* inline css */}
    <h1 className={style.error}>kgisl</h1>
    {/* style module css */}


    </div>

    //internal css
)
}
export default Jsx;