$('#keyboard-upper-container').hide();
$('#keyboard-lower-container').show();

$(document).keydown(function (key) {
    if (key.keyCode === 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }
})
$(document).keyup(function (key) {
    if (key.keyCode === 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    }
    $('.highlight').removeClass('highlight');
})
var start;
var finish;
let errors = 0;

// Highlight character on keyboard when typed
$('body').keypress(function (e) {
    $('#' + e.which).addClass('highlight');
    $('#yellow-block').css('left', '+=17.5px');
    if (start === undefined) {
        start = event.timeStamp;
    }
});

let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
    'Too ato too nOt enot one totA not anot tOO aNot',
    'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat',
    'nee ene ate ite tent tiet ent ine ene ete ene ate'];

let sentenceIndex = 0;
let currentSentence = sentences[sentenceIndex];

let letterIndex = 0;
let currentLetter = sentences[sentenceIndex][letterIndex];

$('#sentence').text(currentSentence);
$('#target-letter').text(currentLetter);

//Keypress = run through sentence
$('body').keypress(function (e) {

    if (e.which === currentSentence.charCodeAt(letterIndex)) { // Feedback (glyphicons) on typed letters
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
    } else {
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        errors++;
    }

    if (letterIndex === currentSentence.length - 1) {  // End of sentence

        $('#feedback').empty();
        $('#yellow-block').css('left', '17.5px');

        sentenceIndex++; // Increment sentence + change text in #sentence div
        currentSentence = sentences[sentenceIndex];
        $('#sentence').text(currentSentence);

        letterIndex = 0; // Start over at beginning of new sentence
        $('#target-letter').text(currentLetter);

    } else { // Allows next sentence to appear

        letterIndex++; // Incrementing currentLetter as typing occurs
        currentLetter = sentences[sentenceIndex][letterIndex];
        $('#target-letter').text(currentLetter);
    }

    if (sentenceIndex > sentences.length - 1) { // End of game
        console.log('end');
        $('#sentence').empty();
        finish = event.timeStamp;
        let time = (finish - start);
        let minutes = (time / 60000);
        let wordsPerMinute = (Math.round(55 / minutes - 2 * errors));
        $('#target-letter').text('You typed ' + wordsPerMinute + ' words per minute. To play again, press spacebar.');

        $(document).keydown(function (e) { // Reset game
            if (e.which === 32) {
                window.location.reload();
            }
        })
    }
});


