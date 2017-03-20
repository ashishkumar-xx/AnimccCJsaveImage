this.saveBtn.addEventListener("click", fl_ClickedSaveBtn);

var obj = this.finalObject;
var timeLine = this;
var fileNameCounter=1;

function fl_ClickedSaveBtn() {
 saveMCtoImage(obj)
}

 
function saveMCtoImage(_movieClipName) {
	
var pt = _movieClipName.localToLocal(0, 0, timeLine);
var ctx = canvas.getContext('2d');
var imagedata = ctx.getImageData(pt.x, pt.y, _movieClipName.nominalBounds.width, _movieClipName.nominalBounds.height) ;	

	var newCan = document.createElement("canvas");
		newCan.width=_movieClipName.nominalBounds.width;
		newCan.height=_movieClipName.nominalBounds.height;
 	
	
	var newCanctx = newCan.getContext('2d');
	    newCanctx.putImageData(imagedata,0,0);
	
	
    var b64  = newCan.toDataURL("#FFFFFF", "image/png");
	var aTag = document.createElement('a');
	aTag.download = 'artwork'+fileNameCounter;
	 aTag.href = b64
	 aTag.click();
	fileNameCounter++; 
}
