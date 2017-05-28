/// <reference path="../node_modules/@types/jquery/index.d.ts"/>

namespace Viewer {    

	declare var Webcam: any

	let imageIndex = 0

	let nextImage = ()=> {
		let imagesJ = $('#results').children()
		imageIndex++

		if(imageIndex >= imagesJ.length) {
			imageIndex = 0
		}

		// avoid to use hide() / show() because it affects the size of dom element in chrome which is a problem with the thumbnail scrollbar
		imagesJ.css({opacity: 0})
		$(imagesJ[imageIndex]).css({opacity: 1})
	}

	let addImage = (imageJ: any)=> {
		$("#results").append(imageJ)
		nextImage()
	}

	(<any>window).addImage = addImage

	let removeImage = (imageAlt: string)=> {
		$('#results').children("[alt='"+imageAlt+"']").remove()
		nextImage()
	}

	(<any>window).removeImage = removeImage

	document.addEventListener("DOMContentLoaded", function (event) {
	    setInterval(nextImage, 300)
	    $("#results").append($(self.opener.document.body).find("#results").children().clone())
	});

}


