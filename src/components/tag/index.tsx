import React from 'react';

import { ArchiveIcon, CloseIcon } from './icon';

import { RelativeAvatar, RemoveWrapper, TagStyles } from './styles';

export type TagPropsBase = {
  /**
   *
   */
  label: string;
  /**
   *
   */
  size?: 'sm' | 'md';
  /**
   *
   */
  active?: boolean;
  /**
   *
   */
  removable?: boolean;
  /**
   *
   */
  onRemove?: () => void;
};

type TagPropsWithImage = TagPropsBase & {
  icon?: never;
  image: string;
};

type TagPropsWithIcon = TagPropsBase & {
  icon?: boolean;
  image?: never;
};

export type TagProps = TagPropsWithIcon | TagPropsWithImage;

export type StyledTagProps = TagPropsBase & {
  image: string | boolean;
  icon?: boolean;
};

const Remove = ({
  active,
  onRemove,
}: Pick<TagProps, 'active' | 'onRemove'>) => (
  <RemoveWrapper active={active} onClick={onRemove}>
    <CloseIcon />
  </RemoveWrapper>
);

/**
 * Tag component
 *
 * @description for categorizing or markup.
 */
export const Tag = ({
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
      image={!!image}
      icon={!!icon}
      {...args}
    >
      {image && <RelativeAvatar src={image} alt="Description" />}
      {icon && <ArchiveIcon />}
      {label}
      {removable && <Remove active={active} onRemove={onRemove} />}
    </TagStyles>
  );
};
