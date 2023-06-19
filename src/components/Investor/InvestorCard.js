import React from "react";

const InvestorCard = ({ img, title, dis1, dis2, dis3, dis4 }) => {
  return (
    <div className="hero-card-item">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <h4 className="card-title">{title}</h4>
      <table>
        <tbody>
          <tr>
            <td>{dis1}</td>
            <td>
              <span>?</span>
            </td>
          </tr>
          <tr>
            <td>{dis2}</td>
            <td>
              <span >?</span>
            </td>
          </tr>
          <tr>
            <td>{dis3}</td>
            <td>
              <span>?</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvestorCard;
