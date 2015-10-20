var Steam = require('my-steam-webapi');

// Set global Steam API Key
Steam.key = "F412C19B0BE039A198598E13F2959454";

Steam.ready(function(err) {
    if (err) return console.log(err);

    var steam = new Steam();

    // Retrieve the steam ID from a steam username/communityID
    steam.resolveVanityURL({vanityurl:'Break7533'}, function(err, data) {
        console.log(data);
        // data -> { steamid: '76561198021300690', success: 1 }

		data.get_sent_offers =true;
		data.get_received_offers =true;
		data.get_descriptions  =false;
		data.language ="english";
		data.active_only  =false;
		data.historical_only  = false;
		data.time_historical_cutoff  = false;
        // getPlayerItems requires { gameid, steamid }
        steam.getTradeOffers(data, function (err, data) {
            console.log(data);

        });
    });

});