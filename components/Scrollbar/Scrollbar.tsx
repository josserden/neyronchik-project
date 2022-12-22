import { FC } from 'react';
import { ScrollbarProps } from './Scrollbar.props';
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from './Scrollbar.styled';

export const Scrollbar: FC<ScrollbarProps> = ({
  children,
  scrollbarSize,
  bgColor,

  ...props
}) => {
  return (
    <ScrollAreaRoot {...props}>
      <ScrollAreaViewport>{children}</ScrollAreaViewport>

      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb b />
      </ScrollAreaScrollbar>

      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>

      <ScrollAreaCorner />
    </ScrollAreaRoot>
  );
};
