import { Global } from '@emotion/react';
import React from 'react';

import { brandStyles, resetStyles } from './style';

export const ResetStyles: React.FC = () => <Global styles={resetStyles} />;
export const BrandStyles: React.FC = () => <Global styles={brandStyles} />;
