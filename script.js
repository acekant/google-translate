$('#button').click(function(){
  translate();
});

function translate(){
  var sourceText = $('textarea#sourceText').val();
  var sourceLang = $('#sourceLang').val();
  var targetLang = $('#targetLang').val();

  // Check if source and target languages are different
  if (sourceLang === targetLang) {
    alert("Source and target languages should be different.");
    return;
  }

  var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);

  $.getJSON(url, function(data) {
    $('textarea#resultText').val(data[0][0][0]);
  });
}
