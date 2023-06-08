import React from "react";
import ContractCard from "./contract/ContractCard";
import InvestorCard from "./Investor/InvestorCard";
import InvestCard from "./Invest/InvestCard";
function Home() {
  return (
    <React.Fragment>
      <section className="hero cpb-6">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-title">
              <h1>Dashboard</h1>
            </div>
            <div className="row cpt-7">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <ContractCard
                  img="/images/contract-img.svg"
                  title="Contract"
                  dis1="Invested:"
                  dis2="Inestors:"
                  dis3="Total Profit:"
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <InvestorCard
                  img="/images/investor-img.svg"
                  title="Investor"
                  dis1="Investor Balance:"
                  dis2="Total Invested:"
                  dis3="Total Profit:"
                  dis4="Available Profits:"
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <InvestCard
                  img="/images/invest-img.svg"
                  title1="Invest"
                  title2="Withdraw"
                  dis1="Approve Send"
                  dis2="Invest"
                  dis3="Withdraw profits:"
                  dis4='Withdraw'
                  dis5='Compound'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;

// const InvestData = [
//   {
//     id: 1,
//     img: "/images/contract-img.svg",
//     title: "Contract",
//     dis1: "Invested:",
//     dis2: "Inestors:",
//     dis3: "Total Profit:",
//   },
//   {
//     id: 1,
//     img: "/images/contract-img.svg",
//     title: "Contract",
//     dis1: "Invested:",
//     dis2: "Inestors:",
//     dis3: "Total Profit:",
//   },
//   {
//     id: 1,
//     img: "/images/contract-img.svg",
//     title: "Contract",
//     dis1: "Invested:",
//     dis2: "Inestors:",
//     dis3: "Total Profit:",
//   },
// ];
