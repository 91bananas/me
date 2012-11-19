var $right_door = jQuery('div#right_door');
var $left_door = jQuery('div#left_door');

var width = $right_door.width();
var left = $right_door.offset().left;
jQuery(document).ready(function () {
//  $("section#s2 p").fitText(.7);

  //scroll to open curtains
  jQuery(window).scroll(function () {
        var pct_amt = parseInt(jQuery(window).scrollTop()) / (parseInt(jQuery('section#s1').height()));
        if (pct_amt < 0)
            returh;
        var adj_width = width-(width * pct_amt);
        if (left + (width - adj_width) <= jQuery(window).width() - 100)
        {
            $right_door.css({left: left + (width - adj_width)});
            $left_door.css({left: -(width - adj_width)});
        }
  });
  //end curtain scroll
  
  //nav stuff
  jQuery('li.navzor').click(function () {
    jQuery(this).siblings().removeClass('navactive');
    jQuery(this).toggleClass('navactive');
  });  
    
});