var itemIcons = document.getElementsByClassName('discussion-item-icon')
for (var i = 0, l = itemIcons.length; i < l; i++) {
	var xs = itemIcons[i].getElementsByClassName('octicon-x')
	if (xs.length > 0){
		var x = xs[0]
		x.classList.add('nicer-request')
		itemIcons[i].classList.add('nicer-request-icon')
	}
}
