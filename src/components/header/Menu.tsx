import Color from 'color';
import styled from 'styled-components';

import useHeader from '../../hooks/useHeader';
import layout from '../../styles/theme/layout';
import lockPadding from '../../styles/utils/lockPadding';
import md from '../../styles/utils/md';
import rem from '../../styles/utils/rem';
import Hamburger from './Hamburger';
import Nav from './Nav';

interface MenuProps {
   $isMenuOpened: boolean;
}
const MenuEl = styled.div<MenuProps>`
   --background: ${props =>
      Color(props.theme.palette.background.light[0]).alpha(0.7).hexa()};
   --blur: ${rem(15)};
   display: flex;
   align-items: center;
   height: 100%;
   position: static;
   z-index: auto;
   &:before {
      @media (${md(layout.breakpoints[3])}) {
         content: '';
         position: fixed;
         ${lockPadding()}
         width: 100%;
         height: 100%;
         top: 0;
         left: 0;
         background: var(--background);
         backdrop-filter: blur(var(--blur));
         z-index: 1;
         visibility: ${props => (props.$isMenuOpened ? 'visible' : 'hidden')};
         transform: ${props =>
            props.$isMenuOpened ? 'translate(0, 0)' : 'translate(0, -100%)'};
         transition: 0.3s;
      }
   }
`;

const Menu = () => {
   const {isMenuOpened} = useHeader();

   return (
      <MenuEl $isMenuOpened={isMenuOpened}>
         <Hamburger />
         <Nav />
      </MenuEl>
   );
};
export default Menu;
