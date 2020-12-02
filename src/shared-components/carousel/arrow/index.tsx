import React from 'react';

import { RoundButton } from '../../button';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../icons';
import { ArrowContainer, BottomRightAlignedArrowContainer } from './style';

interface ArrowProps {
  bottomRightAlignedArrows?: boolean;
  disabled?: boolean;
  next?: boolean;
  onClick?: () => void;
  prev?: boolean;
}

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
