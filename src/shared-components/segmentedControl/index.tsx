import React, { useState, useRef, useEffect } from 'react';

import { SegmentsContainer, SegmentItem, Indicator } from './style';
import { SegmentedControlProps, SegmentItemType } from './types';

/**
 * The width of the top-level container is set to 100%, so it will expand to fill its parent container.
 *
 * Set a non-percentage `width` on the parent element during implementation to avoid stretched-out layout or animation effects.
 */
export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  segmentItems,
  initialActiveId = 1,
  onClick,
}) => {
  const itemsCount = segmentItems.length;

  if (itemsCount === 0) {
    return null;
  }

  const initialActiveItem = segmentItems.find(
    (item: SegmentItemType) => item.id === initialActiveId,
  );

  const initialActiveIndex = initialActiveItem
    ? segmentItems.indexOf(initialActiveItem)
    : 0;

  const [activeSegmentText, setActiveSegmentText] = useState(() =>
    initialActiveItem ? initialActiveItem.text : segmentItems[0].text,
  );
  const [activeSegmentIndex, setActiveSegmentIndex] =
    useState(initialActiveIndex);
  const targetRef = useRef<HTMLButtonElement>(null);
  const [transform, setTransform] = useState('');
  const [targetWidth, setTargetWidth] = useState(0);
  const segmentWidth = 100 / itemsCount;

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

  const onSegmentClick = (segment: SegmentItemType, index: number) => {
    setActiveSegmentText(segment.text);
    setActiveSegmentIndex(index);
    setTransform(`translate3d(${targetWidth * index}px, 0, 0)`);

    if (onClick) {
      onClick(segment);
    }
  };

  return (
    <SegmentsContainer>
      <Indicator
        segmentWidth={segmentWidth}
        transform={transform}
        ref={targetRef}
      >
        {activeSegmentText}
      </Indicator>
      {segmentItems.map((segment, index) => (
        <SegmentItem
          segmentWidth={segmentWidth}
          active={index === activeSegmentIndex}
          key={segment.id}
          onClick={() => {
            onSegmentClick(segment, index);
          }}
          disabled={index === activeSegmentIndex}
        >
          {segment.text}
        </SegmentItem>
      ))}
    </SegmentsContainer>
  );
};
