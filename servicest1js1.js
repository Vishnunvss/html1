
//inroom service main tabs
$("#inroomtabs_1").tabs({
	heightStyle:"content",
	 classes: {
    "ui-tabs": "highlight"
  }});

//luxuryservices main tabs
$("#luxurytabs_1").tabs({
	heightStyle:"content",
	 classes: {
    "ui-tabs": "highlight"
  }});


//datepicker for cabdate

$("#lxcabdate").datepicker({
	  numberOfMonths:1,

  showWeek:true,
  weekHeader:"wk no:",
  showOtherMonths:true,
  dateFormat: 'yy-mm-dd',
  minDate:0,
  maxDate:+2,


});

//elecronic gadget accordion
$("#ireleacc1").accordion({
	heightStyle:true,
	collapsible:true,
	animate:200,
});