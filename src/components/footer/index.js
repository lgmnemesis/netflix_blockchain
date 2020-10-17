import React from 'react';
import {
 Container,
 Row,
 Column,
 Link,
 Title,
 Text,
 Break
} from './styles/footer';

export default function Footer({children, ...restProps}) {
   return (
     <Container {...restProps}>
       {children}
       <Title>Questions? Contact us.</Title>
       <Break></Break>
       <Row>
        <Column>
          <Link href="#">FAQ</Link>
          <Link href="#">Investor Relations</Link>
          <Link href="#">Ways to Watch</Link>
          <Link href="#">Corporate Information</Link>
          <Link href="#">Netflix Originals</Link>
        </Column>

        <Column>
          <Link href="#">Help Center</Link>
          <Link href="#">Jobs</Link>
          <Link href="#">Term of Use</Link>
          <Link href="#">Contact Us</Link>
        </Column>

        <Column>
          <Link href="#">Account</Link>
          <Link href="#">Redeem Gift Cards</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Speed Test</Link>
        </Column>

        <Column>
          <Link href="#">Media Center</Link>
          <Link href="#">Buy Gift Cards</Link>
          <Link href="#">Cookie Preferences</Link>
          <Link href="#">Legal Notices</Link>
        </Column>
       </Row>
       <Break/>
       <Text>Netflix</Text>
     </Container>
   );
}
