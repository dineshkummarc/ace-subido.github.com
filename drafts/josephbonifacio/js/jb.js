(function(a){
	a(function(){
		a("#aboutdrop").click(function(){
			a(".toggle-dropheader").hasClass("open-gear")?(a("#profiledrop").slideUp(), 
			a(".toggle-dropheader").removeClass("open-gear"),
			a("#close-aboutdrop").removeClass("open-gear"),
			a("#aboutdrop").removeClass("whitelink")):
			(a("#profiledrop").slideDown(),
			a(".toggle-dropheader").addClass("open-gear"),
			a("#close-aboutdrop").addClass("open-gear"),
			a("#aboutdrop").addClass("whitelink"))
		})
		a("#close-aboutdrop").click(function(){
			a(".toggle-dropheader").hasClass("open-gear")?(a("#profiledrop").slideUp(), 
			a(".toggle-dropheader").removeClass("open-gear"),
			a("#close-aboutdrop").removeClass("open-gear"),
			a("#aboutdrop").removeClass("whitelink")):
			(a("#profiledrop").slideDown(),
			a(".toggle-dropheader").addClass("open-gear"),
			a("#close-aboutdrop").addClass("open-gear"),
			a("#aboutdrop").addClass("whitelink"))
		})
		a(".toggle-dropheader").click(function(){
			a(".toggle-dropheader").hasClass("open-gear")?(a("#profiledrop").slideUp(), 
			a(".toggle-dropheader").removeClass("open-gear"),
			a("#close-aboutdrop").removeClass("open-gear"),
			a("#aboutdrop").removeClass("whitelink")):
			(a("#profiledrop").slideDown(),
			a(".toggle-dropheader").addClass("open-gear"),
			a("#close-aboutdrop").addClass("open-gear"),
			a("#aboutdrop").addClass("whitelink"))
		})
	})
})
(jQuery);