import React, { useState, useRef, useEffect } from 'react';

import { SegmentsContainer, SegmentItem, Indicator } from './style';
import { SegmentedControlProps, SegmentItemType } from './types';

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  segmentItems,
  initialActiveId = 1,
  onClick,
}) => {
  const initialActiveItem = segmentItems.find(
    (item: SegmentItemType) => item.id === initialActiveId,
  );

  const targetRef = useRef<HTMLDivElement>(null);
  const [activeSegmentId, setActiveSegmentId] = useState(1);
  const [activeSegmentText, setActiveSegmentText] = useState(
    initialActiveItem?.text,
  );
  const [transform, setTransform] = useState('initial');
  const [width, setWidth] = useState(0);
  const segmentWidth = 100 / segmentItems.length;

  useEffect(() => {
    if (targetRef.current) {
      const activeIndex = initialActiveItem
        ? segmentItems.indexOf(initialActiveItem)
        : 0;
      setWidth(targetRef.current.offsetWidth);
      setTransform(`translate3d(${width * activeIndex}px, 0, 0)`);
    }
  }, [targetRef]);

  const onSegmentClick = (segment: SegmentItemType) => {
    const index = segmentItems.indexOf(segment);
    setActiveSegmentId(segment.id);
    setActiveSegmentText(segment.text);
    setTransform(`translate3d(${width * index}px, 0, 0)`);
    return onClick ? onClick(segment) : null;
  };

  return (
    <SegmentsContainer>
      <Indicator width={segmentWidth} transform={transform} ref={targetRef}>
        {activeSegmentText}
      </Indicator>
      {segmentItems.map((segment) => (
        <SegmentItem
          width={segmentWidth}
          active={segment.id === activeSegmentId}
          key={segment.id}
          onClick={() => onSegmentClick(segment)}
        >
          {segment.text}
        </SegmentItem>
      ))}
    </SegmentsContainer>
  );
};

export default SegmentedControl;
