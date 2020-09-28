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
  const initialActiveIndex = initialActiveItem
    ? segmentItems.indexOf(initialActiveItem)
    : 0;

  const targetRef = useRef<HTMLDivElement>(null);
  const [activeSegmentId, setActiveSegmentId] = useState(initialActiveId);
  const [activeSegmentText, setActiveSegmentText] = useState(
    initialActiveItem?.text,
  );
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(
    initialActiveIndex,
  );
  const [transform, setTransform] = useState('initial');
  const [targetWidth, setTargetWidth] = useState(0);
  const segmentWidth = 100 / segmentItems.length;

  useEffect(() => {
    if (targetRef.current) {
      setTargetWidth(targetRef.current.offsetWidth);
      setTransform(
        `translate3d(${
          targetRef.current.offsetWidth * activeSegmentIndex
        }px, 0, 0)`,
      );
    }
  }, [targetRef]);

  const onSegmentClick = (segment: SegmentItemType) => {
    const index = segmentItems.indexOf(segment);
    setActiveSegmentId(segment.id);
    setActiveSegmentText(segment.text);
    setActiveSegmentIndex(index);
    setTransform(`translate3d(${targetWidth * index}px, 0, 0)`);
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
