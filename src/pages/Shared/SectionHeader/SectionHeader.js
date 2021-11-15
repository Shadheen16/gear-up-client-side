import React from 'react';

const SectionHeader = ({headerText, addClass}) => {
    return (
        <div className="text-4xl  text-center mx-auto max-w-sm py-4 font-Abril font-bold my-10">
            <p >-----***-----</p>
             <h1 className={`${addClass}`}>{headerText}</h1>
        </div>
    );
};

export default SectionHeader;