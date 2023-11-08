import React, { useState, useEffect } from 'react';
import { data } from "./data";
import './Faq.css'
function Faq() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);
  return (
    <div className="faq" style={{backgroundColor: '#E0E0E0', height: 'auto'}}>
      <h1>Frequently Asked Questions</h1>
      {data.map((data, index) => (
        <div key={index} className='hidden__part'>
          <h5>
            {index + 1}. {data.question}
          </h5>
          {Array.isArray(data.answer) ? (
            <>
            <ul>
              {data.answer.map((elem, index) => (
                <li key={index} className="">
                  <strong> {elem.heading}</strong>
                  {elem.points.map((list, index) => (
                    <p key={index}>{list}</p>
                  ))}
                </li>
              ))}
            </ul>
            <hr />
            </>
          ) : (
            <>
              <p>{data.answer}</p>
              <hr />
            </>
          )}
        </div>
      ))}
      <div className='hidden__part'>
        <h5>
          11. How do I use a cryptocurrency tax calculator?
        </h5>
        <p>
          In order to use a cryptocurrency tax calculator, you need to input
          information about your cryptocurrency transactions.
          <br></br>
          After you enter your information, the cryptocurrency tax calculator
          will calculate the gain or loss on every transaction.
          <br></br>
          This includes:
          <br></br>
          <br></br>
          1. The financial year you want to calculate your taxes for.
          <br></br>
          2. The country you want to calculate your taxes for.
          <br></br>
          3. The purchase price of the coin.
          <br></br>
          4. The sale price of the coin.
          <br></br>
          <br></br>
          You will get results that mention the following:
          <br></br>
          1. The total profit/loss you made
          <br></br>
          2. The tax you’re liable to pay
          <br></br>
          <br></br>
          Still have doubts?
          <span>
            <a href="#help"> Consult with a crypto taxation expert</a>
          </span>
        </p>
      </div>
      <hr className='hidden__part'/>
      <div className='hidden__part'>
        <h5>
          12. How do I calculate my crypto tax in Australia?
        </h5>
        <p>
          To calculate your crypto tax in Australia accurately, you need to
          consider both income tax and capital gains tax.
          <br></br>
          <br></br>
          <h5>Income Tax</h5>
          In Australia, when an individual (investor) sells, trades, spends,
          earns (salary, mining, interest) or gifts cryptocurrency, the net
          capital gain is taxed at the same rate as their Income Tax. This tax
          rate is determined based on their total income for the tax year.
          <br></br>
          <br></br>
          <h5>ATO Individual Income Tax Rates 2022-23 </h5>
          <table className="table table-bordered">
            <thead>
            <tr>
                <th>Income</th>
                <th>Tax Rate</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>$0 - $18,200</td>
                <td>0%</td>
            </tr>
            <tr>
                <td>$18,201 - $45,000</td>
                <td>Nil + 19% of the excess over $18,000</td>
            </tr>
            <tr>
                <td>$45,001 - $120,000</td>
                <td>$5092 + 32.5% of the excess over $45,000</td>
            </tr>
            <tr>
                <td>$120,001 - $180,000</td>
                <td>$29,467 + 37% of the excess over $120,000</td>
            </tr>
            <tr>
                <td>$180,001+</td>
                <td>$51,667 + 45% of the excess over $180,000</td>
            </tr>
            </tbody>
          </table>
          <h5>
            Capital Gains Tax (CGT)
          </h5>
          <br></br>
          Calculate your capital gains or losses on cryptocurrency transactions
          using this formula:
          <br></br>
          <br></br>
          <span><strong>Captital Gain/Loss = Capital Proceeds - Cost Basis</strong></span><br /><br />
          <span>
            <strong>Note:<br></br>
            Capital Proceeds (sale value or any form of receipt)<br></br>
            Cost Basis (costs incurred to acquire, hold, and dispose of the
            asset)
            </strong>
          </span>
          <br></br>
          <br></br>
          Your tax rate depends on whether you held the cryptocurrency for more
          than 12 months (long-term) or less (short-term). Long-term gains
          receive a 50% discount.
          <br></br>
          <br></br>
          Calculate your Australian crypto taxes accurately and effortlessly
          with KoinX's free crypto tax calculator for Australia. It simplifies
          the process, ensuring compliance with the latest tax rates and
          regulations making crypto tax calculations easy and precise.
        </p>
      </div>
      {isMobile && (<div>
        <h5>How are cryptocurrencies taxed in Australia?</h5>
        <p>The Australian Taxation Office (ATO) regards cryptocurrency as both property, which is subject to Capital Gains Tax (CGT), and income, which is subject to Income Tax. CGT applies when you sell, trade, gift, or make purchases using cryptocurrency. On the other hand, Income Tax applies when you receive cryptocurrency as payment for services, work, mining, staking, or other activities. To simplify tax calculations, consider using a free crypto tax calculator for Australia.</p>
        <hr />
        <h5>What’s the difference between long-term and short-term capital gains?</h5>
        <p>The distinction between long-term and short-term capital gains lies in the duration of ownership. When you own an asset, such as cryptocurrency, for more than 12 months, any gains from its sale are categorised as long-term. These long-term gains often receive a 50% discount on the capital gains tax (CGT). In contrast, if you hold the asset for 12 months or less, the gains are considered short-term, and they are taxed at your regular income tax rate.</p>
      </div>)}
    </div>
  );
}

export default Faq;
