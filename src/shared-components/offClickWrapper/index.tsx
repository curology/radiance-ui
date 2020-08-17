import React from 'react';
import PropTypes from 'prop-types';

type OffClickWrapperProps = {
  children: React.ReactNode;
  className?: string;
  onOffClick: (event: KeyboardEvent | MouseEvent) => void;
};

class OffClickWrapper extends React.Component<OffClickWrapperProps> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onOffClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: undefined,
  };

  containerRef: React.RefObject<HTMLDivElement>;

  constructor(props: OffClickWrapperProps) {
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

  handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      const { onOffClick } = this.props;
      onOffClick(event);
    }
  };

  handleOffClick = (event: MouseEvent) => {
    const node = this.containerRef.current;
    const { onOffClick } = this.props;

    if (!node) {
      return;
    }

    if (node.contains(event.target as Node)) {
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
