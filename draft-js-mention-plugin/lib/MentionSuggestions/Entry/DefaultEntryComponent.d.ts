import { MentionData } from 'draft-js-mention-plugin/src';
import { Theme } from 'draft-js-mention-plugin/src/theme';
import { ReactElement } from 'react';
interface DefaultEntryComponentProps {
  mention: MentionData;
  theme?: Theme;
  isFocused: boolean;
  searchValue?: string;
}
export default function DefaultEntryComponent(
  props: DefaultEntryComponentProps
): ReactElement;
export {};
