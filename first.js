//  let insta={
//      name:"ShradhaKapra",
//      followers:569000,
//      follow:true,
//      proffesion:"entrepreneur",
//  };

// console.log(insta);

// for(let i=1;i<5;i++){
//     console.log("muum ki aukat");
// }

// let i=1;
// while(i<5){
//     console.log("hello");
//     i++;
// }

// let i=1;
// do{
//     console.log(i);
//     i++;
// } while(i<6);
// let str="chiichu";
// for(let i of str){
//     console.log(i);

// }

// for(let key in insta){
//     console.log(key,insta[key]);

// }

// for(let i=0;i<=100;i++){
//     if(i%2!==0){
//         console.log(i);
//     }
    
// }

// let i=34;
// let userNum=prompt("Guess the game number:");
// while(userNum!=i){
//     userNum=prompt("wrong number guess again:");
// }

// console.log("right number!");


// let userName=prompt("enter user name:");
// console.log("@"+userName+userName.length);

// let marks=[56,83,90,54,32];

// let sum=0;
// sum = marks[0]+ marks[1]+ marks[2]+ marks[3]+marks[4];
// console.log(sum/marks.length);

// let price=[250,400,532,954,807];

// for(let i of price){
//     let offer=i/10;
//     console.log(i-offer);
// }
// console.log(price);

// let companies=["microsoft","tcs","google","uber","ibm"];
// companies.pop();
// companies.splice(3,1,"ola");
// companies.push("amazon");

// function countVowels(str){
//     let count=0;
//     for(const char of str){
        
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++

//         }
//     }
//     console.log(count); 
// }

//let num=[2,3,4,5,6,7,8];

// num.forEach((num)=>{
//     console.log(num*num);
// })

//let newArray=num.filter((num)=>{
   // return num%2===0;
//})

//console.log(newArray);
//let heading = document.querySelector(".heading");
//console.dir(heading);


//let btn = document.querySelector(".btn");
//console.dir(btn);

//let newbtn=document.createElement("button");
//newbtn.innerText="submit";
//newbtn.style.color="black";
//newbtn.style.backgroundColor="red";
//document.body.prepend(newbtn);

//let btn1=document.querySelector(".btn");
//btn.onclick = () => {
//   console.log("button clicked");
//   let a=20;
//   a++;
//   console.log(a);

//}
//let modebtn = document.querySelector(".mode");
//let body = document.querySelector("body");
//let curr = "white";
//modebtn.addEventListener("click", () => {
  // if (curr === "white") {
     // curr = "black";//
     // body.classList.remove("white");
     // body.classList.add("black");
  // } else {
     // curr = "white";
     // body.classList.remove("black");
     // body.classList.add("white");
  // }
   //console.log(curr);
//})
//let data = "janvi kadam"
//class User{
  // constructor(name,email){
  //       this.name=name;
  //       this.email=email;
  // }
  // viewdata(){
   //      console.log("data:",data);

  // }
  
//}
//let stu1 = new User("janvi","abc@gmail.com");
// Example country list (add more as needed)
const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW", 
  
};

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate dropdowns
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// Update flag image
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  if (img) img.src = newSrc;
};

// Fetch and update exchange rate
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `https://api.exchangerate-api.com/v4/latest/${fromCurr.value}`;
  try {
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.rates[toCurr.value];
    let finalAmount = (amtVal * rate).toFixed(2);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (error) {
    msg.innerText = "Error fetching exchange rate.";
  }
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});