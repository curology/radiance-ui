export type SegmentedControlProps = {
  initialActiveId?: number;
  segmentItems: SegmentItemType[];
  onClick?: (segment: SegmentItemType) => void;
};

export type SegmentItemType = {
  id: number;
  text: string;
};
