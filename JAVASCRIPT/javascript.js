//we must add on and off to turn it off. lets represent 0 as off and 1 is on.
slide_comp_0 = document.getElementById("slide_menu_bar_01_s");
slide_comp_ani01 = document.getElementById("slide_button_animation01");
slide_comp_ani02 = document.getElementById("slide_button_animation02");
draw_up_ani01 = document.getElementById("draw_up_ani_01");
draw_up_ani02 = document.getElementById("draw_up_ani_02");
draw_up_ani03 = document.getElementById("draw_up_ani_03");
draw_up_ani04 = document.getElementById("draw_up_ani_04");
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

ul_element_effect_0_01 = document.getElementById("ul_element_s_0_01");
ul_element_effect_1_01 = document.getElementById("ul_element_s_1_01");
ul_element_effect_2_01 = document.getElementById("ul_element_s_2_01");
ul_element_effect_3_01 = document.getElementById("ul_element_s_3_01");
ul_element_effect_4_01 = document.getElementById("ul_element_s_4_01");
ul_element_effect_5_01 = document.getElementById("ul_element_s_5_01");

font_bold_0 = document.getElementById("font_deco_bold_0");
font_bold_1 = document.getElementById("font_deco_bold_1");
font_bold_2 = document.getElementById("font_deco_bold_2");
font_bold_3 = document.getElementById("font_deco_bold_3");
font_bold_4 = document.getElementById("font_deco_bold_4");
font_bold_5 = document.getElementById("font_deco_bold_5");
// font normals
font_normal_0 = document.getElementById("font_deco_normal_0");
font_normal_1 = document.getElementById("font_deco_normal_1");
font_normal_2 = document.getElementById("font_deco_normal_2");
font_normal_3 = document.getElementById("font_deco_normal_3");
font_normal_4 = document.getElementById("font_deco_normal_4");
font_normal_5 = document.getElementById("font_deco_normal_5");
font_normal_6 = document.getElementById("font_deco_normal_6");
font_normal_7 = document.getElementById("font_deco_normal_7");
font_normal_8 = document.getElementById("font_deco_normal_8");
font_normal_9 = document.getElementById("font_deco_normal_9");
font_normal_10 = document.getElementById("font_deco_normal_10");
// variable lists.
// javascript must be defined with different effects.
chat_size_0 = document.getElementById("chat_open");
slide_fixed_0 = document.getElementById("slide_button_s");
chat_background_animation_0 = document.getElementById("chat_open_comp_0");
canvas_toggle = document.getElementById("canvas");
canvas_toggle_01 = document.getElementById("canvas_01");

function show_tracing_01(){
	canvas_toggle_01.style.backgroundImage = "url('../Images/png/drawing_shape.png')";
}
function hide_tracing_01(){
	canvas_toggle_01.style.backgroundImage = "url('')";
}
function show_tracing()
{
	canvas_toggle.style.backgroundImage = "url('../Images/jpg/rem_draw_grey.jpg')";

}
function hide_tracing()
{
	canvas_toggle.style.backgroundImage = "url('')";

}
function draw_up_0()
{
	draw_up_ani01.style.height = "0px";
	draw_up_ani02.style.height = "0px";
}
function draw_up_1()
{
	draw_up_ani01.style.height = "30px";
	draw_up_ani02.style.height = "50px";
}
function draw_up_2()
{
	draw_up_ani03.style.height = "0px";
	draw_up_ani04.style.height = "0px";
}
function draw_up_3()
{
	draw_up_ani03.style.height = "30px";
	draw_up_ani04.style.height = "50px";
}

function chat_animation_0(){
	chat_background_animation_0.style.backgroundColor = "#dbd9d3";
}
function chat_animation_1(){
	chat_background_animation_0.style.backgroundColor = "red";
}

function menu_animation_0(){
	slide_comp_ani01.style.height = "0px";
	slide_comp_ani02.style.height = "0px";
}
function menu_animation_1(){
	slide_comp_ani01.style.height = "20px";
	slide_comp_ani02.style.height = "20px";
}
function ul_element_effectActiv_0()
{
	ul_element_effect_0.style.background = "black";
	font_bold_0.style.color = "white";
	font_effect_0.style.borderBottomColor = "white";
	font_effect_1.style.borderBottomColor = "white";
	font_effect_2.style.borderBottomColor = "white";
	font_effect_3.style.borderBottomColor = "white";
	font_normal_0.style.color ="white";
	font_normal_1.style.color ="white";
	font_normal_2.style.color ="white";
	ul_element_effect_0_01.style.height = "0px";

}
function ul_element_effectDeac_0()
{
	ul_element_effect_0.style.background = "white";
	font_bold_0.style.color = "black"; 
	font_effect_0.style.borderBottomColor = "black";
	font_effect_1.style.borderBottomColor = "black";
	font_effect_2.style.borderBottomColor = "black";
	font_effect_3.style.borderBottomColor = "black";
	font_normal_0.style.color ="black";
	font_normal_1.style.color ="black";
	font_normal_2.style.color ="black";
	ul_element_effect_0_01.style.height = "20px";
	
}
function ul_element_effectActiv_1()
{
	ul_element_effect_1.style.background = "black";
	font_bold_1.style.color = "white";
	font_effect_4.style.borderBottomColor = "white";
	font_effect_5.style.borderBottomColor = "white";
	font_effect_6.style.borderBottomColor = "white";
	font_normal_3.style.color = "white";
	font_normal_4.style.color = "white";
	ul_element_effect_1_01.style.height = "0px";
}
function ul_element_effectDeac_1()
{
	ul_element_effect_1.style.background = "white";
	font_bold_1.style.color = "black"; 
	font_effect_4.style.borderBottomColor = "black";
	font_effect_5.style.borderBottomColor = "black";
	font_effect_6.style.borderBottomColor = "black";
	font_normal_3.style.color = "black";
	font_normal_4.style.color = "black";
	ul_element_effect_1_01.style.height = "20px";
}
function ul_element_effectActiv_2()
{
	ul_element_effect_2.style.background = "black";
	font_bold_2.style.color = "white";
	font_effect_7.style.borderBottomColor = "white";
	font_effect_8.style.borderBottomColor = "white";
	font_effect_9.style.borderBottomColor = "white";
	font_normal_5.style.color = "white";
	font_normal_6.style.color = "white";
	ul_element_effect_2_01.style.height = "0px";

}
function ul_element_effectDeac_2()
{
	ul_element_effect_2.style.background = "white";
	font_bold_2.style.color = "black"; 
	font_effect_7.style.borderBottomColor = "black";
	font_effect_8.style.borderBottomColor = "black";
	font_effect_9.style.borderBottomColor = "black";
	font_normal_5.style.color = "black";
	font_normal_6.style.color = "black";
	ul_element_effect_2_01.style.height = "20px";
	
}
function ul_element_effectActiv_3()
{
	ul_element_effect_3.style.background = "black";
	font_bold_3.style.color = "white";
	font_effect_10.style.borderBottomColor = "white";
	font_effect_11.style.borderBottomColor = "white";
	font_effect_12.style.borderBottomColor = "white";
	font_normal_7.style.color = "white";
	font_normal_8.style.color = "white";
	ul_element_effect_3_01.style.height = "0px";

}
function ul_element_effectDeac_3()
{
	ul_element_effect_3.style.background = "white";
	font_bold_3.style.color = "black"; 
	font_effect_10.style.borderBottomColor = "black";
	font_effect_11.style.borderBottomColor = "black";
	font_effect_12.style.borderBottomColor = "black";
	font_normal_7.style.color = "black";
	font_normal_8.style.color = "black";
	ul_element_effect_3_01.style.height = "20px";
}
function ul_element_effectActiv_4()
{
	ul_element_effect_4.style.background = "black";
	font_bold_4.style.color = "white";
	font_effect_13.style.borderBottomColor = "white";
	font_effect_14.style.borderBottomColor = "white";
	font_effect_15.style.borderBottomColor = "white";
	font_normal_9.style.color = "white";
	font_normal_10.style.color = "white";
	ul_element_effect_4_01.style.height = "0px";
}
function ul_element_effectDeac_4()
{
	ul_element_effect_4.style.background = "white";
	font_bold_4.style.color = "black"; 
	font_effect_13.style.borderBottomColor = "black";
	font_effect_14.style.borderBottomColor = "black";
	font_effect_15.style.borderBottomColor = "black";
	font_normal_9.style.color = "black";
	font_normal_10.style.color = "black";
	ul_element_effect_4_01.style.height = "20px";

}
function ul_element_effectActiv_5()
{
	ul_element_effect_5.style.background = "black";
	font_bold_5.style.color = "white";
	font_effect_16.style.borderBottomColor ="white";
	ul_element_effect_5_01.style.height = "0px";
}
function ul_element_effectDeac_5()
{
	ul_element_effect_5.style.background = "white";
	font_bold_5.style.color = "black"; 
	font_effect_16.style.borderBottomColor ="black";
	ul_element_effect_5_01.style.height = "20px";
}

//the end of the functions 
var a = -1;
function open_closechat()
{
	a+=1;
	if(a == 0)
	{
		chat_size_0.style.width = "0px";
		//alert(a);
	}
	if(a == 1)
	{
		chat_size_0.style.width = "400px";
		//alert(a);
	}
	if(a == 2)
	{
		chat_size_0.style.width = "0px";
		a = 0;
		//alert(a);
	}
}

var x = -1;
function slidebar_button()
{
	x+=1;
	//alert(x);
	if(x == 0)
	{
		//button for slide.
		slide_fixed_0.style.marginLeft = "5px";
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
		//font colors and properties
		//font_bold_0.style.color = "black";
		//font_bold_1.style.color = "black";
		//font_bold_2.style.color = "black";
		//font_bold_3.style.color = "black";
		//font_bold_4.style.color = "black";
		//font_bold_5.style.color = "black";
		//font colors and normals
		//font_normal_0.style.color = "black";
		//font_normal_1.style.color = "black";
		//font_normal_2.style.color = "black";
		//font_normal_3.style.color = "black";
		//font_normal_4.style.color = "black";
		//font_normal_5.style.color = "black";
		//font_normal_6.style.color = "black";
		//font_normal_7.style.color = "black";
		//font_normal_8.style.color = "black";
		//font_normal_9.style.color = "black";
		//font_normal_10.style.color = "black";
		
	}
	if(x == 1)
	{
		slide_fixed_0.style.marginLeft = "200px";
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
		//font colors and properties
		//font_bold_0.style.color = "white";
		//font_bold_1.style.color = "white";
		//font_bold_2.style.color = "white";
		//font_bold_3.style.color = "white";
		//font_bold_4.style.color = "white";
		//font_bold_5.style.color = "white";
		//font colors and normals
		//font_normal_0.style.color = "white";
		//font_normal_1.style.color = "white";
		//font_normal_2.style.color = "white";
		//font_normal_3.style.color = "white";
		//font_normal_4.style.color = "white";
		//font_normal_5.style.color = "white";
		//font_normal_6.style.color = "white";
		//font_normal_7.style.color = "white";
		//font_normal_8.style.color = "white";
		//font_normal_9.style.color = "white";
		//font_normal_10.style.color = "white";
	}
	if(x == 2)
	{
		x = 0;
		slide_fixed_0.style.marginLeft = "5px";
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
		//font colors and properties
		//font_bold_0.style.color = "black";
		//font_bold_1.style.color = "black";
		//font_bold_2.style.color = "black";
		//font_bold_3.style.color = "black";
		//font_bold_4.style.color = "black";
		//font_bold_5.style.color = "black";
		//font colors and normals
		//font_normal_0.style.color = "black";
		//font_normal_1.style.color = "black";
		//font_normal_2.style.color = "black";
		//font_normal_3.style.color = "black";
		//font_normal_4.style.color = "black";
		//font_normal_5.style.color = "black";
		//font_normal_6.style.color = "black";
		//font_normal_7.style.color = "black";
		//font_normal_8.style.color = "black";
		//font_normal_9.style.color = "black";
		//font_normal_10.style.color = "black";
	}
}