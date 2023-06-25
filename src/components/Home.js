import React, { useState } from "react";
import ContractCard from "./contracts/ContractCard";
import InvestorCard from "./Investor/InvestorCard";
import InvestCard from "./Invest/InvestCard";
import WithdrawContentCard from "./withraw/WithdrawContentCard";
import WithdrawCard from "./withraw/WithdrawCard";

import BarChart from "./barChart/BarChart";
import { UserData } from "./barChart/Data";


function Home() {
  const [userData, setUserData]=useState({
    labels: UserData.map((data)=>data.week),
    datasets:[{
      label:"Withdraw",
      data: UserData.map((data)=>data.userPrice),
      backgroundColor:["#A83FC6"],
    }]
  })
  return (
    <React.Fragment>
<div className="home">
        {/* ============== Hero Section =================== */}
        <section className="hero cpb-6">
        <div className="container">
          <div className="hero-wrapper">
            <h1 className="hero-title">Dashboard</h1>
            <div className="row cpt-7">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                <ContractCard
                  img="/images/contract-img.svg"
                  title="Contract"
                  dis1="Total investments:"
                  dis2="Total profits:"
                  dis3="Total investors:"
                />
              </div> 
              <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                <InvestorCard
                  img="/images/investor-img.svg"
                  title="Investor"
                  dis1="Your investments:"
                  dis2="Your profits:"
                  dis3="Your available profits:"
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                <InvestCard
                  img="/images/invest-img.svg"
                  title1="Invest"
                  title2="Withdraw"
                  dis1="Approve Send"
                  dis2="Invest"
                  dis3="Withdraw profits:"
                  dis4="Withdraw"
                  dis5="Compound"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============== Withdraw Initial Capital ================ */}
      <section className="withraw">
        <div className="container">
          <div className="withraw-wrapper-con">
            <div className="wihraw-header-content cpb-7">
              <div className="withraw-header-title">
                <h1 className="hero-title withraw-title cpb-7">
                  Green Figures Investments
                </h1>
              </div>
              <div className="withraw-header-title">
                <h1 className="hero-title withraw-title">
                  Withdraw Initial Capital
                </h1>
              </div>
            </div>
            <div className="witdraw-content cpb-6 ">
              <WithdrawContentCard 
              img="/images/investor-img.svg"
              title='Withdraw Initial'
              dis1='Available'
              dis2='Request Withdraw'
              dis3='chancel'
              />
             
            </div>
            <div className="withdraw-card-items row cpb-6">
                <WithdrawCard/>
              </div>
          </div>
        </div>
      </section>
      {/* ===================== Withdraw Chart =========================== */}
      <section className="chart-box cpb-6">
        <div className="container">
          <div className="chart-box-wrapper">

            <BarChart chartData={userData}/>
          </div>
        </div>
      </section>
</div>
    </React.Fragment>
  );
}

export default Home;


