import React from 'react';
import { useTheme } from 'styled-components';
import { RelativeAvatar, RemoveIcon, RemoveWrapper, TagStyles } from './styles';
import { BsFillArchiveFill } from 'react-icons/bs';

export const iconVariant = {
  archive: BsFillArchiveFill
};

type TagPropsBase = {
  label: string;
  size?: 'sm' | 'md';
  active?: boolean;
  removable?: boolean;
  onRemove?: () => void;
};

type TagPropsWithImage = TagPropsBase & {
  icon?: never;
  image: string;
};

type TagPropsWithIcon = TagPropsBase & {
  image?: never;
  icon: keyof typeof iconVariant;
};

export type TagProps = TagPropsWithIcon | TagPropsWithImage;

const Remove = ({
  active,
  onRemove
}: Pick<TagProps, 'active' | 'onRemove'>) => (
  <RemoveWrapper active={active} onClick={onRemove}>
    <RemoveIcon />
  </RemoveWrapper>
);

const Tag = ({
  size = 'md',
  label,
  active = false,
  removable,
  image,
  icon,
  onRemove,
  ...args
}: TagProps) => {
  image;

  const theme = useTheme();
  return (
    <TagStyles
      active={active}
      removable={removable}
      image={image}
      icon={icon}
      {...args}
    >
      {image && <RelativeAvatar image={image} size="xss" />}
      {icon &&
        React.createElement(iconVariant[icon], {
          color: active ? theme.colors.grey['300'] : theme.colors.grey['400'],
          size: 14
        })}
      {label}
      {removable && <Remove active={active} onRemove={onRemove} />}
    </TagStyles>
  );
};

export default Tag;
