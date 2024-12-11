import React from 'react';

const InputField = ({ label, placeholder, type, value, onChange, options }) => {
    if (type === 'select') {
        return (
            <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
                <select
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={value}
                    onChange={onChange}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;
