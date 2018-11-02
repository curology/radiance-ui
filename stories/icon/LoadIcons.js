import React from 'react';
import PropTypes from 'prop-types';

import Sprite from '../../src/svgs/icons.svg';

class LoadIcons extends React.Component {
  state = { icons: [] };

  componentDidMount() {
    // eslint-disable-next-line no-undef
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // eslint-disable-next-line no-undef
      const reader = new window.FileReader();
      const icons = [];

      reader.onload = event => {
        const str = event.target.result;
        const regex = /id\s*=\s*["'](\S+)["']/gi;
        let match;

        // eslint-disable-next-line no-cond-assign
        while ((match = regex.exec(str))) {
          icons.push(match[1]);
        }

        this.setState({ icons });
      };

      // eslint-disable-next-line no-undef
      const xhr = new window.XMLHttpRequest();
      xhr.open('GET', Sprite);
      xhr.responseType = 'blob'; // force the HTTP response, response-type header to be blob
      xhr.onload = () => {
        reader.readAsText(xhr.response);
      };
      xhr.send();
    }
  }

  render() {
    return this.props.children(this.state.icons);
  }
}

LoadIcons.propTypes = {
  children: PropTypes.func.isRequired,
};

export default LoadIcons;
