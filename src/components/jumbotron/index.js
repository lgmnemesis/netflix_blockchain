import React from 'react';
import {
  Container,
  Item,
  Inner,
  Title,
  SubTitle,
  Image,
  Pane
} from './styles/jumbotron'

export default function Jumbotron({children, direction = 'row', item, ...restProps}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>
        {children}
        <Pane>
          <Title>{item.title}</Title>
          <SubTitle>{item.subTitle}</SubTitle>
        </Pane>
        <Pane>
          <Image src={item.image} alt={item.alt}></Image>
        </Pane>
      </Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
  return <Container {...restProps}>
    {children}
  </Container>;
}