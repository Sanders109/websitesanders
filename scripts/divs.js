$(function() {
    function abso(tag) {
        $(tag).css({
            //position: 'absolute',
            width: $(window).width(),
            height: $(window).height()
        });
    }

    function scale() {
        var vid = $('#video');
        var vid_w_orig = 1920;
        var vid_h_orig = 1080;
        var next_div = $('#section-1');
        var next_container = $('.section-container');
        // get the parent element size
        var container_w = vid.parent().width();
        var container_h = vid.parent().height();

        // use largest scale factor of horizontal/vertical
        var scale_w = container_w / vid_w_orig;
        var scale_h = container_h / vid_h_orig;
        var scale = scale_w > scale_h ? scale_w : scale_h;

        // scale the video
        vid.width(scale * vid_w_orig);
        vid.height(scale * vid_h_orig);

        next_div.css({
            //	marginTop: scale * vid_h_orig,
            width: $(window).width(),
            height: $(window).height()
        });
        next_container.css({
            width: $(window).width(),
            height: $(window).height() + 700
        });
    }

    /*$(window).resize(function() {
        abso('#window');
        scale();
    });*/
    $window.on('scroll resize load', function() {
        abso('#window');
        scale();
    });

    abso('#window');
    scale();
});