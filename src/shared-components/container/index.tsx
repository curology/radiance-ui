// import React from 'react';
// import PropTypes from 'prop-types';

// import Style from './style';

// /**
//  * TODO-TS: Determine behavior when prop is not provided
//  */
// type ContainerProps = {
//   children: React.ReactNode;
//   type?: 'clickable' | 'message';
// };

// /**
//  * The `<Container />` component is mainly useful for base styles.
//  *
//  * Within the container there are helper components that have very little opinion except for spacing. The idea is that we encourage you to build out the content of the `<Container />` component, but we have some helpful default components you can use.
//  *
//  * `<Container />` can take in a `type` prop that will change its styling. Available types are `message` and `clickable`.
//  */
// export const Container = Style.Container;

// Container.Section = Style.Section;
// Container.Divider = Style.Divider;
// Container.Image = Style.Image;

// Container.propTypes = {
//   children: PropTypes.node.isRequired,
//   type: PropTypes.oneOf(['message', 'clickable']),
// };

export { Container } from './style';
