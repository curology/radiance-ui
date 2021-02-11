import React from 'react';

import {
  Container,
  ImageContainer,
  ThumbnailImage,
  MultiplesContainer,
  MultiplesText,
} from './style';

export interface ThumbnailsProps {
  /** An array of image src strings that Accordion.Thumbails will use to render */
  photoSrcs: Array<string>;
}

export const Thumbnails = ({ photoSrcs }: ThumbnailsProps) => {
  /**
   * Thumbnail images set with empty alt text because they are decorative.
   * Accessible Accordion functionality does not depend on these thumbnails.
   */
  const renderThumbnails = () => {
    if (photoSrcs.length === 0) {
      return null;
    }

    const firstThumbnail = (
      <ImageContainer>
        <ThumbnailImage alt="" src={photoSrcs[0]} />
      </ImageContainer>
    );

    let secondThumbnail = null;

    if (photoSrcs.length === 2) {
      secondThumbnail = (
        <ImageContainer>
          <ThumbnailImage alt="" src={photoSrcs[1]} />
        </ImageContainer>
      );
    } else if (photoSrcs.length > 2) {
      secondThumbnail = (
        <MultiplesContainer>
          <MultiplesText>+{photoSrcs.length - 1}</MultiplesText>
        </MultiplesContainer>
      );
    }

    return (
      <React.Fragment>
        {firstThumbnail}
        {secondThumbnail}
      </React.Fragment>
    );
  };

  return <Container>{renderThumbnails()}</Container>;
};
