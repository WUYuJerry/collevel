(function($) {

  "use strict";

  // Get viewport
  var viewport;
  var getViewport = function() {
    viewport = {
      width  : $(window).width(),
      height : $(window).height()
    };
  }
  getViewport();

  var pathArray = window.location.pathname.split('/');

  var getCookie = function(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  var tongwenSwitch = function() {
    var tongwen = getCookie("tongwen");
    if (tongwen == "zh-CN") {
      $(".tongwen_s2t").show();
      $(".tongwen_t2s").hide();
    } else {
      $(".tongwen_t2s").show();
      $(".tongwen_s2t").hide();
    }
    $(".tongwen_t2s").on("click", function() {
      $(".tongwen_s2t").show();
      $(this).hide();
    });
    $(".tongwen_s2t").on("click", function() {
      $(".tongwen_t2s").show();
      $(this).hide();
    });
  }

  // Mobile button click
  var mobileBtnClick = function() {
    $(".mbtn, .mlink").on("click", function(e) {
      e.preventDefault();
      console.log(this.id);
      if (!$(this).hasClass("mlink-thememenu")) {
        var btnActive = $(this).hasClass("mbtn") ? "mbtn-active" : "mlink-active";
        console.log(btnActive);
        var panelOpen = "panel-open";
        if ($(this).hasClass(btnActive)) {
          // close
          console.log("close");
          $(this).removeClass(btnActive);
          if ($(".mbtn-active").length == 0 && $(".mlink-active").length == 0) {
            $("body").removeClass(panelOpen);
          }
        } else {
          // open
          console.log("open");
          $(this).addClass(btnActive);
          if ($(".mbtn-active").length > 0 || $(".mlink-active").length > 0) {
            $("body").addClass(panelOpen);
          }
        }
      }
    });
  }

  var mobileSearchEvent = function() {
    var $search = $("#search");
    $("#mbtn-search").unbind('click').on("click", function(){
      if ($search.is(":hidden")) {
        $search.slideDown();
        //$("#search .form-text").focus();
      } else {
        $search.slideUp();
        //$("#search .form-text").blur();
      }
      return false;
    });

    $("#page").on("click", function() {
      if (!$search.is(":hidden")) {
        $search.slideUp();
      }
    });
  }

  var fixFixed = function() {
    var $body = $('body');
    $(document)
    .on('focus', 'input', function() {
        $body.addClass('fixfixed');
    })
    .on('blur', 'input', function() {
        $body.removeClass('fixfixed');
    });
  }

  var imgWidthMax = function() {

  }

  var rwdEvent = function(vw) {
    console.log(vw);
    if (vw >= 768) {
      // desktop
      $("#search").prependTo("#header-main > .limiter > .right");
      if ($("body").hasClass("page-node")) {
        if ($("#block-views-similarterms-block_2").length > 0 && $("#block-fb_social-node_comment_test").length > 0) {
          $("#block-views-similarterms-block_2").insertBefore("#block-fb_social-node_comment_test");
        }
      }

      if ($("body").hasClass("node-type-job")) {
        $("#block-views-job_node_v3-block_1").insertBefore("#block-views-job_node_v3-block_2");
      }

      if ($("body").hasClass("node-type-event")) {
        $("#block-views-event_node_v3-block_1").insertBefore("#block-views-event_node_v3-block_2");
      }

      if ($("body").hasClass("node-type-referencebooks")) {
        $(".node-header .book-category").appendTo(".book-info");
        $(".node-header .book-author").appendTo(".book-info");
        $(".node-header .book-keypoint").appendTo(".book-info");
      }

      $("a.contact-popup").attr("href", "/contact?template=magnific");

      $(".node-content img[class^='imagecache']").one("load", function() {
        // do stuff
        var $parent = $(this).parent();
        if ($parent.css("height") != null && $parent.attr('style') !== undefined && $parent.attr('style') !== false) {
          $parent.css("height", "auto");
        }
      }).each(function() {
        if(this.complete) $(this).load();
      });


/*      $(".node-content img[class^='imagecache']").each(function() {
        var $parent = $(this).parent();
        if ($parent.css("height") != null && $parent.attr('style') !== undefined && $parent.attr('style') !== false) {
          $parent.css("height", "auto");
        }
      });*/

      $("#mobile-sidebar-menu").removeClass("sb-left");
    } else {
      // mobile
      $("#search").appendTo("#mobile-header > .limiter");
      $("#search .form-text").val("").attr("placeholder", "搜尋：");
      mobileSearchEvent();
      fixFixed();
      if ($("body").hasClass("page-node")) {
        if ($("#block-views-similarterms-block_2").length > 0 && $("#block-fb_social-node_comment_test").length > 0) {
          $("#block-views-similarterms-block_2").insertAfter("#block-fb_social-node_comment_test");
        }
      }

      if ($("body").hasClass("node-type-job")) {
        $("#block-views-job_node_v3-block_1").insertBefore("#block-fb_social-node_comment_test");
      }

      if ($("body").hasClass("node-type-event")) {
        $("#block-views-event_node_v3-block_1").insertBefore("#block-fb_social-node_comment_test");
      }

      if ($("body").hasClass("node-type-referencebooks")) {
        $(".book-info .book-keypoint").prependTo(".node-header");
        $(".book-info .book-author").prependTo(".node-header");
        $(".book-info .book-category").prependTo(".node-header");
      }

      $("a.contact-popup").attr("href", "/contact");

      $(".node-content img[class^='imagecache']").one("load", function() {
        // do stuff
        var h = $(this).height();
        console.log(h);
        $(this).parent().height(h);
      }).each(function() {
        if(this.complete) $(this).load();
      });

      if (pathArray[1] == "column" && typeof pathArray[2] == 'undefined') {
        $(".page-column .page-title").html("專欄<span class='non-mobile-mode'>作者總覽</span>");
        $(".page-column .etabs a[href='#tab-tid-1151']").html("趨勢<span class='non-mobile-mode'>與</span>觀察");
        $(".page-column .etabs a[href='#tab-tid-1153']").html("創業<span class='non-mobile-mode'>家</span>紀實");
        $(".page-column .title-wrapper").css("opacity", "1");
        $(".page-column .etabs").css("opacity", "1");
      }

      if ($(".menu-thememenu").length == 0) {
        $(".m-main-menu .menu-7232").after("<li class='menu-thememenu'></li>");
      }
      if ($(".menu-thememenu > #mlink-thememenu").length == 0) {
        $("#mlink-thememenu").appendTo(".menu-thememenu");
      }
    }
  }

  // Document ready
  $(document).ready(function() {
    mobileBtnClick();
    tongwenSwitch();
    rwdEvent(viewport.width);
  });

  $(window).load(function() {

  });

  // Window resize
  var resizeTimer;
  var windowResize = function() {
    getViewport();
    rwdEvent(viewport.width);
  };

  $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(windowResize, 250);
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
  });

//})(jQuery);
})(jq1110);