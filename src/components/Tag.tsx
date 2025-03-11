import {ComponentProps, useEffect} from 'react';
import styled, {css} from 'styled-components';

import useTag from '../hooks/useTag';
import em from '../styles/utils/em';
import rem from '../styles/utils/rem';

const FONT_SIZE = 18;
const TagEl = styled.button<{$isActive?: boolean}>`
   font-size: ${em(FONT_SIZE)};
   font-weight: 700;
   border-radius: ${rem(16)};
   padding: ${em(8, FONT_SIZE)} ${em(16, FONT_SIZE)};
   ${props =>
      props.$isActive
         ? css`
              background: ${props => props.theme.palette.primary.color};
              color: ${props => props.theme.palette.background.color};
           `
         : css`
              background-color: ${props =>
                 props.theme.palette.background.light[1]};
           `}
`;

interface TagProps extends ComponentProps<'button'> {
   name: string;
   groupId?: string;
   tabGroupId?: string;
   defaultActive?: boolean;
}
const Tag = ({
   name,
   groupId = 'global',
   tabGroupId,
   defaultActive,
   ...props
}: TagProps) => {
   const {tags, handleClick, register} = useTag();
   const actualGroupId = tabGroupId ?? groupId;

   const isActive = tags.get(actualGroupId)?.get(name)?.isActive;

   useEffect(
      () => register(name, actualGroupId, defaultActive, !!tabGroupId),
      [register, name, actualGroupId, defaultActive, tabGroupId],
   );

   return (
      <TagEl
         type='button'
         onClick={e => {
            handleClick(name, actualGroupId);
            props.onClick?.(e);
         }}
         $isActive={isActive}
         {...props}
      >
         {name}
      </TagEl>
   );
};
export default Tag;
