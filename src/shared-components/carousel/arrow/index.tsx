import React from 'react';

import { RoundButton } from '../../button/components/roundButton';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../icons';
import Style from './style';

export interface ArrowProps {
  bottomRightAlignedArrows?: boolean;
  disabled?: boolean;
  next?: boolean;
  onClick?: () => void;
  prev?: boolean;
}

const Arrow: React.FC<ArrowProps> = ({
  bottomRightAlignedArrows = false,
  disabled = false,
  next = false,
  onClick = () => undefined,
  prev = false,
}) => {
  const ArrowContainerComponent = bottomRightAlignedArrows
    ? Style.BottomRightAlignedArrowContainer
    : Style.ArrowContainer;

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
