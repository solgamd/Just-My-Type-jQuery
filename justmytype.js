$('#keyboard-upper-container').hide();
$('#keyboard-lower-container').show();

$(document).on('keydown', function (key) {
    if (key.keyCode === 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }
})
$(document).on('keyup', function (key) {
    if (key.keyCode === 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    }
    $('.highlight').removeClass('highlight');
})
// Append to the screen (be careful)
// Char Code diff between keyup/down and keypress

// Highlight character on keyboard when typed
$(document).keypress(function (e) {
    $('#' + e.which).addClass('highlight');
});

let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
                    'Too ato too nOt enot one totA not anot tOO aNot',
                    'oat itain oat tain nate eate tea anne inant nean',
                    'itant eate anot eat nato inate eat anot tain eat',
                    'nee ene ate ite tent tiet ent ine ene ete ene ate'];

let line = sentences[0];
$('#sentence').append(line);

let letter = sentences[0][0];
$('#target-letter').append(letter);

if (keypress() === true) {
    letter++;
}





// $(document).keydown(function () {
//     $('#yellow-block').css('left', '+=17.5px');
//     if (letter > sentences.length) {
//         line++;
//     }
// })



