<template>
	<view>
	这是地址
	</view>
</template>

<script>
	var _this;
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad() {
			_this=this
			uni.chooseLocation({
			    success: function (res) {
			        console.log('位置名称：' + res.name);
			        console.log('详细地址：' + res.address);
			        console.log('纬度：' + res.latitude);
			        console.log('经度：' + res.longitude);
					var eventChannel=_this.getOpenerEventChannel()
					eventChannel.emit('dzinformation', {'latitude':res.latitude,'longitude':res.longitude});
					uni.navigateBack({
					    delta: 1
					});
			    }
			});
			
			uni.request({
				url:'http://192.168.31.232:3000/login',
				data:{"usname":'admin1',"uspass":'1234561'},
				method:'POST',
				dataType:JSON,
				success:function(res){
					var sessionID=JSON.parse(res.data)
					 uni.setStorageSync('sessionID',sessionID.sessionID);
				}
			})
		}
	}
</script>

<style>

</style>
