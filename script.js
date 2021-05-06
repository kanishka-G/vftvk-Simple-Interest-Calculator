
$(document).ready(function(){



  $("#inamount").on("click", findthe);



/**Simple clears the Principal textbox**/



  $("#clearthetext").click(function(){



    $("#Principal").val(" ");



  });

/**Simple clears the textboxes**/



$("#clearAll").click(function(){



  $("input").each(function(){



    $(this).val(" ");



  });





});







/** This function calculates the Interest and the Total **/

  function findthe(){

  var thetime = $('#time').val();

  var Peroid= parseFloat($("#Peroid").val());

  var Principal = parseFloat($("#Principal").val());

  var rate = parseFloat($("#rate").val()).toFixed(9);



  if(thetime === 'Months'){



  Peroid= Period/12;



  }

  else if(thetime === 'Days'){



  Peroid= Peroid/365;



  }

  else if (thetime== 'Weeks'){

    Peroid = Peroid/52.1429;

  }

  else if(thetime =='Quarters'){

    Peroid = Peroid/4;

  }

    var Interest = 0 ;

    var Amount = 0;

    rateone = rate/100;

    var Interest = (Principal * rateone * Peroid).toFixed(3) ;

    var Interest= parseFloat(Interest);

    var Amount =  Interest + Principal;

    $("#thetextInA").val(Interest);

    $("#tamount").val(Amount );





  }







});/**The End**/      
