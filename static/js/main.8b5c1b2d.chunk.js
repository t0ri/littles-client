(this["webpackJsonplittles-js"]=this["webpackJsonplittles-js"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"type":"nerve","text":"I felt overwhelmed all day.","date":"Wed Mar 17 2019 11:03:21 GMT-0700"},{"type":"win","text":"Pet a golden retriever in the sun today!","date":"Wed Mar 17 2020 11:03:21 GMT-0700"},{"type":"win","text":"I went out and got groceries.","date":"Wed Mar 10 2020 11:03:21 GMT-0700"},{"type":"nerve","text":"Felt guilty for being unable to focus today.","date":"Wed Mar 18 2020 11:03:21 GMT-0700"},{"type":"nerve","text":"Nervous to pitch.","date":"Wed Mar 16 2018 11:03:21 GMT-0700"},{"type":"nerve","text":"Can\u2019t stop worrying about phone call coming up.","date":"Wed Feb 18 2020 11:03:21 GMT-0700"},{"type":"win","text":"Took a great walk!","date":"Wed Feb 18 2020 11:03:21 GMT-0700"},{"type":"nerve","text":"Embarrassed myself in front of a lot of people.","date":"Wed Feb 18 2020 11:03:21 GMT-0700"},{"type":"win","text":"Called mom.","date":"Wed Feb 18 2020 11:03:21 GMT-0700"},{"type":"win","text":"Baked cookies!","date":"Wed Feb 18 2020 11:03:21 GMT-0700"},{"type":"nerve","text":"Fancy event coming up...","date":"Wed Feb 18 2020 11:03:21 GMT-0700"},{"type":"win","text":"Went for a long bike ride.","date":"Wed Mar 17 2020 11:03:21 GMT-0700"},{"type":"win","text":"Painted in the park with a snack!","date":"Wed Mar 10 2020 11:03:21 GMT-0700"},{"type":"nerve","text":"School is starting up again...","date":"Wed Mar 18 2020 11:03:21 GMT-0700"},{"type":"nerve","text":"Not enough time in the day!","date":"Wed Mar 16 2018 11:03:21 GMT-0700"},{"type":"nerve","text":"Feeling really unorganized.","date":"Wed Feb 18 2020 11:03:21 GMT-0700"},{"type":"win","text":"Had such a good bagel :)","date":"Wed Feb 18 2020 11:03:21 GMT-0700"},{"type":"nerve","text":"Was wrong in front of a lot of people.","date":"Wed Feb 18 2020 11:03:21 GMT-0700"},{"type":"win","text":"Booked that vacation today!","date":"Wed Feb 18 2020 11:03:21 GMT-0700"},{"type":"win","text":"Hung up some new art","date":"Wed Feb 18 2020 11:03:21 GMT-0700"},{"type":"nerve","text":"Really anxious over nothing!","date":"Wed Feb 18 2020 11:03:21 GMT-0700"}]')},,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(9),r=n.n(l),o=(n(15),n(2)),c=n(3),s=n(5),d=n(4),u=n(1),m=n(6),p=(n(16),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={accountModalOpen:!1},n.accountModalControl=n.accountModalControl.bind(Object(u.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"accountModalControl",value:function(){var e=this.state.accountModalOpen;this.setState((function(e){return{accountModalOpen:!e.accountModalOpen}}));var t=document.getElementById("user-modal");t.classList.remove("user-modal-active"),e||t.classList.add("user-modal-active")}},{key:"render",value:function(){var e=this.state.accountModalOpen;return i.a.createElement("div",{id:"heading-container"},i.a.createElement("span",null,"littles"),i.a.createElement("div",{id:"user-modal",onKeyDown:this.accountModalControl,onClick:this.accountModalControl},e&&i.a.createElement("div",null,i.a.createElement("p",null,"Logout"),i.a.createElement("p",null,"Delete Account"))))}}]),t}(a.Component));n(17);function y(e){var t=e.string,n=e.type;return i.a.createElement("div",{className:"little-stat-container",id:t},i.a.createElement("span",null,n),i.a.createElement("span",null,t))}n(18);var h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.littles;return void 0===e?"waiting...":i.a.createElement("div",{id:"weekly-container"},i.a.createElement(y,{string:"nerves",type:e.filter((function(e){return"nerve"===e.type})).length}),i.a.createElement(y,{string:"littles",type:e.length}),i.a.createElement(y,{string:"wins",type:e.filter((function(e){return"win"===e.type})).length}))}}]),t}(a.Component);n(19);function v(e){var t=e.onChange,n=e.exit,a=e.save;return i.a.createElement("div",null,i.a.createElement("div",{id:"new-little-container-overlay"}),i.a.createElement("div",{id:"new-little-container"},i.a.createElement("img",{onClick:n,onKeyDown:n,alt:"exit",src:"./img/exit.png"}),i.a.createElement("h2",null,"Remember a Little"),i.a.createElement("div",null,i.a.createElement("textarea",{type:"text",placeholder:"Write your little here.",maxLength:"50",onChange:t}),i.a.createElement("div",null,i.a.createElement("button",{type:"button",className:"save-little-btn",id:"nerve",onClick:a},"remember as nerve"),i.a.createElement("button",{type:"button",className:"save-little-btn",id:"win",onClick:a},"remember as win")))))}n(20);var b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={littleItemHover:!1},n.displayDelete=n.displayDelete.bind(Object(u.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"displayDelete",value:function(){this.setState((function(e){return{littleItemHover:!e.littleItemHover}}))}},{key:"render",value:function(){var e=this.state.littleItemHover,t=this.props,n=t.little,a=t.del,l=t.index,r=n.type,o=n.text;return i.a.createElement("div",{className:"little-item","data-index":l,"data-type":r,onClick:this.displayDelete,onKeyDown:this.displayDelete},i.a.createElement("p",null,o),e&&i.a.createElement("img",{className:"little-delete-hidden",id:"little-delete",onClick:a,onKeyDown:a,alt:"Delete Little",src:"./img/exit.png"}))}}]),t}(a.Component),f=(n(21),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.littles,n=e.del;return void 0===t?"waiting...":i.a.createElement("div",{id:"littles-list-container"},i.a.createElement("div",{id:"littles-list"},t.map((function(e,t){return i.a.createElement(b,{index:t,del:n,little:e,key:e.text.split(" ").join("-")})}))))}}]),t}(a.Component)),w=(n(22),n(7)),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={timeFrame:"weekly",littles:void 0,newLittleOpen:!1,newLittle:""},n.user="User",n.newLittleModalStateControl=n.newLittleModalStateControl.bind(Object(u.a)(n)),n.timeFrameStateControl=n.timeFrameStateControl.bind(Object(u.a)(n)),n.getLittlesInTimeFrame=n.getLittlesInTimeFrame.bind(Object(u.a)(n)),n.inputLittleStateHandler=n.inputLittleStateHandler.bind(Object(u.a)(n)),n.saveNewLittle=n.saveNewLittle.bind(Object(u.a)(n)),n.deleteLittle=n.deleteLittle.bind(Object(u.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getLittlesInTimeFrame()}},{key:"getLittlesInTimeFrame",value:function(){var e,t=this.state.timeFrame,n=(new Date).getTime();switch(t){case"weekly":e=w.filter((function(e){return n-new Date(e.date).getTime()<6048e5}));break;case"monthly":e=w.filter((function(e){return n-new Date(e.date).getTime()<2592e6}));break;case"yearly":e=w.filter((function(e){return n-new Date(e.date).getTime()<31536e6}));break;default:e=w}this.setState({littles:e})}},{key:"newLittleModalStateControl",value:function(){this.setState((function(e){return{newLittleOpen:!e.newLittleOpen}}))}},{key:"timeFrameStateControl",value:function(e){var t=this;this.setState({timeFrame:e.target.id}),setTimeout((function(){return t.getLittlesInTimeFrame()}),100)}},{key:"inputLittleStateHandler",value:function(e){this.setState({newLittle:e.target.value})}},{key:"saveNewLittle",value:function(e){var t=this.state,n=t.littles,a=t.newLittle;if(""!==a){var i={type:e.target.id,text:a,date:new Date},l=[];n.forEach((function(e){return l.push(e)})),l.unshift(i),this.setState({littles:l}),e.target.parentElement.firstChild.value="",this.newLittleModalStateControl()}else this.newLittleModalStateControl()}},{key:"createWelcomeMessage",value:function(){var e;switch(this.state.timeFrame){case"weekly":e="here are your week's littles";break;case"monthly":e="here are your month's littles";break;case"yearly":e="here are your year's littles";break;default:e="here are your littles"}return e}},{key:"deleteLittle",value:function(e){var t=this,n=this.state.littles,a=e.target.parentElement.getAttribute("data-index"),i=[];n.forEach((function(e){return i.push(e)})),i.splice(a,1),setTimeout((function(){return t.setState({littles:i})}),100)}},{key:"render",value:function(){var e=this.state,t=e.littles,n=e.newLittleOpen;return i.a.createElement("div",{className:"App"},i.a.createElement(p,null),i.a.createElement("div",{id:"content-container"},i.a.createElement("div",{id:"content-left"},i.a.createElement("div",{id:"content-top"},i.a.createElement("div",{id:"welcome-container"},i.a.createElement("h1",null,"Hi"," ",this.user,","),i.a.createElement("h1",null,this.createWelcomeMessage())),i.a.createElement(h,{littles:t})),i.a.createElement("div",{id:"content-bottom"},i.a.createElement("button",{type:"button",className:"time-frame-btn",id:"weekly",onClick:this.timeFrameStateControl},"View Weekly"),i.a.createElement("button",{type:"button",className:"time-frame-btn",id:"monthly",onClick:this.timeFrameStateControl},"View Monthly"),i.a.createElement("button",{type:"button",className:"time-frame-btn",id:"yearly",onClick:this.timeFrameStateControl},"View Yearly"),i.a.createElement("button",{type:"button",className:"time-frame-btn",id:"all",onClick:this.timeFrameStateControl},"View All"),i.a.createElement("button",{type:"button",id:"new-little-btn",onClick:this.newLittleModalStateControl},"+"))),i.a.createElement("div",{id:"content-right"},i.a.createElement(f,{del:this.deleteLittle,littles:t})),n&&i.a.createElement(v,{exit:this.newLittleModalStateControl,save:this.saveNewLittle,onChange:this.inputLittleStateHandler})))}}]),t}(a.Component);r.a.render(i.a.createElement(g,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.8b5c1b2d.chunk.js.map