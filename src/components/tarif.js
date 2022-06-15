import React from "react";
import "./tarif.css";

export default class Tarif extends React.Component {
  render() {
    const { name, price, speed } = this.props;
    const theme = this.props.theme;
    return (
      <div className="card">
        <div className="card-body">
          <div className={`cads-items name ${theme.outer}`}>
            Безлимитный {name}
          </div>
          <div className={`cads-items price ${theme.inner}`}>
            руб {price} /мес
          </div>
          <div className={"cads-items speed"}>до {speed} Мбит/сек</div>
          <div className={"cads-items info"}>
            Объем включенного трафика не ограничен
          </div>
        </div>
      </div>
    );
  }
}
