import styled from 'styled-components';

import Container from '../components/core/Container';
import Section from '../components/core/Section';
import Button from '../components/form/Button';
import useURLState from '../hooks/useURLState';
import em from '../styles/utils/em';
import rem from '../styles/utils/rem';

const Box = styled.div`
   display: inline-flex;
   flex-direction: column;
   align-items: center;
   gap: ${em(16)};
   padding: ${em(16)};
   border-radius: ${em(8)};
   background-color: ${props => props.theme.palette.background.light[0]};
`;

const Count = styled.div`
   font-size: ${em(24)};
   font-weight: 700;
`;

const FlexContainer = styled.div`
   display: flex;
   align-items: center;
   gap: ${em(8)};
`;

const CountButton = styled(Button)`
   border-radius: ${rem(8)};
   padding: ${em(10)} ${em(20)};
   min-width: ${em(200)};
`;

const Home = () => {
   const [count, setCount] = useURLState<number>('count', 0);

   return (
      <Section>
         <Container className='home'>
            <Box>
               <Count>{count}</Count>
               <FlexContainer>
                  <CountButton onClick={() => setCount(count + 1)}>
                     Increment
                  </CountButton>
                  <CountButton onClick={() => setCount(count - 1)}>
                     Decrement
                  </CountButton>
               </FlexContainer>
            </Box>
         </Container>
      </Section>
   );
};
export default Home;
