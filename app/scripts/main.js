// XDomain - v0.7.3 - https://github.com/jpillora/xdomain
// Jaime Pillora <dev@jpillora.com> - MIT Copyright 2015
(function(a,b){(function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};t=a.document,d="before",c="after",m="readyState",l="addEventListener",k="removeEventListener",g="dispatchEvent",q="XMLHttpRequest",h="FormData",n=["load","loadend","loadstart"],e=["progress","abort","error","timeout"],w=parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase())||[])[1]),isNaN(w)&&(w=parseInt((/trident\/.*; rv:(\d+)/.exec(navigator.userAgent.toLowerCase())||[])[1])),(A=Array.prototype).indexOf||(A.indexOf=function(a){var b,c,d,e;for(b=d=0,e=this.length;e>d;b=++d)if(c=this[b],c===a)return b;return-1}),y=function(a,b){return Array.prototype.slice.call(a,b)},s=function(a){return"returnValue"===a||"totalSize"===a||"position"===a},v=function(a,b){var c,d;for(c in a)if(d=a[c],!s(c))try{b[c]=a[c]}catch(e){}return b},x=function(a,b,c){var d,e,f,h;for(e=function(a){return function(d){var e,f,h;e={};for(f in d)s(f)||(h=d[f],e[f]=h===b?c:h);return c[g](a,e)}},f=0,h=a.length;h>f;f++)d=a[f],c._has(d)&&(b["on"+d]=e(d))},u=function(a){var b;if(null!=t.createEventObject)return b=t.createEventObject(),b.type=a,b;try{return new Event(a)}catch(c){return{type:a}}},f=function(a){var c,d,e;return d={},e=function(a){return d[a]||[]},c={},c[l]=function(a,c,f){d[a]=e(a),d[a].indexOf(c)>=0||(f=f===b?d[a].length:f,d[a].splice(f,0,c))},c[k]=function(a,c){var f;return a===b?void(d={}):(c===b&&(d[a]=[]),f=e(a).indexOf(c),void(-1!==f&&e(a).splice(f,1)))},c[g]=function(){var d,f,g,h,i,j,k,l;for(d=y(arguments),f=d.shift(),a||(d[0]=v(d[0],u(f))),h=c["on"+f],h&&h.apply(b,d),l=e(f).concat(e("*")),g=j=0,k=l.length;k>j;g=++j)i=l[g],i.apply(b,d)},c._has=function(a){return!(!d[a]&&!c["on"+a])},a&&(c.listeners=function(a){return y(e(a))},c.on=c[l],c.off=c[k],c.fire=c[g],c.once=function(a,b){var d;return d=function(){return c.off(a,d),b.apply(null,arguments)},c.on(a,d)},c.destroy=function(){return d={}}),c},z=f(!0),z.EventEmitter=f,z[d]=function(a,b){if(a.length<1||a.length>2)throw"invalid hook";return z[l](d,a,b)},z[c]=function(a,b){if(a.length<2||a.length>3)throw"invalid hook";return z[l](c,a,b)},z.enable=function(){a[q]=p,i&&(a[h]=o)},z.disable=function(){a[q]=z[q],a[h]=i},r=z.headers=function(a,b){var c,d,e,f,g,h,i,j,k;switch(null==b&&(b={}),typeof a){case"object":d=[];for(e in a)g=a[e],f=e.toLowerCase(),d.push(""+f+":	"+g);return d.join("\n");case"string":for(d=a.split("\n"),i=0,j=d.length;j>i;i++)c=d[i],/([^:]+):\s*(.+)/.test(c)&&(f=null!=(k=RegExp.$1)?k.toLowerCase():void 0,h=RegExp.$2,null==b[f]&&(b[f]=h));return b}},i=a[h],o=function(a){var b;this.fd=a?new i(a):new i,this.form=a,b=[],Object.defineProperty(this,"entries",{get:function(){var c;return c=a?y(a.querySelectorAll("input,select")).filter(function(a){var b;return"checkbox"!==(b=a.type)&&"radio"!==b||a.checked}).map(function(a){return[a.name,"file"===a.type?a.files:a.value]}):[],c.concat(b)}}),this.append=function(a){return function(){var c;return c=y(arguments),b.push(c),a.fd.append.apply(a.fd,c)}}(this)},i&&(z[h]=i,a[h]=o),j=a[q],z[q]=j,p=a[q]=function(){var a,b,h,i,j,k,p,s,t,u,y,A,C,D,E,F,G;return a=-1,G=new z[q],u={},C=null,k=void 0,D=void 0,y=void 0,t=function(){var b,c,d,e;if(y.status=C||G.status,C===a&&10>w||(y.statusText=G.statusText),C!==a){e=r(G.getAllResponseHeaders());for(b in e)d=e[b],y.headers[b]||(c=b.toLowerCase(),y.headers[c]=d)}},s=function(){G.responseType&&"text"!==G.responseType?"document"===G.responseType?(y.xml=G.responseXML,y.data=G.responseXML):y.data=G.response:(y.text=G.responseText,y.data=G.responseText),"responseURL"in G&&(y.finalUrl=G.responseURL)},F=function(){j.status=y.status,j.statusText=y.statusText},E=function(){"text"in y&&(j.responseText=y.text),"xml"in y&&(j.responseXML=y.xml),"data"in y&&(j.response=y.data),"finalUrl"in y&&(j.responseURL=y.finalUrl)},i=function(a){for(;a>b&&4>b;)j[m]=++b,1===b&&j[g]("loadstart",{}),2===b&&F(),4===b&&(F(),E()),j[g]("readystatechange",{}),4===b&&setTimeout(h,0)},h=function(){k||j[g]("load",{}),j[g]("loadend",{}),k&&(j[m]=0)},b=0,A=function(a){var b,d;return 4!==a?void i(a):(b=z.listeners(c),d=function(){var a;return b.length?(a=b.shift(),2===a.length?(a(u,y),d()):3===a.length&&u.async?a(u,y,d):d()):i(4)},void d())},j=u.xhr=f(),G.onreadystatechange=function(){try{2===G[m]&&t()}catch(a){}4===G[m]&&(D=!1,t(),s()),A(G[m])},p=function(){k=!0},j[l]("error",p),j[l]("timeout",p),j[l]("abort",p),j[l]("progress",function(){3>b?A(3):j[g]("readystatechange",{})}),("withCredentials"in G||z.addWithCredentials)&&(j.withCredentials=!1),j.status=0,j.open=function(a,c,d,e,f){b=0,k=!1,D=!1,u.headers={},u.headerNames={},u.status=0,y={},y.headers={},u.method=a,u.url=c,u.async=d!==!1,u.user=e,u.pass=f,A(1)},j.send=function(a){var b,c,f,g,h,i,k,l;for(l=["type","timeout","withCredentials"],i=0,k=l.length;k>i;i++)c=l[i],f="type"===c?"responseType":c,f in j&&(u[c]=j[f]);u.body=a,h=function(){var a,b,d,g,h,i;for(x(e,G,j),j.upload&&x(e.concat(n),G.upload,j.upload),D=!0,G.open(u.method,u.url,u.async,u.user,u.pass),h=["type","timeout","withCredentials"],d=0,g=h.length;g>d;d++)c=h[d],f="type"===c?"responseType":c,c in u&&(G[f]=u[c]);i=u.headers;for(a in i)b=i[a],G.setRequestHeader(a,b);u.body instanceof o&&(u.body=u.body.fd),G.send(u.body)},b=z.listeners(d),(g=function(){var a,c;return b.length?(a=function(a){return"object"!=typeof a||"number"!=typeof a.status&&"number"!=typeof y.status?void g():(v(a,y),B.call(a,"data")<0&&(a.data=a.response||a.text),void A(4))},a.head=function(a){return v(a,y),A(2)},a.progress=function(a){return v(a,y),A(3)},c=b.shift(),1===c.length?a(c(u)):2===c.length&&u.async?c(u,a):a()):h()})()},j.abort=function(){C=a,D?G.abort():j[g]("abort",{})},j.setRequestHeader=function(a,b){var c,d;c=null!=a?a.toLowerCase():void 0,d=u.headerNames[c]=u.headerNames[c]||a,u.headers[d]&&(b=u.headers[d]+", "+b),u.headers[d]=b},j.getResponseHeader=function(a){var b;return b=null!=a?a.toLowerCase():void 0,y.headers[b]},j.getAllResponseHeaders=function(){return r(y.headers)},G.overrideMimeType&&(j.overrideMimeType=function(){return G.overrideMimeType.apply(G,arguments)}),G.upload&&(j.upload=u.upload=f()),j},"function"==typeof this.define&&this.define.amd?define("xhook",[],function(){return z}):(this.exports||this).xhook=z}).call(this,a);var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O;s=!1,D=function(a){var b,c;s||q();for(b in a)c=a[b],x("adding slave: "+b),D[b]=c},m={},n=function(a,b){var c;return m[a]?m[a]:(c=j.createElement("iframe"),c.id=c.name=o(),x("creating iframe "+c.id),c.src=""+a+b,c.setAttribute("style","display:none;"),j.body.appendChild(c),m[a]=c.contentWindow)},q=function(){var a,b,c;return s=!0,b=function(a,b){var c,d,e,f,g;return e=a[0],f=a[1],c=u(f,"Blob"),d=u(f,"File"),c||d?(g=new FileReader,g.onload=function(){return a[1]=null,d&&(a[2]=f.name),b(["XD_BLOB",a,this.result,f.type])},g.readAsArrayBuffer(f),1):0},a=function(a,c){var d;a.forEach(function(b,c){var d,e,f,g,h;if(e=b[0],f=b[1],u(f,"FileList"))for(a.splice(c,1),g=0,h=f.length;h>g;g++)d=f[g],a.splice(c,0,[e,d])}),d=0,a.forEach(function(e,f){d+=b(e,function(b){a[f]=b,0===--d&&c()})}),0===d&&c()},c=function(b,c){var d,e,f;return c.on("xhr-event",function(){return b.xhr.dispatchEvent.apply(null,arguments)}),c.on("xhr-upload-event",function(){return b.xhr.upload.dispatchEvent.apply(null,arguments)}),e=H(b),e.headers=b.headers,b.withCredentials&&(g.master&&(e.headers[g.master]=j.cookie),e.slaveCookie=g.slave),f=function(){return c.emit("request",e)},b.body&&(e.body=b.body,u(e.body,"FormData"))?(d=e.body.entries,e.body=["XD_FD",d],void a(d,f)):void f()},"addWithCredentials"in L||(L.addWithCredentials=!0),L.before(function(a,b){var d,e,f;return e=B(a.url),e&&e.origin!==i?D[e.origin]?(x("proxying request to slave: '"+e.origin+"'"),a.async===!1?(J("sync not supported"),b()):(d=n(e.origin,D[e.origin]),f=h(o(),d),f.on("response",function(a){return b(a),f.close()}),a.xhr.addEventListener("abort",function(){return f.emit("abort")}),void(f.ready?c(a,f):f.once("ready",function(){return c(a,f)})))):(e&&x("no slave matching: '"+e.origin+"'"),b()):b()})},t=!1,z=function(a){var b,c;t||r();for(b in a)c=a[b],x("adding master: "+b),z[b]=c},p=null,r=function(){return t=!0,x("handling incoming sockets..."),p=function(a,b){var c,d,e,f;"null"===a&&(a="*"),e=null;for(c in z){f=z[c];try{if(d=I(c),d.test(a)){e=I(f);break}}catch(g){}}return e?(b.once("request",function(a){var c,d,f,g,h,i,k,l,m,n,o;if(x("request: "+a.method+" "+a.url),i=B(a.url),!i||!e.test(i.path))return J("blocked request to path: '"+i.path+"' by regex: "+e),void b.close();l=new XMLHttpRequest,l.open(a.method,a.url),l.addEventListener("*",function(a){return b.emit("xhr-event",a.type,H(a))}),l.upload&&l.upload.addEventListener("*",function(a){return b.emit("xhr-upload-event",a.type,H(a))}),b.once("abort",function(){return l.abort()}),l.onreadystatechange=function(){var a;if(4===l.readyState){a={status:l.status,statusText:l.statusText,data:l.response,headers:L.headers(l.getAllResponseHeaders())};try{a.text=l.responseText}catch(c){}return b.emit("response",a)}},a.withCredentials&&(l.withCredentials=!0,a.slaveCookie&&(a.headers[a.slaveCookie]=j.cookie)),a.timeout&&(l.timeout=a.timeout),a.type&&(l.responseType=a.type),o=a.headers;for(h in o)k=o[h],l.setRequestHeader(h,k);if(a.body instanceof Array&&"XD_FD"===a.body[0]){for(g=new L.FormData,f=a.body[1],m=0,n=f.length;n>m;m++)c=f[m],"XD_BLOB"===c[0]&&4===c.length&&(d=new Blob([c[2]],{type:c[3]}),c=c[1],c[1]=d),g.append.apply(g,c);a.body=g}l.send(a.body||null)}),void x("slave listening for requests on socket: "+b.id)):void J("blocked request from: '"+a+"'")},a===a.parent?J("slaves must be in an iframe"):a.parent.postMessage("XDPING_"+d,"*")},e="XD_CHECK",F={},v=!0,h=function(a,b){var d,f,g,h,i,j;return i=!1,j=F[a]=L.EventEmitter(!0),j.id=a,j.once("close",function(){return j.destroy(),j.close()}),h=[],j.emit=function(){var b,c;b=E(arguments),c="string"==typeof b[1]?" -> "+b[1]:"",x("send socket: "+a+": "+b[0]+c),b.unshift(a),i?g(b):h.push(b)},g=function(a){v&&(a=JSON.stringify(a)),b.postMessage(a,"*")},j.close=function(){j.emit("close"),x("close socket: "+a),F[a]=null},j.once(e,function(b){for(v="string"==typeof b,i=j.ready=!0,j.emit("ready"),x("ready socket: "+a+" (emit #"+h.length+" pending)");h.length;)g(h.shift())}),f=0,d=function(){return function(){b.postMessage([a,e,{}],"*"),i||(f++>=K.timeout/c?(J("Timeout waiting on iframe socket"),k.fire("timeout"),j.fire("abort")):setTimeout(d,c))}}(this),setTimeout(d),x("new socket: "+a),j},A=function(b){return j.addEventListener?a.addEventListener("message",b):a.attachEvent("onmessage",b)},G=function(){return A(function(a){var c,e,f,g;if(c=a.data,"string"==typeof c){if(/^XDPING(_(V\d+))?$/.test(c)&&RegExp.$2!==d)return J("your master is not compatible with your slave, check your xdomain.js version");if(/^xdomain-/.test(c))c=c.split(",");else if(v)try{c=JSON.parse(c)}catch(i){return}}if(c instanceof Array&&(f=c.shift(),/^xdomain-/.test(f)&&(g=F[f],null!==g))){if(g===b){if(!p)return;g=h(f,a.source),p(a.origin,g)}e="string"==typeof c[1]?" -> "+c[1]:"",x("receive socket: "+f+": "+c[0]+e),g.fire.apply(g,c)}})},L=(this.exports||this).xhook,K=function(a){a&&(a.masters&&z(a.masters),a.slaves&&D(a.slaves))},K.masters=z,K.slaves=D,K.debug=!1,K.timeout=15e3,c=100,g=K.cookies={master:"Master-Cookie",slave:"Slave-Cookie"},j=a.document,w=a.location,i=K.origin=w.protocol+"//"+w.host,o=function(){return"xdomain-"+Math.round(Math.random()*Math.pow(2,32)).toString(16)},E=function(a,b){return Array.prototype.slice.call(a,b)},f=a.console||{},k=null,C=function(){k=L.EventEmitter(!0),K.on=k.on,K.off=k.off},L&&C(),y=function(a){return function(b){b="xdomain ("+i+"): "+b,k.fire(a,b),("log"!==a||K.debug)&&(a in K?K[a](b):a in f?f[a](b):"warn"===a&&alert(b))}},x=y("log"),J=y("warn"),O=["postMessage","JSON"];for(M=0,N=O.length;N>M;M++)if(l=O[M],!a[l])return void J("requires '"+l+"' and this browser does not support it");u=function(b,c){return c in a?b instanceof a[c]:!1},d="V1",B=K.parseUrl=function(a){return/^((https?:)?\/\/[^\/\?]+)(\/.*)?/.test(a)?{origin:(RegExp.$2?"":w.protocol)+RegExp.$1,path:RegExp.$3}:(x("failed to parse absolute url: "+a),null)},I=function(a){var b;return a instanceof RegExp?a:(b=a.toString().replace(/\W/g,function(a){return"\\"+a}).replace(/\\\*/g,".*"),new RegExp("^"+b+"$"))},H=function(a){var b,c,d,e;b={};for(c in a)"returnValue"!==c&&(d=a[c],"function"!=(e=typeof d)&&"object"!==e&&(b[c]=d));return b},function(){var a,b,c,d,e,f,g,h,i,k,l;for(a={debug:function(a){return"string"==typeof a?K.debug="false"!==a:void 0},slave:function(a){var b,c;if(a&&(b=B(a)))return c={},c[b.origin]=b.path,D(c)},master:function(a){var b,c;if(a&&(c="*"===a?{origin:"*",path:"*"}:B(a)))return b={},b[c.origin]=c.path.replace(/^\//,"")?c.path:"*",z(b)}},k=j.getElementsByTagName("script"),f=0,h=k.length;h>f;f++)if(e=k[f],/xdomain/.test(e.src))for(l=["","data-"],g=0,i=l.length;i>g;g++){d=l[g];for(c in a)(b=a[c])(e.getAttribute(d+c))}}(),G(),"function"==typeof this.define&&this.define.amd?define("xdomain",["xhook"],function(a){return L=a,C(),K}):(this.exports||this).xdomain=K}).call(this,window);
xdomain.slaves({
  "http://s.init.im:8081": "/proxy.html"
});

nkoreaTest.setNewUUID = function() {

  // If localStorage contains an existing UUID, use it as the UUID of the app.
  // Otherwise, get a UUID from server.

  "use strict";
  if (localStorage.getItem('uuid')) {
    this.uuid = localStorage.getItem('uuid');
  } else {
    var url = 'http://s.init.im:8081/utility/uuid/';
    var uuid = 'DEFAULT'; // In case UUID server fails
    var request = new XMLHttpRequest();

    request.open('GET', url, true);
    request.onload = function () {
      console.log('UUID server responded');
      if (request.status >= 200 && request.status < 400) {
        var response = JSON.parse(request.responseText);
        if (response.success) {
            uuid = response.data.uuid;
        }
      }
      request.send();
      this.uuid = uuid;
      localStorage.setItem('uuid', uuid);
    }.bind(this);
    request.send();
  }
};

function post(keyToPost, valueToPost) {
  "use strict";
  var url = "http://s.init.im:8081/remember/dprktest2015/";
  var request = new XMLHttpRequest();
  var message = {
    username: nkoreaTest.uuid,
    key: keyToPost,
    value: valueToPost,
    raw: '',
    datetime: Date.now()
  };

  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  var jsonString = JSON.stringify(message);
  request.send(jsonString);
  console.log('tried to post '+jsonString);
}

var Banner = React.createClass({displayName: "Banner",
  render: function() {
    return (
      React.createElement("div", {id: "Banner"}, 
        React.createElement("img", {id: "BannerImage", src: nkoreaTest.bannerImgRelativePath})
      )
    );
  }
});

var QuestionPanel = React.createClass({displayName: "QuestionPanel",

  handleCheckboxClick: function(clickedOptionTag, event) {

    nkoreaTest.Card.state.chosenOptionTag = clickedOptionTag;

    //Show the answer
    nkoreaTest.Card.setState({showAnswer: true});

    if (clickedOptionTag === this.props.data.correctOptionTag) {
      nkoreaTest.totalScore += nkoreaTest.scorePerQuestion;
    }

    // Disable all checkboxes
    var checkboxes = document.getElementsByClassName("checkbox");
    for (var i=0; i<checkboxes.length; i+=1) {
      checkboxes[i].disabled = true;
    }

    post(nkoreaTest.Card.state.questionSerial.toString(), clickedOptionTag);
  },

  getCorrectnessSign: function(optionTag) {
    // Only show correctness sign after the chosen option
    if (optionTag !== nkoreaTest.Card.state.chosenOptionTag) { return '' }
    var correctOption = nkoreaTest.survey[nkoreaTest.Card.state.questionSerial].correctOptionTag;
    var sign, i;
    if (nkoreaTest.Card.state.chosenOptionTag === null) {
      sign = '';
    } else if (nkoreaTest.Card.state.chosenOptionTag === correctOption) {
      sign = '✓';
    } else {
      sign = '✕';
    }

    //Set color by adding class
    var correctnessSignDOMNodes = document.getElementsByClassName('CorrectnessSign');
    if (sign === '✓') {
      for (i=0; i<correctnessSignDOMNodes.length; i+=1) {
        correctnessSignDOMNodes[i].className = 'CorrectnessSign CorrectnessSign-correct'
      }
    } else if (sign === '✕') {
      for (i=0; i<correctnessSignDOMNodes.length; i+=1) {
        correctnessSignDOMNodes[i].className = 'CorrectnessSign CorrectnessSign-wrong'
      }
    }
    return sign;
  },

  render: function() {

    if (nkoreaTest.Card.state.answerSerial >= nkoreaTest.survey.length) {
      return;
    }

    var optionBoxes;
    if (this.props.data.optionContainsImage) {
      optionBoxes = this.props.data.options.map(function (option) {
        // Special adjustment for wider images
        var widerMarker = '';
        if (option.optionTag === 'D') {
          widerMarker = ' optionBoxWithImageWide'
        }
        return (
          React.createElement("div", {className: "optionBox optionBoxWithImage"+widerMarker, key: option.optionTag}, 
            React.createElement("label", {className: "WithImage"}, 
              React.createElement("div", {className: "optionBoxLeftContainer"}, 
                React.createElement("input", {type: "checkbox", 
                       name: option.optionTag, 
                       onChange: this.handleCheckboxClick.bind(this, option.optionTag), 
                       className: "checkbox"}
                ), 
                React.createElement("span", {className: "optionTag"}, option.optionTag)
              ), 
              React.createElement("img", {src: option.imagePath, className: "insertImage"}), 
              React.createElement("div", {className: "optionBoxRightContainer"}, 
                React.createElement("span", {className: "optionText optionTextWithImage"}, option.optionText), 
                React.createElement("span", {className: "CorrectnessSign"}, this.getCorrectnessSign(option.optionTag))
              )
            )
          )
        )
      }, this);
    } else {
      optionBoxes = this.props.data.options.map(function (option) {
        return (
          React.createElement("div", {className: "optionBox", key: option.optionTag}, 
            React.createElement("label", null, 
              React.createElement("input", {type: "checkbox", 
                     name: option.optionTag, 
                     onChange: this.handleCheckboxClick.bind(this, option.optionTag), 
                     className: "checkbox"}
                  ), 
              React.createElement("span", {className: "optionTag"}, option.optionTag), 
              React.createElement("span", {className: "optionText"}, option.optionText), 
              React.createElement("span", {className: "CorrectnessSign"}, this.getCorrectnessSign(option.optionTag))
            )
          )
        )
      }, this);
    }

    return (
      React.createElement("div", {id: "QuestionPanel", data: this.props.data}, 
        React.createElement("div", {id: "questionTag"}, 
          this.props.data.questionTag
        ), 
        React.createElement("div", {id: "questionText"}, 
          this.props.data.questionText
        ), 
        React.createElement("div", {id: "OptionPanel"}, 
          optionBoxes
        )
      )
    );
  }
});

var AnswerPanel = React.createClass({displayName: "AnswerPanel",

  handleNextButtonClick: function (event) {

    post(nkoreaTest.Card.state.questionSerial.toString(), 'Next');

    //Show the next question
    nkoreaTest.Card.setState({
      questionSerial: nkoreaTest.Card.state.questionSerial + 1,
      answerSerial: nkoreaTest.Card.state.answerSerial + 1,
      showAnswer: false
      }
    );

    if (nkoreaTest.Card.state.questionSerial === nkoreaTest.survey.length - 2) {
      nkoreaTest.Card.setState({
        lastQuestion: true
      });
    }

    if (nkoreaTest.Card.state.questionSerial >= nkoreaTest.survey.length - 1) {
      React.render(
        React.createElement(ScorePage, null),
        document.getElementById('content')
      );
      post("result", nkoreaTest.totalScore.toString());
    }

    //Uncheck all checkboxes and enable them
    var checkboxes = document.getElementsByClassName("checkbox");
    for (var i=0; i<checkboxes.length; i+=1) {
      checkboxes[i].checked = false;
      checkboxes[i].disabled = false;
    }
    nkoreaTest.Card.state.chosenOptionTag = null;
  },

  render: function() {
    return (
      React.createElement("div", {id: "AnswerPanel", data: this.props.data, key: 0}, 
        React.createElement("div", {className: "ExplanationBox"}, 
          React.createElement("div", {className: "answerBox"}, 
            React.createElement("div", {className: "answerInnerBox"}, 
              React.createElement("span", {className: "answerLabel"}, 
                nkoreaTest.text.answerLabel
              ), 
              React.createElement("span", {className: "answerTag"}, 
                this.props.data.correctOptionTag
              )
            )
          ), 
          React.createElement("span", {className: "Explanation"}, this.props.data.ExplanationText), 
          React.createElement("button", {id: "next", onClick: this.handleNextButtonClick}, 
            nkoreaTest.Card.state.lastQuestion ?
              nkoreaTest.text.lastButtonLabel:
              nkoreaTest.text.nextButtonLabel
          )
        )
      )
    );
  }
});

var Card = React.createClass({displayName: "Card",
  getInitialState: function() {
    return {
      questionSerial: 0,
      answerSerial: 0,
      showAnswer: false,
      chosenOptionTag: null,
      lastQuestion: false
    };
  },

  render: function() {
    nkoreaTest.Card = this;
    return (
      React.createElement("div", {id: "Card", surveyData: this.props.surveyData}, 
        React.createElement(Banner, null), 
        React.createElement(QuestionPanel, {data: this.props.surveyData[this.state.questionSerial]}
        ), 
        this.state.showAnswer ?
            React.createElement(AnswerPanel, {data: this.props.surveyData[this.state.answerSerial]}
            ) :
            null
        
      )
    );
  }
});

var ScorePage = React.createClass({displayName: "ScorePage",

  shareToWeibo: function () {
    var title = encodeURIComponent(nkoreaTest.text.scoreDescription + nkoreaTest.totalScore.toString() + nkoreaTest.text.shareHint),
        url = encodeURIComponent(nkoreaTest.url);
    window.open('http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+nkoreaTest.url);
    post('share', 'weibo');
  },

  getWeiboHref: function() {
    post('share', 'weibo');
    var title = encodeURIComponent(nkoreaTest.text.scoreDescription + nkoreaTest.totalScore.toString() + nkoreaTest.text.shareHint),
        url = encodeURIComponent(nkoreaTest.url),
        shareURL ='http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+nkoreaTest.url;
    return shareURL;
  },

  getFacebookHref: function() {
    post('share', 'facebook');
    var description = nkoreaTest.text.scoreDescription + nkoreaTest.totalScore.toString() + nkoreaTest.text.shareHint,
      url = nkoreaTest.url,
      shareURL = 'https://www.facebook.com/dialog/feed?app_id=743206445788490+' +
        '&link=' + url +
          //'&picture=' + nkoreaTest.url + nkoreaTest.shareImgRelativePath +
        '&name=' + nkoreaTest.title +
        '&description=' + description +
        '&redirect_uri=' + url;
    return shareURL;
  },

  componentDidMount: function() {
      document.getElementById('marketingInfobox').innerHTML = nkoreaTest.text.marketingInfoboxInnerHTML;
  },

  render: function() {
    var comment = nkoreaTest.scoreComments[nkoreaTest.totalScore.toString()];
    return (
      React.createElement("div", {id: "ScorePage"}, 
        React.createElement(Banner, null), 
        React.createElement("h1", null, "你的總分是：", nkoreaTest.totalScore), 
        React.createElement("p", null, comment), 
        React.createElement("div", {className: "ShareDiv"}, 
          React.createElement("img", {src: "img/FB-f-Logo__blue_50.png"}), 
          React.createElement("a", {href: this.getFacebookHref(), target: "_blank"}, 
            nkoreaTest.text.facebookShareButtonText
          )
        ), 
        React.createElement("div", {className: "ShareDiv"}, 
          React.createElement("img", {src: "img/weibo_48x48.png"}), 
          React.createElement("a", {href: this.getWeiboHref(), target: "_blank"}, 
            nkoreaTest.text.ShareToWeiboText
          )
        ), 

        React.createElement("div", {className: "fulltextRecommendation"}, 
          nkoreaTest.text.fulltextRecommendation, 
          React.createElement("a", {href: "https://theinitium.com/project/20150803-dprk-youth/", target: "_blank"}, 
            nkoreaTest.text.linkLabel
          )
        ), 

        React.createElement("div", {id: "marketingInfobox"})

      )
    );
  }
});

document.title = nkoreaTest.title;
nkoreaTest.setNewUUID();
React.render(
  React.createElement(Card, {surveyData: nkoreaTest.survey}),
  //<ScorePage />,
  document.getElementById('content')
);

post('render', nkoreaTest.lang+'-rendered');
