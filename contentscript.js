function block(){
	//delete ads
	var ads = $('[class^=rightColumnWrapper]').find('[id^=pagelet_ego_pane]');
	ads.children().remove();
	//delete feed
	var feed = $('[id^=topnews_main_stream]');
	feed.children().remove();
	//delete trend of game
	var game_trend = $('[id^=pagelet_canvas_nav_content]');
	game_trend.children().remove();
	//delete the small newfeed
	var feed_sticker = $('[id^=pagelet_ticker]');
	feed_sticker.children().remove();
	//write message
	message = $("<h1></h1>")
		.text("Keep focus on. Don't get distracted by facebook !")
		.css('font-size','40px')
		.css('top','100px')
	feed.append(message);

	//sub message
	sub_message = $("<p></p>")
		.text("Newfeed blocked by PeterNguyen")
		.css('font-size','12px')
		.css('top','20px');
	ads.append(sub_message);
}

function keepBlock(func,delay){
	func();
	setTimeout(func(),1000);
}

keepBlock(block)