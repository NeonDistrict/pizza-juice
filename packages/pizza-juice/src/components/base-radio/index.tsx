import { styled } from '../../system';

import * as RadioGroupBase from '@radix-ui/react-radio-group';
import type * as BaseRadioProps from '@radix-ui/react-radio-group';

export const BaseRadioGroup = styled(RadioGroupBase.Root, {});

export const BaseRadioItem = styled(RadioGroupBase.Item, {});

export type { BaseRadioProps };
