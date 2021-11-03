(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"0A1l":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return l}));var n=i("KINe"),o=(i("FZtP"),i("4mDm"),i("3bBZ"),i("PhnR")),a=i("WYJf"),r=Backbone.View.extend({initialize:function(){this.form=this.$(".j-egift_form"),this.data=this.$(".j-egift_data"),this.save=this.$(".j-egift_save"),this.change=this.$(".j-egift_change"),this.entryNumber=this.$el.data("index"),this.request={amount:0,recipientName:"",deliveryEmailAddress:"",confirmDeliveryEmailAddress:"",senderName:"",greetingMessage:"",entryNumber:0,CSRFToken:TPS.CSRFToken,productCode:""},this.fieldsCollection=new Backbone.Collection([{name:"recipientName",label:"Name",required:!0,type:"text",value:TPS.pageData.egiftCards[this.entryNumber].recipientName},{name:"deliveryEmailAddress",label:"E-mail",type:"email",required:!0,value:TPS.pageData.egiftCards[this.entryNumber].deliveryEmailAddress,inputmode:"email"},{name:"greetingMessage",label:"Message",type:"textarea",required:!1,value:TPS.pageData.egiftCards[this.entryNumber].greetingMessage}],{model:o.a,validate:!0,parse:!0}),this.change.show()},events:{"click .j-egift_change":"handleChangeClick","click .j-egift_save":"handleSaveClick"},handleChangeClick:function(){this.renderForm()},handleSaveClick:function(){this.validateForm()&&this.saveEgiftCard()},renderForm:function(){var e=this;this.form.empty(),this.fieldsCollection.each((function(t){var i=new a.a({model:t,parent:e}).render();e.form.append(i.el)})),this.data.hide(),this.change.hide(),this.form.show(),this.save.show()},validateForm:function(){var e=!0;return this.fieldsCollection.forEach((function(t){t.set({isClean:!1}),t.isValid()||(e=!1),t.set({isClean:!0})})),e},saveEgiftCard:function(){var e=this,t="/my-account/order/".concat(TPS.pageData.orderNumber,"/editEGiftCard"),i={};this.fieldsCollection.forEach((function(e){i[e.get("name")]=e.get("value")}));var n=jQuery.extend(this.request,TPS.pageData.egiftCards[this.entryNumber],i);$.csrfAjax(t,n).done((function(t){if(t.error)console.log(t.error);else{var i=t.entries[e.entryNumber].egiftCardCustomization;["recipientName","deliveryEmailAddress","greetingMessage"].forEach((function(t){e.$(".j-egift_data_".concat(t)).text(i[t])})),e.data.show(),e.change.show(),e.form.hide(),e.save.hide()}}))}});function l(){n.a.call(this),$(".j-back_link").hide(),TPS.pageData.egiftCards&&$(".j-ordered_product").each((function(e,t){TPS.pageData.egiftCards[e].isDelivered||new r({el:t,model:new Backbone.Model})}))}},KINe:function(e,t,i){"use strict";function n(){$(".j-full_nav a[href='".concat(window.location.pathname,"']")).addClass("my_account_navigation__link-active")}i.d(t,"a",(function(){return n}))},PhnR:function(e,t,i){"use strict";i("rB9j"),i("UxlC");var n=function(e){if(!e)return!1;var t=o(e),i=t.length,n=/^\d+$/gi.test(t);return"7"===t[0]?!!n&&10===i:!!n&&(9===i||10===i)},o=function(e){var t="+44"===e.substring(0,3),i="0044"===e.substring(0,4);return t?e=e.substring(3,e.length):i&&(e=e.substring(4,e.length)),"0"===(e=e.replace(/[ '".,\-()]/gi,"")).substring(0,1)&&(e=e.substring(1,e.length)),e},a=i("6hlI");t.a=Backbone.Model.extend({defaults:{classNames:"",disabled:!1,error:null,id:"",isClean:!0,label:"",name:"",required:!1,type:"text",value:"",showError:!0},idAttribute:"name",parse:function(e){return"titleCode"===e.name||"title"===e.name?_.extend({},e,{options:this.convertSelectOptions(e.options,"name","code")}):"countryIso"===e.name?_.extend({},e,{options:this.convertSelectOptions(e.options,"name","isocode")}):e},convertSelectOptions:function(e,t,i){return e.map((function(e){return{name:e[t],value:e[i]}}))},validatePassword:function(e){if(e){var t="",i={contain:{number:!0,"uppercase letter":!0,"lowercase letter":!0},characters:!0};i.contain.number=Boolean(e.match(/\d/)),i.contain["uppercase letter"]=Boolean(e.match(/[A-Z]/)),i.contain["lowercase letter"]=Boolean(e.match(/[a-z]/)),i.characters=Boolean(e.match(/\S{8}/));var n=Object.keys(i.contain).filter((function(e){return!i.contain[e]})),o=n.length;return i.characters&&!o||(t+="Must ",o&&(t+="contain at least one ",t+=n.slice(0,o-1).join(", ").concat("".concat(o>1?" and ":"").concat(n[o-1]))),i.characters||(5===t.indexOf("contain")&&(t+=", and "),t+="be at least 8 characters")),t}},validate:function(e){var t=e.required,i=e.value,o=e.isClean,r=e.name,l=e.error,s=e.type,c=e.label,d=e.validFunc;if(!o){if(t&&0===i.length)switch(s){case"select":return"Please select your ".concat(c.toLowerCase());case"text":case"tel":case"password":case"email":return"Please enter your ".concat(c.toLowerCase());default:return""}switch(r){case"phoneNumber":case"mobile":var u=this.collection&&this.collection.findWhere({id:"countryIso"});if(u?"GB"===u.get("value"):"GB"===TPS.config.currentSite.countryIsoCode){if(!n(i))return TPS.messages["redesign.validation.phone.invalid"]}else if(i.length<2||i.length>14)return TPS.messages["redesign.validation.phone.invalid"];break;case"postCode":case"postcode":if(t&&(null==i||0===i.length))return"Please enter a postcode";if(i&&i.length>10)return"Please enter a valid postcode"}if("email"==s||r.includes("email")){if(l)return l.message?l.message:l||TPS.messages["personal.details.email.unique"];if(!Object(a.a)(i))return TPS.messages["redesign.validation.email.invalid"];if(0===i.length)return""}if("password"==s||r.includes("password"))return l||this.validatePassword(i);if(d&&(l=d.call(this,i)),l)return l}}})},WYJf:function(e,t,i){"use strict";i("vxnP"),i("TWNs"),i("rB9j"),i("UxlC");var n=i("qmvR"),o=i("jAxj"),a=i("g/jT"),r=Backbone.View.extend({className:"form_field",initialize:function(e){this.listenTo(this.model,"change",this.renderChanges),this.parent=e.parent,this.valueCommited=!1,this.timeout=null},getInputTemplate:function(e){return"select"===e.type?'<select id="'.concat(e.name,"\" class='form_field__select ").concat(e.value?"form_field__input-not_empty":"","' autofocus ").concat(e.disabled?"disabled":"",">").concat(this.buildOptionsList(e.options),'</select>\n                    <div class="form_field__action_icon icon_arrow-down').concat(e.noValidationIcon?" icon_arrow-down-right":"",'"></div>'):"checkbox"===e.type?"<input id='".concat(e.id,"' class='form_field__checkbox check' type='").concat(e.type,"' '").concat(e.value?"checked":"","'>"):"textarea"===e.type?'<textarea id="'.concat(e.name,'" class="form_field__textarea ').concat(e.value?"form_field__input-not_empty":"",'"  ').concat(e.disabled?"disabled":""," autofocus>").concat(e.value,"</textarea>"):"password"===e.type?'<div class="form_field__password_compliance_wrap j-password_compliance_wrap"></div> \n                    <input id="'.concat(e.name,"\" class='form_field__input ").concat(e.value?"form_field__input-not_empty":"","' type='").concat(e.type,"' ").concat(e.disabled?"disabled":""," autofocus value='").concat(e.value?e.value:"","'>\n                    ").concat(e.passShow?'<a tabindex="0" class="form_field__show_password j-show_password">Show password</a>':""):'<input\n                        id="'.concat(e.name,"\"\n                        class='form_field__input ").concat(e.value?"form_field__input-not_empty":"","'\n                        type='").concat(e.type,"'\n                        ").concat(e.disabled?"disabled":"","\n                        autofocus\n                        value='").concat(e.value?e.value:"","'\n                        ").concat(e.inputmode?"inputmode=".concat(e.inputmode):"","\n                    >")},getLabelTemplate:function(e){var t=TPS.messages["select.title"];if(void 0!==e.label){var i=void 0!==TPS.messages.optionalText?" ".concat(TPS.messages.optionalText):" (optional)";t="".concat(e.label).concat(e.required?"":i)}else void 0!==e.title?t=e.title:"countryIso"===e.name&&(t=TPS.messages["country.select.title"]);return"<label class='".concat("form_field__label","' for='").concat(e.id,"'>").concat(t,"</label>")},buildOptionsList:function(e){var t=this,i=e.map((function(e){return"<option\n                ".concat(e.value===t.model.get("value")?"selected":"","\n                value='").concat(e.value,"'\n                ").concat(t.model.get("hideContent")?"data-cs-mask":""," >").concat(e.name,"</option>")}));return i.unshift('<option class="form_field__invisible_option" value=""></option>'),i.join("\n")},template:function(e){var t=e.toJSON();return'\n                <div class="form_field__error_wrapper">\n                    <div class="form_field__error">'.concat(e.validationError,'</div>\n                </div>\n                <div class="form_field__wrapper form_field__wrapper-width form_field__wrapper-').concat(t.type,'">\n                    ').concat(this.getInputTemplate(t),"\n                    ").concat(this.getLabelTemplate(t),"\n                    ").concat("checkbox"===t.type||t.noValidationIcon?"":'<span class="form_field__icon form_field__validity_icon"></span>',"\n                    ").concat(t.tooltip?'<span class="j-info_icon form_field__info_icon"></span>':"","\n                </div>")},events:{"change .form_field__input":"onFieldChange","input .form_field__input":"onFieldInput","animationend .form_field__input":"handleInputAnimation","change .form_field__checkbox":"onFieldChange","input .form_field__checkbox":"onFieldInput","change .form_field__select":"onFieldChange","input .form_field__select":"onFieldInput","change .form_field__textarea":"onFieldChange","input .form_field__textarea":"onFieldInput","click .j-show_password":"togglePasswordVisibility","keydown .j-show_password":"togglePasswordVisibility"},timeout:null,render:function(){var e=this;return this.$el.html(this.template(this.model)),this.model.get("tooltip")&&Object(o.a)({target:this.$(".j-info_icon"),content:this.model.get("tooltip")}),n.d&&setTimeout((function(){e.$(".form_field__input:-webkit-autofill").each((function(e,t){$(t).addClass("form_field__input-not_empty")}))}),375),this},updateModel:function(e){this.valueCommited=!0;var t=this.model.get("type");this.model.set({isClean:!1,error:!1,value:"checkbox"===t?e.currentTarget.checked:Object(a.a)(e.currentTarget.value)}),this.model.get("checkoutLogin")||(this.model.isValid(),this.parent&&this.parent.model.trigger("field-updated",{currentField:this.model}),this.renderChanges())},onFieldChange:function(e){this.timeout&&clearTimeout(this.timeout),this.updateModel(e)},onFieldInput:function(e){var t=this;$(e.target).val((function(e,i){return t.filterValue(i)})),this.valueCommited&&(this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){return t.updateModel(e)})))},renderChanges:function(){var e="select"===this.model.get("type")?this.$(".form_field__select"):"textarea"===this.model.get("type")?this.$(".form_field__textarea"):this.$(".form_field__input"),t=this.$(".form_field__error_wrapper");this.model.validationError?(this.$el.addClass("invalid"),t.addClass("form_field__error_wrapper-visible").find(".form_field__error").html(this.model.validationError),this.model.get("value")||this.model.get("showError")||this.removeErrorNotification(t)):(this.$el.removeClass("invalid"),this.model.get("checkoutLogin")||this.$(".form_field__validity_icon").addClass("form_field__validity_icon-visible"),this.removeErrorNotification(t)),this.model.get("value")?e.addClass("form_field__input-not_empty"):e.removeClass("form_field__input-not_empty"),e.val(this.model.get("value"))},removeErrorNotification:function(e){e.removeClass("form_field__error_wrapper-visible").find(".form_field__error").html("")},handleInputAnimation:function(e){var t=this.$(".form_field__input");e.originalEvent&&"onAutoFillStart"==e.originalEvent.animationName&&t.addClass("form_field__input-not_empty")},filterValue:function(e){if("checkbox"===this.model.get("type"))return e;var t=this.model.get("filter");return"function"==typeof t?t.call(this,e,this.model):t instanceof RegExp?e.replace(t,""):e},togglePasswordVisibility:function(e){var t=event.key||event.keyCode;if("keydown"!==event.type||"Enter"===t||13===t){e.preventDefault();var i=$(e.target).siblings("input");"password"==i.prop("type")?(i.prop("type","text"),$(e.target).text("Hide password")):(i.prop("type","password"),$(e.target).text("Show password"))}}});t.a=r},"g/jT":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i("rB9j");var n=function(e,t,i){var n;for(e=i?Math.floor(e/700):e>>1,e+=Math.floor(e/t),n=0;e>455;n+=36)e=Math.floor(e/35);return Math.floor(n+36*e/(e+38))},o=function(e,t){var i,o,a,r,l,s,c,d,u,f,h,p,m,_,g=[],v=[],w=e.length;for(i=128,a=0,r=72,(l=e.lastIndexOf("-"))<0&&(l=0),s=0;s<l;++s){if(t&&(v[g.length]=e.charCodeAt(s)-65<26),e.charCodeAt(s)>=128)throw new RangeError("Illegal input >= 0x80");g.push(e.charCodeAt(s))}for(c=l>0?l+1:0;c<w;){for(d=a,u=1,f=36;;f+=36){if(c>=w)throw RangeError("punycode_bad_input(1)");if((h=(_=e.charCodeAt(c++))-48<10?_-22:_-65<26?_-65:_-97<26?_-97:36)>=36)throw RangeError("punycode_bad_input(2)");if(h>Math.floor((2147483647-a)/u))throw RangeError("punycode_overflow(1)");if(a+=h*u,h<(p=f<=r?1:f>=r+26?26:f-r))break;if(u>Math.floor(2147483647/(36-p)))throw RangeError("punycode_overflow(2)");u*=36-p}if(o=g.length+1,r=n(a-d,o,0===d),Math.floor(a/o)>2147483647-i)throw RangeError("punycode_overflow(3)");i+=Math.floor(a/o),a%=o,t&&v.splice(a,0,e.charCodeAt(c-1)-65<26),g.splice(a,0,i),a++}if(t)for(a=0,m=g.length;a<m;a++)v[a]&&(g[a]=String.fromCharCode(g[a]).toUpperCase().charCodeAt(0));return function(e){for(var t,i=[],n=e.length,o=0;o<n;){if(55296==(63488&(t=e[o++])))throw new RangeError("UTF-16(encode): Illegal UTF-16 value");t>65535&&(t-=65536,i.push(String.fromCharCode(t>>>10&1023|55296)),t=56320|1023&t),i.push(String.fromCharCode(t))}return i.join("")}(g)},a=function(e){for(var t=e.split("."),i=[],n=0;n<t.length;++n){var a=t[n];i.push(a.match(/^xn--/)?o(a.slice(4)):a)}return i.join(".")}},jAxj:function(e,t,i){"use strict";i("FZtP"),i("MdDL");var n=[];window.addEventListener("resize",(function(){n.length&&(n=n.filter((function(e){return document.body.contains(e[0])}))).forEach((function(e){var t=e.tooltip("option","hide");e.tooltip("option","hide",!1),e.tooltip("close"),e.tooltip("option","hide",t)}))}));t.a=function(e){var t=e.target,i=e.content;i&&(t.tooltip({collision:"flip",content:i,items:"span",position:{my:"center bottom-5",at:"center top"}}).on("click ",(function(e){if(window.matchMedia(TPS.config.mobileBreakpoint).matches||window.matchMedia(TPS.config.tableBreakpoint).matches){e.stopImmediatePropagation();var t=$(e.target);t.data("uiTooltipOpen")?(t.tooltip("open"),t.removeData("uiTooltipOpen")):(t.tooltip("close"),t.data("uiTooltipOpen",!0))}})),n.push(t))}}}]);