import {ComponentProps} from 'react';
import styled, {keyframes} from 'styled-components';

import em from '../../styles/utils/em';

const Rotation = keyframes`
   0% {
      transform: rotate(0deg);
   }
   100% {
      transform: rotate(360deg);
   }
`;
const SpinnerEl = styled.i`
   flex: 0 0 ${em(48)};
   width: ${em(48)};
   height: ${em(48)};
   border: ${em(5)} solid ${props => props.theme.palette.text.color};
   border-bottom-color: transparent;
   border-radius: 50%;
   animation: ${Rotation} 1s linear infinite;
`;

const Spinner = ({...props}: ComponentProps<'i'>) => <SpinnerEl {...props} />;
export default Spinner;
