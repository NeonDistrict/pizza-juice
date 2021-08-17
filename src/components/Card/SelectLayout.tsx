import { Grid, Image } from "semantic-ui-react";
import { Button } from "../Button";

export default function SelectLayout({
  layout = "A",
  title,
  subtitle,
  image,
  images = []
}) {
  const layouts = {
    A: (
      <Grid className={`layout-${layout}`}>
        <Grid.Column verticalAlign="middle" width={5}>
          <Image src={image} fluid />
        </Grid.Column>
        <Grid.Column verticalAlign="middle" width={11}>
          <h1 className="title">{title}</h1>
          <hr className="divider" />
          <h2 className="subtitle">{subtitle}</h2>
        </Grid.Column>
      </Grid>
    ),
    B: (
      <Grid className={`layout-${layout}`}>
        <Grid.Column verticalAlign="middle">
          <Grid.Row verticalAlign="middle">
            <Image size="tiny" src={image} fluid />
          </Grid.Row>
          <Grid.Row>
            <Button label="ASSIGN" buttonType="primary" size="medium" />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    ),
    C: (
      <Grid className={`layout-${layout}`}>
        <Grid.Row verticalAlign="middle" centered>
          <Grid.Column computer={3} mobile={16}>
            <h1 className="title">{title}</h1>
            <hr className="divider" />
            <h2 className="subtitle">{subtitle}</h2>
          </Grid.Column>
          <Grid.Column computer={10} mobile={16}>
            <Grid.Row className="images-row">
              {images.map((src, i) => (
                <Image size="small" src={src} key={i} />
              ))}
            </Grid.Row>
          </Grid.Column>
          <Grid.Column computer={3} mobile={16} verticalAlign="middle">
            <Button buttonType="primary" size="medium" label="EDIT" className="button" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ),
    D: (
      <Grid className={`layout-${layout}`}>
        <Grid.Row>
          <Grid.Column>
            <h1 className="title">{title}</h1>
            <hr className="divider" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Image size="small" src={image} />
        </Grid.Row>
        <Grid.Row>
          <h2 className="subtitle">{subtitle}</h2>
        </Grid.Row>
      </Grid>
    )
  };

  return layouts[layout];
}
