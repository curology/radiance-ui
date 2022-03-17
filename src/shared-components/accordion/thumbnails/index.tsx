import React from 'react';

import Style from './style';

export interface ThumbnailsProps {
  /** An array of image src strings that Accordion.Thumbails will use to render */
  photoSrcs: Array<string>;
}

export const Thumbnails: React.FC<ThumbnailsProps> = ({ photoSrcs }) => {
  /**
   * Thumbnail images set with empty alt text because they are decorative.
   * Accessible Accordion functionality does not depend on these thumbnails.
   */
  const renderThumbnails = () => {
    if (photoSrcs.length === 0) {
      return null;
    }

    const firstThumbnail = (
      <Style.ImageContainer>
        <Style.ThumbnailImage
          alt=""
          src={photoSrcs[0]}
        />
      </Style.ImageContainer>
    );

    let secondThumbnail = null;

    if (photoSrcs.length === 2) {
      secondThumbnail = (
        <Style.ImageContainer>
          <Style.ThumbnailImage
            alt=""
            src={photoSrcs[1]}
          />
        </Style.ImageContainer>
      );
    } else if (photoSrcs.length > 2) {
      secondThumbnail = (
        <Style.MultiplesContainer>
          <Style.MultiplesText>+{photoSrcs.length - 1}</Style.MultiplesText>
        </Style.MultiplesContainer>
      );
    }

    return (
      <React.Fragment>
        {firstThumbnail}
        {secondThumbnail}
      </React.Fragment>
    );
  };

  return <Style.Container>{renderThumbnails()}</Style.Container>;
};
