import { ContentBlock } from 'draft-js';
interface FindWithRegexCb {
  (start: number, end: number): void;
}
declare const _default: (
  trigger: string,
  supportWhiteSpace: boolean,
  regExp: string
) => (contentBlock: ContentBlock, callback: FindWithRegexCb) => void;
export default _default;
