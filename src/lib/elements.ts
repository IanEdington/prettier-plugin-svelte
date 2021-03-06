export type TagName = keyof HTMLElementTagNameMap | 'svg';

// @see http://xahlee.info/js/html5_non-closing_tag.html
export const selfClosingTags = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];

// https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#Elements
export const inlineElements: TagName[] = [
  'a',
  'abbr',
  'audio',
  'b',
  'bdi',
  'bdo',
  'br',
  'button',
  'canvas',
  'cite',
  'code',
  'data',
  'datalist',
  'del',
  'dfn',
  'em',
  'embed',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'map',
  'mark',
  'meter',
  'noscript',
  'object',
  'output',
  'picture',
  'progress',
  'q',
  'ruby',
  's',
  'samp',
  'select',
  'slot',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'svg',
  'template',
  'textarea',
  'time',
  'u',
  'var',
  'video',
  'wbr'
];

/**
 * HTML attributes that we may safely reformat (trim whitespace, add or remove newlines)
 */
export const formattableAttributes = [
  'class'
]
