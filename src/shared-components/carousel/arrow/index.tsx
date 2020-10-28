import React from 'react';

import { RoundButton } from '../../button';
import ArrowLeftIcon from '../../../svgs/icons/arrow-left-icon.svg';
import ArrowRightIcon from '../../../svgs/icons/arrow-right-icon.svg';
import { ArrowContainer, BottomRightAlignedArrowContainer } from './style';

type ArrowProps = {
  bottomRightAlignedArrows?: boolean;
  disabled?: boolean;
  next?: boolean;
  onClick?: () => void;
  prev?: boolean;
};

const Arrow = ({
  bottomRightAlignedArrows = false,
  disabled = false,
  next = false,
  onClick = () => undefined,
  prev = false,
}: ArrowProps) => {
  const ArrowContainerComponent = bottomRightAlignedArrows
    ? BottomRightAlignedArrowContainer
    : ArrowContainer;

  return (
    <ArrowContainerComponent prev={prev} next={next} disabled={disabled}>
      {prev && (
        <RoundButton
          buttonType={bottomRightAlignedArrows ? 'primary' : 'action'}
          disabled={disabled}
          icon={<ArrowLeftIcon />}
          onClick={onClick}
        />
      )}
      {next && (
        <RoundButton
          buttonType={bottomRightAlignedArrows ? 'primary' : 'action'}
          disabled={disabled}
          icon={<ArrowRightIcon />}
          onClick={onClick}
        />
      )}
    </ArrowContainerComponent>
  );
};

export default Arrow;
