// src/components/ui/scroll-area.js
import React from 'react';
import '../../styles/styles/scroll-area.scss';
const ScrollArea = ({ children, className }) => {
    return (
        <div className={`overflow-auto ${className}`}>
            {children}
        </div>
    );
};

export { ScrollArea };
