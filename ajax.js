$.get('header-menu.html', {}, function (response) {
    $('div#nav').append(response);
});

$.get('footer.html', {}, function (response) {
    $('div#footer').append(response);
});

$.get('family.html', {}, function (response) {
    $('div#family').append(response);   
});

$.get('hobbies.html', {}, function (response) {
    $('div#hobbies').append(response);
});

$.get('skill.html', {}, function (response) {
    $('div#skill').append(response);
});