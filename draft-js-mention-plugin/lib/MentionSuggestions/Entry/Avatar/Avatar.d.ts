import { MentionData } from 'draft-js-mention-plugin/src';
import { Theme } from 'draft-js-mention-plugin/src/theme';
import { ReactElement } from 'react';
interface AvatarProps {
  theme?: Theme;
  mention: MentionData;
}
export default function Avatar({
  mention,
  theme,
}: AvatarProps): ReactElement | null;
export {};
