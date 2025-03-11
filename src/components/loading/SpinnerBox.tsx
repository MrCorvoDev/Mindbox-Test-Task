import {ComponentProps} from 'react';
import styled from 'styled-components';

import em from '../../styles/utils/em';
import Spinner from './Spinner';

const Section = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex: 1 1 auto;
   padding: ${em(24)};
`;

const SpinnerBox = ({...props}: ComponentProps<'div'>) => (
   <Section {...props}>
      <Spinner />
   </Section>
);
export default SpinnerBox;
