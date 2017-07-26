    $.ajax({url: "https://api.myjson.com/bins/pn4zj", success: function(result){
		var emails=result.data
		for(i=0;i<emails.length;i++){
        $(".mail-content").append('<div class="single-mail">\
		<img src="'+emails[i].pic+'" /><div class="person-name">'+emails[i].username+'</div><div class="mail-subject">'+emails[i].mail_subject+'</div><div class="sent-time">'+emails[i].time+'</div></div>');
		}
    }});