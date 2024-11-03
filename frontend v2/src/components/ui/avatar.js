// src/components/ui/avatar.js
import React from 'react';

const Avatar = ({ src, alt }) => {
    return (
        <img className="rounded-full" src={src} alt={alt} />
    );
};

const AvatarFallback = ({ children }) => {
    return (
        <div className="rounded-full bg-gray-300 flex items-center justify-center">
            {children}
        </div>
    );
};

const AvatarImage = ({ src, alt }) => {
    return <Avatar src={src} alt={alt} />;
};

export { Avatar, AvatarFallback, AvatarImage };
