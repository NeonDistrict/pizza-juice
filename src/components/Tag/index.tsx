import React from 'react';
import { useTheme } from 'styled-components';
import { RelativeAvatar, RemoveIcon, RemoveWrapper, TagStyles } from './styles';
import { BsFillArchiveFill } from 'react-icons/bs';

export const iconVariant = {
  archive: BsFillArchiveFill
};

export type TagProps = {
  label: string;
  size: 'sm' | 'md';
  left?:
    | { type: 'image'; src: string }
    | { type: 'icon'; icon: keyof typeof iconVariant };
  active?: boolean;
  removable?: boolean;
  onRemove?: () => void;
};

const Remove = ({
  active,
  onRemove
}: Pick<TagProps, 'active' | 'onRemove'>) => (
  <RemoveWrapper active={active} onClick={onRemove}>
    <RemoveIcon />
  </RemoveWrapper>
);

const Tag = ({
  label,
  active = false,
  removable,
  left,
  onRemove,
  ...args
}: TagProps) => {
  const theme = useTheme();
  return (
    <TagStyles active={active} removable={removable} left={left} {...args}>
      {left?.type === 'image' && <RelativeAvatar image={left.src} size="xss" />}
      {left?.type === 'icon' &&
        React.createElement(iconVariant[left?.icon], {
          color: active ? theme.colors.grey['300'] : theme.colors.grey['400'],
          size: 14
        })}
      {label}
      {removable && <Remove active={active} onRemove={onRemove} />}
    </TagStyles>
  );
};

export default Tag;
