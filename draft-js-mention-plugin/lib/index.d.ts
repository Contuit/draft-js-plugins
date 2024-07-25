import { Map } from 'immutable';
import { ComponentType } from 'react';
import { EditorState } from 'draft-js';
import { EditorPlugin } from 'draft-js-plugins-editor';
import { SubMentionComponentProps } from './Mention';
import MentionSuggestions, {
  MentionSuggestionsPubProps,
} from './MentionSuggestions/MentionSuggestions';
import addMention from './modifiers/addMention';
import { PositionSuggestionsFn } from './utils/positionSuggestions';
import { defaultTheme, Theme } from './theme';
import { EntryComponentProps } from './MentionSuggestions/Entry/Entry';
export { default as MentionSuggestions } from './MentionSuggestions/MentionSuggestions';
export { defaultTheme };
export { addMention };
export interface MentionData {
  link?: string;
  avatar?: string;
  name: string;
  id: null | string | number;
}
export interface MentionPluginStore {
  setEditorState?(editorState: EditorState): void;
  getEditorState?(): EditorState;
  getPortalClientRect(offsetKey: string): ClientRect;
  getAllSearches(): Map<string, string>;
  isEscaped(offsetKey: string): boolean;
  escapeSearch(offsetKey: string): void;
  resetEscapedSearch(): void;
  register(offsetKey: string): void;
  updatePortalClientRect(offsetKey: string, funct: ClientRectFunction): void;
  unregister(offsetKey: string): void;
  getIsOpened(): boolean;
  setIsOpened(nextIsOpened: boolean): void;
}
export interface MentionPluginConfig {
  mentionPrefix?: string;
  theme?: Theme;
  positionSuggestions?: PositionSuggestionsFn;
  mentionComponent?: ComponentType<SubMentionComponentProps>;
  mentionSuggestionsComponent?: ComponentType;
  entityMutability?: 'SEGMENTED' | 'IMMUTABLE' | 'MUTABLE';
  mentionTrigger?: string;
  mentionRegExp?: string;
  supportWhitespace?: boolean;
  entryComponent?: ComponentType<EntryComponentProps>;
}
interface ClientRectFunction {
  (): ClientRect;
}
declare const _default: (
  config?: MentionPluginConfig
) => EditorPlugin & {
  MentionSuggestions: ComponentType<MentionSuggestionsPubProps>;
};
export default _default;
export declare const defaultSuggestionsFilter: (
  searchValue: string,
  suggestions: MentionData[]
) => MentionData[];
