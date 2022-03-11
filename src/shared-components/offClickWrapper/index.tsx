import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export interface OffClickWrapperProps {
  /**
   * Content/container that ignores clicks inside it
   */
  children: React.ReactNode;
  className?: string;
  /**
   * Function invoked when clicking outside of the children content
   */
  onOffClick: (event: KeyboardEvent | MouseEvent) => void;
}

export const OffClickWrapper: React.FC<OffClickWrapperProps> = ({
  children,
  className,
  onOffClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onOffClick(event);
    }
  };

  const handleOffClick = (event: MouseEvent) => {
    const node = containerRef.current;

    if (!node) {
      return;
    }

    if (node.contains(event.target as Node)) {
      return;
    }

    onOffClick(event);
  };

  useEffect(() => {
    document.addEventListener('click', handleOffClick, { capture: true });
    document.addEventListener('keydown', handleKeyPress, { capture: true });

    return () => {
      document.removeEventListener('click', handleOffClick, false);
      document.removeEventListener('keydown', handleKeyPress, false);
    };
    // Want to maintain existing behavior, but this eslint-disable indicates potential bug surface area.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- `onOffClick` prop not guaranteed to have referential integrity
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

OffClickWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onOffClick: PropTypes.func.isRequired,
};
