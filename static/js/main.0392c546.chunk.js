(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/opz_dails.fbb7093a.png"},39:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(19),s=a.n(r),i=(a(27),a(11)),l=a(12),u=a(15),o=a(13),h=a(14),k=(a(28),a(2)),m=(a(29),a(18),a(3)),v=a.n(m),d=a(16),p=a.n(d),b=a(8),T=a.n(b),g=a(1),E=a.n(g),A=(a(30),a(20)),f=a.n(A);a(31);var O=function(e){var t=e.color;return n.a.createElement("div",{style:{width:"85px",alignItems:"center",padding:"5px"}},n.a.createElement(f.a,{percentage:e.percentage,text:e.text,strokeWidth:8,styles:{root:{},path:{stroke:t,strokeLinecap:"butt"},trail:{stroke:"#767777"},text:{fill:"#f88",fontSize:"16px"}}}))},y="#0388C0",I="#C62937",x=function(e){function t(e,a){var c;return Object(i.a)(this,t),(c=Object(u.a)(this,Object(o.a)(t).call(this,e,a))).instrumentTracks=[],c.trackNames=["Kick","Snare","HiHat","Samples","Bass","Lead","Arp","Chord"],c.currentActiveTrack={},c.parseMessage=c.parseMessage.bind(Object(k.a)(c)),c.handleMessage=c.handleMessage.bind(Object(k.a)(c)),c.moduleOutput=c.moduleOutput.bind(Object(k.a)(c)),c.midiCC=c.midiCC.bind(Object(k.a)(c)),c.setActiveTrack=c.setActiveTrack.bind(Object(k.a)(c)),c.saveActiveTrack=c.saveActiveTrack.bind(Object(k.a)(c)),c.handleLfoShape=c.handleLfoShape.bind(Object(k.a)(c)),c}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e,t={trackName:"",p1:"",p2:"",filter:"",resonance:"",attack:"",decay:"",sustain:"",release:"",depth:"",rate:"",dest:"",shape:"",shapeVal:"",fx1:"",fx2:"",pan:"",level:""};for(e=0;e<=7;e++){var a=Object.create(t);this.instrumentTracks.push(a),this.instrumentTracks[e].trackName=this.trackNames[e]}}},{key:"moduleOutput",value:function(){return n.a.createElement("div",{className:"Instrument-tracks-component "},n.a.createElement("span",null,n.a.createElement(p.a,null,n.a.createElement(v.a,{bg:"dark",text:"info"},n.a.createElement(v.a.Title,null,this.currentActiveTrack.trackName)),n.a.createElement(v.a,{bg:"dark",text:"white"},n.a.createElement(T.a,null,n.a.createElement(E.a,null," ",n.a.createElement(v.a.Title,null,n.a.createElement("b",null,"Parameters"))),n.a.createElement(E.a,null,n.a.createElement(O,{percentage:this.currentActiveTrack.p1,text:"P1:".concat(this.currentActiveTrack.p1),color:"#039C53"})),n.a.createElement(E.a,null,n.a.createElement(O,{percentage:this.currentActiveTrack.p2,text:"P2:".concat(this.currentActiveTrack.p2),color:y})),n.a.createElement(E.a,null,n.a.createElement(O,{percentage:this.currentActiveTrack.filter,text:"Filter:".concat(this.currentActiveTrack.filter),color:"#DCA71B"})),n.a.createElement(E.a,null,n.a.createElement(O,{percentage:this.currentActiveTrack.resonance,text:"Reso:".concat(this.currentActiveTrack.resonance),color:I})))),n.a.createElement(v.a,{bg:"dark",text:"success"},n.a.createElement(T.a,null,n.a.createElement(E.a,null,n.a.createElement(v.a.Title,null,n.a.createElement("b",null,"Envelope"))),n.a.createElement(E.a,null,n.a.createElement(O,{percentage:this.currentActiveTrack.attack,text:"A:".concat(this.currentActiveTrack.attack),color:"#039C53"})),n.a.createElement(E.a,null,n.a.createElement(O,{percentage:this.currentActiveTrack.decay,text:"D:".concat(this.currentActiveTrack.decay),color:y})),n.a.createElement(E.a,null,n.a.createElement(O,{percentage:this.currentActiveTrack.sustain,text:"S:".concat(this.currentActiveTrack.sustain),color:"#DCA71B"})),n.a.createElement(E.a,null,n.a.createElement(O,{percentage:this.currentActiveTrack.release,text:"R:".concat(this.currentActiveTrack.release),color:I})))),n.a.createElement(v.a,{bg:"dark",style:{color:"#9e66c1"}},n.a.createElement(T.a,null,n.a.createElement(E.a,null,n.a.createElement(v.a.Title,null,n.a.createElement("b",null,"LFO"))),n.a.createElement(E.a,null,n.a.createElement(O,{percentage:this.currentActiveTrack.depth,text:"Depth:".concat(this.currentActiveTrack.depth),color:"#039C53"})),n.a.createElement(E.a,null,n.a.createElement(O,{percentage:this.currentActiveTrack.rate,text:"Rate:".concat(this.currentActiveTrack.rate),color:y})),n.a.createElement(E.a,null,n.a.createElement(O,{percentage:this.currentActiveTrack.dest,text:"Target:".concat(this.currentActiveTrack.dest),color:"#DCA71B"})),n.a.createElement(E.a,null,n.a.createElement(O,{percentage:this.currentActiveTrack.shapeVal,text:"".concat(this.currentActiveTrack.shape),color:I})))),n.a.createElement(v.a,{bg:"dark",style:{color:"#DCA71B"}},n.a.createElement(T.a,null,n.a.createElement(E.a,null,n.a.createElement(v.a.Title,null,n.a.createElement("b",null,"Master"))),n.a.createElement(E.a,null,n.a.createElement(O,{percentage:this.currentActiveTrack.fx1,text:"Fx1:".concat(this.currentActiveTrack.fx1),color:"#039C53"})),n.a.createElement(E.a,null,n.a.createElement(O,{percentage:this.currentActiveTrack.fx2,text:"Fx2:".concat(this.currentActiveTrack.fx2),color:y})),n.a.createElement(E.a,null,n.a.createElement(O,{percentage:this.currentActiveTrack.pan,text:"Pan:".concat(this.currentActiveTrack.pan),color:"#DCA71B"})),n.a.createElement(E.a,null,n.a.createElement(O,{percentage:this.currentActiveTrack.level,text:"Level:".concat(this.currentActiveTrack.level),color:I})))))))}},{key:"setActiveTrack",value:function(e){this.currentActiveTrack=this.instrumentTracks[e]}},{key:"saveActiveTrack",value:function(e){this.instrumentTracks[e]=this.currentActiveTrack}},{key:"parseMessage",value:function(e){var t=e.data[0],a=e.data[1],c=e.data.length>2?e.data[2]:0,n=this.getTrackId(t);this.setActiveTrack(n),t>175&&t<184&&this.midiCC(a,c),this.saveActiveTrack(n)}},{key:"midiCC",value:function(e,t){switch(e){case 1:this.currentActiveTrack.p1=this.convertTo100Range(t);break;case 2:this.currentActiveTrack.p2=this.convertTo100Range(t);break;case 3:this.currentActiveTrack.filter=this.convertTo100Range(t);break;case 4:this.currentActiveTrack.resonance=this.convertTo100Range(t);break;case 5:this.currentActiveTrack.attack=this.convertTo100Range(t);break;case 6:this.currentActiveTrack.decay=this.convertTo100Range(t);break;case 7:this.currentActiveTrack.sustain=this.convertTo100Range(t);break;case 8:this.currentActiveTrack.release=this.convertTo100Range(t);break;case 9:this.currentActiveTrack.depth=this.convertTo100Range(t);break;case 10:this.currentActiveTrack.rate=this.convertTo100Range(t);break;case 11:this.currentActiveTrack.dest=this.convertTo100Range(t);break;case 12:this.currentActiveTrack.shapeVal=this.convertTo100Range(t),this.handleLfoShape(this.currentActiveTrack.shapeVal);break;case 13:this.currentActiveTrack.fx1=this.convertTo100Range(t);break;case 14:this.currentActiveTrack.fx2=this.convertTo100Range(t);break;case 15:this.currentActiveTrack.pan=this.convertTo100Range(t);break;case 16:this.currentActiveTrack.level=this.convertTo100Range(t)}}},{key:"handleLfoShape",value:function(e){0===e?this.currentActiveTrack.shape="Free":100===e?this.currentActiveTrack.shape="Trig":50===e?this.currentActiveTrack.shape="Sqr":e>0&&e<50?this.currentActiveTrack.shape="fr-sq":e>50&&e<100&&(this.currentActiveTrack.shape="sq-tr")}},{key:"convertTo100Range",value:function(e){return Math.ceil(100*e/127)}},{key:"getTrackId",value:function(e){var t=0;switch(e){case 176:t=0;break;case 177:t=1;break;case 178:t=2;break;case 179:t=3;break;case 180:t=4;break;case 181:t=5;break;case 182:t=6;break;case 183:t=7;break;case 144:t=0;break;case 145:t=1;break;case 146:t=2;break;case 147:t=3;break;case 148:t=4;break;case 149:t=5;break;case 150:t=6;break;case 151:t=7;break;default:t=0}return t}},{key:"handleMessage",value:function(e){return this.parseMessage(e),this.moduleOutput()}},{key:"render",value:function(){return this.handleMessage(this.props.message)}}]),t}(c.Component),M=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(o.a)(t).call(this))).state={midiAccessSuccess:!1,midiAccessDisplay:"",inputs:{},outputs:{},ModuleOutput:"",timingClockCount:0,clock:1,channel:1,note:"C",velocity:0},e.midiMessage="",e.instrumetComponentEnable=!1,e.deviceName="",e.deviceId="",e.onMIDISuccess=e.onMIDISuccess.bind(Object(k.a)(e)),e.onMIDIFailure=e.onMIDIFailure.bind(Object(k.a)(e)),e.getMIDIMessage=e.getMIDIMessage.bind(Object(k.a)(e)),e.noteOn=e.noteOn.bind(Object(k.a)(e)),e.noteOff=e.noteOff.bind(Object(k.a)(e)),e.clockHandler=e.clockHandler.bind(Object(k.a)(e)),e.updateOutPut=e.updateOutPut.bind(Object(k.a)(e)),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){navigator.requestMIDIAccess().then(this.onMIDISuccess,this.onMIDIFailure)}},{key:"updateOutPut",value:function(){this.setState({ModuleOutput:n.a.createElement("div",{className:"OutputModule"},n.a.createElement(v.a,{bg:"dark",style:{height:"6rem"}},n.a.createElement(v.a.Body,null,n.a.createElement(p.a,null,n.a.createElement(T.a,null,n.a.createElement(E.a,null,n.a.createElement("div",{style:{width:"70px",padding:"2px"}},this.state.midiAccessDisplay)),n.a.createElement(E.a,null,n.a.createElement("div",{className:"DeviceDetails"},n.a.createElement("b",null,"Device:")," ",this.deviceName," \xa0",n.a.createElement("b",null,"ID:")," ",this.deviceId,n.a.createElement("br",null),n.a.createElement("b",null,"Clock:")," ",this.state.clock)))))),n.a.createElement(v.a,{bg:"dark"},n.a.createElement("div",null,this.instrumetComponentEnable&&n.a.createElement(x,{message:this.midiMessage}))))})}},{key:"Output",value:function(){return n.a.createElement("div",null,this.state.ModuleOutput)}},{key:"onMIDISuccess",value:function(e){this.setState({midiAccessSuccess:!0,inputs:e.inputs,outputs:e.outputs,displayMessage:"This browser supports MIDI input",midiAccessDisplay:n.a.createElement(v.a,{bg:"success",text:"dark"}," [I] ")});var t=!0,a=!1,c=void 0;try{for(var r,s=e.inputs.values()[Symbol.iterator]();!(t=(r=s.next()).done);t=!0){var i=r.value;i.onmidimessage=this.getMIDIMessage,this.deviceId=i.id,this.deviceName=i.name}}catch(l){a=!0,c=l}finally{try{t||null==s.return||s.return()}finally{if(a)throw c}}console.log("MIDI Access successful"),console.log(e)}},{key:"onMIDIFailure",value:function(){this.setState({midiAccessSuccess:!1,displayMessage:"WebMIDI is not supported by this browser",midiAccessDisplay:n.a.createElement(v.a,{bg:"danger",text:"dark"}," [0] ")}),console.log("WebMIDI is not supported by this browser.")}},{key:"getMIDIMessage",value:function(e){var t=e.data[0],a=e.data[1],c=e.data.length>2?e.data[2]:0;248!==t&&console.log("Command:"+t+", Note:"+a+",Velocity:"+c),(t>143&&t<152||t>175&&t<184)&&(this.midiMessage=e,this.instrumetComponentEnable=!0,this.updateOutPut()),t<144?this.noteOff(a):t<159?c>0?(console.log("Command:"+t+", Note:"+a+",Velocity:"+c),this.noteOn(t,a,c)):this.noteOff(a):248===t&&this.clockHandler()}},{key:"noteOn",value:function(e,t,a){this.setState({channel:e,note:t,velocity:a}),this.updateOutPut()}},{key:"noteOff",value:function(e){this.setState({note:e,velocity:0}),this.updateOutPut()}},{key:"clockHandler",value:function(){this.state.timingClockCount<24?this.setState({timingClockCount:this.state.timingClockCount+1}):(this.setState({timingClockCount:0,clock:this.state.clock+1}),this.state.clock>4&&this.setState({clock:1})),this.updateOutPut()}},{key:"render",value:function(){return this.Output()}}]),t}(c.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{className:"App-logo",alt:"OPZ Dails",src:a(38)})),n.a.createElement("div",null,n.a.createElement(M,null)))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.0392c546.chunk.js.map