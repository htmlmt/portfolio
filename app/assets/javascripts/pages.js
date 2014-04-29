$(document).ready(function(){
  
  function getAngle(){
    var el = document.getElementById("main_target");
    var st = window.getComputedStyle(el, null);
    var tr = st.getPropertyValue("-webkit-transform") ||
             st.getPropertyValue("-moz-transform") ||
             st.getPropertyValue("-ms-transform") ||
             st.getPropertyValue("-o-transform") ||
             st.getPropertyValue("transform") ||
             "FAIL";
             
    if ( tr === "none" ) {
      css_angle = 0
      return css_angle
    } else {
    var values = tr.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];

    var css_angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    
    return css_angle
    }
  };
  
  var trackOne = $("#track_one_audio")[0];
  var trackTwo = $("#track_two_audio")[0];
  var trackThree = $("#track_three_audio")[0];
  var trackFour = $("#track_four_audio")[0];
  var trackFive = $("#track_five_audio")[0];
  var trackSix = $("#track_six_audio")[0];
  var trackSeven = $("#track_seven_audio")[0];
  var needleDrop = $("#needle_drop")[0];
  var coffee = $("#coffee")[0];
  
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
  
  $(".coffee").on("click", function(){
    coffee.play();
    setTimeout(function(){
      $(".coffee").css("fill", "#CCCCCC")}, 2000);
    $('.coffee').off();
    $('.coffee').css("cursor", "default")
  });
  
  $('.track_one').click(function(){
    if ( $("#record_label").hasClass("record_spin") === false ) {
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
    $("#main_target").css("transition-property", "all");
    $("#main_target").css("transition-duration", "1s");
    $('#main_target').css("-webkit-transform", "rotate(27deg)");
  });
  
  $('.track_two').click(function(){
    if ( $("#record_label").hasClass("record_spin") === false ) {
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
    $("#main_target").css("transition-property", "all");
    $("#main_target").css("transition-duration", "1s");
    $('#main_target').css("-webkit-transform", "rotate(30deg)");
  });
  
  $('.track_three').click(function(){
    if ( $("#record_label").hasClass("record_spin") === false ) {
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
    $("#main_target").css("transition-property", "all");
    $("#main_target").css("transition-duration", "1s");
    $('#main_target').css("-webkit-transform", "rotate(33deg)");
  });
  
  $('.track_four').click(function(){
    if ( $("#record_label").hasClass("record_spin") === false ) {
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
    $("#main_target").css("transition-property", "all");
    $("#main_target").css("transition-duration", "1s");
    $('#main_target').css("-webkit-transform", "rotate(36deg)");
  });
  
  $('.track_five').click(function(){
    if ( $("#record_label").hasClass("record_spin") === false ) {
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
    $("#main_target").css("transition-property", "all");
    $("#main_target").css("transition-duration", "1s");
    $('#main_target').css("-webkit-transform", "rotate(39deg)");
  });
  
  $('.track_six').click(function(){
    if ( $("#record_label").hasClass("record_spin") === false ) {
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
    $("#main_target").css("transition-property", "all");
    $("#main_target").css("transition-duration", "1s");
    $('#main_target').css("-webkit-transform", "rotate(43deg)");
  });
  
  $('.track_seven').click(function(){
    if ( $("#record_label").hasClass("record_spin") === false ) {
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
    $("#main_target").css("transition-property", "all");
    $("#main_target").css("transition-duration", "1s");
    $('#main_target').css("-webkit-transform", "rotate(46deg)");
  });
  
  $('#stop').click(function(){
    $(".record_spin").one('animationiteration webkitAnimationIteration', function() {
      $("#record_label").removeClass("record_spin");
    });
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
    $("#main_target").css("transition-property", "all");
    $("#main_target").css("transition-duration", "1s");
    $('#main_target').css("-webkit-transform", "rotate(0deg)");
  });
  
  $(document).mousedown(function(){
    $("#main_target").css("transition-property", "all");
    $("#main_target").css("transition-duration", "0s");
  });
  
  $("#needle").mouseup(function(){
    var css_angle = getAngle()
    if ( css_angle > 0 && css_angle < 24 || css_angle > 50 ) {
      $(".record_spin").one('animationiteration webkitAnimationIteration', function() {
        $("#record_label").removeClass("record_spin");
      });
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
      $("#main_target").css("transition-property", "all");
      $("#main_target").css("transition-duration", "1s");
      $('#main_target').css("-webkit-transform", "rotate(0deg)");
    } else if ( css_angle >= 24 && css_angle < 28 ) {
      $("#main_target").css("transition-property", "all");
      $("#main_target").css("transition-duration", "1s");
      $('#main_target').css("-webkit-transform", "rotate(27deg)");
      $('.track_one').click();
    } else if ( css_angle >= 28 && css_angle < 32 ) {
      $("#main_target").css("transition-property", "all");
      $("#main_target").css("transition-duration", "1s");
      $('#main_target').css("-webkit-transform", "rotate(30deg)");
      $('.track_two').click();
    } else if ( css_angle >= 32 && css_angle < 35 ) {
      $("#main_target").css("transition-property", "all");
      $("#main_target").css("transition-duration", "1s");
      $('#main_target').css("-webkit-transform", "rotate(33deg)");
      $('.track_three').click();
    } else if ( css_angle >= 35 && css_angle < 37 ) {
      $("#main_target").css("transition-property", "all");
      $("#main_target").css("transition-duration", "1s");
      $('#main_target').css("-webkit-transform", "rotate(36deg)");
      $('.track_four').click();
    } else if ( css_angle >= 37 && css_angle < 41 ) {
      $("#main_target").css("transition-property", "all");
      $("#main_target").css("transition-duration", "1s");
      $('#main_target').css("-webkit-transform", "rotate(39deg)");
      $('.track_five').click();
    } else if ( css_angle >= 41 && css_angle < 44 ) {
      $("#main_target").css("transition-property", "all");
      $("#main_target").css("transition-duration", "1s");
      $('#main_target').css("-webkit-transform", "rotate(43deg)");
      $('.track_six').click();
    } else if ( css_angle >= 44 && css_angle < 50 ) {
      $("#main_target").css("transition-property", "all");
      $("#main_target").css("transition-duration", "1s");
      $('#main_target').css("-webkit-transform", "rotate(46deg)");
      $('.track_seven').click();
    }
  });
  
  var dragging = false

  $(function() {
      var target = $('#needle');
      var mainTarget = $('#main_target');
  	var offset = mainTarget.offset();
      target.mousedown(function() {
          dragging = true
      })
      $(document).mouseup(function() {
          dragging = false
      })
      $(document).mousemove(function(e) {
          if (dragging) {

  			var center_x = (offset.left) + (mainTarget.width()/2);
  			var center_y = (offset.top) + (mainTarget.height()/2);
  			var mouse_x = e.pageX; var mouse_y = e.pageY;
  			var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
  			var degree = (radians * (180 / Math.PI) * -1); 	
              mainTarget.css('-moz-transform', 'rotate(' + degree + 'deg)');
              mainTarget.css('-moz-transform-origin', '50% 50%');
              mainTarget.css('-webkit-transform', 'rotate(' + degree + 'deg)');
              mainTarget.css('-webkit-transform-origin', '50% 50%');
              mainTarget.css('-o-transform', 'rotate(' + degree + 'deg)');
              mainTarget.css('-o-transform-origin', '50% 50%');
              mainTarget.css('-ms-transform', 'rotate(' + degree + 'deg)');
              mainTarget.css('-ms-transform-origin', '50% 50%');
          }
      })
  });
});