declare type TagPropsBase = {
    label: string;
    size?: 'sm' | 'md';
    active?: boolean;
    removable?: boolean;
    onRemove?: () => void;
};
declare type TagPropsWithImage = TagPropsBase & {
    icon?: never;
    image: string | boolean;
};
declare type TagPropsWithIcon = TagPropsBase & {
    icon?: boolean;
    image?: never;
};
declare type TagProps = TagPropsWithIcon | TagPropsWithImage;
declare type StyledTagProps = TagPropsBase & {
    image: string | boolean;
    icon?: boolean;
};
declare const Tag: ({ size, label, active, removable, onRemove, image, icon, ...args }: TagProps) => JSX.Element;

export { StyledTagProps, Tag, TagProps, TagPropsBase };
