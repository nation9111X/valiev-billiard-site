(()=>{var bl=0,Ja=1,Tl=2;var cs=1,Al=2,Pi=3,Xn=0,be=1,Ze=2,si=0,Li=1,$a=2,Ka=3,Qa=4,El=5;var ri=100,wl=101,Rl=102,Cl=103,Il=104,Pl=200,Ll=201,Dl=202,Nl=203,ja=204,to=205,Ul=206,Fl=207,Ol=208,Bl=209,zl=210,Gl=211,kl=212,Vl=213,Hl=214,Ys=0,Zs=1,Js=2,bi=3,$s=4,Ks=5,Qs=6,js=7,eo=0,Wl=1,Xl=2,dn=0,no=1,io=2,so=3,hs=4,ro=5,ao=6,oo=7;var lo=300,ai=301,Di=302,Er=303,wr=304,Ti=1e3,on=1001,tr=1002,ve=1003,ql=1004;var us=1005;var Ne=1006,Rr=1007;var En=1008;var Fe=1009,co=1010,ho=1011,Ni=1012,Cr=1013,tn=1014,en=1015,nn=1016,Ir=1017,Pr=1018,oi=1020,uo=35902,fo=35899,po=1021,mo=1022,sn=1023,Mn=1026,wn=1027,go=1028,Lr=1029,qn=1030,Dr=1031;var Nr=1033,ds=33776,fs=33777,ps=33778,ms=33779,Ur=35840,Fr=35841,Or=35842,Br=35843,zr=36196,Gr=37492,kr=37496,Vr=37488,Hr=37489,gs=37490,Wr=37491,Xr=37808,qr=37809,Yr=37810,Zr=37811,Jr=37812,$r=37813,Kr=37814,Qr=37815,jr=37816,ta=37817,ea=37818,na=37819,ia=37820,sa=37821,ra=36492,aa=36494,oa=36495,la=36283,ca=36284,_s=36285,ha=36286;var Hi=2300,er=2301,Xs=2302,Va=2303,Ha=2400,Wa=2401,Xa=2402;var Yl=3200;var ua=0,Zl=1,Rn="",Me="srgb",Wi="srgb-linear",Xi="linear",$t="srgb";var qs=7680;var Jl=519,$l=512,Kl=513,Ql=514,_o=515,jl=516,tc=517,xo=518,vo=519,ec=35044;var yo="300 es",qe=2e3,Ai=2001;function jc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function th(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function qi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nc(){let i=qi("canvas");return i.style.display="block",i}var tl={},Ei=null;function So(...i){let t="THREE."+i.shift();Ei?Ei("log",t,...i):console.log(t,...i)}function ic(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function It(...i){i=ic(i);let t="THREE."+i.shift();if(Ei)Ei("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Pt(...i){i=ic(i);let t="THREE."+i.shift();if(Ei)Ei("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ti(...i){let t=i.join(" ");t in tl||(tl[t]=!0,It(...i))}function sc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var rc={[Ys]:Ys,[Js]:Qs,[$s]:$s,[bi]:Ks,[Zs]:Zs,[Qs]:Js,[js]:js,[Ks]:bi},cn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ya=Math.PI/180,Yi=180/Math.PI;function xs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function eh(i,t){return(i%t+t)%t}function Sa(i,t,e){return(1-e)*i+e*t}function ac(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nh(i,t){if(t.constructor===Float32Array)return i;let e=Mo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function ih(i,t){if(t.constructor===Float32Array)return i;let e=Mo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var wo=class wo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wo.prototype.isVector2=!0;var Gt=wo,hn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],m=r[a+1],_=r[a+2],y=r[a+3];if(p!==y||c!==u||l!==m||h!==_){let f=c*u+l*m+h*_+p*y;f<0&&(u=-u,m=-m,_=-_,y=-y,f=-f);let d=1-o;if(f<.9995){let S=Math.acos(f),w=Math.sin(S);d=Math.sin(d*S)/w,o=Math.sin(o*S)/w,c=c*d+u*o,l=l*d+m*o,h=h*d+_*o,p=p*d+y*o}else{c=c*d+u*o,l=l*d+m*o,h=h*d+_*o,p=p*d+y*o;let S=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=S,l*=S,h*=S,p*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[a],u=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*p+c*m-l*u,t[e+1]=c*_+h*u+l*p-o*m,t[e+2]=l*_+h*m+o*u-c*p,t[e+3]=h*_-o*p-c*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),p=o(r/2),u=c(n/2),m=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=u*h*p+l*m*_,this._y=l*m*p-u*h*_,this._z=l*h*_+u*m*p,this._w=l*h*p-u*m*_;break;case"YXZ":this._x=u*h*p+l*m*_,this._y=l*m*p-u*h*_,this._z=l*h*_-u*m*p,this._w=l*h*p+u*m*_;break;case"ZXY":this._x=u*h*p-l*m*_,this._y=l*m*p+u*h*_,this._z=l*h*_+u*m*p,this._w=l*h*p-u*m*_;break;case"ZYX":this._x=u*h*p-l*m*_,this._y=l*m*p+u*h*_,this._z=l*h*_-u*m*p,this._w=l*h*p+u*m*_;break;case"YZX":this._x=u*h*p+l*m*_,this._y=l*m*p+u*h*_,this._z=l*h*_-u*m*p,this._w=l*h*p-u*m*_;break;case"XZY":this._x=u*h*p-l*m*_,this._y=l*m*p-u*h*_,this._z=l*h*_+u*m*p,this._w=l*h*p+u*m*_;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],p=e[10],u=n+o+p;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ro=class Ro{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(el.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(el.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+c*l+a*p-o*h,this.y=n+c*h+o*l-r*p,this.z=s+c*p+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ro.prototype.isVector3=!0;var z=Ro,Ma=new z,el=new hn,Co=class Co{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],p=n[7],u=n[2],m=n[5],_=n[8],y=s[0],f=s[3],d=s[6],S=s[1],w=s[4],b=s[7],E=s[2],A=s[5],g=s[8];return r[0]=a*y+o*S+c*E,r[3]=a*f+o*w+c*A,r[6]=a*d+o*b+c*g,r[1]=l*y+h*S+p*E,r[4]=l*f+h*w+p*A,r[7]=l*d+h*b+p*g,r[2]=u*y+m*S+_*E,r[5]=u*f+m*w+_*A,r[8]=u*d+m*b+_*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],p=h*a-o*l,u=o*c-h*r,m=l*r-a*c,_=e*p+n*u+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=p*y,t[1]=(s*l-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=m*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return ti("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ba.makeScale(t,e)),this}rotate(t){return ti("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ba.makeRotation(-t)),this}translate(t,e){return ti("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Co.prototype.isMatrix3=!0;var Dt=Co,ba=new Dt,nl=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),il=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sh(){let i={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===$t&&(s.r=Sn(s.r),s.g=Sn(s.g),s.b=Sn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$t&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?Xi:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wi]:{primaries:t,whitePoint:n,transfer:Xi,toXYZ:nl,fromXYZ:il,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:t,whitePoint:n,transfer:$t,toXYZ:nl,fromXYZ:il,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}}),i}var Ht=sh();function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ci,nr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ci===void 0&&(ci=qi("canvas")),ci.width=t.width,ci.height=t.height;let s=ci.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ci}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Sn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Sn(e[n]/255)*255):e[n]=Sn(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},rh=0,wi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=xs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ta(s[a].image)):r.push(Ta(s[a]))}else r=Ta(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}var ah=0,Aa=new z,Ce=class i extends cn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=on,s=on,r=Ne,a=En,o=sn,c=Fe,l=i.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=xs(),this.name="",this.source=new wi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Aa).x}get height(){return this.source.getSize(Aa).y}get depth(){return this.source.getSize(Aa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ti:t.x=t.x-Math.floor(t.x);break;case on:t.x=t.x<0?0:1;break;case tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ti:t.y=t.y-Math.floor(t.y);break;case on:t.y=t.y<0?0:1;break;case tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=lo;Ce.DEFAULT_ANISOTROPY=1;var Io=class Io{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],p=c[8],u=c[1],m=c[5],_=c[9],y=c[2],f=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(p-y)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+y)<.1&&Math.abs(_+f)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,b=(m+1)/2,E=(d+1)/2,A=(h+u)/4,g=(p+y)/4,M=(_+f)/4;return w>b&&w>E?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=A/n,r=g/n):b>E?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=M/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=g/r,s=M/r),this.set(n,s,r,e),this}let S=Math.sqrt((f-_)*(f-_)+(p-y)*(p-y)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(f-_)/S,this.y=(p-y)/S,this.z=(u-h)/S,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Io.prototype.isVector4=!0;var re=Io,ir=class extends cn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ce({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new wi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ze=class extends ir{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zi=class extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var sr=class extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ar=class Ar{constructor(t,e,n,s,r,a,o,c,l,h,p,u,m,_,y,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,p,u,m,_,y,f)}set(t,e,n,s,r,a,o,c,l,h,p,u,m,_,y,f){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=p,d[14]=u,d[3]=m,d[7]=_,d[11]=y,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ar().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/hi.setFromMatrixColumn(t,0).length(),r=1/hi.setFromMatrixColumn(t,1).length(),a=1/hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*p,_=o*h,y=o*p;e[0]=c*h,e[4]=-c*p,e[8]=l,e[1]=m+_*l,e[5]=u-y*l,e[9]=-o*c,e[2]=y-u*l,e[6]=_+m*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,m=c*p,_=l*h,y=l*p;e[0]=u+y*o,e[4]=_*o-m,e[8]=a*l,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=y+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,m=c*p,_=l*h,y=l*p;e[0]=u-y*o,e[4]=-a*p,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,m=a*p,_=o*h,y=o*p;e[0]=c*h,e[4]=_*l-m,e[8]=u*l+y,e[1]=c*p,e[5]=y*l+u,e[9]=m*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,m=a*l,_=o*c,y=o*l;e[0]=c*h,e[4]=y-u*p,e[8]=_*p+m,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*p+_,e[10]=u-y*p}else if(t.order==="XZY"){let u=a*c,m=a*l,_=o*c,y=o*l;e[0]=c*h,e[4]=-p,e[8]=l*h,e[1]=u*p+y,e[5]=a*h,e[9]=m*p-_,e[2]=_*p-m,e[6]=o*h,e[10]=y*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oh,t,lh)}lookAt(t,e,n){let s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Pn.crossVectors(n,Oe),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Pn.crossVectors(n,Oe)),Pn.normalize(),As.crossVectors(Oe,Pn),s[0]=Pn.x,s[4]=As.x,s[8]=Oe.x,s[1]=Pn.y,s[5]=As.y,s[9]=Oe.y,s[2]=Pn.z,s[6]=As.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],p=n[5],u=n[9],m=n[13],_=n[2],y=n[6],f=n[10],d=n[14],S=n[3],w=n[7],b=n[11],E=n[15],A=s[0],g=s[4],M=s[8],N=s[12],C=s[1],D=s[5],U=s[9],H=s[13],I=s[2],G=s[6],q=s[10],V=s[14],tt=s[3],W=s[7],Q=s[11],j=s[15];return r[0]=a*A+o*C+c*I+l*tt,r[4]=a*g+o*D+c*G+l*W,r[8]=a*M+o*U+c*q+l*Q,r[12]=a*N+o*H+c*V+l*j,r[1]=h*A+p*C+u*I+m*tt,r[5]=h*g+p*D+u*G+m*W,r[9]=h*M+p*U+u*q+m*Q,r[13]=h*N+p*H+u*V+m*j,r[2]=_*A+y*C+f*I+d*tt,r[6]=_*g+y*D+f*G+d*W,r[10]=_*M+y*U+f*q+d*Q,r[14]=_*N+y*H+f*V+d*j,r[3]=S*A+w*C+b*I+E*tt,r[7]=S*g+w*D+b*G+E*W,r[11]=S*M+w*U+b*q+E*Q,r[15]=S*N+w*H+b*V+E*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],p=t[6],u=t[10],m=t[14],_=t[3],y=t[7],f=t[11],d=t[15],S=c*m-l*u,w=o*m-l*p,b=o*u-c*p,E=a*m-l*h,A=a*u-c*h,g=a*p-o*h;return e*(y*S-f*w+d*b)-n*(_*S-f*E+d*A)+s*(_*w-y*E+d*g)-r*(_*b-y*A+f*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],p=t[9],u=t[10],m=t[11],_=t[12],y=t[13],f=t[14],d=t[15],S=e*o-n*a,w=e*c-s*a,b=e*l-r*a,E=n*c-s*o,A=n*l-r*o,g=s*l-r*c,M=h*y-p*_,N=h*f-u*_,C=h*d-m*_,D=p*f-u*y,U=p*d-m*y,H=u*d-m*f,I=S*H-w*U+b*D+E*C-A*N+g*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return t[0]=(o*H-c*U+l*D)*G,t[1]=(s*U-n*H-r*D)*G,t[2]=(y*g-f*A+d*E)*G,t[3]=(u*A-p*g-m*E)*G,t[4]=(c*C-a*H-l*N)*G,t[5]=(e*H-s*C+r*N)*G,t[6]=(f*b-_*g-d*w)*G,t[7]=(h*g-u*b+m*w)*G,t[8]=(a*U-o*C+l*M)*G,t[9]=(n*C-e*U-r*M)*G,t[10]=(_*A-y*b+d*S)*G,t[11]=(p*b-h*A-m*S)*G,t[12]=(o*N-a*D-c*M)*G,t[13]=(e*D-n*N+s*M)*G,t[14]=(y*w-_*E-f*S)*G,t[15]=(h*E-p*w+u*S)*G,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,p=o+o,u=r*l,m=r*h,_=r*p,y=a*h,f=a*p,d=o*p,S=c*l,w=c*h,b=c*p,E=n.x,A=n.y,g=n.z;return s[0]=(1-(y+d))*E,s[1]=(m+b)*E,s[2]=(_-w)*E,s[3]=0,s[4]=(m-b)*A,s[5]=(1-(u+d))*A,s[6]=(f+S)*A,s[7]=0,s[8]=(_+w)*g,s[9]=(f-S)*g,s[10]=(1-(u+y))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=hi.set(s[0],s[1],s[2]).length(),o=hi.set(s[4],s[5],s[6]).length(),c=hi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),$e.copy(this);let l=1/a,h=1/o,p=1/c;return $e.elements[0]*=l,$e.elements[1]*=l,$e.elements[2]*=l,$e.elements[4]*=h,$e.elements[5]*=h,$e.elements[6]*=h,$e.elements[8]*=p,$e.elements[9]*=p,$e.elements[10]*=p,e.setFromRotationMatrix($e),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=qe,c=!1){let l=this.elements,h=2*r/(e-t),p=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),_,y;if(c)_=r/(a-r),y=a*r/(a-r);else if(o===qe)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ai)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=qe,c=!1){let l=this.elements,h=2/(e-t),p=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),_,y;if(c)_=1/(a-r),y=a/(a-r);else if(o===qe)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ai)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=p,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ar.prototype.isMatrix4=!0;var ie=Ar,hi=new z,$e=new ie,oh=new z(0,0,0),lh=new z(1,1,1),Pn=new z,As=new z,Oe=new z,sl=new ie,rl=new hn,bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],p=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rl.setFromEuler(this),this.setFromQuaternion(rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var Ji=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ch=0,al=new z,ui=new hn,gn=new ie,Es=new z,zi=new z,hh=new z,uh=new hn,ol=new z(1,0,0),ll=new z(0,1,0),cl=new z(0,0,1),hl={type:"added"},dh={type:"removed"},di={type:"childadded",child:null},Ea={type:"childremoved",child:null},Ie=class i extends cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new bn,n=new hn,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Dt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ji,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.multiply(ui),this}rotateOnWorldAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.premultiply(ui),this}rotateX(t){return this.rotateOnAxis(ol,t)}rotateY(t){return this.rotateOnAxis(ll,t)}rotateZ(t){return this.rotateOnAxis(cl,t)}translateOnAxis(t,e){return al.copy(t).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ol,t)}translateY(t){return this.translateOnAxis(ll,t)}translateZ(t){return this.translateOnAxis(cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Es.copy(t):Es.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(zi,Es,this.up):gn.lookAt(Es,zi,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),ui.setFromRotationMatrix(gn),this.quaternion.premultiply(ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hl),di.child=t,this.dispatchEvent(di),di.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dh),Ea.child=t,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hl),di.child=t,this.dispatchEvent(di),di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,t,hh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,uh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),p=a(t.shapes),u=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ie.DEFAULT_UP=new z(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var De=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},fh={type:"move"},Ri=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let f=e.getJointPose(y,n),d=this._getHandJoint(l,y);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=h.position.distanceTo(p.position),m=.02,_=.005;l.inputState.pinching&&u>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},ws={h:0,s:0,l:0};function wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ht.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ht.workingColorSpace){if(t=eh(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wa(a,r,t+1/3),this.g=wa(a,r,t),this.b=wa(a,r,t-1/3)}return Ht.colorSpaceToWorking(this,s),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=oc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}copyLinearToSRGB(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return Ht.workingToColorSpace(we.copy(this),t),Math.round(Wt(we.r*255,0,255))*65536+Math.round(Wt(we.g*255,0,255))*256+Math.round(Wt(we.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.workingToColorSpace(we.copy(this),e);let n=we.r,s=we.g,r=we.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let p=a-o;switch(l=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ht.workingColorSpace){return Ht.workingToColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Me){Ht.workingToColorSpace(we.copy(this),t);let e=we.r,n=we.g,s=we.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(ws);let n=Sa(Ln.h,ws.h,e),s=Sa(Ln.s,ws.s,e),r=Sa(Ln.l,ws.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new Ut;Ut.NAMES=oc;var ei=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ke=new z,_n=new z,Ra=new z,xn=new z,fi=new z,pi=new z,ul=new z,Ca=new z,Ia=new z,Pa=new z,La=new re,Da=new re,Na=new re,Fn=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),_n.subVectors(n,e),Ra.subVectors(t,e);let a=Ke.dot(Ke),o=Ke.dot(_n),c=Ke.dot(Ra),l=_n.dot(_n),h=_n.dot(Ra),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,m=(l*c-o*h)*u,_=(a*h-o*c)*u;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(a,xn.y),c.addScaledVector(o,xn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return La.setScalar(0),Da.setScalar(0),Na.setScalar(0),La.fromBufferAttribute(t,e),Da.fromBufferAttribute(t,n),Na.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(La,r.x),a.addScaledVector(Da,r.y),a.addScaledVector(Na,r.z),a}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),_n.subVectors(t,e),Ke.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Ke.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;fi.subVectors(s,n),pi.subVectors(r,n),Ca.subVectors(t,n);let c=fi.dot(Ca),l=pi.dot(Ca);if(c<=0&&l<=0)return e.copy(n);Ia.subVectors(t,s);let h=fi.dot(Ia),p=pi.dot(Ia);if(h>=0&&p<=h)return e.copy(s);let u=c*p-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(fi,a);Pa.subVectors(t,r);let m=fi.dot(Pa),_=pi.dot(Pa);if(_>=0&&m<=_)return e.copy(r);let y=m*l-c*_;if(y<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(pi,o);let f=h*_-m*p;if(f<=0&&p-h>=0&&m-_>=0)return ul.subVectors(r,s),o=(p-h)/(p-h+(m-_)),e.copy(s).addScaledVector(ul,o);let d=1/(f+y+u);return a=y*d,o=u*d,e.copy(n).addScaledVector(fi,a).addScaledVector(pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},On=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(r,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(t.matrixWorld),this.union(Rs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gi),Cs.subVectors(this.max,Gi),mi.subVectors(t.a,Gi),gi.subVectors(t.b,Gi),_i.subVectors(t.c,Gi),Dn.subVectors(gi,mi),Nn.subVectors(_i,gi),$n.subVectors(mi,_i);let e=[0,-Dn.z,Dn.y,0,-Nn.z,Nn.y,0,-$n.z,$n.y,Dn.z,0,-Dn.x,Nn.z,0,-Nn.x,$n.z,0,-$n.x,-Dn.y,Dn.x,0,-Nn.y,Nn.x,0,-$n.y,$n.x,0];return!Ua(e,mi,gi,_i,Cs)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,mi,gi,_i,Cs))?!1:(Is.crossVectors(Dn,Nn),e=[Is.x,Is.y,Is.z],Ua(e,mi,gi,_i,Cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vn=[new z,new z,new z,new z,new z,new z,new z,new z],Qe=new z,Rs=new On,mi=new z,gi=new z,_i=new z,Dn=new z,Nn=new z,$n=new z,Gi=new z,Cs=new z,Is=new z,Kn=new z;function Ua(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Kn.fromArray(i,r);let o=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),c=t.dot(Kn),l=e.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var ce=new z,Ps=new Gt,ph=0,ln=class extends cn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ph++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ec,this.updateRanges=[],this.gpuType=en,this.version=0,this._normalizationScale=t!==void 0?Mo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):nh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ih(t,this.array)}};var $i=class extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ki=class extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}},mh=new On,ki=new z,Fa=new z,Ci=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):mh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);let e=ki.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ki,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(Fa)),this.expandByPoint(ki.copy(t.center).sub(Fa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},gh=0,Xe=new ie,Oa=new Ie,xi=new z,Be=new On,Vi=new On,xe=new z,Ye=class i extends cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jc(t)?Ki:$i)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Oa.lookAt(t),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Be.min,Vi.min),Be.expandByPoint(xe),xe.addVectors(Be.max,Vi.max),Be.expandByPoint(xe)):(Be.expandByPoint(Vi.min),Be.expandByPoint(Vi.max))}Be.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)xe.fromBufferAttribute(o,l),c&&(xi.fromBufferAttribute(t,l),xe.add(xi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new z,c[N]=new z;let h=new z,p=new z,u=new z,m=new Gt,_=new Gt,y=new Gt,f=new z,d=new z;function S(N,C,D){l[N]=l[C]=l[D]=1,h.fromBufferAttribute(n,N),p.fromBufferAttribute(n,C),u.fromBufferAttribute(n,D),m.fromBufferAttribute(r,N),_.fromBufferAttribute(r,C),y.fromBufferAttribute(r,D),p.sub(h),u.sub(h),_.sub(m),y.sub(m);let U=1/(_.x*y.y-y.x*_.y);isFinite(U)&&(f.copy(p).multiplyScalar(y.y).addScaledVector(u,-_.y).multiplyScalar(U),d.copy(u).multiplyScalar(_.x).addScaledVector(p,-y.x).multiplyScalar(U),o[N].add(f),o[C].add(f),o[D].add(f),c[N].add(d),c[C].add(d),c[D].add(d))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let N=0,C=w.length;N<C;++N){let D=w[N],U=D.start,H=D.count;for(let I=U,G=U+H;I<G;I+=3)S(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let b=new z,E=new z,A=new z,g=new z;function M(N){A.fromBufferAttribute(s,N),g.copy(A);let C=o[N];b.copy(C),b.sub(A.multiplyScalar(A.dot(C))).normalize(),E.crossVectors(g,C);let U=E.dot(c[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,U)}for(let N=0,C=n.count;N<C;++N)l[N]&&M(N);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new z,r=new z,a=new z,o=new z,c=new z,l=new z,h=new z,p=new z;if(t)for(let u=0,m=t.count;u<m;u+=3){let _=t.getX(u+0),y=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,f),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,p=o.normalized,u=new l.constructor(c.length*h),m=0,_=0;for(let y=0,f=c.length;y<f;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*h;for(let d=0;d<h;d++)u[_++]=l[m++]}return new ln(u,h,p)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,p=l.length;h<p;h++){let u=l[h],m=t(u,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let p=0,u=l.length;p<u;p++){let m=l[p];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],p=r[l];for(let u=0,m=p.length;u<m;u++)h.push(p[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ba=new z,_h=new z,xh=new Dt,je=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ba.subVectors(n,e).cross(_h.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ba),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||xh.getNormalMatrix(t),s=this.coplanarPoint(Ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},vh=0,Bn=class extends cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=Li,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=to,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new je().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var yn=new z,za=new z,Ls=new z,Ds=new z,rr=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){za.copy(t).add(e).multiplyScalar(.5),Ls.copy(e).sub(t).normalize(),Ds.copy(this.origin).sub(za);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ls),o=Ds.dot(this.direction),c=-Ds.dot(Ls),l=Ds.lengthSq(),h=Math.abs(1-a*a),p,u,m,_;if(h>0)if(p=a*c-o,u=a*o-c,_=r*h,p>=0)if(u>=-_)if(u<=_){let y=1/h;p*=y,u*=y,m=p*(p+a*u+2*o)+u*(a*p+u+2*c)+l}else u=r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*c)+l;else u=-r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*c)+l;else u<=-_?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+u*(u+2*c)+l):u<=_?(p=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+u*(u+2*c)+l);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(za).addScaledVector(Ls,u),m}intersectSphere(t,e){if(t.radius<0)return null;yn.subVectors(t.center,this.origin);let n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-u.z)*p,c=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,c=(t.min.z-u.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,p=t.x-a.x,u=t.y-a.y,m=t.z-a.z,_=e.x-a.x,y=e.y-a.y,f=e.z-a.z,d=n.x-a.x,S=n.y-a.y,w=n.z-a.z,b=Math.abs(c),E=Math.abs(l),A=Math.abs(h),g,M,N,C,D,U,H,I,G,q,V,tt;if(b>=E&&b>=A?(N=c,U=p,G=_,tt=d,c>=0?(g=l,M=h,C=u,D=m,H=y,I=f,q=S,V=w):(g=h,M=l,C=m,D=u,H=f,I=y,q=w,V=S)):E>=A?(N=l,U=u,G=y,tt=S,l>=0?(g=h,M=c,C=m,D=p,H=f,I=_,q=w,V=d):(g=c,M=h,C=p,D=m,H=_,I=f,q=d,V=w)):(N=h,U=m,G=f,tt=w,h>=0?(g=c,M=l,C=p,D=u,H=_,I=y,q=d,V=S):(g=l,M=c,C=u,D=p,H=y,I=_,q=S,V=d)),N===0)return null;let W=g/N,Q=M/N,j=1/N,rt=C-W*U,vt=D-Q*U,Y=H-W*G,it=I-Q*G,mt=q-W*tt,Et=V-Q*tt,ht=mt*it-Et*Y,Lt=rt*Et-vt*mt,Yt=Y*vt-it*rt;if(s){if(ht<0||Lt<0||Yt<0)return null}else if((ht<0||Lt<0||Yt<0)&&(ht>0||Lt>0||Yt>0))return null;let Tt=ht+Lt+Yt;if(Tt===0)return null;let Xt=j*(ht*U+Lt*G+Yt*tt);return(Tt>0?Xt<0:Xt>0)?null:this.at(Xt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tn=class extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},dl=new ie,Qn=new rr,Ns=new Ci,fl=new z,Us=new z,Fs=new z,Os=new z,Ga=new z,Bs=new z,pl=new z,zs=new z,de=class extends Ie{constructor(t=new Ye,e=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Bs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],p=r[c];h!==0&&(Ga.fromBufferAttribute(p,t),a?Bs.addScaledVector(Ga,h):Bs.addScaledVector(Ga.sub(e),h))}e.add(Bs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(Ns.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Ns,fl)===null||Qn.origin.distanceToSquared(fl)>(t.far-t.near)**2))&&(dl.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(dl),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){let f=u[_],d=a[f.materialIndex],S=Math.max(f.start,m.start),w=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let b=S,E=w;b<E;b+=3){let A=o.getX(b),g=o.getX(b+1),M=o.getX(b+2);s=Gs(this,d,t,n,l,h,p,A,g,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let f=_,d=y;f<d;f+=3){let S=o.getX(f),w=o.getX(f+1),b=o.getX(f+2);s=Gs(this,a,t,n,l,h,p,S,w,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){let f=u[_],d=a[f.materialIndex],S=Math.max(f.start,m.start),w=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let b=S,E=w;b<E;b+=3){let A=b,g=b+1,M=b+2;s=Gs(this,d,t,n,l,h,p,A,g,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let f=_,d=y;f<d;f+=3){let S=f,w=f+1,b=f+2;s=Gs(this,a,t,n,l,h,p,S,w,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function yh(i,t,e,n,s,r,a,o){let c;if(t.side===be?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Xn,o),c===null)return null;zs.copy(o),zs.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(zs);return l<e.near||l>e.far?null:{distance:l,point:zs.clone(),object:i}}function Gs(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Us),i.getVertexPosition(c,Fs),i.getVertexPosition(l,Os);let h=yh(i,t,e,n,Us,Fs,Os,pl);if(h){let p=new z;Fn.getBarycoord(pl,Us,Fs,Os,p),s&&(h.uv=Fn.getInterpolatedAttribute(s,o,c,l,p,new Gt)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,o,c,l,p,new Gt)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,c,l,p,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new z,materialIndex:0};Fn.getNormal(Us,Fs,Os,u.normal),h.face=u,h.barycoord=p}return h}var ar=class extends Ce{constructor(t=null,e=1,n=1,s,r,a,o,c,l=ve,h=ve,p,u){super(null,a,o,c,l,h,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jn=new Ci,Sh=new Gt(.5,.5),ks=new z,zn=class{constructor(t=new je,e=new je,n=new je,s=new je,r=new je,a=new je){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qe,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],p=r[5],u=r[6],m=r[7],_=r[8],y=r[9],f=r[10],d=r[11],S=r[12],w=r[13],b=r[14],E=r[15];if(s[0].setComponents(l-a,m-h,d-_,E-S).normalize(),s[1].setComponents(l+a,m+h,d+_,E+S).normalize(),s[2].setComponents(l+o,m+p,d+y,E+w).normalize(),s[3].setComponents(l-o,m-p,d-y,E-w).normalize(),n)s[4].setComponents(c,u,f,b).normalize(),s[5].setComponents(l-c,m-u,d-f,E-b).normalize();else if(s[4].setComponents(l-c,m-u,d-f,E-b).normalize(),e===qe)s[5].setComponents(l+c,m+u,d+f,E+b).normalize();else if(e===Ai)s[5].setComponents(c,u,f,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){jn.center.set(0,0,0);let e=Sh.distanceTo(t.center);return jn.radius=.7071067811865476+e,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ks.x=s.normal.x>0?t.max.x:t.min.x,ks.y=s.normal.y>0?t.max.y:t.min.y,ks.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ml=new ie,or=class i{constructor(){this.coordinateSystem=qe,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];ml.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new zn),n[s].setFromProjectionMatrix(ml,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new zn),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Qi=class extends Ce{constructor(t=[],e=ai,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var An=class extends Ce{constructor(t,e,n=tn,s,r,a,o=ve,c=ve,l,h=Mn,p=1){if(h!==Mn&&h!==wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:p};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ji=class extends An{constructor(t,e=tn,n=ai,s,r,a=ve,o=ve,c,l=Mn){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ts=class extends Ce{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Gn=class i extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],p=[],u=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(p,2));function _(y,f,d,S,w,b,E,A,g,M,N){let C=b/g,D=E/M,U=b/2,H=E/2,I=A/2,G=g+1,q=M+1,V=0,tt=0,W=new z;for(let Q=0;Q<q;Q++){let j=Q*D-H;for(let rt=0;rt<G;rt++){let vt=rt*C-U;W[y]=vt*S,W[f]=j*w,W[d]=I,l.push(W.x,W.y,W.z),W[y]=0,W[f]=0,W[d]=A>0?1:-1,h.push(W.x,W.y,W.z),p.push(rt/g),p.push(1-Q/M),V+=1}}for(let Q=0;Q<M;Q++)for(let j=0;j<g;j++){let rt=u+j+G*Q,vt=u+j+G*(Q+1),Y=u+(j+1)+G*(Q+1),it=u+(j+1)+G*Q;c.push(rt,vt,it),c.push(vt,Y,it),tt+=6}o.addGroup(m,tt,N),m+=tt,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var es=class i extends Ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new z,h=new Gt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,u=3;p<=e;p++,u+=3){let m=n+p/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ns=class i extends Ye{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],u=[],m=[],_=0,y=[],f=n/2,d=0;S(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new se(p,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(m,2));function S(){let b=new z,E=new z,A=0,g=(e-t)/n;for(let M=0;M<=r;M++){let N=[],C=M/r,D=C*(e-t)+t;for(let U=0;U<=s;U++){let H=U/s,I=H*c+o,G=Math.sin(I),q=Math.cos(I);E.x=D*G,E.y=-C*n+f,E.z=D*q,p.push(E.x,E.y,E.z),b.set(G,g,q).normalize(),u.push(b.x,b.y,b.z),m.push(H,1-C),N.push(_++)}y.push(N)}for(let M=0;M<s;M++)for(let N=0;N<r;N++){let C=y[N][M],D=y[N+1][M],U=y[N+1][M+1],H=y[N][M+1];(t>0||N!==0)&&(h.push(C,D,H),A+=3),(e>0||N!==r-1)&&(h.push(D,U,H),A+=3)}l.addGroup(d,A,0),d+=A}function w(b){let E=_,A=new Gt,g=new z,M=0,N=b===!0?t:e,C=b===!0?1:-1;for(let U=1;U<=s;U++)p.push(0,f*C,0),u.push(0,C,0),m.push(.5,.5),_++;let D=_;for(let U=0;U<=s;U++){let I=U/s*c+o,G=Math.cos(I),q=Math.sin(I);g.x=N*q,g.y=f*C,g.z=N*G,p.push(g.x,g.y,g.z),u.push(0,C,0),A.x=G*.5+.5,A.y=q*.5*C+.5,m.push(A.x,A.y),_++}for(let U=0;U<s;U++){let H=E+U,I=D+U;b===!0?h.push(I,I+1,H):h.push(I+1,I,H),M+=3}l.addGroup(d,M,b===!0?1:2),d+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ni=class i extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,p=t/o,u=e/c,m=[],_=[],y=[],f=[];for(let d=0;d<h;d++){let S=d*u-a;for(let w=0;w<l;w++){let b=w*p-r;_.push(b,-S,0),y.push(0,0,1),f.push(w/o),f.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<o;S++){let w=S+l*d,b=S+l*(d+1),E=S+1+l*(d+1),A=S+1+l*d;m.push(w,b,A),m.push(b,E,A)}this.setIndex(m),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var is=class i extends Ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],p=new z,u=new z,m=[],_=[],y=[],f=[];for(let d=0;d<=n;d++){let S=[],w=d/n,b=a+w*o,E=t*Math.cos(b),A=Math.sqrt(t*t-E*E),g=0;d===0&&a===0?g=.5/e:d===n&&c===Math.PI&&(g=-.5/e);for(let M=0;M<=e;M++){let N=M/e,C=s+N*r;p.x=-A*Math.cos(C),p.y=E,p.z=A*Math.sin(C),_.push(p.x,p.y,p.z),u.copy(p).normalize(),y.push(u.x,u.y,u.z),f.push(N+g,1-w),S.push(l++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<e;S++){let w=h[d][S+1],b=h[d][S],E=h[d+1][S],A=h[d+1][S+1];(d!==0||a>0)&&m.push(w,b,A),(d!==n-1||c<Math.PI)&&m.push(b,E,A)}this.setIndex(m),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ii=class i extends Ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],p=[],u=new z,m=new z,_=new z;for(let y=0;y<=n;y++){let f=a+y/n*o;for(let d=0;d<=s;d++){let S=d/s*r;m.x=(t+e*Math.cos(f))*Math.cos(S),m.y=(t+e*Math.cos(f))*Math.sin(S),m.z=e*Math.sin(f),l.push(m.x,m.y,m.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),_.subVectors(m,u).normalize(),h.push(_.x,_.y,_.z),p.push(d/s),p.push(y/n)}}for(let y=1;y<=n;y++)for(let f=1;f<=s;f++){let d=(s+1)*y+f-1,S=(s+1)*(y-1)+f-1,w=(s+1)*(y-1)+f,b=(s+1)*y+f;c.push(d,S,b),c.push(S,w,b)}this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function li(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(gl(s))s.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(gl(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Pe(i){let t={};for(let e=0;e<i.length;e++){let n=li(i[e]);for(let s in n)t[s]=n[s]}return t}function gl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mh(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bo(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}var lc={clone:li,merge:Pe},bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Th=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bh,this.fragmentShader=Th,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=li(t.uniforms),this.uniformsGroups=Mh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new re().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},lr=class extends un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},cr=class extends Bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},kn=class extends cr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Gt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return ti('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){ti('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var hr=class extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ur=class extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function vi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Vs(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Vn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dr=class extends Vn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ha,endingEnd:Ha}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wa:r=t,o=2*e-n;break;case Xa:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wa:a=t,c=2*n-e;break;case Xa:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),y=_*_,f=y*_,d=-u*f+2*u*y-u*_,S=(1+u)*f+(-1.5-2*u)*y+(-.5+u)*_+1,w=(-1-m)*f+(1.5+m)*y+.5*_,b=m*f-m*y;for(let E=0;E!==o;++E)r[E]=d*a[h+E]+S*a[l+E]+w*a[c+E]+b*a[p+E];return r}},fr=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),p=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*p+a[c+u]*h;return r}},pr=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},mr=class extends Vn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let _=(n-e)/(s-e),y=1-_;for(let f=0;f!==o;++f)r[f]=a[l+f]*y+a[c+f]*_;return r}let u=o*2,m=t-1;for(let _=0;_!==o;++_){let y=a[l+_],f=a[c+_],d=m*u+_*2,S=p[d],w=p[d+1],b=t*u+_*2,E=h[b],A=h[b+1],g=Eh(n,e,S,E,s);r[_]=cc(g,y,w,A,f)}return r}};function cc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Ah(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Eh(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=cc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Ah(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Ge=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vi(e,this.TimeBufferType),this.values=vi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vi(t.times,Array),values:vi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Vs(t.settings)&&(n.settings={inTangents:vi(t.settings.inTangents,Array),outTangents:vi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new pr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new mr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Hi:e=this.InterpolantFactoryMethodDiscrete;break;case er:e=this.InterpolantFactoryMethodLinear;break;case Xs:e=this.InterpolantFactoryMethodSmooth;break;case Va:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return It("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hi;case this.InterpolantFactoryMethodLinear:return er;case this.InterpolantFactoryMethodSmooth:return Xs;case this.InterpolantFactoryMethodBezier:return Va}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Vs(this.settings)&&(_l(this.settings.inTangents,t),_l(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Vs(this.settings)&&(xl(this.settings.inTangents,t),xl(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Pt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Pt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&th(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Pt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xs,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let p=o*n,u=p-n,m=p+n;for(let _=0;_!==n;++_){let y=e[p+_];if(y!==e[u+_]||y!==e[m+_]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let p=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[p+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Vs(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function _l(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function xl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ge.prototype.ValueTypeName="";Ge.prototype.TimeBufferType=Float32Array;Ge.prototype.ValueBufferType=Float32Array;Ge.prototype.DefaultInterpolation=er;var Hn=class extends Ge{constructor(t,e,n){super(t,e,n)}};Hn.prototype.ValueTypeName="bool";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=Hi;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var gr=class extends Ge{constructor(t,e,n,s){super(t,e,n,s)}};gr.prototype.ValueTypeName="color";var _r=class extends Ge{constructor(t,e,n,s){super(t,e,n,s)}};_r.prototype.ValueTypeName="number";var xr=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)hn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ss=class extends Ge{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new xr(this.times,this.values,this.getValueSize(),t)}};ss.prototype.ValueTypeName="quaternion";ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Wn=class extends Ge{constructor(t,e,n){super(t,e,n)}};Wn.prototype.ValueTypeName="string";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=Hi;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var vr=class extends Ge{constructor(t,e,n,s){super(t,e,n,s)}};vr.prototype.ValueTypeName="vector";var yr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return l.push(h,p),this},this.removeHandler=function(h){let p=l.indexOf(h);return p!==-1&&l.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=l.length;p<u;p+=2){let m=l[p],_=l[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hc=new yr,Sr=class{constructor(t){this.manager=t!==void 0?t:hc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Sr.DEFAULT_MATERIAL_NAME="__DEFAULT";var rs=class extends Ie{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},as=class extends rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ka=new ie,vl=new z,yl=new z,Mr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=Fe,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zn,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;vl.setFromMatrixPosition(t.matrixWorld),e.position.copy(vl),yl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ka,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Ai||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hs=new z,Ws=new hn,an=new z,os=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=qe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hs,Ws,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Ws,an.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Hs,Ws,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Ws,an.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Un=new z,Sl=new Gt,Ml=new Gt,Re=class extends os{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Yi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,Sl,Ml),e.subVectors(Ml,Sl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ya*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},qa=class extends Mr{constructor(){super(new Re(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Yi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},ls=class extends rs{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new qa}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}};var br=class extends os{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var yi=-90,Si=1,Ii=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Re(yi,Si,t,e);s.layers=this.layers,this.add(s);let r=new Re(yi,Si,t,e);r.layers=this.layers,this.add(r);let a=new Re(yi,Si,t,e);a.layers=this.layers,this.add(a);let o=new Re(yi,Si,t,e);o.layers=this.layers,this.add(o);let c=new Re(yi,Si,t,e);c.layers=this.layers,this.add(c);let l=new Re(yi,Si,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===qe)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ai)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=y,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,u,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Tr=class extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var To="\\[\\]\\.:\\/",wh=new RegExp("["+To+"]","g"),Ao="[^"+To+"]",Rh="[^"+To.replace("\\.","")+"]",Ch=/((?:WC+[\/:])*)/.source.replace("WC",Ao),Ih=/(WCOD+)?/.source.replace("WCOD",Rh),Ph=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ao),Lh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ao),Dh=new RegExp("^"+Ch+Ih+Ph+Lh+"$"),Nh=["material","materials","bones","map"],Ya=class{constructor(t,e,n){let s=n||te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},te=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wh,"")}static parseTrackName(t){let e=Dh.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Nh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};te.Composite=Ya;te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};te.prototype.GetterByBindingType=[te.prototype._getValue_direct,te.prototype._getValue_array,te.prototype._getValue_arrayElement,te.prototype._getValue_toArray];te.prototype.SetterByBindingTypeAndVersioning=[[te.prototype._setValue_direct,te.prototype._setValue_direct_setNeedsUpdate,te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[te.prototype._setValue_array,te.prototype._setValue_array_setNeedsUpdate,te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[te.prototype._setValue_arrayElement,te.prototype._setValue_arrayElement_setNeedsUpdate,te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[te.prototype._setValue_fromArray,te.prototype._setValue_fromArray_setNeedsUpdate,te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Em=new Float32Array(1);var Po=class Po{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Po.prototype.isMatrix2=!0;var Za=Po;function Eo(i,t,e,n){let s=Uh(n);switch(e){case po:return i*t;case go:return i*t/s.components*s.byteLength;case Lr:return i*t/s.components*s.byteLength;case qn:return i*t*2/s.components*s.byteLength;case Dr:return i*t*2/s.components*s.byteLength;case mo:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case Nr:return i*t*4/s.components*s.byteLength;case ds:case fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fr:case Br:return Math.max(i,16)*Math.max(t,8)/4;case Ur:case Or:return Math.max(i,8)*Math.max(t,8)/2;case zr:case Gr:case Vr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kr:case gs:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $r:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case jr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ta:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ia:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ra:case aa:case oa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case la:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _s:case ha:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uh(i){switch(i){case Fe:case co:return{byteLength:1,components:1};case Ni:case ho:case nn:return{byteLength:2,components:1};case Ir:case Pr:return{byteLength:2,components:4};case tn:case Cr:case en:return{byteLength:4,components:1};case uo:case fo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Lc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Oh(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,p=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){let h=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,h);else{p.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<p.length;m++){let _=p[u],y=p[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,p[u]=y)}p.length=u+1;for(let m=0,_=p.length;m<_;m++){let y=p[m];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Bh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zh=`#ifdef USE_ALPHAHASH
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
#endif`,Gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wh=`#ifdef USE_AOMAP
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
#endif`,Xh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qh=`#ifdef USE_BATCHING
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
#endif`,Yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$h=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kh=`#ifdef USE_IRIDESCENCE
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
#endif`,Qh=`#ifdef USE_BUMPMAP
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
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,su=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ru=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,au=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ou=`#define PI 3.141592653589793
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
} // validated`,lu=`vec3 transformedNormal = objectNormal;
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
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,du=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",pu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mu=`#ifdef USE_ENVMAP
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
#endif`,gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_u=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
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
#endif`,yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tu=`#ifdef USE_GRADIENTMAP
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
}`,Au=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ru=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nu=`PhysicalMaterial material;
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
#endif`,Uu=`uniform sampler2D dfgLUT;
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
}`,Fu=`
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
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zu=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Gu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ku=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yu=`#if defined( USE_POINTS_UV )
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
#endif`,Zu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ju=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$u=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ku=`#if defined( USE_MORPHCOLORS )
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
#endif`,Qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ju=`#ifdef USE_MORPHTARGETS
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
#endif`,td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ad=`#ifdef USE_NORMALMAP
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
#endif`,od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Md=`float getShadowMask() {
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
}`,bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Td=`#ifdef USE_SKINNING
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
#endif`,Ad=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Id=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pd=`#ifdef USE_TRANSMISSION
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
#endif`,Ld=`#ifdef USE_TRANSMISSION
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
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bd=`uniform sampler2D t2D;
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
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`uniform float backgroundBlurriness;
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
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hd=`#include <common>
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
}`,Wd=`#if DEPTH_PACKING == 3200
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
}`,Xd=`#define DISTANCE
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
}`,qd=`#define DISTANCE
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
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`uniform float scale;
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
}`,$d=`uniform vec3 diffuse;
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
}`,Kd=`#include <common>
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
}`,Qd=`uniform vec3 diffuse;
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
}`,jd=`#define LAMBERT
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
}`,tf=`#define LAMBERT
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
}`,ef=`#define MATCAP
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
}`,nf=`#define MATCAP
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
}`,sf=`#define NORMAL
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
}`,rf=`#define NORMAL
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
}`,af=`#define PHONG
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
}`,of=`#define PHONG
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
}`,lf=`#define STANDARD
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
}`,cf=`#define STANDARD
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
}`,hf=`#define TOON
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
}`,uf=`#define TOON
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
}`,df=`uniform float size;
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
}`,ff=`uniform vec3 diffuse;
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
}`,pf=`#include <common>
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
}`,mf=`uniform vec3 color;
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
}`,gf=`uniform float rotation;
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
}`,_f=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Bh,alphahash_pars_fragment:zh,alphamap_fragment:Gh,alphamap_pars_fragment:kh,alphatest_fragment:Vh,alphatest_pars_fragment:Hh,aomap_fragment:Wh,aomap_pars_fragment:Xh,batching_pars_vertex:qh,batching_vertex:Yh,begin_vertex:Zh,beginnormal_vertex:Jh,bsdfs:$h,iridescence_fragment:Kh,bumpmap_pars_fragment:Qh,clipping_planes_fragment:jh,clipping_planes_pars_fragment:tu,clipping_planes_pars_vertex:eu,clipping_planes_vertex:nu,color_fragment:iu,color_pars_fragment:su,color_pars_vertex:ru,color_vertex:au,common:ou,defaultnormal_vertex:lu,displacementmap_pars_vertex:cu,displacementmap_vertex:hu,emissivemap_fragment:uu,emissivemap_pars_fragment:du,colorspace_fragment:fu,colorspace_pars_fragment:pu,envmap_fragment:mu,envmap_common_pars_fragment:gu,envmap_pars_fragment:_u,envmap_pars_vertex:xu,envmap_physical_pars_fragment:Cu,envmap_vertex:vu,fog_vertex:yu,fog_pars_vertex:Su,fog_fragment:Mu,fog_pars_fragment:bu,gradientmap_pars_fragment:Tu,lightmap_pars_fragment:Au,lights_lambert_fragment:Eu,lights_lambert_pars_fragment:wu,lights_pars_begin:Ru,lights_toon_fragment:Iu,lights_toon_pars_fragment:Pu,lights_phong_fragment:Lu,lights_phong_pars_fragment:Du,lights_physical_fragment:Nu,lights_physical_pars_fragment:Uu,lights_fragment_begin:Fu,lights_fragment_maps:Ou,lights_fragment_end:Bu,lightprobes_pars_fragment:zu,logdepthbuf_fragment:Gu,logdepthbuf_pars_fragment:ku,logdepthbuf_pars_vertex:Vu,logdepthbuf_vertex:Hu,map_fragment:Wu,map_pars_fragment:Xu,map_particle_fragment:qu,map_particle_pars_fragment:Yu,metalnessmap_fragment:Zu,metalnessmap_pars_fragment:Ju,morphinstance_vertex:$u,morphcolor_vertex:Ku,morphnormal_vertex:Qu,morphtarget_pars_vertex:ju,morphtarget_vertex:td,normal_fragment_begin:ed,normal_fragment_maps:nd,normal_pars_fragment:id,normal_pars_vertex:sd,normal_vertex:rd,normalmap_pars_fragment:ad,clearcoat_normal_fragment_begin:od,clearcoat_normal_fragment_maps:ld,clearcoat_pars_fragment:cd,iridescence_pars_fragment:hd,opaque_fragment:ud,packing:dd,premultiplied_alpha_fragment:fd,project_vertex:pd,dithering_fragment:md,dithering_pars_fragment:gd,roughnessmap_fragment:_d,roughnessmap_pars_fragment:xd,shadowmap_pars_fragment:vd,shadowmap_pars_vertex:yd,shadowmap_vertex:Sd,shadowmask_pars_fragment:Md,skinbase_vertex:bd,skinning_pars_vertex:Td,skinning_vertex:Ad,skinnormal_vertex:Ed,specularmap_fragment:wd,specularmap_pars_fragment:Rd,tonemapping_fragment:Cd,tonemapping_pars_fragment:Id,transmission_fragment:Pd,transmission_pars_fragment:Ld,uv_pars_fragment:Dd,uv_pars_vertex:Nd,uv_vertex:Ud,worldpos_vertex:Fd,background_vert:Od,background_frag:Bd,backgroundCube_vert:zd,backgroundCube_frag:Gd,cube_vert:kd,cube_frag:Vd,depth_vert:Hd,depth_frag:Wd,distance_vert:Xd,distance_frag:qd,equirect_vert:Yd,equirect_frag:Zd,linedashed_vert:Jd,linedashed_frag:$d,meshbasic_vert:Kd,meshbasic_frag:Qd,meshlambert_vert:jd,meshlambert_frag:tf,meshmatcap_vert:ef,meshmatcap_frag:nf,meshnormal_vert:sf,meshnormal_frag:rf,meshphong_vert:af,meshphong_frag:of,meshphysical_vert:lf,meshphysical_frag:cf,meshtoon_vert:hf,meshtoon_frag:uf,points_vert:df,points_frag:ff,shadow_vert:pf,shadow_frag:mf,sprite_vert:gf,sprite_frag:_f},_t={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},pn={basic:{uniforms:Pe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Pe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Pe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Pe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Pe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ut(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Pe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Pe([_t.points,_t.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Pe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Pe([_t.common,_t.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Pe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Pe([_t.sprite,_t.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:Pe([_t.common,_t.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:Pe([_t.lights,_t.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};pn.physical={uniforms:Pe([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var da={r:0,b:0,g:0},xf=new ie,Dc=new Dt;Dc.set(-1,0,0,0,1,0,0,0,1);function vf(i,t,e,n,s,r){let a=new Ut(0),o=s===!0?0:1,c,l,h=null,p=0,u=null;function m(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let b=S.backgroundBlurriness>0;w=t.get(w,b)}return w}function _(S){let w=!1,b=m(S);b===null?f(a,o):b&&b.isColor&&(f(b,1),w=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,w){let b=m(w);b&&b.isCubeTexture?(l===void 0&&(l=new de(new Gn(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:li(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,A,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(xf.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Dc),l.material.toneMapped=Ht.getTransfer(b.colorSpace)!==$t,(h!==b||p!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,p=b.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new de(new ni(2,2),new un({name:"BackgroundMaterial",uniforms:li(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Ht.getTransfer(b.colorSpace)!==$t,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||p!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,p=b.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,w){S.getRGB(da,bo(i)),e.buffers.color.setClear(da.r,da.g,da.b,w,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,f(a,o)},render:_,addToRenderList:y,dispose:d}}function yf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(D,U,H,I,G){let q=!1,V=p(D,I,H,U);r!==V&&(r=V,l(r.object)),q=m(D,I,H,G),q&&_(D,I,H,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,b(D,U,H,I),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function p(D,U,H,I){let G=I.wireframe===!0,q=n[U.id];q===void 0&&(q={},n[U.id]=q);let V=D.isInstancedMesh===!0?D.id:0,tt=q[V];tt===void 0&&(tt={},q[V]=tt);let W=tt[H.id];W===void 0&&(W={},tt[H.id]=W);let Q=W[G];return Q===void 0&&(Q=u(c()),W[G]=Q),Q}function u(D){let U=[],H=[],I=[];for(let G=0;G<e;G++)U[G]=0,H[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:I,object:D,attributes:{},index:null}}function m(D,U,H,I){let G=r.attributes,q=U.attributes,V=0,tt=H.getAttributes();for(let W in tt)if(tt[W].location>=0){let j=G[W],rt=q[W];if(rt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(rt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(rt=D.instanceColor)),j===void 0||j.attribute!==rt||rt&&j.data!==rt.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function _(D,U,H,I){let G={},q=U.attributes,V=0,tt=H.getAttributes();for(let W in tt)if(tt[W].location>=0){let j=q[W];j===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let rt={};rt.attribute=j,j&&j.data&&(rt.data=j.data),G[W]=rt,V++}r.attributes=G,r.attributesNum=V,r.index=I}function y(){let D=r.newAttributes;for(let U=0,H=D.length;U<H;U++)D[U]=0}function f(D){d(D,0)}function d(D,U){let H=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;H[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),G[D]!==U&&(i.vertexAttribDivisor(D,U),G[D]=U)}function S(){let D=r.newAttributes,U=r.enabledAttributes;for(let H=0,I=U.length;H<I;H++)U[H]!==D[H]&&(i.disableVertexAttribArray(H),U[H]=0)}function w(D,U,H,I,G,q,V){V===!0?i.vertexAttribIPointer(D,U,H,G,q):i.vertexAttribPointer(D,U,H,I,G,q)}function b(D,U,H,I){y();let G=I.attributes,q=H.getAttributes(),V=U.defaultAttributeValues;for(let tt in q){let W=q[tt];if(W.location>=0){let Q=G[tt];if(Q===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){let j=Q.normalized,rt=Q.itemSize,vt=t.get(Q);if(vt===void 0)continue;let Y=vt.buffer,it=vt.type,mt=vt.bytesPerElement,Et=it===i.INT||it===i.UNSIGNED_INT||Q.gpuType===Cr;if(Q.isInterleavedBufferAttribute){let ht=Q.data,Lt=ht.isInterleavedBuffer===!0?ht.stride:ht.itemSize,Yt=Q.offset;if(ht.isInstancedInterleavedBuffer||ht.isInstancedBufferAttribute){for(let Tt=0;Tt<W.locationSize;Tt++)d(W.location+Tt,ht.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Tt=0;Tt<W.locationSize;Tt++)f(W.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let Tt=0;Tt<W.locationSize;Tt++)w(W.location+Tt,rt/W.locationSize,it,j,Lt*mt,(Yt+rt/W.locationSize*Tt)*mt,Et)}else{if(Q.isInstancedBufferAttribute){for(let ht=0;ht<W.locationSize;ht++)d(W.location+ht,Q.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ht=0;ht<W.locationSize;ht++)f(W.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let ht=0;ht<W.locationSize;ht++)w(W.location+ht,rt/W.locationSize,it,j,rt*mt,rt/W.locationSize*ht*mt,Et)}}else if(V!==void 0){let j=V[tt];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(W.location,j);break;case 3:i.vertexAttrib3fv(W.location,j);break;case 4:i.vertexAttrib4fv(W.location,j);break;default:i.vertexAttrib1fv(W.location,j)}}}}S()}function E(){N();for(let D in n){let U=n[D];for(let H in U){let I=U[H];for(let G in I){let q=I[G];for(let V in q)h(q[V].object),delete q[V];delete I[G]}}delete n[D]}}function A(D){if(n[D.id]===void 0)return;let U=n[D.id];for(let H in U){let I=U[H];for(let G in I){let q=I[G];for(let V in q)h(q[V].object),delete q[V];delete I[G]}}delete n[D.id]}function g(D){for(let U in n){let H=n[U];for(let I in H){let G=H[I];if(G[D.id]===void 0)continue;let q=G[D.id];for(let V in q)h(q[V].object),delete q[V];delete G[D.id]}}}function M(D){for(let U in n){let H=n[U],I=D.isInstancedMesh===!0?D.id:0,G=H[I];if(G!==void 0){for(let q in G){let V=G[q];for(let tt in V)h(V[tt].object),delete V[tt];delete G[q]}delete H[I],Object.keys(H).length===0&&delete n[U]}}}function N(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:f,disableUnusedAttributes:S}}function Sf(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let m=0;m<h;m++)u+=l[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Mf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==sn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let M=g===nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Fe&&g!==en&&!M&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(It("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&It("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:b,maxSamples:E,samples:A}}function bf(i){let t=this,e=null,n=0,s=!1,r=!1,a=new je,o=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=h(p,u,0)},this.setState=function(p,u,m){let _=p.clippingPlanes,y=p.clipIntersection,f=p.clipShadows,d=i.get(p);if(!s||_===null||_.length===0||r&&!f)r?h(null):l();else{let S=r?0:n,w=S*4,b=d.clippingState||null;c.value=b,b=h(_,u,w,m);for(let E=0;E!==w;++E)b[E]=e[E];d.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,u,m,_){let y=p!==null?p.length:0,f=null;if(y!==0){if(f=c.value,_!==!0||f===null){let d=m+y*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<d)&&(f=new Float32Array(d));for(let w=0,b=m;w!==y;++w,b+=4)a.copy(p[w]).applyMatrix4(S,o),a.normal.toArray(f,b),f[b+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,f}}var Ss=class extends ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qi(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gn(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:si});r.uniforms.tEquirect.value=e;let a=new de(s,r),o=e.minFilter;return e.minFilter===En&&(e.minFilter=Ne),new Ii(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},uc=256,Tf=3,Af=20,Nc=256,Uc=16,Ef=3,wf=new z,Rf=new Ut,Fi=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ii(1,10,null),this._boxMesh=new de(new Gn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=wf}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,u=c.autoClearColor,m=c.autoClearDepth,_=c.autoClearStencil,y=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(t.background=c.getClearColor(Rf));let f=new Ii(n,s,h);return f.position.copy(o),f.update(c,t),c.autoClear=p,c.autoClearColor=u,c.autoClearDepth=m,c.autoClearStencil=_,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(uc,ac(t))}_fromTexture(t,e){t.mapping===ai||t.mapping===Di?this._setSize(t.image.length===0?uc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=dc(t,!1,!1),n=Math.log2(t)-Tf;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=dc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ai||t.mapping===Di?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=fc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Cf(),this._integrationMaterial=If());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Uc);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Ef)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(Nc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Pf());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function dc(i,t,e){return new Ss(i,{minFilter:En,generateMipmaps:t,type:nn,colorSpace:Wi,depthBuffer:e})}function Ms(i,t,e){return new un({name:i,uniforms:t,vertexShader:zt.cube_vert,fragmentShader:e,side:be,blending:si,depthTest:!1,depthWrite:!1})}function Cf(){return Ms("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Nc}u

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
	`)}function If(){return Ms("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Uc}},`

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
	`)}function Pf(){return Ms("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Af}
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
	`)}function fc(){return Ms("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function pc(){return Ms("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Lf(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Er||m===wr)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let y=new Ss(_.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,_=m===Er||m===wr,y=m===ai||m===Di;if(_||y){let f=e.get(u),d=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Fi(i)),f=_?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{let S=u.image;return _&&S&&S.height>0||y&&S&&c(S)?(n===null&&(n=new Fi(i)),f=_?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,m){return m===Er?u.mapping=ai:m===wr&&(u.mapping=Di),u}function c(u){let m=0,_=6;for(let y=0;y<_;y++)u[y]!==void 0&&m++;return m===_}function l(u){let m=u.target;m.removeEventListener("dispose",l);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Df(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ti("WebGLRenderer: "+n+" extension not supported."),s}}}function Nf(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){c(_.target)}function c(_){_.index!==null&&t.remove(_.index);for(let f in _.attributes)t.remove(_.attributes[f]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let y=r.get(_);y&&(t.remove(y),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function l(_,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(_){let y=_.attributes;for(let f in y)t.update(y[f],i.ARRAY_BUFFER)}function p(_){let y=_.index,f=_.attributes.position,d=0;if(f===void 0)return;let S=y!==null?y.array.length:f.array.length/3-1,w=f.count>=65535?Ki:$i,b=new w(Math.ceil(S/3)*6,1),E=b.array;if(y!==null){let g=y.array;d=y.version;for(let M=0,N=0;M<S;M+=3){let C=g[M+0],D=g[M+1],U=g[M+2];E[N++]=C,E[N++]=D,E[N++]=D,E[N++]=U,E[N++]=U,E[N++]=C}}else{d=f.version;for(let g=0,M=0;g<S;g+=3){let N=g+0,C=g+1,D=g+2;E[M++]=N,E[M++]=C,E[M++]=C,E[M++]=D,E[M++]=D,E[M++]=N}}b.version=d;let A=r.get(_);A&&t.remove(A),r.set(_,b)}function u(_){let y=r.get(_);if(y){let f=_.index;f!==null&&y.version<f.version&&p(_)}else p(_);return r.get(_)}function m(){for(let _ in s){let y=s[_].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:u,dispose:m}}function Uf(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,u){i.drawElements(n,u,r,p*a),e.update(u,n,1)}function l(p,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,p*a,m),e.update(u,n,m))}function h(p,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,m);let y=0;for(let f=0;f<m;f++)y+=u[f];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Ff(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Pt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Of(i,t,e){let n=new WeakMap,s=new re;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==p){let N=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;m===!0&&(w=1),_===!0&&(w=2),y===!0&&(w=3);let b=o.attributes.position.count*w,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let A=new Float32Array(b*E*4*p),g=new Zi(A,b,E,p);g.type=en,g.needsUpdate=!0;let M=w*4;for(let C=0;C<p;C++){let D=f[C],U=d[C],H=S[C],I=b*E*4*C;for(let G=0;G<D.count;G++){let q=G*M;m===!0&&(s.fromBufferAttribute(D,G),A[I+q+0]=s.x,A[I+q+1]=s.y,A[I+q+2]=s.z,A[I+q+3]=0),_===!0&&(s.fromBufferAttribute(U,G),A[I+q+4]=s.x,A[I+q+5]=s.y,A[I+q+6]=s.z,A[I+q+7]=0),y===!0&&(s.fromBufferAttribute(H,G),A[I+q+8]=s.x,A[I+q+9]=s.y,A[I+q+10]=s.z,A[I+q+11]=H.itemSize===4?s.w:1)}}u={count:p,texture:g,size:new Gt(b,E)},n.set(o,u),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let y=0;y<l.length;y++)m+=l[y];let _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Bf(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,p=l.geometry,u=t.get(l,p);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let m=l.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var zf={[no]:"LINEAR_TONE_MAPPING",[io]:"REINHARD_TONE_MAPPING",[so]:"CINEON_TONE_MAPPING",[hs]:"ACES_FILMIC_TONE_MAPPING",[ao]:"AGX_TONE_MAPPING",[oo]:"NEUTRAL_TONE_MAPPING",[ro]:"CUSTOM_TONE_MAPPING"};function Gf(i,t,e,n,s,r){let a=new ze(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Ye;h.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new se([0,2,0,0,2,0],2));let p=new lr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new de(h,p),m=new br(-1,1,1,-1,0,1),_=null,y=null,f=!1,d,S=null,w=[],b=!1;this.setSize=function(E,A){a.setSize(E,A),o!==null&&o.setSize(E,A),c!==null&&c.setSize(E,A);for(let g=0;g<w.length;g++){let M=w[g];M.setSize&&M.setSize(E,A)}},this.setEffects=function(E){w=E,b=w.length>0&&w[0].isRenderPass===!0;let A=a.width,g=a.height;w.length>0&&o===null&&(o=new ze(A,g,{type:nn,depthBuffer:!1,stencilBuffer:!1}),c=new ze(A,g,{type:nn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&w.some(N=>N.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new An(A,g),r===!0&&(l.format=wn,l.type=oi)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let N=0;N<w.length;N++){let C=w[N];C.setSize&&C.setSize(A,g),M&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(E,A){if(f||E.toneMapping===dn&&w.length===0)return!1;if(S=A,A!==null){let g=A.width,M=A.height;(a.width!==g||a.height!==M)&&this.setSize(g,M)}return b===!1&&E.setRenderTarget(a),d=E.toneMapping,E.toneMapping=dn,!0},this.hasRenderPass=function(){return b},this.end=function(E,A){E.toneMapping=d,f=!0;let g=a,M=o;for(let N=0;N<w.length;N++){let C=w[N];C.enabled!==!1&&(C.render(E,M,g,A),C.needsSwap!==!1&&(g=M,M=M===o?c:o))}if(_!==E.outputColorSpace||y!==E.toneMapping){_=E.outputColorSpace,y=E.toneMapping,p.defines={},Ht.getTransfer(_)===$t&&(p.defines.SRGB_TRANSFER="");let N=zf[y];N&&(p.defines[N]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,E.setRenderTarget(S),E.render(u,m),S=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),p.dispose()}}var Fc=new Ce,Oc=new An(1,1),Bc=new ji(1),zc=new Zi,Gc=new sr,kc=new Qi,mc=[],gc=[],_c=new Float32Array(16),xc=new Float32Array(9),vc=new Float32Array(4);function Oi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=mc[s];if(r===void 0&&(r=new Float32Array(s),mc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ma(i,t){let e=gc[t];e===void 0&&(e=new Int32Array(t),gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function kf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),pe(e,t)}}function Hf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),pe(e,t)}}function Wf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),pe(e,t)}}function Xf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;vc.set(n),i.uniformMatrix2fv(this.addr,!1,vc),pe(e,n)}}function qf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;xc.set(n),i.uniformMatrix3fv(this.addr,!1,xc),pe(e,n)}}function Yf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;_c.set(n),i.uniformMatrix4fv(this.addr,!1,_c),pe(e,n)}}function Zf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),pe(e,t)}}function $f(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),pe(e,t)}}function Kf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),pe(e,t)}}function Qf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function jf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),pe(e,t)}}function tp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),pe(e,t)}}function ep(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),pe(e,t)}}function ga(i){return i.version===0&&(i.compareFunction=vo,i.needsUpdate=!0),i}function np(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ga(Oc):r=Fc,e.setTexture2D(t||r,s)}function ip(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gc,s)}function sp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ga(Bc):r=kc,e.setTextureCube(t||r,s)}function rp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zc,s)}function ap(i){switch(i){case 5126:return kf;case 35664:return Vf;case 35665:return Hf;case 35666:return Wf;case 35674:return Xf;case 35675:return qf;case 35676:return Yf;case 5124:case 35670:return Zf;case 35667:case 35671:return Jf;case 35668:case 35672:return $f;case 35669:case 35673:return Kf;case 5125:return Qf;case 36294:return jf;case 36295:return tp;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return rp}}function op(i,t){i.uniform1fv(this.addr,t)}function lp(i,t){let e=Oi(t,this.size,2);i.uniform2fv(this.addr,e)}function cp(i,t){let e=Oi(t,this.size,3);i.uniform3fv(this.addr,e)}function hp(i,t){let e=Oi(t,this.size,4);i.uniform4fv(this.addr,e)}function up(i,t){let e=Oi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dp(i,t){let e=Oi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fp(i,t){let e=Oi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pp(i,t){i.uniform1iv(this.addr,t)}function mp(i,t){i.uniform2iv(this.addr,t)}function gp(i,t){i.uniform3iv(this.addr,t)}function _p(i,t){i.uniform4iv(this.addr,t)}function xp(i,t){i.uniform1uiv(this.addr,t)}function vp(i,t){i.uniform2uiv(this.addr,t)}function yp(i,t){i.uniform3uiv(this.addr,t)}function Sp(i,t){i.uniform4uiv(this.addr,t)}function Mp(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ga(Oc):a=Fc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function bp(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Gc,r[a])}function Tp(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=ga(Bc):a=kc;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Ap(i,t,e){let n=this.cache,s=t.length,r=ma(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||zc,r[a])}function Ep(i){switch(i){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return xp;case 36294:return vp;case 36295:return yp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Mp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Tp;case 36289:case 36303:case 36311:case 36292:return Ap}}var No=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ap(e.type)}},Uo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ep(e.type)}},Fo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Lo=/(\w+)(\])?(\[|\.)?/g;function yc(i,t){i.seq.push(t),i.map[t.id]=t}function wp(i,t,e){let n=i.name,s=n.length;for(Lo.lastIndex=0;;){let r=Lo.exec(n),a=Lo.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){yc(e,l===void 0?new No(o,i,t):new Uo(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Fo(o),yc(e,p)),e=p}}}var Ui=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);wp(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Sc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Rp=37297,Cp=0;function Ip(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Mc=new Dt;function Pp(i){Ht._getMatrix(Mc,Ht.workingColorSpace,i);let t=`mat3( ${Mc.elements.map(e=>e.toFixed(4))} )`;switch(Ht.getTransfer(i)){case Xi:return[t,"LinearTransferOETF"];case $t:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ip(i.getShaderSource(t),o)}else return r}function Lp(i,t){let e=Pp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Dp={[no]:"Linear",[io]:"Reinhard",[so]:"Cineon",[hs]:"ACESFilmic",[ao]:"AgX",[oo]:"Neutral",[ro]:"Custom"};function Np(i,t){let e=Dp[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fa=new z;function Up(){Ht.getLuminanceCoefficients(fa);let i=fa.x.toFixed(4),t=fa.y.toFixed(4),e=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function Op(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ys(i){return i!==""}function Tc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ac(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(i){return i.replace(zp,Gp)}function Gp(i,t){let e=zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Oo(e)}var kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ec(i){return i.replace(kp,Vp)}function Vp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Hp={[cs]:"SHADOWMAP_TYPE_PCF",[Pi]:"SHADOWMAP_TYPE_VSM"};function Wp(i){return Hp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xp={[Di]:"ENVMAP_MODE_REFRACTION"};function qp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Xp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yp={[eo]:"ENVMAP_BLENDING_MULTIPLY",[Wl]:"ENVMAP_BLENDING_MIX",[Xl]:"ENVMAP_BLENDING_ADD"};function Zp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Yp[i.combine]||"ENVMAP_BLENDING_NONE"}function Jp(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Wp(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=qp(e),p=Zp(e),u=Fp(e),m=Op(r),_=s.createProgram(),y,f,d=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ys).join(`
`),y.length>0&&(y+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ys).join(`
`),f.length>0&&(f+=`
`)):(y=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),f=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dn?"#define TONE_MAPPING":"",e.toneMapping!==dn?zt.tonemapping_pars_fragment:"",e.toneMapping!==dn?Np("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Lp("linearToOutputTexel",e.outputColorSpace),Up(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ys).join(`
`)),a=Oo(a),a=Tc(a,e),a=Ac(a,e),o=Oo(o),o=Tc(o,e),o=Ac(o,e),a=Ec(a),o=Ec(o),e.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,f=["#define varying in",e.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=d+y+a,w=d+f+o,b=Sc(s,s.VERTEX_SHADER,S),E=Sc(s,s.FRAGMENT_SHADER,w);s.attachShader(_,b),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(b)||"",H=s.getShaderInfoLog(E)||"",I=D.trim(),G=U.trim(),q=H.trim(),V=!0,tt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,E);else{let W=bc(s,b,"vertex"),Q=bc(s,E,"fragment");Pt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+W+`
`+Q)}else I!==""?It("WebGLProgram: Program Info Log:",I):(G===""||q==="")&&(tt=!1);tt&&(C.diagnostics={runnable:V,programLog:I,vertexShader:{log:G,prefix:y},fragmentShader:{log:q,prefix:f}})}s.deleteShader(b),s.deleteShader(E),g=new Ui(s,_),M=Bp(s,_)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(_,Rp)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=E,this}var $p=0,Bo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new zo(t),e.set(t,n)),n}},zo=class{constructor(t){this.id=$p++,this.code=t,this.usedTimes=0}};function Kp(i){return i===qn||i===gs||i===_s}function Qp(i,t,e,n,s,r){let a=new Ji,o=new Bo,c=new Set,l=[],h=new Map,p=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,M,N,C,D,U){let H=C.fog,I=D.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,V=t.get(g.envMap||G,q),tt=u[g.type],W=n.precision;g.precision!==null&&(W=n.getMaxPrecision(g.precision),W!==g.precision&&It("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));let Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,j=Q!==void 0?Q.length:0,rt=0;I.morphAttributes.position!==void 0&&(rt=1),I.morphAttributes.normal!==void 0&&(rt=2),I.morphAttributes.color!==void 0&&(rt=3);let vt,Y,it,mt;if(tt){let gt=pn[tt];vt=gt.vertexShader,Y=gt.fragmentShader}else{vt=g.vertexShader,Y=g.fragmentShader;let gt=o.getVertexShaderStage(g),Kt=o.getFragmentShaderStage(g);o.update(g,gt,Kt),it=gt.id,mt=Kt.id}let Et=i.getRenderTarget(),ht=i.state.buffers.depth.getReversed(),Lt=D.isInstancedMesh===!0,Yt=D.isBatchedMesh===!0,Tt=!!g.map,Xt=!!g.matcap,Jt=!!V,Ct=Jt&&V.isPMREMTexture===!0,ye=!!g.aoMap,he=!!g.lightMap,Ue=!!g.bumpMap&&g.wireframe===!1,ae=!!g.normalMap,rn=!!g.displacementMap,me=!!g.emissiveMap,ke=!!g.metalnessMap,Ve=!!g.roughnessMap,He=g.anisotropy>0,L=g.clearcoat>0,We=g.diffuseRoughness>0,ee=g.dispersion>0,ne=g.retroreflectivity>0,pt=g.iridescence>0,ue=g.sheen>0,Rt=g.transmission>0,Nt=He&&!!g.anisotropyMap,T=L&&!!g.clearcoatMap,x=L&&!!g.clearcoatNormalMap,O=L&&!!g.clearcoatRoughnessMap,et=We&&!!g.diffuseRoughnessMap,K=pt&&!!g.iridescenceMap,at=pt&&!!g.iridescenceThicknessMap,dt=ue&&!!g.sheenColorMap,Z=ue&&!!g.sheenRoughnessMap,J=!!g.specularMap,lt=!!g.specularColorMap,R=!!g.specularIntensityMap,$=Rt&&!!g.transmissionMap,X=Rt&&!!g.thicknessMap,ct=!!g.gradientMap,st=!!g.alphaMap,ot=g.alphaTest>0,At=!!g.alphaHash,Bt=!!g.extensions,nt=dn;g.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(nt=i.toneMapping);let wt=Ct?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ot={shaderID:tt,shaderType:g.type,shaderName:g.name,vertexShader:vt,fragmentShader:Y,defines:g.defines,customVertexShaderID:it,customFragmentShaderID:mt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:Yt,batchingColor:Yt&&D._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&D.instanceColor!==null,instancingMorph:Lt&&D.morphTexture!==null,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Ht.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Tt,matcap:Xt,envMap:Jt,envMapMode:Jt&&V.mapping,envMapPMREM:Ct,envMapMaxLod:Ct?wt.length-1:null,envMapSize:Ct?wt[0].width:null,aoMap:ye,lightMap:he,bumpMap:Ue,normalMap:ae,displacementMap:rn,emissiveMap:me,normalMapObjectSpace:ae&&g.normalMapType===Zl,normalMapTangentSpace:ae&&g.normalMapType===ua,packedNormalMap:ae&&g.normalMapType===ua&&Kp(g.normalMap.format),metalnessMap:ke,roughnessMap:Ve,anisotropy:He,anisotropyMap:Nt,clearcoat:L,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:O,diffuseRoughness:We,diffuseRoughnessMap:et,dispersion:ee,retroreflection:ne,iridescence:pt,iridescenceMap:K,iridescenceThicknessMap:at,sheen:ue,sheenColorMap:dt,sheenRoughnessMap:Z,specularMap:J,specularColorMap:lt,specularIntensityMap:R,transmission:Rt,transmissionMap:$,thicknessMap:X,gradientMap:ct,opaque:g.transparent===!1&&g.blending===Li&&g.alphaToCoverage===!1,alphaMap:st,alphaTest:ot,alphaHash:At,combine:g.combine,mapUv:Tt&&m(g.map.channel),aoMapUv:ye&&m(g.aoMap.channel),lightMapUv:he&&m(g.lightMap.channel),bumpMapUv:Ue&&m(g.bumpMap.channel),normalMapUv:ae&&m(g.normalMap.channel),displacementMapUv:rn&&m(g.displacementMap.channel),emissiveMapUv:me&&m(g.emissiveMap.channel),metalnessMapUv:ke&&m(g.metalnessMap.channel),roughnessMapUv:Ve&&m(g.roughnessMap.channel),anisotropyMapUv:Nt&&m(g.anisotropyMap.channel),clearcoatMapUv:T&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:K&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:at&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Z&&m(g.sheenRoughnessMap.channel),specularMapUv:J&&m(g.specularMap.channel),specularColorMapUv:lt&&m(g.specularColorMap.channel),specularIntensityMapUv:R&&m(g.specularIntensityMap.channel),transmissionMapUv:$&&m(g.transmissionMap.channel),thicknessMapUv:X&&m(g.thicknessMap.channel),alphaMapUv:st&&m(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ae||He),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Tt||st),fog:!!H,useFog:g.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&ae===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ht,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:rt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(gt=>gt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:nt,decodeVideoTexture:Tt&&g.map.isVideoTexture===!0&&Ht.getTransfer(g.map.colorSpace)===$t,decodeVideoTextureEmissive:me&&g.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(g.emissiveMap.colorSpace)===$t,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ze,flipSided:g.side===be,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Bt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&g.extensions.multiDraw===!0||Yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function y(g){let M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(let N in g.defines)M.push(N),M.push(g.defines[N]);return g.isRawShaderMaterial===!1&&(f(M,g),d(M,g),M.push(i.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function f(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapPMREM),g.push(M.envMapMaxLod),g.push(M.envMapSize),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.diffuseRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.numLightProbeGrids),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function d(g,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function S(g){let M=u[g.type],N;if(M){let C=pn[M];N=lc.clone(C.uniforms)}else N=g.uniforms;return N}function w(g,M){let N=h.get(M);return N!==void 0?++N.usedTimes:(N=new Jp(i,M,g,s),l.push(N),h.set(M,N)),N}function b(g){if(--g.usedTimes===0){let M=l.indexOf(g);l[M]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function E(g){o.remove(g)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:S,acquireProgram:w,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:A}}function jp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function tm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Rc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,_,y,f,d){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:m,material:_,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:f,group:d},i[t]=S):(S.id=u.id,S.object=u,S.geometry=m,S.material=_,S.materialVariant=a(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=f,S.group=d),t++,S}function c(u,m,_,y,f,d,S){S.reversedDepth===!0&&(f=-f);let w=o(u,m,_,y,f,d);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):e.push(w)}function l(u,m,_,y,f,d){let S=o(u,m,_,y,f,d);_.transmission>0?n.unshift(S):_.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,m){e.length>1&&e.sort(u||tm),n.length>1&&n.sort(m||Rc),s.length>1&&s.sort(m||Rc)}function p(){for(let u=t,m=i.length;u<m;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:h}}function em(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Cc,i.set(n,[a])):s>=r.length?(a=new Cc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function nm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new Ut};break;case"SpotLight":e={position:new z,direction:new z,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function im(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var sm=0;function rm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function am(i){let t=new nm,e=im(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);let s=new z,r=new ie,a=new ie;function o(l){let h=0,p=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,_=0,y=0,f=0,d=0,S=0,w=0,b=0,E=0,A=0,g=0,M=0,N=0,C=0;l.sort(rm);for(let U=0,H=l.length;U<H;U++){let I=l[U],G=I.color,q=I.intensity,V=I.distance,tt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===qn?tt=I.shadow.map.texture:tt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=G.r*q,p+=G.g*q,u+=G.b*q;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],q);C++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,j=e.get(I);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[_]=j,n.sunShadowMap[_]=tt;let rt=Q.getViewportCount();for(let vt=0;vt<rt;vt++)n.sunShadowMatrix[y+vt]=Q.getMatrix(vt),n.sunShadowCascade[y+vt]=Q._cascadeData[vt];y+=rt,_++}n.sun[m]=W,m++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,j=e.get(I);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=tt,n.directionalShadowMatrix[f]=I.shadow.matrix,E++}n.directional[f]=W,f++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(G).multiplyScalar(q),W.distance=V,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[S]=W;let Q=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,Q.updateMatrices(I),I.castShadow&&N++),n.spotLightMatrix[S]=Q.matrix,I.castShadow){let j=e.get(I);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=tt,g++}S++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(G).multiplyScalar(q),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=W,w++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let Q=I.shadow,j=e.get(I);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[d]=j,n.pointShadowMap[d]=tt,n.pointShadowMatrix[d]=I.shadow.matrix,A++}n.point[d]=W,d++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(q),W.groundColor.copy(I.groundColor).multiplyScalar(q),n.hemi[b]=W,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let D=n.hash;(D.sunLength!==m||D.directionalLength!==f||D.pointLength!==d||D.spotLength!==S||D.rectAreaLength!==w||D.hemiLength!==b||D.numSunShadows!==_||D.numDirectionalShadows!==E||D.numPointShadows!==A||D.numSpotShadows!==g||D.numSpotMaps!==M||D.numLightProbes!==C)&&(n.sun.length=m,n.directional.length=f,n.spot.length=S,n.rectArea.length=w,n.point.length=d,n.hemi.length=b,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+M-N,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=C,D.sunLength=m,D.directionalLength=f,D.pointLength=d,D.spotLength=S,D.rectAreaLength=w,D.hemiLength=b,D.numSunShadows=_,D.numDirectionalShadows=E,D.numPointShadows=A,D.numSpotShadows=g,D.numSpotMaps=M,D.numLightProbes=C,n.version=sm++)}function c(l,h){let p=0,u=0,m=0,_=0,y=0,f=0,d=h.matrixWorldInverse;for(let S=0,w=l.length;S<w;S++){let b=l[S];if(b.isSunLight){let E=n.sun[p];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(d),p++}else if(b.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),u++}else if(b.isSpotLight){let E=n.spot[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),_++}else if(b.isRectAreaLight){let E=n.rectArea[y];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(d),a.identity(),r.copy(b.matrixWorld),r.premultiply(d),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){let E=n.point[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(d),m++}else if(b.isHemisphereLight){let E=n.hemi[f];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(d),f++}}}return{setup:o,setupView:c,state:n}}function Ic(i){let t=new am(i),e=[],n=[],s=[];function r(p){h.camera=p,e.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){n.push(p)}function c(){t.setup(e),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function l(p){t.setupView(e,p)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function om(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ic(i),t.set(s,[o])):r>=a.length?(o=new Ic(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cm=`uniform sampler2D shadow_pass;
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
}`,hm=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],um=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Pc=new ie,vs=new z,Do=new z;function dm(i,t,e){let n=new zn,s=new Gt,r=new Gt,a=new re,o=new hr,c=new ur,l={},h=e.maxTextureSize,p={[Xn]:be,[be]:Xn,[Ze]:Ze},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:lm,fragmentShader:cm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let _=new Ye;_.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new de(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cs;let d=this.type;this.render=function(A,g,M){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;this.type===Al&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cs);let N=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(si),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=d!==this.type;H&&g.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=A.length;I<G;I++){let q=A[I],V=q.shadow;if(V===void 0){It("WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let tt=V.getFrameExtents();s.multiply(tt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,V.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=W,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Pi){if(q.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ze(s.x,s.y,{format:qn,type:nn,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),V.map.texture.name=q.name+".shadowMap",V.map.depthTexture=new An(s.x,s.y,en),V.map.depthTexture.name=q.name+".shadowMapDepth",V.map.depthTexture.format=Mn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ve,V.map.depthTexture.magFilter=ve}else q.isPointLight?(V.map=new Ss(s.x),V.map.depthTexture=new ji(s.x,tn)):(V.map=new ze(s.x,s.y),V.map.depthTexture=new An(s.x,s.y,tn)),V.map.depthTexture.name=q.name+".shadowMap",V.map.depthTexture.format=Mn,this.type===cs?(V.map.depthTexture.compareFunction=W?xo:_o,V.map.depthTexture.minFilter=Ne,V.map.depthTexture.magFilter=Ne):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ve,V.map.depthTexture.magFilter=ve);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();q.isPointLight!==!0&&V.updateMatrices(q,M);let j=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:M.layers;for(let rt=0;rt<Q;rt++){let vt=V.getCamera(rt);if(q.isPointLight){let Y=V.camera,it=V.matrix,mt=q.distance||Y.far;mt!==Y.far&&(Y.far=mt,Y.updateProjectionMatrix()),vs.setFromMatrixPosition(q.matrixWorld),Y.position.copy(vs),Do.copy(Y.position),Do.add(hm[rt]),Y.up.copy(um[rt]),Y.lookAt(Do),Y.updateMatrixWorld(),it.makeTranslation(-vs.x,-vs.y,-vs.z),Pc.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Pc,Y.coordinateSystem,Y.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,rt),i.clear();else{rt===0&&(i.setRenderTarget(V.map),i.clear());let Y=V.getViewport(rt);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),U.viewport(a)}n=V.getFrustum(rt),b(g,M,vt,q,j,this.type)}V.isPointLightShadow!==!0&&this.type===Pi&&S(V,M),V.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(N,C,D)};function S(A,g){let M=t.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null?A.mapPass=new ze(s.x,s.y,{format:qn,type:nn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(g,null,M,u,y,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value.set(A.map.width,A.map.height),m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(g,null,M,m,y,null)}function w(A,g,M,N){let C=null,D=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)C=D;else if(C=M.isPointLight===!0?c:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let U=C.uuid,H=g.uuid,I=l[U];I===void 0&&(I={},l[U]=I);let G=I[H];G===void 0&&(G=C.clone(),I[H]=G,g.addEventListener("dispose",E)),C=G}if(C.visible=g.visible,C.wireframe=g.wireframe,N===Pi?C.side=g.shadowSide!==null?g.shadowSide:g.side:C.side=g.shadowSide!==null?g.shadowSide:p[g.side],C.alphaMap=g.alphaMap,C.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,C.map=g.map,C.clipShadows=g.clipShadows,C.clippingPlanes=g.clippingPlanes,C.clipIntersection=g.clipIntersection,C.displacementMap=g.displacementMap,C.displacementScale=g.displacementScale,C.displacementBias=g.displacementBias,C.wireframeLinewidth=g.wireframeLinewidth,C.linewidth=g.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=i.properties.get(C);U.light=M}return C}function b(A,g,M,N,C,D){if(A.visible===!1)return;if(A.layers.test(C)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===Pi)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);let I=t.update(A),G=A.material;if(Array.isArray(G)){let q=I.groups;for(let V=0,tt=q.length;V<tt;V++){let W=q[V],Q=G[W.materialIndex];if(Q&&Q.visible){let j=w(A,Q,N,D);A.onBeforeShadow(i,A,g,M,I,j,W),i.renderBufferDirect(M,null,I,j,A,W),A.onAfterShadow(i,A,g,M,I,j,W)}}}else if(G.visible){let q=w(A,G,N,D);A.onBeforeShadow(i,A,g,M,I,q,null),i.renderBufferDirect(M,null,I,q,A,null),A.onAfterShadow(i,A,g,M,I,q,null)}}let H=A.children;for(let I=0,G=H.length;I<G;I++)b(H[I],g,M,N,C,D)}function E(A){A.target.removeEventListener("dispose",E);for(let M in l){let N=l[M],C=A.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function fm(i,t){function e(){let R=!1,$=new re,X=null,ct=new re(0,0,0,0);return{setMask:function(st){X!==st&&!R&&(i.colorMask(st,st,st,st),X=st)},setLocked:function(st){R=st},setClear:function(st,ot,At,Bt,nt){nt===!0&&(st*=Bt,ot*=Bt,At*=Bt),$.set(st,ot,At,Bt),ct.equals($)===!1&&(i.clearColor(st,ot,At,Bt),ct.copy($))},reset:function(){R=!1,X=null,ct.set(-1,0,0,0)}}}function n(){let R=!1,$=!1,X=null,ct=null,st=null;return{setReversed:function(ot){if($!==ot){let At=t.get("EXT_clip_control");ot?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),$=ot;let Bt=st;st=null,this.setClear(Bt)}},getReversed:function(){return $},setTest:function(ot){ot?ht(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(ot){X!==ot&&!R&&(i.depthMask(ot),X=ot)},setFunc:function(ot){if($&&(ot=rc[ot]),ct!==ot){switch(ot){case Ys:i.depthFunc(i.NEVER);break;case Zs:i.depthFunc(i.ALWAYS);break;case Js:i.depthFunc(i.LESS);break;case bi:i.depthFunc(i.LEQUAL);break;case $s:i.depthFunc(i.EQUAL);break;case Ks:i.depthFunc(i.GEQUAL);break;case Qs:i.depthFunc(i.GREATER);break;case js:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=ot}},setLocked:function(ot){R=ot},setClear:function(ot){st!==ot&&(st=ot,$&&(ot=1-ot),i.clearDepth(ot))},reset:function(){R=!1,X=null,ct=null,st=null,$=!1}}}function s(){let R=!1,$=null,X=null,ct=null,st=null,ot=null,At=null,Bt=null,nt=null;return{setTest:function(wt){R||(wt?ht(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(wt){$!==wt&&!R&&(i.stencilMask(wt),$=wt)},setFunc:function(wt,Ot,gt){(X!==wt||ct!==Ot||st!==gt)&&(i.stencilFunc(wt,Ot,gt),X=wt,ct=Ot,st=gt)},setOp:function(wt,Ot,gt){(ot!==wt||At!==Ot||Bt!==gt)&&(i.stencilOp(wt,Ot,gt),ot=wt,At=Ot,Bt=gt)},setLocked:function(wt){R=wt},setClear:function(wt){nt!==wt&&(i.clearStencil(wt),nt=wt)},reset:function(){R=!1,$=null,X=null,ct=null,st=null,ot=null,At=null,Bt=null,nt=null}}}let r=new e,a=new n,o=new s,c={},l=new WeakMap,h={},p={},u={},m=new WeakMap,_=[],y=null,f=!1,d=null,S=null,w=null,b=null,E=null,A=null,g=null,M=new Ut(0,0,0),N=0,C=!1,D=null,U=null,H=null,I=null,G=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,tt=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=tt>=1):W.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=tt>=2);let Q=null,j={},rt=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Y=new re().fromArray(rt),it=new re().fromArray(vt);function mt(R,$,X,ct){let st=new Uint8Array(4),ot=i.createTexture();i.bindTexture(R,ot),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<X;At++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D($+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return ot}let Et={};Et[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(i.DEPTH_TEST),a.setFunc(bi),Ue(!1),ae(Ja),ht(i.CULL_FACE),ye(si);function ht(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Lt(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Yt(R,$){return u[R]!==$?(i.bindFramebuffer(R,$),u[R]=$,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=$),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Tt(R,$){let X=_,ct=!1;if(R){X=m.get($),X===void 0&&(X=[],m.set($,X));let st=R.textures;if(X.length!==st.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,At=st.length;ot<At;ot++)X[ot]=i.COLOR_ATTACHMENT0+ot;X.length=st.length,ct=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,ct=!0);ct&&i.drawBuffers(X)}function Xt(R){return y!==R?(i.useProgram(R),y=R,!0):!1}let Jt={[ri]:i.FUNC_ADD,[wl]:i.FUNC_SUBTRACT,[Rl]:i.FUNC_REVERSE_SUBTRACT};Jt[Cl]=i.MIN,Jt[Il]=i.MAX;let Ct={[Pl]:i.ZERO,[Ll]:i.ONE,[Dl]:i.SRC_COLOR,[ja]:i.SRC_ALPHA,[zl]:i.SRC_ALPHA_SATURATE,[Ol]:i.DST_COLOR,[Ul]:i.DST_ALPHA,[Nl]:i.ONE_MINUS_SRC_COLOR,[to]:i.ONE_MINUS_SRC_ALPHA,[Bl]:i.ONE_MINUS_DST_COLOR,[Fl]:i.ONE_MINUS_DST_ALPHA,[Gl]:i.CONSTANT_COLOR,[kl]:i.ONE_MINUS_CONSTANT_COLOR,[Vl]:i.CONSTANT_ALPHA,[Hl]:i.ONE_MINUS_CONSTANT_ALPHA};function ye(R,$,X,ct,st,ot,At,Bt,nt,wt){if(R===si){f===!0&&(Lt(i.BLEND),f=!1);return}if(f===!1&&(ht(i.BLEND),f=!0),R!==El){if(R!==d||wt!==C){if((S!==ri||E!==ri)&&(i.blendEquation(i.FUNC_ADD),S=ri,E=ri),wt)switch(R){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $a:i.blendFunc(i.ONE,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",R);break}else switch(R){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $a:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ka:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qa:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",R);break}w=null,b=null,A=null,g=null,M.set(0,0,0),N=0,d=R,C=wt}return}st=st||$,ot=ot||X,At=At||ct,($!==S||st!==E)&&(i.blendEquationSeparate(Jt[$],Jt[st]),S=$,E=st),(X!==w||ct!==b||ot!==A||At!==g)&&(i.blendFuncSeparate(Ct[X],Ct[ct],Ct[ot],Ct[At]),w=X,b=ct,A=ot,g=At),(Bt.equals(M)===!1||nt!==N)&&(i.blendColor(Bt.r,Bt.g,Bt.b,nt),M.copy(Bt),N=nt),d=R,C=!1}function he(R,$){R.side===Ze?Lt(i.CULL_FACE):ht(i.CULL_FACE);let X=R.side===be;$&&(X=!X),Ue(X),R.blending===Li&&R.transparent===!1?ye(si):ye(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let ct=R.stencilWrite;o.setTest(ct),ct&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),me(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(R){D!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),D=R)}function ae(R){R!==bl?(ht(i.CULL_FACE),R!==U&&(R===Ja?i.cullFace(i.BACK):R===Tl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),U=R}function rn(R){R!==H&&(V&&i.lineWidth(R),H=R)}function me(R,$,X){R?(ht(i.POLYGON_OFFSET_FILL),(I!==$||G!==X)&&(I=$,G=X,a.getReversed()&&($=-$,X=-X),i.polygonOffset($,X))):Lt(i.POLYGON_OFFSET_FILL)}function ke(R){R?ht(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function Ve(R){R===void 0&&(R=i.TEXTURE0+q-1),Q!==R&&(i.activeTexture(R),Q=R)}function He(R,$,X){X===void 0&&(Q===null?X=i.TEXTURE0+q-1:X=Q);let ct=j[X];ct===void 0&&(ct={type:void 0,texture:void 0},j[X]=ct),(ct.type!==R||ct.texture!==$)&&(Q!==X&&(i.activeTexture(X),Q=X),i.bindTexture(R,$||Et[R]),ct.type=R,ct.texture=$)}function L(){let R=j[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function We(){try{i.compressedTexImage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function ee(){try{i.compressedTexImage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function ne(){try{i.texSubImage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function pt(){try{i.texSubImage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function ue(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function Nt(){try{i.texStorage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function T(){try{i.texStorage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){Pt("WebGLState:",R)}}function O(){try{i.texImage3D(...arguments)}catch(R){Pt("WebGLState:",R)}}function et(R){return p[R]!==void 0?p[R]:i.getParameter(R)}function K(R,$){p[R]!==$&&(i.pixelStorei(R,$),p[R]=$)}function at(R){Y.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Y.copy(R))}function dt(R){it.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),it.copy(R))}function Z(R,$){let X=l.get($);X===void 0&&(X=new WeakMap,l.set($,X));let ct=X.get(R);ct===void 0&&(ct=i.getUniformBlockIndex($,R.name),i.uniformBlockBinding($,ct,ct),X.set(R,ct))}function J(R,$,X){let st=l.get($).get(R);c[st]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,st,X),c[st]=X)}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},Q=null,j={},u={},c={},m=new WeakMap,_=[],y=null,f=!1,d=null,S=null,w=null,b=null,E=null,A=null,g=null,M=new Ut(0,0,0),N=0,C=!1,D=null,U=null,H=null,I=null,G=null,Y.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:Lt,bindFramebuffer:Yt,drawBuffers:Tt,useProgram:Xt,setBlending:ye,setMaterial:he,setFlipSided:Ue,setCullFace:ae,setLineWidth:rn,setPolygonOffset:me,setScissorTest:ke,activeTexture:Ve,bindTexture:He,unbindTexture:L,compressedTexImage2D:We,compressedTexImage3D:ee,texImage2D:x,texImage3D:O,pixelStorei:K,getParameter:et,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:Nt,texStorage3D:T,texSubImage2D:ne,texSubImage3D:pt,compressedTexSubImage2D:ue,compressedTexSubImage3D:Rt,scissor:at,viewport:dt,reset:lt}}function pm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Gt,h=new WeakMap,p=new Set,u,m=new WeakMap,_=new Set,y=new FinalizationRegistry(T=>_.delete(T)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(T,x){return f?new OffscreenCanvas(T,x):qi("canvas")}function S(T,x,O){let et=1,K=Nt(T);if((K.width>O||K.height>O)&&(et=O/Math.max(K.width,K.height)),et<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let at=Math.floor(et*K.width),dt=Math.floor(et*K.height);u===void 0&&(u=d(at,dt));let Z=x?d(at,dt):u;return Z.width=at,Z.height=dt,Z.getContext("2d").drawImage(T,0,0,at,dt),It("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+at+"x"+dt+")."),Z}else return"data"in T&&It("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function w(T){return T.generateMipmaps}function b(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(T,x,O,et,K,at=!1){if(T!==null){if(i[T]!==void 0)return i[T];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let dt;et&&(dt=t.get("EXT_texture_norm16"),dt||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8),O===i.UNSIGNED_SHORT&&dt&&(Z=dt.R16_EXT),O===i.SHORT&&dt&&(Z=dt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),x===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8),O===i.UNSIGNED_SHORT&&dt&&(Z=dt.RG16_EXT),O===i.SHORT&&dt&&(Z=dt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_SHORT&&dt&&(Z=dt.RGB16_EXT),O===i.SHORT&&dt&&(Z=dt.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),x===i.RGBA){let J=at?Xi:Ht.getTransfer(K);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=J===$t?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&dt&&(Z=dt.RGBA16_EXT),O===i.SHORT&&dt&&(Z=dt.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function g(T,x){let O;return T?x===null||x===tn||x===oi?O=i.DEPTH24_STENCIL8:x===en?O=i.DEPTH32F_STENCIL8:x===Ni&&(O=i.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===tn||x===oi?O=i.DEPTH_COMPONENT24:x===en?O=i.DEPTH_COMPONENT32F:x===Ni&&(O=i.DEPTH_COMPONENT16),O}function M(T,x){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==ve&&T.minFilter!==Ne?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function N(T){let x=new WeakRef(T);n.get(T).__ref=x,_.add(x),y.register(T,x,x)}function C(T){let x=n.get(T).__ref;x!==void 0&&(_.delete(x),y.unregister(x))}function D(T){H(T.target)}function U(T){I(T.target)}function H(T){T.removeEventListener("dispose",D),C(T),q(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&p.delete(T)}function I(T){T.removeEventListener("dispose",U),C(T),tt(T)}function G(){for(let T of _){let x=T.deref();x!==void 0&&(x.isRenderTarget===!0?I(x):H(x))}_.clear(),p.clear()}function q(T){let x=n.get(T);if(x.__webglInit===void 0)return;let O=T.source,et=m.get(O);if(et){let K=et[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&V(T),Object.keys(et).length===0&&m.delete(O)}n.remove(T)}function V(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let O=T.source,et=m.get(O);delete et[x.__cacheKey],a.memory.textures--}function tt(T){let x=n.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();let O=T.depthTexture;if(O&&O.renderTarget===T&&H(O),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let at=0;at<x.__webglFramebuffer[K].length;at++)i.deleteFramebuffer(x.__webglFramebuffer[K][at]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let et=T.textures;for(let K=0,at=et.length;K<at;K++){let dt=n.get(et[K]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(et[K])}n.remove(T)}let W=0;function Q(){W=0}function j(){return W}function rt(T){W=T}function vt(){let T=W;return T>=s.maxTextures&&It("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,T}function Y(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function it(T,x){let O=n.get(T);if(T.isVideoTexture&&ue(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){let et=T.image;if(et===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{he(O,T,x);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function mt(T,x){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){he(O,T,x);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function Et(T,x){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){he(O,T,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function ht(T,x){let O=n.get(T);if(T.version>0&&O.__version!==T.version){Ue(O,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let Lt={[Ti]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[tr]:i.MIRRORED_REPEAT},Yt={[ve]:i.NEAREST,[ql]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[Ne]:i.LINEAR,[Rr]:i.LINEAR_MIPMAP_NEAREST,[En]:i.LINEAR_MIPMAP_LINEAR},Tt={[$l]:i.NEVER,[vo]:i.ALWAYS,[Kl]:i.LESS,[_o]:i.LEQUAL,[Ql]:i.EQUAL,[xo]:i.GEQUAL,[jl]:i.GREATER,[tc]:i.NOTEQUAL};function Xt(T,x){if(x.type===en&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ne||x.magFilter===Rr||x.magFilter===us||x.magFilter===En||x.minFilter===Ne||x.minFilter===Rr||x.minFilter===us||x.minFilter===En)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Lt[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Lt[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Lt[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Yt[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Yt[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Tt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ve||x.minFilter!==us&&x.minFilter!==En||x.type===en&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Jt(T,x){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",D),N(x));let et=x.source,K=m.get(et);K===void 0&&(K={},m.set(et,K));let at=Y(x);if(at!==T.__cacheKey){K[at]===void 0&&(K[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[at].usedTimes++;let dt=K[T.__cacheKey];dt!==void 0&&(K[T.__cacheKey].usedTimes--,dt.usedTimes===0&&V(x)),T.__cacheKey=at,T.__webglTexture=K[at].texture}return O}function Ct(T,x,O){return Math.floor(Math.floor(T/O)/x)}function ye(T,x,O,et){let at=T.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,et,x.data);else{at.sort((R,$)=>R.start-$.start);let dt=0;for(let R=1;R<at.length;R++){let $=at[dt],X=at[R],ct=$.start+$.count,st=Ct(X.start,x.width,4),ot=Ct($.start,x.width,4);X.start<=ct+1&&st===ot&&Ct(X.start+X.count-1,x.width,4)===st?$.count=Math.max($.count,X.start+X.count-$.start):(++dt,at[dt]=X)}at.length=dt+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,$=at.length;R<$;R++){let X=at[R],ct=Math.floor(X.start/4),st=Math.ceil(X.count/4),ot=ct%x.width,At=Math.floor(ct/x.width),Bt=st,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,At),e.texSubImage2D(i.TEXTURE_2D,0,ot,At,Bt,nt,O,et,x.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,lt)}}function he(T,x,O){let et=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(et=i.TEXTURE_3D);let K=Jt(T,x),at=x.source;e.bindTexture(et,T.__webglTexture,i.TEXTURE0+O);let dt=n.get(at);if(at.version!==dt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let nt=Ht.getPrimaries(Ht.workingColorSpace),wt=x.colorSpace===Rn?null:Ht.getPrimaries(x.colorSpace),Ot=x.colorSpace===Rn||nt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let J=S(x.image,!1,s.maxTextureSize);J=Rt(x,J);let lt=r.convert(x.format,x.colorSpace),R=r.convert(x.type),$=A(x.internalFormat,lt,R,x.normalized,x.colorSpace,x.isVideoTexture);Xt(et,x);let X,ct=x.mipmaps,st=x.isVideoTexture!==!0,ot=dt.__version===void 0||K===!0,At=at.dataReady,Bt=M(x,J);if(x.isDepthTexture)$=g(x.format===wn,x.type),ot&&(st?e.texStorage2D(i.TEXTURE_2D,1,$,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,lt,R,null));else if(x.isDataTexture)if(ct.length>0){st&&ot&&e.texStorage2D(i.TEXTURE_2D,Bt,$,ct[0].width,ct[0].height);for(let nt=0,wt=ct.length;nt<wt;nt++)X=ct[nt],st?At&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,X.width,X.height,lt,R,X.data):e.texImage2D(i.TEXTURE_2D,nt,$,X.width,X.height,0,lt,R,X.data);x.generateMipmaps=!1}else st?(ot&&e.texStorage2D(i.TEXTURE_2D,Bt,$,J.width,J.height),At&&ye(x,J,lt,R)):e.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,lt,R,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){st&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,$,ct[0].width,ct[0].height,J.depth);for(let nt=0,wt=ct.length;nt<wt;nt++)if(X=ct[nt],x.format!==sn)if(lt!==null)if(st){if(At)if(x.layerUpdates.size>0){let Ot=Eo(X.width,X.height,x.format,x.type);for(let gt of x.layerUpdates){let Kt=X.data.subarray(gt*Ot/X.data.BYTES_PER_ELEMENT,(gt+1)*Ot/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,gt,X.width,X.height,1,lt,Kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,X.width,X.height,J.depth,lt,X.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,$,X.width,X.height,J.depth,0,X.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?At&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,X.width,X.height,J.depth,lt,R,X.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,$,X.width,X.height,J.depth,0,lt,R,X.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{st&&ot&&e.texStorage2D(i.TEXTURE_2D,Bt,$,ct[0].width,ct[0].height);for(let nt=0,wt=ct.length;nt<wt;nt++)X=ct[nt],x.format!==sn?lt!==null?st?At&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,X.width,X.height,lt,X.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,$,X.width,X.height,0,X.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?At&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,X.width,X.height,lt,R,X.data):e.texImage2D(i.TEXTURE_2D,nt,$,X.width,X.height,0,lt,R,X.data)}else if(x.isDataArrayTexture)if(st){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,$,J.width,J.height,J.depth),At)if(x.layerUpdates.size>0){let nt=Eo(J.width,J.height,x.format,x.type);for(let wt of x.layerUpdates){let Ot=J.data.subarray(wt*nt/J.data.BYTES_PER_ELEMENT,(wt+1)*nt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,J.width,J.height,1,lt,R,Ot)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,lt,R,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,J.width,J.height,J.depth,0,lt,R,J.data);else if(x.isData3DTexture)st?(ot&&e.texStorage3D(i.TEXTURE_3D,Bt,$,J.width,J.height,J.depth),At&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,lt,R,J.data)):e.texImage3D(i.TEXTURE_3D,0,$,J.width,J.height,J.depth,0,lt,R,J.data);else if(x.isFramebufferTexture){if(ot)if(st)e.texStorage2D(i.TEXTURE_2D,Bt,$,J.width,J.height);else{let nt=J.width,wt=J.height;for(let Ot=0;Ot<Bt;Ot++)e.texImage2D(i.TEXTURE_2D,Ot,$,nt,wt,0,lt,R,null),nt>>=1,wt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),J.parentNode!==nt){nt.appendChild(J),p.add(x),nt.onpaint=wt=>{let Ot=wt.changedElements;for(let gt of p)Ot.includes(gt.image)&&(gt.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let Ot=i.RGBA,gt=i.RGBA,Kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ot,gt,Kt,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ct.length>0){if(st&&ot){let nt=Nt(ct[0]);e.texStorage2D(i.TEXTURE_2D,Bt,$,nt.width,nt.height)}for(let nt=0,wt=ct.length;nt<wt;nt++)X=ct[nt],st?At&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,lt,R,X):e.texImage2D(i.TEXTURE_2D,nt,$,lt,R,X);x.generateMipmaps=!1}else if(st){if(ot){let nt=Nt(J);e.texStorage2D(i.TEXTURE_2D,Bt,$,nt.width,nt.height)}At&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,R,J)}else e.texImage2D(i.TEXTURE_2D,0,$,lt,R,J);w(x)&&x.mipmapsAutoUpdate===!0&&b(et),dt.__version=at.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ue(T,x,O){if(x.image.length!==6)return;let et=Jt(T,x),K=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let at=n.get(K);if(K.version!==at.__version||et===!0){e.activeTexture(i.TEXTURE0+O);let dt=Ht.getPrimaries(Ht.workingColorSpace),Z=x.colorSpace===Rn?null:Ht.getPrimaries(x.colorSpace),J=x.colorSpace===Rn||dt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let lt=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,$=[];for(let gt=0;gt<6;gt++)!lt&&!R?$[gt]=S(x.image[gt],!0,s.maxCubemapSize):$[gt]=R?x.image[gt].image:x.image[gt],$[gt]=Rt(x,$[gt]);let X=$[0],ct=r.convert(x.format,x.colorSpace),st=r.convert(x.type),ot=A(x.internalFormat,ct,st,x.normalized,x.colorSpace),At=x.isVideoTexture!==!0,Bt=at.__version===void 0||et===!0,nt=K.dataReady,wt=M(x,X);Xt(i.TEXTURE_CUBE_MAP,x);let Ot;if(x.isDepthTexture){if(ot=g(x.format===wn,x.type),Bt)if(At)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ot,X.width,X.height);else for(let gt=0;gt<6;gt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,X.width,X.height,0,ct,st,null)}else if(lt){At&&Bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,ot,X.width,X.height);for(let gt=0;gt<6;gt++){Ot=$[gt].mipmaps;for(let Kt=0;Kt<Ot.length;Kt++){let ge=Ot[Kt];x.format!==sn?ct!==null?At?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Kt,0,0,ge.width,ge.height,ct,ge.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Kt,ot,ge.width,ge.height,0,ge.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Kt,0,0,ge.width,ge.height,ct,st,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Kt,ot,ge.width,ge.height,0,ct,st,ge.data)}}}else{if(Ot=x.mipmaps,At&&Bt){Ot.length>0&&wt++;let gt=Nt($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,ot,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(R){At?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,$[gt].width,$[gt].height,ct,st,$[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,$[gt].width,$[gt].height,0,ct,st,$[gt].data);for(let Kt=0;Kt<Ot.length;Kt++){let Cn=Ot[Kt].image[gt].image;At?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Kt+1,0,0,Cn.width,Cn.height,ct,st,Cn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Kt+1,ot,Cn.width,Cn.height,0,ct,st,Cn.data)}}else{At?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ct,st,$[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,ct,st,$[gt]);for(let Kt=0;Kt<Ot.length;Kt++){let ge=Ot[Kt];At?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Kt+1,0,0,ct,st,ge.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Kt+1,ot,ct,st,ge.image[gt])}}}w(x)&&x.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),at.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ae(T,x,O,et,K,at){let dt=r.convert(O.format,O.colorSpace),Z=r.convert(O.type),J=A(O.internalFormat,dt,Z,O.normalized,O.colorSpace),lt=n.get(x),R=n.get(O);if(R.__renderTarget=x,!lt.__hasExternalTextures){let $=Math.max(1,x.width>>at),X=Math.max(1,x.height>>at);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,at,J,$,X,x.depth,0,dt,Z,null):e.texImage2D(K,at,J,$,X,0,dt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),pt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,K,R.__webglTexture,0,ne(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,K,R.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rn(T,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let et=x.depthTexture,K=et&&et.isDepthTexture?et.type:null,at=g(x.stencilBuffer,K),dt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne(x),at,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne(x),at,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,at,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,T)}else{let et=x.textures;for(let K=0;K<et.length;K++){let at=et[K],dt=r.convert(at.format,at.colorSpace),Z=r.convert(at.type),J=A(at.internalFormat,dt,Z,at.normalized,at.colorSpace);pt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne(x),J,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne(x),J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(T,x,O){let et=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(x.depthTexture);K.__renderTarget=x;let at=et?x.depthTexture.image[0]:x.depthTexture.image;(!K.__webglTexture||at.width!==x.width||at.height!==x.height)&&(at.width=x.width,at.height=x.height,x.depthTexture.needsUpdate=!0),et?ht(x.depthTexture,0):it(x.depthTexture,0);let dt=K.__webglTexture,Z=ne(x),J=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,lt=x.depthTexture.format===wn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Mn)pt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,J,dt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,lt,J,dt,0);else if(x.depthTexture.format===wn)pt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,J,dt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,lt,J,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(T){let x=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let et=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),et){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,et.removeEventListener("dispose",K)};et.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=et}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let et=0;et<6;et++)me(x.__webglFramebuffer[et],T,et);else T.texture.mipmaps.length>0?me(x.__webglFramebuffer[0],T,0):me(x.__webglFramebuffer,T,0);else if(O){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]===void 0)x.__webglDepthbuffer[et]=i.createRenderbuffer(),rn(x.__webglDepthbuffer[et],T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,at)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),rn(x.__webglDepthbuffer,T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(T,x,O){let et=n.get(T);x!==void 0&&ae(et.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ke(T)}function He(T){let x=T.texture,O=n.get(T),et=n.get(x);T.addEventListener("dispose",U),N(T);let K=T.textures,at=T.isWebGLCubeRenderTarget===!0,dt=K.length>1;if(dt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=x.version,a.memory.textures++),at){O.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0){O.__webglFramebuffer[Z]=[];for(let J=0;J<x.mipmaps.length;J++)O.__webglFramebuffer[Z][J]=i.createFramebuffer()}else O.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)O.__webglFramebuffer[Z]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(dt)for(let Z=0,J=K.length;Z<J;Z++){let lt=n.get(K[Z]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&pt(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){let J=K[Z];O.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Z]);let lt=r.convert(J.format,J.colorSpace),R=r.convert(J.type),$=A(J.internalFormat,lt,R,J.normalized,J.colorSpace,T.isXRRenderTarget===!0),X=ne(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,$,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,O.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),rn(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)ae(O.__webglFramebuffer[Z][J],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else ae(O.__webglFramebuffer[Z],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);w(x)?b(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let Z=0,J=K.length;Z<J;Z++){let lt=K[Z],R=n.get(lt),$=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,R.__webglTexture),Xt($,lt),ae(O.__webglFramebuffer,T,lt,i.COLOR_ATTACHMENT0+Z,$,0),w(lt)&&b($)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,et.__webglTexture),Xt(Z,x),x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)ae(O.__webglFramebuffer[J],T,x,i.COLOR_ATTACHMENT0,Z,J);else ae(O.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,Z,0);w(x)?b(Z):x.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&ke(T)}function L(T){let x=T.textures;for(let O=0,et=x.length;O<et;O++){let K=x[O];if(w(K)&&K.mipmapsAutoUpdate===!0){let at=E(T),dt=n.get(K).__webglTexture;e.bindTexture(at,dt),b(at),e.unbindTexture()}}}let We=[];function ee(T){if(T.samples>0){if(pt(T)===!1){let x=T.textures,O=T.width,et=T.height,K=i.COLOR_BUFFER_BIT,at=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(T),Z=x.length>1;if(Z)for(let lt=0;lt<x.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let lt=0;lt<x.length;lt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[lt]);let R=n.get(x[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,O,et,0,0,O,et,K,i.NEAREST),c===!0&&(We.length=0,We.push(i.COLOR_ATTACHMENT0+lt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&We.push(at),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let lt=0;lt<x.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[lt]);let R=n.get(x[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,R,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ne(T){return Math.min(s.maxSamples,T.samples)}function pt(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ue(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Rt(T,x){let O=T.colorSpace,et=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Wi&&O!==Rn&&(Ht.getTransfer(O)===$t?(et!==sn||K!==Fe)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",O)),x}function Nt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=vt,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=rt,this.setTexture2D=it,this.setTexture2DArray=mt,this.setTexture3D=Et,this.setTextureCube=ht,this.rebindTextures=Ve,this.setupRenderTarget=He,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=pt,this.dispose=G}function mm(i,t){function e(n,s=Rn){let r,a=Ht.getTransfer(s);if(n===Fe)return i.UNSIGNED_BYTE;if(n===Ir)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===co)return i.BYTE;if(n===ho)return i.SHORT;if(n===Ni)return i.UNSIGNED_SHORT;if(n===Cr)return i.INT;if(n===tn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===po)return i.ALPHA;if(n===mo)return i.RGB;if(n===sn)return i.RGBA;if(n===Mn)return i.DEPTH_COMPONENT;if(n===wn)return i.DEPTH_STENCIL;if(n===go)return i.RED;if(n===Lr)return i.RED_INTEGER;if(n===qn)return i.RG;if(n===Dr)return i.RG_INTEGER;if(n===Nr)return i.RGBA_INTEGER;if(n===ds||n===fs||n===ps||n===ms)if(a===$t)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ds)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ds)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ps)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ms)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ur||n===Fr||n===Or||n===Br)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Or)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Br)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zr||n===Gr||n===kr||n===Vr||n===Hr||n===gs||n===Wr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zr||n===Gr)return a===$t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vr)return r.COMPRESSED_R11_EAC;if(n===Hr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===gs)return r.COMPRESSED_RG11_EAC;if(n===Wr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xr||n===qr||n===Yr||n===Zr||n===Jr||n===$r||n===Kr||n===Qr||n===jr||n===ta||n===ea||n===na||n===ia||n===sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$r)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jr)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ta)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ea)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===na)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ia)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sa)return a===$t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ra||n===aa||n===oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ra)return a===$t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===la||n===ca||n===_s||n===ha)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===la)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_s)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_m=`
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

}`,Go=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ts(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new un({vertexShader:gm,fragmentShader:_m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ko=class extends cn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,p=null,u=null,m=null,_=null,y=typeof XRWebGLBinding<"u",f=new Go,d={},S=e.getContextAttributes(),w=null,b=null,E=[],A=[],g=new Gt,M=null,N=null,C=new Re;C.viewport=new re;let D=new Re;D.viewport=new re;let U=[C,D],H=new Tr,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=E[Y];return it===void 0&&(it=new Ri,E[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=E[Y];return it===void 0&&(it=new Ri,E[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=E[Y];return it===void 0&&(it=new Ri,E[Y]=it),it.getHandSpace()};function q(Y){let it=A.indexOf(Y.inputSource);if(it===-1)return;let mt=E[it];mt!==void 0&&(mt.update(Y.inputSource,Y.frame,l||a),mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",tt);for(let Y=0;Y<E.length;Y++){let it=A[Y];it!==null&&(A[Y]=null,E[Y].disconnect(it))}I=null,G=null,f.reset();for(let Y in d)delete d[Y];if(t.setRenderTarget(w),m=null,u=null,p=null,s=null,b=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(g.width,g.height,!1),N!==null){let Y=N.camera;Y.fov=N.fov,Y.zoom=N.zoom,Y.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",V),s.addEventListener("inputsourceschange",tt),S.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(g),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Et=null,ht=null;S.depth&&(ht=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=S.stencil?wn:Mn,Et=S.stencil?oi:tn);let Lt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new ze(u.textureWidth,u.textureHeight,{format:sn,type:Fe,depthTexture:new An(u.textureWidth,u.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new ze(m.framebufferWidth,m.framebufferHeight,{format:sn,type:Fe,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),vt.setContext(s),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function tt(Y){for(let it=0;it<Y.removed.length;it++){let mt=Y.removed[it],Et=A.indexOf(mt);Et>=0&&(A[Et]=null,E[Et].disconnect(mt))}for(let it=0;it<Y.added.length;it++){let mt=Y.added[it],Et=A.indexOf(mt);if(Et===-1){for(let Lt=0;Lt<E.length;Lt++)if(Lt>=A.length){A.push(mt),Et=Lt;break}else if(A[Lt]===null){A[Lt]=mt,Et=Lt;break}if(Et===-1)break}let ht=E[Et];ht&&ht.connect(mt)}}function W(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let it=Y.near,mt=Y.far;f.texture!==null&&(f.depthNear>0&&(it=f.depthNear),f.depthFar>0&&(mt=f.depthFar)),H.near=D.near=C.near=it,H.far=D.far=C.far=mt,(I!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,G=H.far),H.layers.mask=Y.layers.mask|6,C.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;let Et=Y.parent,ht=H.cameras;W(H,Et);for(let Lt=0;Lt<ht.length;Lt++)W(ht[Lt],Et);H.projectionMatrix.copy(C.projectionMatrix),H.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&Y.isPerspectiveCamera&&(N={camera:Y,fov:Y.fov,zoom:Y.zoom}),Q(Y,H,Et)};function Q(Y,it,mt){mt===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Yi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(H)},this.getCameraTexture=function(Y){return d[Y]};let j=null;function rt(Y,it){if(h=it.getViewerPose(l||a),_=it,h!==null){let mt=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let Et=!1;mt.length!==H.cameras.length&&(H.cameras.length=0,Et=!0);for(let Tt=0;Tt<mt.length;Tt++){let Xt=mt[Tt],Jt=null;if(m!==null)Jt=m.getViewport(Xt);else{let ye=p.getViewSubImage(u,Xt);Jt=ye.viewport,Tt===0&&(t.setRenderTargetTextures(b,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(b))}let Ct=U[Tt];Ct===void 0&&(Ct=new Re,Ct.layers.enable(Tt),Ct.viewport=new re,U[Tt]=Ct),Ct.matrix.fromArray(Xt.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Xt.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Tt===0&&(H.matrix.copy(Ct.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Et===!0&&H.cameras.push(Ct)}let ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){p=n.getBinding();let Tt=p.getDepthInformation(mt[0]);Tt&&Tt.isValid&&Tt.texture&&f.init(Tt,s.renderState)}if(ht&&ht.includes("camera-access")&&y){t.state.unbindTexture(),p=n.getBinding();for(let Tt=0;Tt<mt.length;Tt++){let Xt=mt[Tt].camera;if(Xt){let Jt=d[Xt];Jt||(Jt=new ts,d[Xt]=Jt);let Ct=p.getCameraImage(Xt);Jt.sourceTexture=Ct}}}}for(let mt=0;mt<E.length;mt++){let Et=A[mt],ht=E[mt];Et!==null&&ht!==void 0&&ht.update(Et,it,l||a)}j&&j(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),_=null}let vt=new Lc;vt.setAnimationLoop(rt),this.setAnimationLoop=function(Y){j=Y},this.dispose=function(){}}},xm=new ie,Vc=new Dt;Vc.set(-1,0,0,0,1,0,0,0,1);function vm(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,bo(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,S,w,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),p(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),u(f,d),d.isMeshPhysicalMaterial&&m(f,d,b)):d.isMeshMatcapMaterial?(r(f,d),_(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),y(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?c(f,d,S,w):d.isSpriteMaterial?l(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===be&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===be&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let S=t.get(d),w=S.envMap,b=S.envMapRotation;w&&(f.envMap.value=w,f.envMapRotation.value.setFromMatrix4(xm.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Vc),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function c(f,d,S,w){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*S,f.scale.value=w*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function l(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,S){f.ior.value=d.ior,d.diffuseRoughness>0&&(f.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=d.diffuseRoughnessMap,e(d.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===be&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.retroreflectivity>0&&(f.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,d){d.matcap&&(f.matcap.value=d.matcap)}function y(f,d){let S=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ym(i,t,e,n){let s={},r={};function a(S,w){let b=w.program;n.uniformBlockBinding(S,b,s[S.id])}function o(S,w){let b=s[S.id];b===void 0&&(_(S),b=c(S),s[S.id]=b,S.addEventListener("dispose",f));let E=w.program;n.updateUBOMapping(S,E);let A=t.render.frame;r[S.id]!==A&&(l(S),r[S.id]=A)}function c(S){let w=i.createBuffer(),b=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function l(S){let w=s[S.id],b=S.uniforms,E=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let A=0,g=b.length;A<g;A++){let M=b[A];if(Array.isArray(M))for(let N=0,C=M.length;N<C;N++)h(M[N],A,N,E);else h(M,A,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,w,b,E){if(u(S,w,b,E)===!0){let A=S.__offset,g=S.value;if(Array.isArray(g)){let M=0;for(let N=0;N<g.length;N++){let C=g[N],D=y(C,!0);p(C,S.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,S.__data)}}function p(S,w,b){typeof S=="number"||typeof S=="boolean"?w[b]=S:S.isMatrix3?(w[b]=S.elements[0],w[b+1]=S.elements[1],w[b+2]=S.elements[2],w[b+3]=0,w[b+4]=S.elements[3],w[b+5]=S.elements[4],w[b+6]=S.elements[5],w[b+7]=0,w[b+8]=S.elements[6],w[b+9]=S.elements[7],w[b+10]=S.elements[8],w[b+11]=0):ArrayBuffer.isView(S)?w.set(S.subarray(0,w.length-b),b):S.toArray(w,b)}function u(S,w,b,E){let A=S.value,g=w+"_"+b;if(Array.isArray(A)){E[g]===void 0&&(E[g]=[]);let M=E[g],N=!1;for(let C=0;C<A.length;C++)m(A[C],M,C)===!0&&(N=!0);return N}return m(A,E,g)}function m(S,w,b){if(w[b]===void 0)return typeof S=="number"||typeof S=="boolean"?w[b]=S:ArrayBuffer.isView(S)?w[b]=S.slice():w[b]=S.clone(),!0;{let E=w[b];if(typeof S=="number"||typeof S=="boolean"){if(E!==S)return w[b]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(E.equals(S)===!1)return E.copy(S),!0}}return!1}function _(S){let w=S.uniforms,b=0,E=16;for(let g=0,M=w.length;g<M;g++){let N=Array.isArray(w[g])?w[g]:[w[g]];for(let C=0,D=N.length;C<D;C++){let U=N[C],H=Array.isArray(U.value)?U.value:[U.value],I=Array.isArray(w[g])||Array.isArray(U.value),G=b;for(let V=0,tt=H.length;V<tt;V++){let W=H[V],Q=y(W,I),j=b%E,rt=j%Q.boundary,vt=j+rt;b+=rt,vt!==0&&E-vt<Q.storage&&(b+=E-vt),V===0&&(G=b),b+=Q.storage}let q=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new q((b-G)/Float32Array.BYTES_PER_ELEMENT),U.__offset=G}}let A=b%E;return A>0&&(b+=E-A),S.__size=b,S.__cache={},this}function y(S,w){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=16,b.storage=48):S.isMatrix4?(b.boundary=16,b.storage=64):S.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):It("WebGLRenderer: Unsupported uniform value type.",S),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function f(S){let w=S.target;w.removeEventListener("dispose",f),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:d}}var Sm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fn=null;function Mm(){return fn===null&&(fn=new ar(Sm,16,16,qn,nn),fn.name="DFG_LUT",fn.minFilter=Ne,fn.magFilter=Ne,fn.wrapS=on,fn.wrapT=on,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}var pa=class{constructor(t={}){let{canvas:e=nc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Fe}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let y=m,f=new Set([Nr,Dr,Lr]),d=new Set([Fe,tn,Ni,oi,Ir,Pr]),S=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},E=null,A=null,g=[],M=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,U=null,H=null,I=null,G=null;this._outputColorSpace=Me;let q=0,V=0,tt=null,W=-1,Q=null,j=new re,rt=new re,vt=null,Y=new Ut(0),it=0,mt=e.width,Et=e.height,ht=1,Lt=null,Yt=null,Tt=new re(0,0,mt,Et),Xt=new re(0,0,mt,Et),Jt=!1,Ct=new zn,ye=new or,he=!1,Ue=!1,ae=new ie,rn=new z,me=new re,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function He(){return tt===null?ht:1}let L=n;function We(v,P){return e.getContext(v,P)}let ee,ne,pt,ue,Rt,Nt,T,x,O,et,K,at,dt,Z,J,lt,R,$,X,ct,st,ot,At;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",gt,!1),L===null){let P="webgl2";if(L=We(P,v),L===null)throw We(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(v){throw e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Pt("WebGLRenderer: "+v.message),v}function Bt(){ee=new Df(L),ee.init(),st=new mm(L,ee),ne=new Mf(L,ee,t,st),pt=new fm(L,ee),ne.reversedDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),H=L.createFramebuffer(),I=L.createFramebuffer(),G=L.createFramebuffer(),ue=new Ff(L),Rt=new jp,Nt=new pm(L,ee,pt,Rt,ne,st,ue),T=new Lf(C),x=new Oh(L),ot=new yf(L,x),O=new Nf(L,x,ue,ot),et=new Bf(L,O,x,ot,ue),$=new Of(L,ne,Nt),J=new bf(Rt),K=new Qp(C,T,ee,ne,ot,J),at=new vm(C,Rt),dt=new em,Z=new om(ee),R=new vf(C,T,pt,et,_,c),lt=new dm(C,et,ne),At=new ym(L,ue,ne,pt),X=new Sf(L,ee,ue),ct=new Uf(L,ee,ue),ue.programs=K.programs,C.capabilities=ne,C.extensions=ee,C.properties=Rt,C.renderLists=dt,C.shadowMap=lt,C.state=pt,C.info=ue}y!==Fe&&(N=new Gf(y,e.width,e.height,o,s,r));let nt=new ko(C,L);this.xr=nt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let v=ee.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ee.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(v){v!==void 0&&(ht=v,this.setSize(mt,Et,!1))},this.getSize=function(v){return v.set(mt,Et)},this.setSize=function(v,P,k=!0){if(nt.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}mt=v,Et=P,e.width=Math.floor(v*ht),e.height=Math.floor(P*ht),k===!0&&(e.style.width=v+"px",e.style.height=P+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(mt*ht,Et*ht).floor()},this.setDrawingBufferSize=function(v,P,k){mt=v,Et=P,ht=k,e.width=Math.floor(v*k),e.height=Math.floor(P*k),this.setViewport(0,0,v,P)},this.setEffects=function(v){if(y===Fe){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let P=0;P<v.length;P++)if(v[P].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(j)},this.getViewport=function(v){return v.copy(Tt)},this.setViewport=function(v,P,k,F){v.isVector4?Tt.set(v.x,v.y,v.z,v.w):Tt.set(v,P,k,F),pt.viewport(j.copy(Tt).multiplyScalar(He()).round())},this.getScissor=function(v){return v.copy(Xt)},this.setScissor=function(v,P,k,F){v.isVector4?Xt.set(v.x,v.y,v.z,v.w):Xt.set(v,P,k,F),pt.scissor(rt.copy(Xt).multiplyScalar(He()).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(v){pt.setScissorTest(Jt=v)},this.setOpaqueSort=function(v){Lt=v},this.setTransparentSort=function(v){Yt=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,P=!0,k=!0){let F=0;if(v){let B=!1;if(tt!==null){let ft=tt.texture.format;B=f.has(ft)}if(B){let ft=tt.texture.type,yt=d.has(ft),ut=R.getClearColor(),xt=R.getClearAlpha(),bt=ut.r,Ft=ut.g,kt=ut.b;yt?(S[0]=bt,S[1]=Ft,S[2]=kt,S[3]=xt,L.clearBufferuiv(L.COLOR,0,S)):(w[0]=bt,w[1]=Ft,w[2]=kt,w[3]=xt,L.clearBufferiv(L.COLOR,0,w))}else F|=L.COLOR_BUFFER_BIT}P&&(F|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),R.dispose(),dt.dispose(),Z.dispose(),Nt.dispose(),Rt.dispose(),T.dispose(),et.dispose(),O.dispose(),ot.dispose(),At.dispose(),K.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Wo),nt.removeEventListener("sessionend",Xo),Yn.stop()};function wt(v){v.preventDefault(),So("WebGLRenderer: Context Lost."),D=!0}function Ot(){So("WebGLRenderer: Context Restored."),D=!1;let v=ue.autoReset,P=lt.enabled,k=lt.autoUpdate,F=lt.needsUpdate,B=lt.type;Bt(),ue.autoReset=v,lt.enabled=P,lt.autoUpdate=k,lt.needsUpdate=F,lt.type=B}function gt(v){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Kt(v){let P=v.target;P.removeEventListener("dispose",Kt),ge(P)}function ge(v){Cn(v),Rt.remove(v)}function Cn(v){let P=Rt.get(v).programs;P!==void 0&&(P.forEach(function(k){K.releaseProgram(k)}),v.isShaderMaterial&&K.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,k,F,B,ft){P===null&&(P=ke);let yt=B.isMesh&&B.matrixWorld.determinantAffine()<0,ut=$c(v,P,k,F,B);pt.setMaterial(F,yt);let xt=k.index,bt=1;if(F.wireframe===!0){if(xt=O.getWireframeAttribute(k),xt===void 0)return;bt=2}let Ft=k.drawRange,kt=k.attributes.position,St=Ft.start*bt,Vt=(Ft.start+Ft.count)*bt;ft!==null&&(St=Math.max(St,ft.start*bt),Vt=Math.min(Vt,(ft.start+ft.count)*bt)),xt!==null?(St=Math.max(St,0),Vt=Math.min(Vt,xt.count)):kt!=null&&(St=Math.max(St,0),Vt=Math.min(Vt,kt.count));let le=Vt-St;if(le<0||le===1/0)return;ot.setup(B,F,ut,k,xt);let jt,Qt=X;if(xt!==null&&(jt=x.get(xt),Qt=ct,Qt.setIndex(jt)),B.isMesh)F.wireframe===!0?(pt.setLineWidth(F.wireframeLinewidth*He()),Qt.setMode(L.LINES)):Qt.setMode(L.TRIANGLES);else if(B.isLine){let Te=F.linewidth;Te===void 0&&(Te=1),pt.setLineWidth(Te*He()),B.isLineSegments?Qt.setMode(L.LINES):B.isLineLoop?Qt.setMode(L.LINE_LOOP):Qt.setMode(L.LINE_STRIP)}else B.isPoints?Qt.setMode(L.POINTS):B.isSprite&&Qt.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))Qt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Te=B._multiDrawStarts,Mt=B._multiDrawCounts,Le=B._multiDrawCount,Zt=xt?x.get(xt).bytesPerElement:1,Zn=Rt.get(F).currentProgram.getUniforms();for(let Ae=0;Ae<Le;Ae++)Zn.setValue(L,"_gl_DrawID",Ae),Qt.render(Te[Ae]/Zt,Mt[Ae])}else if(B.isInstancedMesh)Qt.renderInstances(St,le,B.count);else if(k.isInstancedBufferGeometry){let Te=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Mt=Math.min(k.instanceCount,Te);Qt.renderInstances(St,le,Mt)}else Qt.render(St,le)};function Ho(v,P,k,F){U!==null&&v.isNodeMaterial&&U.setObject(F,v),he===!0&&J.setState(v,k,!1),v.transparent===!0&&v.side===Ze&&v.forceSinglePass===!1?(v.side=be,v.needsUpdate=!0,Bi(v,P,F),v.side=Xn,v.needsUpdate=!0,Bi(v,P,F),v.side=Ze):Bi(v,P,F)}this.compile=function(v,P,k=null){k===null&&(k=v),U!==null&&U.renderStart(v,P,k),A=Z.get(k),A.init(P),M.push(A),k.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),v!==k&&v.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),A.setupLights(),U!==null&&U.updateLights(A.state.lightsArray),Ue=this.localClippingEnabled,he=J.init(this.clippingPlanes,Ue),he===!0&&J.setGlobalState(this.clippingPlanes,P),U!==null&&lt.render(A.state.shadowsArray,k,P);let F=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ft=B.material;if(ft)if(Array.isArray(ft))for(let yt=0;yt<ft.length;yt++){let ut=ft[yt];Ho(ut,k,P,B),F.add(ut)}else Ho(ft,k,P,B),F.add(ft)}),A=M.pop(),U!==null&&U.renderEnd(),F},this.compileAsync=function(v,P,k=null){let F=this.compile(v,P,k);return new Promise(B=>{function ft(){if(F.forEach(function(yt){let xt=Rt.get(yt).currentProgram;(xt===void 0||xt.isReady())&&F.delete(yt)}),F.size===0){B(v);return}setTimeout(ft,10)}ee.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let xa=null;function Zc(v){xa&&xa(v)}function Wo(){Yn.stop()}function Xo(){Yn.start()}let Yn=new Lc;Yn.setAnimationLoop(Zc),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(v){xa=v,nt.setAnimationLoop(v),v===null?Yn.stop():Yn.start()},nt.addEventListener("sessionstart",Wo),nt.addEventListener("sessionend",Xo),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(v,P);let k=nt.enabled===!0&&nt.isPresenting===!0,F=N!==null&&(tt===null||k)&&N.begin(C,tt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(P),P=nt.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,P,tt),A=Z.get(v,M.length),A.init(P),A.state.textureUnits=Nt.getTextureUnits(),M.push(A),ae.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?ye.setFromArrayCamera(P):Ct.setFromProjectionMatrix(ae,qe,P.reversedDepth),Ue=this.localClippingEnabled,he=J.init(this.clippingPlanes,Ue),E=dt.get(v,g.length),E.init(),g.push(E),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){let yt=C.xr.getDepthSensingMesh();yt!==null&&va(yt,P,-1/0,C.sortObjects)}va(v,P,0,C.sortObjects),E.finish(),U!==null&&U.updateLights(A.state.lightsArray),C.sortObjects===!0&&E.sort(Lt,Yt),Ve=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Ve&&R.addToRenderList(E,v),this.info.autoReset===!0&&this.info.reset(),he===!0&&J.beginShadows();let B=A.state.shadowsArray;if(lt.render(B,v,P),he===!0&&J.endShadows(),(F&&N.hasRenderPass())===!1){let yt=E.opaque,ut=E.transmissive;if(A.setupLights(),P.isArrayCamera){let xt=P.cameras;if(ut.length>0)for(let bt=0,Ft=xt.length;bt<Ft;bt++){let kt=xt[bt];Yo(yt,ut,v,kt)}Ve&&R.render(v);for(let bt=0,Ft=xt.length;bt<Ft;bt++){let kt=xt[bt];qo(E,v,kt,kt.viewport)}}else ut.length>0&&Yo(yt,ut,v,P),Ve&&R.render(v),qo(E,v,P)}tt!==null&&V===0&&(Nt.updateMultisampleRenderTarget(tt),Nt.updateRenderTargetMipmap(tt)),F&&N.end(C),v.isScene===!0&&v.onAfterRender(C,v,P),ot.resetDefaultState(),W=-1,Q=null,M.pop(),M.length>0?(A=M[M.length-1],Nt.setTextureUnits(A.state.textureUnits),he===!0&&J.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,g.pop(),g.length>0?E=g[g.length-1]:E=null,U!==null&&U.renderEnd()};function va(v,P,k,F){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)A.pushLight(v),v.castShadow&&A.pushShadow(v);else if(v.isSprite){let yt=P.isArrayCamera?ye:Ct;if(!v.frustumCulled||v.intersectsFrustum(yt)){F&&me.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ae);let ut=et.update(v),xt=v.material;xt.visible&&E.push(v,ut,xt,k,me.z,null,P)}}else if(v.isMesh||v.isLine||v.isPoints){let yt=P.isArrayCamera?ye:Ct;if(!v.frustumCulled||v.intersectsFrustum(yt)){let ut=et.update(v),xt=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),me.copy(v.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),me.copy(ut.boundingSphere.center)),me.applyMatrix4(v.matrixWorld).applyMatrix4(ae)),Array.isArray(xt)){let bt=ut.groups;for(let Ft=0,kt=bt.length;Ft<kt;Ft++){let St=bt[Ft],Vt=xt[St.materialIndex];Vt&&Vt.visible&&E.push(v,ut,Vt,k,me.z,St,P)}}else xt.visible&&E.push(v,ut,xt,k,me.z,null,P)}}}let ft=v.children;for(let yt=0,ut=ft.length;yt<ut;yt++)va(ft[yt],P,k,F)}function qo(v,P,k,F){let{opaque:B,transmissive:ft,transparent:yt}=v;A.setupLightsView(k),he===!0&&J.setGlobalState(C.clippingPlanes,k),F&&pt.viewport(j.copy(F)),B.length>0&&bs(B,P,k),ft.length>0&&bs(ft,P,k),yt.length>0&&bs(yt,P,k),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Yo(v,P,k,F){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[F.id]===void 0){let St=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[F.id]=new ze(1,1,{generateMipmaps:!0,type:St?nn:Fe,minFilter:En,samples:Math.max(4,ne.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ht.workingColorSpace})}let ft=A.state.transmissionRenderTarget[F.id],yt=F.viewport||j;ft.setSize(yt.z*C.transmissionResolutionScale,yt.w*C.transmissionResolutionScale);let ut=C.getRenderTarget(),xt=C.getActiveCubeFace(),bt=C.getActiveMipmapLevel();C.setRenderTarget(ft),C.getClearColor(Y),it=C.getClearAlpha(),it<1&&C.setClearColor(16777215,.5),C.clear(),Ve&&R.render(k);let Ft=C.toneMapping;C.toneMapping=dn;let kt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),A.setupLightsView(F),he===!0&&J.setGlobalState(C.clippingPlanes,F),bs(v,k,F),Nt.updateMultisampleRenderTarget(ft),Nt.updateRenderTargetMipmap(ft),ee.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Vt=0,le=P.length;Vt<le;Vt++){let jt=P[Vt],{object:Qt,geometry:Te,material:Mt,group:Le}=jt;if(Mt.side===Ze&&Qt.layers.test(F.layers)){let Zt=Mt.side;Mt.side=be,Mt.needsUpdate=!0,Zo(Qt,k,F,Te,Mt,Le),Mt.side=Zt,Mt.needsUpdate=!0,St=!0}}St===!0&&(Nt.updateMultisampleRenderTarget(ft),Nt.updateRenderTargetMipmap(ft))}C.setRenderTarget(ut,xt,bt),C.setClearColor(Y,it),kt!==void 0&&(F.viewport=kt),C.toneMapping=Ft}function bs(v,P,k){let F=P.isScene===!0?P.overrideMaterial:null;for(let B=0,ft=v.length;B<ft;B++){let yt=v[B],{object:ut,geometry:xt,group:bt}=yt,Ft=yt.material;Ft.allowOverride===!0&&F!==null&&(Ft=F),ut.layers.test(k.layers)&&Zo(ut,P,k,xt,Ft,bt)}}function Zo(v,P,k,F,B,ft){U!==null&&B.isNodeMaterial&&U.setObject(v,B),v.onBeforeRender(C,P,k,F,B,ft),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(C,P,k,F,v,ft),B.transparent===!0&&B.side===Ze&&B.forceSinglePass===!1?(B.side=be,B.needsUpdate=!0,C.renderBufferDirect(k,P,F,B,v,ft),B.side=Xn,B.needsUpdate=!0,C.renderBufferDirect(k,P,F,B,v,ft),B.side=Ze):C.renderBufferDirect(k,P,F,B,v,ft),v.onAfterRender(C,P,k,F,B,ft)}function Jo(v){let P=0;for(let k of v)k.texture!==null&&P++;return P}function Bi(v,P,k){P.isScene!==!0&&(P=ke);let F=Rt.get(v),B=A.state.lights,ft=A.state.shadowsArray,yt=B.state.version,ut=K.getParameters(v,B.state,ft,P,k,A.state.lightProbeGridArray),xt=K.getProgramCacheKey(ut),bt=F.programs;F.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,F.fog=P.fog;let Ft=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;F.envMap=T.get(v.envMap||F.environment,Ft),F.envMapRotation=F.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,bt===void 0&&(v.addEventListener("dispose",Kt),bt=new Map,F.programs=bt,F.programVariants=new Map);let kt=bt.get(xt);if(kt!==void 0){if(F.currentProgram===kt&&F.lightsStateVersion===yt)return Ko(v,ut),kt}else ut.uniforms=K.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,k,ut),v.onBeforeCompile(ut,C),kt=K.acquireProgram(ut,xt),bt.set(xt,kt),F.uniforms=ut.uniforms;let St=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(St.clippingPlanes=J.uniform),Ko(v,ut),F.needsLights=Qc(v),F.lightsStateVersion=yt,F.needsLights&&(St.ambientLightColor.value=B.state.ambient,St.lightProbe.value=B.state.probe,St.sunLights.value=B.state.sun,St.sunLightShadows.value=B.state.sunShadow,St.directionalLights.value=B.state.directional,St.directionalLightShadows.value=B.state.directionalShadow,St.spotLights.value=B.state.spot,St.spotLightShadows.value=B.state.spotShadow,St.rectAreaLights.value=B.state.rectArea,St.ltc_1.value=B.state.rectAreaLTC1,St.ltc_2.value=B.state.rectAreaLTC2,St.pointLights.value=B.state.point,St.pointLightShadows.value=B.state.pointShadow,St.hemisphereLights.value=B.state.hemi,St.sunShadowMatrix.value=B.state.sunShadowMatrix,St.sunShadowCascade.value=B.state.sunShadowCascade,St.directionalShadowMatrix.value=B.state.directionalShadowMatrix,St.spotLightMatrix.value=B.state.spotLightMatrix,St.spotLightMap.value=B.state.spotLightMap,St.pointShadowMatrix.value=B.state.pointShadowMatrix),F.numLightProbeGrids=Jo(A.state.lightProbeGridArray),F.currentProgram=kt,F.uniformsList=null,kt}function Jc(v,P,k,F,B){let ft=Rt.get(v),yt=ft.currentProgram.id+","+F+","+B,ut=ft.programVariants.get(yt);return ut===void 0?(ut=Bi(v,P,k),ft.programVariants.set(yt,ut)):(ft.currentProgram=ut,ft.uniformsList=null,ft.outputColorSpace=F,ft.toneMapping=B),ut}function $o(v){if(v.uniformsList===null){let P=v.currentProgram.getUniforms();v.uniformsList=Ui.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Ko(v,P){let k=Rt.get(v);k.outputColorSpace=P.outputColorSpace,k.batching=P.batching,k.batchingColor=P.batchingColor,k.instancing=P.instancing,k.instancingColor=P.instancingColor,k.instancingMorph=P.instancingMorph,k.skinning=P.skinning,k.morphTargets=P.morphTargets,k.morphNormals=P.morphNormals,k.morphColors=P.morphColors,k.morphTargetsCount=P.morphTargetsCount,k.numClippingPlanes=P.numClippingPlanes,k.numIntersection=P.numClipIntersection,k.vertexAlphas=P.vertexAlphas,k.vertexTangents=P.vertexTangents,k.toneMapping=P.toneMapping}function $c(v,P,k,F,B){P.isScene!==!0&&(P=ke),Nt.resetTextureUnits();let ft=P.fog,yt=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?P.environment:null,ut=tt===null?C.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ht.workingColorSpace,xt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,bt=T.get(F.envMap||yt,xt),Ft=F.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,kt=!!k.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),St=!!k.morphAttributes.position,Vt=!!k.morphAttributes.normal,le=!!k.morphAttributes.color,jt=dn;F.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(jt=C.toneMapping);let Qt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Te=Qt!==void 0?Qt.length:0,Mt=Rt.get(F),Le=A.state.lights;if(he===!0&&(Ue===!0||v!==Q)){let oe=v===Q&&F.id===W;J.setState(F,v,oe)}let Zt=!1,Zn=!1;F.version===Mt.__version?Mt.needsLights&&Mt.lightsStateVersion!==Le.state.version||B.isBatchedMesh&&Mt.batching===!1||!B.isBatchedMesh&&Mt.batching===!0||B.isBatchedMesh&&Mt.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Mt.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Mt.instancing===!1||!B.isInstancedMesh&&Mt.instancing===!0||B.isSkinnedMesh&&Mt.skinning===!1||!B.isSkinnedMesh&&Mt.skinning===!0||B.isInstancedMesh&&Mt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Mt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Mt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Mt.instancingMorph===!1&&B.morphTexture!==null||Mt.envMap!==bt||F.fog===!0&&Mt.fog!==ft||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==J.numPlanes||Mt.numIntersection!==J.numIntersection)||Mt.vertexAlphas!==Ft||Mt.vertexTangents!==kt||Mt.morphTargets!==St||Mt.morphNormals!==Vt||Mt.morphColors!==le||Mt.morphTargetsCount!==Te||Mt.numLightProbeGrids!==Jo(A.state.lightProbeGridArray)?Zt=!0:(Mt.outputColorSpace!==ut||Mt.toneMapping!==jt)&&(Zn=!0):(Zt=!0,Mt.__version=F.version);let Ae=Mt.currentProgram;(Zt===!0||Zn===!0)&&(Ae=Zn===!0?Jc(F,P,B,ut,jt):Bi(F,P,B),U&&F.isNodeMaterial&&U.onUpdateProgram(F,Ae,Mt));let Ts=!1,In=!1,Jn=!1,qt=Ae.getUniforms(),Se=Mt.uniforms;if(pt.useProgram(Ae.program)&&(Ts=!0,In=!0,Jn=!0),F.id!==W&&(W=F.id,In=!0),Ts||Q!==v){pt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),qt.setValue(L,"projectionMatrix",v.projectionMatrix),qt.setValue(L,"viewMatrix",v.matrixWorldInverse);let _e=qt.map.cameraPosition;_e!==void 0&&_e.setValue(L,rn.setFromMatrixPosition(v.matrixWorld)),ne.logarithmicDepthBuffer&&qt.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&qt.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,In=!0,Jn=!0)}if(Mt.needsLights&&(Le.state.sunShadowMap.length>0&&qt.setValue(L,"sunShadowMap",Le.state.sunShadowMap,Nt),Le.state.directionalShadowMap.length>0&&qt.setValue(L,"directionalShadowMap",Le.state.directionalShadowMap,Nt),Le.state.spotShadowMap.length>0&&qt.setValue(L,"spotShadowMap",Le.state.spotShadowMap,Nt),Le.state.pointShadowMap.length>0&&qt.setValue(L,"pointShadowMap",Le.state.pointShadowMap,Nt)),B.isSkinnedMesh){qt.setOptional(L,B,"bindMatrix"),qt.setOptional(L,B,"bindMatrixInverse");let oe=B.skeleton;oe&&(oe.boneTexture===null&&oe.computeBoneTexture(),qt.setValue(L,"boneTexture",oe.boneTexture,Nt))}B.isBatchedMesh&&(qt.setOptional(L,B,"batchingTexture"),qt.setValue(L,"batchingTexture",B._matricesTexture,Nt),qt.setOptional(L,B,"batchingIdTexture"),qt.setValue(L,"batchingIdTexture",B._indirectTexture,Nt),qt.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&qt.setValue(L,"batchingColorTexture",B._colorsTexture,Nt));let Je=k.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&$.update(B,k,Ae),(In||Mt.receiveShadow!==B.receiveShadow)&&(Mt.receiveShadow=B.receiveShadow,qt.setValue(L,"receiveShadow",B.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&P.environment!==null&&(Se.envMapIntensity.value=P.environmentIntensity),Se.dfgLUT!==void 0&&(Se.dfgLUT.value=Mm()),In){if(qt.setValue(L,"toneMappingExposure",C.toneMappingExposure),Mt.needsLights&&Kc(Se,Jn),ft&&F.fog===!0&&at.refreshFogUniforms(Se,ft),at.refreshMaterialUniforms(Se,F,ht,Et,A.state.transmissionRenderTarget[v.id]),Mt.needsLights&&Mt.numLightProbeGrids>0){let oe=b,_e=0;for(let mn of A.state.lightProbeGridArray)mn.texture!==null&&(oe.textures[_e]=mn.texture,oe.min[_e]=mn.boundingBox.min,oe.max[_e]=mn.boundingBox.max,oe.resolution[_e]=mn.resolution,_e++);for(let mn in oe)oe[mn].length=_e;Se.probesSH.value=oe.textures,Se.probesMin.value=oe.min,Se.probesMax.value=oe.max,Se.probesResolution.value=oe.resolution}Ui.upload(L,$o(Mt),Se,Nt)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ui.upload(L,$o(Mt),Se,Nt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&qt.setValue(L,"center",B.center),qt.setValue(L,"modelViewMatrix",B.modelViewMatrix),qt.setValue(L,"normalMatrix",B.normalMatrix),qt.setValue(L,"modelMatrix",B.matrixWorld),F.uniformsGroups!==void 0){let oe=F.uniformsGroups;for(let _e=0,mn=oe.length;_e<mn;_e++){let jo=oe[_e];At.update(jo,Ae),At.bind(jo,Ae)}}return Ae}function Kc(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.sunLights.needsUpdate=P,v.sunLightShadows.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Qc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(v,P,k){let F=Rt.get(v);F.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Rt.get(v.texture).__webglTexture=P,Rt.get(v.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:k,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,P){let k=Rt.get(v);k.__webglFramebuffer=P,k.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,k=0){tt=v,q=P,V=k;let F=null,B=!1,ft=!1;if(v){let ut=Rt.get(v);if(ut.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(L.FRAMEBUFFER,ut.__webglFramebuffer),j.copy(v.viewport),rt.copy(v.scissor),vt=v.scissorTest,pt.viewport(j),pt.scissor(rt),pt.setScissorTest(vt),W=-1;return}else if(ut.__webglFramebuffer===void 0)Nt.setupRenderTarget(v);else if(ut.__hasExternalTextures)Nt.rebindTextures(v,Rt.get(v.texture).__webglTexture,Rt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ft=v.depthTexture;if(ut.__boundDepthTexture!==Ft){if(Ft!==null&&Rt.has(Ft)&&(v.width!==Ft.image.width||v.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(v)}}let xt=v.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(ft=!0);let bt=Rt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(bt[P])?F=bt[P][k]:F=bt[P],B=!0):v.samples>0&&Nt.useMultisampledRTT(v)===!1?F=Rt.get(v).__webglMultisampledFramebuffer:Array.isArray(bt)?F=bt[k]:F=bt,j.copy(v.viewport),rt.copy(v.scissor),vt=v.scissorTest}else j.copy(Tt).multiplyScalar(ht).floor(),rt.copy(Xt).multiplyScalar(ht).floor(),vt=Jt;if(k!==0&&(F=H),pt.bindFramebuffer(L.FRAMEBUFFER,F)&&pt.drawBuffers(v,F),pt.viewport(j),pt.scissor(rt),pt.setScissorTest(vt),B){let ut=Rt.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,ut.__webglTexture,k)}else if(ft){let ut=P;for(let xt=0;xt<v.textures.length;xt++){let bt=Rt.get(v.textures[xt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+xt,bt.__webglTexture,k,ut)}}else if(v!==null&&k!==0){let ut=Rt.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ut.__webglTexture,k)}W=-1};function Qo(v){let P=Rt.get(v);return(P.__readFormat!==v.format||P.__readType!==v.type)&&(P.__readFormat=v.format,P.__readType=v.type,P.__formatReadable=ne.textureFormatReadable(v.format),P.__typeReadable=ne.textureTypeReadable(v.type)),P}this.readRenderTargetPixels=function(v,P,k,F,B,ft,yt,ut=0){if(!(v&&v.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Rt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&yt!==void 0&&(xt=xt[yt],Array.isArray(xt)&&(xt=xt[0])),xt){pt.bindFramebuffer(L.FRAMEBUFFER,xt);try{let bt=v.textures[ut],Ft=bt.format,kt=bt.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ut);let St=Qo(bt);if(St.__formatReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-F&&k>=0&&k<=v.height-B&&L.readPixels(P,k,F,B,st.convert(Ft),st.convert(kt),ft)}finally{let bt=tt!==null?Rt.get(tt).__webglFramebuffer:null;pt.bindFramebuffer(L.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(v,P,k,F,B,ft,yt,ut=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Rt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&yt!==void 0&&(xt=xt[yt],Array.isArray(xt)&&(xt=xt[0])),xt)if(P>=0&&P<=v.width-F&&k>=0&&k<=v.height-B){pt.bindFramebuffer(L.FRAMEBUFFER,xt);let bt=v.textures[ut],Ft=bt.format,kt=bt.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ut);let St=Qo(bt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Vt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Vt),L.bufferData(L.PIXEL_PACK_BUFFER,ft.byteLength,L.STREAM_READ),L.readPixels(P,k,F,B,st.convert(Ft),st.convert(kt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let le=tt!==null?Rt.get(tt).__webglFramebuffer:null;pt.bindFramebuffer(L.FRAMEBUFFER,le);let jt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await sc(L,jt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Vt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ft),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Vt),L.deleteSync(jt),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,P=null,k=0){let F=Math.pow(2,-k),B=Math.floor(v.image.width*F),ft=Math.floor(v.image.height*F),yt=P!==null?P.x:0,ut=P!==null?P.y:0;Nt.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,yt,ut,B,ft),pt.unbindTexture()},this.copyTextureToTexture=function(v,P,k=null,F=null,B=0,ft=0){let yt,ut,xt,bt,Ft,kt,St,Vt,le,jt=v.isCompressedTexture?v.mipmaps[ft]:v.image;if(k!==null)yt=k.max.x-k.min.x,ut=k.max.y-k.min.y,xt=k.isBox3?k.max.z-k.min.z:1,bt=k.min.x,Ft=k.min.y,kt=k.isBox3?k.min.z:0;else{let qt=Math.pow(2,-B);yt=Math.floor(jt.width*qt),ut=Math.floor(jt.height*qt),v.isDataArrayTexture?xt=jt.depth:v.isData3DTexture?xt=Math.floor(jt.depth*qt):xt=1,bt=0,Ft=0,kt=0}F!==null?(St=F.x,Vt=F.y,le=F.z):(St=0,Vt=0,le=0);let Qt=st.convert(P.format),Te=st.convert(P.type),Mt;P.isData3DTexture?(Nt.setTexture3D(P,0),Mt=L.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Nt.setTexture2DArray(P,0),Mt=L.TEXTURE_2D_ARRAY):(Nt.setTexture2D(P,0),Mt=L.TEXTURE_2D),pt.activeTexture(L.TEXTURE0),pt.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,P.flipY),pt.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),pt.pixelStorei(L.UNPACK_ALIGNMENT,P.unpackAlignment);let Le=pt.getParameter(L.UNPACK_ROW_LENGTH),Zt=pt.getParameter(L.UNPACK_IMAGE_HEIGHT),Zn=pt.getParameter(L.UNPACK_SKIP_PIXELS),Ae=pt.getParameter(L.UNPACK_SKIP_ROWS),Ts=pt.getParameter(L.UNPACK_SKIP_IMAGES);pt.pixelStorei(L.UNPACK_ROW_LENGTH,jt.width),pt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,jt.height),pt.pixelStorei(L.UNPACK_SKIP_PIXELS,bt),pt.pixelStorei(L.UNPACK_SKIP_ROWS,Ft),pt.pixelStorei(L.UNPACK_SKIP_IMAGES,kt);let In=v.isDataArrayTexture||v.isData3DTexture,Jn=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){let qt=Rt.get(v),Se=Rt.get(P),Je=Rt.get(qt.__renderTarget),oe=Rt.get(Se.__renderTarget);pt.bindFramebuffer(L.READ_FRAMEBUFFER,Je.__webglFramebuffer),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let _e=0;_e<xt;_e++)In&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.get(v).__webglTexture,B,kt+_e),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.get(P).__webglTexture,ft,le+_e)),L.blitFramebuffer(bt,Ft,bt+yt,Ft+ut,St,Vt,St+yt,Vt+ut,L.DEPTH_BUFFER_BIT,L.NEAREST);pt.bindFramebuffer(L.READ_FRAMEBUFFER,null),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||Rt.has(v)){let qt=Rt.get(v),Se=Rt.get(P);pt.bindFramebuffer(L.READ_FRAMEBUFFER,I),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,G);for(let Je=0;Je<xt;Je++)In?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qt.__webglTexture,B,kt+Je):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qt.__webglTexture,B),Jn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.__webglTexture,ft,le+Je):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Se.__webglTexture,ft),B!==0?L.blitFramebuffer(bt,Ft,bt+yt,Ft+ut,St,Vt,St+yt,Vt+ut,L.COLOR_BUFFER_BIT,L.NEAREST):Jn?L.copyTexSubImage3D(Mt,ft,St,Vt,le+Je,bt,Ft,yt,ut):L.copyTexSubImage2D(Mt,ft,St,Vt,bt,Ft,yt,ut);pt.bindFramebuffer(L.READ_FRAMEBUFFER,null),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Jn?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(Mt,ft,St,Vt,le,yt,ut,xt,Qt,Te,jt.data):P.isCompressedArrayTexture?L.compressedTexSubImage3D(Mt,ft,St,Vt,le,yt,ut,xt,Qt,jt.data):L.texSubImage3D(Mt,ft,St,Vt,le,yt,ut,xt,Qt,Te,jt):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ft,St,Vt,yt,ut,Qt,Te,jt.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ft,St,Vt,jt.width,jt.height,Qt,jt.data):L.texSubImage2D(L.TEXTURE_2D,ft,St,Vt,yt,ut,Qt,Te,jt);pt.pixelStorei(L.UNPACK_ROW_LENGTH,Le),pt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Zt),pt.pixelStorei(L.UNPACK_SKIP_PIXELS,Zn),pt.pixelStorei(L.UNPACK_SKIP_ROWS,Ae),pt.pixelStorei(L.UNPACK_SKIP_IMAGES,Ts),ft===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&L.generateMipmap(Mt),pt.unbindTexture()},this.initRenderTarget=function(v){Rt.get(v).__webglFramebuffer===void 0&&Nt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Nt.setTextureCube(v,0):v.isData3DTexture?Nt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Nt.setTexture2DArray(v,0):Nt.setTexture2D(v,0),pt.unbindTexture()},this.resetState=function(){q=0,V=0,tt=null,pt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ht._getUnpackColorSpace()}};var Hc="data:image/webp;base64,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";var Wc="data:image/webp;base64,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";var Xc="data:image/webp;base64,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";async function Vo(i,{repeat:t,aniso:e=8}={}){let n=new Image;n.src=i,await n.decode();let s=new Ce(n);return s.colorSpace=Me,s.anisotropy=e,t&&(s.wrapS=s.wrapT=Ti,s.repeat.set(t[0],t[1])),s.needsUpdate=!0,s}function qc(i,t=[[0,-1],[0,0],[0,1]]){let e=new ei;e.background=new Ut(329478);let n=new de(new Gn(16,7,16),new Tn({color:658699,side:be}));n.position.y=2.5,e.add(n);let s=(o,c,l,h,p,u,m)=>{let _=new de(new ni(h,p),new Tn({color:new Ut(u).multiplyScalar(m),side:Ze}));_.position.set(o,c,l),_.rotation.x=Math.PI/2,e.add(_)};t.forEach(([o,c])=>s(o,2.7,c,.8,.6,16773330,30)),s(0,-.5,0,14,14,678968,.7),s(-5.5,2.4,0,.5,6,16764817,3),s(5.5,2.4,0,.5,6,16764817,3),s(0,2.2,6,5,.6,16773330,2.2);let r=new Fi(i),a=r.fromScene(e,.006);return r.dispose(),a.texture}var _a=(i,t)=>new kn({roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,envMap:i,envMapIntensity:.6,...t});async function Yc(i,{thick:t=1,segs:e=48}={}){let[n,s,r]=await Promise.all([Vo(Hc),Vo(Wc),Vo(Xc)]),a=new kn({color:13214559,metalness:1,roughness:.22,envMap:i,envMapIntensity:1.5}),o=_a(i,{color:1314829,roughness:.3}),c=_a(i,{color:15655620,roughness:.32}),l=(f,d,S,w,b)=>{let E=new de(new ns(d*t,f*t,w-S,e,1,!0),b);return E.position.y=(S+w)/2,E},h=(f,d,S,w)=>{let b=new de(new es(f*t,e),S);return b.position.y=d,b.rotation.x=w?Math.PI/2:-Math.PI/2,b},p={butt:new De,joint:new De,shaft:new De,tip:new De};p.butt.add(l(.0176,.0176,-.012,0,o),h(.0176,-.012,o,!0),h(.009,-.0125,a,!0),l(.0176,.0177,0,.006,a),l(.0176,.0166,.006,.34,_a(i,{map:s})),l(.0166,.0165,.34,.345,c),l(.0165,.0165,.345,.349,o),l(.0165,.0164,.349,.354,c),l(.0164,.0119,.354,.7,_a(i,{map:n}))),p.joint.add(l(.0119,.012,.7,.704,a),l(.012,.012,.704,.732,o),l(.012,.0119,.732,.736,a),h(.0119,.736,o)),p.shaft.add(h(.0114,.736,c,!0),l(.0114,.0064,.736,1.472,new kn({map:r,roughness:.32,clearcoat:.55,clearcoatRoughness:.14,envMap:i,envMapIntensity:.75})));let u=new kn({color:2047814,roughness:.85,envMap:i,envMapIntensity:.3}),m=new de(new is(.0063*t,e,12,0,Math.PI*2,0,Math.PI/2),u);m.scale.y=.42,m.position.y=1.5,p.tip.add(l(.0064,.0064,1.472,1.491,c),l(.0063,.0063,1.491,1.5,u),m);let _=new De;Object.values(p).forEach(f=>_.add(f));let y=new de(new ii(.0185*t,.0013,10,64),a);return y.rotation.x=Math.PI/2,y.position.y=.56,y.visible=!1,_.add(y),{group:_,parts:p,balance:y}}(async function(){let t=document.querySelector("[data-cue3d]");if(!t)return;let e;try{e=new pa({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}e.setPixelRatio(Math.min(devicePixelRatio||1,1.75)),e.toneMapping=hs,e.outputColorSpace=Me,e.setClearColor(0,0);let n=qc(e,[[-1,0],[0,0],[1,0]]),s=new ei,r=new Re(30,1,.01,20);s.add(new as(16773852,403483,.55)),[[-.9,1.2,.9,16],[.9,1.2,.7,13]].forEach(([rt,vt,Y,it])=>{let mt=new ls(16771528,it,0,.9,.8,1.6);mt.position.set(rt,vt,Y),s.add(mt,mt.target)});let{group:a,parts:o,balance:c}=await Yc(n,{thick:1.12,segs:64});s.updateMatrixWorld();let l=new De;l.add(a),a.position.y=-.75,l.rotation.z=-Math.PI/2+.13,s.add(l);let h={};Object.entries(o).forEach(([rt,vt])=>{h[rt]=[];let Y=new Map;vt.traverse(it=>{if(it.material){if(!Y.has(it.material)){let mt=it.material.clone();Y.set(it.material,mt),h[rt].push({m:mt,color:mt.color.clone(),env:mt.envMapIntensity,cc:mt.clearcoat,lit:1})}it.material=Y.get(it.material)}})});let p=new Tn({color:new Ut(16767370).multiplyScalar(1.5),toneMapped:!1,transparent:!0,opacity:0}),u=[0,1].map(()=>{let rt=new de(new ii(.024,9e-4,8,64),p);return rt.rotation.x=Math.PI/2,a.add(rt),rt}),m={tip:[1.4715,1.505,.0105,"tip"],shaft:[.74,1.47,.019,"shaft"],joint:[.698,.738,.0205,"joint"],balance:[.56,.56,.026,null],butt:[0,.702,.027,"butt"]},_={tip:"\u041D\u0430\u043A\u043B\u0435\u0439\u043A\u0430",shaft:"\u0428\u0430\u0444\u0442",joint:"\u0421\u043A\u0440\u0443\u0442\u043A\u0430",balance:"\u0422\u043E\u0447\u043A\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0430",butt:"\u0422\u0443\u0440\u043D\u044F\u043A"},y=document.querySelector("[data-cue-tag]"),f=new z,d={all:{y:.75,d:2.5},tip:{y:1.44,d:.36},shaft:{y:1.08,d:.62},joint:{y:.72,d:.34},balance:{y:.56,d:.62},butt:{y:.2,d:.62}},S={tip:.05,shaft:.025,joint:0,butt:-.03},w="all",b=0,E=0,A=-.6,g=0,M=!1,N=0,C=!0,D=!1,U=0,H=0,I=!1,G={y:d.all.y,d:1.72/(t.clientWidth/Math.max(1,t.clientHeight)*.536)},q=new z;function V(){let rt=t.clientWidth,vt=t.clientHeight;r.aspect=rt/Math.max(1,vt),r.updateProjectionMatrix(),e.setSize(rt,vt,!1),C=!0}t.append(e.domElement),V(),addEventListener("resize",V,{passive:!0}),t.style.touchAction="pan-y",t.addEventListener("pointerdown",rt=>{M=!0,N=rt.clientX,I=!0,t.classList.add("is-drag"),document.documentElement.classList.add("cue-touched")}),addEventListener("pointermove",rt=>{if(!M)return;let vt=rt.clientX-N;N=rt.clientX,g=vt*.012,A+=g,C=!0},{passive:!0});let tt=()=>{M=!1,t.classList.remove("is-drag")};addEventListener("pointerup",tt,{passive:!0}),addEventListener("pointercancel",tt,{passive:!0}),addEventListener("cue:view",rt=>{w=rt.detail.key,E=rt.detail.explode,c.visible=!1;let vt=m[w];vt?(u[0].scale.setScalar(vt[2]/.024),u[1].scale.setScalar(vt[2]/.024),u[0].userData.y=vt[0],u[1].userData.y=vt[1],u[0].userData.part=vt[3],u[1].userData.part=vt[3],y&&(y.textContent=_[w],y.hidden=!1)):y&&(y.hidden=!0),C=!0});function W(rt){U=requestAnimationFrame(W);let vt=Math.min(.05,(rt-H)/1e3||.016);H=rt;let Y=d[w]||d.all,it=1-Math.exp(-vt*4.5),mt=r.aspect<1,Et=w==="all"?1.72/(r.aspect*.536):Y.d*(mt?1.35:1);Math.abs(G.y-Y.y)+Math.abs(G.d-Et)>6e-4&&(G.y+=(Y.y-G.y)*it,G.d+=(Et-G.d)*it,C=!0),Math.abs(E-b)>.001&&(b+=(E-b)*it,Object.entries(S).forEach(([Yt,Tt])=>{o[Yt].position.y=Tt*b}),C=!0),M||(Math.abs(g)>5e-4?(A+=g,g*=.95,C=!0):(A+=vt*.16,C=!0)),Object.entries(h).forEach(([Yt,Tt])=>{let Xt=m[w],Jt=Xt?Xt[3]===null?.42:Yt===Xt[3]?1:.1:1;Tt.forEach(Ct=>{Math.abs(Ct.lit-Jt)<.004||(Ct.lit+=(Jt-Ct.lit)*it,Ct.m.color.copy(Ct.color).multiplyScalar(Ct.lit),Ct.m.envMapIntensity=Ct.env*Ct.lit,"clearcoat"in Ct.m&&(Ct.m.clearcoat=Ct.cc*Ct.lit),C=!0)})});let ht=m[w],Lt=ht?.75+Math.sin(rt*.004)*.25:0;if(Math.abs(p.opacity-Lt)>.004&&(p.opacity+=(Lt-p.opacity)*Math.min(1,it*2),C=!0),ht&&(C=!0),!!C){if(C=!1,u.forEach(Yt=>{let Tt=Yt.userData.part?(S[Yt.userData.part]||0)*b:0;Yt.position.y=(Yt.userData.y||0)+Tt,Yt.visible=!!ht}),a.rotation.y=A,q.set(0,G.y-.75,0).applyEuler(l.rotation),r.position.set(q.x,q.y+G.d*.16,G.d),r.lookAt(q),e.render(s,r),y&&ht){f.set(0,(ht[0]+ht[1])/2+(ht[3]?(S[ht[3]]||0)*b:0),0),a.localToWorld(f),f.project(r);let Yt=(f.x+1)/2*t.clientWidth,Tt=(1-f.y)/2*t.clientHeight;y.style.transform=`translate3d(${Math.max(52,Math.min(t.clientWidth-52,Yt)).toFixed(0)}px,${Math.max(30,Tt-54).toFixed(0)}px,0) translateX(-50%)`}document.documentElement.classList.contains("cue3d-ready")||document.documentElement.classList.add("cue3d-ready"),window.__cueFrames=(window.__cueFrames||0)+1}}let Q=()=>{D||(D=!0,H=performance.now(),U=requestAnimationFrame(W))},j=()=>{D=!1,cancelAnimationFrame(U)};new IntersectionObserver(([rt])=>{rt.isIntersecting&&!document.hidden?Q():j()}).observe(t),document.addEventListener("visibilitychange",()=>{document.hidden?j():t.getBoundingClientRect().bottom>0&&Q()}),Q()})();})();
