import React from 'react';
import { RelativeAvatar, RemoveIcon, RemoveWrapper, TagStyles } from './styles';
import { BsFillArchiveFill } from 'react-icons/bs';

export const iconVariant = {
  archive: BsFillArchiveFill
};

export type TagPropsBase = {
  label: string;
  size?: 'sm' | 'md';
  active?: boolean;
  removable?: boolean;
  onRemove?: () => void;
};

type TagPropsWithImage = TagPropsBase & {
  icon?: never;
  image: string | boolean;
};

type TagPropsWithIcon = TagPropsBase & {
  icon: keyof typeof iconVariant;
  image?: never;
};

export type TagProps = TagPropsWithIcon | TagPropsWithImage;

export type StyledTagProps = TagPropsBase & {
  image: string | boolean;
  icon: keyof typeof iconVariant;
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
  size = 'md',
  label,
  active = false,
  removable,
  onRemove,
  image,
  icon,
  ...args
}: TagProps) => {
  if (image && icon) {
    throw new Error('Tag cannot have both image and icon');
  }

  return (
    <TagStyles
      active={active}
      removable={removable}
      image={image}
      icon={icon}
      {...args}
    >
      {image && (
        <RelativeAvatar
          image={typeof image === 'string' ? image : undefined}
          size="xss"
        />
      )}
      {icon &&
        React.createElement(iconVariant[icon], {
          size: 14
        })}
      {label}
      {removable && <Remove active={active} onRemove={onRemove} />}
    </TagStyles>
  );
};

export default Tag;
