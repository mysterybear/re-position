(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/Positionable.tsx":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),a=n("./node_modules/rxjs/_esm5/internal/Subject.js"),o=n("./node_modules/rxjs/_esm5/internal/operators/takeUntil.js"),l=n("./node_modules/rxjs/_esm5/internal/operators/switchMap.js"),i=n("./node_modules/rxjs/_esm5/internal/operators/filter.js"),s=n("./node_modules/rxjs/_esm5/internal/operators/pluck.js"),c=n("./node_modules/rxjs/_esm5/internal/operators/map.js"),u=n("./node_modules/rxjs/_esm5/internal/operators/distinctUntilChanged.js"),d=n("./src/utils/dom.ts"),p=n("./src/utils/misc.ts"),b=new a.a,m=new a.a,f=new a.a,O=function(e){var t=e.element,n=e.group,r=e.onComplete,a=e.shouldConvertToPercent,c=void 0===a||a;return b.pipe(Object(l.a)(function(){var e=f.pipe(Object(o.a)(m),Object(i.a)(h(n)),Object(s.a)("offset"),v(t,c));return e.subscribe({complete:function(){return r&&r()}}),e}))},h=function(e){return function(t){return t.group===e}},v=function(e,t){return function(n){return n.pipe(Object(c.a)(y(Object(d.b)(e))),Object(u.a)(),Object(c.a)(Object(p.e)(t,e.parentElement)))}},y=function(e){return function(t){return{left:e.left+t.left,top:e.top+t.top}}};try{O.displayName="createAllMoveObservable",O.__docgenInfo={description:"",displayName:"createAllMoveObservable",props:{element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"HTMLElement"}},group:{defaultValue:null,description:"",name:"group",required:!0,type:{name:"string"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"() => void"}},shouldConvertToPercent:{defaultValue:null,description:"",name:"shouldConvertToPercent",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/observables/allMove.ts#createAllMoveObservable"]={docgenInfo:O.__docgenInfo,name:"createAllMoveObservable",path:"src/observables/allMove.ts#createAllMoveObservable"})}catch(ve){}var j=n("./node_modules/rxjs/_esm5/internal/observable/fromEvent.js"),g=n("./node_modules/rxjs/_esm5/internal/operators/tap.js"),_=n("./node_modules/rxjs/_esm5/internal/operators/skipWhile.js"),T=n("./node_modules/rxjs/_esm5/internal/observable/interval.js"),S=n("./node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js"),C=n("./node_modules/rxjs/_esm5/internal/operators/withLatestFrom.js"),R=n("./node_modules/rxjs/_esm5/internal/operators/merge.js"),w=n("./node_modules/rxjs/_esm5/internal/operators/startWith.js"),E=Object(j.a)(document,"mousemove"),A=Object(j.a)(document,"mouseup"),q=Object(j.a)(document,"keydown"),M=Object(j.a)(document,"keyup"),V=function(e,t,n){var r=Object(T.a)(0,S.a).pipe(Object(C.a)(e,function(e,t){return t}),Object(o.a)(t));return r.subscribe({complete:function(){return n&&n()}}),r},x=q.pipe(Object(R.a)(M),Object(i.a)(function(e){return 16===e.keyCode}),Object(u.a)(function(e,t){return e.type===t.type}),Object(c.a)(function(e){return"keydown"===e.type}),Object(w.a)(!1));try{V.displayName="requestAnimationFramesUntil",V.__docgenInfo={description:"Throttle an Observable to available animation\nframes until a second Observable omits a value.\n@param observable$ Observable to monitor\n@param until$ Observable that triggers an end to monitoring\n@param onComplete Callback function that signals monitoring has ending",displayName:"requestAnimationFramesUntil",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/observables/misc.ts#requestAnimationFramesUntil"]={docgenInfo:V.__docgenInfo,name:"requestAnimationFramesUntil",path:"src/observables/misc.ts#requestAnimationFramesUntil"})}catch(ve){}var k=function(e){var t=e.element,n=e.group,r=e.handle,a=e.snapTo,o=e.snapXTo,s=e.snapYTo;return Object(j.a)(r,"mousedown").pipe(Object(i.a)(function(e){return 1===e.which}),Object(g.a)(b),Object(l.a)(function(e){e.preventDefault(),e.stopPropagation();var r=Object(d.b)(t),l=Object(d.d)(t),i=Object(p.g)(a,o,s),u=E.pipe(Object(c.a)(P(e.clientX,e.clientY,l)),Object(_.a)(L),Object(c.a)(Y(r,i)),Object(g.a)(K(n)));return V(u,A,function(){return m.next()})}))},P=function(e,t,n){return function(r){var a=(r.clientX-e)/n,o=(r.clientY-t)/n;if(!r.shiftKey)return{left:a,top:o};var l=a/o,i=Math.abs(l);return.333<i&&i<3?{left:a,top:o/a>0?a:-1*a}:Math.abs(a)>Math.abs(o)?{left:a,top:0}:{left:0,top:o}}},L=function(e){return Math.sqrt(e.top*e.top+e.left*e.left)<5},Y=function(e,t){return function(n){if(Object(p.b)(t))return n;var r={left:e.left+n.left,top:e.top+n.top},a=Object(p.l)(t)(r);return{left:a.left-e.left,top:a.top-e.top}}},K=function(e){return function(t){return f.next({group:e,offset:t})}};try{k.displayName="createDndObservable",k.__docgenInfo={description:"Create an Obvservable that enables dragging an Element\nand emits a stream of updated positions.",displayName:"createDndObservable",props:{element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"HTMLElement"}},group:{defaultValue:null,description:"",name:"group",required:!0,type:{name:"string"}},handle:{defaultValue:null,description:"",name:"handle",required:!0,type:{name:"HTMLElement"}},snapTo:{defaultValue:null,description:"",name:"snapTo",required:!1,type:{name:"number"}},snapXTo:{defaultValue:null,description:"",name:"snapXTo",required:!1,type:{name:"number"}},snapYTo:{defaultValue:null,description:"",name:"snapYTo",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/observables/dnd.ts#createDndObservable"]={docgenInfo:k.__docgenInfo,name:"createDndObservable",path:"src/observables/dnd.ts#createDndObservable"})}catch(ve){}var H=n("./node_modules/rxjs/_esm5/internal/observable/timer.js"),I={ArrowLeft:{left:-1,top:0},ArrowRight:{left:1,top:0},ArrowUp:{left:0,top:-1},ArrowDown:{left:0,top:1}},z=function(e){return-1!==Object.keys(I).indexOf(e.key)},N=q.pipe(Object(i.a)(z)),B=M.pipe(Object(i.a)(z)),D=function(e){var t=e.element,n=e.onComplete,r=e.shouldConvertToPercent,a=void 0===r||r;return N.pipe(Object(i.a)(function(e){return!e.repeat}),Object(l.a)(function(e){var r=Object(H.a)(0,200).pipe(Object(o.a)(B),Object(c.a)(X(e,t)),Object(c.a)(Object(p.e)(a,t.parentElement)));return r.subscribe({complete:function(){return n&&n()}}),r}))},X=function(e,t){return function(){var n=Object(d.a)(t),r=Object(d.e)(t.parentElement),a=.01*r.width,o=.01*r.height,l=I[e.key],i=e.shiftKey?5:1;return{left:a*l.left*i+n.left,top:o*l.top*i+n.top}}};try{D.displayName="createKeyboardMoveObservable",D.__docgenInfo={description:"Create an Observable that enables drag-and-drop\nand emits a stream of updated positions.",displayName:"createKeyboardMoveObservable",props:{element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"HTMLElement"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"() => void"}},shouldConvertToPercent:{defaultValue:null,description:"",name:"shouldConvertToPercent",required:!0,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/observables/keyboardMove.ts#createKeyboardMoveObservable"]={docgenInfo:D.__docgenInfo,name:"createKeyboardMoveObservable",path:"src/observables/keyboardMove.ts#createKeyboardMoveObservable"})}catch(ve){}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){F(e,t,n[t])})}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W=function(e){var t=e.element,n=e.handle,r=e.onComplete,a=e.shouldConvertToPercent,o=void 0===a||a,s=e.snapTo,b=e.snapXTo,m=e.snapYTo,f=e.top,O=e.right,h=e.bottom,v=e.left;return Object(j.a)(n,"mousedown").pipe(Object(i.a)(function(e){return 1===e.which}),Object(l.a)(function(e){e.preventDefault(),e.stopPropagation();var n=Object(d.a)(t),a=Object(d.c)(t),l=Object(d.f)(t),i=Object(d.d)(t),y=Object(p.g)(s,b,m),j=E.pipe(Object(c.a)(J(e.clientX,e.clientY,i)),Object(c.a)(G(a)),Object(c.a)(Q(n,f,O,h,v)),Object(c.a)(Z),Object(c.a)(Object(p.l)(y)),Object(u.a)(),Object(C.a)(x),Object(c.a)(ee(n.width/n.height)),Object(c.a)(te(n,l,f,O,h,v)),Object(c.a)(ne(o,t.parentElement)));return V(j,A,r)}))},J=function(e,t,n){return function(r){return{angle:Object(p.a)(e,t)(r.clientX,r.clientY),distance:Object(p.f)(e,t)(r.clientX,r.clientY)/n}}},G=function(e){return function(t){var n=(t.angle-e)*Math.PI/180;return{width:t.distance*Math.cos(n),height:t.distance*Math.sin(n)}}},Q=function(e,t,n,r,a){return function(o){return{left:a?e.left+o.width:e.left,top:t?e.top+o.height:e.top,width:a?e.width-o.width:n?e.width+o.width:e.width,height:t?e.height-o.height:r?e.height+o.height:e.height}}},Z=function(e){return $({},e,{height:Math.max(20,e.height),width:Math.max(20,e.width)})},ee=function(e){return function(t){var n=U(t,2),r=n[0];return n[1]?r.width/r.height>e?$({},r,{height:r.width/e}):r.width/r.height<e?$({},r,{width:r.height*e}):r:r}},te=function(e,t,n,r,a,o){return function(l){var i,s,c=Object(d.g)(e,t),u=Object(d.g)(l,t);return a&&o?(i=u.ne.x-c.ne.x,s=u.ne.y-c.ne.y):n&&r?(i=u.sw.x-c.sw.x,s=u.sw.y-c.sw.y):n||o?(i=u.se.x-c.se.x,s=u.se.y-c.se.y):(i=u.nw.x-c.nw.x,s=u.nw.y-c.nw.y),{left:l.left-i,top:l.top-s,width:l.width,height:l.height}}},ne=function(e,t){return function(n){return e?{left:"".concat(Object(p.k)(n.left/t.offsetWidth*100),"%"),top:"".concat(Object(p.k)(n.top/t.offsetHeight*100),"%"),height:"".concat(Object(p.k)(n.height/t.offsetHeight*100),"%"),width:"".concat(Object(p.k)(n.width/t.offsetWidth*100),"%")}:{left:"".concat(Object(p.k)(n.left),"px"),top:"".concat(Object(p.k)(n.top),"px"),height:"".concat(Object(p.k)(n.height),"px"),width:"".concat(Object(p.k)(n.width),"px")}}};try{W.displayName="createResizeObservable",W.__docgenInfo={description:"",displayName:"createResizeObservable",props:{element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"HTMLElement"}},handle:{defaultValue:null,description:"",name:"handle",required:!0,type:{name:"HTMLElement"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"() => void"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"boolean"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"boolean"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"boolean"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"boolean"}},shouldConvertToPercent:{defaultValue:null,description:"",name:"shouldConvertToPercent",required:!1,type:{name:"boolean"}},snapTo:{defaultValue:null,description:"",name:"snapTo",required:!1,type:{name:"number"}},snapXTo:{defaultValue:null,description:"",name:"snapXTo",required:!1,type:{name:"number"}},snapYTo:{defaultValue:null,description:"",name:"snapYTo",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/observables/resize.ts#createResizeObservable"]={docgenInfo:W.__docgenInfo,name:"createResizeObservable",path:"src/observables/resize.ts#createResizeObservable"})}catch(ve){}var re=function(e){var t=e.element,n=e.handle,r=e.onComplete;return Object(j.a)(n,"mousedown").pipe(Object(i.a)(function(e){return 1===e.which}),Object(l.a)(function(e){e.preventDefault(),e.stopPropagation();var n=t.getBoundingClientRect(),a=(t.offsetWidth+2*n.left)/2,o=(t.offsetHeight+2*n.top)/2,l=Object(p.a)(a,o),i=Object(d.c)(t),s=l(e.clientX,e.clientY)-i,u=E.pipe(Object(c.a)(ae(l,s)));return V(u,A,r)}))},ae=function(e,t){return function(n){var r=n.shiftKey?15:.1,a=Object(p.k)(e(n.clientX,n.clientY)-t,r);return{rotation:"".concat(a,"deg")}}};try{re.displayName="createRotateObservable",re.__docgenInfo={description:"Create an Obvservable that enables rotating an HTML element\nand emits a stream of updated rotation.\n@param element HTML Element for which to enable rotation.\n@param handle HTML Element of the movable handle",displayName:"createRotateObservable",props:{element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"HTMLElement"}},handle:{defaultValue:null,description:"",name:"handle",required:!0,type:{name:"HTMLElement"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!0,type:{name:"() => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/observables/rotate.ts#createRotateObservable"]={docgenInfo:re.__docgenInfo,name:"createRotateObservable",path:"src/observables/rotate.ts#createRotateObservable"})}catch(ve){}try{createAllMoveObservable.displayName="createAllMoveObservable",createAllMoveObservable.__docgenInfo={description:"",displayName:"createAllMoveObservable",props:{element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"HTMLElement"}},group:{defaultValue:null,description:"",name:"group",required:!0,type:{name:"string"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"() => void"}},shouldConvertToPercent:{defaultValue:null,description:"",name:"shouldConvertToPercent",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/observables/index.ts#createAllMoveObservable"]={docgenInfo:createAllMoveObservable.__docgenInfo,name:"createAllMoveObservable",path:"src/observables/index.ts#createAllMoveObservable"})}catch(ve){}try{createDndObservable.displayName="createDndObservable",createDndObservable.__docgenInfo={description:"Create an Obvservable that enables dragging an Element\nand emits a stream of updated positions.",displayName:"createDndObservable",props:{element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"HTMLElement"}},group:{defaultValue:null,description:"",name:"group",required:!0,type:{name:"string"}},handle:{defaultValue:null,description:"",name:"handle",required:!0,type:{name:"HTMLElement"}},snapTo:{defaultValue:null,description:"",name:"snapTo",required:!1,type:{name:"number"}},snapXTo:{defaultValue:null,description:"",name:"snapXTo",required:!1,type:{name:"number"}},snapYTo:{defaultValue:null,description:"",name:"snapYTo",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/observables/index.ts#createDndObservable"]={docgenInfo:createDndObservable.__docgenInfo,name:"createDndObservable",path:"src/observables/index.ts#createDndObservable"})}catch(ve){}try{createKeyboardMoveObservable.displayName="createKeyboardMoveObservable",createKeyboardMoveObservable.__docgenInfo={description:"Create an Observable that enables drag-and-drop\nand emits a stream of updated positions.",displayName:"createKeyboardMoveObservable",props:{element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"HTMLElement"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"() => void"}},shouldConvertToPercent:{defaultValue:null,description:"",name:"shouldConvertToPercent",required:!0,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/observables/index.ts#createKeyboardMoveObservable"]={docgenInfo:createKeyboardMoveObservable.__docgenInfo,name:"createKeyboardMoveObservable",path:"src/observables/index.ts#createKeyboardMoveObservable"})}catch(ve){}try{createResizeObservable.displayName="createResizeObservable",createResizeObservable.__docgenInfo={description:"",displayName:"createResizeObservable",props:{element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"HTMLElement"}},handle:{defaultValue:null,description:"",name:"handle",required:!0,type:{name:"HTMLElement"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!1,type:{name:"() => void"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"boolean"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"boolean"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"boolean"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"boolean"}},shouldConvertToPercent:{defaultValue:null,description:"",name:"shouldConvertToPercent",required:!1,type:{name:"boolean"}},snapTo:{defaultValue:null,description:"",name:"snapTo",required:!1,type:{name:"number"}},snapXTo:{defaultValue:null,description:"",name:"snapXTo",required:!1,type:{name:"number"}},snapYTo:{defaultValue:null,description:"",name:"snapYTo",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/observables/index.ts#createResizeObservable"]={docgenInfo:createResizeObservable.__docgenInfo,name:"createResizeObservable",path:"src/observables/index.ts#createResizeObservable"})}catch(ve){}try{createRotateObservable.displayName="createRotateObservable",createRotateObservable.__docgenInfo={description:"Create an Obvservable that enables rotating an HTML element\nand emits a stream of updated rotation.\n@param element HTML Element for which to enable rotation.\n@param handle HTML Element of the movable handle",displayName:"createRotateObservable",props:{element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"HTMLElement"}},handle:{defaultValue:null,description:"",name:"handle",required:!0,type:{name:"HTMLElement"}},onComplete:{defaultValue:null,description:"",name:"onComplete",required:!0,type:{name:"() => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/observables/index.ts#createRotateObservable"]={docgenInfo:createRotateObservable.__docgenInfo,name:"createRotateObservable",path:"src/observables/index.ts#createRotateObservable"})}catch(ve){}var oe=n("./node_modules/rxjs/_esm5/internal/operators/concatMap.js"),le=n("./node_modules/rxjs/_esm5/internal/operators/first.js"),ie=n("./node_modules/rxjs/_esm5/internal/operators/elementAt.js"),se=n("./node_modules/rxjs/_esm5/internal/operators/mapTo.js"),ce=function(e){var t=e.element;return Object(j.a)(t,"mousedown").pipe(Object(oe.a)(function(e){return A.pipe(Object(le.a)(),Object(o.a)(E.pipe(Object(ie.a)(3))),Object(g.a)(function(e){e.stopPropagation(),e.preventDefault()}),Object(se.a)(e))}))};try{ce.displayName="createClickObservable",ce.__docgenInfo={description:"Create a click event listener for an element. Because actual click events\nmay be problematic for our other observables, this observable is based off\nof `mousedown`, `mousemove`, and `mouseup` events. Therefore, the emitted\nvalue is the element's `mousedown` event, not a `click` event.",displayName:"createClickObservable",props:{element:{defaultValue:null,description:"",name:"element",required:!0,type:{name:"HTMLElement"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/observables/click.ts#createClickObservable"]={docgenInfo:ce.__docgenInfo,name:"createClickObservable",path:"src/observables/click.ts#createClickObservable"})}catch(ve){}function ue(e){return(ue="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function de(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function me(e,t){return!t||"object"!==ue(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function fe(e){return(fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return he});var he=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=me(this,fe(t).call(this,e))).state=void 0,n.refHandlers={container:r.createRef(),dnd:r.createRef(),neRotate:r.createRef(),seRotate:r.createRef(),swRotate:r.createRef(),nwRotate:r.createRef(),nResize:r.createRef(),neResize:r.createRef(),eResize:r.createRef(),seResize:r.createRef(),sResize:r.createRef(),swResize:r.createRef(),wResize:r.createRef(),nwResize:r.createRef()},n.destroy$=new a.a,n.handleUpdate=function(){n.props.onUpdate&&!Object(p.i)(n.state,n.props.position)&&n.props.onUpdate(n.state)},n.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){pe(e,t,n[t])})}return e}({},e.position),n}var n,l,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oe(e,t)}(t,r["Component"]),n=t,(l=[{key:"componentDidMount",value:function(){this.buildSubscriptions()}},{key:"componentWillUnmount",value:function(){this.destroy$.next()}},{key:"componentDidUpdate",value:function(e){if(!Object(p.i)(this.props,e)){var t=this.props,n=t.position,r=de(t,["position"]),a=e.position,o=de(e,["position"]);Object(p.i)(n,a)||this.setState(this.props.position),Object(p.i)(r,o)||this.buildSubscriptions()}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.render,r={renderedPosition:this.state,refHandlers:this.refHandlers};if(Object(p.h)(n))return n(r);if(Object(p.h)(t))return t(r);throw new Error("Positionable must receive `render` or `children` as render callback")}},{key:"buildSubscriptions",value:function(){var e=this,t=this.props,n=t.disabled,r=t.disableKeyboardMovement,a=t.movable,l=t.onClick,i=t.resizable,s=t.rotatable,c=t.snapTo,u=t.snapXTo,d=t.snapYTo,b=this.state,m=b.left,f=b.width,h=this.props.group||Object(p.j)();if(this.destroy$.next(),this.refHandlers.container.current&&(l&&ce({element:this.refHandlers.dnd.current||this.refHandlers.container.current}).pipe(Object(o.a)(this.destroy$)).subscribe(l),!n)){if(a&&(k({element:this.refHandlers.container.current,group:h,handle:this.refHandlers.dnd.current||this.refHandlers.container.current,snapTo:c,snapXTo:u,snapYTo:d}).pipe(Object(o.a)(this.destroy$)).subscribe(),O({element:this.refHandlers.container.current,group:h,onComplete:this.handleUpdate,shouldConvertToPercent:m.includes("%")}).pipe(Object(o.a)(this.destroy$)).subscribe(function(t){return e.setState(t)}),r||D({element:this.refHandlers.container.current,onComplete:this.handleUpdate,shouldConvertToPercent:m.includes("%")}).pipe(Object(o.a)(this.destroy$)).subscribe(function(t){return e.setState(t)})),i)Object(p.c)().forEach(function(t){var n=e.refHandlers[t.refHandlerName].current;n&&W({element:e.refHandlers.container.current,handle:n,onComplete:e.handleUpdate,top:t.top,right:t.right,bottom:t.bottom,left:t.left,shouldConvertToPercent:f.includes("%"),snapTo:c,snapXTo:u,snapYTo:d}).pipe(Object(o.a)(e.destroy$)).subscribe(function(t){return e.setState(t)})});if(s)Object(p.d)().forEach(function(t){var n=e.refHandlers[t.refHandlerName].current;n&&re({element:e.refHandlers.container.current,handle:n,onComplete:e.handleUpdate}).pipe(Object(o.a)(e.destroy$)).subscribe(function(t){return e.setState(t)})})}}}])&&be(n.prototype,l),i&&be(n,i),t}();he.defaultProps={resizable:[]};t.b=he;try{he.displayName="Positionable",he.__docgenInfo={description:"",displayName:"Positionable",props:{disabled:{defaultValue:null,description:"Should all functionality be disabled? This property takes\nprecedence over `movable`, `resizable`, and `rotatable`.",name:"disabled",required:!1,type:{name:"boolean"}},disableKeyboardMovement:{defaultValue:null,description:"By default, if `movable` is `true`, both mouse and keyboard movement\nare enabled. This prop allows keyboard-based movement to be disabled.",name:"disableKeyboardMovement",required:!1,type:{name:"boolean"}},group:{defaultValue:null,description:"Members of the same group will respond\nto each other's drag and drop events.",name:"group",required:!1,type:{name:"string"}},movable:{defaultValue:null,description:"Should moving be enabled?",name:"movable",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Click event handler. If a `dnd` ref exists, it will used to track\nthe click events. Otherwise, the `container` ref will be used. This\nis a native DOM event, not a React synthetic event.",name:"onClick",required:!1,type:{name:"(e: MouseEvent) => void"}},onUpdate:{defaultValue:null,description:"Callback to notify when Positioning has changed",name:"onUpdate",required:!1,type:{name:"(sizing: AsStrings<PositionNumbers>) => void"}},position:{defaultValue:null,description:"Current Positioning (left, top, width, height, rotation)",name:"position",required:!0,type:{name:"AsStrings<PositionNumbers>"}},render:{defaultValue:null,description:"Render Prop alternative to using `children`",name:"render",required:!1,type:{name:"RenderCallback"}},resizable:{defaultValue:null,description:"Should resizing be enabled?",name:"resizable",required:!1,type:{name:"boolean"}},rotatable:{defaultValue:null,description:"Should rotation be enabled?",name:"rotatable",required:!1,type:{name:"boolean"}},snapTo:{defaultValue:null,description:"Snap drag and resize to pixels of this interval.",name:"snapTo",required:!1,type:{name:"number"}},snapXTo:{defaultValue:null,description:"Snap horizontal drag and resize to pixels of this interval\n(overwrites snapTo for horizontal values). Setting this value\nto `0` disables horizontal changes.",name:"snapXTo",required:!1,type:{name:"number"}},snapYTo:{defaultValue:null,description:"Snap vertical drag and resize to pixels of this interval\n(overwrites snapTo for vertical values). Setting this value\nto `0` disables vertical changes.",name:"snapYTo",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Positionable.tsx#Positionable"]={docgenInfo:he.__docgenInfo,name:"Positionable",path:"src/Positionable.tsx#Positionable"})}catch(ve){}}}]);
//# sourceMappingURL=documentation-positionable~documentation-positionable-container.81fad9ec5f0669f1bf5e.js.map