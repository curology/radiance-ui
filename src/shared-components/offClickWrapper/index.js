import React from 'react';
import PropTypes from 'prop-types';

class OffClickWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onOffClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: undefined,
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
    document.addEventListener('keydown', this.handleKeyPress, false);
  };

  removeOffClickListener = () => {
    document.removeEventListener('click', this.handleOffClick, false);
    document.removeEventListener('keydown', this.handleKeyPress, false);
  };

  handleKeyPress = event => {
    if (event.key === 'Escape') {
      const { onOffClick } = this.props;
      onOffClick(event);
    }
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
