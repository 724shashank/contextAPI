import React, { createContext, useState } from 'react';

// Create a context object
export const BgContext = createContext();

// Create a provider component
export const ContextBg = ({ children }) => {
    const [bgStyle, setBgStyle] = useState({ backgroundColor: 'white', color: 'black',value:'White' });
    const [bgStyle2, setBgStyle2] = useState({ backgroundColor: 'white', color: 'black',value:'White'  });

    return (//these are the values which will be accessed by the children
        <BgContext.Provider value={{ bgStyle, setBgStyle,bgStyle2, setBgStyle2 }}>
            {children}
        </BgContext.Provider>
    );
};
