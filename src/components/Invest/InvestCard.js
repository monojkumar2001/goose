import React from "react";
 import { Link } from "react-router-dom";
const InvestCard = ({ img, title1,title2, dis1, dis2, dis3, dis4, dis5 }) => {
  return (
    <div className="invest-wrapper">
      <div className="hero-card-item">
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <h4 className="card-title">{title1}</h4>
        <table>
          <tbody>
            <tr>
              <td>
              <input class="form-control"   type="number" placeholder="1000"/>
              </td>
              <td>
                <Link href="" className="card-btn-item ">{dis1}</Link>
              </td>
            </tr>
            <tr>            
              <td>
                 <input class="form-control"  type="number"  placeholder="1000"/>
              </td>
              <td>
              <Link href="" className="card-btn-item ">{dis2}</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="invest-card hero-card-item">
        <h4 className="card-title">{title2}</h4>
        <table>
          <tbody>
            <tr>
              <td>{dis3}</td>
              <td>
               <div className="withraw-wrapper">
               <Link href="" className="card-btn-item">{dis4}</Link>
               <Link href="" className="card-btn-item">{dis5}</Link>
               </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvestCard;
