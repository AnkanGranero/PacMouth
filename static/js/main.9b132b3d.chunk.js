(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/hotdog1.04b0451b.jpg"},function(e,t,n){e.exports=n.p+"static/media/hotdog2.45617641.jpg"},function(e,t,n){e.exports=n.p+"static/media/hotdog3.18b39bc8.jpg"},function(e,t,n){e.exports=n.p+"static/media/hotdog4.0a8e5703.jpg"},function(e,t,n){e.exports=n.p+"static/media/pacmouth.a9708de1.jpg"},function(e,t,n){e.exports=n.p+"static/media/pacmouth2.893f24a2.jpg"},function(e,t,n){e.exports=n(27)},,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),c=n.n(i),o=(n(23),n(1)),s=n.n(o),u=n(2),d=n(3),l=n(4),h=n(5),f=n(7),p=n(6),g=n(8),x=n(11),m=n.n(x),y=n(12),b=n.n(y),v=n(13),O=n.n(v),w=n(14),k=n.n(w),j=n(15),I=n.n(j),C=n(16),E=n.n(C);n(26);function P(e,t){for(var n=[],a=0;a<e;a++)n.push(t);return n}var D=[m.a,b.a,O.a,k.a];function R(e){return new Promise(function(t){setTimeout(t,e)})}var B=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(f.a)(this,Object(p.a)(t).call(this))).state={arrayOfIndex:P(42,0),direction:!0},e}return Object(g.a)(t,e),Object(h.a)(t,[{key:"handleOutArrayOfIndex",value:function(){for(var e=[],t=0;t<42;t++)e.push(D[0]);this.setState({arrayOfIndex:e})}},{key:"componentDidMount",value:function(){window.addEventListener("keypress",this.handleChangeDirection.bind(this))}},{key:"handleDirection",value:function(e){this.state.direction?this.changeRenderedPictures(e):this.changeRenderedPicturesBackwards(e)}},{key:"changeRenderedPicturesBackwards",value:function(){var e=Object(d.a)(s.a.mark(function e(t){var n,a,r=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.state.arrayOfIndex,n=s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){r.setState({arrayOfIndex:[].concat(Object(u.a)(r.state.arrayOfIndex.slice(0,t)),[(r.state.arrayOfIndex[t]+1)%D.length],Object(u.a)(r.state.arrayOfIndex.slice(t+1)))},e)});case 2:return e.next=4,R(100);case 4:case"end":return e.stop()}},e)}),a=t;case 3:if(!(a>-1)){e.next=8;break}return e.delegateYield(n(a),"t0",5);case 5:a--,e.next=3;break;case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"changeRenderedPictures",value:function(){var e=Object(d.a)(s.a.mark(function e(t){var n,a,r,i=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=this.state.arrayOfIndex,a=s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){i.setState({arrayOfIndex:[].concat(Object(u.a)(i.state.arrayOfIndex.slice(0,t)),[(i.state.arrayOfIndex[t]+1)%D.length],Object(u.a)(i.state.arrayOfIndex.slice(t+1)))},e)});case 2:return e.next=4,R(100);case 4:case"end":return e.stop()}},e)}),r=t;case 3:if(!(r<n.length)){e.next=8;break}return e.delegateYield(a(r),"t0",5);case 5:r++,e.next=3;break;case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"handleChangeDirection",value:function(e){switch(e.key){case"d":this.setState({direction:!this.state.direction})}}},{key:"render",value:function(){var e=this;console.log(this.state.direction);var t={height:"18vh",margin:"5px",padding:"5px",border:"10px solid white "},n={display:"flex",margin:"0px",border:"1px solid black ",flexWrap:"wrap"},a=this.state.direction?I.a:E.a,i=this.state.arrayOfIndex.map(function(a,i){return r.a.createElement("div",{style:n},r.a.createElement("img",{src:D[a],onClick:e.handleDirection.bind(e,i),alt:"",style:t}))});return console.log(this.state.arrayOfIndex),r.a.createElement("div",{style:{backgroundColor:"red"}},r.a.createElement("img",{src:a,style:{display:"flex",height:"30vh",alignContent:"center",marginLeft:"auto",marginRight:"auto",backgroundColor:"red",container:"red"}}),r.a.createElement(S,{images:i}))}}]),t}(a.Component),S=function(e){function t(e){return Object(l.a)(this,t),Object(f.a)(this,Object(p.a)(t).call(this,e))}return Object(g.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",alignContent:"flex-start",background:"red",alignItems:"stretch"}},this.props.images)}}]),t}(a.Component),W=B;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[17,1,2]]]);
//# sourceMappingURL=main.9b132b3d.chunk.js.map