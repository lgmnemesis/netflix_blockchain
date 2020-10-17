import React from 'react';
import jumboData from '../fixtures/jumbo';
import { Jumbotron } from '../components'

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => {
        return (
          <Jumbotron 
            key={item.id}
            item={item}
            direction={item.direction}>
          </Jumbotron>
        )
      })}
    </Jumbotron.Container>
  );
}