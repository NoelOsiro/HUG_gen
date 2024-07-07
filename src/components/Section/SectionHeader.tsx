import React from 'react';

interface SectionHeaderProps {
    title: string;
    text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, text }) => {
    return (
        <div className="relative w-full max-w-700px mx-auto mb-16 text-center">
          <p className="text-2xl lg:text-4xl font-semibold text-blue-600">
            {title}
          </p>
          <h2 className="text-3xl lg:text-4xl mt-6 font-semibold text-gray-800">
            {text}
          </h2>
        </div>
    );
};

export default SectionHeader;