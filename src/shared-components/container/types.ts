import styled from '@emotion/styled';

import type { ContainerType } from './style';

/**
 * Variable defined solely for type definitions.
 *
 * Our pattern for setting subcomponents via dot notion is easy within a proper component
 * but not when setting it directly on the return value of a `styled` call.
 */
const ContainerComponentForTypesOnly = styled.div<{
  type?: ContainerType;
}>``;

export type ContainerComponentType = typeof ContainerComponentForTypesOnly;
