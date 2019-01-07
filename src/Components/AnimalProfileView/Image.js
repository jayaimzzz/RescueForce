import React from 'react';
import { Image } from 'semantic-ui-react';

export const GalleryImage = ({ photo }) => {
    return (
        <Image src={photo.src} />
    );
};