import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from '../avatar';
import ChevronIcon from '../../svgs/icons/chevron-icon.svg';
import CheckmarkIcon from '../../svgs/icons/checkmark-icon.svg';
import ErrorIcon from '../../svgs/icons/error-icon.svg';
import InfoIcon from '../../svgs/icons/info-icon.svg';
import { COLORS } from '../../constants';
import {
  AlertsContainer,
  AlertContainer,
  MainContainer,
  IconContainer,
  ContentContainer,
  CtaContent,
} from './style';

const ANIMATION_DELAY = 500;

const alertIconMapping = {
  success: CheckmarkIcon,
  error: ErrorIcon,
  danger: ErrorIcon,
  default: InfoIcon,
};

export type AlertType = 'success' | 'error' | 'default' | 'danger';

type AlertProps = {
  avatarSrc: string;
  content: React.ReactNode;
  ctaContent: React.ReactNode;
  duration: string | number;
  truncateText: boolean;
  type: AlertType;
  onExit: (rest: Omit<AlertProps, 'onExit'>) => void | (() => void);
};

type AlertState = {
  exiting: boolean;
  exited: boolean;
};

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
export class Alert extends React.Component<AlertProps, AlertState> {
  static propTypes = {
    avatarSrc: PropTypes.string,
    content: PropTypes.node.isRequired,
    ctaContent: PropTypes.node,
    duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    truncateText: PropTypes.bool,
    type: PropTypes.oneOf(['success', 'error', 'default']),
    onExit: PropTypes.func,
  };

  static defaultProps = {
    avatarSrc: '',
    ctaContent: null,
    duration: 3,
    truncateText: false,
    type: 'default',
    onExit: () => undefined,
  };

  static Container = ({ children }: { children: React.ReactNode }) => (
    <AlertsContainer>{children}</AlertsContainer>
  );

  contentText = React.createRef<HTMLDivElement>();

  timer: number | undefined;

  state = {
    exiting: false,
    exited: false,
  };

  componentDidMount() {
    const { duration, ctaContent, truncateText } = this.props;

    // Truncate text logic
    if (truncateText) {
      const contentElement = this.contentText.current;
      if (contentElement) {
        const wordsArray = contentElement.innerHTML.split(' ');
        while (contentElement.scrollHeight > contentElement.offsetHeight) {
          wordsArray.pop();
          contentElement.innerHTML = `${wordsArray.join(' ')}...`;
        }
      }
    }

    // Duration logic
    if (duration === 'sticky' || !!ctaContent) {
      return;
    }

    this.timer = window.setTimeout(
      this.alertExitHandler,
      Number(duration) * 1000 - ANIMATION_DELAY,
    );
  }

  componentWillUnmount() {
    if (this.timer) {
      window.clearTimeout(this.timer);
    }
  }

  alertExitHandler = () => {
    const { onExit, ...rest } = this.props;
    this.setState({ exiting: true });

    window.clearTimeout(this.timer);

    window.setTimeout(() => {
      this.setState({ exited: true });

      onExit({ ...rest });
    }, ANIMATION_DELAY);
  };

  render() {
    const {
      avatarSrc,
      content,
      ctaContent,
      truncateText,
      type,
      // need to destructure onExit to avoid passing as AlertContainer attribute with ...rest
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onExit,
      ...rest
    } = this.props;
    const { exiting, exited } = this.state;
    const Icon = alertIconMapping[type];

    if (exited) {
      return null;
    }

    return (
      <AlertContainer
        alertType={type}
        exiting={exiting}
        onClick={this.alertExitHandler}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        <MainContainer>
          <IconContainer hasAvatar={!!avatarSrc}>
            {avatarSrc ? (
              <Avatar size="small" src={avatarSrc} alt="avatar" />
            ) : (
              <Icon fill={COLORS.white} />
            )}
          </IconContainer>
          <ContentContainer truncateText={truncateText} ref={this.contentText}>
            {content}
          </ContentContainer>
        </MainContainer>
        {ctaContent && (
          <CtaContent>
            <div>{ctaContent}</div>
            <ChevronIcon fill={COLORS.white} width={14} height={14} />
          </CtaContent>
        )}
      </AlertContainer>
    );
  }
}
