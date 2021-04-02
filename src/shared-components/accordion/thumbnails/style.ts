import styled from '@emotion/styled';
import { TYPOGRAPHY_STYLE } from 'src/shared-components/typography';
import { SPACER } from 'src/constants';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${SPACER.large};
`;

const thumbnailBase = `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  width: 1rem;
`;

const ImageContainer = styled.div`
  ${thumbnailBase}
  overflow: hidden;
  height: 1.5rem;
  width: 1rem;

  &:not(:last-child) {
    margin-right: 4px;
  }
`;

const ThumbnailImage = styled.img`
  min-height: 1.5rem;
  min-width: 1rem;
  object-fit: cover;
`;

const MultiplesContainer = styled.div`
  ${thumbnailBase}
  background-color: ${({ theme }) => theme.COLORS.defaultBorder};
`;

const MultiplesText = styled.div`
  ${({ theme }) => TYPOGRAPHY_STYLE.label(theme)}
  font-size: 10px;
`;

export default {
  Container,
  ImageContainer,
  MultiplesContainer,
  MultiplesText,
  thumbnailBase,
  ThumbnailImage,
};
