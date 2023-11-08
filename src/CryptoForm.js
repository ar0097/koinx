import React, {useState, useEffect} from "react";
import "./CryptoForm.css";
import sideimage from './sideimage.svg'
function CryptoForm() {
  const [purchase, setPurchase] = useState(0);
  const [sale, setSale] = useState(0);
  const [expense, setExpense] = useState(0);
  const [annualInc, setAnnualInc] = useState(0);
  const [longTermDiscount, setLongTermDiscount] = useState(0);
  const [tax, setTax] = useState("");
  const [gainsAmount, setGainsAmount] = useState(0);
  const [annualRange, setAnnualRange] = useState("$0-$18,200");
  const [netCapitalGains, setNetCapitalGains] = useState(0);
  const [payTax, setPayTax] = useState(0);
  useEffect(() => {
    taxCalculation();
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "purchase":
        setPurchase(parseFloat(value));
        break;
      case "sale":
        setSale(parseFloat(value));
        break;
      case "expense":
        setExpense(parseFloat(value));
        break;
      case "annualInc":
        setAnnualRange(value);
        break;
      default:
        break;
    }
  };

  const taxCalculation = () => {
    const gainsAmount = sale - purchase - expense;
    setGainsAmount(gainsAmount);

    let longTermDiscount = 0;
    if (isShortTerm === "long-term" && gainsAmount > 0) {
      longTermDiscount = gainsAmount * 0.5;
    }
    setLongTermDiscount(longTermDiscount);

    const netCapitalGains = gainsAmount - longTermDiscount;
    setNetCapitalGains(netCapitalGains);

    switch (annualRange) {
      case "$0-$18,200":
        setAnnualInc(18200);
        break;
      case "$18,201-$45,000":
        setAnnualInc(45000);
        break;
      case "$45,001-$120,000":
        setAnnualInc(120000);
        break;
      case "$120,001-$180,000":
        setAnnualInc(180000);
        break;
      case "$180,001+":
        setAnnualInc(180001);
        break;
      default:
        setAnnualInc(0);
        break;
    }

    const taxRates = {
      18200: "0%",
      45000: "Nil + 19% of excess over $18,200",
      120000: "$5,092 + 32.5% of excess over $45,000",
      180000: "$29,467 + 37% of excess over $120,000",
      180001: "$51,667 + 45% of excess over $180,000",
    };

    const tax = taxRates[annualInc] || "Invalid or unknown income range";
    setTax(tax);
    let payTax = 0;

    if (annualInc <= 18200) {
      payTax = 0;
    } else if (annualInc <= 45000) {
      payTax = netCapitalGains * 0.19;
    } else if (annualInc <= 120000) {
      payTax = netCapitalGains * 0.325;
    } else if (annualInc <= 180000) {
      payTax = netCapitalGains * 0.37;
    } else {
      payTax = netCapitalGains * 0.45;
    }

    setPayTax(payTax);
  };
  const [isShortTerm, setIsShortTerm] = useState('long-term');
  return (
    <div className="main">
      <div className="crypto__form">
      <div className="">
      <h1 className="h1">Free Crypto Tax Calculator Australia</h1>
      <div className="first__card d-flex justify-content-between mt-4">
          <div className="year d-flex align-items-center">
            <h5>Financial Year</h5>
            <select className="current__year">
              <option selected>Select year</option>
              <option>FY 2023-24</option>
            </select>
          </div>
          <div className="country d-flex align-items-center">
            <h5>Country</h5>
            <select className="country__name">
            <option selected>Select Country</option>
              <option>Australia</option>
            </select>
          </div>
      </div>
      <hr />
      <div className="common__column d-flex justify-content-between">
        <div className="purchase">
          <label>Enter purchase price of Crypto</label>
          <div className="purchase__amount">
            <span>$</span>
            <input type="number"
              placeholder="0"
              name="purchase"
              value={purchase}
              onChange={handleInput}
              bg="#EFF5F5" />
          </div>
        </div>
        <div className="sale">
          <label>Enter sale price of Crypto</label>
          <div className="sale__amount">
            <span>$</span>
            <input type="number"
              placeholder="0"
              name="sale"
              value={sale}
              onChange={handleInput}
              bg="#EFF5F5" />
          </div>
        </div>
      </div>

      <div className=" common__column d-flex mt-3 justify-content-between">
        <div className="expense">
          <label>Enter your Expenses</label>
          <div className="expenses__amount">
            <span>$</span>
            <input type="number"
              placeholder="0"
              name="expense"
              value={expense}
              onChange={handleInput}
              bg="#EFF5F5" />
          </div>
        </div>
        <div className="investment__plan">
          <label>Investment Type</label>
          <div className="invest__amount d-flex">
            <div className="less__than">
              <button onClick={()=> setIsShortTerm('short-term')} className="short">Short Term</button>
              <span>&lt; 12 months</span>
            </div>
            <div className="greater__than">
              <button onClick={()=>setIsShortTerm('long-term')} className="long">Long Term</button>
              <span>&gt; 12 months</span>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className=" common__column d-flex justify-content-between">
        <div className="purchase">
          <label>Select Your Annual Income</label>
          <select className="purchase__amount" placeholder="select annual income"
              name="annualInc"
              value={annualRange}
              onChange={handleInput}
              bg="#EFF5F5">
            <option selected>Select Your Annual Income</option>
            <option value="$0-$18,200">$0-$18,200</option>
              <option value="$18,201-$45,000">$18,201-$45,000</option>
              <option value="$45,001-$120,000">$45,001-$1,20,000</option>
              <option value="$120,001-$180,000">$1,20,001-$1,80,000</option>
              <option value="$180,001+">$1,80,001+</option>
          </select>
        </div>
        <div className="sale">
          <label></label>
          <div className="tax__rate">
            <h6>Tax Rate:</h6>
            <p>{tax}</p>
          </div>
        </div>
      </div>
      {isShortTerm !== 'short-term' ? (<div className=" common__column d-flex justify-content-between">
        <div className="purchase">
          <label>Capital Gains Amount</label>
          <div className="purchase__amount">
            <span>$</span>
            <input type='number' value={gainsAmount} />
          </div>
        </div>
        <div className="sale">
          <label>Discount for Long Terms Gains</label>
          <div className="sale__amount">
            <span>$</span>
            <input type='number' value={{longTermDiscount}} />
          </div>
        </div>
      </div>):null}

      <div className="common__column d-flex justify-content-between">
        <div className="tax__amount">
          <p>Net Capital gains tax amount</p>
          <p>$ {netCapitalGains}</p>
        </div>
        <div className="tax__payment">
          <p>The tax you need to pay*</p>
          <p>$ {payTax}</p>
        </div>
      </div>
      </div>
      <div className="second__card">
        <img src={sideimage} alt="card"/>
      </div>
    </div>
  );
}

export default CryptoForm;
