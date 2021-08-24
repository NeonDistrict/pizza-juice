import React from 'react';
import { Button } from '../Button';
import { ButtonWrapper, Image, Info } from './styles';

export default function SelectLayout({
  layout = 'A',
  title,
  subtitle,
  images
}) {
  const layouts = {
    A: (
      <div className={`layout-${layout}`}>
        <Image src={images[0]} />
        <Info>
          <h1 className="title">{title}</h1>
          <hr className="divider" />
          <h2 className="subtitle">{subtitle}</h2>
        </Info>
      </div>
    ),
    B: (
      <div className={`layout-${layout}`}>
        <Image src={images[0]} />
        <Button label="ASSIGN" />
      </div>
    ),
    C: (
      <div className={`layout-${layout}`}>
        <Info>
          <h1 className="title">{title}</h1>
          <hr className="divider" />
          <h2 className="subtitle">{subtitle}</h2>
        </Info>
        <div className="images-row">
          {images.map((src, i) => (
            <Image src={src} key={i} />
          ))}
        </div>
        <ButtonWrapper>
          <Button label="EDIT" />
        </ButtonWrapper>
      </div>
    ),
    D: (
      <div className={`layout-${layout}`}>
        <div>
          <div>
            <h1 className="title">{title}</h1>
            <hr className="divider" />
          </div>
        </div>
        <div>
          <Image src={images[0]} />
        </div>
        <div>
          <h2 className="subtitle">{subtitle}</h2>
        </div>
      </div>
    )
  };

  return layouts[layout];
}
