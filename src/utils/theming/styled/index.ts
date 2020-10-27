import { ThemeType } from 'src/constants/themes/types';

/**
 * We rely on TypeScript/Rollup aliasing in order to import from this file
 * when using the absolute path, e.g. import styled from '@emotion/styled'
 *
 * As such for this one import we need to use relative imports
 */
import styled, {
  CreateStyled,
  StyledComponent,
} from '../../../../node_modules/@emotion/styled';

export default styled as CreateStyled<ThemeType>;

export type { StyledComponent };
