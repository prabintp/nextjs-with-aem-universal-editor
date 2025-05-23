import React from 'react';

export interface ImageWithCTAProps {
  title: string;
  description1: any;
  imageUrl: string;
  imageAlt?: string;
  variation?: 'left' | 'right';
  cfPath: string; // Content Fragment path for AEM UE
}

const ImageWithCTA: React.FC<ImageWithCTAProps> = ({
  title,
  description1,
  imageUrl,
  imageAlt = '',
  variation = 'left',
  cfPath,
}) => {
  const isImageLeft = variation === 'left';

  return (
    <div
      className="flex flex-col md:flex-row items-center gap-8 my-12"
      data-aue-type="Content With Image"
      data-aue-resource={`urn:aemconnection:${cfPath}/jcr:content/data/master`}
    >
      {isImageLeft && (
        <div className="md:w-1/2">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="rounded-2xl shadow-lg w-full object-cover"
            data-aue-prop="componentImage"
          />
        </div>
      )}

      <div className="md:w-1/2 text-center md:text-left">
        <h2 data-aue-prop="title" data-aue-type="text" className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 mb-6" data-aue-prop="description1" data-aue-type="text" >
          {description1}
        </p>
       
      </div>

      {!isImageLeft && (
        <div className="md:w-1/2">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ImageWithCTA;