import { ThemeType } from '../../../constants/themes/types';
/**
 * We rely on TypeScript path aliasing in order to decorate our `@emotion/styled` import
 * with built-in type information, so for this one import we need to use relative imports
 *
 * @see: https://emotion.sh/docs/typescript#define-a-theme
 */
import styled, {
  CreateStyled,
  StyledComponent,
} from '../../../../node_modules/@emotion/styled';

export default styled as CreateStyled<ThemeType>;

export type { StyledComponent };
