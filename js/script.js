var computerSize = [1024, 768];
var tabletSize = [768, 667];
var phoneSize = [320, 480];	
	
function setComputerSize(){
  setIframeSize(computerSize);
}

function setTabletSize(){
  setIframeSize(tabletSize);
}

function setPhoneSize(){
  setIframeSize(phoneSize);
}

function setIframeSize(size){
  $("iframe").width(size[0]);
  $("iframe").height(size[1]);
}
