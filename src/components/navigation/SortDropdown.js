import React, { useState } from 'react';

function SortDropdown() {
    const [selectedOption, setSelectedOption] = useState('Old');
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false); // Cerrar el dropdown después de seleccionar
    };

    return (
        <div className="relative inline-block text-left">
            {/* Botón para abrir el dropdown */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex justify-between items-center w-40 px-4 py-2 bg-white text-orange-500 font-bold text-sm rounded-md hover:bg-gray-300 shadow-lg"
            >
                Sort By: {selectedOption}
                <span className="ml-2">▼</span> {/* Icono de dropdown */}
            </button>


            {/* Dropdown */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1 text-gray-700">
                        <li
                            onClick={() => handleOptionClick('Old')}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            Old
                        </li>
                        <li
                            onClick={() => handleOptionClick('Recent')}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            Recent
                        </li>
                        <li
                            onClick={() => handleOptionClick('Popular')}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            Popular
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SortDropdown;
