
/////////////////////////////////////////////

var textInput = document.getElementById('text-input'),
    saveBtn   = document.getElementById('save-btn');

var savedText = textInput.value;

/////////////////////////////////////////////

saveBtn.addEventListener('click', function() {
  saveText(textInput.value);
});

textInput.addEventListener('input', function() {
  updateModified();
});

/////////////////////////////////////////////

function updateModified() {
  document.body.classList.toggle('text-modified', textInput.value !== savedText);
}

function saveText(text) {

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    var isSaved = (xhr.readyState === 4) && (xhr.status === 200);
    if (isSaved) {
      savedText = textInput.value;
      updateModified();
    }
  }

  xhr.open('POST', 'write.php', true);
  xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  xhr.send('text=' + encodeURIComponent(text));

}

/////////////////////////////////////////////