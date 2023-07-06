import * as React from 'react';

import { TIconComponentType } from '@interfaces';

export interface IIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: TIconComponentType;
  iconClassName?: string;
  titleId?: string;
}
