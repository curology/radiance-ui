export interface SegmentedControlProps {
  /**
   * Initial segment id to display as active
   */
  initialActiveId?: number;
  /**
   * Callback invoked on `segmentItem` click
   */
  onClick?: (segment: SegmentItemType) => void;
  segmentItems: SegmentItemType[];
}

export interface SegmentItemType {
  id: number;
  text: string;
}
