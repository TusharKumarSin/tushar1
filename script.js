
const populate=async(value,currency)=>{
let mystr=" "
const rJson=JSON.parse(`{
    "meta": {
    "last_updated_at": "2024-06-08T23:59:59Z"
    },
    "data": {
    "ADA": {
    "code": "ADA",
    "value": 0.0273970238
    },
    "AED": {
    "code": "AED",
    "value": 0.0440391686
    },
    "AFN": {
    "code": "AFN",
    "value": 0.8431475121
    },
    "ALL": {
    "code": "ALL",
    "value": 1.10953272
    },
    "AMD": {
    "code": "AMD",
    "value": 4.6749092438
    },
    "ANG": {
    "code": "ANG",
    "value": 0.021425882
    },
    "AOA": {
    "code": "AOA",
    "value": 10.2215352653
    },
    "ARB": {
    "code": "ARB",
    "value": 0.0123622943
    },
    "ARS": {
    "code": "ARS",
    "value": 10.780652251
    },
    "AUD": {
    "code": "AUD",
    "value": 0.0182159579
    },
    "AVAX": {
    "code": "AVAX",
    "value": 0.0003705306
    },
    "AWG": {
    "code": "AWG",
    "value": 0.0214714596
    },
    "AZN": {
    "code": "AZN",
    "value": 0.020391889
    },
    "BAM": {
    "code": "BAM",
    "value": 0.0217064491
    },
    "BBD": {
    "code": "BBD",
    "value": 0.0239904576
    },
    "BDT": {
    "code": "BDT",
    "value": 1.4101227992
    },
    "BGN": {
    "code": "BGN",
    "value": 0.0214985718
    },
    "BHD": {
    "code": "BHD",
    "value": 0.004510206
    },
    "BIF": {
    "code": "BIF",
    "value": 34.4543657359
    },
    "BMD": {
    "code": "BMD",
    "value": 0.0119952288
    },
    "BNB": {
    "code": "BNB",
    "value": 0.0000174919
    },
    "BND": {
    "code": "BND",
    "value": 0.0162066354
    },
    "BOB": {
    "code": "BOB",
    "value": 0.0830415416
    },
    "BRL": {
    "code": "BRL",
    "value": 0.0641853998
    },
    "BSD": {
    "code": "BSD",
    "value": 0.0119952288
    },
    "BTC": {
    "code": "BTC",
    "value": 1.721e-7
    },
    "BTN": {
    "code": "BTN",
    "value": 1.0021023478
    },
    "BWP": {
    "code": "BWP",
    "value": 0.1656329041
    },
    "BYN": {
    "code": "BYN",
    "value": 0.0392844365
    },
    "BYR": {
    "code": "BYR",
    "value": 392.8443042328
    },
    "BZD": {
    "code": "BZD",
    "value": 0.0239904576
    },
    "CAD": {
    "code": "CAD",
    "value": 0.0165051971
    },
    "CDF": {
    "code": "CDF",
    "value": 33.7299934142
    },
    "CHF": {
    "code": "CHF",
    "value": 0.0107461667
    },
    "CLF": {
    "code": "CLF",
    "value": 0.000289325
    },
    "CLP": {
    "code": "CLP",
    "value": 11.031977203
    },
    "CNY": {
    "code": "CNY",
    "value": 0.0868972919
    },
    "COP": {
    "code": "COP",
    "value": 47.204419313
    },
    "CRC": {
    "code": "CRC",
    "value": 6.1771800881
    },
    "CUC": {
    "code": "CUC",
    "value": 0.0119952288
    },
    "CUP": {
    "code": "CUP",
    "value": 0.2878854915
    },
    "CVE": {
    "code": "CVE",
    "value": 1.2239296233
    },
    "CZK": {
    "code": "CZK",
    "value": 0.2734129228
    },
    "DAI": {
    "code": "DAI",
    "value": 0.0119720256
    },
    "DJF": {
    "code": "DJF",
    "value": 2.1318040596
    },
    "DKK": {
    "code": "DKK",
    "value": 0.0828171135
    },
    "DOP": {
    "code": "DOP",
    "value": 0.7116423837
    },
    "DOT": {
    "code": "DOT",
    "value": 0.0018734229
    },
    "DZD": {
    "code": "DZD",
    "value": 1.6201097307
    },
    "EGP": {
    "code": "EGP",
    "value": 0.5700023365
    },
    "ERN": {
    "code": "ERN",
    "value": 0.1799284322
    },
    "ETB": {
    "code": "ETB",
    "value": 0.6934811947
    },
    "ETH": {
    "code": "ETH",
    "value": 0.0000032526
    },
    "EUR": {
    "code": "EUR",
    "value": 0.0110999061
    },
    "FJD": {
    "code": "FJD",
    "value": 0.027242487
    },
    "FKP": {
    "code": "FKP",
    "value": 0.0094247473
    },
    "GBP": {
    "code": "GBP",
    "value": 0.0094270521
    },
    "GEL": {
    "code": "GEL",
    "value": 0.033868294
    },
    "GGP": {
    "code": "GGP",
    "value": 0.0094247474
    },
    "GHS": {
    "code": "GHS",
    "value": 0.1780208488
    },
    "GIP": {
    "code": "GIP",
    "value": 0.0094247405
    },
    "GMD": {
    "code": "GMD",
    "value": 0.6982984793
    },
    "GNF": {
    "code": "GNF",
    "value": 102.994030172
    },
    "GTQ": {
    "code": "GTQ",
    "value": 0.0930213375
    },
    "GYD": {
    "code": "GYD",
    "value": 2.507287191
    },
    "HKD": {
    "code": "HKD",
    "value": 0.0936659623
    },
    "HNL": {
    "code": "HNL",
    "value": 0.2961829848
    },
    "HRK": {
    "code": "HRK",
    "value": 0.0798043855
    },
    "HTG": {
    "code": "HTG",
    "value": 1.6160656469
    },
    "HUF": {
    "code": "HUF",
    "value": 4.3412488814
    },
    "IDR": {
    "code": "IDR",
    "value": 193.9761486517
    },
    "ILS": {
    "code": "ILS",
    "value": 0.045061042
    },
    "IMP": {
    "code": "IMP",
    "value": 0.0094247449
    },
    "INR": {
    "code": "INR",
    "value": 1
    },
    "IQD": {
    "code": "IQD",
    "value": 15.6736567255
    },
    "IRR": {
    "code": "IRR",
    "value": 503.7727288448
    },
    "ISK": {
    "code": "ISK",
    "value": 1.6491544615
    },
    "JEP": {
    "code": "JEP",
    "value": 0.0094247407
    },
    "JMD": {
    "code": "JMD",
    "value": 1.8638267015
    },
    "JOD": {
    "code": "JOD",
    "value": 0.0085166125
    },
    "JPY": {
    "code": "JPY",
    "value": 1.8803052058
    },
    "KES": {
    "code": "KES",
    "value": 1.5549697461
    },
    "KGS": {
    "code": "KGS",
    "value": 1.0464846382
    },
    "KHR": {
    "code": "KHR",
    "value": 49.2734595211
    },
    "KMF": {
    "code": "KMF",
    "value": 5.4509045421
    },
    "KPW": {
    "code": "KPW",
    "value": 10.795718172
    },
    "KRW": {
    "code": "KRW",
    "value": 16.5197322457
    },
    "KWD": {
    "code": "KWD",
    "value": 0.0036710204
    },
    "KYD": {
    "code": "KYD",
    "value": 0.009995984
    },
    "KZT": {
    "code": "KZT",
    "value": 5.3614136712
    },
    "LAK": {
    "code": "LAK",
    "value": 258.5597593415
    },
    "LBP": {
    "code": "LBP",
    "value": 1073.8419380887
    },
    "LKR": {
    "code": "LKR",
    "value": 3.6461568056
    },
    "LRD": {
    "code": "LRD",
    "value": 2.3304738899
    },
    "LSL": {
    "code": "LSL",
    "value": 0.2267887775
    },
    "LTC": {
    "code": "LTC",
    "value": 0.0001495261
    },
    "LTL": {
    "code": "LTL",
    "value": 0.0383026015
    },
    "LVL": {
    "code": "LVL",
    "value": 0.0077963004
    },
    "LYD": {
    "code": "LYD",
    "value": 0.0579500372
    },
    "MAD": {
    "code": "MAD",
    "value": 0.1188456258
    },
    "MATIC": {
    "code": "MATIC",
    "value": 0.0184101273
    },
    "MDL": {
    "code": "MDL",
    "value": 0.2100878216
    },
    "MGA": {
    "code": "MGA",
    "value": 53.9339964993
    },
    "MKD": {
    "code": "MKD",
    "value": 0.6821792111
    },
    "MMK": {
    "code": "MMK",
    "value": 25.120949896
    },
    "MNT": {
    "code": "MNT",
    "value": 40.6301711619
    },
    "MOP": {
    "code": "MOP",
    "value": 0.0967532905
    },
    "MRO": {
    "code": "MRO",
    "value": 4.2822946226
    },
    "MRU": {
    "code": "MRU",
    "value": 0.4734495817
    },
    "MUR": {
    "code": "MUR",
    "value": 0.5487595122
    },
    "MVR": {
    "code": "MVR",
    "value": 0.1853183909
    },
    "MWK": {
    "code": "MWK",
    "value": 20.9056551768
    },
    "MXN": {
    "code": "MXN",
    "value": 0.2209657076
    },
    "MYR": {
    "code": "MYR",
    "value": 0.056240477
    },
    "MZN": {
    "code": "MZN",
    "value": 0.7625389476
    },
    "NAD": {
    "code": "NAD",
    "value": 0.2256669834
    },
    "NGN": {
    "code": "NGN",
    "value": 17.8141567941
    },
    "NIO": {
    "code": "NIO",
    "value": 0.4393191088
    },
    "NOK": {
    "code": "NOK",
    "value": 0.128440368
    },
    "NPR": {
    "code": "NPR",
    "value": 1.6090046947
    },
    "NZD": {
    "code": "NZD",
    "value": 0.0196466282
    },
    "OMR": {
    "code": "OMR",
    "value": 0.0046064086
    },
    "OP": {
    "code": "OP",
    "value": 0.0055130696
    },
    "PAB": {
    "code": "PAB",
    "value": 0.0119811967
    },
    "PEN": {
    "code": "PEN",
    "value": 0.045030817
    },
    "PGK": {
    "code": "PGK",
    "value": 0.0460126252
    },
    "PHP": {
    "code": "PHP",
    "value": 0.7039254429
    },
    "PKR": {
    "code": "PKR",
    "value": 3.3358852243
    },
    "PLN": {
    "code": "PLN",
    "value": 0.0478865204
    },
    "PYG": {
    "code": "PYG",
    "value": 90.556675293
    },
    "QAR": {
    "code": "QAR",
    "value": 0.043645965
    },
    "RON": {
    "code": "RON",
    "value": 0.0552316816
    },
    "RSD": {
    "code": "RSD",
    "value": 1.2953770431
    },
    "RUB": {
    "code": "RUB",
    "value": 1.0677709618
    },
    "RWF": {
    "code": "RWF",
    "value": 15.6002193988
    },
    "SAR": {
    "code": "SAR",
    "value": 0.0449156593
    },
    "SBD": {
    "code": "SBD",
    "value": 0.0987263326
    },
    "SCR": {
    "code": "SCR",
    "value": 0.1753182082
    },
    "SDG": {
    "code": "SDG",
    "value": 7.2151301302
    },
    "SEK": {
    "code": "SEK",
    "value": 0.1263211745
    },
    "SGD": {
    "code": "SGD",
    "value": 0.0161962007
    },
    "SHP": {
    "code": "SHP",
    "value": 0.0094270515
    },
    "SLL": {
    "code": "SLL",
    "value": 269.0878480978
    },
    "SOL": {
    "code": "SOL",
    "value": 0.0000757897
    },
    "SOS": {
    "code": "SOS",
    "value": 6.8493939659
    },
    "SRD": {
    "code": "SRD",
    "value": 0.3789174672
    },
    "STD": {
    "code": "STD",
    "value": 269.8914078073
    },
    "STN": {
    "code": "STN",
    "value": 0.2698913831
    },
    "SVC": {
    "code": "SVC",
    "value": 0.1049582521
    },
    "SYP": {
    "code": "SYP",
    "value": 155.8747341051
    },
    "SZL": {
    "code": "SZL",
    "value": 0.225974308
    },
    "THB": {
    "code": "THB",
    "value": 0.4412810227
    },
    "TJS": {
    "code": "TJS",
    "value": 0.1294358493
    },
    "TMT": {
    "code": "TMT",
    "value": 0.0419833008
    },
    "TND": {
    "code": "TND",
    "value": 0.0372051266
    },
    "TOP": {
    "code": "TOP",
    "value": 0.0278763166
    },
    "TRY": {
    "code": "TRY",
    "value": 0.3880983515
    },
    "TTD": {
    "code": "TTD",
    "value": 0.080710389
    },
    "TWD": {
    "code": "TWD",
    "value": 0.3889855332
    },
    "TZS": {
    "code": "TZS",
    "value": 31.3856796109
    },
    "UAH": {
    "code": "UAH",
    "value": 0.4830766069
    },
    "UGX": {
    "code": "UGX",
    "value": 45.4761620326
    },
    "USD": {
    "code": "USD",
    "value": 0.0119952288
    },
    "USDC": {
    "code": "USDC",
    "value": 0.0119791155
    },
    "USDT": {
    "code": "USDT",
    "value": 0.0119676142
    },
    "UYU": {
    "code": "UYU",
    "value": 0.4662324413
    },
    "UZS": {
    "code": "UZS",
    "value": 151.6770803058
    },
    "VEF": {
    "code": "VEF",
    "value": 43702.8242590386
    },
    "VES": {
    "code": "VES",
    "value": 0.4370283307
    },
    "VND": {
    "code": "VND",
    "value": 304.5853310378
    },
    "VUV": {
    "code": "VUV",
    "value": 1.4177137305
    },
    "WST": {
    "code": "WST",
    "value": 0.0326223252
    },
    "XAF": {
    "code": "XAF",
    "value": 7.2828869241
    },
    "XAG": {
    "code": "XAG",
    "value": 0.0004112677
    },
    "XAU": {
    "code": "XAU",
    "value": 0.0000052298
    },
    "XCD": {
    "code": "XCD",
    "value": 0.0323871178
    },
    "XDR": {
    "code": "XDR",
    "value": 0.0090306098
    },
    "XOF": {
    "code": "XOF",
    "value": 7.2828867468
    },
    "XPD": {
    "code": "XPD",
    "value": 0.0000124951
    },
    "XPF": {
    "code": "XPF",
    "value": 1.3237712189
    },
    "XPT": {
    "code": "XPT",
    "value": 0.0000133683
    },
    "XRP": {
    "code": "XRP",
    "value": 0.024235733
    },
    "YER": {
    "code": "YER",
    "value": 2.9965592234
    },
    "ZAR": {
    "code": "ZAR",
    "value": 0.2259696398
    },
    "ZMK": {
    "code": "ZMK",
    "value": 107.97145358
    },
    "ZMW": {
    "code": "ZMW",
    "value": 0.3173485734
    },
    "ZWL": {
    "code": "ZWL",
    "value": 0.160713815
    }
    }
    }
    `)
console.log(rJson);
for(let key of Object.keys(rJson["data"])){
    console.log(key);
    mystr+=`<tr>
                <td>${key}</td>
                <td>${rJson["data"][key]["code"]}</td>
                <td>${Math.round(rJson["data"][key]["value"]*value)}</td>
            </tr> 
    
    `
}
const tableBody=document.querySelector("tbody")
tableBody.innerHTML = mystr;
}
console.log("i am main")

const btn=document.querySelector(".btn");
     btn.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log("Button is clicked");
        const value=parseInt(document.querySelector("input[name='quantity']").value)
        const currency=document.querySelector("select[name='currency']").value;
        populate(value,currency);
     })
