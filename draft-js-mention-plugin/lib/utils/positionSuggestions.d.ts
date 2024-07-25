import { CSSProperties } from 'react';
export default function positionSuggestions({
  decoratorRect,
  popover,
  props,
}: {
  decoratorRect: ClientRect;
  popover: HTMLElement;
  props: {
    open: boolean;
    suggestions: Array<unknown>;
  };
}): CSSProperties;
export declare type PositionSuggestionsFn = typeof positionSuggestions;
