(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+7QC":function(t,e,i){},"+NVk":function(t,e,i){var o,n,s;
/*!
 * jQuery UI Tooltip 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */n=[i("+2Rf"),i("vBzC"),i("Jchv"),i("y6ec"),i("Qwlt"),i("MIQu")],void 0===(s="function"==typeof(o=function(t){return t.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var o=(e.attr("aria-describedby")||"").split(/\s+/);o.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(o.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),o=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,o);-1!==n&&o.splice(n,1),e.removeData("ui-tooltip-id"),(o=t.trim(o.join(" ")))?e.attr("aria-describedby",o):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=t([])},_setOption:function(e,i){var o=this;this._super(e,i),"content"===e&&t.each(this.tooltips,(function(t,e){o._updateContent(e.element)}))},_setOptionDisabled:function(t){this[t?"_disable":"_enable"]()},_disable:function(){var e=this;t.each(this.tooltips,(function(i,o){var n=t.Event("blur");n.target=n.currentTarget=o.element[0],e.close(n,!0)})),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter((function(){var e=t(this);if(e.is("[title]"))return e.data("ui-tooltip-title",e.attr("title")).removeAttr("title")})))},_enable:function(){this.disabledTitles.each((function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})),this.disabledTitles=t([])},open:function(e){var i=this,o=t(e?e.target:this.element).closest(this.options.items);o.length&&!o.data("ui-tooltip-id")&&(o.attr("title")&&o.data("ui-tooltip-title",o.attr("title")),o.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&o.parents().each((function(){var e,o=t(this);o.data("ui-tooltip-open")&&((e=t.Event("blur")).target=e.currentTarget=this,i.close(e,!0)),o.attr("title")&&(o.uniqueId(),i.parents[this.id]={element:this,title:o.attr("title")},o.attr("title",""))})),this._registerCloseHandlers(e,o),this._updateContent(o,e))},_updateContent:function(t,e){var i,o=this.options.content,n=this,s=e?e.type:null;if("string"==typeof o||o.nodeType||o.jquery)return this._open(e,t,o);(i=o.call(t[0],(function(i){n._delay((function(){t.data("ui-tooltip-open")&&(e&&(e.type=s),this._open(e,t,i))}))})))&&this._open(e,t,i)},_open:function(e,i,o){var n,s,l,a,r=t.extend({},this.options.position);function c(t){r.of=t,s.is(":hidden")||s.position(r)}o&&((n=this._find(i))?n.tooltip.find(".ui-tooltip-content").html(o):(i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),n=this._tooltip(i),s=n.tooltip,this._addDescribedBy(i,s.attr("id")),s.find(".ui-tooltip-content").html(o),this.liveRegion.children().hide(),(a=t("<div>").html(s.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"),a.removeAttr("id").find("[id]").removeAttr("id"),a.appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:c}),c(e)):s.position(t.extend({of:i},this.options.position)),s.hide(),this._show(s,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(l=this.delayedShow=setInterval((function(){s.is(":visible")&&(c(r.of),clearInterval(l))}),t.fx.interval)),this._trigger("open",e,{tooltip:s})))},_registerCloseHandlers:function(e,i){var o={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var o=t.Event(e);o.currentTarget=i[0],this.close(o,!0)}}};i[0]!==this.element[0]&&(o.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(o.mouseleave="close"),e&&"focusin"!==e.type||(o.focusout="close"),this._on(!0,i,o)},close:function(e){var i,o=this,n=t(e?e.currentTarget:this.element),s=this._find(n);s?(i=s.tooltip,s.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),s.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,(function(){o._removeTooltip(t(this))})),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,(function(e,i){t(i.element).attr("title",i.title),delete o.parents[e]})),s.closing=!0,this._trigger("close",e,{tooltip:i}),s.hiding||(s.closing=!1))):n.removeData("ui-tooltip-open")},_tooltip:function(e){var i=t("<div>").attr("role","tooltip"),o=t("<div>").appendTo(i),n=i.uniqueId().attr("id");return this._addClass(o,"ui-tooltip-content"),this._addClass(i,"ui-tooltip","ui-widget ui-widget-content"),i.appendTo(this._appendTo(e)),this.tooltips[n]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_appendTo:function(t){var e=t.closest(".ui-front, dialog");return e.length||(e=this.document[0].body),e},_destroy:function(){var e=this;t.each(this.tooltips,(function(i,o){var n=t.Event("blur"),s=o.element;n.target=n.currentTarget=s[0],e.close(n,!0),t("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title")||s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))})),this.liveRegion.remove()}}),!1!==t.uiBackCompat&&t.widget("ui.tooltip",t.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var t=this._superApply(arguments);return this.options.tooltipClass&&t.tooltip.addClass(this.options.tooltipClass),t}}),t.ui.tooltip})?o.apply(e,n):o)||(t.exports=s)},"1lE9":function(t,e,i){"use strict";i("FZtP");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var s=Backbone.View.extend({initialize:function(t){this.type=t.type,this.autoHide=t.autoHide,this.delay=t.delay,this.callback=t.callback,this.showClose=t.showClose,this.notificationClassNames=t.notificationClassNames,this.styles=t.styles,this.styles&&this.$el.css(function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},this.styles)),this.listenTo(this.model,"change:content",this.render)},events:{"click .j-close":"close"},render:function(){this.$el.empty(),this.notificationClassNames&&!this.$el.hasClass(this.notificationClassNames)&&this.$el.addClass(this.notificationClassNames),this.$el.toggleClass("hidden",!this.model.get("content"));var t=this.getBlockClasses(),e=this.getContent(t);return this.$el.append(e),this.autoHide&&this.removeNotification(this.delay,this.callback),this},getBlockClasses:function(){var t="notification j-notification";return this.model.get("type")&&(t+=" notification-".concat(this.model.get("type"))),this.showClose&&(t+=" notification-close"),t},getContent:function(t){var e='<div class="'.concat(t,'">').concat(this.model.get("content"));return this.showClose&&(e+='<span class="notification__close_icon j-close">✕</span>'),e+="</div>"},removeNotification:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:TPS.configurationManager.MESSAGE_FADEOUT_TIMEOUT,i=arguments.length>1?arguments[1]:void 0;setTimeout((function(){t.$el.fadeOut("slow",(function(){this.remove()})),"function"==typeof i&&i()}),e)},close:function(){this.$el.remove()}});e.a=s},Jchv:function(t,e,i){var o,n,s;
/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */n=[i("+2Rf"),i("Qwlt")],void 0===(s="function"==typeof(o=function(t){return function(){var e,i=Math.max,o=Math.abs,n=/left|center|right/,s=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,a=/^\w+/,r=/%$/,c=t.fn.position;function d(t,e,i){return[parseFloat(t[0])*(r.test(t[0])?e/100:1),parseFloat(t[1])*(r.test(t[1])?i/100:1)]}function h(e,i){return parseInt(t.css(e,i),10)||0}function u(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.position={scrollbarWidth:function(){if(void 0!==e)return e;var i,o,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),s=n.children()[0];return t("body").append(n),i=s.offsetWidth,n.css("overflow","scroll"),i===(o=s.offsetWidth)&&(o=n[0].clientWidth),n.remove(),e=i-o},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),o=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth;return{width:"scroll"===o||"auto"===o&&e.height<e.element[0].scrollHeight?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),o=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:o,isDocument:n,offset:o||n?{left:0,top:0}:t(e).offset(),scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return c.apply(this,arguments);e=t.extend({},e);var r,p,f,m,g,v,b=t(e.of),_=t.position.getWithinInfo(e.within),y=t.position.getScrollInfo(_),C=(e.collision||"flip").split(" "),w={};return v=u(b),b[0].preventDefault&&(e.at="left top"),p=v.width,f=v.height,m=v.offset,g=t.extend({},m),t.each(["my","at"],(function(){var t,i,o=(e[this]||"").split(" ");1===o.length&&(o=n.test(o[0])?o.concat(["center"]):s.test(o[0])?["center"].concat(o):["center","center"]),o[0]=n.test(o[0])?o[0]:"center",o[1]=s.test(o[1])?o[1]:"center",t=l.exec(o[0]),i=l.exec(o[1]),w[this]=[t?t[0]:0,i?i[0]:0],e[this]=[a.exec(o[0])[0],a.exec(o[1])[0]]})),1===C.length&&(C[1]=C[0]),"right"===e.at[0]?g.left+=p:"center"===e.at[0]&&(g.left+=p/2),"bottom"===e.at[1]?g.top+=f:"center"===e.at[1]&&(g.top+=f/2),r=d(w.at,p,f),g.left+=r[0],g.top+=r[1],this.each((function(){var n,s,l=t(this),a=l.outerWidth(),c=l.outerHeight(),u=h(this,"marginLeft"),v=h(this,"marginTop"),j=a+u+h(this,"marginRight")+y.width,I=c+v+h(this,"marginBottom")+y.height,k=t.extend({},g),T=d(w.my,l.outerWidth(),l.outerHeight());"right"===e.my[0]?k.left-=a:"center"===e.my[0]&&(k.left-=a/2),"bottom"===e.my[1]?k.top-=c:"center"===e.my[1]&&(k.top-=c/2),k.left+=T[0],k.top+=T[1],n={marginLeft:u,marginTop:v},t.each(["left","top"],(function(i,o){t.ui.position[C[i]]&&t.ui.position[C[i]][o](k,{targetWidth:p,targetHeight:f,elemWidth:a,elemHeight:c,collisionPosition:n,collisionWidth:j,collisionHeight:I,offset:[r[0]+T[0],r[1]+T[1]],my:e.my,at:e.at,within:_,elem:l})})),e.using&&(s=function(t){var n=m.left-k.left,s=n+p-a,r=m.top-k.top,d=r+f-c,h={target:{element:b,left:m.left,top:m.top,width:p,height:f},element:{element:l,left:k.left,top:k.top,width:a,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:d<0?"top":r>0?"bottom":"middle"};p<a&&o(n+s)<p&&(h.horizontal="center"),f<c&&o(r+d)<f&&(h.vertical="middle"),i(o(n),o(s))>i(o(r),o(d))?h.important="horizontal":h.important="vertical",e.using.call(this,t,h)}),l.offset(t.extend(k,{using:s}))}))},t.ui.position={fit:{left:function(t,e){var o,n=e.within,s=n.isWindow?n.scrollLeft:n.offset.left,l=n.width,a=t.left-e.collisionPosition.marginLeft,r=s-a,c=a+e.collisionWidth-l-s;e.collisionWidth>l?r>0&&c<=0?(o=t.left+r+e.collisionWidth-l-s,t.left+=r-o):t.left=c>0&&r<=0?s:r>c?s+l-e.collisionWidth:s:r>0?t.left+=r:c>0?t.left-=c:t.left=i(t.left-a,t.left)},top:function(t,e){var o,n=e.within,s=n.isWindow?n.scrollTop:n.offset.top,l=e.within.height,a=t.top-e.collisionPosition.marginTop,r=s-a,c=a+e.collisionHeight-l-s;e.collisionHeight>l?r>0&&c<=0?(o=t.top+r+e.collisionHeight-l-s,t.top+=r-o):t.top=c>0&&r<=0?s:r>c?s+l-e.collisionHeight:s:r>0?t.top+=r:c>0?t.top-=c:t.top=i(t.top-a,t.top)}},flip:{left:function(t,e){var i,n,s=e.within,l=s.offset.left+s.scrollLeft,a=s.width,r=s.isWindow?s.scrollLeft:s.offset.left,c=t.left-e.collisionPosition.marginLeft,d=c-r,h=c+e.collisionWidth-a-r,u="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];d<0?((i=t.left+u+p+f+e.collisionWidth-a-l)<0||i<o(d))&&(t.left+=u+p+f):h>0&&((n=t.left-e.collisionPosition.marginLeft+u+p+f-r)>0||o(n)<h)&&(t.left+=u+p+f)},top:function(t,e){var i,n,s=e.within,l=s.offset.top+s.scrollTop,a=s.height,r=s.isWindow?s.scrollTop:s.offset.top,c=t.top-e.collisionPosition.marginTop,d=c-r,h=c+e.collisionHeight-a-r,u="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,p="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,f=-2*e.offset[1];d<0?((n=t.top+u+p+f+e.collisionHeight-a-l)<0||n<o(d))&&(t.top+=u+p+f):h>0&&((i=t.top-e.collisionPosition.marginTop+u+p+f-r)>0||o(i)<h)&&(t.top+=u+p+f)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position})?o.apply(e,n):o)||(t.exports=s)},MdDL:function(t,e,i){i("MIQu"),i("Jchv"),i("vBzC"),i("y6ec"),i("+NVk"),i("P/ie"),i("+7QC")},W64S:function(t,e,i){"use strict";i.d(e,"a",(function(){return p}));i("TWNs"),i("rB9j"),i("UxlC"),i("FZtP");var o=i("jAxj"),n=i("g/jT");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t}).apply(this,arguments)}var c=Backbone.View.extend({className:"custom_field__input_group",events:{"focus .j-input":"handleInputFocus","blur .j-input":"handleInputBlur","input .j-input":"handleInputInput","change .j-input":"handleInputChange","animationend .j-input":"handleInputAnimation","keyup .j-input":"handleInputKeyup","change .j-select":"handleSelectChange","click .j-checkbox":"handleCheckboxClick","keydown .j-checkbox-label":"simulateCheckboxChange","keydown .j-input":"handleInputKeydown"},classes:{labelAnimated:"custom_field__placeholder-animated",invalidInput:"custom_field__input-invalid",requiredInput:"custom_field__input-required",removeIconClass:"custom_field__icon-remove",checkIconClass:"custom_field__icon-check",requiredIconClass:"custom_field__icon-required",hiddenIconClass:"hidden"},initialize:function(t){this.className=t.className,this.autocomplete=t.autocomplete,this.isValid=void 0===this.model.get("isValid")||this.model.get("isValid"),this.listenTo(this.model,"change",this.update),this.valueCommited=!1,this.highlightRequired=t.highlightRequired},template:function(t){var e=!!t.get("isHintNeeded"),i=t.get("hintClass")?t.get("hintClass"):"";return'\n            <div class="custom_field__input_validation_group '.concat(e?"custom_field__input_validation_group-hinted":"",'">\n                ').concat(this.getInputTemplate(t.attributes),"\n                ").concat(this.getLabelTemplate(t.attributes),"\n            </div>\n            ").concat(e?'<span title="" class="custom_field__hint j-hint '.concat(i,'"></span>'):"","\n        ")},update:function(){this.$el.empty(),this.render()},render:function(){if(this.className&&this.$el.addClass(this.className),this.$el.html(this.template(this.model)),this.model.get("isHintNeeded")){var t=this.model.get("tooltip"),e=this.$(".j-hint");Object(o.a)({target:e,content:t})}return this},getInputTemplate:function(t){var e=t.value||"",i="custom_field__input custom_field__input-placeholder j-input";i+=" ".concat(this.getInputValidationClass(t)),t.inputClassName&&(i+=" ".concat(t.inputClassName));var o="custom_field__icon j-icon";return o+=" ".concat(this.getBtnValidationClass(t)),'\n            <input\n                id="'.concat(t.id,'"\n                class="').concat(i,'"\n                type="').concat(t.type,'"\n                ').concat(t.disabled?"disabled":"",'\n                value="').concat(e,'"\n                ').concat(this.autocomplete?"autocomplete=".concat(this.autocomplete):"","\n                ").concat(t.inputmode?"inputmode=".concat(t.inputmode):"","\n            >\n            ").concat(t.hideIcon?"":'<div class="'.concat(o,'"></div>'),"\n        ")},getLabelTemplate:function(t){var e="custom_field__placeholder j-label ";return void 0!==t.value&&""!==t.value&&(e+=this.classes.labelAnimated),'<label class="'.concat(e,'" for="').concat(t.id,'">').concat(t.label,"</label>")},getInputValidationClass:function(t){var e=t.isValid,i=t.value,o=t.required;return e?!i&&o&&this.highlightRequired?this.classes.requiredInput:"":this.classes.invalidInput},getBtnValidationClass:function(t){var e=t.isValid,i=t.value,o=t.required;return!i&&e?o&&this.highlightRequired?this.classes.requiredIconClass:this.classes.hiddenIconClass:e?this.classes.checkIconClass:this.classes.removeIconClass},handleInputFocus:function(t){this.$(".j-label").hasClass(this.classes.labelAnimated)||this.$(".j-label").addClass(this.classes.labelAnimated);var e=t.target;this.trigger("field-focused",{target:e})},handleInputBlur:function(t){var e=$(t.target),i=Object(n.a)(e.val());this.$(".j-label").toggleClass(this.classes.labelAnimated,""!==i),this.toggleValidationClasses(e,i)},handleInputAnimation:function(t){t.originalEvent&&"onAutoFillStart"==t.originalEvent.animationName&&this.$(".j-label").addClass(this.classes.labelAnimated)},handleInputInput:function(t){var e=this;$(t.target).val((function(t,i){return e.filterValue(i)})),this.valueCommited&&this.handleInputChange(t)},handleInputChange:function(t){this.valueCommited=!0;var e=$(t.target),i=Object(n.a)(e.val());this.toggleValidationClasses(e,i),this.model.set({value:i,isValid:this.isValid},{silent:!0}),this.trigger("field-changed",{currentField:this.model,value:i,isValid:this.isValid}),this.model.trigger("field-changed")},handleInputKeyup:function(t){var e=Object(n.a)($(t.target).val());this.isValid=!!this.getIsValid(e),this.trigger("field-keyup",{currentField:this.model,isValid:this.isValid})},handleInputKeydown:function(t){"Enter"===(t.key||t.keyCode)&&(this.handleInputChange(t),this.trigger("field-enter-clicked",t,{currentField:this.model,isValid:this.isValid}))},getIsValid:function(t){var e=this.model.get("validFunc");return"function"!=typeof e||e.call(this,t)},toggleValidationClasses:function(t,e){this.isValid=!!this.getIsValid(e);var i={isValid:this.isValid,value:e,required:this.model.get("required")},o=this.$(".j-icon");o.removeClass([this.classes.checkIconClass,this.classes.removeIconClass,this.classes.requiredIconClass,this.classes.hiddenIconClass]),o.addClass(this.getBtnValidationClass(i)),t.removeClass([this.classes.invalidInput,this.classes.requiredInput]),t.addClass(this.getInputValidationClass(i))},filterValue:function(t){if("checkbox"===this.model.get("type"))return t;var e=this.model.get("filter");return"function"==typeof e?e.call(this,t,this.model):e instanceof RegExp?t.replace(e,""):t}}),d=c.extend({getInputTemplate:function(t){var e="custom_field__input custom_field__input-placeholder custom_field__input-select j-select";return t.inputClassName&&(e+=" ".concat(t.inputClassName)),e+=" ".concat(this.getInputValidationClass(t)),'<select id="'.concat(t.id,'" class="').concat(e,'" ').concat(t.disabled?"disabled":"",">\n                ").concat(this.buildOptionsList(t.options),'\n            </select>\n            <div class="custom_field__icon custom_field__icon-arrow j-arrow"></div>\n        ')},buildOptionsList:function(t){var e=this;if(Array.isArray(t)){var i=t.map((function(t){return"<option \n            ".concat(t.value===e.model.attributes.value?"selected":"","\n            ").concat(e.model.get("hideContent")?"data-cs-mask":""," \n            value='").concat(t.value,"'>\n                ").concat(t.name,"\n            </option>")}));return i.unshift('<option class="form_field__invisible_option" selected disabled hidden value></option>'),i.join("\n")}},handleSelectChange:function(t){var e=$(t.target).val();this.$(".j-label").toggleClass(this.classes.labelAnimated,""!==e),this.isValid=!!this.getIsValid(e),this.model.set({value:e,isValid:this.isValid}),this.trigger("field-changed",{currentField:this.model,value:e,isValid:this.isValid}),this.model.trigger("field-changed")}}),h=c.extend({getInputTemplate:function(t){var e="custom_field__checkbox check j-checkbox";return t.inputClassName&&(e+=" ".concat(t.inputClassName)),'<input\n            id="'.concat(t.id,'"\n            class="').concat(e,'"\n            type="').concat(t.type,'"\n            ').concat(t.value?"checked":"",'\n            tabindex="-1"\n        >')},getLabelTemplate:function(t){return'<label class="j-checkbox-label custom_field__checkbox_label" for="'.concat(t.id,'" role="checkbox" tabindex="0" aria-checked="').concat(t.value,'">\n            ').concat(t.label,"\n        </label>")},simulateCheckboxChange:function(t){var e=t.key||t.keyCode;" "!==e&&32!==e||(t.preventDefault(),$(t.target).click().focus())},handleCheckboxClick:function(t){var e=t.target.checked;this.isValid=!!this.getIsValid(e),this.model.set({value:e,isValid:this.isValid}),this.trigger("field-checked",{currentField:this.model,value:e,isValid:this.isValid})}}),u=c.extend({getInputTemplate:function(t){var e=!!t.isValid,i="custom_field__input custom_field__input-placeholder j-input ".concat(e?"":this.classes.invalidInput);return t.inputClassName&&(i+=" ".concat(t.inputClassName)),'\n            <input\n                id="'.concat(t.id,'"\n                class="').concat(i,'"\n                type="').concat(t.type,'"\n                ').concat(t.disabled?"disabled":"",'\n                value="').concat(t.value?t.value:"",'"\n                inputmode="search"\n            >\n            <div class="icon icon_search custom_field__icon-search j-icon-search"></div>\n        ')}}),p=function(t){var e=r({},t);if(!e.model)throw new Error("Model is necessary for the function");switch(e.model.get("type")){case"select":return new d(l({},e)).render();case"checkbox":return new h(l({},e)).render();case"search":return new u(l({},e)).render();default:return new c(l({},e)).render()}}},"g/jT":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));i("rB9j");var o=function(t,e,i){var o;for(t=i?Math.floor(t/700):t>>1,t+=Math.floor(t/e),o=0;t>455;o+=36)t=Math.floor(t/35);return Math.floor(o+36*t/(t+38))},n=function(t,e){var i,n,s,l,a,r,c,d,h,u,p,f,m,g,v=[],b=[],_=t.length;for(i=128,s=0,l=72,(a=t.lastIndexOf("-"))<0&&(a=0),r=0;r<a;++r){if(e&&(b[v.length]=t.charCodeAt(r)-65<26),t.charCodeAt(r)>=128)throw new RangeError("Illegal input >= 0x80");v.push(t.charCodeAt(r))}for(c=a>0?a+1:0;c<_;){for(d=s,h=1,u=36;;u+=36){if(c>=_)throw RangeError("punycode_bad_input(1)");if((p=(g=t.charCodeAt(c++))-48<10?g-22:g-65<26?g-65:g-97<26?g-97:36)>=36)throw RangeError("punycode_bad_input(2)");if(p>Math.floor((2147483647-s)/h))throw RangeError("punycode_overflow(1)");if(s+=p*h,p<(f=u<=l?1:u>=l+26?26:u-l))break;if(h>Math.floor(2147483647/(36-f)))throw RangeError("punycode_overflow(2)");h*=36-f}if(n=v.length+1,l=o(s-d,n,0===d),Math.floor(s/n)>2147483647-i)throw RangeError("punycode_overflow(3)");i+=Math.floor(s/n),s%=n,e&&b.splice(s,0,t.charCodeAt(c-1)-65<26),v.splice(s,0,i),s++}if(e)for(s=0,m=v.length;s<m;s++)b[s]&&(v[s]=String.fromCharCode(v[s]).toUpperCase().charCodeAt(0));return function(t){for(var e,i=[],o=t.length,n=0;n<o;){if(55296==(63488&(e=t[n++])))throw new RangeError("UTF-16(encode): Illegal UTF-16 value");e>65535&&(e-=65536,i.push(String.fromCharCode(e>>>10&1023|55296)),e=56320|1023&e),i.push(String.fromCharCode(e))}return i.join("")}(v)},s=function(t){for(var e=t.split("."),i=[],o=0;o<e.length;++o){var s=e[o];i.push(s.match(/^xn--/)?n(s.slice(4)):s)}return i.join(".")}},jAxj:function(t,e,i){"use strict";i("FZtP"),i("MdDL");var o=[];window.addEventListener("resize",(function(){o.length&&(o=o.filter((function(t){return document.body.contains(t[0])}))).forEach((function(t){var e=t.tooltip("option","hide");t.tooltip("option","hide",!1),t.tooltip("close"),t.tooltip("option","hide",e)}))}));e.a=function(t){var e=t.target,i=t.content;i&&(e.tooltip({collision:"flip",content:i,items:"span",position:{my:"center bottom-5",at:"center top"}}).on("click ",(function(t){if(window.matchMedia(TPS.config.mobileBreakpoint).matches||window.matchMedia(TPS.config.tableBreakpoint).matches){t.stopImmediatePropagation();var e=$(t.target);e.data("uiTooltipOpen")?(e.tooltip("open"),e.removeData("uiTooltipOpen")):(e.tooltip("close"),e.data("uiTooltipOpen",!0))}})),o.push(e))}},mXBM:function(t,e,i){"use strict";i.r(e);var o=i("Xapy"),n=i("p8pl"),s=i("W64S"),l=(i("rB9j"),new Backbone.Model({id:"register-createNewCard",type:"text",name:"cardNumber",disabled:!1,label:TPS.messages["redesign.form.input.cardNumber.placeholder"],required:!1,value:"",isValid:!0,inputClassName:"Rewards_card_number",validFunc:function(t){return 1===(t.match(/^[0-9]+$/g)||[]).length&&13===t.length},isHintNeeded:!0,tooltip:"\n        <div>\n            <p>".concat(TPS.messages["redesign.login.create.account.loyaltyCard.hint"],"</p>\n        </div>\n    "),inputmode:"numeric"})),a=new Backbone.Model({type:"error"}),r=Backbone.View.extend({initialize:function(){this.render()},render:function(){var t=new n.a({model:a,notificationClassNames:"custom_field__input_validation_group-hinted"}).render();this.$el.append(t.el);var e=Object(s.a)({model:l});e.on("field-changed",this.handleInputChange,this),e.on("field-keyup",this.handleInputKeyup,this),e.on("field-enter-clicked",this.handleSubmit,this),this.$el.append(e.el),$("#associate-card").submit((function(t){t.preventDefault(),e.trigger("field-enter-clicked")})),$("#btn-submit-card").attr("disabled",!1)},handleSubmit:function(){var t=this,e=l.get("value"),i=function(){window.location.href=o.b.ACCOUNT};$.csrfAjax(o.a.ACCOUNT_ADD_EXISTING_LOYALTY_CARD,{cardNumber:e}).then((function(e){if(e&&"string"!=typeof e)if(Array.isArray(e)&&e.length){var o=e[0];["SIEBEL_ERROR","POSTILION_ERROR"].includes(o.extraMessage)?i():t.setErrorMessage(o.message)}else i();else i()}))},handleInputKeyup:function(t){t.isValid&&a.get("content")&&this.resetNotification()},handleInputChange:function(t){t.isValid?a.get("content")&&this.resetNotification():this.setErrorMessage(TPS.messages["redesign.login.create.account.loyaltyCard.invalid"])},setErrorMessage:function(t){a.set({content:"<p>".concat(t,"</p>"),type:"error"}),l.set("isValid",!1)},resetNotification:function(){a.clear().set(a.defaults)}});e.default=r},p8pl:function(t,e,i){"use strict";var o=i("1lE9");e.a=o.a.extend({className:"custom_field__input_validation_group j-validation"})}}]);