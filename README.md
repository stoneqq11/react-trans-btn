<h2>INSTALL</h2>
	npm install @dreamland/react-trans-btn --save

<h2>USEAGE</h2>
	import Loading from '@dreamland/react-trans-btn'

	<TransBtn 
		text="点赞" 
		bgColor="#a0a0a0"
		transBgColor="#c0c0c0"
		click={this.doLike}/>

	<TransBtn 
		text="提交" 
		bgColor="#a0a0a0"
		transBgColor="#c0c0c0"
		click={this.commit}
		loading={listData.get('loading')}/>

<h2>PARAMS</h2>
<code>
    @param text {!string}，按钮显示文字
</code>
<br/>
<code>
    @param bgColor {!color}，背景颜色
</code>
<br/>
<code>
    @param transBgColor {!color}，过渡背景颜色
</code>
<br/>
<code>
    @param click {?fn}，点击执行动作
</code>
<br/>
<code>
    @param loading {?boolean}，是否正在执行click
</code>
<br/>
<code>
    @param disable {?boolean}
</code>
<br/>
<code>
    @param disableBgColor {?color}
</code>
