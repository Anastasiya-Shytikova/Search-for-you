const previewFile = () => {
  var preview = document.querySelector('.form__download-photo');
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
  }

  return preview.src;
};

export default previewFile;
