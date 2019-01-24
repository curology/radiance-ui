import React from 'react';
import PropTypes from 'prop-types';

class OffClickWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onOffClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    this.addOffClickListener();
  }

  componentWillUnmount() {
    this.removeOffClickListener();
  }

  addOffClickListener = () => {
    document.addEventListener('click', this.handleOffClick, false);
  };

  removeOffClickListener = () => {
    document.removeEventListener('click', this.handleOffClick, false);
  };

  handleOffClick = event => {
    const node = this.containerRef.current;
    const { onOffClick } = this.props;

    if (!node) {
      return;
    }
    if (node.contains(event.target)) {
      return;
    }

    onOffClick(event);
  };

  render() {
    const { children, className } = this.props;

    return (
      <div ref={this.containerRef} className={className}>
        {children}
      </div>
    );
  }
}

export default OffClickWrapper;
