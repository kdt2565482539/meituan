<template>
	<view :style="{'height':windowHeight+'px'}">
		<view v-if="scrollTop<70" class="Navigation">
			<view @click="dizhi()" style="display: flex;flex-flow: nowrap row;justify-content: flex-start;align-items: flex-end;font-size: 12px;width: 100%;">
				<van-icon name="location-o" size="17px" /><text>{{diliweizhi}}</text>
				<van-icon name="arrow" size="10px" />
			</view>
		</view>
		<view v-else class="Navigation2">
			<view>
				<van-search value="" shape="round" background="#ffffff" placeholder="请输入搜索关键词" field-class="search" custom-class="pad" />
			</view>
		</view>
		<view v-if="scrollTop>=70" class="zonghepaixu">
			<view @click="paixu(1)">
				<text>综合排序</text>
				<van-icon v-if="show==true" name="arrow-up" />
				<van-icon v-else name="arrow-down" />
				<view v-if="type==1" class="zhpaix">
					1
				</view>
			</view>
			<view style="position: relative;"><text>销量高</text></view>
			<view><text>速度快</text></view>
			<view><text>津贴优惠</text></view>
			<view @click="paixu(2)">
				<text>筛选</text>
				<van-icon v-if="show==true" name="arrow-up" />
				<van-icon v-else name="arrow-down" />
				<view v-if="type==2" class="zhpaix">
					2
				</view>
			</view>
		</view>

		<van-overlay :show="show" @click="onClickHide" />





		<view class="toptop">
			<view class="topmenu">
				<van-row>
					<van-col span="24">
						<van-search value="" shape="round" background="#ffffff" placeholder="请输入搜索关键词" field-class="search" custom-class="pad" />
					</van-col>
				</van-row>

				<van-row>
					<van-col span="24">
						<view class="searchbow">
							<text>红烧肉</text>
							<text>烤鳗鱼</text>
							<text>玻璃花瓶</text>
							<text>米线</text>
							<text>炸鸡</text>
							<text>奶茶</text>
						</view>
					</van-col>
				</van-row>
				<van-row>
					<van-col span="24" custom-class="down">
						<swiper indicator-dots="true" indicator-color="white" indicator-active-color="#FFB100">
							<swiper-item style="border-radius: 8px;">
								<view class="menu">
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/1.png" mode=""></image>
										<text>美食</text>
									</view>
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/2.png" mode=""></image>
										<text>超市便利</text>
									</view>
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/3.png" mode=""></image>
										<text>蔬菜水果</text>
									</view>
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/4.png" mode=""></image>
										<text>买药</text>
									</view>
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/5.png" mode=""></image>
										<text>跑腿代购</text>
									</view>
								</view>
								<view class="menu">
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/6.png" mode=""></image>
										<text>甜点饮品</text>
									</view>
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/7.png" mode=""></image>
										<text>品质午餐</text>
									</view>
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/8.png" mode=""></image>
										<text>家常菜</text>
									</view>
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/9.png" mode=""></image>
										<text>超值联盟</text>
									</view>
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/10.png" mode=""></image>
										<text>必囤好劵</text>
									</view>
								</view>
							</swiper-item>
							<swiper-item style="border-radius: 8px;">
								<view class="menu">
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/1.png" mode=""></image>
										<text>美食</text>
									</view>
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/1.png" mode=""></image>
										<text>美食</text>
									</view>
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/1.png" mode=""></image>
										<text>美食</text>
									</view>
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/1.png" mode=""></image>
										<text>美食</text>
									</view>
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/1.png" mode=""></image>
										<text>美食</text>
									</view>
								</view>
								<view class="menu">
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/1.png" mode=""></image>
										<text>美食</text>
									</view>
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/1.png" mode=""></image>
										<text>美食</text>
									</view>
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/1.png" mode=""></image>
										<text>美食</text>
									</view>
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/1.png" mode=""></image>
										<text>美食</text>
									</view>
									<view class="tu">
										<image style="width: 40px;height: 40px;" src="../../static/icon/1.png" mode=""></image>
										<text>美食</text>
									</view>
								</view>
							</swiper-item>
						</swiper>
					</van-col>
				</van-row>

				<van-row>
					<van-col span="24">
						<view style="background-color: #007AFF;">
							<swiper style="height: 50px; width: 100%;" vertical="true">
								<swiper-item>
									1
								</swiper-item>
								<swiper-item>
									2
								</swiper-item>
							</swiper>
						</view>
					</van-col>
				</van-row>

				<van-row>
					<van-col span="24">
						<view style="background-color: white;margin-top: 10px;">
							<view style="display: flex;flex-flow: row nowrap; justify-content: space-between;padding: 5px 10px;">
								<view><text style="font-size: 20px;color:#826335;">为你优选</text></view>
								<view style="display: flex;align-items: center;"><text style="font-size: 12px;">更多</text>
									<van-icon size="12px" name="arrow" />
								</view>
							</view>
							<view style="display: flex;justify-content: space-between;">
								<view class="weiniyouxuanimg">
									<view>
										<image src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3224187541,3904254638&fm=26&gp=0.jpg"
										 mode=""></image>
									</view>
									<view><text>欣欣黄焖鸡</text></view>
								</view>
								<view class="weiniyouxuanimg">
									<view>
										<image src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3224187541,3904254638&fm=26&gp=0.jpg"
										 mode=""></image>
									</view>
									<view><text>十八味蒸鲜</text></view>
								</view>
								<view class="weiniyouxuanimg">
									<view>
										<image src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3224187541,3904254638&fm=26&gp=0.jpg"
										 mode=""></image>
									</view>
									<view><text>肯德基宅基送</text></view>
								</view>
							</view>
						</view>
					</van-col>

				</van-row>

			</view>
		</view>


	</view>
</template>

<script>
	var QQMapWX = require('@/config/qqmap-wx-jssdk.js');
	var qqmapsdk = new QQMapWX({
		key: 'BWOBZ-Z3FH3-B6A3U-YHYW5-4WJKK-LMBVO'
	});
	var pages
	export default {
		data() {
			return {
				windowWidth: 0,
				windowHeight: 0,
				scrollTop: 0,
				"type": 0,
				"show": false,
				diliweizhi: "未开启定位权限"
			}
		},
		onLoad() {
			console.log("onload")
			pages = this
			uni.getSystemInfo({
				success: function(res) {
					pages.windowWidth = res.windowWidth
					pages.windowHeight = res.windowHeight
				}
			});
			uni.getLocation({
				success: function(res) {
	
							qqmapsdk.reverseGeocoder({
								location: {
									latitude: res.latitude,
									longitude: res.longitude
								},
								success: function(res) {
									
									pages.diliweizhi = res.result.formatted_addresses.recommend
								},
								fail: function(err) {
									console.log(err)
								}
							})


				}
			});

		},
		methods: {
			dizhi() {
				uni.navigateTo({
					url: "../dizhi/dizhi",
					success: function(res) {
						console.log(res)
					},
					events: {
						dzinformation: function(data) {
							console.log(data)
							qqmapsdk.reverseGeocoder({
								location: {
									latitude: data.latitude,
									longitude: data.longitude
								},
								success: function(res) {
								
									pages.diliweizhi = res.result.formatted_addresses.recommend
									
								},
								fail: function(err) {
									console.log(err)
								}
							})

						}
					}
				})
			},
			paixu(num) {
				pages.type = num
				pages.show = true
			},
			onClickHide() {
				this.show = false
				pages.type = 0
			}
		},
		onPageScroll(res) {
			this.scrollTop = res.scrollTop
		}
	}
</script>

<style>
	@import "@/static/css/meituan.css"
</style>
