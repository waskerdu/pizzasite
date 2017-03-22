//best syntax
var basePrice=0;
var personalCost=6;
var mediumCost=10;
var largeCost=14;
var xlCost=16;
var numExtraMeats=0;
var extraMeatCost=1.00;
var numExtraVeggies=0;
var extraVeggiesCost=1.00;
var extraCheese=false;
var cheeseCost=3.00;
var cheeseCrust=false;
var cheeseCrustCost=3.00;
var totalCost=0;
function updatePrice(){
	//get base price
	if (document.getElementById("personal").checked==true){basePrice=personalCost;}
	if (document.getElementById("medium").checked==true){basePrice=mediumCost;}
	if (document.getElementById("large").checked==true){basePrice=largeCost;}
	if (document.getElementById("xl").checked==true){basePrice=xlCost;}
	document.getElementById("base").innerHTML = "base cost: $".concat((basePrice).toString());

	//get crust price
	cheeseCrust=document.getElementById("cheesestuffed").checked==true
	if (cheeseCrust){document.getElementById("crust").innerHTML="cheese stuffed crust cost: $".concat((cheeseCost).toString());}

	//get cheese price
	extraCheese=document.getElementById("extra").checked==true
	if (extraCheese){document.getElementById("cheese").innerHTML="extra cheese cost: $".concat((cheeseCost).toString());}

	//get num meats
	var meatElems = document.getElementsByClassName("meats");
	numExtraMeats=0;
    for (var i=0; i<meatElems.length; i++) {       
        if (meatElems[i].type == "checkbox" && meatElems[i].checked == true){numExtraMeats++;}
    }
    if (numExtraMeats>0){numExtraMeats--;}
    document.getElementById("meats").innerHTML = "extra meat cost: $".concat((numExtraMeats*extraMeatCost).toString());

    //get num veggies
    var veggieElems = document.getElementsByClassName("veggie");
	numExtraVeggies=0;
    for (var i=0; i<veggieElems.length; i++) {       
        if (veggieElems[i].type == "checkbox" && veggieElems[i].checked == true){numExtraVeggies++;}
    }
    document.getElementById("veggies").innerHTML = "extra veggie cost: $".concat((numExtraVeggies*extraVeggiesCost).toString());
    
    //total it up
    totalCost=basePrice;
    if (extraCheese){totalCost+=cheeseCost;}
    if (cheeseCrust){totalCost+=cheeseCrustCost;}
    totalCost+=numExtraMeats*extraMeatCost;
    totalCost+=numExtraVeggies*extraVeggiesCost;
    document.getElementById("total").innerHTML = "total cost: $".concat((totalCost).toString());
}
updatePrice();

//document.getElementById("cost").innerHTML =document.getElementsByClassName("meats").length;