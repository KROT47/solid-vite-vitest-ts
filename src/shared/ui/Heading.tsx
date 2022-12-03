import { Heading as HeadingBase, HeadingProps } from '@hope-ui/core';
import { mergeProps, ParentProps } from 'solid-js';

const defaultProps = { level: 2, size: '5xl' };

export function Heading(props: ParentProps<HeadingProps>): JSXElement {
  const mergedProps = mergeProps(defaultProps, props);

  return <HeadingBase {...mergedProps} />;
}
