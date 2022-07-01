$.get('header-menu.html', {}, function (response) {
    $('div#nav').append(response);
});

$.get('footer.html', {}, function (response) {
    $('div#footer').append(response);
});