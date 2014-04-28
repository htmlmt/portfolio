$(document).ready(function(){
  var trackOne = $("#track_one_audio")[0];
  var trackTwo = $("#track_two_audio")[0];
  var trackThree = $("#track_three_audio")[0];
  var trackFour = $("#track_four_audio")[0];
  var trackFive = $("#track_five_audio")[0];
  var trackSix = $("#track_six_audio")[0];
  var trackSeven = $("#track_seven_audio")[0];
  var needleDrop = $("#needle_drop")[0];
  $(trackOne).on('ended', function() {
     playing = false;
     $(".track_one_record").css("stroke", "#3A3A3A");
     $(".track_one_text").css("fill", "#00B69F");
     $(".track_two").click();
  });
  $(trackTwo).on('ended', function() {
     playing = false;
     $(".track_two_record").css("stroke", "#3A3A3A");
     $(".track_two_text").css("fill", "#00B69F");
     $(".track_three").click();
  });
  $(trackThree).on('ended', function() {
     playing = false;
     $(".track_three_record").css("stroke", "#3A3A3A");
     $(".track_three_text").css("fill", "#00B69F");
     $(".track_four").click();
  });
  $(trackFour).on('ended', function() {
     playing = false;
     $(".track_four_record").css("stroke", "#3A3A3A");
     $(".track_four_text").css("fill", "#00B69F");
     $(".track_five").click();
  });
  $(trackFive).on('ended', function() {
     playing = false;
     $(".track_five_record").css("stroke", "#3A3A3A");
     $(".track_five_text").css("fill", "#00B69F");
     $(".track_six").click();
  });
  $(trackSix).on('ended', function() {
     playing = false;
     $(".track_six_record").css("stroke", "#3A3A3A");
     $(".track_six_text").css("fill", "#00B69F");
     $(".track_seven").click();
  });
  $(trackSeven).on('ended', function() {
     playing = false;
     $(".track_seven_record").css("stroke", "#3A3A3A");
     $(".track_seven_text").css("fill", "#00B69F");
     $("#stop").click();
  });
  
  $(".track_one").on("click", function(){
    if ( $("#record_label").hasClass("record_spin") ) {
      
    } else {
      $("#record_label").addClass("record_spin");
    }
    $(".track").css("opacity", 1.0);
    $(".track_text").css("fill", "#00B69F");
    $(".track_record").css("stroke", "#3A3A3A");
    trackTwo.pause();
    trackTwo.currentTime = 0
    trackThree.pause();
    trackThree.currentTime = 0
    trackFour.pause();
    trackFour.currentTime = 0
    trackFive.pause();
    trackFive.currentTime = 0
    trackSix.pause();
    trackSix.currentTime = 0
    trackSeven.pause();
    trackSeven.currentTime = 0
    setTimeout(function(){
      trackOne.play()}, 500);
    $(".track_one_record").css("stroke", "#666");
    $(".track_one_text").css("fill", "#ad3d32");
  });
  
  $(".track_two").on("click", function(){
    if ( $("#record_label").hasClass("record_spin") ) {
      
    } else {
      $("#record_label").addClass("record_spin");
    }
    $(".track").css("opacity", 1.0);
    $(".track_text").css("fill", "#00B69F");
    $(".track_record").css("stroke", "#3A3A3A");
    trackOne.pause();
    trackOne.currentTime = 0
    trackThree.pause();
    trackThree.currentTime = 0
    trackFour.pause();
    trackFour.currentTime = 0
    trackFive.pause();
    trackFive.currentTime = 0
    trackSix.pause();
    trackSix.currentTime = 0
    trackSeven.pause();
    trackSeven.currentTime = 0
    setTimeout(function(){
      trackTwo.play()}, 500);
    $(".track_two_record").css("stroke", "#666");
    $(".track_two_text").css("fill", "#ad3d32");
  });
  
  $(".track_three").on("click", function(){
    if ( $("#record_label").hasClass("record_spin") ) {
      
    } else {
      $("#record_label").addClass("record_spin");
    }
    $(".track").css("opacity", 1.0);
    $(".track_text").css("fill", "#00B69F");
    $(".track_record").css("stroke", "#3A3A3A");
    trackOne.pause();
    trackOne.currentTime = 0
    trackTwo.pause();
    trackTwo.currentTime = 0
    trackFour.pause();
    trackFour.currentTime = 0
    trackFive.pause();
    trackFive.currentTime = 0
    trackSix.pause();
    trackSix.currentTime = 0
    trackSeven.pause();
    trackSeven.currentTime = 0
    setTimeout(function(){
      trackThree.play()}, 500);
    $(".track_three_record").css("stroke", "#666");
    $(".track_three_text").css("fill", "#ad3d32");
  });
  
  $(".track_four").on("click", function(){
    if ( $("#record_label").hasClass("record_spin") ) {
      
    } else {
      $("#record_label").addClass("record_spin");
    }
    $(".track").css("opacity", 1.0);
    $(".track_text").css("fill", "#00B69F");
    $(".track_record").css("stroke", "#3A3A3A");
    trackOne.pause();
    trackOne.currentTime = 0
    trackTwo.pause();
    trackTwo.currentTime = 0
    trackThree.pause();
    trackThree.currentTime = 0
    trackFive.pause();
    trackFive.currentTime = 0
    trackSix.pause();
    trackSix.currentTime = 0
    trackSeven.pause();
    trackSeven.currentTime = 0
    setTimeout(function(){
      trackFour.play()}, 500);
    $(".track_four_record").css("stroke", "#666");
    $(".track_four_text").css("fill", "#ad3d32");
  });
  
  $(".track_five").on("click", function(){
    if ( $("#record_label").hasClass("record_spin") ) {
      
    } else {
      $("#record_label").addClass("record_spin");
    }
    $(".track").css("opacity", 1.0);
    $(".track_text").css("fill", "#00B69F");
    $(".track_record").css("stroke", "#3A3A3A");
    trackOne.pause();
    trackOne.currentTime = 0
    trackTwo.pause();
    trackTwo.currentTime = 0
    trackThree.pause();
    trackThree.currentTime = 0
    trackFour.pause();
    trackFour.currentTime = 0
    trackSix.pause();
    trackSix.currentTime = 0
    trackSeven.pause();
    trackSeven.currentTime = 0
    setTimeout(function(){
      trackFive.play()}, 500);
    $(".track_five_record").css("stroke", "#666");
    $(".track_five_text").css("fill", "#ad3d32");
  });
  
  $(".track_six").on("click", function(){
    if ( $("#record_label").hasClass("record_spin") ) {
      
    } else {
      $("#record_label").addClass("record_spin");
    }
    $(".track").css("opacity", 1.0);
    $(".track_text").css("fill", "#00B69F");
    $(".track_record").css("stroke", "#3A3A3A");
    trackTwo.pause();
    trackTwo.currentTime = 0
    trackThree.pause();
    trackThree.currentTime = 0
    trackFour.pause();
    trackFour.currentTime = 0
    trackFive.pause();
    trackFive.currentTime = 0
    trackOne.pause();
    trackOne.currentTime = 0
    trackSeven.pause();
    trackSeven.currentTime = 0
    setTimeout(function(){
      trackSix.play()}, 500);
    $(".track_six_record").css("stroke", "#666");
    $(".track_six_text").css("fill", "#ad3d32");
  });
  
  $(".track_seven").on("click", function(){
    if ( $("#record_label").hasClass("record_spin") ) {
      
    } else {
      $("#record_label").addClass("record_spin");
    }
    $(".track").css("opacity", 1.0);
    $(".track_text").css("fill", "#00B69F");
    $(".track_record").css("stroke", "#3A3A3A");
    trackTwo.pause();
    trackTwo.currentTime = 0
    trackThree.pause();
    trackThree.currentTime = 0
    trackFour.pause();
    trackFour.currentTime = 0
    trackFive.pause();
    trackFive.currentTime = 0
    trackSix.pause();
    trackSix.currentTime = 0
    trackOne.pause();
    trackOne.currentTime = 0
    setTimeout(function(){
      trackSeven.play()}, 500);
    $(".track_seven_record").css("stroke", "#666");
    $(".track_seven_text").css("fill", "#ad3d32");
  });
  
  $("#stop").on("click", function(){
    setTimeout(function(){
      $("#record_label").removeClass("record_spin")}, 3000);
    trackOne.pause();
    trackOne.currentTime = 0
    trackTwo.pause();
    trackTwo.currentTime = 0
    trackThree.pause();
    trackThree.currentTime = 0
    trackFour.pause();
    trackFour.currentTime = 0
    trackFive.pause();
    trackFive.currentTime = 0
    trackSix.pause();
    trackSix.currentTime = 0
    trackSeven.pause();
    trackSeven.currentTime = 0
    $(".track_text").css("fill", "#00B69F");
    $(".track_record").css("stroke", "#3A3A3A");
  });
  
  $('.track_one').click(function(){
      var angle = $('#arm').getRotateAngle();
      if ( angle == 0 ) {
        turn = 25
      } else if ( angle == 28 ) {
        turn = -3
      } else if ( angle == 31 ) {
        turn = -6
      } else if ( angle == 34 ) {
        turn = -9
      } else if ( angle == 38 ) {
        turn = -13
      } else if ( angle == 41 ) {
        turn = -16
      } else if ( angle == 25 ) {
        turn = 0
      } else {
        turn = -19
      }
      destination = +angle + +turn;
      $('#arm').rotate({animateTo:destination});
  });
  
  $('.track_two').click(function(){
      var angle = $('#arm').getRotateAngle();
      if ( angle == 0 ) {
        turn = 28
      } else if ( angle == 31 ) {
        turn = -3
      } else if ( angle == 34 ) {
        turn = -6
      } else if ( angle == 38 ) {
        turn = -10
      } else if ( angle == 41 ) {
        turn = -13
      } else if ( angle == 44 ) {
        turn = -16
      } else if ( angle == 28 ) {
        turn = 0
      } else {
        turn = 3
      }
      destination = +angle + +turn;
      $('#arm').rotate({animateTo:destination});
  });
  
  $('.track_three').click(function(){
      var angle = $('#arm').getRotateAngle();
      if ( angle == 0 ) {
        turn = 31
      } else if ( angle == 34 ) {
        turn = -3
      } else if ( angle == 38 ) {
        turn = -7
      } else if ( angle == 41 ) {
        turn = -10
      } else if ( angle == 44 ) {
        turn = -13
      } else if ( angle == 25 ) {
        turn = 6
      } else if ( angle == 31 ) {
        turn = 0
      } else {
        turn = 3
      }
      destination = +angle + +turn;
      $('#arm').rotate({animateTo:destination});
  });
  
  $('.track_four').click(function(){
      var angle = $('#arm').getRotateAngle();
      if ( angle == 0 ) {
        turn = 34
      } else if ( angle == 38 ) {
        turn = -4
      } else if ( angle == 41 ) {
        turn = -7
      } else if ( angle == 44 ) {
        turn = -10
      } else if ( angle == 25 ) {
        turn = 9
      } else if ( angle == 28 ) {
        turn = 6
      } else if ( angle == 34 ) {
        turn = 0
      } else {
        turn = 3
      }
      destination = +angle + +turn;
      $('#arm').rotate({animateTo:destination});
  });
  
  $('.track_five').click(function(){
      var angle = $('#arm').getRotateAngle();
      if ( angle == 0 ) {
        turn = 38
      } else if ( angle == 41 ) {
        turn = -3
      } else if ( angle == 44 ) {
        turn = -6
      } else if ( angle == 25 ) {
        turn = 13
      } else if ( angle == 28 ) {
        turn = 10
      } else if ( angle == 31 ) {
        turn = 7
      } else if ( angle == 38 ) {
        turn = 0
      } else {
        turn = 4
      }
      destination = +angle + +turn;
      $('#arm').rotate({animateTo:destination});
  });
  
  $('.track_six').click(function(){
      var angle = $('#arm').getRotateAngle();
      if ( angle == 0 ) {
        turn = 41
      } else if ( angle == 44 ) {
        turn = -3
      } else if ( angle == 25 ) {
        turn = 16
      } else if ( angle == 28 ) {
        turn = 13
      } else if ( angle == 31 ) {
        turn = 10
      } else if ( angle == 34 ) {
        turn = 7
      } else if ( angle == 41 ) {
        turn = 0
      } else {
        turn = 3
      }
      destination = +angle + +turn;
      $('#arm').rotate({animateTo:destination});
  });
  
  $('.track_seven').click(function(){
      var angle = $('#arm').getRotateAngle();
      if ( angle == 0 ) {
        turn = 44
      } else if ( angle == 25 ) {
        turn = 19
      } else if ( angle == 28 ) {
        turn = 16
      } else if ( angle == 31 ) {
        turn = 13
      } else if ( angle == 34 ) {
        turn = 10
      } else if ( angle == 38 ) {
        turn = 6
      } else if ( angle == 44 ) {
        turn = 0
      } else {
        turn = 3
      }
      destination = +angle + +turn;
      $('#arm').rotate({animateTo:destination});
  });
  
  $('#stop').click(function(){
      var angle = $('#arm').getRotateAngle();
      if ( angle == 0 ) {
        turn = 0
      } else if ( angle == 25 ) {
        turn = -25
      } else if ( angle == 28 ) {
        turn = -28
      } else if ( angle == 31 ) {
        turn = -31
      } else if ( angle == 34 ) {
        turn = -34
      } else if ( angle == 38 ) {
        turn = -38
      } else if ( angle == 41 ) {
        turn = -41
      } else {
        turn = -44
      }
      destination = +angle + +turn;
      $('#arm').rotate({animateTo:destination});
      $(".record_spin").one('animationiteration webkitAnimationIteration', function() {
        $("#record_label").removeClass("record_spin");
      });
  });
});