var education = $('#education');
var $window = $(window);

/*function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}*/

function check_if_in_view(section) {
    // eg section = $('section-1')
    var window_height = $window.height();
    var window_width = $window.width();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;
    //var div = document.querySelector('#anchor-1');
    //var divOffset = offset(div);
    //console.log(divOffset.top);
    //console.log(window_top_position);
    //console.log(divOffset.top - window_top_position);

    if (window_top_position >= window_height && window_top_position <= window_height + 300) {
        //console.log('YES');

        var pos = 77.5 - (window_top_position - window_height);
        var op_1 = 1 + pos / 200;
        var op_2 = 1 + pos / 500;
        //console.log(pos);
        if (pos > 0) {
            $('#education').css('transform', `matrix(1, 0, 0, 1, 0, 0)`);
            $('#date-1').css('transform', `matrix(1, 0, 0, 1, 0, 0)`);
            $('#date-2').css('transform', `matrix(1, 0, 0, 1, 0, 0)`);
            $('#section-1').css('opacity', `1`);
        } else if (pos >= 0) {
            $('#education').css('opacity', `1`);
            $('#date-1').css('opacity', `1`);
            $('#date-2').css('opacity', `1`);
            $('#section-1').css('opacity', `${op_2}`);
        } else if (pos > -99 && pos < 0) {
            $('#education').css('transform', `matrix(1, 0, 0, 1, ${pos}, 0)`);
            $('#education').css('opacity', `${op_1}`);
            $('#date-1').css('transform', `matrix(1, 0, 0, 1, 0, ${pos})`);
            $('#date-1').css('opacity', `${op_2}`);
            $('#date-2').css('transform', `matrix(1, 0, 0, 1, 0, ${-pos})`);
            $('#date-2').css('opacity', `${op_2}`);
            $('#section-1').css('opacity', `${op_2}`);
        } else if (pos <= -100 && pos >= -209) {
            $('#education').css('opacity', `${op_1}`);
            $('#date-1').css('transform', `matrix(1, 0, 0, 1, 0, ${pos})`);
            $('#date-1').css('opacity', `${op_2}`);
            $('#date-2').css('transform', `matrix(1, 0, 0, 1, 0, ${-pos})`);
            $('#date-2').css('opacity', `${op_2}`);
            $('#section-1').css('opacity', `${op_2}`);
        } else if (pos <= -210) {
            $('#date-1').css('opacity', `0`);
            $('#date-2').css('opacity', `0`);
            $('#section-1').css('opacity', `0.35`);
        }

        /*} else if (pos >= 79 && pos <= 177) {
            $('#education').css('transform', `matrix(1, 0, 0, 1, -45, 0)`);
        } else if (pos >= 278 && pos <= 290) {
            $('#education').css('transform', `matrix(1, 0, 0, 1, -78, 0)`);
        } 
        */
        //$('#education').css('transform', `matrix(1, 0, 0, 1, ${pos}, 0)`);
    }
}
$window.on('scroll resize load', check_if_in_view);
$window.trigger('scroll');