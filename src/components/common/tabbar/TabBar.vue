<template>
	<div class="tabbar-box">
		<slot></slot>
	</div>
</template>

<script>
</script>

<style>
	.tabbar-box{
		display: flex;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fcfcfc;
		box-shadow: 0px -1px 3px rgba(100,100,100,.2);
	}
	
</style>
