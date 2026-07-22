// Uzhavan AI - Frontend Demo JavaScript


function analyzeCrop(){


let crop =
document.querySelectorAll("input")[0].value;


let quantity =
document.querySelectorAll("input")[1].value;


let location =
document.querySelectorAll("input")[2].value;


let currentPrice =
document.querySelectorAll("input")[3].value;



if(crop==="" || quantity==="" || location==="" || currentPrice===""){


document.getElementById("result").innerHTML =

"⚠️ Please enter all crop details.";


return;

}





let currentProfit =
quantity * currentPrice;




let marketA =
(quantity * 40) - 500;


let marketB =
(quantity * 55) - 800;


let marketC =
(quantity * 48) - 600;



let bestProfit =
Math.max(marketA,marketB,marketC);



let bestMarket;



if(bestProfit===marketA){

bestMarket="Local Market";

}

else if(bestProfit===marketB){

bestMarket="Wholesale Market";

}

else{

bestMarket="City Market";

}







document.getElementById("result").innerHTML =

`

<div style="
background:white;
color:black;
padding:20px;
border-radius:15px;
margin-top:20px;
">


<h3>🤖 AI Trading Analysis</h3>


<p>
🌱 Crop: ${crop}
</p>


<p>
📦 Quantity: ${quantity} Kg
</p>


<p>
📍 Location: ${location}
</p>


<hr>


<h4>🏪 Market Comparison</h4>


<p>
Local Market:
₹40/kg
<br>
Expected Profit:
₹${marketA}
</p>



<p>
Wholesale Market:
₹55/kg
<br>
Expected Profit:
₹${marketB}
</p>



<p>
City Market:
₹48/kg
<br>
Expected Profit:
₹${marketC}
</p>



<hr>


<h4>
💰 Current Profit:
₹${currentProfit}
</h4>



<h4>
⭐ AI Insight:
</h4>


<p>

${bestMarket} provides better profit opportunity.

</p>



<p>

AI compares markets and helps farmers
make better selling decisions.

</p>



</div>

`;



}