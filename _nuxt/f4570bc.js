(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{324:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(61),r(325),r(14),r(46),r(121),r(44);var n,o=r(25),h=r(116),l=function t(){Object(h.a)(this,t),this.color="#cccccc",this.labels=[],this.textColor=[],this.textSize=[],this.default={textColor:"#000000",textSize:3},this.x=0,this.y=0,this.width=1,this.height=1,this.x2=0,this.y2=0,this.width2=1,this.height2=1,this.rotation_x=0,this.rotation_y=0,this.rotation_angle=0,this.decal=!1,this.ghost=!1,this.stepped=!1,this.nub=!1,this.profile="",this.sm="",this.sb="",this.st=""},c=function t(){Object(h.a)(this,t),this.author="",this.backcolor="#eeeeee",this.background=null,this.name="",this.notes="",this.radii="",this.switchBrand="",this.switchMount="",this.switchType=""},f=function t(){Object(h.a)(this,t),this.meta=new c,this.keys=[]};!function(t){function e(t){if("object"!==Object(o.a)(t))return t;if(t instanceof Array){for(var r=[],i=0;i<t.length;i++)r[i]=e(t[i]);return r}var n=Object.create(Object.getPrototypeOf(t));for(var h in n.constructor(),t)n[h]=e(t[h]);return n}var r=[[0,6,2,8,9,11,3,5,1,4,7,10],[1,7,-1,-1,9,11,4,-1,-1,-1,-1,10],[3,-1,5,-1,9,11,-1,-1,4,-1,-1,10],[4,-1,-1,-1,9,11,-1,-1,-1,-1,-1,10],[0,6,2,8,10,-1,3,5,1,4,7,-1],[1,7,-1,-1,10,-1,4,-1,-1,-1,-1,-1],[3,-1,5,-1,10,-1,-1,-1,4,-1,-1,-1],[4,-1,-1,-1,10,-1,-1,-1,-1,-1,-1,-1]];function n(t,e){for(var n=[],i=0;i<t.length;++i)t[i]&&(n[r[e][i]]=t[i]);return n}function h(t,data){throw"Error: "+t+(data?":\n  "+JSON.stringify(data):"")}function c(t){t instanceof Array||h("expected an array of objects");for(var r=new l,kbd=new f,c={x:0,y:0},x=4,d=0;d<t.length;++d)if(t[d]instanceof Array){for(var y=0;y<t[d].length;++y){var w=t[d][y];if("string"==typeof w){var v=e(r);v.width2=0===v.width2?r.width:r.width2,v.height2=0===v.height2?r.height:r.height2,v.labels=n(w.split("\n"),x),v.textSize=n(v.textSize,x);for(var i=0;i<12;++i)v.labels[i]||(delete v.textSize[i],delete v.textColor[i]),v.textSize[i]==v.default.textSize&&delete v.textSize[i],v.textColor[i]==v.default.textColor&&delete v.textColor[i];kbd.keys.push(v),r.x+=r.width,r.width=r.height=1,r.x2=r.y2=r.width2=r.height2=0,r.nub=r.stepped=r.decal=!1}else{if(0==y||null==w.r&&null==w.rx&&null==w.ry||h("rotation can only be specified on the first key in a row",w),null!=w.r&&(r.rotation_angle=w.r),null!=w.rx&&(r.rotation_x=c.x=w.rx,r.x=c.x,r.y=c.y),null!=w.ry&&(r.rotation_y=c.y=w.ry,r.x=c.x,r.y=c.y),null!=w.rx&&(r.rotation_x=w.rx),null!=w.ry&&(r.rotation_y=w.ry),null!=w.a&&(x=w.a),w.f&&(r.default.textSize=w.f,r.textSize=[]),w.f2)for(i=1;i<12;++i)r.textSize[i]=w.f2;if(w.fa&&(r.textSize=w.fa),w.p&&(r.profile=w.p),w.c&&(r.color=w.c),w.t){var S=w.t.split("\n");""!=S[0]&&(r.default.textColor=S[0]),r.textColor=n(S,x)}w.x&&(r.x+=w.x),w.y&&(r.y+=w.y),w.w&&(r.width=r.width2=w.w),w.h&&(r.height=r.height2=w.h),w.x2&&(r.x2=w.x2),w.y2&&(r.y2=w.y2),w.w2&&(r.width2=w.w2),w.h2&&(r.height2=w.h2),w.n&&(r.nub=w.n),w.l&&(r.stepped=w.l),w.d&&(r.decal=w.d),null!=w.g&&(r.ghost=w.g),w.sm&&(r.sm=w.sm),w.sb&&(r.sb=w.sb),w.st&&(r.st=w.st)}}r.y++,r.x=r.rotation_x}else if("object"===Object(o.a)(t[d]))for(var z in 0!=d&&h("keyboard metadata must the be first element",t[d]),kbd.meta){if(t[d][z])kbd.meta[z]=t[d][z]}else h("unexpected",t[d]);return kbd}t.deserialize=c,t.parse=function(t){return c(JSON.parse(t))}}(n||(n={}))},346:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}}]);