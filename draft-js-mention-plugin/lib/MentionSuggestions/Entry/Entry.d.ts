import { ComponentType, MouseEvent, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { MentionData } from 'draft-js-mention-plugin/src';
import { Theme } from '../../theme';
export interface EntryComponentProps {
  className?: string;
  onMouseDown(event: MouseEvent): void;
  onMouseUp(event: MouseEvent): void;
  onMouseEnter(event: MouseEvent): void;
  role: string;
  id: string;
  'aria-selected'?: string | null;
  theme?: Theme;
  mention: MentionData;
  isFocused: boolean;
  searchValue?: string;
}
interface EntryProps {
  mention: MentionData;
  entryComponent: ComponentType<EntryComponentProps>;
  onMentionSelect(mention: MentionData): void;
  theme: Theme;
  id: string;
  index: number;
  onMentionFocus(index: number): void;
  isFocused: boolean;
  searchValue?: string;
}
declare const Entry: {
  (props: EntryProps): ReactElement;
  propTypes: {
    entryComponent: PropTypes.Validator<any>;
    searchValue: PropTypes.Requireable<string>;
    onMentionSelect: PropTypes.Requireable<(...args: any[]) => any>;
  };
};
export default Entry;
