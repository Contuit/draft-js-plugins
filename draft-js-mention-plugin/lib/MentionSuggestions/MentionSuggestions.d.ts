import { Component, ComponentType, KeyboardEvent, ReactElement } from 'react';
import PropTypes from 'prop-types';
import {
  DraftEditorCommand,
  DraftHandleValue,
  EditorState,
  SelectionState,
} from 'draft-js';
import { AriaProps } from 'draft-js-plugins-editor';
import { EntryComponentProps } from './Entry/Entry';
import { MentionData, MentionPluginStore } from '..';
import { PositionSuggestionsFn } from '../utils/positionSuggestions';
import { Theme } from '../theme';
export interface MentionSuggestionCallbacks {
  keyBindingFn?(event: KeyboardEvent): DraftEditorCommand | string | null;
  handleKeyCommand: undefined;
  handleReturn?(event: KeyboardEvent): DraftHandleValue;
  onChange?(editorState: EditorState): EditorState;
}
export interface MentionSuggestionsPubProps {
  suggestions: MentionData[];
  open: boolean;
  onOpenChange(open: boolean): void;
  onSearchChange(event: { value: string }): void;
  onAddMention(Mention: MentionData): void;
}
export interface MentionSuggestionsProps extends MentionSuggestionsPubProps {
  callbacks: MentionSuggestionCallbacks;
  store: MentionPluginStore;
  positionSuggestions: PositionSuggestionsFn;
  mentionTrigger: string;
  ariaProps: AriaProps;
  theme: Theme;
  mentionPrefix: string;
  entryComponent?: ComponentType<EntryComponentProps>;
  popoverComponent?: ReactElement;
  entityMutability: 'SEGMENTED' | 'IMMUTABLE' | 'MUTABLE';
}
export declare class MentionSuggestions extends Component<
  MentionSuggestionsProps
> {
  static propTypes: {
    open: PropTypes.Validator<boolean>;
    onOpenChange: PropTypes.Validator<(...args: any[]) => any>;
    entityMutability: PropTypes.Requireable<string>;
    entryComponent: PropTypes.Requireable<(...args: any[]) => any>;
    onAddMention: PropTypes.Requireable<(...args: any[]) => any>;
    suggestions: PropTypes.Validator<any[]>;
  };
  state: {
    focusedOptionIndex: number;
  };
  key: string;
  popover?: HTMLElement;
  activeOffsetKey?: string;
  lastSearchValue?: string;
  lastSelectionIsInsideWord?: Immutable.Iterable<string, boolean>;
  constructor(props: MentionSuggestionsProps);
  componentDidUpdate(): void;
  componentWillUnmount(): void;
  onEditorStateChange: (editorState: EditorState) => EditorState;
  onSearchChange: (
    editorState: EditorState,
    selection: SelectionState,
    activeOffsetKey: string | undefined,
    lastActiveOffsetKey: string | undefined
  ) => void;
  onDownArrow: (keyboardEvent: KeyboardEvent) => void;
  onTab: (keyboardEvent: KeyboardEvent) => void;
  onUpArrow: (keyboardEvent: KeyboardEvent) => void;
  onEscape: (keyboardEvent: KeyboardEvent) => void;
  onMentionSelect: (mention: MentionData | null) => void;
  onMentionFocus: (index: number) => void;
  commitSelection: () => DraftHandleValue;
  openDropdown: () => void;
  closeDropdown: () => void;
  render(): ReactElement | null;
}
export default MentionSuggestions;
