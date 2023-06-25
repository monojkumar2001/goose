import React from 'react'
import { Link } from "react-router-dom";
const WithdrawContentCard = ({img, title, dis1, dis2, dis3}) => {
  return (
    <div className='hero-card-item'>
     <div className="card-img">
        <img src={img} alt="" />
      </div>
      <h4 className="card-title">{title}</h4>
      <table>
        <tbody>
          <tr>
            <td>{dis1}</td>
            <td>
              <span id="total-invested">?</span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
            <div className="withdraw-btn d-flex gap-4">
            <button className="card-btn-item">{dis2}</button>
            <button className="card-btn-item">{dis3}</button>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WithdrawContentCard