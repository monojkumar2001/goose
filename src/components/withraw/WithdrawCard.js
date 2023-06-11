import React from 'react';

const WithdrawCard = () => {
    
const withdrawData=[
    {
        id:1,
        title:"Last Week's Profits",
        price:"$5999.20"
    },
    {
        id:2,
        title:"Last Week's Profits",
        price:"$5999.20"
    },
    {
        id:3,
        title:"Last Week's Profits",
        price:"$5999.20"
    },
]
  return (
   <>
   {
    withdrawData.map((item)=>{
        return(
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="withdraw-card" key={item.id}>
                    <p>{item.title}</p>
                    <h3>{item.price}</h3>
                </div>
            </div>
        )

    })
   }
   </>
  )
}

export default WithdrawCard;
