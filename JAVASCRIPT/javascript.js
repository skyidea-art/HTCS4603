//we must add on and off to turn it off. lets represent 0 as off and 1 is on.
slide_comp_0 = document.getElementById("slide_menu_bar_01_s");
font_effect_0 = document.getElementById("font_deco_effect_0");
font_effect_1 = document.getElementById("font_deco_effect_1");
font_effect_2 = document.getElementById("font_deco_effect_2");
font_effect_3 = document.getElementById("font_deco_effect_3");
font_effect_4 = document.getElementById("font_deco_effect_4");
font_effect_5 = document.getElementById("font_deco_effect_5");
font_effect_6 = document.getElementById("font_deco_effect_6");
font_effect_7 = document.getElementById("font_deco_effect_7");
font_effect_8 = document.getElementById("font_deco_effect_8");
font_effect_9 = document.getElementById("font_deco_effect_9");
font_effect_10 = document.getElementById("font_deco_effect_10");
font_effect_11 = document.getElementById("font_deco_effect_11");
font_effect_12 = document.getElementById("font_deco_effect_12");
font_effect_13 = document.getElementById("font_deco_effect_13");
font_effect_14 = document.getElementById("font_deco_effect_14");
font_effect_15 = document.getElementById("font_deco_effect_15");
font_effect_16 = document.getElementById("font_deco_effect_16");
ul_element_effect_0 = document.getElementById("ul_element_s_0");
ul_element_effect_1 = document.getElementById("ul_element_s_1");
ul_element_effect_2 = document.getElementById("ul_element_s_2");
ul_element_effect_3 = document.getElementById("ul_element_s_3");
ul_element_effect_4 = document.getElementById("ul_element_s_4");
ul_element_effect_5 = document.getElementById("ul_element_s_5");
// variable lists.
// javascript must be defined with different effects.
function ul_element_effectActiv_0()
{
	ul_element_effect_0.style.background = "grey";
}
function ul_element_effectDeac_0()
{
	ul_element_effect_0.style.background = "red";
}
function ul_element_effectActiv_1()
{
	ul_element_effect_1.style.background = "grey";
}
function ul_element_effectDeac_1()
{
	ul_element_effect_1.style.background = "blue";
}
function ul_element_effectActiv_2()
{
	ul_element_effect_2.style.background = "grey";
}
function ul_element_effectDeac_2()
{
	ul_element_effect_2.style.background = "green";
}
function ul_element_effectActiv_3()
{
	ul_element_effect_3.style.background = "grey";
}
function ul_element_effectDeac_3()
{
	ul_element_effect_3.style.background = "yellow";
}
function ul_element_effectActiv_4()
{
	ul_element_effect_4.style.background = "grey";
}
function ul_element_effectDeac_4()
{
	ul_element_effect_4.style.background = "orange";
}
function ul_element_effectActiv_5()
{
	ul_element_effect_5.style.background = "grey";
}
function ul_element_effectDeac_5()
{
	ul_element_effect_5.style.background = "black";
}
var x = -1;
function slidebar_button()
{
	x+=1;
	//alert(x);
	if(x == 0)
	{
		slide_comp_0.style.width = "0px";
		font_effect_0.style.width = "0px";
		font_effect_0.style.borderBottomColor ="black";
		font_effect_1.style.width = "0px";
		font_effect_1.style.borderBottomColor ="black";
		font_effect_2.style.width = "0px";
		font_effect_2.style.borderBottomColor ="black";
		font_effect_3.style.width = "0px";
		font_effect_3.style.borderBottomColor ="black";
		font_effect_4.style.width = "0px";
		font_effect_4.style.borderBottomColor ="black";
		font_effect_5.style.width = "0px";
		font_effect_5.style.borderBottomColor ="black";
		font_effect_6.style.width = "0px";
		font_effect_6.style.borderBottomColor ="black";
		font_effect_7.style.width = "0px";
		font_effect_7.style.borderBottomColor ="black";
		font_effect_8.style.width = "0px";
		font_effect_8.style.borderBottomColor ="black";
		font_effect_9.style.width = "0px";
		font_effect_9.style.borderBottomColor ="black";
		font_effect_10.style.width = "0px";
		font_effect_10.style.borderBottomColor ="black";
		font_effect_11.style.width = "0px";
		font_effect_11.style.borderBottomColor ="black";
		font_effect_12.style.width = "0px";
		font_effect_12.style.borderBottomColor ="black";
		font_effect_13.style.width = "0px";
		font_effect_13.style.borderBottomColor ="black";
		font_effect_14.style.width = "0px";
		font_effect_14.style.borderBottomColor ="black";
		font_effect_15.style.width = "0px";
		font_effect_15.style.borderBottomColor ="black";
		font_effect_16.style.width = "0px";
		font_effect_16.style.borderBottomColor ="black";
		
	}
	if(x == 1)
	{
		slide_comp_0.style.width = "200px";
		font_effect_0.style.width = "100px";
		font_effect_0.style.borderBottomColor ="white";
		font_effect_1.style.width = "100px";
		font_effect_1.style.borderBottomColor ="white";
		font_effect_2.style.width = "100px";
		font_effect_2.style.borderBottomColor ="white";
		font_effect_3.style.width = "80px";
		font_effect_3.style.borderBottomColor ="white";
		font_effect_4.style.width = "100px";
		font_effect_4.style.borderBottomColor ="white";
		font_effect_5.style.width = "80px";
		font_effect_5.style.borderBottomColor ="white";
		font_effect_6.style.width = "80px";
		font_effect_6.style.borderBottomColor ="white";
		font_effect_7.style.width = "100px";
		font_effect_7.style.borderBottomColor ="white";
		font_effect_8.style.width = "80px";
		font_effect_8.style.borderBottomColor ="white";
		font_effect_9.style.width = "80px";
		font_effect_9.style.borderBottomColor ="white";
		font_effect_10.style.width = "100px";
		font_effect_10.style.borderBottomColor ="white";
		font_effect_11.style.width = "80px";
		font_effect_11.style.borderBottomColor ="white";
		font_effect_12.style.width = "80px";
		font_effect_12.style.borderBottomColor ="white";
		font_effect_13.style.width = "100px";
		font_effect_13.style.borderBottomColor ="white";
		font_effect_14.style.width = "80px";
		font_effect_14.style.borderBottomColor ="white";
		font_effect_15.style.width = "80px";
		font_effect_15.style.borderBottomColor ="white";
		font_effect_16.style.width = "100px";
		font_effect_16.style.borderBottomColor ="white";
		
		
	}
	if(x == 2)
	{
		x = 0;
		slide_comp_0.style.width = "0px";
		font_effect_0.style.width = "0px";
		font_effect_0.style.borderBottomColor ="black";
		font_effect_1.style.width = "0px";
		font_effect_1.style.borderBottomColor ="black";
		font_effect_2.style.width = "0px";
		font_effect_2.style.borderBottomColor ="black";
		font_effect_3.style.width = "0px";
		font_effect_3.style.borderBottomColor ="black";
		font_effect_4.style.width = "0px";
		font_effect_4.style.borderBottomColor ="black";
		font_effect_5.style.width = "0px";
		font_effect_5.style.borderBottomColor ="black";
		font_effect_6.style.width = "0px";
		font_effect_6.style.borderBottomColor ="black";
		font_effect_7.style.width = "0px";
		font_effect_7.style.borderBottomColor ="black";
		font_effect_8.style.width = "0px";
		font_effect_8.style.borderBottomColor ="black";
		font_effect_9.style.width = "0px";
		font_effect_9.style.borderBottomColor ="black";
		font_effect_10.style.width = "0px";
		font_effect_10.style.borderBottomColor ="black";
		font_effect_11.style.width = "0px";
		font_effect_11.style.borderBottomColor ="black";
		font_effect_12.style.width = "0px";
		font_effect_12.style.borderBottomColor ="black";
		font_effect_13.style.width = "0px";
		font_effect_13.style.borderBottomColor ="black";
		font_effect_14.style.width = "0px";
		font_effect_14.style.borderBottomColor ="black";
		font_effect_15.style.width = "0px";
		font_effect_15.style.borderBottomColor ="black";
		font_effect_16.style.width = "0px";
		font_effect_16.style.borderBottomColor ="black";
	}
}