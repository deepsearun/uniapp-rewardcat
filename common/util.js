// 引入全局配置文件
import config from '@/common/config.js';
export default {
	/**
	 * 获取设备ClientID
	 */
	getClientId() {
		// #ifdef APP-PLUS
		const clientInfo = plus.push.getClientInfo()
		return clientInfo.clientid;
		// #endif
	},
	/**
	 * 隐藏手机号4位
	 * @param {Object} number
	 */
	hiddenPhone(number) {
		number = "" + number;
		var reg = /(\d{3})\d{4}(\d{4})/;
		return number.replace(reg, "$1****$2")
	}
}
