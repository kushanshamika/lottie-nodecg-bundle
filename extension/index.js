'use strict';

module.exports = function (nodecg) {
	nodecg.listenFor('requestLowerThird', play);

	function play(type) {
		nodecg.sendMessage('startLowerThird', type)
	}
};
