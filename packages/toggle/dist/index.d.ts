import { ToggleProps as ToggleProps$1 } from '@radix-ui/react-toggle';

declare type ToggleProps = {
    /**
     *
     */
    name?: string;
    /**
     *
     * @default "md"
     */
    size?: 'xs' | 'sm' | 'md' | 'lg';
} & ToggleProps$1;
declare const Toggle: ({ name, ...props }: ToggleProps) => JSX.Element;

export { Toggle, ToggleProps };
