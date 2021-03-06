import React from "react";

class Card extends React.Component {
  render() {
    let paletteColor;
    if (this.props.state.palette === 1) {
      paletteColor = "palette0";
    } else if (this.props.state.palette === 2) {
      paletteColor = "palette1";
    } else if (this.props.state.palette === 3) {
      paletteColor = "palette2";
    } else {
      paletteColor = "palette3";
    }
    return (
      <article className={`preview__card js-palette ${paletteColor}`}>
        <div className="preview__card__title">
          <div className="preview__card__title__inner txt-fter">
            <h2 className="preview__card__title__name js-name js-preview-name">
              {this.props.state.name || "Nombre Apellido"}
            </h2>
            <h3 className="preview__card__title__job txt-md txt-light js-job js-preview-job">
              {this.props.state.job || "Front-end developer"}
            </h3>
          </div>
        </div>
        <div className="preview__card__box js__profile-image ">
          <div
            className="preview__card__box__img"
            style={{ backgroundImage: `url(${this.props.state.photo})` }}
          ></div>
        </div>
        <nav className="preview__card__sm" role="navigation">
          <ul className="preview__card__sm__list">
            <li className="preview__card__sm__list__icon">
              <a
                href={this.props.state.phone} // Esto lo hemos añadido para que no de error
                className="preview__card__sm__list__icon__link mobile js-preview-phone"
                alt="Telephone"
                target="_blank"
                title="Teléfono"
                rel="noreferrer"
              >
                <i className="fas fa-mobile-alt"></i>
              </a>
            </li>
            <li className="preview__card__sm__list__icon">
              <a
                href={this.props.state.email}
                className="preview__card__sm__list__icon__link email js-preview-email"
                alt="Email"
                target="_blank"
                title="Email"
                rel="noreferrer"
              >
                <i className="far fa-envelope"></i>
              </a>
            </li>

            <li className="preview__card__sm__list__icon">
              <a
                href={`https://www.linkedin.com/in/${this.props.state.linkedin}`}
                className="js-preview-linkedin preview__card__sm__list__icon__link linkedin"
                alt="Linkedin"
                title="Linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>

            <li className="preview__card__sm__list__icon">
              <a
                href={`https://www.github.com/${this.props.state.github}`} //
                className=" js-preview-github preview__card__sm__list__icon__link github"
                alt="Github"
                title="Github"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-alt"></i>
              </a>
            </li>
          </ul>
        </nav>
      </article>
    );
  }
}

export default Card;
