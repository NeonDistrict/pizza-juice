import React from 'react';

import { RelativeAvatar, RemoveWrapper, TagStyles } from './styles';

import { ArchiveIcon } from './icon';

import { IoMdClose } from 'react-icons/io';

export type TagPropsBase = {
  /**
   *
   */
  label: string;
  /**
   * Style of the tag
   * @default 'grey'
   */
  style?: 'grey' | 'outlined';
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

const Remove = ({ onRemove }: Pick<TagProps, 'onRemove'>) => (
  <RemoveWrapper onClick={onRemove}>
    <IoMdClose size={12} color="white" />
  </RemoveWrapper>
);

/**
 * Tag component
 *
 * @description for categorizing or markup.
 */
export const Tag = ({
  label,
  style = 'grey',
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
      style={style}
      removable={removable}
      image={!!image}
      icon={!!icon}
      {...args}
    >
      {image && <RelativeAvatar src={image} alt="Description" size={24} />}
      {icon && <ArchiveIcon />}
      {label}
      {removable && <Remove onRemove={onRemove} />}
    </TagStyles>
  );
};
