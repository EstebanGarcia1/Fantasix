// src/components/ui/button.js
import React from 'react';
import '../../styles/styles/button.scss';
const Button = ({ onClick, children, variant = 'default' }) => {
    const baseStyle = "px-4 py-2 rounded focus:outline-none";
    const variantStyle = variant === 'outline' ? "border border-gray-300 text-gray-700" : "bg-blue-500 text-white";

    return (
        <button className={`${baseStyle} ${variantStyle}`} onClick={onClick}>
            {children}
        </button>
    );
};

export { Button };
