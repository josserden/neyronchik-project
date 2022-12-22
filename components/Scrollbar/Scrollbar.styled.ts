import styled from '@emotion/styled';
import * as ScrollArea from '@radix-ui/react-scroll-area';

export const ScrollAreaRoot = styled(ScrollArea.Root)`
  height: 100px;
  overflow: hidden;
  background-color: inherit;
  /* --scrollbar-size: 8px; */
  --scrollbar-size: ${({ scrollbarSize }: any) =>
    !scrollbarSize ? '8px' : scrollbarSize};
`;

export const ScrollAreaViewport = styled(ScrollArea.Viewport)`
  width: 100%;
  height: 100%;
`;

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar)`
  display: flex;
  flex-direction: ${props =>
    props['orientation'] !== 'vertical' ? 'column' : 'row'};
  width: ${props =>
    props['orientation'] === 'vertical' ? 'var(--scrollbar-size)' : '100%'};
  height: ${props =>
    props['orientation'] === 'horizontal' ? 'var(--scrollbar-size)' : '100%'};
  user-select: none;
  touch-action: none;
  padding: 2px;
  background-color: #94a3b8;
  transition: background-color 160ms ease-out;

  &:hover {
    background-color: #64748b;
  }
`;

export const ScrollAreaThumb = styled(ScrollArea.Thumb)`
  flex: 1;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#1e3a8a')};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`;

export const ScrollAreaCorner = styled(ScrollArea.Corner)`
  background-color: #1e3a8a;
`;

/*
{
  [`${ScrollArea.Scrollbar}:([data-orientation='vertical'])`]: {
    width: 'var(--scrollbar-size)',
  },
  [`${ScrollArea.Scrollbar}:([data-orientation='horizontal'])`]: {
    height: 'var(--scrollbar-size)',
    flexDirection: 'column',
  },
}
*/
