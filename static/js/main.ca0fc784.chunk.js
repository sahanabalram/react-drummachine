(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(7),o=n.n(i),s=(n(13),n(1)),c=n(2),d=n(4),l=n(3),u=n(5),p=(n(15),[{id:"snare",letter:"Q",src:"https://www.myinstants.com/media/sounds/snare.mp3"},{id:"bass 1",letter:"W",src:"https://www.myinstants.com/media/sounds/bass-drum.mp3"},{id:"bongo",letter:"E",src:"http://tipiwiki.free.fr/snd/Percussion(4e)2.wav"},{id:"tom tom",letter:"A",src:"http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav"},{id:"bass 3",letter:"S",src:"http://billor.chsh.chc.edu.tw/sound/bass4.wav"},{id:"shotgun",letter:"D",src:"http://david.guerrero.free.fr/Effects/ShotgunReload.wav"},{id:"high hat",letter:"Z",src:"http://www.denhaku.com/r_box/tr707/closed.wav"},{id:"drum hit",letter:"X",src:"http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3"},{id:"laser",letter:"C",src:"http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav"}]),h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).handleKeydown=function(e){e.keyCode===n.props.letter.charCodeAt()&&(n.audio.play(),n.audio.currentTime=0,n.props.handleDisplay(n.props.id))},n.handleClick=function(){n.audio.play(),n.audio.currentTime=0,n.props.handleDisplay(n.props.id)},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeydown),window.focus()}},{key:"componentWillMount",value:function(){document.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"drum-pad",id:this.props.id,onClick:this.handleClick},a.a.createElement("h1",null,this.props.letter),a.a.createElement("audio",{className:"clip",ref:function(t){return e.audio=t},src:this.props.src,id:this.props.letter}))}}]),t}(r.Component),m=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(l.a)(t).call(this,e))).handleDisplay=function(e){return n.setState({display:e})},n.state={display:"Click or press Key"},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{id:"drum-machine"},a.a.createElement("div",{id:"display"},this.state.display),a.a.createElement("div",{id:"drum-pads"},p.map(function(t){return a.a.createElement(h,{id:t.id,letter:t.letter,src:t.src,handleDisplay:e.handleDisplay})})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.ca0fc784.chunk.js.map