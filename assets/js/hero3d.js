(()=>{var zh=0,ic=1,kh=2;var zr=1,Gh=2,bs=3,Si=0,je=1,ln=2,ki=0,Ts=1,kr=2,sc=3,rc=4,Vh=5;var Gi=100,Hh=101,Wh=102,Xh=103,qh=104,Yh=200,$h=201,Zh=202,Jh=203,ac=204,oc=205,Kh=206,Qh=207,jh=208,tu=209,eu=210,nu=211,iu=212,su=213,ru=214,Da=0,Na=1,Fa=2,ds=3,Oa=4,Ba=5,za=6,ka=7,yo=0,au=1,ou=2,Wn=0,lc=1,cc=2,hc=3,Gr=4,uc=5,dc=6,fc=7;var pc=300,Vi=301,As=302,Uo=303,Mo=304,gi=1e3,Bn=1001,Ga=1002,Ze=1003,lu=1004;var Vr=1005;var on=1006,So=1007;var ai=1008;var un=1009,mc=1010,gc=1011,Es=1012,bo=1013,Ln=1014,An=1015,Dn=1016,To=1017,Ao=1018,Hi=1020,_c=35902,xc=35899,vc=1021,yc=1022,Nn=1023,ei=1026,oi=1027,Eo=1028,wo=1029,bi=1030,Co=1031;var Ro=1033,Hr=33776,Wr=33777,Xr=33778,qr=33779,Io=35840,Po=35841,Lo=35842,Do=35843,No=36196,Fo=37492,Oo=37496,Bo=37488,zo=37489,Yr=37490,ko=37491,Go=37808,Vo=37809,Ho=37810,Wo=37811,Xo=37812,qo=37813,Yo=37814,$o=37815,Zo=37816,Jo=37817,Ko=37818,Qo=37819,jo=37820,tl=37821,el=36492,nl=36494,il=36495,sl=36283,rl=36284,$r=36285,al=36286;var nr=2300,Va=2301,Pa=2302,Xl=2303,ql=2400,Yl=2401,$l=2402;var cu=3200;var Zr=0,hu=1,li="",$e="srgb",ir="srgb-linear",sr="linear",Se="srgb";var La=7680;var uu=519,du=512,fu=513,pu=514,Uc=515,mu=516,gu=517,Mc=518,Sc=519,bc=35044;var Tc="300 es",Sn=2e3,fs=2001;function Dd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Nd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _u(){let i=rr("canvas");return i.style.display="block",i}var eh={},ps=null;function ar(...i){let t="THREE."+i.shift();ps?ps("log",t,...i):console.log(t,...i)}function xu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=xu(i);let t="THREE."+i.shift();if(ps)ps("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function qt(...i){i=xu(i);let t="THREE."+i.shift();if(ps)ps("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Di(...i){let t=i.join(" ");t in eh||(eh[t]=!0,Xt(...i))}function vu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var yu={[Da]:Da,[Fa]:za,[Oa]:Oa,[ds]:Ba,[Na]:Na,[za]:Fa,[ka]:ka,[Ba]:ds},zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xl=Math.PI/180,or=180/Math.PI;function Ti(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function Fd(i,t){return(i%t+t)%t}function vl(i,t,e){return(1-e)*i+e*t}function Uu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ol(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Mu(i,t){if(t.constructor===Float32Array)return i;let e=ol(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Su(i,t){if(t.constructor===Float32Array)return i;let e=ol(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Ic=class Ic{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ic.prototype.isVector2=!0;var ct=Ic,cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],u=r[a+1],g=r[a+2],v=r[a+3];if(f!==v||c!==d||l!==u||h!==g){let p=c*d+l*u+h*g+f*v;p<0&&(d=-d,u=-u,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),b=Math.sin(M);m=Math.sin(m*M)/b,o=Math.sin(o*M)/b,c=c*m+d*o,l=l*m+u*o,h=h*m+g*o,f=f*m+v*o}else{c=c*m+d*o,l=l*m+u*o,h=h*m+g*o,f=f*m+v*o;let M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],g=r[a+3];return t[e]=o*g+h*f+c*u-l*d,t[e+1]=c*g+h*d+l*f-o*u,t[e+2]=l*g+h*u+o*d-c*f,t[e+3]=h*g-o*f-c*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),u=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"YZX":this._x=d*h*f+l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f-d*u*g;break;case"XZY":this._x=d*h*f-l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f+d*u*g;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Pc=class Pc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yl.copy(this).projectOnVector(t),this.sub(yl)}reflect(t){return this.sub(yl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pc.prototype.isVector3=!0;var L=Pc,yl=new L,nh=new cn,Lc=class Lc{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],v=s[0],p=s[3],m=s[6],M=s[1],b=s[4],U=s[7],E=s[2],T=s[5],_=s[8];return r[0]=a*v+o*M+c*E,r[3]=a*p+o*b+c*T,r[6]=a*m+o*U+c*_,r[1]=l*v+h*M+f*E,r[4]=l*p+h*b+f*T,r[7]=l*m+h*U+f*_,r[2]=d*v+u*M+g*E,r[5]=d*p+u*b+g*T,r[8]=d*m+u*U+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,d=o*c-h*r,u=l*r-a*c,g=e*f+n*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=f*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=u*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ul.makeScale(t,e)),this}rotate(t){return Di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ul.makeRotation(-t)),this}translate(t,e){return Di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Lc.prototype.isMatrix3=!0;var Jt=Lc,Ul=new Jt,ih=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Od(){let i={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Se&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ir]:{primaries:t,whitePoint:n,transfer:sr,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}var de=Od();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yi,Ha=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Yi===void 0&&(Yi=rr("canvas")),Yi.width=t.width,Yi.height=t.height;let s=Yi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Yi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=rr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bd=0,ms=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Ti(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ml(s[a].image)):r.push(Ml(s[a]))}else r=Ml(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ml(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var zd=0,Sl=new L,Qe=class i extends zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=on,a=ai,o=Nn,c=un,l=i.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Ti(),this.name="",this.source=new ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Sl).x}get height(){return this.source.getSize(Sl).y}get depth(){return this.source.getSize(Sl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gi:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case Ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gi:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case Ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=pc;Qe.DEFAULT_ANISOTROPY=1;var Dc=class Dc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,U=(u+1)/2,E=(m+1)/2,T=(h+d)/4,_=(f+v)/4,S=(g+p)/4;return b>U&&b>E?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=_/n):U>E?U<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(U),n=T/s,r=S/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=_/r,s=S/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(f-v)/M,this.z=(d-h)/M,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dc.prototype.isVector4=!0;var Ce=Dc,Wa=class extends zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Qe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ms(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends Wa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},lr=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xa=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var vo=class vo{constructor(t,e,n,s,r,a,o,c,l,h,f,d,u,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,d,u,g,v,p)}set(t,e,n,s,r,a,o,c,l,h,f,d,u,g,v,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),a=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,u=a*f,g=o*h,v=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=u+g*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=g+u*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,u=c*f,g=l*h,v=l*f;e[0]=d+v*o,e[4]=g*o-u,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,u=c*f,g=l*h,v=l*f;e[0]=d-v*o,e[4]=-a*f,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,u=a*f,g=o*h,v=o*f;e[0]=c*h,e[4]=g*l-u,e[8]=d*l+v,e[1]=c*f,e[5]=v*l+d,e[9]=u*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,u=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-d*f,e[8]=g*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*f+g,e[10]=d-v*f}else if(t.order==="XZY"){let d=a*c,u=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+v,e[5]=a*h,e[9]=u*f-g,e[2]=g*f-u,e[6]=o*h,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kd,t,Gd)}lookAt(t,e,n){let s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ui.crossVectors(n,pn),ui.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ui.crossVectors(n,pn)),ui.normalize(),sa.crossVectors(pn,ui),s[0]=ui.x,s[4]=sa.x,s[8]=pn.x,s[1]=ui.y,s[5]=sa.y,s[9]=pn.y,s[2]=ui.z,s[6]=sa.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],v=n[6],p=n[10],m=n[14],M=n[3],b=n[7],U=n[11],E=n[15],T=s[0],_=s[4],S=s[8],N=s[12],C=s[1],D=s[5],B=s[9],q=s[13],R=s[2],k=s[6],Y=s[10],V=s[14],at=s[3],X=s[7],nt=s[11],it=s[15];return r[0]=a*T+o*C+c*R+l*at,r[4]=a*_+o*D+c*k+l*X,r[8]=a*S+o*B+c*Y+l*nt,r[12]=a*N+o*q+c*V+l*it,r[1]=h*T+f*C+d*R+u*at,r[5]=h*_+f*D+d*k+u*X,r[9]=h*S+f*B+d*Y+u*nt,r[13]=h*N+f*q+d*V+u*it,r[2]=g*T+v*C+p*R+m*at,r[6]=g*_+v*D+p*k+m*X,r[10]=g*S+v*B+p*Y+m*nt,r[14]=g*N+v*q+p*V+m*it,r[3]=M*T+b*C+U*R+E*at,r[7]=M*_+b*D+U*k+E*X,r[11]=M*S+b*B+U*Y+E*nt,r[15]=M*N+b*q+U*V+E*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],u=t[14],g=t[3],v=t[7],p=t[11],m=t[15],M=c*u-l*d,b=o*u-l*f,U=o*d-c*f,E=a*u-l*h,T=a*d-c*h,_=a*f-o*h;return e*(v*M-p*b+m*U)-n*(g*M-p*E+m*T)+s*(g*b-v*E+m*_)-r*(g*U-v*T+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],u=t[11],g=t[12],v=t[13],p=t[14],m=t[15],M=e*o-n*a,b=e*c-s*a,U=e*l-r*a,E=n*c-s*o,T=n*l-r*o,_=s*l-r*c,S=h*v-f*g,N=h*p-d*g,C=h*m-u*g,D=f*p-d*v,B=f*m-u*v,q=d*m-u*p,R=M*q-b*B+U*D+E*C-T*N+_*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/R;return t[0]=(o*q-c*B+l*D)*k,t[1]=(s*B-n*q-r*D)*k,t[2]=(v*_-p*T+m*E)*k,t[3]=(d*T-f*_-u*E)*k,t[4]=(c*C-a*q-l*N)*k,t[5]=(e*q-s*C+r*N)*k,t[6]=(p*U-g*_-m*b)*k,t[7]=(h*_-d*U+u*b)*k,t[8]=(a*B-o*C+l*S)*k,t[9]=(n*C-e*B-r*S)*k,t[10]=(g*T-v*U+m*M)*k,t[11]=(f*U-h*T-u*M)*k,t[12]=(o*N-a*D-c*S)*k,t[13]=(e*D-n*N+s*S)*k,t[14]=(v*b-g*E-p*M)*k,t[15]=(h*E-f*b+d*M)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,d=r*l,u=r*h,g=r*f,v=a*h,p=a*f,m=o*f,M=c*l,b=c*h,U=c*f,E=n.x,T=n.y,_=n.z;return s[0]=(1-(v+m))*E,s[1]=(u+U)*E,s[2]=(g-b)*E,s[3]=0,s[4]=(u-U)*T,s[5]=(1-(d+m))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(g+b)*_,s[9]=(p-M)*_,s[10]=(1-(d+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=$i.set(s[0],s[1],s[2]).length(),o=$i.set(s[4],s[5],s[6]).length(),c=$i.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Cn.copy(this);let l=1/a,h=1/o,f=1/c;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,e.setFromRotationMatrix(Cn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Sn,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===Sn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===fs)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Sn,c=!1){let l=this.elements,h=2/(e-t),f=2/(n-s),d=-(e+t)/(e-t),u=-(n+s)/(n-s),g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===Sn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===fs)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};vo.prototype.isMatrix4=!0;var ye=vo,$i=new L,Cn=new ye,kd=new L(0,0,0),Gd=new L(1,1,1),ui=new L,sa=new L,pn=new L,rh=new ye,ah=new cn,kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ah.setFromEuler(this),this.setFromQuaternion(ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var gs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vd=0,oh=new L,Zi=new cn,$n=new ye,ra=new L,Hs=new L,Hd=new L,Wd=new cn,lh=new L(1,0,0),ch=new L(0,1,0),hh=new L(0,0,1),uh={type:"added"},Xd={type:"removed"},Ji={type:"childadded",child:null},bl={type:"childremoved",child:null},Ge=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new kn,n=new cn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new Jt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(lh,t)}rotateY(t){return this.rotateOnAxis(ch,t)}rotateZ(t){return this.rotateOnAxis(hh,t)}translateOnAxis(t,e){return oh.copy(t).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lh,t)}translateY(t){return this.translateOnAxis(ch,t)}translateZ(t){return this.translateOnAxis(hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ra.copy(t):ra.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Hs,ra,this.up):$n.lookAt(ra,Hs,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix($n),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uh),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xd),bl.child=t,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uh),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,Hd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ge.DEFAULT_UP=new L(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},qd={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;l.inputState.pinching&&d>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Tl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=Fd(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Tl(a,r,t+1/3),this.g=Tl(a,r,t),this.b=Tl(a,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=bu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return de.workingToColorSpace(en.copy(this),t),Math.round(ce(en.r*255,0,255))*65536+Math.round(ce(en.g*255,0,255))*256+Math.round(ce(en.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(en.copy(this),e);let n=en.r,s=en.g,r=en.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=$e){de.workingToColorSpace(en.copy(this),t);let e=en.r,n=en.g,s=en.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(aa);let n=vl(di.h,aa.h,e),s=vl(di.s,aa.s,e),r=vl(di.l,aa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Yt;Yt.NAMES=bu;var Ni=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Rn=new L,Zn=new L,Al=new L,Jn=new L,Ki=new L,Qi=new L,dh=new L,El=new L,wl=new L,Cl=new L,Rl=new Ce,Il=new Ce,Pl=new Ce,jn=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),Zn.subVectors(n,e),Al.subVectors(t,e);let a=Rn.dot(Rn),o=Rn.dot(Zn),c=Rn.dot(Al),l=Zn.dot(Zn),h=Zn.dot(Al),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Rl.setScalar(0),Il.setScalar(0),Pl.setScalar(0),Rl.fromBufferAttribute(t,e),Il.fromBufferAttribute(t,n),Pl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Rl,r.x),a.addScaledVector(Il,r.y),a.addScaledVector(Pl,r.z),a}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),Zn.subVectors(t,e),Rn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Rn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,n),Qi.subVectors(r,n),El.subVectors(t,n);let c=Ki.dot(El),l=Qi.dot(El);if(c<=0&&l<=0)return e.copy(n);wl.subVectors(t,s);let h=Ki.dot(wl),f=Qi.dot(wl);if(h>=0&&f<=h)return e.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(Ki,a);Cl.subVectors(t,r);let u=Ki.dot(Cl),g=Qi.dot(Cl);if(g>=0&&u<=g)return e.copy(r);let v=u*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Qi,o);let p=h*g-u*f;if(p<=0&&f-h>=0&&u-g>=0)return dh.subVectors(r,s),o=(f-h)/(f-h+(u-g)),e.copy(s).addScaledVector(dh,o);let m=1/(p+v+d);return a=v*m,o=d*m,e.copy(n).addScaledVector(Ki,a).addScaledVector(Qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(t.matrixWorld),this.union(oa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),la.subVectors(this.max,Ws),ji.subVectors(t.a,Ws),ts.subVectors(t.b,Ws),es.subVectors(t.c,Ws),fi.subVectors(ts,ji),pi.subVectors(es,ts),Ci.subVectors(ji,es);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ci.z,Ci.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ci.z,0,-Ci.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ci.y,Ci.x,0];return!Ll(e,ji,ts,es,la)||(e=[1,0,0,0,1,0,0,0,1],!Ll(e,ji,ts,es,la))?!1:(ca.crossVectors(fi,pi),e=[ca.x,ca.y,ca.z],Ll(e,ji,ts,es,la))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Kn=[new L,new L,new L,new L,new L,new L,new L,new L],In=new L,oa=new Gn,ji=new L,ts=new L,es=new L,fi=new L,pi=new L,Ci=new L,Ws=new L,la=new L,ca=new L,Ri=new L;function Ll(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ri.fromArray(i,r);let o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),c=t.dot(Ri),l=e.dot(Ri),h=n.dot(Ri);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var ke=new L,ha=new ct,Yd=0,bn=class extends zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bc,this.updateRanges=[],this.gpuType=An,this.version=0,this._normalizationScale=t!==void 0?ol(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(t),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Mu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Su(t,this.array)}};var cr=class extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var hr=class extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ge=class extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}},$d=new Gn,Xs=new L,Dl=new L,ni=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$d.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(Dl)),this.expandByPoint(Xs.copy(t.center).sub(Dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Zd=0,Mn=new ye,Nl=new Ge,ns=new L,mn=new Gn,qs=new Gn,Ye=new L,He=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dd(t)?hr:cr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return Nl.lookAt(t),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ge(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(mn.min,qs.min),mn.expandByPoint(Ye),Ye.addVectors(mn.max,qs.max),mn.expandByPoint(Ye)):(mn.expandByPoint(qs.min),mn.expandByPoint(qs.max))}mn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ye.fromBufferAttribute(o,l),c&&(ns.fromBufferAttribute(t,l),Ye.add(ns)),s=Math.max(s,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new L,c[N]=new L;let h=new L,f=new L,d=new L,u=new ct,g=new ct,v=new ct,p=new L,m=new L;function M(N,C,D){l[N]=l[C]=l[D]=1,h.fromBufferAttribute(n,N),f.fromBufferAttribute(n,C),d.fromBufferAttribute(n,D),u.fromBufferAttribute(r,N),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,D),f.sub(h),d.sub(h),g.sub(u),v.sub(u);let B=1/(g.x*v.y-v.x*g.y);isFinite(B)&&(p.copy(f).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(B),m.copy(d).multiplyScalar(g.x).addScaledVector(f,-v.x).multiplyScalar(B),o[N].add(p),o[C].add(p),o[D].add(p),c[N].add(m),c[C].add(m),c[D].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let N=0,C=b.length;N<C;++N){let D=b[N],B=D.start,q=D.count;for(let R=B,k=B+q;R<k;R+=3)M(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let U=new L,E=new L,T=new L,_=new L;function S(N){T.fromBufferAttribute(s,N),_.copy(T);let C=o[N];U.copy(C),U.sub(T.multiplyScalar(T.dot(C))).normalize(),E.crossVectors(_,C);let B=E.dot(c[N])<0?-1:1;a.setXYZW(N,U.x,U.y,U.z,B)}for(let N=0,C=n.count;N<C;++N)l[N]&&S(N);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,f=new L;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h),u=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?u=c[v]*o.data.stride+o.offset:u=c[v]*h;for(let m=0;m<h;m++)d[g++]=l[u++]}return new bn(d,h,f)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let d=l[h],u=t(d,n);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let u=l[f];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},qa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bc,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function fh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Ti()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var an=new L,ur=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?ol(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new bn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Mu(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Su(t,this.data.array)}},Fl=new L,Jd=new L,Kd=new Jt,gn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fl.subVectors(n,e).cross(Jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Fl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Kd.getNormalMatrix(t),s=this.coplanarPoint(Fl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qd=0,Pn=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=Ts,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=oc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xs=class extends Pn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},is,Ys=new L,ss=new L,rs=new L,as=new ct,$s=new ct,Tu=new ye,ua=new L,Zs=new L,da=new L,ph=new ct,Ol=new ct,mh=new ct,dr=class extends Ge{constructor(t=new xs){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new He;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qa(e,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new ur(n,3,0,!1)),is.setAttribute("uv",new ur(n,2,3,!1))}this.geometry=is,this.material=t,this.center=new ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),Tu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;fa(ua.set(-.5,-.5,0),rs,a,ss,s,r),fa(Zs.set(.5,-.5,0),rs,a,ss,s,r),fa(da.set(.5,.5,0),rs,a,ss,s,r),ph.set(0,0),Ol.set(1,0),mh.set(1,1);let o=t.ray.intersectTriangle(ua,Zs,da,!1,Ys);if(o===null&&(fa(Zs.set(-.5,.5,0),rs,a,ss,s,r),Ol.set(0,1),o=t.ray.intersectTriangle(ua,da,Zs,!1,Ys),o===null))return;let c=t.ray.origin.distanceTo(Ys);c<t.near||c>t.far||e.push({distance:c,point:Ys.clone(),uv:jn.getInterpolation(Ys,ua,Zs,da,ph,Ol,mh,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function fa(i,t,e,n,s,r){as.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?($s.x=r*as.x-s*as.y,$s.y=s*as.x+r*as.y):$s.copy(as),i.copy(t),i.x+=$s.x,i.y+=$s.y,i.applyMatrix4(Tu)}var Qn=new L,Bl=new L,pa=new L,ma=new L,vs=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Bl.copy(t).add(e).multiplyScalar(.5),pa.copy(e).sub(t).normalize(),ma.copy(this.origin).sub(Bl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(pa),o=ma.dot(this.direction),c=-ma.dot(pa),l=ma.lengthSq(),h=Math.abs(1-a*a),f,d,u,g;if(h>0)if(f=a*c-o,d=a*o-c,g=r*h,f>=0)if(d>=-g)if(d<=g){let v=1/h;f*=v,d*=v,u=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Bl).addScaledVector(pa,d),u}intersectSphere(t,e){if(t.radius<0)return null;Qn.subVectors(t.center,this.origin);let n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,d=t.y-a.y,u=t.z-a.z,g=e.x-a.x,v=e.y-a.y,p=e.z-a.z,m=n.x-a.x,M=n.y-a.y,b=n.z-a.z,U=Math.abs(c),E=Math.abs(l),T=Math.abs(h),_,S,N,C,D,B,q,R,k,Y,V,at;if(U>=E&&U>=T?(N=c,B=f,k=g,at=m,c>=0?(_=l,S=h,C=d,D=u,q=v,R=p,Y=M,V=b):(_=h,S=l,C=u,D=d,q=p,R=v,Y=b,V=M)):E>=T?(N=l,B=d,k=v,at=M,l>=0?(_=h,S=c,C=u,D=f,q=p,R=g,Y=b,V=m):(_=c,S=h,C=f,D=u,q=g,R=p,Y=m,V=b)):(N=h,B=u,k=p,at=b,h>=0?(_=c,S=l,C=f,D=d,q=g,R=v,Y=m,V=M):(_=l,S=c,C=d,D=f,q=v,R=g,Y=M,V=m)),N===0)return null;let X=_/N,nt=S/N,it=1/N,Lt=C-X*B,Ot=D-nt*B,Z=q-X*k,dt=R-nt*k,Et=Y-X*at,Gt=V-nt*at,bt=Et*dt-Gt*Z,zt=Lt*Gt-Ot*Et,pe=Z*Ot-dt*Lt;if(s){if(bt<0||zt<0||pe<0)return null}else if((bt<0||zt<0||pe<0)&&(bt>0||zt>0||pe>0))return null;let Ht=bt+zt+pe;if(Ht===0)return null;let Kt=it*(bt*B+zt*k+pe*at);return(Ht>0?Kt<0:Kt>0)?null:this.at(Kt/Ht,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hn=class extends Pn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gh=new ye,Ii=new vs,ga=new ni,_h=new L,_a=new L,xa=new L,va=new L,zl=new L,ya=new L,xh=new L,Ua=new L,fe=class extends Ge{constructor(t=new He,e=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ya.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(zl.fromBufferAttribute(f,t),a?ya.addScaledVector(zl,h):ya.addScaledVector(zl.sub(e),h))}e.add(ya)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(ga.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(ga,_h)===null||Ii.origin.distanceToSquared(_h)>(t.far-t.near)**2))&&(gh.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(gh),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],M=Math.max(p.start,u.start),b=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let U=M,E=b;U<E;U+=3){let T=o.getX(U),_=o.getX(U+1),S=o.getX(U+2);s=Ma(this,m,t,n,l,h,f,T,_,S),s&&(s.faceIndex=Math.floor(U/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let p=g,m=v;p<m;p+=3){let M=o.getX(p),b=o.getX(p+1),U=o.getX(p+2);s=Ma(this,a,t,n,l,h,f,M,b,U),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],M=Math.max(p.start,u.start),b=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let U=M,E=b;U<E;U+=3){let T=U,_=U+1,S=U+2;s=Ma(this,m,t,n,l,h,f,T,_,S),s&&(s.faceIndex=Math.floor(U/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let p=g,m=v;p<m;p+=3){let M=p,b=p+1,U=p+2;s=Ma(this,a,t,n,l,h,f,M,b,U),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function jd(i,t,e,n,s,r,a,o){let c;if(t.side===je?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Si,o),c===null)return null;Ua.copy(o),Ua.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ua);return l<e.near||l>e.far?null:{distance:l,point:Ua.clone(),object:i}}function Ma(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,_a),i.getVertexPosition(c,xa),i.getVertexPosition(l,va);let h=jd(i,t,e,n,_a,xa,va,xh);if(h){let f=new L;jn.getBarycoord(xh,_a,xa,va,f),s&&(h.uv=jn.getInterpolatedAttribute(s,o,c,l,f,new ct)),r&&(h.uv1=jn.getInterpolatedAttribute(r,o,c,l,f,new ct)),a&&(h.normal=jn.getInterpolatedAttribute(a,o,c,l,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new L,materialIndex:0};jn.getNormal(_a,xa,va,d.normal),h.face=d,h.barycoord=f}return h}var fr=class extends Qe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ze,h=Ze,f,d){super(null,a,o,c,l,h,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=class extends bn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},os=new ye,vh=new ye,Sa=[],yh=new Gn,tf=new ye,Js=new fe,Ks=new ni,mr=class extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),yh.copy(t.boundingBox).applyMatrix4(os),this.boundingBox.union(yh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),Ks.copy(t.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),t.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),vh.multiplyMatrices(n,os),Js.matrixWorld=vh,Js.raycast(t,Sa);for(let a=0,o=Sa.length;a<o;a++){let c=Sa[a];c.instanceId=r,c.object=this,e.push(c)}Sa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fr(new Float32Array(s*this.count),s,this.count,Eo,An));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Pi=new ni,ef=new ct(.5,.5),ba=new L,_i=class{constructor(t=new gn,e=new gn,n=new gn,s=new gn,r=new gn,a=new gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],u=r[7],g=r[8],v=r[9],p=r[10],m=r[11],M=r[12],b=r[13],U=r[14],E=r[15];if(s[0].setComponents(l-a,u-h,m-g,E-M).normalize(),s[1].setComponents(l+a,u+h,m+g,E+M).normalize(),s[2].setComponents(l+o,u+f,m+v,E+b).normalize(),s[3].setComponents(l-o,u-f,m-v,E-b).normalize(),n)s[4].setComponents(c,d,p,U).normalize(),s[5].setComponents(l-c,u-d,m-p,E-U).normalize();else if(s[4].setComponents(l-c,u-d,m-p,E-U).normalize(),e===Sn)s[5].setComponents(l+c,u+d,m+p,E+U).normalize();else if(e===fs)s[5].setComponents(c,d,p,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);let e=ef.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ba.x=s.normal.x>0?t.max.x:t.min.x,ba.y=s.normal.y>0?t.max.y:t.min.y,ba.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ba)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Uh=new ye,Ya=class i{constructor(){this.coordinateSystem=Sn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Uh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new _i),n[s].setFromProjectionMatrix(Uh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new _i),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var gr=class extends Pn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},$a=new L,Za=new L,Mh=new ye,Qs=new vs,Ta=new ni,kl=new L,Sh=new L,_r=class extends Ge{constructor(t=new He,e=new gr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)$a.fromBufferAttribute(e,s-1),Za.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=$a.distanceTo(Za);t.setAttribute("lineDistance",new ge(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(s),Ta.radius+=r,t.ray.intersectsSphere(Ta)===!1)return;Mh.copy(s).invert(),Qs.copy(t.ray).applyMatrix4(Mh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=u,p=g-1;v<p;v+=l){let m=h.getX(v),M=h.getX(v+1),b=Aa(this,t,Qs,c,m,M,v);b&&e.push(b)}if(this.isLineLoop){let v=h.getX(g-1),p=h.getX(u),m=Aa(this,t,Qs,c,v,p,g-1);m&&e.push(m)}}else{let u=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=u,p=g-1;v<p;v+=l){let m=Aa(this,t,Qs,c,v,v+1,v);m&&e.push(m)}if(this.isLineLoop){let v=Aa(this,t,Qs,c,g-1,u,g-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Aa(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if($a.fromBufferAttribute(o,s),Za.fromBufferAttribute(o,r),e.distanceSqToSegment($a,Za,kl,Sh)>n)return;kl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(kl);if(!(l<t.near||l>t.far))return{distance:l,point:Sh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var xr=class extends Qe{constructor(t=[],e=Vi,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vr=class extends Qe{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ii=class extends Qe{constructor(t,e,n=Ln,s,r,a,o=Ze,c=Ze,l,h=ei,f=1){if(h!==ei&&h!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},yr=class extends ii{constructor(t,e=Ln,n=Vi,s,r,a=Ze,o=Ze,c,l=ei){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ur=class extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Vn=class i extends He{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(f,2));function g(v,p,m,M,b,U,E,T,_,S,N){let C=U/_,D=E/S,B=U/2,q=E/2,R=T/2,k=_+1,Y=S+1,V=0,at=0,X=new L;for(let nt=0;nt<Y;nt++){let it=nt*D-q;for(let Lt=0;Lt<k;Lt++){let Ot=Lt*C-B;X[v]=Ot*M,X[p]=it*b,X[m]=R,l.push(X.x,X.y,X.z),X[v]=0,X[p]=0,X[m]=T>0?1:-1,h.push(X.x,X.y,X.z),f.push(Lt/_),f.push(1-nt/S),V+=1}}for(let nt=0;nt<S;nt++)for(let it=0;it<_;it++){let Lt=d+it+k*nt,Ot=d+it+k*(nt+1),Z=d+(it+1)+k*(nt+1),dt=d+(it+1)+k*nt;c.push(Lt,Ot,dt),c.push(Ot,Z,dt),at+=6}o.addGroup(u,at,N),u+=at,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var si=class i extends He{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new L,h=new ct;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=n+f/e*s;l.x=t*Math.cos(u),l.y=t*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(o,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},xi=class i extends He{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],g=0,v=[],p=n/2,m=0;M(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ge(f,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(u,2));function M(){let U=new L,E=new L,T=0,_=(e-t)/n;for(let S=0;S<=r;S++){let N=[],C=S/r,D=C*(e-t)+t;for(let B=0;B<=s;B++){let q=B/s,R=q*c+o,k=Math.sin(R),Y=Math.cos(R);E.x=D*k,E.y=-C*n+p,E.z=D*Y,f.push(E.x,E.y,E.z),U.set(k,_,Y).normalize(),d.push(U.x,U.y,U.z),u.push(q,1-C),N.push(g++)}v.push(N)}for(let S=0;S<s;S++)for(let N=0;N<r;N++){let C=v[N][S],D=v[N+1][S],B=v[N+1][S+1],q=v[N][S+1];(t>0||N!==0)&&(h.push(C,D,q),T+=3),(e>0||N!==r-1)&&(h.push(D,B,q),T+=3)}l.addGroup(m,T,0),m+=T}function b(U){let E=g,T=new ct,_=new L,S=0,N=U===!0?t:e,C=U===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,p*C,0),d.push(0,C,0),u.push(.5,.5),g++;let D=g;for(let B=0;B<=s;B++){let R=B/s*c+o,k=Math.cos(R),Y=Math.sin(R);_.x=N*Y,_.y=p*C,_.z=N*k,f.push(_.x,_.y,_.z),d.push(0,C,0),T.x=k*.5+.5,T.y=Y*.5*C+.5,u.push(T.x,T.y),g++}for(let B=0;B<s;B++){let q=E+B,R=D+B;U===!0?h.push(R,R+1,q):h.push(R+1,R,q),S+=3}l.addGroup(m,S,U===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ct:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],a=[],o=new L,c=new ye;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ce(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,g))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(ce(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],u*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},ys=class extends xn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*f+this.aX,l=d*f+u*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ja=class extends ys{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ac(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+f)+(c-o)/f;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var bh=new L,Th=new L,Gl=new Ac,Vl=new Ac,Hl=new Ac,Ka=class extends xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Th.subVectors(s[0],s[1]).add(s[0]),l=Th);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(bh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bh),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),u),v=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Gl.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,g,v,p),Vl.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,g,v,p),Hl.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Gl.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),Vl.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),Hl.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return n.set(Gl.calc(c),Vl.calc(c),Hl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ah(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function nf(i,t){let e=1-i;return e*e*t}function sf(i,t){return 2*(1-i)*i*t}function rf(i,t){return i*i*t}function tr(i,t,e,n){return nf(i,t)+sf(i,e)+rf(i,n)}function af(i,t){let e=1-i;return e*e*e*t}function of(i,t){let e=1-i;return 3*e*e*i*t}function lf(i,t){return 3*(1-i)*i*i*t}function cf(i,t){return i*i*i*t}function er(i,t,e,n,s){return af(i,t)+of(i,e)+lf(i,n)+cf(i,s)}var Mr=class extends xn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(er(t,s.x,r.x,a.x,o.x),er(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qa=class extends xn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(er(t,s.x,r.x,a.x,o.x),er(t,s.y,r.y,a.y,o.y),er(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sr=class extends xn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends xn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},br=class extends xn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(tr(t,s.x,r.x,a.x),tr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},to=class extends xn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(tr(t,s.x,r.x,a.x),tr(t,s.y,r.y,a.y),tr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tr=class extends xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Ah(o,c.x,l.x,h.x,f.x),Ah(o,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},Zl=Object.freeze({__proto__:null,ArcCurve:Ja,CatmullRomCurve3:Ka,CubicBezierCurve:Mr,CubicBezierCurve3:Qa,EllipseCurve:ys,LineCurve:Sr,LineCurve3:ja,QuadraticBezierCurve:br,QuadraticBezierCurve3:to,SplineCurve:Tr}),eo=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Zl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Fi=class extends eo{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Sr(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new br(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Mr(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Tr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new ys(t,e,n,s,r,a,o,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Us=class extends Fi{constructor(t){super(t),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Fi().fromJSON(s))}return this}};function hf(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Au(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=mf(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let h=o,f=c;for(let d=e;d<s;d+=e){let u=i[d],g=i[d+1];u<o&&(o=u),g<c&&(c=g),u>h&&(h=u),g>f&&(f=g)}l=Math.max(h-o,f-c),l=l!==0?32767/l:0}return Ar(r,a,e,o,c,l,0),a}function Au(i,t,e,n,s){let r;if(s===Af(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Eh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Eh(a/n|0,i[a],i[a+1],r);return r&&Ms(r,r.next)&&(wr(r),r=r.next),r}function Oi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ms(e,e.next)||Pe(e.prev,e,e.next)===0)){if(wr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ar(i,t,e,n,s,r,a){if(!i)return;!a&&r&&yf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?df(i,n,s,r):uf(i)){t.push(c.i,i.i,l.i),wr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=ff(Oi(i),t),Ar(i,t,e,n,s,r,2)):a===2&&pf(i,t,e,n,s,r):Ar(Oi(i),t,e,n,s,r,1);break}}}function uf(i){let t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),f=Math.min(o,c,l),d=Math.max(s,r,a),u=Math.max(o,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=u&&js(s,o,r,c,a,l,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function df(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Pe(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,f=r.y,d=a.y,u=Math.min(o,c,l),g=Math.min(h,f,d),v=Math.max(o,c,l),p=Math.max(h,f,d),m=Jl(u,g,t,e,n),M=Jl(v,p,t,e,n),b=i.prevZ,U=i.nextZ;for(;b&&b.z>=m&&U&&U.z<=M;){if(b.x>=u&&b.x<=v&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&js(o,h,c,f,l,d,b.x,b.y)&&Pe(b.prev,b,b.next)>=0||(b=b.prevZ,U.x>=u&&U.x<=v&&U.y>=g&&U.y<=p&&U!==s&&U!==a&&js(o,h,c,f,l,d,U.x,U.y)&&Pe(U.prev,U,U.next)>=0))return!1;U=U.nextZ}for(;b&&b.z>=m;){if(b.x>=u&&b.x<=v&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&js(o,h,c,f,l,d,b.x,b.y)&&Pe(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;U&&U.z<=M;){if(U.x>=u&&U.x<=v&&U.y>=g&&U.y<=p&&U!==s&&U!==a&&js(o,h,c,f,l,d,U.x,U.y)&&Pe(U.prev,U,U.next)>=0)return!1;U=U.nextZ}return!0}function ff(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ms(n,s)&&wu(n,e,e.next,s)&&Er(n,s)&&Er(s,n)&&(t.push(n.i,e.i,s.i),wr(e),wr(e.next),e=i=s),e=e.next}while(e!==i);return Oi(e)}function pf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sf(a,o)){let c=Cu(a,o);a=Oi(a,a.next),c=Oi(c,c.next),Ar(a,t,e,n,s,r,0),Ar(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function mf(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Au(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Mf(l))}s.sort(gf);for(let r=0;r<s.length;r++)e=_f(s[r],e);return e}function gf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function _f(i,t){let e=xf(i,t);if(!e)return t;let n=Cu(e,i);return Oi(n,n.next),Oi(e,e.next)}function xf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ms(i,e))return e;do{if(Ms(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Eu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Er(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&vf(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function vf(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function yf(i,t,e,n){let s=i;do s.z===0&&(s.z=Jl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Uf(s)}function Uf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Jl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Mf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Eu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function js(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Eu(i,t,e,n,s,r,a,o)}function Sf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!bf(i,t)&&(Er(i,t)&&Er(t,i)&&Tf(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||Ms(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ms(i,t){return i.x===t.x&&i.y===t.y}function wu(i,t,e,n){let s=wa(Pe(i,t,e)),r=wa(Pe(i,t,n)),a=wa(Pe(e,n,i)),o=wa(Pe(e,n,t));return!!(s!==r&&a!==o||s===0&&Ea(i,e,t)||r===0&&Ea(i,n,t)||a===0&&Ea(e,i,n)||o===0&&Ea(e,t,n))}function Ea(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function wa(i){return i>0?1:i<0?-1:0}function bf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&wu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Er(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function Tf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Cu(i,t){let e=Kl(i.i,i.x,i.y),n=Kl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Eh(i,t,e,n){let s=Kl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Af(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ql=class{static triangulate(t,e,n=2){return hf(t,e,n)}},Li=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];wh(t),Ch(n,t);let a=t.length;e.forEach(wh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Ch(n,e[c]);let o=Ql.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function wh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ch(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Cr=class i extends He{constructor(t=new Us([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new ge(s,3)),this.setAttribute("uv",new ge(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Ef,b,U=!1,E,T,_,S;if(m){b=m.getSpacedPoints(h),U=!0,d=!1;let tt=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(h,tt),T=new L,_=new L,S=new L}d||(p=0,u=0,g=0,v=0);let N=o.extractPoints(l),C=N.shape,D=N.holes;if(!Li.isClockWise(C)){C=C.reverse();for(let tt=0,pt=D.length;tt<pt;tt++){let lt=D[tt];Li.isClockWise(lt)&&(D[tt]=lt.reverse())}}function q(tt){let lt=10000000000000001e-36,mt=tt[0];for(let St=1;St<=tt.length;St++){let $t=St%tt.length,Bt=tt[$t],re=Bt.x-mt.x,ae=Bt.y-mt.y,me=re*re+ae*ae,P=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(mt.x),Math.abs(mt.y)),Le=lt*P*P;if(me<=Le){tt.splice($t,1),St--;continue}mt=Bt}}q(C),D.forEach(q);let R=D.length,k=C;for(let tt=0;tt<R;tt++){let pt=D[tt];C=C.concat(pt)}function Y(tt,pt,lt){return pt||qt("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(pt,lt)}let V=C.length;function at(tt,pt,lt){let mt,St,$t,Bt=tt.x-pt.x,re=tt.y-pt.y,ae=lt.x-tt.x,me=lt.y-tt.y,P=Bt*Bt+re*re,Le=Bt*me-re*ae;if(Math.abs(Le)>Number.EPSILON){let ee=Math.sqrt(P),be=Math.sqrt(ae*ae+me*me),vt=pt.x-re/ee,we=pt.y+Bt/ee,kt=lt.x-me/be,Wt=lt.y+ae/be,A=((kt-vt)*me-(Wt-we)*ae)/(Bt*me-re*ae);mt=vt+Bt*A-tt.x,St=we+re*A-tt.y;let x=mt*mt+St*St;if(x<=2)return new ct(mt,St);$t=Math.sqrt(x/2)}else{let ee=!1;Bt>Number.EPSILON?ae>Number.EPSILON&&(ee=!0):Bt<-Number.EPSILON?ae<-Number.EPSILON&&(ee=!0):Math.sign(re)===Math.sign(me)&&(ee=!0),ee?(mt=-re,St=Bt,$t=Math.sqrt(P)):(mt=Bt,St=re,$t=Math.sqrt(P/2))}return new ct(mt/$t,St/$t)}let X=[];for(let tt=0,pt=k.length,lt=pt-1,mt=tt+1;tt<pt;tt++,lt++,mt++)lt===pt&&(lt=0),mt===pt&&(mt=0),X[tt]=at(k[tt],k[lt],k[mt]);let nt=[],it,Lt=X.concat();for(let tt=0,pt=R;tt<pt;tt++){let lt=D[tt];it=[];for(let mt=0,St=lt.length,$t=St-1,Bt=mt+1;mt<St;mt++,$t++,Bt++)$t===St&&($t=0),Bt===St&&(Bt=0),it[mt]=at(lt[mt],lt[$t],lt[Bt]);nt.push(it),Lt=Lt.concat(it)}let Ot;if(p===0)Ot=Li.triangulateShape(k,D);else{let tt=[],pt=[];for(let lt=0;lt<p;lt++){let mt=lt/p,St=u*Math.cos(mt*Math.PI/2),$t=g*Math.sin(mt*Math.PI/2)+v;for(let Bt=0,re=k.length;Bt<re;Bt++){let ae=Y(k[Bt],X[Bt],$t);zt(ae.x,ae.y,-St),mt===0&&tt.push(ae)}for(let Bt=0,re=R;Bt<re;Bt++){let ae=D[Bt];it=nt[Bt];let me=[];for(let P=0,Le=ae.length;P<Le;P++){let ee=Y(ae[P],it[P],$t);zt(ee.x,ee.y,-St),mt===0&&me.push(ee)}mt===0&&pt.push(me)}}Ot=Li.triangulateShape(tt,pt)}let Z=Ot.length,dt=g+v;for(let tt=0;tt<V;tt++){let pt=d?Y(C[tt],Lt[tt],dt):C[tt];U?(_.copy(E.normals[0]).multiplyScalar(pt.x),T.copy(E.binormals[0]).multiplyScalar(pt.y),S.copy(b[0]).add(_).add(T),zt(S.x,S.y,S.z)):zt(pt.x,pt.y,0)}for(let tt=1;tt<=h;tt++)for(let pt=0;pt<V;pt++){let lt=d?Y(C[pt],Lt[pt],dt):C[pt];U?(_.copy(E.normals[tt]).multiplyScalar(lt.x),T.copy(E.binormals[tt]).multiplyScalar(lt.y),S.copy(b[tt]).add(_).add(T),zt(S.x,S.y,S.z)):zt(lt.x,lt.y,f/h*tt)}for(let tt=p-1;tt>=0;tt--){let pt=tt/p,lt=u*Math.cos(pt*Math.PI/2),mt=g*Math.sin(pt*Math.PI/2)+v;for(let St=0,$t=k.length;St<$t;St++){let Bt=Y(k[St],X[St],mt);zt(Bt.x,Bt.y,f+lt)}for(let St=0,$t=D.length;St<$t;St++){let Bt=D[St];it=nt[St];for(let re=0,ae=Bt.length;re<ae;re++){let me=Y(Bt[re],it[re],mt);U?zt(me.x,me.y+b[h-1].y,b[h-1].x+lt):zt(me.x,me.y,f+lt)}}}Et(),Gt();function Et(){let tt=s.length/3;if(d){let pt=0,lt=V*pt;for(let mt=0;mt<Z;mt++){let St=Ot[mt];pe(St[2]+lt,St[1]+lt,St[0]+lt)}pt=h+p*2,lt=V*pt;for(let mt=0;mt<Z;mt++){let St=Ot[mt];pe(St[0]+lt,St[1]+lt,St[2]+lt)}}else{for(let pt=0;pt<Z;pt++){let lt=Ot[pt];pe(lt[2],lt[1],lt[0])}for(let pt=0;pt<Z;pt++){let lt=Ot[pt];pe(lt[0]+V*h,lt[1]+V*h,lt[2]+V*h)}}n.addGroup(tt,s.length/3-tt,0)}function Gt(){let tt=s.length/3,pt=0;bt(k,pt),pt+=k.length;for(let lt=0,mt=D.length;lt<mt;lt++){let St=D[lt];bt(St,pt),pt+=St.length}n.addGroup(tt,s.length/3-tt,1)}function bt(tt,pt){let lt=tt.length;for(;--lt>=0;){let mt=lt,St=lt-1;St<0&&(St=tt.length-1);for(let $t=0,Bt=h+p*2;$t<Bt;$t++){let re=V*$t,ae=V*($t+1),me=pt+mt+re,P=pt+St+re,Le=pt+St+ae,ee=pt+mt+ae;Ht(me,P,Le,ee)}}}function zt(tt,pt,lt){c.push(tt),c.push(pt),c.push(lt)}function pe(tt,pt,lt){Kt(tt),Kt(pt),Kt(lt);let mt=s.length/3,St=M.generateTopUV(n,s,mt-3,mt-2,mt-1);te(St[0]),te(St[1]),te(St[2])}function Ht(tt,pt,lt,mt){Kt(tt),Kt(pt),Kt(mt),Kt(pt),Kt(lt),Kt(mt);let St=s.length/3,$t=M.generateSideWallUV(n,s,St-6,St-3,St-2,St-1);te($t[0]),te($t[1]),te($t[3]),te($t[1]),te($t[2]),te($t[3])}function Kt(tt){s.push(c[tt*3+0]),s.push(c[tt*3+1]),s.push(c[tt*3+2])}function te(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return wf(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Zl[s.type]().fromJSON(s)),new i(n,t.options)}},Ef={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ct(r,a),new ct(o,c),new ct(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[s*3],u=t[s*3+1],g=t[s*3+2],v=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ct(a,1-c),new ct(l,1-f),new ct(d,1-g),new ct(v,1-m)]:[new ct(o,1-c),new ct(h,1-f),new ct(u,1-g),new ct(p,1-m)]}};function wf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Rr=class i extends He{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ce(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,f=new L,d=new ct,u=new L,g=new L,v=new L,p=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,u.x=m*1,u.y=-p,u.z=m*0,v.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case t.length-1:v.normalize(),c.push(v.x,v.y,v.z);break;default:p=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,u.x=m*1,u.y=-p,u.z=m*0,g.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),c.push(u.x,u.y,u.z),v.copy(g)}for(let M=0;M<=e;M++){let b=n+M*h*s,U=Math.sin(b),E=Math.cos(b);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*U,f.y=t[T].y,f.z=t[T].x*E,a.push(f.x,f.y,f.z),d.x=M/e,d.y=T/(t.length-1),o.push(d.x,d.y);let _=c[3*T+0]*U,S=c[3*T+1],N=c[3*T+0]*E;l.push(_,S,N)}}for(let M=0;M<e;M++)for(let b=0;b<t.length-1;b++){let U=b+M*t.length,E=U,T=U+t.length,_=U+t.length+1,S=U+1;r.push(E,T,S),r.push(_,S,T)}this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("uv",new ge(o,2)),this.setAttribute("normal",new ge(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var vn=class i extends He{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,d=e/c,u=[],g=[],v=[],p=[];for(let m=0;m<h;m++){let M=m*d-a;for(let b=0;b<l;b++){let U=b*f-r;g.push(U,-M,0),v.push(0,0,1),p.push(b/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){let b=M+l*m,U=M+l*(m+1),E=M+1+l*(m+1),T=M+1+l*m;u.push(b,U,T),u.push(U,E,T)}this.setIndex(u),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(v,3)),this.setAttribute("uv",new ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ir=class i extends He{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],f=t,d=(e-t)/s,u=new L,g=new ct;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){let m=r+p/n*a;u.x=f*Math.cos(m),u.y=f*Math.sin(m),c.push(u.x,u.y,u.z),l.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,h.push(g.x,g.y)}f+=d}for(let v=0;v<s;v++){let p=v*(n+1);for(let m=0;m<n;m++){let M=m+p,b=M,U=M+n+1,E=M+n+2,T=M+1;o.push(b,U,T),o.push(U,E,T)}}this.setIndex(o),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Bi=class i extends He{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new L,d=new L,u=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let M=[],b=m/n,U=a+b*o,E=t*Math.cos(U),T=Math.sqrt(t*t-E*E),_=0;m===0&&a===0?_=.5/e:m===n&&c===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){let N=S/e,C=s+N*r;f.x=-T*Math.cos(C),f.y=E,f.z=T*Math.sin(C),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),p.push(N+_,1-b),M.push(l++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let b=h[m][M+1],U=h[m][M],E=h[m+1][M],T=h[m+1][M+1];(m!==0||a>0)&&u.push(b,U,T),(m!==n-1||c<Math.PI)&&u.push(U,E,T)}this.setIndex(u),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(v,3)),this.setAttribute("uv",new ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var vi=class i extends He{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],f=[],d=new L,u=new L,g=new L;for(let v=0;v<=n;v++){let p=a+v/n*o;for(let m=0;m<=s;m++){let M=m/s*r;u.x=(t+e*Math.cos(p))*Math.cos(M),u.y=(t+e*Math.cos(p))*Math.sin(M),u.z=e*Math.sin(p),l.push(u.x,u.y,u.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),g.subVectors(u,d).normalize(),h.push(g.x,g.y,g.z),f.push(m/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){let m=(s+1)*v+p-1,M=(s+1)*(v-1)+p-1,b=(s+1)*(v-1)+p,U=(s+1)*v+p;c.push(m,M,U),c.push(M,b,U)}this.setIndex(c),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Rh(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Rh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function sn(i){let t={};for(let e=0;e<i.length;e++){let n=Wi(i[e]);for(let s in n)t[s]=n[s]}return t}function Rh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ec(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var Ru={clone:Wi,merge:sn},Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends Pn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=Cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ye().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},no=class extends Hn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ri=class extends Pn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zr,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Tn=class extends ri{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Di('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Di('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var zi=class extends Pn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zr,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=yo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},io=class extends Pn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},so=class extends Pn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var Pr=class extends gr{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function ls(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ca(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var yi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ro=class extends yi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ql,endingEnd:ql}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yl:r=t,o=2*e-n;break;case $l:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yl:a=t,c=2*n-e;break;case $l:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,M=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-u)*p+(1.5+u)*v+.5*g,U=u*p-u*v;for(let E=0;E!==o;++E)r[E]=m*a[h+E]+M*a[l+E]+b*a[c+E]+U*a[f+E];return r}},ao=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*f+a[c+d]*h;return r}},oo=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},lo=class extends yi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(s-e),v=1-g;for(let p=0;p!==o;++p)r[p]=a[l+p]*v+a[c+p]*g;return r}let d=o*2,u=t-1;for(let g=0;g!==o;++g){let v=a[l+g],p=a[c+g],m=u*d+g*2,M=f[m],b=f[m+1],U=t*d+g*2,E=h[U],T=h[U+1],_=Lf(n,e,M,E,s);r[g]=Iu(_,v,b,T,p)}return r}};function Iu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Pf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Lf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Iu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Pf(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ls(e,this.TimeBufferType),this.values=ls(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ls(t.times,Array),values:ls(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ca(t.settings)&&(n.settings={inTangents:ls(t.settings.inTangents,Array),outTangents:ls(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new lo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case nr:e=this.InterpolantFactoryMethodDiscrete;break;case Va:e=this.InterpolantFactoryMethodLinear;break;case Pa:e=this.InterpolantFactoryMethodSmooth;break;case Xl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return Va;case this.InterpolantFactoryMethodSmooth:return Pa;case this.InterpolantFactoryMethodBezier:return Xl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Ca(this.settings)&&(Ih(this.settings.inTangents,t),Ih(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ca(this.settings)&&(Ph(this.settings.inTangents,t),Ph(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){qt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){qt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Nd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){qt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pa,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let v=e[f+g];if(v!==e[d+g]||v!==e[u+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ca(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ih(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Ph(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Va;var Ui=class extends yn{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=nr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};co.prototype.ValueTypeName="color";var ho=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};ho.prototype.ValueTypeName="number";var uo=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)cn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Lr=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new uo(this.times,this.values,this.getValueSize(),t)}};Lr.prototype.ValueTypeName="quaternion";Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends yn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=nr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};fo.prototype.ValueTypeName="vector";var po=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let u=l[f],g=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pu=new po,mo=class{constructor(t){this.manager=t!==void 0?t:Pu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Dr=class extends Ge{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Nr=class extends Dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Wl=new ye,Lh=new L,Dh=new L,go=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _i,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lh),Dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Wl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===fs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Wl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ra=new L,Ia=new cn,On=new L,Fr=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ra,Ia,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ia,On.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ra,Ia,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ia,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mi=new L,Nh=new ct,Fh=new ct,nn=class extends Fr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return or*2*Math.atan(Math.tan(xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,Nh,Fh),e.subVectors(Fh,Nh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},jl=class extends go{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=or*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Or=class extends Dr{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new jl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}};var _o=class extends Fr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var cs=-90,hs=1,Ss=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(cs,hs,t,e);s.layers=this.layers,this.add(s);let r=new nn(cs,hs,t,e);r.layers=this.layers,this.add(r);let a=new nn(cs,hs,t,e);a.layers=this.layers,this.add(a);let o=new nn(cs,hs,t,e);o.layers=this.layers,this.add(o);let c=new nn(cs,hs,t,e);c.layers=this.layers,this.add(c);let l=new nn(cs,hs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xo=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var wc="\\[\\]\\.:\\/",Df=new RegExp("["+wc+"]","g"),Cc="[^"+wc+"]",Nf="[^"+wc.replace("\\.","")+"]",Ff=/((?:WC+[\/:])*)/.source.replace("WC",Cc),Of=/(WCOD+)?/.source.replace("WCOD",Nf),Bf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),zf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),kf=new RegExp("^"+Ff+Of+Bf+zf+"$"),Gf=["material","materials","bones","map"],tc=class{constructor(t,e,n){let s=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Df,"")}static parseTrackName(t){let e=kf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=tc;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Y_=new Float32Array(1);var Oh=new ye,Br=class{constructor(t,e,n=0,s=1/0){this.ray=new vs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Oh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Oh),this}intersectObject(t,e=!0,n=[]){return ec(t,this,n,e),n.sort(Bh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ec(t[s],this,n,e);return n.sort(Bh),n}};function Bh(i,t){return i.distance-t.distance}function ec(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ec(r[a],t,e,!0)}}var Nc=class Nc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Nc.prototype.isMatrix2=!0;var nc=Nc;function Rc(i,t,e,n){let s=Vf(n);switch(e){case vc:return i*t;case Eo:return i*t/s.components*s.byteLength;case wo:return i*t/s.components*s.byteLength;case bi:return i*t*2/s.components*s.byteLength;case Co:return i*t*2/s.components*s.byteLength;case yc:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case Ro:return i*t*4/s.components*s.byteLength;case Hr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Po:case Do:return Math.max(i,16)*Math.max(t,8)/4;case Io:case Lo:return Math.max(i,8)*Math.max(t,8)/2;case No:case Fo:case Bo:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oo:case Yr:case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case el:case nl:case il:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $r:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vf(i){switch(i){case un:case mc:return{byteLength:1,components:1};case Es:case gc:case Dn:return{byteLength:2,components:1};case To:case Ao:return{byteLength:2,components:4};case Ln:case bo:case An:return{byteLength:4,components:1};case _c:case xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function td(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wf(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],v=f[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let v=f[u];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ip=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ip=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Fp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Om=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Km=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ug=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:Xf,alphahash_pars_fragment:qf,alphamap_fragment:Yf,alphamap_pars_fragment:$f,alphatest_fragment:Zf,alphatest_pars_fragment:Jf,aomap_fragment:Kf,aomap_pars_fragment:Qf,batching_pars_vertex:jf,batching_vertex:tp,begin_vertex:ep,beginnormal_vertex:np,bsdfs:ip,iridescence_fragment:sp,bumpmap_pars_fragment:rp,clipping_planes_fragment:ap,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:lp,clipping_planes_vertex:cp,color_fragment:hp,color_pars_fragment:up,color_pars_vertex:dp,color_vertex:fp,common:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:_p,emissivemap_fragment:xp,emissivemap_pars_fragment:vp,colorspace_fragment:yp,colorspace_pars_fragment:Up,envmap_fragment:Mp,envmap_common_pars_fragment:Sp,envmap_pars_fragment:bp,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Fp,envmap_vertex:Ap,fog_vertex:Ep,fog_pars_vertex:wp,fog_fragment:Cp,fog_pars_fragment:Rp,gradientmap_pars_fragment:Ip,lightmap_pars_fragment:Pp,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Dp,lights_pars_begin:Np,lights_toon_fragment:Op,lights_toon_pars_fragment:Bp,lights_phong_fragment:zp,lights_phong_pars_fragment:kp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Hp,lights_fragment_maps:Wp,lights_fragment_end:Xp,lightprobes_pars_fragment:qp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:$p,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Jp,map_fragment:Kp,map_pars_fragment:Qp,map_particle_fragment:jp,map_particle_pars_fragment:tm,metalnessmap_fragment:em,metalnessmap_pars_fragment:nm,morphinstance_vertex:im,morphcolor_vertex:sm,morphnormal_vertex:rm,morphtarget_pars_vertex:am,morphtarget_vertex:om,normal_fragment_begin:lm,normal_fragment_maps:cm,normal_pars_fragment:hm,normal_pars_vertex:um,normal_vertex:dm,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:_m,opaque_fragment:xm,packing:vm,premultiplied_alpha_fragment:ym,project_vertex:Um,dithering_fragment:Mm,dithering_pars_fragment:Sm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Em,shadowmap_vertex:wm,shadowmask_pars_fragment:Cm,skinbase_vertex:Rm,skinning_pars_vertex:Im,skinning_vertex:Pm,skinnormal_vertex:Lm,specularmap_fragment:Dm,specularmap_pars_fragment:Nm,tonemapping_fragment:Fm,tonemapping_pars_fragment:Om,transmission_fragment:Bm,transmission_pars_fragment:zm,uv_pars_fragment:km,uv_pars_vertex:Gm,uv_vertex:Vm,worldpos_vertex:Hm,background_vert:Wm,background_frag:Xm,backgroundCube_vert:qm,backgroundCube_frag:Ym,cube_vert:$m,cube_frag:Zm,depth_vert:Jm,depth_frag:Km,distance_vert:Qm,distance_frag:jm,equirect_vert:tg,equirect_frag:eg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:hg,meshnormal_frag:ug,meshphong_vert:dg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:_g,points_vert:xg,points_frag:vg,shadow_vert:yg,shadow_frag:Ug,sprite_vert:Mg,sprite_frag:Sg},wt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},qn={basic:{uniforms:sn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:sn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:sn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:sn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:sn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:sn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:sn([wt.points,wt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:sn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:sn([wt.common,wt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:sn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:sn([wt.sprite,wt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:sn([wt.common,wt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:sn([wt.lights,wt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};qn.physical={uniforms:sn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var ll={r:0,b:0,g:0},bg=new ye,ed=new Jt;ed.set(-1,0,0,0,1,0,0,0,1);function Tg(i,t,e,n,s,r){let a=new Yt(0),o=s===!0?0:1,c,l,h=null,f=0,d=null;function u(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){let U=M.backgroundBlurriness>0;b=t.get(b,U)}return b}function g(M){let b=!1,U=u(M);U===null?p(a,o):U&&U.isColor&&(p(U,1),b=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,b){let U=u(b);U&&U.isCubeTexture?(l===void 0&&(l=new fe(new Vn(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Wi(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=U,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(b.backgroundRotation)).transpose(),U.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ed),l.material.toneMapped=de.getTransfer(U.colorSpace)!==Se,(h!==U||f!==U.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=U,f=U.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new fe(new vn(2,2),new Hn({name:"BackgroundMaterial",uniforms:Wi(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=de.getTransfer(U.colorSpace)!==Se,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(h!==U||f!==U.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=U,f=U.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,b){M.getRGB(ll,Ec(i)),e.buffers.color.setClear(ll.r,ll.g,ll.b,b,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:v,dispose:m}}function Ag(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(D,B,q,R,k){let Y=!1,V=f(D,R,q,B);r!==V&&(r=V,l(r.object)),Y=u(D,R,q,k),Y&&g(D,R,q,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,U(D,B,q,R),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function f(D,B,q,R){let k=R.wireframe===!0,Y=n[B.id];Y===void 0&&(Y={},n[B.id]=Y);let V=D.isInstancedMesh===!0?D.id:0,at=Y[V];at===void 0&&(at={},Y[V]=at);let X=at[q.id];X===void 0&&(X={},at[q.id]=X);let nt=X[k];return nt===void 0&&(nt=d(c()),X[k]=nt),nt}function d(D){let B=[],q=[],R=[];for(let k=0;k<e;k++)B[k]=0,q[k]=0,R[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:R,object:D,attributes:{},index:null}}function u(D,B,q,R){let k=r.attributes,Y=B.attributes,V=0,at=q.getAttributes();for(let X in at)if(at[X].location>=0){let it=k[X],Lt=Y[X];if(Lt===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(Lt=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(Lt=D.instanceColor)),it===void 0||it.attribute!==Lt||Lt&&it.data!==Lt.data)return!0;V++}return r.attributesNum!==V||r.index!==R}function g(D,B,q,R){let k={},Y=B.attributes,V=0,at=q.getAttributes();for(let X in at)if(at[X].location>=0){let it=Y[X];it===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(it=D.instanceColor));let Lt={};Lt.attribute=it,it&&it.data&&(Lt.data=it.data),k[X]=Lt,V++}r.attributes=k,r.attributesNum=V,r.index=R}function v(){let D=r.newAttributes;for(let B=0,q=D.length;B<q;B++)D[B]=0}function p(D){m(D,0)}function m(D,B){let q=r.newAttributes,R=r.enabledAttributes,k=r.attributeDivisors;q[D]=1,R[D]===0&&(i.enableVertexAttribArray(D),R[D]=1),k[D]!==B&&(i.vertexAttribDivisor(D,B),k[D]=B)}function M(){let D=r.newAttributes,B=r.enabledAttributes;for(let q=0,R=B.length;q<R;q++)B[q]!==D[q]&&(i.disableVertexAttribArray(q),B[q]=0)}function b(D,B,q,R,k,Y,V){V===!0?i.vertexAttribIPointer(D,B,q,k,Y):i.vertexAttribPointer(D,B,q,R,k,Y)}function U(D,B,q,R){v();let k=R.attributes,Y=q.getAttributes(),V=B.defaultAttributeValues;for(let at in Y){let X=Y[at];if(X.location>=0){let nt=k[at];if(nt===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor)),nt!==void 0){let it=nt.normalized,Lt=nt.itemSize,Ot=t.get(nt);if(Ot===void 0)continue;let Z=Ot.buffer,dt=Ot.type,Et=Ot.bytesPerElement,Gt=dt===i.INT||dt===i.UNSIGNED_INT||nt.gpuType===bo;if(nt.isInterleavedBufferAttribute){let bt=nt.data,zt=bt.isInterleavedBuffer===!0?bt.stride:bt.itemSize,pe=nt.offset;if(bt.isInstancedInterleavedBuffer||bt.isInstancedBufferAttribute){for(let Ht=0;Ht<X.locationSize;Ht++)m(X.location+Ht,bt.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Ht=0;Ht<X.locationSize;Ht++)p(X.location+Ht);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Ht=0;Ht<X.locationSize;Ht++)b(X.location+Ht,Lt/X.locationSize,dt,it,zt*Et,(pe+Lt/X.locationSize*Ht)*Et,Gt)}else{if(nt.isInstancedBufferAttribute){for(let bt=0;bt<X.locationSize;bt++)m(X.location+bt,nt.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let bt=0;bt<X.locationSize;bt++)p(X.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let bt=0;bt<X.locationSize;bt++)b(X.location+bt,Lt/X.locationSize,dt,it,Lt*Et,Lt/X.locationSize*bt*Et,Gt)}}else if(V!==void 0){let it=V[at];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(X.location,it);break;case 3:i.vertexAttrib3fv(X.location,it);break;case 4:i.vertexAttrib4fv(X.location,it);break;default:i.vertexAttrib1fv(X.location,it)}}}}M()}function E(){N();for(let D in n){let B=n[D];for(let q in B){let R=B[q];for(let k in R){let Y=R[k];for(let V in Y)h(Y[V].object),delete Y[V];delete R[k]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let B=n[D.id];for(let q in B){let R=B[q];for(let k in R){let Y=R[k];for(let V in Y)h(Y[V].object),delete Y[V];delete R[k]}}delete n[D.id]}function _(D){for(let B in n){let q=n[B];for(let R in q){let k=q[R];if(k[D.id]===void 0)continue;let Y=k[D.id];for(let V in Y)h(Y[V].object),delete Y[V];delete k[D.id]}}}function S(D){for(let B in n){let q=n[B],R=D.isInstancedMesh===!0?D.id:0,k=q[R];if(k!==void 0){for(let Y in k){let V=k[Y];for(let at in V)h(V[at].object),delete V[at];delete k[Y]}delete q[R],Object.keys(q).length===0&&delete n[B]}}}function N(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function Eg(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function wg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Nn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===Dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==un&&_!==An&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Xt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),U=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:U,maxSamples:E,samples:T}}function Cg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new gn,o=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let M=r?0:n,b=M*4,U=m.clippingState||null;c.value=U,U=h(g,d,b,u);for(let E=0;E!==b;++E)U[E]=e[E];m.clippingState=U,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,g){let v=f!==null?f.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let m=u+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,U=u;b!==v;++b,U+=4)a.copy(f[b]).applyMatrix4(M,o),a.normal.toArray(p,U),p[U+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}var Qr=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vn(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:ki});r.uniforms.tEquirect.value=e;let a=new fe(s,r),o=e.minFilter;return e.minFilter===ai&&(e.minFilter=on),new Ss(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Lu=256,Rg=3,Ig=20,nd=256,id=16,Pg=3,Lg=new L,Dg=new Yt,Cs=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ss(1,10,null),this._boxMesh=new fe(new Vn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Lg}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,u=c.autoClearDepth,g=c.autoClearStencil,v=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(t.background=c.getClearColor(Dg));let p=new Ss(n,s,h);return p.position.copy(o),p.update(c,t),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=u,c.autoClearStencil=g,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Lu,Uu(t))}_fromTexture(t,e){t.mapping===Vi||t.mapping===As?this._setSize(t.image.length===0?Lu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Du(t,!1,!1),n=Math.log2(t)-Rg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Du(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Vi||t.mapping===As?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Nu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ng(),this._integrationMaterial=Fg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/id);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Pg)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(nd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Og());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Du(i,t,e){return new Qr(i,{minFilter:ai,generateMipmaps:t,type:Dn,colorSpace:ir,depthBuffer:e})}function jr(i,t,e){return new Hn({name:i,uniforms:t,vertexShader:se.cube_vert,fragmentShader:e,side:je,blending:ki,depthTest:!1,depthWrite:!1})}function Ng(){return jr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${nd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Fg(){return jr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:id}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Og(){return jr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ig}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Nu(){return jr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Fu(){return jr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Bg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Uo||u===Mo)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new Qr(g.height);return v.fromEquirectangularTexture(i,d),t.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,g=u===Uo||u===Mo,v=u===Vi||u===As;if(g||v){let p=e.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Cs(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let M=d.image;return g&&M&&M.height>0||v&&M&&c(M)?(n===null&&(n=new Cs(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,u){return u===Uo?d.mapping=Vi:u===Mo&&(d.mapping=As),d}function c(d){let u=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&u++;return u===g}function l(d){let u=d.target;u.removeEventListener("dispose",l);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function zg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Di("WebGLRenderer: "+n+" extension not supported."),s}}}function kg(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(t.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(g){let v=g.attributes;for(let p in v)t.update(v[p],i.ARRAY_BUFFER)}function f(g){let v=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let M=v!==null?v.array.length:p.array.length/3-1,b=p.count>=65535?hr:cr,U=new b(Math.ceil(M/3)*6,1),E=U.array;if(v!==null){let _=v.array;m=v.version;for(let S=0,N=0;S<M;S+=3){let C=_[S+0],D=_[S+1],B=_[S+2];E[N++]=C,E[N++]=D,E[N++]=D,E[N++]=B,E[N++]=B,E[N++]=C}}else{m=p.version;for(let _=0,S=0;_<M;_+=3){let N=_+0,C=_+1,D=_+2;E[S++]=N,E[S++]=C,E[S++]=C,E[S++]=D,E[S++]=D,E[S++]=N}}U.version=m;let T=r.get(g);T&&t.remove(T),r.set(g,U)}function d(g){let v=r.get(g);if(v){let p=g.index;p!==null&&v.version<p.version&&f(g)}else f(g);return r.get(g)}function u(){for(let g in s){let v=s[g].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:d,dispose:u}}function Gg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function l(f,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,f*a,u),e.update(d,n,u))}function h(f,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let v=0;for(let p=0;p<u;p++)v+=d[p];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Vg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Hg(i,t,e){let n=new WeakMap,s=new Ce;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let N=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],b=0;u===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let U=o.attributes.position.count*b,E=1;U>t.maxTextureSize&&(E=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);let T=new Float32Array(U*E*4*f),_=new lr(T,U,E,f);_.type=An,_.needsUpdate=!0;let S=b*4;for(let C=0;C<f;C++){let D=p[C],B=m[C],q=M[C],R=U*E*4*C;for(let k=0;k<D.count;k++){let Y=k*S;u===!0&&(s.fromBufferAttribute(D,k),T[R+Y+0]=s.x,T[R+Y+1]=s.y,T[R+Y+2]=s.z,T[R+Y+3]=0),g===!0&&(s.fromBufferAttribute(B,k),T[R+Y+4]=s.x,T[R+Y+5]=s.y,T[R+Y+6]=s.z,T[R+Y+7]=0),v===!0&&(s.fromBufferAttribute(q,k),T[R+Y+8]=s.x,T[R+Y+9]=s.y,T[R+Y+10]=s.z,T[R+Y+11]=q.itemSize===4?s.w:1)}}d={count:f,texture:_,size:new ct(U,E)},n.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let v=0;v<l.length;v++)u+=l[v];let g=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Wg(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,d=t.get(l,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Xg={[lc]:"LINEAR_TONE_MAPPING",[cc]:"REINHARD_TONE_MAPPING",[hc]:"CINEON_TONE_MAPPING",[Gr]:"ACES_FILMIC_TONE_MAPPING",[dc]:"AGX_TONE_MAPPING",[fc]:"NEUTRAL_TONE_MAPPING",[uc]:"CUSTOM_TONE_MAPPING"};function qg(i,t,e,n,s,r){let a=new _n(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new He;h.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ge([0,2,0,0,2,0],2));let f=new no({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new fe(h,f),u=new _o(-1,1,1,-1,0,1),g=null,v=null,p=!1,m,M=null,b=[],U=!1;this.setSize=function(E,T){a.setSize(E,T),o!==null&&o.setSize(E,T),c!==null&&c.setSize(E,T);for(let _=0;_<b.length;_++){let S=b[_];S.setSize&&S.setSize(E,T)}},this.setEffects=function(E){b=E,U=b.length>0&&b[0].isRenderPass===!0;let T=a.width,_=a.height;b.length>0&&o===null&&(o=new _n(T,_,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),c=new _n(T,_,{type:Dn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&b.some(N=>N.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new ii(T,_),r===!0&&(l.format=oi,l.type=Hi)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let N=0;N<b.length;N++){let C=b[N];C.setSize&&C.setSize(T,_),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(E,T){if(p||E.toneMapping===Wn&&b.length===0)return!1;if(M=T,T!==null){let _=T.width,S=T.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return U===!1&&E.setRenderTarget(a),m=E.toneMapping,E.toneMapping=Wn,!0},this.hasRenderPass=function(){return U},this.end=function(E,T){E.toneMapping=m,p=!0;let _=a,S=o;for(let N=0;N<b.length;N++){let C=b[N];C.enabled!==!1&&(C.render(E,S,_,T),C.needsSwap!==!1&&(_=S,S=S===o?c:o))}if(g!==E.outputColorSpace||v!==E.toneMapping){g=E.outputColorSpace,v=E.toneMapping,f.defines={},de.getTransfer(g)===Se&&(f.defines.SRGB_TRANSFER="");let N=Xg[v];N&&(f.defines[N]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(M),E.render(d,u),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var sd=new Qe,rd=new ii(1,1),ad=new yr(1),od=new lr,ld=new Xa,cd=new xr,Ou=[],Bu=[],zu=new Float32Array(16),ku=new Float32Array(9),Gu=new Float32Array(4);function Rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ou[s];if(r===void 0&&(r=new Float32Array(s),Ou[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ul(i,t){let e=Bu[t];e===void 0&&(e=new Int32Array(t),Bu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Gu.set(n),i.uniformMatrix2fv(this.addr,!1,Gu),Xe(e,n)}}function Qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;ku.set(n),i.uniformMatrix3fv(this.addr,!1,ku),Xe(e,n)}}function jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;zu.set(n),i.uniformMatrix4fv(this.addr,!1,zu),Xe(e,n)}}function t0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function s0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function r0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function o0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function dl(i){return i.version===0&&(i.compareFunction=Sc,i.needsUpdate=!0),i}function l0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=dl(rd):r=sd,e.setTexture2D(t||r,s)}function c0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ld,s)}function h0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=dl(ad):r=cd,e.setTextureCube(t||r,s)}function u0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||od,s)}function d0(i){switch(i){case 5126:return Yg;case 35664:return $g;case 35665:return Zg;case 35666:return Jg;case 35674:return Kg;case 35675:return Qg;case 35676:return jg;case 5124:case 35670:return t0;case 35667:case 35671:return e0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return r0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}}function f0(i,t){i.uniform1fv(this.addr,t)}function p0(i,t){let e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function m0(i,t){let e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function g0(i,t){let e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function _0(i,t){let e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function x0(i,t){let e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function v0(i,t){let e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function y0(i,t){i.uniform1iv(this.addr,t)}function U0(i,t){i.uniform2iv(this.addr,t)}function M0(i,t){i.uniform3iv(this.addr,t)}function S0(i,t){i.uniform4iv(this.addr,t)}function b0(i,t){i.uniform1uiv(this.addr,t)}function T0(i,t){i.uniform2uiv(this.addr,t)}function A0(i,t){i.uniform3uiv(this.addr,t)}function E0(i,t){i.uniform4uiv(this.addr,t)}function w0(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=dl(rd):a=sd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function C0(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ld,r[a])}function R0(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=dl(ad):a=cd;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function I0(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||od,r[a])}function P0(i){switch(i){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return _0;case 35675:return x0;case 35676:return v0;case 5124:case 35670:return y0;case 35667:case 35671:return U0;case 35668:case 35672:return M0;case 35669:case 35673:return S0;case 5125:return b0;case 36294:return T0;case 36295:return A0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return I0}}var Bc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=d0(e.type)}},zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P0(e.type)}},kc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Fc=/(\w+)(\])?(\[|\.)?/g;function Vu(i,t){i.seq.push(t),i.map[t.id]=t}function L0(i,t,e){let n=i.name,s=n.length;for(Fc.lastIndex=0;;){let r=Fc.exec(n),a=Fc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Vu(e,l===void 0?new Bc(o,i,t):new zc(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new kc(o),Vu(e,f)),e=f}}}var ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);L0(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Hu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var D0=37297,N0=0;function F0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Wu=new Jt;function O0(i){de._getMatrix(Wu,de.workingColorSpace,i);let t=`mat3( ${Wu.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case sr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+F0(i.getShaderSource(t),o)}else return r}function B0(i,t){let e=O0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var z0={[lc]:"Linear",[cc]:"Reinhard",[hc]:"Cineon",[Gr]:"ACESFilmic",[dc]:"AgX",[fc]:"Neutral",[uc]:"Custom"};function k0(i,t){let e=z0[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var cl=new L;function G0(){de.getLuminanceCoefficients(cl);let i=cl.x.toFixed(4),t=cl.y.toFixed(4),e=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function H0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function W0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Kr(i){return i!==""}function qu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Yu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(i){return i.replace(X0,q0)}function q0(i,t){let e=se[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Gc(e)}var Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $u(i){return i.replace(Y0,$0)}function $0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Z0={[zr]:"SHADOWMAP_TYPE_PCF",[bs]:"SHADOWMAP_TYPE_VSM"};function J0(i){return Z0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var K0={[As]:"ENVMAP_MODE_REFRACTION"};function Q0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":K0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var j0={[yo]:"ENVMAP_BLENDING_MULTIPLY",[au]:"ENVMAP_BLENDING_MIX",[ou]:"ENVMAP_BLENDING_ADD"};function t_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":j0[i.combine]||"ENVMAP_BLENDING_NONE"}function e_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=J0(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Q0(e),f=t_(e),d=V0(e),u=H0(r),g=s.createProgram(),v,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Kr).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(v=[Zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[Zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?se.tonemapping_pars_fragment:"",e.toneMapping!==Wn?k0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,B0("linearToOutputTexel",e.outputColorSpace),G0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),a=Gc(a),a=qu(a,e),a=Yu(a,e),o=Gc(o),o=qu(o,e),o=Yu(o,e),a=$u(a),o=$u(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+v+a,b=m+p+o,U=Hu(s,s.VERTEX_SHADER,M),E=Hu(s,s.FRAGMENT_SHADER,b);s.attachShader(g,U),s.attachShader(g,E),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(U)||"",q=s.getShaderInfoLog(E)||"",R=D.trim(),k=B.trim(),Y=q.trim(),V=!0,at=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,U,E);else{let X=Xu(s,U,"vertex"),nt=Xu(s,E,"fragment");qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+X+`
`+nt)}else R!==""?Xt("WebGLProgram: Program Info Log:",R):(k===""||Y==="")&&(at=!1);at&&(C.diagnostics={runnable:V,programLog:R,vertexShader:{log:k,prefix:v},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(U),s.deleteShader(E),_=new ws(s,g),S=W0(s,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,D0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=U,this.fragmentShader=E,this}var n_=0,Vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Hc(t),e.set(t,n)),n}},Hc=class{constructor(t){this.id=n_++,this.code=t,this.usedTimes=0}};function i_(i){return i===bi||i===Yr||i===$r}function s_(i,t,e,n,s,r){let a=new gs,o=new Vc,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,S,N,C,D,B){let q=C.fog,R=D.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=t.get(_.envMap||k,Y),at=d[_.type],X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&Xt("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let nt=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,it=nt!==void 0?nt.length:0,Lt=0;R.morphAttributes.position!==void 0&&(Lt=1),R.morphAttributes.normal!==void 0&&(Lt=2),R.morphAttributes.color!==void 0&&(Lt=3);let Ot,Z,dt,Et;if(at){let Ut=qn[at];Ot=Ut.vertexShader,Z=Ut.fragmentShader}else{Ot=_.vertexShader,Z=_.fragmentShader;let Ut=o.getVertexShaderStage(_),oe=o.getFragmentShaderStage(_);o.update(_,Ut,oe),dt=Ut.id,Et=oe.id}let Gt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),zt=D.isInstancedMesh===!0,pe=D.isBatchedMesh===!0,Ht=!!_.map,Kt=!!_.matcap,te=!!V,tt=te&&V.isPMREMTexture===!0,pt=!!_.aoMap,lt=!!_.lightMap,mt=!!_.bumpMap&&_.wireframe===!1,St=!!_.normalMap,$t=!!_.displacementMap,Bt=!!_.emissiveMap,re=!!_.metalnessMap,ae=!!_.roughnessMap,me=_.anisotropy>0,P=_.clearcoat>0,Le=_.diffuseRoughness>0,ee=_.dispersion>0,be=_.retroreflectivity>0,vt=_.iridescence>0,we=_.sheen>0,kt=_.transmission>0,Wt=me&&!!_.anisotropyMap,A=P&&!!_.clearcoatMap,x=P&&!!_.clearcoatNormalMap,F=P&&!!_.clearcoatRoughnessMap,ot=Le&&!!_.diffuseRoughnessMap,et=vt&&!!_.iridescenceMap,gt=vt&&!!_.iridescenceThicknessMap,yt=we&&!!_.sheenColorMap,J=we&&!!_.sheenRoughnessMap,K=!!_.specularMap,xt=!!_.specularColorMap,w=!!_.specularIntensityMap,j=kt&&!!_.transmissionMap,$=kt&&!!_.thicknessMap,_t=!!_.gradientMap,st=!!_.alphaMap,ft=_.alphaTest>0,rt=!!_.alphaHash,Qt=!!_.extensions,ht=Wn;_.toneMapped&&(Gt===null||Gt.isXRRenderTarget===!0)&&(ht=i.toneMapping);let Vt=tt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,jt={shaderID:at,shaderType:_.type,shaderName:_.name,vertexShader:Ot,fragmentShader:Z,defines:_.defines,customVertexShaderID:dt,customFragmentShaderID:Et,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:pe,batchingColor:pe&&D._colorsTexture!==null,instancing:zt,instancingColor:zt&&D.instanceColor!==null,instancingMorph:zt&&D.morphTexture!==null,outputColorSpace:Gt===null?i.outputColorSpace:Gt.isXRRenderTarget===!0?Gt.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ht,matcap:Kt,envMap:te,envMapMode:te&&V.mapping,envMapPMREM:tt,envMapMaxLod:tt?Vt.length-1:null,envMapSize:tt?Vt[0].width:null,aoMap:pt,lightMap:lt,bumpMap:mt,normalMap:St,displacementMap:$t,emissiveMap:Bt,normalMapObjectSpace:St&&_.normalMapType===hu,normalMapTangentSpace:St&&_.normalMapType===Zr,packedNormalMap:St&&_.normalMapType===Zr&&i_(_.normalMap.format),metalnessMap:re,roughnessMap:ae,anisotropy:me,anisotropyMap:Wt,clearcoat:P,clearcoatMap:A,clearcoatNormalMap:x,clearcoatRoughnessMap:F,diffuseRoughness:Le,diffuseRoughnessMap:ot,dispersion:ee,retroreflection:be,iridescence:vt,iridescenceMap:et,iridescenceThicknessMap:gt,sheen:we,sheenColorMap:yt,sheenRoughnessMap:J,specularMap:K,specularColorMap:xt,specularIntensityMap:w,transmission:kt,transmissionMap:j,thicknessMap:$,gradientMap:_t,opaque:_.transparent===!1&&_.blending===Ts&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:ft,alphaHash:rt,combine:_.combine,mapUv:Ht&&u(_.map.channel),aoMapUv:pt&&u(_.aoMap.channel),lightMapUv:lt&&u(_.lightMap.channel),bumpMapUv:mt&&u(_.bumpMap.channel),normalMapUv:St&&u(_.normalMap.channel),displacementMapUv:$t&&u(_.displacementMap.channel),emissiveMapUv:Bt&&u(_.emissiveMap.channel),metalnessMapUv:re&&u(_.metalnessMap.channel),roughnessMapUv:ae&&u(_.roughnessMap.channel),anisotropyMapUv:Wt&&u(_.anisotropyMap.channel),clearcoatMapUv:A&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:et&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&u(_.sheenRoughnessMap.channel),specularMapUv:K&&u(_.specularMap.channel),specularColorMapUv:xt&&u(_.specularColorMap.channel),specularIntensityMapUv:w&&u(_.specularIntensityMap.channel),transmissionMapUv:j&&u(_.transmissionMap.channel),thicknessMapUv:$&&u(_.thicknessMap.channel),alphaMapUv:st&&u(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(St||me),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!R.attributes.uv&&(Ht||st),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&St===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:bt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Lt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:B.filter(Ut=>Ut.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:Ht&&_.map.isVideoTexture===!0&&de.getTransfer(_.map.colorSpace)===Se,decodeVideoTextureEmissive:Bt&&_.emissiveMap.isVideoTexture===!0&&de.getTransfer(_.emissiveMap.colorSpace)===Se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ln,flipSided:_.side===je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Qt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&_.extensions.multiDraw===!0||pe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function v(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)S.push(N),S.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(p(S,_),m(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function m(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let S=d[_.type],N;if(S){let C=qn[S];N=Ru.clone(C.uniforms)}else N=_.uniforms;return N}function b(_,S){let N=h.get(S);return N!==void 0?++N.usedTimes:(N=new e_(i,S,_,s),l.push(N),h.set(S,N)),N}function U(_){if(--_.usedTimes===0){let S=l.indexOf(_);l[S]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:b,releaseProgram:U,releaseShaderCache:E,programs:l,dispose:T}}function r_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function a_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ju(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ku(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,g,v,p,m){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:u,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:m},i[t]=M):(M.id=d.id,M.object=d,M.geometry=u,M.material=g,M.materialVariant=a(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=p,M.group=m),t++,M}function c(d,u,g,v,p,m,M){M.reversedDepth===!0&&(p=-p);let b=o(d,u,g,v,p,m);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):e.push(b)}function l(d,u,g,v,p,m){let M=o(d,u,g,v,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,u){e.length>1&&e.sort(d||a_),n.length>1&&n.sort(u||Ju),s.length>1&&s.sort(u||Ju)}function f(){for(let d=t,u=i.length;d<u;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function o_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ku,i.set(n,[a])):s>=r.length?(a=new Ku,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function l_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Yt};break;case"SpotLight":e={position:new L,direction:new L,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function c_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var h_=0;function u_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function d_(i){let t=new l_,e=c_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new ye,a=new ye;function o(l){let h=0,f=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let u=0,g=0,v=0,p=0,m=0,M=0,b=0,U=0,E=0,T=0,_=0,S=0,N=0,C=0;l.sort(u_);for(let B=0,q=l.length;B<q;B++){let R=l[B],k=R.color,Y=R.intensity,V=R.distance,at=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===bi?at=R.shadow.map.texture:at=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=k.r*Y,f+=k.g*Y,d+=k.b*Y;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],Y);C++}else if(R.isSunLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let nt=R.shadow,it=e.get(R);it.shadowIntensity=nt.intensity,it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[g]=it,n.sunShadowMap[g]=at;let Lt=nt.getViewportCount();for(let Ot=0;Ot<Lt;Ot++)n.sunShadowMatrix[v+Ot]=nt.getMatrix(Ot),n.sunShadowCascade[v+Ot]=nt._cascadeData[Ot];v+=Lt,g++}n.sun[u]=X,u++}else if(R.isDirectionalLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let nt=R.shadow,it=e.get(R);it.shadowIntensity=nt.intensity,it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,n.directionalShadow[p]=it,n.directionalShadowMap[p]=at,n.directionalShadowMatrix[p]=R.shadow.matrix,E++}n.directional[p]=X,p++}else if(R.isSpotLight){let X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(k).multiplyScalar(Y),X.distance=V,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[M]=X;let nt=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,nt.updateMatrices(R),R.castShadow&&N++),n.spotLightMatrix[M]=nt.matrix,R.castShadow){let it=e.get(R);it.shadowIntensity=nt.intensity,it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,n.spotShadow[M]=it,n.spotShadowMap[M]=at,_++}M++}else if(R.isRectAreaLight){let X=t.get(R);X.color.copy(k).multiplyScalar(Y),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[b]=X,b++}else if(R.isPointLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let nt=R.shadow,it=e.get(R);it.shadowIntensity=nt.intensity,it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,it.shadowCameraNear=nt.camera.near,it.shadowCameraFar=nt.camera.far,n.pointShadow[m]=it,n.pointShadowMap[m]=at,n.pointShadowMatrix[m]=R.shadow.matrix,T++}n.point[m]=X,m++}else if(R.isHemisphereLight){let X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(Y),X.groundColor.copy(R.groundColor).multiplyScalar(Y),n.hemi[U]=X,U++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let D=n.hash;(D.sunLength!==u||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==M||D.rectAreaLength!==b||D.hemiLength!==U||D.numSunShadows!==g||D.numDirectionalShadows!==E||D.numPointShadows!==T||D.numSpotShadows!==_||D.numSpotMaps!==S||D.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=p,n.spot.length=M,n.rectArea.length=b,n.point.length=m,n.hemi.length=U,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-N,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=C,D.sunLength=u,D.directionalLength=p,D.pointLength=m,D.spotLength=M,D.rectAreaLength=b,D.hemiLength=U,D.numSunShadows=g,D.numDirectionalShadows=E,D.numPointShadows=T,D.numSpotShadows=_,D.numSpotMaps=S,D.numLightProbes=C,n.version=h_++)}function c(l,h){let f=0,d=0,u=0,g=0,v=0,p=0,m=h.matrixWorldInverse;for(let M=0,b=l.length;M<b;M++){let U=l[M];if(U.isSunLight){let E=n.sun[f];E.direction.setFromMatrixPosition(U.matrixWorld),E.direction.transformDirection(m),f++}else if(U.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(U.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(U.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(U.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(U.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(U.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(U.width*.5,0,0),E.halfHeight.set(0,U.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(U.isPointLight){let E=n.point[u];E.position.setFromMatrixPosition(U.matrixWorld),E.position.applyMatrix4(m),u++}else if(U.isHemisphereLight){let E=n.hemi[p];E.direction.setFromMatrixPosition(U.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:n}}function Qu(i){let t=new d_(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function c(){t.setup(e),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function f_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Qu(i),t.set(s,[o])):r>=a.length?(o=new Qu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,g_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],__=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],ju=new ye,Jr=new L,Oc=new L;function x_(i,t,e){let n=new _i,s=new ct,r=new ct,a=new Ce,o=new io,c=new so,l={},h=e.maxTextureSize,f={[Si]:je,[je]:Si,[ln]:ln},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new He;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new fe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zr;let m=this.type;this.render=function(T,_,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Gh&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zr);let N=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ki),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let q=m!==this.type;q&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(k=>k.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,k=T.length;R<k;R++){let Y=T[R],V=Y.shadow;if(V===void 0){Xt("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let at=V.getFrameExtents();s.multiply(at),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,V.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===bs){if(Y.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new _n(s.x,s.y,{format:bi,type:Dn,minFilter:on,magFilter:on,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new ii(s.x,s.y,An),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=ei,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ze,V.map.depthTexture.magFilter=Ze}else Y.isPointLight?(V.map=new Qr(s.x),V.map.depthTexture=new yr(s.x,Ln)):(V.map=new _n(s.x,s.y),V.map.depthTexture=new ii(s.x,s.y,Ln)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=ei,this.type===zr?(V.map.depthTexture.compareFunction=X?Mc:Uc,V.map.depthTexture.minFilter=on,V.map.depthTexture.magFilter=on):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ze,V.map.depthTexture.magFilter=Ze);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let nt=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Y.isPointLight!==!0&&V.updateMatrices(Y,S);let it=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:S.layers;for(let Lt=0;Lt<nt;Lt++){let Ot=V.getCamera(Lt);if(Y.isPointLight){let Z=V.camera,dt=V.matrix,Et=Y.distance||Z.far;Et!==Z.far&&(Z.far=Et,Z.updateProjectionMatrix()),Jr.setFromMatrixPosition(Y.matrixWorld),Z.position.copy(Jr),Oc.copy(Z.position),Oc.add(g_[Lt]),Z.up.copy(__[Lt]),Z.lookAt(Oc),Z.updateMatrixWorld(),dt.makeTranslation(-Jr.x,-Jr.y,-Jr.z),ju.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),V._frustum.setFromProjectionMatrix(ju,Z.coordinateSystem,Z.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Lt),i.clear();else{Lt===0&&(i.setRenderTarget(V.map),i.clear());let Z=V.getViewport(Lt);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),B.viewport(a)}n=V.getFrustum(Lt),U(_,S,Ot,Y,it,this.type)}V.isPointLightShadow!==!0&&this.type===bs&&M(V,S),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(N,C,D)};function M(T,_){let S=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new _n(s.x,s.y,{format:bi,type:Dn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,S,d,v,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,S,u,v,null)}function b(T,_,S,N){let C=null,D=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=S.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let B=C.uuid,q=_.uuid,R=l[B];R===void 0&&(R={},l[B]=R);let k=R[q];k===void 0&&(k=C.clone(),R[q]=k,_.addEventListener("dispose",E)),C=k}if(C.visible=_.visible,C.wireframe=_.wireframe,N===bs?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:f[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=i.properties.get(C);B.light=S}return C}function U(T,_,S,N,C,D){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===bs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let R=t.update(T),k=T.material;if(Array.isArray(k)){let Y=R.groups;for(let V=0,at=Y.length;V<at;V++){let X=Y[V],nt=k[X.materialIndex];if(nt&&nt.visible){let it=b(T,nt,N,D);T.onBeforeShadow(i,T,_,S,R,it,X),i.renderBufferDirect(S,null,R,it,T,X),T.onAfterShadow(i,T,_,S,R,it,X)}}}else if(k.visible){let Y=b(T,k,N,D);T.onBeforeShadow(i,T,_,S,R,Y,null),i.renderBufferDirect(S,null,R,Y,T,null),T.onAfterShadow(i,T,_,S,R,Y,null)}}let q=T.children;for(let R=0,k=q.length;R<k;R++)U(q[R],_,S,N,C,D)}function E(T){T.target.removeEventListener("dispose",E);for(let S in l){let N=l[S],C=T.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function v_(i,t){function e(){let w=!1,j=new Ce,$=null,_t=new Ce(0,0,0,0);return{setMask:function(st){$!==st&&!w&&(i.colorMask(st,st,st,st),$=st)},setLocked:function(st){w=st},setClear:function(st,ft,rt,Qt,ht){ht===!0&&(st*=Qt,ft*=Qt,rt*=Qt),j.set(st,ft,rt,Qt),_t.equals(j)===!1&&(i.clearColor(st,ft,rt,Qt),_t.copy(j))},reset:function(){w=!1,$=null,_t.set(-1,0,0,0)}}}function n(){let w=!1,j=!1,$=null,_t=null,st=null;return{setReversed:function(ft){if(j!==ft){let rt=t.get("EXT_clip_control");ft?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),j=ft;let Qt=st;st=null,this.setClear(Qt)}},getReversed:function(){return j},setTest:function(ft){ft?bt(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(ft){$!==ft&&!w&&(i.depthMask(ft),$=ft)},setFunc:function(ft){if(j&&(ft=yu[ft]),_t!==ft){switch(ft){case Da:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Fa:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Oa:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=ft}},setLocked:function(ft){w=ft},setClear:function(ft){st!==ft&&(st=ft,j&&(ft=1-ft),i.clearDepth(ft))},reset:function(){w=!1,$=null,_t=null,st=null,j=!1}}}function s(){let w=!1,j=null,$=null,_t=null,st=null,ft=null,rt=null,Qt=null,ht=null;return{setTest:function(Vt){w||(Vt?bt(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(Vt){j!==Vt&&!w&&(i.stencilMask(Vt),j=Vt)},setFunc:function(Vt,jt,Ut){($!==Vt||_t!==jt||st!==Ut)&&(i.stencilFunc(Vt,jt,Ut),$=Vt,_t=jt,st=Ut)},setOp:function(Vt,jt,Ut){(ft!==Vt||rt!==jt||Qt!==Ut)&&(i.stencilOp(Vt,jt,Ut),ft=Vt,rt=jt,Qt=Ut)},setLocked:function(Vt){w=Vt},setClear:function(Vt){ht!==Vt&&(i.clearStencil(Vt),ht=Vt)},reset:function(){w=!1,j=null,$=null,_t=null,st=null,ft=null,rt=null,Qt=null,ht=null}}}let r=new e,a=new n,o=new s,c={},l=new WeakMap,h={},f={},d={},u=new WeakMap,g=[],v=null,p=!1,m=null,M=null,b=null,U=null,E=null,T=null,_=null,S=new Yt(0,0,0),N=0,C=!1,D=null,B=null,q=null,R=null,k=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,at=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=at>=1):X.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=at>=2);let nt=null,it={},Lt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),Z=new Ce().fromArray(Lt),dt=new Ce().fromArray(Ot);function Et(w,j,$,_t){let st=new Uint8Array(4),ft=i.createTexture();i.bindTexture(w,ft),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<$;rt++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(j+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return ft}let Gt={};Gt[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),Gt[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Gt[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Gt[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),bt(i.DEPTH_TEST),a.setFunc(ds),mt(!1),St(ic),bt(i.CULL_FACE),pt(ki);function bt(w){h[w]!==!0&&(i.enable(w),h[w]=!0)}function zt(w){h[w]!==!1&&(i.disable(w),h[w]=!1)}function pe(w,j){return d[w]!==j?(i.bindFramebuffer(w,j),d[w]=j,w===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=j),w===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=j),!0):!1}function Ht(w,j){let $=g,_t=!1;if(w){$=u.get(j),$===void 0&&($=[],u.set(j,$));let st=w.textures;if($.length!==st.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,rt=st.length;ft<rt;ft++)$[ft]=i.COLOR_ATTACHMENT0+ft;$.length=st.length,_t=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,_t=!0);_t&&i.drawBuffers($)}function Kt(w){return v!==w?(i.useProgram(w),v=w,!0):!1}let te={[Gi]:i.FUNC_ADD,[Hh]:i.FUNC_SUBTRACT,[Wh]:i.FUNC_REVERSE_SUBTRACT};te[Xh]=i.MIN,te[qh]=i.MAX;let tt={[Yh]:i.ZERO,[$h]:i.ONE,[Zh]:i.SRC_COLOR,[ac]:i.SRC_ALPHA,[eu]:i.SRC_ALPHA_SATURATE,[jh]:i.DST_COLOR,[Kh]:i.DST_ALPHA,[Jh]:i.ONE_MINUS_SRC_COLOR,[oc]:i.ONE_MINUS_SRC_ALPHA,[tu]:i.ONE_MINUS_DST_COLOR,[Qh]:i.ONE_MINUS_DST_ALPHA,[nu]:i.CONSTANT_COLOR,[iu]:i.ONE_MINUS_CONSTANT_COLOR,[su]:i.CONSTANT_ALPHA,[ru]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(w,j,$,_t,st,ft,rt,Qt,ht,Vt){if(w===ki){p===!0&&(zt(i.BLEND),p=!1);return}if(p===!1&&(bt(i.BLEND),p=!0),w!==Vh){if(w!==m||Vt!==C){if((M!==Gi||E!==Gi)&&(i.blendEquation(i.FUNC_ADD),M=Gi,E=Gi),Vt)switch(w){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kr:i.blendFunc(i.ONE,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qt("WebGLState: Invalid blending: ",w);break}else switch(w){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sc:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rc:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",w);break}b=null,U=null,T=null,_=null,S.set(0,0,0),N=0,m=w,C=Vt}return}st=st||j,ft=ft||$,rt=rt||_t,(j!==M||st!==E)&&(i.blendEquationSeparate(te[j],te[st]),M=j,E=st),($!==b||_t!==U||ft!==T||rt!==_)&&(i.blendFuncSeparate(tt[$],tt[_t],tt[ft],tt[rt]),b=$,U=_t,T=ft,_=rt),(Qt.equals(S)===!1||ht!==N)&&(i.blendColor(Qt.r,Qt.g,Qt.b,ht),S.copy(Qt),N=ht),m=w,C=!1}function lt(w,j){w.side===ln?zt(i.CULL_FACE):bt(i.CULL_FACE);let $=w.side===je;j&&($=!$),mt($),w.blending===Ts&&w.transparent===!1?pt(ki):pt(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),r.setMask(w.colorWrite);let _t=w.stencilWrite;o.setTest(_t),_t&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Bt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?bt(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(w){D!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),D=w)}function St(w){w!==zh?(bt(i.CULL_FACE),w!==B&&(w===ic?i.cullFace(i.BACK):w===kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),B=w}function $t(w){w!==q&&(V&&i.lineWidth(w),q=w)}function Bt(w,j,$){w?(bt(i.POLYGON_OFFSET_FILL),(R!==j||k!==$)&&(R=j,k=$,a.getReversed()&&(j=-j,$=-$),i.polygonOffset(j,$))):zt(i.POLYGON_OFFSET_FILL)}function re(w){w?bt(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function ae(w){w===void 0&&(w=i.TEXTURE0+Y-1),nt!==w&&(i.activeTexture(w),nt=w)}function me(w,j,$){$===void 0&&(nt===null?$=i.TEXTURE0+Y-1:$=nt);let _t=it[$];_t===void 0&&(_t={type:void 0,texture:void 0},it[$]=_t),(_t.type!==w||_t.texture!==j)&&(nt!==$&&(i.activeTexture($),nt=$),i.bindTexture(w,j||Gt[w]),_t.type=w,_t.texture=j)}function P(){let w=it[nt];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function Le(){try{i.compressedTexImage2D(...arguments)}catch(w){qt("WebGLState:",w)}}function ee(){try{i.compressedTexImage3D(...arguments)}catch(w){qt("WebGLState:",w)}}function be(){try{i.texSubImage2D(...arguments)}catch(w){qt("WebGLState:",w)}}function vt(){try{i.texSubImage3D(...arguments)}catch(w){qt("WebGLState:",w)}}function we(){try{i.compressedTexSubImage2D(...arguments)}catch(w){qt("WebGLState:",w)}}function kt(){try{i.compressedTexSubImage3D(...arguments)}catch(w){qt("WebGLState:",w)}}function Wt(){try{i.texStorage2D(...arguments)}catch(w){qt("WebGLState:",w)}}function A(){try{i.texStorage3D(...arguments)}catch(w){qt("WebGLState:",w)}}function x(){try{i.texImage2D(...arguments)}catch(w){qt("WebGLState:",w)}}function F(){try{i.texImage3D(...arguments)}catch(w){qt("WebGLState:",w)}}function ot(w){return f[w]!==void 0?f[w]:i.getParameter(w)}function et(w,j){f[w]!==j&&(i.pixelStorei(w,j),f[w]=j)}function gt(w){Z.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),Z.copy(w))}function yt(w){dt.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),dt.copy(w))}function J(w,j){let $=l.get(j);$===void 0&&($=new WeakMap,l.set(j,$));let _t=$.get(w);_t===void 0&&(_t=i.getUniformBlockIndex(j,w.name),i.uniformBlockBinding(j,_t,_t),$.set(w,_t))}function K(w,j,$){let st=l.get(j).get(w);c[st]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,st,$),c[st]=$)}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},nt=null,it={},d={},c={},u=new WeakMap,g=[],v=null,p=!1,m=null,M=null,b=null,U=null,E=null,T=null,_=null,S=new Yt(0,0,0),N=0,C=!1,D=null,B=null,q=null,R=null,k=null,Z.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:bt,disable:zt,bindFramebuffer:pe,drawBuffers:Ht,useProgram:Kt,setBlending:pt,setMaterial:lt,setFlipSided:mt,setCullFace:St,setLineWidth:$t,setPolygonOffset:Bt,setScissorTest:re,activeTexture:ae,bindTexture:me,unbindTexture:P,compressedTexImage2D:Le,compressedTexImage3D:ee,texImage2D:x,texImage3D:F,pixelStorei:et,getParameter:ot,updateUBOMapping:J,uniformBlockBinding:K,texStorage2D:Wt,texStorage3D:A,texSubImage2D:be,texSubImage3D:vt,compressedTexSubImage2D:we,compressedTexSubImage3D:kt,scissor:gt,viewport:yt,reset:xt}}function y_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,h=new WeakMap,f=new Set,d,u=new WeakMap,g=new Set,v=new FinalizationRegistry(A=>g.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,x){return p?new OffscreenCanvas(A,x):rr("canvas")}function M(A,x,F){let ot=1,et=Wt(A);if((et.width>F||et.height>F)&&(ot=F/Math.max(et.width,et.height)),ot<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let gt=Math.floor(ot*et.width),yt=Math.floor(ot*et.height);d===void 0&&(d=m(gt,yt));let J=x?m(gt,yt):d;return J.width=gt,J.height=yt,J.getContext("2d").drawImage(A,0,0,gt,yt),Xt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+gt+"x"+yt+")."),J}else return"data"in A&&Xt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function b(A){return A.generateMipmaps}function U(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,x,F,ot,et,gt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let yt;ot&&(yt=t.get("EXT_texture_norm16"),yt||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(F===i.FLOAT&&(J=i.R32F),F===i.HALF_FLOAT&&(J=i.R16F),F===i.UNSIGNED_BYTE&&(J=i.R8),F===i.UNSIGNED_SHORT&&yt&&(J=yt.R16_EXT),F===i.SHORT&&yt&&(J=yt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.R8UI),F===i.UNSIGNED_SHORT&&(J=i.R16UI),F===i.UNSIGNED_INT&&(J=i.R32UI),F===i.BYTE&&(J=i.R8I),F===i.SHORT&&(J=i.R16I),F===i.INT&&(J=i.R32I)),x===i.RG&&(F===i.FLOAT&&(J=i.RG32F),F===i.HALF_FLOAT&&(J=i.RG16F),F===i.UNSIGNED_BYTE&&(J=i.RG8),F===i.UNSIGNED_SHORT&&yt&&(J=yt.RG16_EXT),F===i.SHORT&&yt&&(J=yt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RG8UI),F===i.UNSIGNED_SHORT&&(J=i.RG16UI),F===i.UNSIGNED_INT&&(J=i.RG32UI),F===i.BYTE&&(J=i.RG8I),F===i.SHORT&&(J=i.RG16I),F===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGB8UI),F===i.UNSIGNED_SHORT&&(J=i.RGB16UI),F===i.UNSIGNED_INT&&(J=i.RGB32UI),F===i.BYTE&&(J=i.RGB8I),F===i.SHORT&&(J=i.RGB16I),F===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),F===i.UNSIGNED_INT&&(J=i.RGBA32UI),F===i.BYTE&&(J=i.RGBA8I),F===i.SHORT&&(J=i.RGBA16I),F===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_SHORT&&yt&&(J=yt.RGB16_EXT),F===i.SHORT&&yt&&(J=yt.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){let K=gt?sr:de.getTransfer(et);F===i.FLOAT&&(J=i.RGBA32F),F===i.HALF_FLOAT&&(J=i.RGBA16F),F===i.UNSIGNED_BYTE&&(J=K===Se?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&yt&&(J=yt.RGBA16_EXT),F===i.SHORT&&yt&&(J=yt.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(A,x){let F;return A?x===null||x===Ln||x===Hi?F=i.DEPTH24_STENCIL8:x===An?F=i.DEPTH32F_STENCIL8:x===Es&&(F=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ln||x===Hi?F=i.DEPTH_COMPONENT24:x===An?F=i.DEPTH_COMPONENT32F:x===Es&&(F=i.DEPTH_COMPONENT16),F}function S(A,x){return b(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ze&&A.minFilter!==on?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function N(A){let x=new WeakRef(A);n.get(A).__ref=x,g.add(x),v.register(A,x,x)}function C(A){let x=n.get(A).__ref;x!==void 0&&(g.delete(x),v.unregister(x))}function D(A){q(A.target)}function B(A){R(A.target)}function q(A){A.removeEventListener("dispose",D),C(A),Y(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}function R(A){A.removeEventListener("dispose",B),C(A),at(A)}function k(){for(let A of g){let x=A.deref();x!==void 0&&(x.isRenderTarget===!0?R(x):q(x))}g.clear(),f.clear()}function Y(A){let x=n.get(A);if(x.__webglInit===void 0)return;let F=A.source,ot=u.get(F);if(ot){let et=ot[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&V(A),Object.keys(ot).length===0&&u.delete(F)}n.remove(A)}function V(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let F=A.source,ot=u.get(F);delete ot[x.__cacheKey],a.memory.textures--}function at(A){let x=n.get(A);x.__depthDisposeCallback&&x.__depthDisposeCallback();let F=A.depthTexture;if(F&&F.renderTarget===A&&q(F),A.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(x.__webglFramebuffer[et]))for(let gt=0;gt<x.__webglFramebuffer[et].length;gt++)i.deleteFramebuffer(x.__webglFramebuffer[et][gt]);else i.deleteFramebuffer(x.__webglFramebuffer[et]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[et])}else{if(Array.isArray(x.__webglFramebuffer))for(let et=0;et<x.__webglFramebuffer.length;et++)i.deleteFramebuffer(x.__webglFramebuffer[et]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let et=0;et<x.__webglColorRenderbuffer.length;et++)x.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[et]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ot=A.textures;for(let et=0,gt=ot.length;et<gt;et++){let yt=n.get(ot[et]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(ot[et])}n.remove(A)}let X=0;function nt(){X=0}function it(){return X}function Lt(A){X=A}function Ot(){let A=X;return A>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,A}function Z(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.mipmapsAutoUpdate),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function dt(A,x){let F=n.get(A);if(A.isVideoTexture&&we(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){let ot=A.image;if(ot===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(F,A,x);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function Et(A,x){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){lt(F,A,x);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function Gt(A,x){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){lt(F,A,x);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function bt(A,x){let F=n.get(A);if(A.version>0&&F.__version!==A.version){mt(F,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}let zt={[gi]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},pe={[Ze]:i.NEAREST,[lu]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[So]:i.LINEAR_MIPMAP_NEAREST,[ai]:i.LINEAR_MIPMAP_LINEAR},Ht={[du]:i.NEVER,[Sc]:i.ALWAYS,[fu]:i.LESS,[Uc]:i.LEQUAL,[pu]:i.EQUAL,[Mc]:i.GEQUAL,[mu]:i.GREATER,[gu]:i.NOTEQUAL};function Kt(A,x){if(x.type===An&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===on||x.magFilter===So||x.magFilter===Vr||x.magFilter===ai||x.minFilter===on||x.minFilter===So||x.minFilter===Vr||x.minFilter===ai)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,zt[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,zt[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,zt[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,pe[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,pe[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ht[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ze||x.minFilter!==Vr&&x.minFilter!==ai||x.type===An&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function te(A,x){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",D),N(x));let ot=x.source,et=u.get(ot);et===void 0&&(et={},u.set(ot,et));let gt=Z(x);if(gt!==A.__cacheKey){et[gt]===void 0&&(et[gt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),et[gt].usedTimes++;let yt=et[A.__cacheKey];yt!==void 0&&(et[A.__cacheKey].usedTimes--,yt.usedTimes===0&&V(x)),A.__cacheKey=gt,A.__webglTexture=et[gt].texture}return F}function tt(A,x,F){return Math.floor(Math.floor(A/F)/x)}function pt(A,x,F,ot){let gt=A.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,ot,x.data);else{gt.sort((w,j)=>w.start-j.start);let yt=0;for(let w=1;w<gt.length;w++){let j=gt[yt],$=gt[w],_t=j.start+j.count,st=tt($.start,x.width,4),ft=tt(j.start,x.width,4);$.start<=_t+1&&st===ft&&tt($.start+$.count-1,x.width,4)===st?j.count=Math.max(j.count,$.start+$.count-j.start):(++yt,gt[yt]=$)}gt.length=yt+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let w=0,j=gt.length;w<j;w++){let $=gt[w],_t=Math.floor($.start/4),st=Math.ceil($.count/4),ft=_t%x.width,rt=Math.floor(_t/x.width),Qt=st,ht=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,rt),e.texSubImage2D(i.TEXTURE_2D,0,ft,rt,Qt,ht,F,ot,x.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function lt(A,x,F){let ot=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ot=i.TEXTURE_3D);let et=te(A,x),gt=x.source;e.bindTexture(ot,A.__webglTexture,i.TEXTURE0+F);let yt=n.get(gt);if(gt.version!==yt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ht=de.getPrimaries(de.workingColorSpace),Vt=x.colorSpace===li?null:de.getPrimaries(x.colorSpace),jt=x.colorSpace===li||ht===Vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let K=M(x.image,!1,s.maxTextureSize);K=kt(x,K);let xt=r.convert(x.format,x.colorSpace),w=r.convert(x.type),j=T(x.internalFormat,xt,w,x.normalized,x.colorSpace,x.isVideoTexture);Kt(ot,x);let $,_t=x.mipmaps,st=x.isVideoTexture!==!0,ft=yt.__version===void 0||et===!0,rt=gt.dataReady,Qt=S(x,K);if(x.isDepthTexture)j=_(x.format===oi,x.type),ft&&(st?e.texStorage2D(i.TEXTURE_2D,1,j,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,j,K.width,K.height,0,xt,w,null));else if(x.isDataTexture)if(_t.length>0){st&&ft&&e.texStorage2D(i.TEXTURE_2D,Qt,j,_t[0].width,_t[0].height);for(let ht=0,Vt=_t.length;ht<Vt;ht++)$=_t[ht],st?rt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,$.width,$.height,xt,w,$.data):e.texImage2D(i.TEXTURE_2D,ht,j,$.width,$.height,0,xt,w,$.data);x.generateMipmaps=!1}else st?(ft&&e.texStorage2D(i.TEXTURE_2D,Qt,j,K.width,K.height),rt&&pt(x,K,xt,w)):e.texImage2D(i.TEXTURE_2D,0,j,K.width,K.height,0,xt,w,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){st&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,j,_t[0].width,_t[0].height,K.depth);for(let ht=0,Vt=_t.length;ht<Vt;ht++)if($=_t[ht],x.format!==Nn)if(xt!==null)if(st){if(rt)if(x.layerUpdates.size>0){let jt=Rc($.width,$.height,x.format,x.type);for(let Ut of x.layerUpdates){let oe=$.data.subarray(Ut*jt/$.data.BYTES_PER_ELEMENT,(Ut+1)*jt/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,Ut,$.width,$.height,1,xt,oe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,$.width,$.height,K.depth,xt,$.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,j,$.width,$.height,K.depth,0,$.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,$.width,$.height,K.depth,xt,w,$.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,j,$.width,$.height,K.depth,0,xt,w,$.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{st&&ft&&e.texStorage2D(i.TEXTURE_2D,Qt,j,_t[0].width,_t[0].height);for(let ht=0,Vt=_t.length;ht<Vt;ht++)$=_t[ht],x.format!==Nn?xt!==null?st?rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,$.width,$.height,xt,$.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,j,$.width,$.height,0,$.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?rt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,$.width,$.height,xt,w,$.data):e.texImage2D(i.TEXTURE_2D,ht,j,$.width,$.height,0,xt,w,$.data)}else if(x.isDataArrayTexture)if(st){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,j,K.width,K.height,K.depth),rt)if(x.layerUpdates.size>0){let ht=Rc(K.width,K.height,x.format,x.type);for(let Vt of x.layerUpdates){let jt=K.data.subarray(Vt*ht/K.data.BYTES_PER_ELEMENT,(Vt+1)*ht/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Vt,K.width,K.height,1,xt,w,jt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,xt,w,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,j,K.width,K.height,K.depth,0,xt,w,K.data);else if(x.isData3DTexture)st?(ft&&e.texStorage3D(i.TEXTURE_3D,Qt,j,K.width,K.height,K.depth),rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,xt,w,K.data)):e.texImage3D(i.TEXTURE_3D,0,j,K.width,K.height,K.depth,0,xt,w,K.data);else if(x.isFramebufferTexture){if(ft)if(st)e.texStorage2D(i.TEXTURE_2D,Qt,j,K.width,K.height);else{let ht=K.width,Vt=K.height;for(let jt=0;jt<Qt;jt++)e.texImage2D(i.TEXTURE_2D,jt,j,ht,Vt,0,xt,w,null),ht>>=1,Vt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ht=i.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),K.parentNode!==ht){ht.appendChild(K),f.add(x),ht.onpaint=Vt=>{let jt=Vt.changedElements;for(let Ut of f)jt.includes(Ut.image)&&(Ut.needsUpdate=!0)},ht.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let jt=i.RGBA,Ut=i.RGBA,oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,jt,Ut,oe,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(_t.length>0){if(st&&ft){let ht=Wt(_t[0]);e.texStorage2D(i.TEXTURE_2D,Qt,j,ht.width,ht.height)}for(let ht=0,Vt=_t.length;ht<Vt;ht++)$=_t[ht],st?rt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,xt,w,$):e.texImage2D(i.TEXTURE_2D,ht,j,xt,w,$);x.generateMipmaps=!1}else if(st){if(ft){let ht=Wt(K);e.texStorage2D(i.TEXTURE_2D,Qt,j,ht.width,ht.height)}rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,w,K)}else e.texImage2D(i.TEXTURE_2D,0,j,xt,w,K);b(x)&&x.mipmapsAutoUpdate===!0&&U(ot),yt.__version=gt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function mt(A,x,F){if(x.image.length!==6)return;let ot=te(A,x),et=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);let gt=n.get(et);if(et.version!==gt.__version||ot===!0){e.activeTexture(i.TEXTURE0+F);let yt=de.getPrimaries(de.workingColorSpace),J=x.colorSpace===li?null:de.getPrimaries(x.colorSpace),K=x.colorSpace===li||yt===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let xt=x.isCompressedTexture||x.image[0].isCompressedTexture,w=x.image[0]&&x.image[0].isDataTexture,j=[];for(let Ut=0;Ut<6;Ut++)!xt&&!w?j[Ut]=M(x.image[Ut],!0,s.maxCubemapSize):j[Ut]=w?x.image[Ut].image:x.image[Ut],j[Ut]=kt(x,j[Ut]);let $=j[0],_t=r.convert(x.format,x.colorSpace),st=r.convert(x.type),ft=T(x.internalFormat,_t,st,x.normalized,x.colorSpace),rt=x.isVideoTexture!==!0,Qt=gt.__version===void 0||ot===!0,ht=et.dataReady,Vt=S(x,$);Kt(i.TEXTURE_CUBE_MAP,x);let jt;if(x.isDepthTexture){if(ft=_(x.format===oi,x.type),Qt)if(rt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ft,$.width,$.height);else for(let Ut=0;Ut<6;Ut++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,ft,$.width,$.height,0,_t,st,null)}else if(xt){rt&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Vt,ft,$.width,$.height);for(let Ut=0;Ut<6;Ut++){jt=j[Ut].mipmaps;for(let oe=0;oe<jt.length;oe++){let Re=jt[oe];x.format!==Nn?_t!==null?rt?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,oe,0,0,Re.width,Re.height,_t,Re.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,oe,ft,Re.width,Re.height,0,Re.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,oe,0,0,Re.width,Re.height,_t,st,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,oe,ft,Re.width,Re.height,0,_t,st,Re.data)}}}else{if(jt=x.mipmaps,rt&&Qt){jt.length>0&&Vt++;let Ut=Wt(j[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Vt,ft,Ut.width,Ut.height)}for(let Ut=0;Ut<6;Ut++)if(w){rt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,0,0,j[Ut].width,j[Ut].height,_t,st,j[Ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,ft,j[Ut].width,j[Ut].height,0,_t,st,j[Ut].data);for(let oe=0;oe<jt.length;oe++){let De=jt[oe].image[Ut].image;rt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,oe+1,0,0,De.width,De.height,_t,st,De.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,oe+1,ft,De.width,De.height,0,_t,st,De.data)}}else{rt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,0,0,_t,st,j[Ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,ft,_t,st,j[Ut]);for(let oe=0;oe<jt.length;oe++){let Re=jt[oe];rt?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,oe+1,0,0,_t,st,Re.image[Ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,oe+1,ft,_t,st,Re.image[Ut])}}}b(x)&&x.mipmapsAutoUpdate===!0&&U(i.TEXTURE_CUBE_MAP),gt.__version=et.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function St(A,x,F,ot,et,gt){let yt=r.convert(F.format,F.colorSpace),J=r.convert(F.type),K=T(F.internalFormat,yt,J,F.normalized,F.colorSpace),xt=n.get(x),w=n.get(F);if(w.__renderTarget=x,!xt.__hasExternalTextures){let j=Math.max(1,x.width>>gt),$=Math.max(1,x.height>>gt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,gt,K,j,$,x.depth,0,yt,J,null):e.texImage2D(et,gt,K,j,$,0,yt,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),vt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,et,w.__webglTexture,0,be(x)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,et,w.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(A,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let ot=x.depthTexture,et=ot&&ot.isDepthTexture?ot.type:null,gt=_(x.stencilBuffer,et),yt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be(x),gt,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,be(x),gt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,gt,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,A)}else{let ot=x.textures;for(let et=0;et<ot.length;et++){let gt=ot[et],yt=r.convert(gt.format,gt.colorSpace),J=r.convert(gt.type),K=T(gt.internalFormat,yt,J,gt.normalized,gt.colorSpace);vt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be(x),K,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,be(x),K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(A,x,F){let ot=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(x.depthTexture);et.__renderTarget=x;let gt=ot?x.depthTexture.image[0]:x.depthTexture.image;(!et.__webglTexture||gt.width!==x.width||gt.height!==x.height)&&(gt.width=x.width,gt.height=x.height,x.depthTexture.needsUpdate=!0),ot?bt(x.depthTexture,0):dt(x.depthTexture,0);let yt=et.__webglTexture,J=be(x),K=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,xt=x.depthTexture.format===oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===ei)vt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,K,yt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,xt,K,yt,0);else if(x.depthTexture.format===oi)vt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,K,yt,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,xt,K,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(A){let x=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let ot=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ot){let et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ot.removeEventListener("dispose",et)};ot.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=ot}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let ot=0;ot<6;ot++)Bt(x.__webglFramebuffer[ot],A,ot);else A.texture.mipmaps.length>0?Bt(x.__webglFramebuffer[0],A,0):Bt(x.__webglFramebuffer,A,0);else if(F){x.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ot]),x.__webglDepthbuffer[ot]===void 0)x.__webglDepthbuffer[ot]=i.createRenderbuffer(),$t(x.__webglDepthbuffer[ot],A,!1);else{let et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=x.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,gt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),$t(x.__webglDepthbuffer,A,!1);else{let et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,gt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(A,x,F){let ot=n.get(A);x!==void 0&&St(ot.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&re(A)}function me(A){let x=A.texture,F=n.get(A),ot=n.get(x);A.addEventListener("dispose",B),N(A);let et=A.textures,gt=A.isWebGLCubeRenderTarget===!0,yt=et.length>1;if(yt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=x.version,a.memory.textures++),gt){F.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps.length>0){F.__webglFramebuffer[J]=[];for(let K=0;K<x.mipmaps.length;K++)F.__webglFramebuffer[J][K]=i.createFramebuffer()}else F.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps.length>0){F.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)F.__webglFramebuffer[J]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(yt)for(let J=0,K=et.length;J<K;J++){let xt=n.get(et[J]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&vt(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let J=0;J<et.length;J++){let K=et[J];F.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[J]);let xt=r.convert(K.format,K.colorSpace),w=r.convert(K.type),j=T(K.internalFormat,xt,w,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),$=be(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,j,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,F.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),$t(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)St(F.__webglFramebuffer[J][K],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,K);else St(F.__webglFramebuffer[J],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);b(x)?U(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(yt){for(let J=0,K=et.length;J<K;J++){let xt=et[J],w=n.get(xt),j=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,w.__webglTexture),Kt(j,xt),St(F.__webglFramebuffer,A,xt,i.COLOR_ATTACHMENT0+J,j,0),b(xt)&&U(j)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,ot.__webglTexture),Kt(J,x),x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)St(F.__webglFramebuffer[K],A,x,i.COLOR_ATTACHMENT0,J,K);else St(F.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,J,0);b(x)?U(J):x.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&re(A)}function P(A){let x=A.textures;for(let F=0,ot=x.length;F<ot;F++){let et=x[F];if(b(et)&&et.mipmapsAutoUpdate===!0){let gt=E(A),yt=n.get(et).__webglTexture;e.bindTexture(gt,yt),U(gt),e.unbindTexture()}}}let Le=[];function ee(A){if(A.samples>0){if(vt(A)===!1){let x=A.textures,F=A.width,ot=A.height,et=i.COLOR_BUFFER_BIT,gt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(A),J=x.length>1;if(J)for(let xt=0;xt<x.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let xt=0;xt<x.length;xt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[xt]);let w=n.get(x[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,w,0)}i.blitFramebuffer(0,0,F,ot,0,0,F,ot,et,i.NEAREST),c===!0&&(Le.length=0,Le.push(i.COLOR_ATTACHMENT0+xt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Le.push(gt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let xt=0;xt<x.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[xt]);let w=n.get(x[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,w,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function be(A){return Math.min(s.maxSamples,A.samples)}function vt(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function we(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function kt(A,x){let F=A.colorSpace,ot=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==ir&&F!==li&&(de.getTransfer(F)===Se?(ot!==Nn||et!==un)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",F)),x}function Wt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Ot,this.resetTextureUnits=nt,this.getTextureUnits=it,this.setTextureUnits=Lt,this.setTexture2D=dt,this.setTexture2DArray=Et,this.setTexture3D=Gt,this.setTextureCube=bt,this.rebindTextures=ae,this.setupRenderTarget=me,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=St,this.useMultisampledRTT=vt,this.dispose=k}function U_(i,t){function e(n,s=li){let r,a=de.getTransfer(s);if(n===un)return i.UNSIGNED_BYTE;if(n===To)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mc)return i.BYTE;if(n===gc)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===bo)return i.INT;if(n===Ln)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Dn)return i.HALF_FLOAT;if(n===vc)return i.ALPHA;if(n===yc)return i.RGB;if(n===Nn)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===oi)return i.DEPTH_STENCIL;if(n===Eo)return i.RED;if(n===wo)return i.RED_INTEGER;if(n===bi)return i.RG;if(n===Co)return i.RG_INTEGER;if(n===Ro)return i.RGBA_INTEGER;if(n===Hr||n===Wr||n===Xr||n===qr)if(a===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Io||n===Po||n===Lo||n===Do)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Fo||n===Oo||n===Bo||n===zo||n===Yr||n===ko)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===Fo)return a===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bo)return r.COMPRESSED_R11_EAC;if(n===zo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Yr)return r.COMPRESSED_RG11_EAC;if(n===ko)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Go||n===Vo||n===Ho||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Zo||n===Jo||n===Ko||n===Qo||n===jo||n===tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Go)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ho)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$o)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ko)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===el||n===nl||n===il)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===el)return a===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sl||n===rl||n===$r||n===al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var M_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ur(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Hn({vertexShader:M_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xc=class extends zn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,g=null,v=typeof XRWebGLBinding<"u",p=new Wc,m={},M=e.getContextAttributes(),b=null,U=null,E=[],T=[],_=new ct,S=null,N=null,C=new nn;C.viewport=new Ce;let D=new nn;D.viewport=new Ce;let B=[C,D],q=new xo,R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let dt=E[Z];return dt===void 0&&(dt=new _s,E[Z]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Z){let dt=E[Z];return dt===void 0&&(dt=new _s,E[Z]=dt),dt.getGripSpace()},this.getHand=function(Z){let dt=E[Z];return dt===void 0&&(dt=new _s,E[Z]=dt),dt.getHandSpace()};function Y(Z){let dt=T.indexOf(Z.inputSource);if(dt===-1)return;let Et=E[dt];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,l||a),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",at);for(let Z=0;Z<E.length;Z++){let dt=T[Z];dt!==null&&(T[Z]=null,E[Z].disconnect(dt))}R=null,k=null,p.reset();for(let Z in m)delete m[Z];if(t.setRenderTarget(b),u=null,d=null,f=null,s=null,U=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),N!==null){let Z=N.camera;Z.fov=N.fov,Z.zoom=N.zoom,Z.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",V),s.addEventListener("inputsourceschange",at),M.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Gt=null,bt=null;M.depth&&(bt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=M.stencil?oi:ei,Gt=M.stencil?Hi:Ln);let zt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),U=new _n(d.textureWidth,d.textureHeight,{format:Nn,type:un,depthTexture:new ii(d.textureWidth,d.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Et={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),U=new _n(u.framebufferWidth,u.framebufferHeight,{format:Nn,type:un,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function at(Z){for(let dt=0;dt<Z.removed.length;dt++){let Et=Z.removed[dt],Gt=T.indexOf(Et);Gt>=0&&(T[Gt]=null,E[Gt].disconnect(Et))}for(let dt=0;dt<Z.added.length;dt++){let Et=Z.added[dt],Gt=T.indexOf(Et);if(Gt===-1){for(let zt=0;zt<E.length;zt++)if(zt>=T.length){T.push(Et),Gt=zt;break}else if(T[zt]===null){T[zt]=Et,Gt=zt;break}if(Gt===-1)break}let bt=E[Gt];bt&&bt.connect(Et)}}function X(Z,dt){dt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(dt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let dt=Z.near,Et=Z.far;p.texture!==null&&(p.depthNear>0&&(dt=p.depthNear),p.depthFar>0&&(Et=p.depthFar)),q.near=D.near=C.near=dt,q.far=D.far=C.far=Et,(R!==q.near||k!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),R=q.near,k=q.far),q.layers.mask=Z.layers.mask|6,C.layers.mask=q.layers.mask&-5,D.layers.mask=q.layers.mask&-3;let Gt=Z.parent,bt=q.cameras;X(q,Gt);for(let zt=0;zt<bt.length;zt++)X(bt[zt],Gt);q.projectionMatrix.copy(C.projectionMatrix),q.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&Z.isPerspectiveCamera&&(N={camera:Z,fov:Z.fov,zoom:Z.zoom}),nt(Z,q,Gt)};function nt(Z,dt,Et){Et===null?Z.matrix.copy(dt.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(dt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(dt.projectionMatrix),Z.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=or*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(Z){return m[Z]};let it=null;function Lt(Z,dt){if(h=dt.getViewerPose(l||a),g=dt,h!==null){let Et=h.views;u!==null&&(t.setRenderTargetFramebuffer(U,u.framebuffer),t.setRenderTarget(U));let Gt=!1;Et.length!==q.cameras.length&&(q.cameras.length=0,Gt=!0);for(let Ht=0;Ht<Et.length;Ht++){let Kt=Et[Ht],te=null;if(u!==null)te=u.getViewport(Kt);else{let pt=f.getViewSubImage(d,Kt);te=pt.viewport,Ht===0&&(t.setRenderTargetTextures(U,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(U))}let tt=B[Ht];tt===void 0&&(tt=new nn,tt.layers.enable(Ht),tt.viewport=new Ce,B[Ht]=tt),tt.matrix.fromArray(Kt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Kt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(te.x,te.y,te.width,te.height),Ht===0&&(q.matrix.copy(tt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Gt===!0&&q.cameras.push(tt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let Ht=f.getDepthInformation(Et[0]);Ht&&Ht.isValid&&Ht.texture&&p.init(Ht,s.renderState)}if(bt&&bt.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let Ht=0;Ht<Et.length;Ht++){let Kt=Et[Ht].camera;if(Kt){let te=m[Kt];te||(te=new Ur,m[Kt]=te);let tt=f.getCameraImage(Kt);te.sourceTexture=tt}}}}for(let Et=0;Et<E.length;Et++){let Gt=T[Et],bt=E[Et];Gt!==null&&bt!==void 0&&bt.update(Gt,dt,l||a)}it&&it(Z,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),g=null}let Ot=new td;Ot.setAnimationLoop(Lt),this.setAnimationLoop=function(Z){it=Z},this.dispose=function(){}}},b_=new ye,hd=new Jt;hd.set(-1,0,0,0,1,0,0,0,1);function T_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Ec(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,b,U){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,U)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,M,b):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===je&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===je&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),b=M.envMap,U=M.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(b_.makeRotationFromEuler(U)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(hd),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=b*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===je&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A_(i,t,e,n){let s={},r={};function a(M,b){let U=b.program;n.uniformBlockBinding(M,U,s[M.id])}function o(M,b){let U=s[M.id];U===void 0&&(g(M),U=c(M),s[M.id]=U,M.addEventListener("dispose",p));let E=b.program;n.updateUBOMapping(M,E);let T=t.render.frame;r[M.id]!==T&&(l(M),r[M.id]=T)}function c(M){let b=i.createBuffer(),U=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,U,E),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function l(M){let b=s[M.id],U=M.uniforms,E=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,_=U.length;T<_;T++){let S=U[T];if(Array.isArray(S))for(let N=0,C=S.length;N<C;N++)h(S[N],T,N,E);else h(S,T,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,b,U,E){if(d(M,b,U,E)===!0){let T=M.__offset,_=M.value;if(Array.isArray(_)){let S=0;for(let N=0;N<_.length;N++){let C=_[N],D=v(C,!0);f(C,M.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function f(M,b,U){typeof M=="number"||typeof M=="boolean"?b[U]=M:M.isMatrix3?(b[U]=M.elements[0],b[U+1]=M.elements[1],b[U+2]=M.elements[2],b[U+3]=0,b[U+4]=M.elements[3],b[U+5]=M.elements[4],b[U+6]=M.elements[5],b[U+7]=0,b[U+8]=M.elements[6],b[U+9]=M.elements[7],b[U+10]=M.elements[8],b[U+11]=0):ArrayBuffer.isView(M)?b.set(M.subarray(0,b.length-U),U):M.toArray(b,U)}function d(M,b,U,E){let T=M.value,_=b+"_"+U;if(Array.isArray(T)){E[_]===void 0&&(E[_]=[]);let S=E[_],N=!1;for(let C=0;C<T.length;C++)u(T[C],S,C)===!0&&(N=!0);return N}return u(T,E,_)}function u(M,b,U){if(b[U]===void 0)return typeof M=="number"||typeof M=="boolean"?b[U]=M:ArrayBuffer.isView(M)?b[U]=M.slice():b[U]=M.clone(),!0;{let E=b[U];if(typeof M=="number"||typeof M=="boolean"){if(E!==M)return b[U]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(E.equals(M)===!1)return E.copy(M),!0}}return!1}function g(M){let b=M.uniforms,U=0,E=16;for(let _=0,S=b.length;_<S;_++){let N=Array.isArray(b[_])?b[_]:[b[_]];for(let C=0,D=N.length;C<D;C++){let B=N[C],q=Array.isArray(B.value)?B.value:[B.value],R=Array.isArray(b[_])||Array.isArray(B.value),k=U;for(let V=0,at=q.length;V<at;V++){let X=q[V],nt=v(X,R),it=U%E,Lt=it%nt.boundary,Ot=it+Lt;U+=Lt,Ot!==0&&E-Ot<nt.storage&&(U+=E-Ot),V===0&&(k=U),U+=nt.storage}let Y=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Y((U-k)/Float32Array.BYTES_PER_ELEMENT),B.__offset=k}}let T=U%E;return T>0&&(U+=E-T),M.__size=U,M.__cache={},this}function v(M,b){let U={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(U.boundary=4,U.storage=4):M.isVector2?(U.boundary=8,U.storage=8):M.isVector3||M.isColor?(U.boundary=16,U.storage=12):M.isVector4?(U.boundary=16,U.storage=16):M.isMatrix3?(U.boundary=16,U.storage=48):M.isMatrix4?(U.boundary=16,U.storage=64):M.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(U.boundary=16,U.storage=M.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",M),b===!0&&(U.boundary=16,U.storage=Math.ceil(U.storage/16)*16),U}function p(M){let b=M.target;b.removeEventListener("dispose",p),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:m}}var E_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function w_(){return Xn===null&&(Xn=new fr(E_,16,16,bi,Dn),Xn.name="DFG_LUT",Xn.minFilter=on,Xn.magFilter=on,Xn.wrapS=Bn,Xn.wrapT=Bn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var hl=class{constructor(t={}){let{canvas:e=_u(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=un}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=u,p=new Set([Ro,Co,wo]),m=new Set([un,Ln,Es,Hi,To,Ao]),M=new Uint32Array(4),b=new Int32Array(4),U={textures:[],min:[],max:[],resolution:[]},E=null,T=null,_=[],S=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,B=null,q=null,R=null,k=null;this._outputColorSpace=$e;let Y=0,V=0,at=null,X=-1,nt=null,it=new Ce,Lt=new Ce,Ot=null,Z=new Yt(0),dt=0,Et=e.width,Gt=e.height,bt=1,zt=null,pe=null,Ht=new Ce(0,0,Et,Gt),Kt=new Ce(0,0,Et,Gt),te=!1,tt=new _i,pt=new Ya,lt=!1,mt=!1,St=new ye,$t=new L,Bt=new Ce,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function me(){return at===null?bt:1}let P=n;function Le(y,I){return e.getContext(y,I)}let ee,be,vt,we,kt,Wt,A,x,F,ot,et,gt,yt,J,K,xt,w,j,$,_t,st,ft,rt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Vt,!1),e.addEventListener("webglcontextrestored",jt,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),P===null){let I="webgl2";if(P=Le(I,y),P===null)throw Le(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(y){throw e.removeEventListener("webglcontextlost",Vt,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),qt("WebGLRenderer: "+y.message),y}function Qt(){ee=new zg(P),ee.init(),st=new U_(P,ee),be=new wg(P,ee,t,st),vt=new v_(P,ee),be.reversedDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),q=P.createFramebuffer(),R=P.createFramebuffer(),k=P.createFramebuffer(),we=new Vg(P),kt=new r_,Wt=new y_(P,ee,vt,kt,be,st,we),A=new Bg(C),x=new Wf(P),ft=new Ag(P,x),F=new kg(P,x,we,ft),ot=new Wg(P,F,x,ft,we),j=new Hg(P,be,Wt),K=new Cg(kt),et=new s_(C,A,ee,be,ft,K),gt=new T_(C,kt),yt=new o_,J=new f_(ee),w=new Tg(C,A,vt,ot,g,c),xt=new x_(C,ot,be),rt=new A_(P,we,be,vt),$=new Eg(P,ee,we),_t=new Gg(P,ee,we),we.programs=et.programs,C.capabilities=be,C.extensions=ee,C.properties=kt,C.renderLists=yt,C.shadowMap=xt,C.state=vt,C.info=we}v!==un&&(N=new qg(v,e.width,e.height,o,s,r));let ht=new Xc(C,P);this.xr=ht,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let y=ee.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ee.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(y){y!==void 0&&(bt=y,this.setSize(Et,Gt,!1))},this.getSize=function(y){return y.set(Et,Gt)},this.setSize=function(y,I,H=!0){if(ht.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=y,Gt=I,e.width=Math.floor(y*bt),e.height=Math.floor(I*bt),H===!0&&(e.style.width=y+"px",e.style.height=I+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(Et*bt,Gt*bt).floor()},this.setDrawingBufferSize=function(y,I,H){Et=y,Gt=I,bt=H,e.width=Math.floor(y*H),e.height=Math.floor(I*H),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(v===un){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(it)},this.getViewport=function(y){return y.copy(Ht)},this.setViewport=function(y,I,H,O){y.isVector4?Ht.set(y.x,y.y,y.z,y.w):Ht.set(y,I,H,O),vt.viewport(it.copy(Ht).multiplyScalar(me()).round())},this.getScissor=function(y){return y.copy(Kt)},this.setScissor=function(y,I,H,O){y.isVector4?Kt.set(y.x,y.y,y.z,y.w):Kt.set(y,I,H,O),vt.scissor(Lt.copy(Kt).multiplyScalar(me()).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(y){vt.setScissorTest(te=y)},this.setOpaqueSort=function(y){zt=y},this.setTransparentSort=function(y){pe=y},this.getClearColor=function(y){return y.copy(w.getClearColor())},this.setClearColor=function(){w.setClearColor(...arguments)},this.getClearAlpha=function(){return w.getClearAlpha()},this.setClearAlpha=function(){w.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,H=!0){let O=0;if(y){let z=!1;if(at!==null){let Mt=at.texture.format;z=p.has(Mt)}if(z){let Mt=at.texture.type,Pt=m.has(Mt),ut=w.getClearColor(),At=w.getClearAlpha(),Dt=ut.r,Zt=ut.g,ie=ut.b;Pt?(M[0]=Dt,M[1]=Zt,M[2]=ie,M[3]=At,P.clearBufferuiv(P.COLOR,0,M)):(b[0]=Dt,b[1]=Zt,b[2]=ie,b[3]=At,P.clearBufferiv(P.COLOR,0,b))}else O|=P.COLOR_BUFFER_BIT}I&&(O|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&P.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Vt,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),w.dispose(),yt.dispose(),J.dispose(),Wt.dispose(),kt.dispose(),A.dispose(),ot.dispose(),F.dispose(),ft.dispose(),rt.dispose(),et.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",dn),ht.removeEventListener("sessionend",Un),Yn.stop()};function Vt(y){y.preventDefault(),ar("WebGLRenderer: Context Lost."),D=!0}function jt(){ar("WebGLRenderer: Context Restored."),D=!1;let y=we.autoReset,I=xt.enabled,H=xt.autoUpdate,O=xt.needsUpdate,z=xt.type;Qt(),we.autoReset=y,xt.enabled=I,xt.autoUpdate=H,xt.needsUpdate=O,xt.type=z}function Ut(y){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function oe(y){let I=y.target;I.removeEventListener("dispose",oe),Re(I)}function Re(y){De(y),kt.remove(y)}function De(y){let I=kt.get(y).programs;I!==void 0&&(I.forEach(function(H){et.releaseProgram(H)}),y.isShaderMaterial&&et.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,H,O,z,Mt){I===null&&(I=re);let Pt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ut=qc(y,I,H,O,z);vt.setMaterial(O,Pt);let At=H.index,Dt=1;if(O.wireframe===!0){if(At=F.getWireframeAttribute(H),At===void 0)return;Dt=2}let Zt=H.drawRange,ie=H.attributes.position,Nt=Zt.start*Dt,le=(Zt.start+Zt.count)*Dt;Mt!==null&&(Nt=Math.max(Nt,Mt.start*Dt),le=Math.min(le,(Mt.start+Mt.count)*Dt)),At!==null?(Nt=Math.max(Nt,0),le=Math.min(le,At.count)):ie!=null&&(Nt=Math.max(Nt,0),le=Math.min(le,ie.count));let Te=le-Nt;if(Te<0||Te===1/0)return;ft.setup(z,O,ut,H,At);let Ue,Me=$;if(At!==null&&(Ue=x.get(At),Me=_t,Me.setIndex(Ue)),z.isMesh)O.wireframe===!0?(vt.setLineWidth(O.wireframeLinewidth*me()),Me.setMode(P.LINES)):Me.setMode(P.TRIANGLES);else if(z.isLine){let Be=O.linewidth;Be===void 0&&(Be=1),vt.setLineWidth(Be*me()),z.isLineSegments?Me.setMode(P.LINES):z.isLineLoop?Me.setMode(P.LINE_LOOP):Me.setMode(P.LINE_STRIP)}else z.isPoints?Me.setMode(P.POINTS):z.isSprite&&Me.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))Me.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Be=z._multiDrawStarts,Rt=z._multiDrawCounts,Ie=z._multiDrawCount,ue=At?x.get(At).bytesPerElement:1,Je=kt.get(O).currentProgram.getUniforms();for(let ze=0;ze<Ie;ze++)Je.setValue(P,"_gl_DrawID",ze),Me.render(Be[ze]/ue,Rt[ze])}else if(z.isInstancedMesh)Me.renderInstances(Nt,Te,z.count);else if(H.isInstancedBufferGeometry){let Be=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Rt=Math.min(H.instanceCount,Be);Me.renderInstances(Nt,Te,Rt)}else Me.render(Nt,Te)};function Ps(y,I,H,O){B!==null&&y.isNodeMaterial&&B.setObject(O,y),lt===!0&&K.setState(y,H,!1),y.transparent===!0&&y.side===ln&&y.forceSinglePass===!1?(y.side=je,y.needsUpdate=!0,hi(y,I,O),y.side=Si,y.needsUpdate=!0,hi(y,I,O),y.side=ln):hi(y,I,O)}this.compile=function(y,I,H=null){H===null&&(H=y),B!==null&&B.renderStart(y,I,H),T=J.get(H),T.init(I),S.push(T),H.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),y!==H&&y.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),mt=this.localClippingEnabled,lt=K.init(this.clippingPlanes,mt),lt===!0&&K.setGlobalState(this.clippingPlanes,I),B!==null&&xt.render(T.state.shadowsArray,H,I);let O=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let Mt=z.material;if(Mt)if(Array.isArray(Mt))for(let Pt=0;Pt<Mt.length;Pt++){let ut=Mt[Pt];Ps(ut,H,I,z),O.add(ut)}else Ps(Mt,H,I,z),O.add(Mt)}),T=S.pop(),B!==null&&B.renderEnd(),O},this.compileAsync=function(y,I,H=null){let O=this.compile(y,I,H);return new Promise(z=>{function Mt(){if(O.forEach(function(Pt){let At=kt.get(Pt).currentProgram;(At===void 0||At.isReady())&&O.delete(Pt)}),O.size===0){z(y);return}setTimeout(Mt,10)}ee.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Xi=null;function Ls(y){Xi&&Xi(y)}function dn(){Yn.stop()}function Un(){Yn.start()}let Yn=new td;Yn.setAnimationLoop(Ls),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(y){Xi=y,ht.setAnimationLoop(y),y===null?Yn.stop():Yn.start()},ht.addEventListener("sessionstart",dn),ht.addEventListener("sessionend",Un),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(y,I);let H=ht.enabled===!0&&ht.isPresenting===!0,O=N!==null&&(at===null||H)&&N.begin(C,at);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(I),I=ht.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,I,at),T=J.get(y,S.length),T.init(I),T.state.textureUnits=Wt.getTextureUnits(),S.push(T),St.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?pt.setFromArrayCamera(I):tt.setFromProjectionMatrix(St,Sn,I.reversedDepth),mt=this.localClippingEnabled,lt=K.init(this.clippingPlanes,mt),E=yt.get(y,_.length),E.init(),_.push(E),this.info.render.frame++,ht.enabled===!0&&ht.isPresenting===!0){let Pt=C.xr.getDepthSensingMesh();Pt!==null&&Ds(Pt,I,-1/0,C.sortObjects)}Ds(y,I,0,C.sortObjects),E.finish(),B!==null&&B.updateLights(T.state.lightsArray),C.sortObjects===!0&&E.sort(zt,pe),ae=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,ae&&w.addToRenderList(E,y),this.info.autoReset===!0&&this.info.reset(),lt===!0&&K.beginShadows();let z=T.state.shadowsArray;if(xt.render(z,y,I),lt===!0&&K.endShadows(),(O&&N.hasRenderPass())===!1){let Pt=E.opaque,ut=E.transmissive;if(T.setupLights(),I.isArrayCamera){let At=I.cameras;if(ut.length>0)for(let Dt=0,Zt=At.length;Dt<Zt;Dt++){let ie=At[Dt];ta(Pt,ut,y,ie)}ae&&w.render(y);for(let Dt=0,Zt=At.length;Dt<Zt;Dt++){let ie=At[Dt];Ns(E,y,ie,ie.viewport)}}else ut.length>0&&ta(Pt,ut,y,I),ae&&w.render(y),Ns(E,y,I)}at!==null&&V===0&&(Wt.updateMultisampleRenderTarget(at),Wt.updateRenderTargetMipmap(at)),O&&N.end(C),y.isScene===!0&&y.onAfterRender(C,y,I),ft.resetDefaultState(),X=-1,nt=null,S.pop(),S.length>0?(T=S[S.length-1],Wt.setTextureUnits(T.state.textureUnits),lt===!0&&K.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,B!==null&&B.renderEnd()};function Ds(y,I,H,O){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){let Pt=I.isArrayCamera?pt:tt;if(!y.frustumCulled||y.intersectsFrustum(Pt)){O&&Bt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(St);let ut=ot.update(y),At=y.material;At.visible&&E.push(y,ut,At,H,Bt.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){let Pt=I.isArrayCamera?pt:tt;if(!y.frustumCulled||y.intersectsFrustum(Pt)){let ut=ot.update(y),At=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Bt.copy(y.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Bt.copy(ut.boundingSphere.center)),Bt.applyMatrix4(y.matrixWorld).applyMatrix4(St)),Array.isArray(At)){let Dt=ut.groups;for(let Zt=0,ie=Dt.length;Zt<ie;Zt++){let Nt=Dt[Zt],le=At[Nt.materialIndex];le&&le.visible&&E.push(y,ut,le,H,Bt.z,Nt,I)}}else At.visible&&E.push(y,ut,At,H,Bt.z,null,I)}}}let Mt=y.children;for(let Pt=0,ut=Mt.length;Pt<ut;Pt++)Ds(Mt[Pt],I,H,O)}function Ns(y,I,H,O){let{opaque:z,transmissive:Mt,transparent:Pt}=y;T.setupLightsView(H),lt===!0&&K.setGlobalState(C.clippingPlanes,H),O&&vt.viewport(it.copy(O)),z.length>0&&ci(z,I,H),Mt.length>0&&ci(Mt,I,H),Pt.length>0&&ci(Pt,I,H),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function ta(y,I,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){let Nt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new _n(1,1,{generateMipmaps:!0,type:Nt?Dn:un,minFilter:ai,samples:Math.max(4,be.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let Mt=T.state.transmissionRenderTarget[O.id],Pt=O.viewport||it;Mt.setSize(Pt.z*C.transmissionResolutionScale,Pt.w*C.transmissionResolutionScale);let ut=C.getRenderTarget(),At=C.getActiveCubeFace(),Dt=C.getActiveMipmapLevel();C.setRenderTarget(Mt),C.getClearColor(Z),dt=C.getClearAlpha(),dt<1&&C.setClearColor(16777215,.5),C.clear(),ae&&w.render(H);let Zt=C.toneMapping;C.toneMapping=Wn;let ie=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),lt===!0&&K.setGlobalState(C.clippingPlanes,O),ci(y,H,O),Wt.updateMultisampleRenderTarget(Mt),Wt.updateRenderTargetMipmap(Mt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let le=0,Te=I.length;le<Te;le++){let Ue=I[le],{object:Me,geometry:Be,material:Rt,group:Ie}=Ue;if(Rt.side===ln&&Me.layers.test(O.layers)){let ue=Rt.side;Rt.side=je,Rt.needsUpdate=!0,Fs(Me,H,O,Be,Rt,Ie),Rt.side=ue,Rt.needsUpdate=!0,Nt=!0}}Nt===!0&&(Wt.updateMultisampleRenderTarget(Mt),Wt.updateRenderTargetMipmap(Mt))}C.setRenderTarget(ut,At,Dt),C.setClearColor(Z,dt),ie!==void 0&&(O.viewport=ie),C.toneMapping=Zt}function ci(y,I,H){let O=I.isScene===!0?I.overrideMaterial:null;for(let z=0,Mt=y.length;z<Mt;z++){let Pt=y[z],{object:ut,geometry:At,group:Dt}=Pt,Zt=Pt.material;Zt.allowOverride===!0&&O!==null&&(Zt=O),ut.layers.test(H.layers)&&Fs(ut,I,H,At,Zt,Dt)}}function Fs(y,I,H,O,z,Mt){B!==null&&z.isNodeMaterial&&B.setObject(y,z),y.onBeforeRender(C,I,H,O,z,Mt),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(C,I,H,O,y,Mt),z.transparent===!0&&z.side===ln&&z.forceSinglePass===!1?(z.side=je,z.needsUpdate=!0,C.renderBufferDirect(H,I,O,z,y,Mt),z.side=Si,z.needsUpdate=!0,C.renderBufferDirect(H,I,O,z,y,Mt),z.side=ln):C.renderBufferDirect(H,I,O,z,y,Mt),y.onAfterRender(C,I,H,O,z,Mt)}function ea(y){let I=0;for(let H of y)H.texture!==null&&I++;return I}function hi(y,I,H){I.isScene!==!0&&(I=re);let O=kt.get(y),z=T.state.lights,Mt=T.state.shadowsArray,Pt=z.state.version,ut=et.getParameters(y,z.state,Mt,I,H,T.state.lightProbeGridArray),At=et.getProgramCacheKey(ut),Dt=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;let Zt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=A.get(y.envMap||O.environment,Zt),O.envMapRotation=O.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Dt===void 0&&(y.addEventListener("dispose",oe),Dt=new Map,O.programs=Dt,O.programVariants=new Map);let ie=Dt.get(At);if(ie!==void 0){if(O.currentProgram===ie&&O.lightsStateVersion===Pt)return Bs(y,ut),ie}else ut.uniforms=et.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,H,ut),y.onBeforeCompile(ut,C),ie=et.acquireProgram(ut,At),Dt.set(At,ie),O.uniforms=ut.uniforms;let Nt=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Nt.clippingPlanes=K.uniform),Bs(y,ut),O.needsLights=It(y),O.lightsStateVersion=Pt,O.needsLights&&(Nt.ambientLightColor.value=z.state.ambient,Nt.lightProbe.value=z.state.probe,Nt.sunLights.value=z.state.sun,Nt.sunLightShadows.value=z.state.sunShadow,Nt.directionalLights.value=z.state.directional,Nt.directionalLightShadows.value=z.state.directionalShadow,Nt.spotLights.value=z.state.spot,Nt.spotLightShadows.value=z.state.spotShadow,Nt.rectAreaLights.value=z.state.rectArea,Nt.ltc_1.value=z.state.rectAreaLTC1,Nt.ltc_2.value=z.state.rectAreaLTC2,Nt.pointLights.value=z.state.point,Nt.pointLightShadows.value=z.state.pointShadow,Nt.hemisphereLights.value=z.state.hemi,Nt.sunShadowMatrix.value=z.state.sunShadowMatrix,Nt.sunShadowCascade.value=z.state.sunShadowCascade,Nt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Nt.spotLightMatrix.value=z.state.spotLightMatrix,Nt.spotLightMap.value=z.state.spotLightMap,Nt.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=ea(T.state.lightProbeGridArray),O.currentProgram=ie,O.uniformsList=null,ie}function pl(y,I,H,O,z){let Mt=kt.get(y),Pt=Mt.currentProgram.id+","+O+","+z,ut=Mt.programVariants.get(Pt);return ut===void 0?(ut=hi(y,I,H),Mt.programVariants.set(Pt,ut)):(Mt.currentProgram=ut,Mt.uniformsList=null,Mt.outputColorSpace=O,Mt.toneMapping=z),ut}function Os(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=ws.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Bs(y,I){let H=kt.get(y);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function qc(y,I,H,O,z){I.isScene!==!0&&(I=re),Wt.resetTextureUnits();let Mt=I.fog,Pt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,ut=at===null?C.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:de.workingColorSpace,At=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Dt=A.get(O.envMap||Pt,At),Zt=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ie=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Nt=!!H.morphAttributes.position,le=!!H.morphAttributes.normal,Te=!!H.morphAttributes.color,Ue=Wn;O.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ue=C.toneMapping);let Me=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Be=Me!==void 0?Me.length:0,Rt=kt.get(O),Ie=T.state.lights;if(lt===!0&&(mt===!0||y!==nt)){let Ae=y===nt&&O.id===X;K.setState(O,y,Ae)}let ue=!1,Je=!1;O.version===Rt.__version?Rt.needsLights&&Rt.lightsStateVersion!==Ie.state.version||z.isBatchedMesh&&Rt.batching===!1||!z.isBatchedMesh&&Rt.batching===!0||z.isBatchedMesh&&Rt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Rt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Rt.instancing===!1||!z.isInstancedMesh&&Rt.instancing===!0||z.isSkinnedMesh&&Rt.skinning===!1||!z.isSkinnedMesh&&Rt.skinning===!0||z.isInstancedMesh&&Rt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Rt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Rt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Rt.instancingMorph===!1&&z.morphTexture!==null||Rt.envMap!==Dt||O.fog===!0&&Rt.fog!==Mt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==K.numPlanes||Rt.numIntersection!==K.numIntersection)||Rt.vertexAlphas!==Zt||Rt.vertexTangents!==ie||Rt.morphTargets!==Nt||Rt.morphNormals!==le||Rt.morphColors!==Te||Rt.morphTargetsCount!==Be||Rt.numLightProbeGrids!==ea(T.state.lightProbeGridArray)?ue=!0:(Rt.outputColorSpace!==ut||Rt.toneMapping!==Ue)&&(Je=!0):(ue=!0,Rt.__version=O.version);let ze=Rt.currentProgram;(ue===!0||Je===!0)&&(ze=Je===!0?pl(O,I,z,ut,Ue):hi(O,I,z),B&&O.isNodeMaterial&&B.onUpdateProgram(O,ze,Rt));let Ei=!1,En=!1,Ne=!1,he=ze.getUniforms(),Fe=Rt.uniforms;if(vt.useProgram(ze.program)&&(Ei=!0,En=!0,Ne=!0),O.id!==X&&(X=O.id,En=!0),Ei||nt!==y){vt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),he.setValue(P,"projectionMatrix",y.projectionMatrix),he.setValue(P,"viewMatrix",y.matrixWorldInverse);let _e=he.map.cameraPosition;_e!==void 0&&_e.setValue(P,$t.setFromMatrixPosition(y.matrixWorld)),be.logarithmicDepthBuffer&&he.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&he.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),nt!==y&&(nt=y,En=!0,Ne=!0)}if(Rt.needsLights&&(Ie.state.sunShadowMap.length>0&&he.setValue(P,"sunShadowMap",Ie.state.sunShadowMap,Wt),Ie.state.directionalShadowMap.length>0&&he.setValue(P,"directionalShadowMap",Ie.state.directionalShadowMap,Wt),Ie.state.spotShadowMap.length>0&&he.setValue(P,"spotShadowMap",Ie.state.spotShadowMap,Wt),Ie.state.pointShadowMap.length>0&&he.setValue(P,"pointShadowMap",Ie.state.pointShadowMap,Wt)),z.isSkinnedMesh){he.setOptional(P,z,"bindMatrix"),he.setOptional(P,z,"bindMatrixInverse");let Ae=z.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),he.setValue(P,"boneTexture",Ae.boneTexture,Wt))}z.isBatchedMesh&&(he.setOptional(P,z,"batchingTexture"),he.setValue(P,"batchingTexture",z._matricesTexture,Wt),he.setOptional(P,z,"batchingIdTexture"),he.setValue(P,"batchingIdTexture",z._indirectTexture,Wt),he.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&he.setValue(P,"batchingColorTexture",z._colorsTexture,Wt));let rn=H.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&j.update(z,H,ze),(En||Rt.receiveShadow!==z.receiveShadow)&&(Rt.receiveShadow=z.receiveShadow,he.setValue(P,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(Fe.envMapIntensity.value=I.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=w_()),En){if(he.setValue(P,"toneMappingExposure",C.toneMappingExposure),Rt.needsLights&&zs(Fe,Ne),Mt&&O.fog===!0&&gt.refreshFogUniforms(Fe,Mt),gt.refreshMaterialUniforms(Fe,O,bt,Gt,T.state.transmissionRenderTarget[y.id]),Rt.needsLights&&Rt.numLightProbeGrids>0){let Ae=U,_e=0;for(let Ve of T.state.lightProbeGridArray)Ve.texture!==null&&(Ae.textures[_e]=Ve.texture,Ae.min[_e]=Ve.boundingBox.min,Ae.max[_e]=Ve.boundingBox.max,Ae.resolution[_e]=Ve.resolution,_e++);for(let Ve in Ae)Ae[Ve].length=_e;Fe.probesSH.value=Ae.textures,Fe.probesMin.value=Ae.min,Fe.probesMax.value=Ae.max,Fe.probesResolution.value=Ae.resolution}ws.upload(P,Os(Rt),Fe,Wt)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ws.upload(P,Os(Rt),Fe,Wt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&he.setValue(P,"center",z.center),he.setValue(P,"modelViewMatrix",z.modelViewMatrix),he.setValue(P,"normalMatrix",z.normalMatrix),he.setValue(P,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){let Ae=O.uniformsGroups;for(let _e=0,Ve=Ae.length;_e<Ve;_e++){let ks=Ae[_e];rt.update(ks,ze),rt.bind(ks,ze)}}return ze}function zs(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function It(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(y,I,H){let O=kt.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),kt.get(y.texture).__webglTexture=I,kt.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){let H=kt.get(y);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,H=0){at=y,Y=I,V=H;let O=null,z=!1,Mt=!1;if(y){let ut=kt.get(y);if(ut.__useDefaultFramebuffer!==void 0){vt.bindFramebuffer(P.FRAMEBUFFER,ut.__webglFramebuffer),it.copy(y.viewport),Lt.copy(y.scissor),Ot=y.scissorTest,vt.viewport(it),vt.scissor(Lt),vt.setScissorTest(Ot),X=-1;return}else if(ut.__webglFramebuffer===void 0)Wt.setupRenderTarget(y);else if(ut.__hasExternalTextures)Wt.rebindTextures(y,kt.get(y.texture).__webglTexture,kt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Zt=y.depthTexture;if(ut.__boundDepthTexture!==Zt){if(Zt!==null&&kt.has(Zt)&&(y.width!==Zt.image.width||y.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(y)}}let At=y.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(Mt=!0);let Dt=kt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Dt[I])?O=Dt[I][H]:O=Dt[I],z=!0):y.samples>0&&Wt.useMultisampledRTT(y)===!1?O=kt.get(y).__webglMultisampledFramebuffer:Array.isArray(Dt)?O=Dt[H]:O=Dt,it.copy(y.viewport),Lt.copy(y.scissor),Ot=y.scissorTest}else it.copy(Ht).multiplyScalar(bt).floor(),Lt.copy(Kt).multiplyScalar(bt).floor(),Ot=te;if(H!==0&&(O=q),vt.bindFramebuffer(P.FRAMEBUFFER,O)&&vt.drawBuffers(y,O),vt.viewport(it),vt.scissor(Lt),vt.setScissorTest(Ot),z){let ut=kt.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,ut.__webglTexture,H)}else if(Mt){let ut=I;for(let At=0;At<y.textures.length;At++){let Dt=kt.get(y.textures[At]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+At,Dt.__webglTexture,H,ut)}}else if(y!==null&&H!==0){let ut=kt.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ut.__webglTexture,H)}X=-1};function Ai(y){let I=kt.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=be.textureFormatReadable(y.format),I.__typeReadable=be.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,H,O,z,Mt,Pt,ut=0){if(!(y&&y.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=kt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pt!==void 0&&(At=At[Pt],Array.isArray(At)&&(At=At[0])),At){vt.bindFramebuffer(P.FRAMEBUFFER,At);try{let Dt=y.textures[ut],Zt=Dt.format,ie=Dt.type;y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ut);let Nt=Ai(Dt);if(Nt.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-O&&H>=0&&H<=y.height-z&&P.readPixels(I,H,O,z,st.convert(Zt),st.convert(ie),Mt)}finally{let Dt=at!==null?kt.get(at).__webglFramebuffer:null;vt.bindFramebuffer(P.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(y,I,H,O,z,Mt,Pt,ut=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=kt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pt!==void 0&&(At=At[Pt],Array.isArray(At)&&(At=At[0])),At)if(I>=0&&I<=y.width-O&&H>=0&&H<=y.height-z){vt.bindFramebuffer(P.FRAMEBUFFER,At);let Dt=y.textures[ut],Zt=Dt.format,ie=Dt.type;y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ut);let Nt=Ai(Dt);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,le),P.bufferData(P.PIXEL_PACK_BUFFER,Mt.byteLength,P.STREAM_READ),P.readPixels(I,H,O,z,st.convert(Zt),st.convert(ie),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Te=at!==null?kt.get(at).__webglFramebuffer:null;vt.bindFramebuffer(P.FRAMEBUFFER,Te);let Ue=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await vu(P,Ue,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,le),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Mt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(le),P.deleteSync(Ue),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,H=0){let O=Math.pow(2,-H),z=Math.floor(y.image.width*O),Mt=Math.floor(y.image.height*O),Pt=I!==null?I.x:0,ut=I!==null?I.y:0;Wt.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,Pt,ut,z,Mt),vt.unbindTexture()},this.copyTextureToTexture=function(y,I,H=null,O=null,z=0,Mt=0){let Pt,ut,At,Dt,Zt,ie,Nt,le,Te,Ue=y.isCompressedTexture?y.mipmaps[Mt]:y.image;if(H!==null)Pt=H.max.x-H.min.x,ut=H.max.y-H.min.y,At=H.isBox3?H.max.z-H.min.z:1,Dt=H.min.x,Zt=H.min.y,ie=H.isBox3?H.min.z:0;else{let he=Math.pow(2,-z);Pt=Math.floor(Ue.width*he),ut=Math.floor(Ue.height*he),y.isDataArrayTexture?At=Ue.depth:y.isData3DTexture?At=Math.floor(Ue.depth*he):At=1,Dt=0,Zt=0,ie=0}O!==null?(Nt=O.x,le=O.y,Te=O.z):(Nt=0,le=0,Te=0);let Me=st.convert(I.format),Be=st.convert(I.type),Rt;I.isData3DTexture?(Wt.setTexture3D(I,0),Rt=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Wt.setTexture2DArray(I,0),Rt=P.TEXTURE_2D_ARRAY):(Wt.setTexture2D(I,0),Rt=P.TEXTURE_2D),vt.activeTexture(P.TEXTURE0),vt.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),vt.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),vt.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);let Ie=vt.getParameter(P.UNPACK_ROW_LENGTH),ue=vt.getParameter(P.UNPACK_IMAGE_HEIGHT),Je=vt.getParameter(P.UNPACK_SKIP_PIXELS),ze=vt.getParameter(P.UNPACK_SKIP_ROWS),Ei=vt.getParameter(P.UNPACK_SKIP_IMAGES);vt.pixelStorei(P.UNPACK_ROW_LENGTH,Ue.width),vt.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ue.height),vt.pixelStorei(P.UNPACK_SKIP_PIXELS,Dt),vt.pixelStorei(P.UNPACK_SKIP_ROWS,Zt),vt.pixelStorei(P.UNPACK_SKIP_IMAGES,ie);let En=y.isDataArrayTexture||y.isData3DTexture,Ne=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){let he=kt.get(y),Fe=kt.get(I),rn=kt.get(he.__renderTarget),Ae=kt.get(Fe.__renderTarget);vt.bindFramebuffer(P.READ_FRAMEBUFFER,rn.__webglFramebuffer),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let _e=0;_e<At;_e++)En&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.get(y).__webglTexture,z,ie+_e),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.get(I).__webglTexture,Mt,Te+_e)),P.blitFramebuffer(Dt,Zt,Dt+Pt,Zt+ut,Nt,le,Nt+Pt,le+ut,P.DEPTH_BUFFER_BIT,P.NEAREST);vt.bindFramebuffer(P.READ_FRAMEBUFFER,null),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||kt.has(y)){let he=kt.get(y),Fe=kt.get(I);vt.bindFramebuffer(P.READ_FRAMEBUFFER,R),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,k);for(let rn=0;rn<At;rn++)En?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,he.__webglTexture,z,ie+rn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,he.__webglTexture,z),Ne?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Fe.__webglTexture,Mt,Te+rn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Fe.__webglTexture,Mt),z!==0?P.blitFramebuffer(Dt,Zt,Dt+Pt,Zt+ut,Nt,le,Nt+Pt,le+ut,P.COLOR_BUFFER_BIT,P.NEAREST):Ne?P.copyTexSubImage3D(Rt,Mt,Nt,le,Te+rn,Dt,Zt,Pt,ut):P.copyTexSubImage2D(Rt,Mt,Nt,le,Dt,Zt,Pt,ut);vt.bindFramebuffer(P.READ_FRAMEBUFFER,null),vt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ne?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Rt,Mt,Nt,le,Te,Pt,ut,At,Me,Be,Ue.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Rt,Mt,Nt,le,Te,Pt,ut,At,Me,Ue.data):P.texSubImage3D(Rt,Mt,Nt,le,Te,Pt,ut,At,Me,Be,Ue):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Mt,Nt,le,Pt,ut,Me,Be,Ue.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Mt,Nt,le,Ue.width,Ue.height,Me,Ue.data):P.texSubImage2D(P.TEXTURE_2D,Mt,Nt,le,Pt,ut,Me,Be,Ue);vt.pixelStorei(P.UNPACK_ROW_LENGTH,Ie),vt.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ue),vt.pixelStorei(P.UNPACK_SKIP_PIXELS,Je),vt.pixelStorei(P.UNPACK_SKIP_ROWS,ze),vt.pixelStorei(P.UNPACK_SKIP_IMAGES,Ei),Mt===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&P.generateMipmap(Rt),vt.unbindTexture()},this.initRenderTarget=function(y){kt.get(y).__webglFramebuffer===void 0&&Wt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Wt.setTextureCube(y,0):y.isData3DTexture?Wt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Wt.setTexture2DArray(y,0):Wt.setTexture2D(y,0),vt.unbindTexture()},this.resetState=function(){Y=0,V=0,at=null,vt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var ud="data:audio/mpeg;base64,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";var dd="data:audio/mpeg;base64,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DDtTBcsVgaifdvbsi4mDJIFTiw2azXId2mlTV0OCKZsi3PKQFKV7Nf6r0UQpxujhov/7AAVwAQ7CMMMNcjnRQxwyApkZeuAZwP/7YMQLA4zU2TRtsHLJmZplzbYOIVCIwINC4GPAQGKF6QseBUQFktnddL5+HlbOzleIDTeiyNaXhWf0qhI0SuxKXRtXOVuMlhy67MU/4kK01CgBj2T/eZESrbXmTcVc+/RM0I0226ACwAA0BMoOzXHM3ZfOKGRUMNleTXVAyklDlAmJQw4C4EHDajCDrWQEDPPBMOB8ek4cVxbIa84skO+m6pOaMKmThlhGtTL1sRaSX6m3ihjBjQOHY87mjRz4zP/kfnsHtXFeGLfnEwCsAhAhCImDrhlrqeManWw5iIucOQmCzYCuxbsQPhmJSWkeZZIOj6zlEBasYiyhEufyWSqXUrvU8P/7YMQcgw0goSZN5YmBqxHjxc0lMTKluSikeCVSpOE0DTklVh5tgyd2LYoa3yC9s2Im2zr9n9duSAUoAqUUgErFURxFiwQVMY4IhhAim8lueAVhqd6HH6WDRKehRRmJXnsimkcG/+gD0LhzEGQSEEYIDCQEHSNd5VqC65XWYNIc3/oneZVK4pEb6N7RCNE7CJSaE8SnQbAygJb6yyK4s5DHwkrGxXTdhpkOL9+Fn/2ZQwMXiMhWBgCvnrj6YyWIwujW84OqmA0CWjDgXMKFk/mXBBahb4yShwkzzAcUwlG1iChzAlXA1AqB0RVRVaHUSfLA7iLR2AEVKsyj0JVrRJHxWuq4rv/7YMQqg8yYjRIOZYrJrhHfwc0xKJ/MrMteJbronVUMUMi8Kih4BGNiKFyoZTIBpOMHV4saLFBikEGSi6YoSJHdHm5kgoyMNbGOKgYmlsiqkSo4gs1pBMWaRSUCcWAmJT1eCYAw7FYtXORJUlYtM3JJNWnJjEOQNjGkZy7avNVlk95l3A5LEpYe48e/led/iVUCG7pwDTgipxEesmfbGSogG0CbBh5JmlhoyIKcESsWOg4cWxQQpUJ9rhbZ3X+fV4oMjc5fGMmChY5ZqGBg0dDJgoYE6GRqyhRU4KiokNGgZFBJ/4LBIRhmZF2f2e1MQU1FMy4xMDBVVVVVVVVVVVVVVVVVVf/7YsQ6A8uggLgsaGXAAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";var fd="data:audio/mpeg;base64,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";var pd="data:audio/mpeg;base64,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";var md="data:audio/mpeg;base64,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GXDmWJXgoJTlzkVldQuCIEp4abM280hBtx5RzFIThW3Mc1uqDB0VAIeHkGfy2tUEFHTALzeIgt7OuCMuYIQiOCS4qELTLnVaIP/7YMQNA8+UrxwtJHoB5BWjAayNuCAkiAiEzSkHEUOoBEmgPmWHmLMhwZAQlQZJKZ4iASQjSnHaLcSvHUwGEgkYuYt8NGxwWBiSwgELoGOw+zzuwjI0N1Y5PODDYiDQKsohniqmZJAofqm+c3ZMqMhYVIrV1/dfa3MOAmVWEsgVNGaEqWjQ5FFw2XpIr2Jg6uiyQAHYOTEGSeZbAifA1ACcakDBQJQcQpAo0MgBCyIEPZDEwUCNTIICIEREAp4QBJnjTbkL4VtjD/OXLoBpXCl0tjVDHLlDTTksq46g+7ndPar6hjOtFxICg5T/fowaHUqZccERPORFcwSRlTFYBtWZccCNHf/7YMQKA80IoxQMZPSBkZAhwZwxOCFQCiqnPRcHWAUCPo35EhH4AHFUCIA0BORHNDMIiC5Rcc5hE1VV0qlFhGILBprxJmq5Xco3kiEvlMThqoAEK0JCAXMMS9XJKlGry0ME7GtbQVdt5GGBVM8nQMMXjLwqLF/XccuGG4qtaQt9LQticRDIFMFggq4OmcOIzMkUOJFKBLOLxCQQI8i4cgiJotZnLD3PQnEQ1Nm9jAuTtjWIL6xsiN3JJ5WNy9YAIROqEhoBqQKRoFv0K/91csymk+AULgTLEQgypbBDlPzGUjUkWwgYMvZ8slOKaXKqFH5xUjwMRFYmYAvMSXMFSIAjWBVYGv/7YMQbg4zMlwINYSnBi5FdRZwZeiQdXwgGaOXxbm0FDadaDQOBcYAEGnkqGy20u5nqoWUUsnHE2eWBVwNRYK/ZEX/9bG3NzsDspJFnWULqYcy6xGrspljXktS4quVgS8LeOtLXeCxR4BrUOmKDoou6o8XSSNas7StrBZazJB57qFDFat9cr8QNS1rst1WLGnEi0QZJ884cPGu/nVuprCT2EivlSz9alUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7YsQug8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";var gd="data:audio/mpeg;base64,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enIX5DTOncjYKC4rF6VJBKJ0L1tYkyGSaJQLliiDLL48/GJauYL11wAAABbgDxkWrWRMwwmZ6GdGEYk2AA4sEcdgCYbLB0G05P/7YMQRAQ0YuTlNPFEJlxUlCZYLCUVO9V7WEK1cGaKgV9RGCyFvGQjkMDVjKOQt4MclCJJUqpJj+hL1poiiY4W3J+MpGiiF7mQzdKfQ44YEc9ATX+bfa+xCQSvoAcAiQUDCAj0sG0jUUS5jwNiWqIAwAelSHOC2yNI84AQgECXVYamUCAVcQ4XGLLQ6mYWxZyX+TnVgVJRqHug3FLiEt2WfMspLyJkExSWV4pMbVZW1UuxWY56JWMsyW2zBWIJXIXDVBBWY25SOO6wOTGMHNEjFAw2oOkn0ZSFxUdBZ2wawMHEkqHQJoBmg4giUJXUFVRNCi0JhWW4WqZwhQCDaOy1C4QdNS//7YMQhgw08ix4sawBBoBIixbxkoRw2ETo0WHlTPjK2uv64LUK8Yhcoda/fl87vGrZ7WzBoPzJ1jnv7khAz4Ko4g4Dx9YwSREq0+jLsHqYwhVy1AVUFLXUrwIPGTFgBV882wQMUOJiQ2MFhctWYIIStaGhtDRalpRbQDJL6aWjaUAzbqvq0WHGUyFjz+wzCJykjUumYjGeVMcM97q81neEUNn22UCM2pT7MkxrEPFKTQhswAQBJKYesBgaq4PSbbGMiOY7oHzFRMlWuTULmmbKmSgCi62EkmOmWDbP6vchAazA4zcyyJb1H1B1zW2L2lwQDIuSCL9BTDLyVE5ZZlEnrZfRpL//7YMQwg81IgwYN4enJl5Fdway9MSgYGbrj0IU9aZowQCSoODyE252r5lCAJUnQhhUueDKLz5hUJDYw1CJ4yE0VzONFBjdiHpjMVL8JnK5ChJmCl2UpgcMjKXZWFLYu2WGAT4NUP6WUSVJpomIYKEuiVHkw3VulKqVMzZ1C3XULeyZJ+NVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7YsRAA8AAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";var _d="data:audio/mpeg;base64,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";var xd="data:audio/mpeg;base64,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";var vd="data:audio/mpeg;base64,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";var yd="data:audio/mpeg;base64,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ElgqJeoRNlSqjkaTh5xD1ll2Hn4oWZ4nmeLdp8Gxrt2G68oIsvaDIJ1I8Nm++hQMLBKc5+HRLZh8aHERpCoZwDnAgLJn0oEFGf/7YMQNg81UuR4N5MeJmhLjwbwY6UgYowIMT6QBpOqxMweZ7Jl+5K/MtlkkyihZILctEENJEiy1AoLChjE/1MIPscgYTLaE5x8f5GrprtpP1CGcw+FHkEttoV4CTcn438e5/8/RgYCYVBGuSZxAeaK+EjIYeuGMio4EzsLYiVhhxaNfiKzBVNnTkz4NdhVmozkAEEVnpg41At9QFhMjg5HQPDpKIFkU+ZRMDRogZXZAvlwYuMTm6zTj3LrWzKj9fra23Lq72Vt7v9r+VQADQJAUbuS9AS47LgHETJhlFk3kYyZkGUBWjaSCUN89EcrmFdbXGGulI2E1MdhbleIXHfe5Txfz7//7YMQcgguorSlNPMcBfZXkaaSN0N3H+fNbKvvTXc23Z2EJgdhomScEpZ4UCwzPNY0w3Q7/9Dv/+h6ACE29V9BZuAIYjAA42YZS4i+09HbREhplEGuU0514aBPhNc+RFH9NzVHRSiuoBByZCR9g5ssGIkZIKCmWQ0YS7TptkhakPgI0sUUxITItBxp4wsgYcOYx1Pe7/DnwygBCNK4jBN6k5SYBx8LHRZFSTrEwIp20p916RKjVui0t1TOnJAlEfYBcFYkD2bHTMBdRG87GyK2PHaCcF+0epGk0ZOaEnSd8RkuahsEHTIkC21QDMrchAaq+ro1f+oAAGCwc1RsdskhIoBBdEf/7YMQ2AguooRrM7MHBghVhyaeZKHWbEkW+4roaJ3B0laep4F2RKwRsyWKEaSuQu8WC4pGsSC5FDuDJGrhGav0dqTktlBZiQVh6KJvtW7eVTd3P/OPIDhkOplQWNiVOptFF3/6U/64UKHl+HNCIEDIkiYMnSsCAgLfMNZS0EvcrFkwJUwBSAHxJJtCsIx0YnKw2JJZYJSppcfPMntGhCPWTlaYxWhOXpm31aPkMyexcOonv1VLamqrGYCWWBp5EkuIoNBT+InyyxUKA3cBScCIAUUKBBcMtwXXLyIgB1iAi3GCbiHsj9rbH7pyZUOL6TIqi/qBbdRots+K1lgMGjkawyVqjkf/7YsRPAwwosvwNMG+BZ5aZCZeNMawmuZNZDJrLLYZGTKGhiVfvvn8pRTJSg7/qt/1V1UxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";var Ud="data:audio/mpeg;base64,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/SWn8d5cUCqzFiHKhMVtNEfokoR0pWaJDDpk6Jy0JdXHpy60CKmWisH0zeJKWD1dU4V2nEwkuLrpnjKGiDNIM5iXN6GzY6AW3zOhkssFAEsACjCKz9lxN5XqRLCOliOVZP4yiekgAOk2XUvgN4qx0kqT5k4XR1My+dLEuVYTpl8Fhf/7YMTBg8wA2QBtME3JmBeeQbYa0UJ3C5LbovpqKQGl47LJWHaB46PmUInXpAZIamy1aYsLSSWSsWmaWanabS63EO4lTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQMVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7YMTWg47sxuRNPY2B0ZkZRbexe1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7YMSIg8A4AgAIgAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==";var Md="data:audio/mpeg;base64,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JSoC6nnMhRGmcmK5ZD9UwaYn6lGUIiuw3ixl7CYP0JWATJQZ4uyZQakkNh9sPGlXnRgfC8NlokcKkibRc6nIQWooWZbRoS1XpeuqyevXfu+2xnqO9AAJScguAATDOd5cVDtRUJJCwUaUAguxEQjonimGI8kkVRBapgKrVQx8lT0Tx7bSZWsXs7sicRVs6CrRd8FJupc+Psof+pUAAEqYHGGpJghTBsSqkLWuMWXDIjBEaJzSTo2FUbDiTVnVyos6MSOkNR2qXbX4yTAaWM5bq03qlXFnR/H/+2LEcYMMJGDwZ72HwRSK34xkmkKEbfev+zizrNsPaNvOWWAu8kLLT4XnioyqtwHSasYN1t5PF5MOxODImKyq8EoihQuL9icki88bU/a7ubAs6Stfe1id9dzLEfX/nGMuZ66FFolv6uVRt7ee1AaFQB7rAoSgqFForqxF3Inero6Sq3P8NLKjWdnOndKd3/0KoNQt0ImTqjNAEtq2j3LCxVPZJJSlvIu4q0nHTFh9tVKnnhMrUBbois8qtzfQFA6pYS3Itk/jpqCzmb6vzEp9PAFJANLsNBVGEnLBVHVTFhKLefLtXef3o4klRyRZHe4BCeagSRDTTiZvHlegsJY7rpkvDu+///tgxJaDiVRY7mel44EpDB1NhjAA8m5MQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqANVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tgxMQABHgDASEEQDHYGNcFlJsBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//tgxIiDwCQCAAMAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";var Sd={cue:ud,tok:dd,soft1:fd,soft2:pd,click1:md,click2:gd,click3:_d,rail1:xd,rail2:vd,rail3:yd,pocket:Ud,brk:Md},bd=.72,G_=i=>{let t=atob(i.split(",")[1]),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e.buffer};function Td(){let i=null,t=null,e=null,n=!1,s=0,r=!1;try{r=localStorage.getItem("billiard-sound")==="off"}catch{}let a={},o=0,c=0,l=0;function h(){if(n)return;n=!0;let p=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(!p)return;let m=new p(1,1,44100),M=Object.entries(Sd).map(([b,U])=>new Promise(E=>{try{m.decodeAudioData(G_(U),T=>{a[b]=T,E()},()=>E())}catch{E()}}));Promise.all(M).then(()=>{window.__soundReady=Object.keys(a).length===Object.keys(Sd).length})}setTimeout(h,1500);function f(){if(h(),s=performance.now(),i){i.state!=="running"&&(i.resume(),d());return}let p=window.AudioContext||window.webkitAudioContext;if(!p)return;i=new p,t=i.createGain(),t.gain.value=r?0:bd;let m=i.createDynamicsCompressor();m.threshold.value=-16,m.ratio.value=4,t.connect(m).connect(i.destination);let M=i.createConvolver(),b=i.createBuffer(2,Math.floor(i.sampleRate*.3),i.sampleRate);for(let U=0;U<2;U++){let E=b.getChannelData(U),T=0;for(let _=0;_<E.length;_++)T+=(Math.random()*2-1-T)*.22,E[_]=T*Math.pow(1-_/E.length,3.6)}M.buffer=b,e=i.createGain(),e.gain.value=.07,e.connect(M).connect(t),i.state!=="running"&&(i.resume(),d())}function d(){let p=i.createBufferSource();p.buffer=i.createBuffer(1,1,22050),p.connect(i.destination),p.start(0)}function u(p,m,M=1){if(!p||!i||r||i.state!=="running"&&performance.now()-s>500)return!1;let b=i.currentTime;if(b-o<.05){if(++c>2)return!1}else c=0;o=b;let U=i.createBufferSource(),E=i.createGain();return U.buffer=p,U.playbackRate.value=M,E.gain.value=m,U.connect(E),E.connect(t),E.connect(e),U.start(),!0}let g=()=>.97+Math.random()*.06,v=(...p)=>p[Math.floor(Math.random()*p.length)];return{unlock:f,get muted(){return r},setMuted(p){if(r=p,!p&&navigator.audioSession)try{navigator.audioSession.type="playback"}catch{}try{localStorage.setItem("billiard-sound",p?"off":"on")}catch{}t&&t.gain.setTargetAtTime(p?0:bd,i.currentTime,.02)},click(p){p<.1||!i||i.currentTime<l||(p<1?u(v(a.soft1,a.soft2),Math.min(.5,.22+p*.28),g()):u(v(a.click1,a.click2,a.click3),Math.min(.6,.24+p*.09),g()))},rail(p){p>.14&&u(v(a.rail1,a.rail2,a.rail3),Math.min(.6,.2+p*.1),g())},cue(p){p>=4.5?u(a.cue,Math.min(.7,.35+p*.05),g()):u(a.tok,.55,g())},pocket(){u(a.pocket,.8,g())},breakShot(){return u(a.brk,.55)?(l=i.currentTime+.6,!0):!1}}}var Ad="data:image/webp;base64,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";var Ed="data:image/webp;base64,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";var wd="data:image/webp;base64,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";async function Is(i,{repeat:t,aniso:e=8}={}){let n=new Image;n.src=i,await n.decode();let s=new Qe(n);return s.colorSpace=$e,s.anisotropy=e,t&&(s.wrapS=s.wrapT=gi,s.repeat.set(t[0],t[1])),s.needsUpdate=!0,s}function Cd(i,t=[[0,-1],[0,0],[0,1]]){let e=new Ni;e.background=new Yt(329478);let n=new fe(new Vn(16,7,16),new hn({color:658699,side:je}));n.position.y=2.5,e.add(n);let s=(o,c,l,h,f,d,u)=>{let g=new fe(new vn(h,f),new hn({color:new Yt(d).multiplyScalar(u),side:ln}));g.position.set(o,c,l),g.rotation.x=Math.PI/2,e.add(g)};t.forEach(([o,c])=>s(o,2.7,c,.8,.6,16773330,30)),s(0,-.5,0,14,14,678968,.7),s(-5.5,2.4,0,.5,6,16764817,3),s(5.5,2.4,0,.5,6,16764817,3),s(0,2.2,6,5,.6,16773330,2.2);let r=new Cs(i),a=r.fromScene(e,.006);return r.dispose(),a.texture}var fl=(i,t)=>new Tn({roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,envMap:i,envMapIntensity:.6,...t});async function Rd(i,{thick:t=1,segs:e=48}={}){let[n,s,r]=await Promise.all([Is(Ad),Is(Ed),Is(wd)]),a=new Tn({color:13214559,metalness:1,roughness:.22,envMap:i,envMapIntensity:1.5}),o=fl(i,{color:1314829,roughness:.3}),c=fl(i,{color:15655620,roughness:.32}),l=(p,m,M,b,U)=>{let E=new fe(new xi(m*t,p*t,b-M,e,1,!0),U);return E.position.y=(M+b)/2,E},h=(p,m,M,b)=>{let U=new fe(new si(p*t,e),M);return U.position.y=m,U.rotation.x=b?Math.PI/2:-Math.PI/2,U},f={butt:new Ke,joint:new Ke,shaft:new Ke,tip:new Ke};f.butt.add(l(.0176,.0176,-.012,0,o),h(.0176,-.012,o,!0),h(.009,-.0125,a,!0),l(.0176,.0177,0,.006,a),l(.0176,.0166,.006,.34,fl(i,{map:s})),l(.0166,.0165,.34,.345,c),l(.0165,.0165,.345,.349,o),l(.0165,.0164,.349,.354,c),l(.0164,.0119,.354,.7,fl(i,{map:n}))),f.joint.add(l(.0119,.012,.7,.704,a),l(.012,.012,.704,.732,o),l(.012,.0119,.732,.736,a),h(.0119,.736,o)),f.shaft.add(h(.0114,.736,c,!0),l(.0114,.0064,.736,1.472,new Tn({map:r,roughness:.32,clearcoat:.55,clearcoatRoughness:.14,envMap:i,envMapIntensity:.75})));let d=new Tn({color:2047814,roughness:.85,envMap:i,envMapIntensity:.3}),u=new fe(new Bi(.0063*t,e,12,0,Math.PI*2,0,Math.PI/2),d);u.scale.y=.42,u.position.y=1.5,f.tip.add(l(.0064,.0064,1.472,1.491,c),l(.0063,.0063,1.491,1.5,d),u);let g=new Ke;Object.values(f).forEach(p=>g.add(p));let v=new fe(new vi(.0185*t,.0013,10,64),a);return v.rotation.x=Math.PI/2,v.position.y=.56,v.visible=!1,g.add(v),{group:g,parts:f,balance:v}}var Id="data:image/webp;base64,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";var Pd="data:image/webp;base64,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";(async function(){let t=document.querySelector("[data-hero3d]"),e=document.querySelector("[data-hero-stage]"),n=document.querySelector("[data-hero]");if(!t||!e)return;let r=new URLSearchParams(location.search).has("poster"),a=matchMedia("(hover: none)").matches,o=1.5,c=2.8,l=.048,h=o/2,f=c/2,d=.095,u=.086,g=.022,v=.04,p=[[-h-g,-f-g,d],[h+g,-f-g,d],[-h-g,f+g,d],[h+g,f+g,d],[-h-v,0,u],[h+v,0,u]],m=Td(),M=[.03,.72],b=[[0,-1],[0,0],[0,1]],U=1,E;try{E=new hl({antialias:!0,powerPreference:"high-performance",alpha:!1})}catch{return}let T=Math.min(window.devicePixelRatio||1,a?1.6:1.5);E.setPixelRatio(T),E.toneMapping=Gr,E.toneMappingExposure=1.02,E.outputColorSpace=$e,E.setClearColor(395528),t.append(E.domElement);let _=new Ni;_.background=new Yt(395528);let S=new nn(36,1,.05,40),N=(G,W,Q,Ct={})=>{let Tt=document.createElement("canvas");Tt.width=G,Tt.height=W,Q(Tt.getContext("2d"),G,W);let Ft=new vr(Tt);return Ft.colorSpace=Ct.linear?void 0:$e,Ft.anisotropy=Ct.aniso||4,Ct.repeat&&(Ft.wrapS=Ft.wrapT=gi,Ft.repeat.set(Ct.repeat[0],Ct.repeat[1])),Ft},C=Cd(E,b),[D,B]=await Promise.all([Is(Id),Is(Pd,{repeat:[3.2,.7]})]);_.add(new Nr(13625824,659470,.3)),b.forEach(([G,W])=>{let Q=new Or(16772301,2.5,0,1.05,.95,1.6);Q.position.set(G,U,W),Q.target.position.set(G,0,W),_.add(Q,Q.target)});let q=N(1024,1024,(G,W,Q)=>{G.fillStyle="#0b6443",G.fillRect(0,0,W,Q);let Ct=G.getImageData(0,0,W,Q),Tt=Ct.data;for(let Ft=0;Ft<Tt.length;Ft+=4){let ne=(Math.random()-.5)*15;Tt[Ft]+=ne,Tt[Ft+1]+=ne,Tt[Ft+2]+=ne}G.putImageData(Ct,0,0),G.globalAlpha=.05;for(let Ft=0;Ft<2600;Ft++)G.fillStyle=Math.random()>.5?"#ffffff":"#00352f",G.fillRect(Math.random()*W,Math.random()*Q,1+Math.random()*7,1)},{repeat:[2.2,4],aniso:8}),R=new fe(new vn(o+.1,c+.1),new zi({map:q,bumpMap:q,bumpScale:.35}));R.rotation.x=-Math.PI/2,_.add(R);let k=new fe(new vn(o,.0035),new hn({color:16777215,transparent:!0,opacity:.28}));k.rotation.x=-Math.PI/2,k.position.set(0,.001,f*.5),_.add(k);let Y=new Tn({map:B,color:11045496,roughness:.55,clearcoat:.45,clearcoatRoughness:.32,envMap:C,envMapIntensity:.2}),V=new ri({color:1313286,roughness:.7}),at=new zi({map:q,color:13496040}),X=.13,nt=.062,it=.034,Lt=(G,W,Q,Ct,Tt,Ft,ne)=>{let ve=new fe(new Vn(Ct,Tt,Ft),ne);return ve.position.set(G,W,Q),_.add(ve),ve},Ot=h+it,Z=f+it,dt=Ot+X,Et=Z+X,Gt=Ot+X/2,bt=Z+X/2,zt=h+g,pe=f+g,Ht=h+v,Kt=Math.sqrt(d**2-(Z-pe)**2),te=Math.sqrt(d**2-(Ot-zt)**2),tt=Math.sqrt(u**2-(Ot-Ht)**2),pt=[[zt,-pe,d,zt-Kt,-Z,Ot,-pe+te],[Ht,0,u,Ot,-tt,Ot,tt],[zt,pe,d,Ot,pe-te,zt-Kt,Z],[-zt,pe,d,-zt+Kt,Z,-Ot,pe-te],[-Ht,0,u,-Ot,tt,-Ot,-tt],[-zt,-pe,d,-Ot,-pe+te,-zt+Kt,-Z]].map(([G,W,Q,Ct,Tt,Ft,ne])=>{let ve=Math.atan2(Tt-W,Ct-G),Oe=Math.atan2(ne-W,Ft-G);return Oe<ve&&(Oe+=Math.PI*2),{cx:G,cz:W,r:Q,a0:ve,a1:Oe}}),lt=new Us,mt=.035;lt.moveTo(-dt+mt,-Et),lt.lineTo(dt-mt,-Et),lt.absarc(dt-mt,-Et+mt,mt,-Math.PI/2,0,!1),lt.lineTo(dt,Et-mt),lt.absarc(dt-mt,Et-mt,mt,0,Math.PI/2,!1),lt.lineTo(-dt+mt,Et),lt.absarc(-dt+mt,Et-mt,mt,Math.PI/2,Math.PI,!1),lt.lineTo(-dt,-Et+mt),lt.absarc(-dt+mt,-Et+mt,mt,Math.PI,Math.PI*1.5,!1);let St=[];pt.forEach(G=>{for(let W=0;W<=28;W++){let Q=G.a0+(G.a1-G.a0)*W/28;St.push(new ct(G.cx+Math.cos(Q)*G.r,G.cz+Math.sin(Q)*G.r))}}),lt.holes.push(new Fi(St));let $t=nt+.12,Bt=new Ke;Bt.rotation.x=-Math.PI/2,Bt.position.y=-.12;let re=new fe(new Cr(lt,{depth:$t,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelOffset:-.006,bevelSegments:3,curveSegments:12}),[Y,V]);Bt.add(re),_.add(Bt);let ae=.1,me=.09,P=(f-ae-me)/1;[-1,1].forEach(G=>{[-1,1].forEach(W=>Lt(G*(h+it/2-.004),.03,W*(me+P/2),it,.06,P,at))}),[-1,1].forEach(G=>Lt(0,.03,G*(f+it/2-.004),o-ae*2,.06,it,at));let Le=new hn({color:131843}),ee=new ri({color:13214559,metalness:1,roughness:.24,envMap:C,envMapIntensity:1.5}),be=new Tn({color:2888202,roughness:.5,clearcoat:.3,clearcoatRoughness:.4,envMap:C,envMapIntensity:.6});p.forEach(([G,W,Q])=>{let Ct=new fe(new si(Q,40),Le);Ct.rotation.x=-Math.PI/2,Ct.position.set(G,.002,W),_.add(Ct)}),pt.forEach(G=>{let W=G.a1-G.a0,Q=new fe(new vi(G.r+.004,.012,12,44,W),be);Q.rotation.z=G.a0,Q.position.set(G.cx,G.cz,$t+.003);let Ct=new fe(new vi(G.r+.021,.0032,8,44,W),ee);Ct.rotation.z=G.a0,Ct.position.set(G.cx,G.cz,$t+.005),Bt.add(Q,Ct)});let vt=new si(.009,12),we=new ri({color:15520153,metalness:.8,roughness:.3,envMap:C}),kt=(G,W)=>{let Q=new fe(vt,we);Q.rotation.x=-Math.PI/2,Q.position.set(G,nt+.0075,W),_.add(Q)};[-.62,-.31,.31,.62].forEach(G=>{kt(G*h,-bt),kt(G*h,bt)}),[-.72,-.48,-.24,.24,.48,.72].forEach(G=>{kt(-Gt,G*f),kt(Gt,G*f)});let Wt=new fe(new vn(14,14),new zi({color:790800}));Wt.rotation.x=-Math.PI/2,Wt.position.y=-.82,_.add(Wt);let A=N(256,256,(G,W)=>{let Q=G.createRadialGradient(W/2,W/2,0,W/2,W/2,W/2);Q.addColorStop(0,"rgba(255,240,205,1)"),Q.addColorStop(.25,"rgba(255,225,170,.45)"),Q.addColorStop(1,"rgba(255,210,140,0)"),G.fillStyle=Q,G.fillRect(0,0,W,W)}),x=new ri({color:12160844,roughness:.26,metalness:1,side:ln,envMap:C,envMapIntensity:1.25}),F=new Ke,ot=new Rr([[.3,0],[.292,.035],[.262,.085],[.205,.135],[.12,.17],[.03,.185],[.012,.23]].map(G=>new ct(G[0],G[1])),40),et=new si(.285,28),gt=new hn({color:new Yt(16768926).multiplyScalar(1.6),toneMapped:!1}),yt=new xi(.03,.08,.05,16),J=(G,W,Q=.5)=>{let Ct=new fe(ot,x);Ct.position.set(G,U,W);let Tt=new fe(et,gt);Tt.rotation.x=Math.PI/2,Tt.position.set(G,U+.03,W);let Ft=new fe(yt,ee);Ft.position.set(G,U+.19,W);let ne=new dr(new xs({map:A,blending:kr,transparent:!0,depthWrite:!1,opacity:Q*.5,color:16758629}));ne.scale.set(1.15,.6,1),ne.position.set(G,U-.03,W),F.add(Ct,Tt,Ft,ne)};b.forEach(([G,W])=>J(G,W,.5)),J(0,-2.05,.5);let K=new fe(new xi(.008,.008,3.4,10),ee);K.rotation.x=Math.PI/2,K.position.set(0,U+.33,-.5),F.add(K),[[2.7,-1.2],[2.7,-2.5],[2.7,-3.8],[2.7,-5.1],[-2.7,-2.5],[-2.7,-3.8],[-2.7,-5.1],[5.2,-2.6],[5.2,-4.2],[-5.2,-4.2]].forEach(([G,W])=>J(G,W,.34)),_.add(F);let w=N(256,256,(G,W)=>{let Q=G.createRadialGradient(W/2,W/2,W*.05,W/2,W/2,W/2);Q.addColorStop(0,"rgba(24,150,92,.95)"),Q.addColorStop(.55,"rgba(12,104,66,.5)"),Q.addColorStop(1,"rgba(8,70,44,0)"),G.fillStyle=Q,G.fillRect(0,0,W,W)}),j=new vn(1,1);j.rotateX(-Math.PI/2),[[2.7,-3,2,4.4],[-2.7,-3.6,2,4.2],[0,-4.4,2,2.8],[5.2,-3.4,2,3.6]].forEach(([G,W,Q,Ct])=>{let Tt=new fe(j,new hn({map:w,transparent:!0,depthWrite:!1,opacity:.55}));Tt.position.set(G,-.12,W),Tt.scale.set(Q,1,Ct),F.add(Tt)});let $=a?[32,22]:[48,32],_t=new Bi(l,$[0],$[1]),st=[],ft=(G,W)=>{let Q=D.clone();Q.repeat.set(.25,.25),Q.offset.set(G%4*.25,1-(Math.floor(G/4)+1)*.25),Q.needsUpdate=!0;let Ct=new Tn({map:Q,roughness:.2,metalness:0,clearcoat:1,clearcoatRoughness:.025,envMap:C,envMapIntensity:1.05}),Tt=new fe(_t,Ct);_.add(Tt);let Ft=new cn().setFromAxisAngle(new L(Math.random(),Math.random(),Math.random()).normalize(),Math.random()*6.28);return{n:G,red:W,x:0,z:0,vx:0,vz:0,q:Ft,mesh:Tt,on:!0,fall:-1,scale:1}},rt=ft(0,!0);st.push(rt);for(let G=1;G<=15;G++)st.push(ft(G,!1));let Qt=!0,ht=()=>{Qt=!0,rt.x=M[0],rt.z=M[1];let G=l*2*Math.cos(Math.PI/6)*1.002,W=l*2*1.002,Q=-f*.26,Ct=1;for(let Tt=0;Tt<5;Tt++)for(let Ft=0;Ft<=Tt;Ft++){let ne=st[Ct++];ne.x=(Ft-Tt/2)*W,ne.z=Q-Tt*G}st.forEach(Tt=>{Tt.vx=Tt.vz=0,Tt.on=!0,Tt.fall=-1,Tt.scale=1,Tt.mesh.visible=!0,Tt!==rt&&Tt.q.setFromAxisAngle(new L(0,1,0),-Math.PI/2+(Math.random()-.5)*.7).multiply(new cn().setFromAxisAngle(new L(0,0,1),(Math.random()-.5)*.5))})},Vt=N(128,128,(G,W)=>{let Q=G.createRadialGradient(W/2,W/2,W*.08,W/2,W/2,W/2);Q.addColorStop(0,"rgba(0,0,0,.42)"),Q.addColorStop(.5,"rgba(0,0,0,.2)"),Q.addColorStop(1,"rgba(0,0,0,0)"),G.fillStyle=Q,G.fillRect(0,0,W,W)}),jt=new vn(1,1);jt.rotateX(-Math.PI/2);let Ut=new mr(jt,new hn({map:Vt,transparent:!0,depthWrite:!1,color:16777215}),st.length*4);Ut.position.y=.0025,Ut.renderOrder=1,Ut.frustumCulled=!1,_.add(Ut);let oe=new Ge,Re=await Rd(C,{segs:20}),De=new Ke;Re.group.rotation.x=-Math.PI/2,Re.group.position.z=1.5,De.add(Re.group);let Ps=new Set;Re.group.traverse(G=>{G.material&&(G.material.transparent=!0,Ps.add(G.material))});let Xi={set opacity(G){Ps.forEach(W=>{W.opacity=G})}};De.rotation.order="YXZ",De.rotation.x=-.09,De.visible=!1,_.add(De);let Ls=new He;Ls.setAttribute("position",new ge([0,0,0,0,0,1],3));let dn=new _r(Ls,new Pr({color:16777215,transparent:!0,opacity:.62,dashSize:.03,gapSize:.025}));dn.visible=!1,dn.frustumCulled=!1,_.add(dn);let Un=new fe(new Ir(l*.9,l,40),new hn({color:16777215,transparent:!0,opacity:.7,side:ln}));Un.rotation.x=-Math.PI/2,Un.visible=!1,_.add(Un);let Yn=.62,Ds=.95,Ns=.74,ta=.018,ci=1/240,Fs=.1,ea=.085,hi=7.2;function pl(G){for(let W of st){if(!W.on||W.fall>=0)continue;let Q=Math.hypot(W.vx,W.vz);if(Q===0)continue;W.x+=W.vx*G,W.z+=W.vz*G;let Ct=Q*G/l;Os.set(W.vz/Q,0,-W.vx/Q),Bs.setFromAxisAngle(Os,Ct),W.q.premultiply(Bs);let Tt=Math.max(0,Q-Yn*G);if(Tt<ta)W.vx=W.vz=0;else{let xe=Tt/Q;W.vx*=xe,W.vz*=xe}let Ft=Math.abs(W.z)>f-Fs||Math.abs(W.z)<ea,ne=Math.abs(W.x)>h-Fs,ve=Ft?h+.02:h-l,Oe=ne?f+.02:f-l;Math.abs(W.x)>ve&&(m.rail(Math.abs(W.vx)),W.x=Math.sign(W.x)*ve,W.vx*=-Ns,W.vz*=.96),Math.abs(W.z)>Oe&&(m.rail(Math.abs(W.vz)),W.z=Math.sign(W.z)*Oe,W.vz*=-Ns,W.vx*=.96);for(let[xe,qe,fn]of p)if(Math.hypot(W.x-xe,W.z-qe)<fn*.92){W.fall=0,W.fx=xe,W.fz=qe,m.pocket(),$c>0&&dispatchEvent(new CustomEvent("hero:pocket",{detail:{n:W.n,cue:W===rt}}));break}}for(let W=0;W<st.length;W++){let Q=st[W];if(!(!Q.on||Q.fall>=0))for(let Ct=W+1;Ct<st.length;Ct++){let Tt=st[Ct];if(!Tt.on||Tt.fall>=0)continue;let Ft=Tt.x-Q.x,ne=Tt.z-Q.z,ve=Ft*Ft+ne*ne,Oe=l*2;if(ve>=Oe*Oe||ve===0)continue;let xe=Math.sqrt(ve),qe=Ft/xe,fn=ne/xe,wn=(Oe-xe)/2;Q.x-=qe*wn,Q.z-=fn*wn,Tt.x+=qe*wn,Tt.z+=fn*wn;let Fn=(Q.vx-Tt.vx)*qe+(Q.vz-Tt.vz)*fn;if(Fn<=0)continue;Qt&&(Q===rt||Tt===rt)?(Qt=!1,m.breakShot()||m.click(Fn)):m.click(Fn);let wi=Fn*(1+Ds)/2;Q.vx-=wi*qe,Q.vz-=wi*fn,Tt.vx+=wi*qe,Tt.vz+=wi*fn}}}let Os=new L,Bs=new cn,qc=new L,zs=()=>st.some(G=>G.on&&(G.vx!==0||G.vz!==0||G.fall>=0)),It={phase:"hidden",t:0,dx:0,dz:-1,speed:0,gap:.08,alpha:0};function Ai(G,W,Q){if(It.phase==="draw"||It.phase==="hit")return;let Ct=Math.hypot(G,W)||1;It.dx=G/Ct,It.dz=W/Ct,It.speed=Math.min(hi,Q),It.phase="draw",It.t=0,De.visible=!0,dn.visible=!1,Un.visible=!1,Gs()}function y(){m.cue(It.speed),rt.vx=It.dx*It.speed,rt.vz=It.dz*It.speed,ks=Ne,Ve=-1}let I=G=>G*G*(3-2*G);function H(G){if(It.phase==="hidden")return;if(It.t+=G,It.phase==="aim"&&(It.alpha=Math.min(1,It.alpha+G*5),It.gap=l+.05+Math.sin(Ne*2)*.004),It.phase==="draw"){let Ct=Math.min(1,It.t/.42);It.alpha=Math.min(1,It.alpha+G*6),It.gap=l+.03+I(Ct)*.24,Ct>=1&&(It.phase="hit",It.t=0)}else if(It.phase==="hit"){let Ct=Math.min(1,It.t/.075);It.gap=l+.27-Ct*Ct*.27,Ct>=1&&(y(),It.phase="follow",It.t=0)}else if(It.phase==="follow"){let Ct=Math.min(1,It.t/.5);It.gap=l+Ct*.1,It.alpha=1-I(Ct),Ct>=1&&(It.phase="hidden",De.visible=!1,It.alpha=0)}Xi.opacity=It.alpha;let W=It.phase==="follow"?It.ax:rt.x,Q=It.phase==="follow"?It.az:rt.z;It.phase!=="follow"&&(It.ax=rt.x,It.az=rt.z),De.position.set(W-It.dx*It.gap,l+.012,Q-It.dz*It.gap),De.rotation.y=Math.atan2(-It.dx,-It.dz)}let O=new ct,z=new Br,Mt=new gn(new L(0,1,0),-l),Pt=!1,ut=!1;function At(G){return z.setFromCamera(O,S),z.ray.intersectPlane(Mt,G)}let Dt=new L;function Zt(){if(!Pt||a||zs()||It.phase==="draw"||It.phase==="hit"||!rt.on){(dn.visible||It.phase==="aim")&&(dn.visible=Un.visible=!1,It.phase==="aim"&&(It.phase="hidden",De.visible=!1,It.alpha=0,Xi.opacity=0),Gs());return}if(!At(Dt))return;let G=Dt.x-rt.x,W=Dt.z-rt.z,Q=Math.hypot(G,W);if(Q<.02)return;let Ct=G/Q,Tt=W/Q,Ft=1/0;for(let xe of st){if(xe===rt||!xe.on)continue;let qe=xe.x-rt.x,fn=xe.z-rt.z,wn=qe*Ct+fn*Tt;if(wn<=0)continue;let Fn=qe*qe+fn*fn-wn*wn,wi=(l*2)**2;if(Fn>wi)continue;let th=wn-Math.sqrt(wi-Fn);th<Ft&&(Ft=th)}if(Ft===1/0){let xe=Ct!==0?((Ct>0?h-l:-h+l)-rt.x)/Ct:1/0,qe=Tt!==0?((Tt>0?f-l:-f+l)-rt.z)/Tt:1/0;Ft=Math.min(xe,qe)}let ne=rt.x+Ct*Ft,ve=rt.z+Tt*Ft,Oe=Ls.attributes.position;Oe.setXYZ(0,rt.x,l*.6,rt.z),Oe.setXYZ(1,ne,l*.6,ve),Oe.needsUpdate=!0,dn.computeLineDistances(),dn.visible=!0,Un.position.set(ne,.004,ve),Un.visible=!0,It.dx=Ct,It.dz=Tt,It.phase==="hidden"&&(It.phase="aim",It.t=0,De.visible=!0),Gs()}let ie=document.querySelector("[data-hero-hint]");function Nt(G){let W=e.getBoundingClientRect();O.set((G.clientX-W.left)/W.width*2-1,-((G.clientY-W.top)/W.height)*2+1)}let le=G=>G.target.closest&&G.target.closest("a, button, input, label");e.addEventListener("pointermove",G=>{if(G.pointerType!=="touch"){if(le(G)){Pt=!1,ut=!0;return}Nt(G),Pt=!0,ut=!0}},{passive:!0}),e.addEventListener("pointerleave",()=>{Pt=!1,ut=!0}),e.addEventListener("click",G=>{if(m.unlock(),le(G)||!rt.on||(Nt(G),!At(Dt)))return;let W=Dt.x-rt.x,Q=Dt.z-rt.z,Ct=Math.hypot(W,Q);if(Ct<.01)return;$c++,ia=1/0,Yc=Ne+14,ie&&(ie.dataset.used="1",ie.classList.add("is-off"));let Tt=Math.min(hi,3+Ct*2.1);zs()?(m.cue(Tt),rt.vx=W/Ct*Tt,rt.vz=Q/Ct*Tt,ks=Ne,Ve=-1,Gs()):Ai(W,Q,Tt)});let Te=0,Ue=0,Me=new L,Be=new L,Rt=1,Ie=1,ue=1,Je=(G,W,Q)=>G+(W-G)*Q;function ze(G){let W=ue<.95,Q=W?{p:[.1,1.2,2.72],l:[0,0,-.5],fov:44,ox:0,oy:-.3}:{p:[.3,.5,2.05],l:[0,.15,-.38],fov:36,ox:-.27,oy:0},Ct=34,Tt=Math.tan(Ct*Math.PI/360),Ft=Tt*ue,ne=c+(X+it)*2,ve=o+(X+it)*2,Oe=W?Math.max(ve/2/Ft,ne/2/Tt)*1.1:Math.max(ne/2/Ft,ve/2/Tt)*1.14,xe=I(G),qe=I(Math.min(1,G*1.15));S.position.set(Je(Q.p[0],0,xe),Je(Q.p[1],Oe,qe),Je(Q.p[2],.001,xe)),Me.set(Je(Q.l[0],0,xe),Je(Q.l[1],0,xe),Je(Q.l[2],0,xe)),W?Be.set(0,1-xe,-xe):Be.set(xe,1-xe,0),S.up.copy(Be.normalize()),S.lookAt(Me),S.fov=Je(Q.fov,Ct,xe),S.setViewOffset(Rt,Ie,Je(Q.ox,0,xe)*Rt,Je(Q.oy,0,xe)*Ie,Rt,Ie),S.updateProjectionMatrix(),F.visible=xe<.55}function Ei(){Rt=e.clientWidth,Ie=e.clientHeight,ue=Rt/Math.max(1,Ie),S.aspect=ue,E.setSize(Rt,Ie,!1),ze(Te),Gs()}function En(){if(!n)return;let G=n.getBoundingClientRect(),W=Math.max(1,G.height-innerHeight);Ue=Math.min(1,Math.max(0,-G.top/W)/.62)}let Ne=0,he=0,Fe=0,rn=0,Ae=!1,_e=!0,Ve=-1,ks=0,Yc=0,$c=0,qi=-1,na=-1,ml=0,gl=0,Zc=!1,ia=r?1/0:1.15,Jc=0,Gs=()=>{_e=!0};function Ld(){let G=0,W=l/(U-l);for(let Q of st){let Ct=Q.mesh;if(Q.fall>=0){let ve=Math.min(1,Q.fall/.22);Ct.position.set(Q.x+(Q.fx-Q.x)*ve,l-ve*l*1.6,Q.z+(Q.fz-Q.z)*ve),Ct.scale.setScalar(1-ve*.25)}else Ct.position.set(Q.x,l,Q.z),Ct.scale.setScalar(Q.scale);Ct.quaternion.copy(Q.q);let Ft=(Q.on&&Q.fall<0?1:0)*Q.scale;b.forEach(([ve,Oe],xe)=>{let qe=(Q.x-ve)*W*.9,fn=(Q.z-Oe)*W*.9,wn=Math.hypot(Q.x-ve,Q.z-Oe),Fn=l*(2.4+wn*.3)*Ft;oe.position.set(Q.x+qe,0,Q.z+fn),oe.scale.set(Fn||1e-4,1,Fn||1e-4),oe.rotation.set(0,0,0),oe.updateMatrix(),Ut.setMatrixAt(G++,oe.matrix)});let ne=l*2.05*Ft;oe.position.set(Q.x,0,Q.z),oe.scale.set(ne||1e-4,1,ne||1e-4),oe.updateMatrix(),Ut.setMatrixAt(G++,oe.matrix)}Ut.instanceMatrix.needsUpdate=!0}function Kc(G){rn=requestAnimationFrame(Kc);let W=Math.max(0,(G-he)/1e3)||.016,Q=Math.min(.05,W);he=G,Ne+=Q,Jc+=Math.min(W,1),En();let Ct=Ue-Te;Math.abs(Ct)>6e-4&&(Te+=Ct*(1-Math.exp(-Q*7)),ze(Te),_e=!0),Jc>ia&&(ia=1/0,Ai(-rt.x+(Math.random()-.5)*.018,-f*.26-rt.z,6.6));let Tt=zs();if(!Tt&&Ve<0&&It.phase!=="draw"&&It.phase!=="hit"&&(Ve=Ne),Tt&&(Ve=-1),!r&&!Tt&&Ve>=0&&It.phase!=="draw"&&It.phase!=="hit"&&ia===1/0&&(st.filter(ne=>ne!==rt&&ne.on).length<=4&&qi<0&&Ne-Ve>1.2&&(qi=Ne),!Pt&&Ne>Yc&&Ne-Ve>7.5&&Te<.4&&rt.on&&qi<0)){let ne=st.filter(Oe=>Oe!==rt&&Oe.on),ve=ne[Math.floor(Math.random()*ne.length)];ve&&Ai(ve.x-rt.x,ve.z-rt.z,3.2+Math.random()*2.2)}if(qi>=0){let Ft=(Ne-qi)/.35;Ft<1?(st.forEach(ne=>{ne.scale=1-Ft}),_e=!0):Ft<2?(st.resetDone||(ht(),st.resetDone=!0),st.forEach(ne=>{ne.scale=Ft-1}),_e=!0):(st.forEach(ne=>{ne.scale=1}),st.resetDone=!1,qi=-1,Ve=Ne,_e=!0)}if(Tt){Fe+=Q;let Ft=0;for(;Fe>=ci&&Ft++<16;)pl(ci),Fe-=ci;Ft>=16&&(Fe=0),_e=!0}for(let Ft of st)Ft.fall>=0&&(Ft.fall+=Q,Ft.fall>.24&&(Ft.fall=-1,Ft.on=!1,Ft.vx=Ft.vz=0,Ft.mesh.visible=!1,Ft===rt&&(na=Ne+.9)),_e=!0);na>=0&&Ne>na&&(na=-1,rt.x=M[0],rt.z=M[1],rt.on=!0,rt.mesh.visible=!0,rt.scale=1,rt.vx=rt.vz=0,_e=!0),It.phase!=="hidden"&&(H(Q),(It.phase!=="aim"||It.alpha<1)&&(_e=!0)),(ut||!Tt)&&(Zt(),ut=!1),_e&&(_e=!1,Ld(),E.render(_,S),Zc||(Zc=!0,document.documentElement.classList.add("hero3d-ready"),window.__heroReady=!0),ml++,window.__heroFrames=(window.__heroFrames||0)+1,W>.042&&gl++,ml>=45&&(gl>22&&T>.8&&(T=Math.max(.75,T*.78),E.setPixelRatio(T),E.setSize(Rt,Ie,!1)),ml=0,gl=0))}function _l(){Ae||(Ae=!0,he=performance.now(),rn=requestAnimationFrame(Kc),_e=!0)}function Qc(){Ae=!1,cancelAnimationFrame(rn)}ht(),Ei(),En(),Te=Ue,ze(Te),De.visible=dn.visible=Un.visible=!0,E.compile(_,S),De.visible=dn.visible=Un.visible=!1,window.__hero3d={strike:Ai,balls:st,get scrollT(){return Te}};let Vs=document.querySelector("[data-hero-sound]"),jc=()=>{Vs&&(Vs.classList.toggle("is-muted",m.muted),Vs.setAttribute("aria-pressed",String(!m.muted)),Vs.setAttribute("aria-label",m.muted?"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A":"\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A"))};Vs?.addEventListener("click",()=>{m.unlock(),m.setMuted(!m.muted),jc()}),jc(),["pointerup","touchend","click","keydown"].forEach(G=>addEventListener(G,()=>m.unlock(),{passive:!0,capture:!0})),addEventListener("resize",Ei,{passive:!0}),new IntersectionObserver(([G])=>{G.isIntersecting&&!document.hidden?_l():Qc()}).observe(e),document.addEventListener("visibilitychange",()=>{document.hidden?Qc():e.getBoundingClientRect().bottom>0&&_l()}),_l()})();})();
