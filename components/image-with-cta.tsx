import React from 'react';

export interface ImageWithCTAProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  variation?: 'left' | 'right';
  cfPath: string; // Content Fragment path for AEM UE
}

const ImageWithCTA: React.FC<ImageWithCTAProps> = ({
  title,
  description,
  imageUrl,
  imageAlt = '',
  variation = 'left',
  cfPath,
}) => {
  const isImageLeft = variation === 'left';

  return (
    <div
      className="flex flex-col md:flex-row items-center gap-8 my-12"
      data-cf-path={cfPath}
    >
      {isImageLeft && (
        <div className="md:w-1/2">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="rounded-2xl shadow-lg w-full object-cover"
            data-cf-field="componentImage"
          />
        </div>
      )}

      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-900 mb-4" data-cf-field="title">
          {title}
        </h2>
        <p className="text-gray-600 mb-6" data-cf-field="description1">
          {description}
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-black text-white text-sm rounded-xl hover:bg-gray-800 transition"
        >
          Learn More
        </a>
      </div>

      {!isImageLeft && (
        <div className="md:w-1/2">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="rounded-2xl shadow-lg w-full object-cover"
            data-cf-field="componentImage"
          />
        </div>
      )}
    </div>
  );
};

export default ImageWithCTA;