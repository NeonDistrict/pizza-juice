import React from 'react';

import { RelativeAvatar, RemoveWrapper, TagStyles } from './styles';

const BaseIcon = ({ d }) => (
  <svg
    viewBox="0 0 16 16"
    width="1rem"
    height="1rem"
    focusable="false"
    aria-hidden="true"
  >
    <path fill="currentColor" d={d} />
  </svg>
);

const ArchiveIcon = () => (
  <BaseIcon d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
);

const CloseIcon = () => (
  <BaseIcon d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
);

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
  onRemove
}: Pick<TagProps, 'active' | 'onRemove'>) => (
  <RemoveWrapper active={active} onClick={onRemove}>
    <CloseIcon />
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
          size={24}
        />
      )}
      {icon && <ArchiveIcon />}
      {label}
      {removable && <Remove active={active} onRemove={onRemove} />}
    </TagStyles>
  );
};

export default Tag;
