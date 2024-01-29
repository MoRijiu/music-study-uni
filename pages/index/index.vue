<template>
	<view class="content">
		<!-- 轮播图 -->
		<swiper class="swiper" :autoplay="true" :indicator-dots="true" indicator-active-color="#ff372b"
			indicator-color='rgba(255,255,255, .5)' duration="500" :circular="true">
			<swiper-item v-for="item,index in swiper" :key="index">
				<view class="item">
					<image :src="item.imageUrl"></image>
					<view class="label">
						{{ item.typeTitle }}
					</view>
				</view>
			</swiper-item>
		</swiper>
		<!-- 金刚区 -->
		<view class="bar">
			<view class="item" v-for="item, index in contentBar">
				<image :src="item.imgPath"></image>
				<view class="label">{{ item.name }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getBanner
	} from '@/apis/index.js'
	// 引入图片
	import Icon1 from '@/static/image/index/t_1.png'
	import Icon2 from '@/static/image/index/t_2.png'
	import Icon3 from '@/static/image/index/t_3.png'
	import Icon4 from '@/static/image/index/t_4.png'
	import Icon5 from '@/static/image/index/t_5.png'
	export default {
		data() {
			return {
				title: 'Hello',
				swiper: [],
				contentBar: [{
						name: "每日推荐",
						imgPath: Icon1
					},
					{
						name: "歌单",
						imgPath: Icon2
					},
					{
						name: "排行榜",
						imgPath: Icon3
					},
					{
						name: "电台",
						imgPath: Icon4
					},
					{
						name: "直播",
						imgPath: Icon5
					}
				]
			}
		},
		onLoad() {
			this.getBanner()
		},
		methods: {
			// 获取轮播图
			getBanner() {
				getBanner().then(res => {
					console.log(res);
					if (res.code == '200') {
						this.swiper = res.banners
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.swiper {
		height: calc(152 / 411 * 700rpx + 70rpx);

		/deep/ .uni-swiper-dots {
			bottom: 50rpx;
		}

		.item {
			position: relative;
			padding: 35rpx 25rpx;

			image {
				display: block;
				width: 100%;
				height: calc(152 / 411 * 700rpx);
				border-radius: 25rpx;
			}

			.label {
				position: absolute;
				height: 40rpx;
				bottom: 35rpx;
				right: 25rpx;
				background-color: #ff372b;
				z-index: 9;
				color: #fff;
				font-size: 24rpx;
				line-height: 40rpx;
				border-radius: 25rpx 0;
				padding: 0 20rpx;
			}
		}
	}
	.bar {
		display: flex;
		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			flex: 1;
			image {
				display: block;
				width: 80rpx;
				height: 80rpx;
			}
			.label {
				font-size: 24rpx;
				margin-top: 8rpx;
			}
		}
	}
</style>