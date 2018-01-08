function getTree (x) {
	for (var i=0; i<=x; i++) {
		var star="";
		for (var j=x; j>i; j--){
			star +=" ";
		}
		for (var k=0; k<=i; k++) {
			star +="*";
		}
		for (var l=0; l<=i; l++) {
			star +="*";
		}
		console.log(star);
	}
}

getTree(5);
