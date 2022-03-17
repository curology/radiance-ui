import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

import { CheckmarkIcon, ChevronIcon, ErrorIcon, InfoIcon } from '../../icons';
import { Avatar } from '../avatar';
import Style from './style';
import { isDefined } from '../../utils/isDefined';
import { useTruncateText } from './hooks';

const ANIMATION_DELAY = 500;

const alertIconMapping = {
  success: CheckmarkIcon,
  error: ErrorIcon,
  danger: ErrorIcon,
  default: InfoIcon,
};

export type AlertType = 'success' | 'error' | 'default' | 'danger';

export interface AlertProps {
  avatarSrc?: string;
  content: React.ReactNode;
  ctaContent?: React.ReactNode;
  duration?: string | number;
  onExit?: ((rest: Omit<AlertProps, 'onExit'>) => void) | (() => void);
  truncateText?: boolean;
  type?: AlertType;
  [key: string]: unknown;
}

interface Alert extends React.FC<AlertProps> {
  Container: typeof Style.AlertsContainer;
}

/**
 * Alerts should be used to show notifications or messages from (providers, support, or system).
 *
 * They should show page-level success states.
 *
 * We should avoid using alerts to show flow-level success states (i.e. Cancellation successful)
 *
 * Alerts contain some visual marker, an icon `16px` or avatar `32px`
 *
 * Alerts should have a **bolded** portion of the text that helps inform the user what the alert is about.
 * The text should be short and preferably not extend more than 2 lines. Ellipses (...) can be used to truncate past 2 lines via the prop `truncateText`.
 *
 * Alerts can contain a CTA section. These should be reserved for really important actions. These alerts persists until an action is taken.
 *
 * The `<Alert />` component provides only the styling for and enter/exit behavior for alerts.
 * Management of what alerts are showing on the screen must be handled from outside of this component.
 *
 * All alerts are dimissable by clicking on them. However, you can use the `duration` prop to determine if the alert is sticky or dismissed on a timer (in units of seconds).
 */
export const Alert: Alert = (alertProps) => {
  const {
    avatarSrc = '',
    content,
    ctaContent = null,
    duration = 3,
    onExit = () => undefined,
    truncateText = false,
    type = 'default',
    ...rest
  } = alertProps;
  const theme = useTheme();
  const [exiting, setExiting] = useState(false);
  const [exited, setExited] = useState(false);

  const { contentText } = useTruncateText(truncateText);

  let timer: number | undefined;

  const alertExitHandler = () => {
    setExiting(true);
    window.clearTimeout(timer);

    const { onExit: _onExit, ...otherProps } = alertProps;

    window.setTimeout(() => {
      setExited(true);
      onExit(otherProps);
    }, ANIMATION_DELAY);
  };

  /**
   * Duration logic effect
   */
  useEffect(() => {
    if (duration === 'sticky' || !!ctaContent) {
      return;
    }

    timer = window.setTimeout(
      alertExitHandler,
      Number(duration) * 1000 - ANIMATION_DELAY,
    );

    return () => {
      if (isDefined(timer)) {
        window.clearTimeout(timer);
      }
    };
  }, []);

  if (exited) {
    return null;
  }

  const Icon = alertIconMapping[type];

  return (
    <Style.AlertContainer
      alertType={type}
      exiting={exiting}
      onClick={alertExitHandler}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <Style.MainContainer>
        <Style.IconContainer hasAvatar={!!avatarSrc}>
          {avatarSrc ? (
            <Avatar
              size="small"
              src={avatarSrc}
              alt="avatar"
            />
          ) : (
            <Icon fill={theme.COLORS.white} />
          )}
        </Style.IconContainer>
        <Style.ContentContainer
          truncateText={truncateText}
          ref={contentText}
        >
          {content}
        </Style.ContentContainer>
      </Style.MainContainer>
      {ctaContent && (
        <Style.CtaContent>
          <div>{ctaContent}</div>
          <ChevronIcon
            fill={theme.COLORS.white}
            width={14}
            height={14}
          />
        </Style.CtaContent>
      )}
    </Style.AlertContainer>
  );
};

Alert.Container = Style.AlertsContainer;

Alert.propTypes = {
  avatarSrc: PropTypes.string,
  content: PropTypes.node.isRequired,
  ctaContent: PropTypes.node,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onExit: PropTypes.func,
  truncateText: PropTypes.bool,
  type: PropTypes.oneOf(['success', 'error', 'default', 'danger']),
};
