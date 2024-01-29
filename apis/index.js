import request from '@/utils/request/index.js'

export const getBanner = (data) => {
	return request.request({
		url: '/banner',
		method: 'GET',
		data: data,
		authType: 'None'
	})
}