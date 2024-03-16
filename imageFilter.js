var image = null;
var uploadBTN = getElementById("file");

uploadBTN.addEventListener("change", (event) => {
    image = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event) => {
        image = new Image();
        
    }
});

function loadImage() {}

function showImage() {}

function pixelChange(pixel) {
  var img = new SimpleImage();
  for (var p of img.values()) {
    x = p.getX();
    y = p.getY();
    w = img.getWidth();

  }
}

function applyFilter() {}
