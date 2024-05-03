import React, { useContext } from 'react';
import { BgContext } from "./Context/ContextBg";

const Button = () => {
    const { bgStyle, setBgStyle , bgStyle2, setBgStyle2} = useContext(BgContext);//Destructuring the values from the context object provided by BgContext.Provider
  

    const toggleBg1 = () => {
        setBgStyle({ ...bgStyle, backgroundColor: 'black', color: 'white',value:'Black' });
    };
//...bgStyle spread operator

    const toggleBg2 = () => {
        setBgStyle2({ ...bgStyle2, backgroundColor: 'Gold', color: 'black',value:'Yellow'  });  
    };

    return (
        <div className="d-grid gap-2">
            <button className="btn btn-primary" onClick={toggleBg1} type="button" style={{ backgroundColor: bgStyle.backgroundColor, color: bgStyle.color}}>{bgStyle.value}</button>
            <button className="btn btn-primary" onClick={toggleBg2} type="button" style={{ backgroundColor: bgStyle2.backgroundColor, color: bgStyle2.color}}>{bgStyle2.value}</button>
        </div>
    );
};

export default Button;
