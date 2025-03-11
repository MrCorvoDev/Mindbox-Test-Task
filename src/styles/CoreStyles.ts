import {css} from 'styled-components';

import layout from './theme/layout';
import typography from './theme/typography';
import dc from './utils/dc';
import fontSize from './utils/fontSize';
import lockPadding from './utils/lockPadding';
import maxWidth from './utils/maxWidth';
import md from './utils/md';
import rem from './utils/rem';

const headerHeight = dc(layout.header.pc, layout.header.mobile);
const headerStickyHeight = dc(
   layout.header.stickyPc,
   layout.header.stickyMobile,
);

const CoreStyles = css`
   :root {
      --headerH: ${headerHeight};
      --headerSH: ${headerStickyHeight};
   }

   :target {
      scroll-margin-top: var(--headerH);
   }

   :focus,
   :focus-visible {
      outline-color: ${props => props.theme.palette.text.color};
      outline-offset: ${rem(1)};
   }

   body {
      background: ${props => props.theme.palette.background.color};
      color: ${props => props.theme.palette.text.color};

      ${fontSize(typography.sizes.pc, typography.sizes.mobile)}
      font-family: ${typography.fonts.family1};

      min-width: ${rem(layout.minWidth)};
      ${lockPadding()}
   }

   #app {
      width: 100%;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
   }

   #content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
   }

   .container {
      ${maxWidth(layout.containers[1], layout.designWidth)}
      margin: 0 auto;
      width: 100%;
      @media (${md(layout.breakpoints[1])}) {
         max-width: ${rem(layout.containers[2])};
      }
      @media (${md(layout.breakpoints[2])}) {
         max-width: ${rem(layout.containers[3])};
      }
      @media (${md(layout.breakpoints[3])}) {
         max-width: none;
         padding-left: ${rem(12)};
         padding-right: ${rem(12)};
      }
   }

   // *:not(.keep-anim) (Включить при надобности)
   body.resize * {
      animation: none !important;
      transition: none !important;
   }
`;
export default CoreStyles;
