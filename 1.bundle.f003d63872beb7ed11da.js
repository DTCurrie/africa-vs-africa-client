(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,r){e.exports=r("2YZa")},"2YZa":function(e,t,r){"use strict";r.r(t),function(e){var t,a=r("q1tI"),n=r("i8i4"),c=r("zEVX");(t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("0cfB")).enterModule)&&t(e);var o,l,i=document.querySelector("#root");Object(n.render)(a.createElement("div",{className:"track-cards"},a.createElement(c.a,{key:"toto",id:"2374M0fQpWi3dLnB54qaLX"}),a.createElement(c.a,{key:"weezer",id:"36Pim2ANczp82lCWIb8GHy"})),i),(o=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("0cfB")).default)&&o.register(i,"appRoot","/home/devin/Documents/Sites/africa-vs-africa-client/src/index.tsx"),(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("0cfB")).leaveModule)&&l(e)}.call(this,r("3UD+")(e))},zEVX:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return f});var a,n,c,o=r("q1tI"),l=r("I3jg"),i=r.n(l);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,c=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw c}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e){return e.error?o.createElement("div",{className:"track-card-error"},e.error):null}function d(e){if(!e.track)return null;var t=e.track,r=t.artists[0],a=t.album;return o.createElement("div",{className:"track-card-content"},o.createElement("div",{className:"track-card-title"},o.createElement("h1",null,o.createElement("a",{href:t.external_urls.spotify},t.name)),o.createElement("p",null,"by ",o.createElement("a",{href:r.external_urls.spotify},t.artists[0].name)),o.createElement("p",null,"from the album ",o.createElement("a",{href:a.external_urls.spotify},a.name))),o.createElement("div",{className:"track-card-body"},o.createElement("h3",null,"Popularity: ",t.popularity,"/100")))}function f(e){var t=u(Object(o.useState)(null),2),r=t[0],a=t[1],n=u(Object(o.useState)(null),2),c=n[0],l=n[1],f="http://localhost:3000/api/track/".concat(e.id);return Object(o.useEffect)(function(){fetch(f).then(function(e){return e.json().then(function(e){return a(e.body)})}).catch(function(e){return l(e)})},[e.id]),null===r&&null===c?o.createElement(i.a,{className:"track-card"},"Loading!"):o.createElement(i.a,{className:"track-card"},o.createElement(s,{error:c}),o.createElement(d,{track:r}))}(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("0cfB")).enterModule)&&a(e),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("0cfB")).default)&&(n.register(s,"TrackCardError","/home/devin/Documents/Sites/africa-vs-africa-client/src/components/TrackCard.tsx"),n.register(d,"TrackCardContent","/home/devin/Documents/Sites/africa-vs-africa-client/src/components/TrackCard.tsx"),n.register(f,"TrackCard","/home/devin/Documents/Sites/africa-vs-africa-client/src/components/TrackCard.tsx")),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r("0cfB")).leaveModule)&&c(e)}).call(this,r("3UD+")(e))}},[[0,0,3]]]);
//# sourceMappingURL=1.bundle.f003d63872beb7ed11da.js.map