export type SegmentedControlProps = {
  /**
   * Initial segment id to display as active
   */
  initialActiveId?: number;
  segmentItems: SegmentItemType[];
  /**
   * Callback invoked on `segmentItem` click
   */
  onClick?: (segment: SegmentItemType) => void;
};

export type SegmentItemType = {
  id: number;
  text: string;
};
