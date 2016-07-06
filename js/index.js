$overlay = $('#overlay');

$('img').bind('mouseenter', function () {
    $this = $(this);
    if ($this.not('.over')) {
        $this.addClass('over');
        $overlay.css({
            width  : $this.css('width'),
            height : $this.css('height'), 
            top    : $this.offset().top + 'px',
            left   : $this.offset().left + 'px',
        }).show();
    }
}).bind('mouseout', function () {
    $(this).removeClass('over');
});