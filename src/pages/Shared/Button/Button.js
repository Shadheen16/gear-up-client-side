import React from 'react';


const Button = ({btnText}) => {
    return (
        <div>
        <button className="bg-gray-100 hover:bg-clr-secondary w-full rounded-full px-3 text-lg text-gray-800 hover:text-white py-2">{btnText}</button>
        </div>
    );
};

export default Button;