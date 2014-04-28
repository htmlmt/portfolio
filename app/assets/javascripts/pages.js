$(document).ready(function(){
  var trackOne = $("#track_one_audio")[0];
  var trackTwo = $("#track_two_audio")[0];
  var trackThree = $("#track_three_audio")[0];
  var trackFour = $("#track_four_audio")[0];
  var trackFive = $("#track_five_audio")[0];
  var trackSix = $("#track_six_audio")[0];
  var trackSeven = $("#track_seven_audio")[0];
  $(trackOne).on('ended', function() {
     playing = false;
     $("#record_label").show();
  });
  $(trackTwo).on('ended', function() {
     playing = false;
     $("#record_label").show();
  });
  $(trackThree).on('ended', function() {
     playing = false;
     $("#record_label").show();
  });
  $(trackFour).on('ended', function() {
     playing = false;
     $("#record_label").show();
  });
  $(trackFive).on('ended', function() {
     playing = false;
     $("#record_label").show();
  });
  $(trackSix).on('ended', function() {
     playing = false;
     $("#record_label").show();
  });
  $(trackSeven).on('ended', function() {
     playing = false;
     $("#record_label").show();
  });
  
  $(".track_one").on("click", function(){
    $(".track").css("opacity", 1.0);
    $(".track_text").css("fill", "#00B69F");
    $(".track_record").css("stroke", "#3A3A3A");
    $("#record_label").hide();
    trackTwo.pause();
    trackThree.pause();
    trackFour.pause();
    trackFive.pause();
    trackSix.pause();
    trackSeven.pause();
    trackOne.play();
    $(".track_one_record").css("stroke", "#666");
    $(".track_one_text").css("fill", "#ad3d32");
  });
  
  $(".track_two").on("click", function(){
    $(".track").css("opacity", 1.0);
    $(".track_text").css("fill", "#00B69F");
    $(".track_record").css("stroke", "#3A3A3A");
    $("#record_label").hide();
    trackOne.pause();
    trackThree.pause();
    trackFour.pause();
    trackFive.pause();
    trackSix.pause();
    trackSeven.pause();
    trackTwo.play();
    $(".track_two_record").css("stroke", "#666");
    $(".track_two_text").css("fill", "#ad3d32");
  });
  
  $(".track_three").on("click", function(){
    $(".track").css("opacity", 1.0);
    $(".track_text").css("fill", "#00B69F");
    $(".track_record").css("stroke", "#3A3A3A");
    $("#record_label").hide();
    trackTwo.pause();
    trackOne.pause();
    trackFour.pause();
    trackFive.pause();
    trackSix.pause();
    trackSeven.pause();
    trackThree.play();
    $(".track_three_record").css("stroke", "#666");
    $(".track_three_text").css("fill", "#ad3d32");
  });
  
  $(".track_four").on("click", function(){
    $(".track").css("opacity", 1.0);
    $(".track_text").css("fill", "#00B69F");
    $(".track_record").css("stroke", "#3A3A3A");
    $("#record_label").hide();
    trackTwo.pause();
    trackThree.pause();
    trackOne.pause();
    trackFive.pause();
    trackSix.pause();
    trackSeven.pause();
    trackFour.play();
    $(".track_four_record").css("stroke", "#666");
    $(".track_four_text").css("fill", "#ad3d32");
  });
  
  $(".track_five").on("click", function(){
    $(".track").css("opacity", 1.0);
    $(".track_text").css("fill", "#00B69F");
    $(".track_record").css("stroke", "#3A3A3A");
    $("#record_label").hide();
    trackTwo.pause();
    trackThree.pause();
    trackFour.pause();
    trackOne.pause();
    trackSix.pause();
    trackSeven.pause();
    trackFive.play();
    $(".track_five_record").css("stroke", "#666");
    $(".track_five_text").css("fill", "#ad3d32");
  });
  
  $(".track_six").on("click", function(){
    $(".track").css("opacity", 1.0);
    $(".track_text").css("fill", "#00B69F");
    $(".track_record").css("stroke", "#3A3A3A");
    $("#record_label").hide();
    trackTwo.pause();
    trackThree.pause();
    trackFour.pause();
    trackFive.pause();
    trackOne.pause();
    trackSeven.pause();
    trackSix.play();
    $(".track_six_record").css("stroke", "#666");
    $(".track_six_text").css("fill", "#ad3d32");
  });
  
  $(".track_seven").on("click", function(){
    $(".track").css("opacity", 1.0);
    $(".track_text").css("fill", "#00B69F");
    $(".track_record").css("stroke", "#3A3A3A");
    $("#record_label").hide();
    trackTwo.pause();
    trackThree.pause();
    trackFour.pause();
    trackFive.pause();
    trackSix.pause();
    trackOne.pause();
    trackSeven.play();
    $(".track_seven_record").css("stroke", "#666");
    $(".track_seven_text").css("fill", "#ad3d32");
  });
});