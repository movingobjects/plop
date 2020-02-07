
/////////////////////////////////////////////

var textInput = document.getElementById('text-input'),
    saveBtn   = document.getElementById('save-btn');

var savedText = textInput.value;

/////////////////////////////////////////////

saveBtn.addEventListener('click', function() {
  saveText();
});

textInput.addEventListener('input', function() {
  updateModified();
});

document.addEventListener('keydown', function(e) {
  if (e.metaKey && e.key === 'Enter') {
    saveText();
  }
})

/////////////////////////////////////////////

function updateModified() {
  document.body.classList.toggle('text-modified', textInput.value !== savedText);
}

function saveText() {

  var text = textInput.value;

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    var isSaved = (xhr.readyState === 4) && (xhr.status === 200);
    if (isSaved) {
      savedText = textInput.value;

      setTimeout(updateModified, 250);

    }
  }

  xhr.open('POST', 'write.php', true);
  xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  xhr.send('text=' + encodeURIComponent(text));

}

/////////////////////////////////////////////