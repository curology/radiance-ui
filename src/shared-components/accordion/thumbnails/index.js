import PropTypes from 'prop-types';
import React from 'react';

import {
  Container,
  ImageContainer,
  ThumbnailImage,
  MultiplesContainer,
  MultiplesText,
} from './style';

class Thumbnails extends React.Component {
  static propTypes = {
    /** An array of image src strings that Accordion.Thumbails will use to render */
    photoSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  renderThumbnails() {
    const { photoSrcs } = this.props;

    if (photoSrcs.length === 0) {
      return null;
    }

    const firstThumbnail = (
      <ImageContainer>
        <ThumbnailImage src={photoSrcs[0]} />
      </ImageContainer>
    );

    let secondThumbnail = null;

    if (photoSrcs.length === 2) {
      secondThumbnail = (
        <ImageContainer>
          <ThumbnailImage src={photoSrcs[1]} />
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
  }

  render() {
    return <Container>{this.renderThumbnails()}</Container>;
  }
}

export default Thumbnails;
