(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"1lE9":function(e,t,i){"use strict";i("FZtP");function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var a=Backbone.View.extend({initialize:function(e){this.type=e.type,this.autoHide=e.autoHide,this.delay=e.delay,this.callback=e.callback,this.showClose=e.showClose,this.notificationClassNames=e.notificationClassNames,this.styles=e.styles,this.styles&&this.$el.css(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},this.styles)),this.listenTo(this.model,"change:content",this.render)},events:{"click .j-close":"close"},render:function(){this.$el.empty(),this.notificationClassNames&&!this.$el.hasClass(this.notificationClassNames)&&this.$el.addClass(this.notificationClassNames),this.$el.toggleClass("hidden",!this.model.get("content"));var e=this.getBlockClasses(),t=this.getContent(e);return this.$el.append(t),this.autoHide&&this.removeNotification(this.delay,this.callback),this},getBlockClasses:function(){var e="notification j-notification";return this.model.get("type")&&(e+=" notification-".concat(this.model.get("type"))),this.showClose&&(e+=" notification-close"),e},getContent:function(e){var t='<div class="'.concat(e,'">').concat(this.model.get("content"));return this.showClose&&(t+='<span class="notification__close_icon j-close">✕</span>'),t+="</div>"},removeNotification:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:TPS.configurationManager.MESSAGE_FADEOUT_TIMEOUT,i=arguments.length>1?arguments[1]:void 0;setTimeout((function(){e.$el.fadeOut("slow",(function(){this.remove()})),"function"==typeof i&&i()}),t)},close:function(){this.$el.remove()}});t.a=a},W64S:function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));i("TWNs"),i("rB9j"),i("UxlC"),i("FZtP");var n=i("jAxj"),s=i("g/jT");function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var c=Backbone.View.extend({className:"custom_field__input_group",events:{"focus .j-input":"handleInputFocus","blur .j-input":"handleInputBlur","input .j-input":"handleInputInput","change .j-input":"handleInputChange","animationend .j-input":"handleInputAnimation","keyup .j-input":"handleInputKeyup","change .j-select":"handleSelectChange","click .j-checkbox":"handleCheckboxClick","keydown .j-checkbox-label":"simulateCheckboxChange","keydown .j-input":"handleInputKeydown"},classes:{labelAnimated:"custom_field__placeholder-animated",invalidInput:"custom_field__input-invalid",requiredInput:"custom_field__input-required",removeIconClass:"custom_field__icon-remove",checkIconClass:"custom_field__icon-check",requiredIconClass:"custom_field__icon-required",hiddenIconClass:"hidden"},initialize:function(e){this.className=e.className,this.autocomplete=e.autocomplete,this.isValid=void 0===this.model.get("isValid")||this.model.get("isValid"),this.listenTo(this.model,"change",this.update),this.valueCommited=!1,this.highlightRequired=e.highlightRequired},template:function(e){var t=!!e.get("isHintNeeded"),i=e.get("hintClass")?e.get("hintClass"):"";return'\n            <div class="custom_field__input_validation_group '.concat(t?"custom_field__input_validation_group-hinted":"",'">\n                ').concat(this.getInputTemplate(e.attributes),"\n                ").concat(this.getLabelTemplate(e.attributes),"\n            </div>\n            ").concat(t?'<span title="" class="custom_field__hint j-hint '.concat(i,'"></span>'):"","\n        ")},update:function(){this.$el.empty(),this.render()},render:function(){if(this.className&&this.$el.addClass(this.className),this.$el.html(this.template(this.model)),this.model.get("isHintNeeded")){var e=this.model.get("tooltip"),t=this.$(".j-hint");Object(n.a)({target:t,content:e})}return this},getInputTemplate:function(e){var t=e.value||"",i="custom_field__input custom_field__input-placeholder j-input";i+=" ".concat(this.getInputValidationClass(e)),e.inputClassName&&(i+=" ".concat(e.inputClassName));var n="custom_field__icon j-icon";return n+=" ".concat(this.getBtnValidationClass(e)),'\n            <input\n                id="'.concat(e.id,'"\n                class="').concat(i,'"\n                type="').concat(e.type,'"\n                ').concat(e.disabled?"disabled":"",'\n                value="').concat(t,'"\n                ').concat(this.autocomplete?"autocomplete=".concat(this.autocomplete):"","\n                ").concat(e.inputmode?"inputmode=".concat(e.inputmode):"","\n            >\n            ").concat(e.hideIcon?"":'<div class="'.concat(n,'"></div>'),"\n        ")},getLabelTemplate:function(e){var t="custom_field__placeholder j-label ";return void 0!==e.value&&""!==e.value&&(t+=this.classes.labelAnimated),'<label class="'.concat(t,'" for="').concat(e.id,'">').concat(e.label,"</label>")},getInputValidationClass:function(e){var t=e.isValid,i=e.value,n=e.required;return t?!i&&n&&this.highlightRequired?this.classes.requiredInput:"":this.classes.invalidInput},getBtnValidationClass:function(e){var t=e.isValid,i=e.value,n=e.required;return!i&&t?n&&this.highlightRequired?this.classes.requiredIconClass:this.classes.hiddenIconClass:t?this.classes.checkIconClass:this.classes.removeIconClass},handleInputFocus:function(e){this.$(".j-label").hasClass(this.classes.labelAnimated)||this.$(".j-label").addClass(this.classes.labelAnimated);var t=e.target;this.trigger("field-focused",{target:t})},handleInputBlur:function(e){var t=$(e.target),i=Object(s.a)(t.val());this.$(".j-label").toggleClass(this.classes.labelAnimated,""!==i),this.toggleValidationClasses(t,i)},handleInputAnimation:function(e){e.originalEvent&&"onAutoFillStart"==e.originalEvent.animationName&&this.$(".j-label").addClass(this.classes.labelAnimated)},handleInputInput:function(e){var t=this;$(e.target).val((function(e,i){return t.filterValue(i)})),this.valueCommited&&this.handleInputChange(e)},handleInputChange:function(e){this.valueCommited=!0;var t=$(e.target),i=Object(s.a)(t.val());this.toggleValidationClasses(t,i),this.model.set({value:i,isValid:this.isValid},{silent:!0}),this.trigger("field-changed",{currentField:this.model,value:i,isValid:this.isValid}),this.model.trigger("field-changed")},handleInputKeyup:function(e){var t=Object(s.a)($(e.target).val());this.isValid=!!this.getIsValid(t),this.trigger("field-keyup",{currentField:this.model,isValid:this.isValid})},handleInputKeydown:function(e){"Enter"===(e.key||e.keyCode)&&(this.handleInputChange(e),this.trigger("field-enter-clicked",e,{currentField:this.model,isValid:this.isValid}))},getIsValid:function(e){var t=this.model.get("validFunc");return"function"!=typeof t||t.call(this,e)},toggleValidationClasses:function(e,t){this.isValid=!!this.getIsValid(t);var i={isValid:this.isValid,value:t,required:this.model.get("required")},n=this.$(".j-icon");n.removeClass([this.classes.checkIconClass,this.classes.removeIconClass,this.classes.requiredIconClass,this.classes.hiddenIconClass]),n.addClass(this.getBtnValidationClass(i)),e.removeClass([this.classes.invalidInput,this.classes.requiredInput]),e.addClass(this.getInputValidationClass(i))},filterValue:function(e){if("checkbox"===this.model.get("type"))return e;var t=this.model.get("filter");return"function"==typeof t?t.call(this,e,this.model):t instanceof RegExp?e.replace(t,""):e}}),d=c.extend({getInputTemplate:function(e){var t="custom_field__input custom_field__input-placeholder custom_field__input-select j-select";return e.inputClassName&&(t+=" ".concat(e.inputClassName)),t+=" ".concat(this.getInputValidationClass(e)),'<select id="'.concat(e.id,'" class="').concat(t,'" ').concat(e.disabled?"disabled":"",">\n                ").concat(this.buildOptionsList(e.options),'\n            </select>\n            <div class="custom_field__icon custom_field__icon-arrow j-arrow"></div>\n        ')},buildOptionsList:function(e){var t=this;if(Array.isArray(e)){var i=e.map((function(e){return"<option \n            ".concat(e.value===t.model.attributes.value?"selected":"","\n            ").concat(t.model.get("hideContent")?"data-cs-mask":""," \n            value='").concat(e.value,"'>\n                ").concat(e.name,"\n            </option>")}));return i.unshift('<option class="form_field__invisible_option" selected disabled hidden value></option>'),i.join("\n")}},handleSelectChange:function(e){var t=$(e.target).val();this.$(".j-label").toggleClass(this.classes.labelAnimated,""!==t),this.isValid=!!this.getIsValid(t),this.model.set({value:t,isValid:this.isValid}),this.trigger("field-changed",{currentField:this.model,value:t,isValid:this.isValid}),this.model.trigger("field-changed")}}),u=c.extend({getInputTemplate:function(e){var t="custom_field__checkbox check j-checkbox";return e.inputClassName&&(t+=" ".concat(e.inputClassName)),'<input\n            id="'.concat(e.id,'"\n            class="').concat(t,'"\n            type="').concat(e.type,'"\n            ').concat(e.value?"checked":"",'\n            tabindex="-1"\n        >')},getLabelTemplate:function(e){return'<label class="j-checkbox-label custom_field__checkbox_label" for="'.concat(e.id,'" role="checkbox" tabindex="0" aria-checked="').concat(e.value,'">\n            ').concat(e.label,"\n        </label>")},simulateCheckboxChange:function(e){var t=e.key||e.keyCode;" "!==t&&32!==t||(e.preventDefault(),$(e.target).click().focus())},handleCheckboxClick:function(e){var t=e.target.checked;this.isValid=!!this.getIsValid(t),this.model.set({value:t,isValid:this.isValid}),this.trigger("field-checked",{currentField:this.model,value:t,isValid:this.isValid})}}),h=c.extend({getInputTemplate:function(e){var t=!!e.isValid,i="custom_field__input custom_field__input-placeholder j-input ".concat(t?"":this.classes.invalidInput);return e.inputClassName&&(i+=" ".concat(e.inputClassName)),'\n            <input\n                id="'.concat(e.id,'"\n                class="').concat(i,'"\n                type="').concat(e.type,'"\n                ').concat(e.disabled?"disabled":"",'\n                value="').concat(e.value?e.value:"",'"\n                inputmode="search"\n            >\n            <div class="icon icon_search custom_field__icon-search j-icon-search"></div>\n        ')}}),p=function(e){var t=r({},e);if(!t.model)throw new Error("Model is necessary for the function");switch(t.model.get("type")){case"select":return new d(o({},t)).render();case"checkbox":return new u(o({},t)).render();case"search":return new h(o({},t)).render();default:return new c(o({},t)).render()}}},"g/jT":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i("rB9j");var n=function(e,t,i){var n;for(e=i?Math.floor(e/700):e>>1,e+=Math.floor(e/t),n=0;e>455;n+=36)e=Math.floor(e/35);return Math.floor(n+36*e/(e+38))},s=function(e,t){var i,s,a,o,l,r,c,d,u,h,p,f,m,g,v=[],w=[],_=e.length;for(i=128,a=0,o=72,(l=e.lastIndexOf("-"))<0&&(l=0),r=0;r<l;++r){if(t&&(w[v.length]=e.charCodeAt(r)-65<26),e.charCodeAt(r)>=128)throw new RangeError("Illegal input >= 0x80");v.push(e.charCodeAt(r))}for(c=l>0?l+1:0;c<_;){for(d=a,u=1,h=36;;h+=36){if(c>=_)throw RangeError("punycode_bad_input(1)");if((p=(g=e.charCodeAt(c++))-48<10?g-22:g-65<26?g-65:g-97<26?g-97:36)>=36)throw RangeError("punycode_bad_input(2)");if(p>Math.floor((2147483647-a)/u))throw RangeError("punycode_overflow(1)");if(a+=p*u,p<(f=h<=o?1:h>=o+26?26:h-o))break;if(u>Math.floor(2147483647/(36-f)))throw RangeError("punycode_overflow(2)");u*=36-f}if(s=v.length+1,o=n(a-d,s,0===d),Math.floor(a/s)>2147483647-i)throw RangeError("punycode_overflow(3)");i+=Math.floor(a/s),a%=s,t&&w.splice(a,0,e.charCodeAt(c-1)-65<26),v.splice(a,0,i),a++}if(t)for(a=0,m=v.length;a<m;a++)w[a]&&(v[a]=String.fromCharCode(v[a]).toUpperCase().charCodeAt(0));return function(e){for(var t,i=[],n=e.length,s=0;s<n;){if(55296==(63488&(t=e[s++])))throw new RangeError("UTF-16(encode): Illegal UTF-16 value");t>65535&&(t-=65536,i.push(String.fromCharCode(t>>>10&1023|55296)),t=56320|1023&t),i.push(String.fromCharCode(t))}return i.join("")}(v)},a=function(e){for(var t=e.split("."),i=[],n=0;n<t.length;++n){var a=t[n];i.push(a.match(/^xn--/)?s(a.slice(4)):a)}return i.join(".")}},j6at:function(e,t,i){"use strict";var n=Backbone.View.extend({tagName:"button",className:"custom_field__action_link j-showpassword",events:{click:"handleShowPasswordClick"},attributes:{type:"button"},showPasswordTexts:{show:TPS.messages["redesign.form.btn.showPassword"],hide:TPS.messages["redesign.form.btn.hidePassword"]},initialize:function(e){this.passwordModel=e.passwordModel,this.isPasswordHidden=!0},render:function(){return this.$el.empty(),this.$el.text(this.showPasswordTexts.show),this},handleShowPasswordClick:function(e){if(e.preventDefault(),this.passwordModel&&""!==this.passwordModel.get("value")){var t=this.isPasswordHidden?"text":"password";this.passwordModel.set("type",t);var i=this.isPasswordHidden?"hide":"show";this.$el.text(this.showPasswordTexts[i]),this.isPasswordHidden=!this.isPasswordHidden}}});t.a=n},jAxj:function(e,t,i){"use strict";i("FZtP"),i("MdDL");var n=[];window.addEventListener("resize",(function(){n.length&&(n=n.filter((function(e){return document.body.contains(e[0])}))).forEach((function(e){var t=e.tooltip("option","hide");e.tooltip("option","hide",!1),e.tooltip("close"),e.tooltip("option","hide",t)}))}));t.a=function(e){var t=e.target,i=e.content;i&&(t.tooltip({collision:"flip",content:i,items:"span",position:{my:"center bottom-5",at:"center top"}}).on("click ",(function(e){if(window.matchMedia(TPS.config.mobileBreakpoint).matches||window.matchMedia(TPS.config.tableBreakpoint).matches){e.stopImmediatePropagation();var t=$(e.target);t.data("uiTooltipOpen")?(t.tooltip("open"),t.removeData("uiTooltipOpen")):(t.tooltip("close"),t.data("uiTooltipOpen",!0))}})),n.push(t))}},kFja:function(e,t,i){"use strict";var n=Backbone.View.extend({className:"password_validation_popup j-password_validation_popup",render:function(){var e='\n            <h6 class="password_validation_popup__title">'.concat(TPS.messages["validation.password.requirement.title"],'</h6>\n            <ul class="password_validation_popup__requirement_list">\n                <li class="password_validation_popup__requirement_item j-min_length_rule">\n                    ').concat(TPS.messages["validation.password.requirement.minlength"],'\n                </li>\n                <li class="password_validation_popup__requirement_item j-numbers_rule">\n                    ').concat(TPS.messages["validation.password.requirement.number"],'\n                </li>\n                <li class="password_validation_popup__requirement_item j-lowercase_rule">\n                    ').concat(TPS.messages["validation.password.requirement.lowercase"],'\n                </li>\n                <li class="password_validation_popup__requirement_item j-uppercase_rule">\n                    ').concat(TPS.messages["validation.password.requirement.uppercase"],"\n                </li>\n            </ul>\n        ");return this.$el.append(e),this}});t.a=n},p8pl:function(e,t,i){"use strict";var n=i("1lE9");t.a=n.a.extend({className:"custom_field__input_validation_group j-validation"})},"vUA/":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return f}));var n=i("Xapy"),s=(i("rB9j"),i("p8pl")),a=i("kFja"),o=i("j6at"),l=i("W64S"),r=new Backbone.Model({id:"reset-change-pwd",type:"password",name:"pwd",label:"New Password",required:!0,value:"",isValid:!0,tooltip:TPS.messages["redesign.login.reset.password.hint"],inputClassName:"Password",validFunc:function(e){var t=e.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);return!(!t||!t.length)},isHintNeeded:!0}),c=new Backbone.Model({id:"reset-change-repeat-pwd",type:"password",name:"checkPwd",label:"Confirm Password",required:!0,value:"",isValid:!0,tooltip:TPS.messages["redesign.login.reset.repeatPassword.hint"],inputClassName:"ConfirmPassword",validFunc:function(e){return r.get("value")===e},isHintNeeded:!0}),d={passwordModel:r,repeatPasswordModel:c},u=d.passwordModel,h=d.repeatPasswordModel,p=Backbone.View.extend({tag:"form",className:"custom_field__fieldset",events:{"click .j-submit":"handleSubmitClick"},initialize:function(e){this.resetChangePasswordUrl=e.resetChangePasswordUrl,this.redirectUrl=e.redirectUrl,this.commonNotificationModel=new Backbone.Model({type:"error"}),this.confirmPasswordNotificationModel=new Backbone.Model({type:"error"})},render:function(){this.$el.empty();this.$el.append('<div class="j-field-password field-password"></div>');var e=this.$(".j-field-password"),t=Object(l.a)({model:u,autocomplete:"new-password"});e.append(t.el);var i=(new a.a).render();e.append(i.el),t.on("field-focused",this.handlePasswordFieldFocus,this);var n=new o.a({passwordModel:u}).render();this.$el.append(n.el);var r=new s.a({model:this.confirmPasswordNotificationModel,notificationClassNames:"custom_field__input_validation_group-hinted"}).render();this.$el.append(r.el);var c=Object(l.a)({model:h,autocomplete:"new-password"});this.$el.append(c.el),c.on("field-changed",this.handleInputChange,this);var d=new o.a({passwordModel:h}).render();this.$el.append(d.el);var p=new s.a({model:this.commonNotificationModel,notificationClassNames:"custom_field__input_validation_group-hinted"}).render();this.$el.append(p.el);var f='\n            <div class="custom_field__btn_wrapper"><button type="submit" class="btn btn-green custom_field__btn custom_field__btn-60 j-submit Submit">\n                '.concat(TPS.messages["redesign.form.btn.reset"],"\n            </button></div>");return this.$el.append(f),this},handlePasswordFieldFocus:function(e){var t=e.target;$(t).passwordValidation({doUnbind:!0})},handleInputChange:function(e){e.isValid?this.confirmPasswordNotificationModel.get("content")&&this.confirmPasswordNotificationModel.set({content:""}):this.confirmPasswordNotificationModel.set({content:TPS.messages["redesign.login.changePassword.msg.passwordsDoNotMatch"]})},handleSubmitClick:function(e){var t=this;e.preventDefault(),this.isSubmitRequest&&this.isSubmitRequest.abort(),TPS.utils.addSpinner(this.$el);var i=TPS.utils.searchQueryToObj(window.location.search)&&TPS.utils.searchQueryToObj(window.location.search).token,n={CSRFToken:TPS.CSRFToken,pwd:u.get("value"),checkPwd:h.get("value"),token:i};this.isSubmitRequest=$.post(this.resetChangePasswordUrl,n).then((function(e){if(200!==e.errorCode){var i=e.message||TPS.messages["redesign.form.error.common.notification"],n="block"===e.extraMessage?"info":"error";t.commonNotificationModel.set({content:i,type:n})}else t.commonNotificationModel.get("content")&&t.commonNotificationModel.set({content:""}),t.redirectUrl&&(window.location.href=t.redirectUrl)})).fail((function(e){console.log("error",e),t.commonNotificationModel.set({content:TPS.messages["redesign.form.error.common.notification"],type:"error"})})).always((function(){TPS.utils.removeSpinner(t.$el),t.isSubmitRequest=null}))}});function f(){new p({el:".j-changepassword-form",resetChangePasswordUrl:n.c.RESET_CHANGE_PASSWORD,redirectUrl:n.c.ACCOUNT}).render()}}}]);