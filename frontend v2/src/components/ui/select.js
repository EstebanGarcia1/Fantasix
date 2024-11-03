// src/ui/select.js
import React from 'react';
import '../../styles/styles/select.scss';

export const SelectTrigger = ({ children, onClick }) => (
    <button onClick={onClick} className="border rounded p-2 w-full text-left">
        {children}
    </button>
);

export const SelectValue = ({ value, placeholder }) => (
    <span className="text-gray-500">{value || placeholder}</span>
);

export const SelectContent = ({ children }) => (
    <div className="absolute bg-white border rounded shadow-lg mt-1">
        {children}
    </div>
);

export const SelectItem = ({ value, onSelect, children }) => (
    <div
        className="cursor-pointer p-2 hover:bg-gray-100"
        onClick={() => onSelect(value)} // Asegúrate de que esto invoque a onSelect
    >
        {children}
    </div>
);

export const Select = ({ onValueChange, children }) => (
    <div className="relative">
        {React.Children.map(children, child => {
            if (React.isValidElement(child) && child.type === SelectTrigger) {
                return React.cloneElement(child, { onClick: () => {} }); // Aquí puedes manejar el click si necesitas
            }
            if (React.isValidElement(child) && child.type === SelectContent) {
                return React.cloneElement(child, {
                    children: React.Children.map(child.props.children, selectChild => {
                        if (React.isValidElement(selectChild) && selectChild.type === SelectItem) {
                            return React.cloneElement(selectChild, {
                                onSelect: onValueChange, // Pasamos onValueChange a SelectItem
                            });
                        }
                        return selectChild;
                    })
                });
            }
            return child;
        })}
    </div>
);
