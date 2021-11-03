(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{"1Y5N":function(e,t,i){"use strict";i("vxnP");var n=i("hsyc"),s=Backbone.View.extend({baseTemplate:_.template('\n        <div class="dropdown j-dropdown {{=dropdownClass}}" role="tooltip" aria-hidden="true">\n            <div class="dropdown_head">\n                <h4 class="dropdown_head__title">{{=title}}</h4>\n                <div class="dropdown_head__close j-dropdown-close"></div>\n            </div>\n            <div class="dropdown_body"></div>\n            <div class="dropdown_footer"></div>\n        </div>\n    '),events:{"click .j-dropdown-close":"close","click .dropdown":"stopPropagation","touchstart .dropdown":"stopPropagation",mouseleave:"close",mouseenter:"clearAutoClose"},defaults:{destroyOnClose:!0,show:!0,autoCloseTimeout:0,closeTimeout:0,title:"dropdown"},preinitialize:function(e){var t;this.events=_.extend(this.events,s.prototype.events),this.useHistory=null!==(t=e.useHistory)&&void 0!==t?t:window.matchMedia(TPS.config.mobileBreakpoint).matches},initialize:function(e){var t=this;return this.settings=_.extend({},this.defaults,e),this.onOutsideClick=this.onOutsideClick.bind(this),this.onHistoryPop=this.onHistoryPop.bind(this),this.close=this.close.bind(this),setTimeout(function(){n.f.on("click.dropdownOutside keydown.dropdownOutside",this.onOutsideClick)}.bind(this),0),this.template&&(this.template=_.template(this.template),this.render()),"number"==typeof this.settings.autoCloseTimeout&&this.settings.autoCloseTimeout>0&&this.setupAutoClose(this.settings.autoCloseTimeout),this.settings.show&&requestAnimationFrame((function(){return t.show()})),this},setTitle:function(e){return this.element.find(".dropdown_head__title").html(e),this},setHead:function(e){return this.element.find(".dropdown_head").html(e),this},setBody:function(e){return this.element.find(".dropdown_body").html(e),this},setFooter:function(e){return this.element.find(".dropdown_footer").html(e),this},show:function(){var e=this;return this.trigger("open"),this.element.addClass("open").attr({"aria-hidden":!1}),requestAnimationFrame((function(){return e.element.addClass("transition")})),this.calculateBoundaries(),this.useHistory&&(window.history.pushState({component:"dropdown",name:this.settings.title},null),window.addEventListener("popstate",this.onHistoryPop)),this},close:function(){var e,t=this;return this.trigger("close"),this.clearAutoClose(),this.element.removeClass("transition").attr({"aria-hidden":!0}),n.f.off(".dropdownOutside"),window.removeEventListener("popstate",this.onHistoryPop),this.useHistory&&"dropdown"===(null===(e=window.history.state)||void 0===e?void 0:e.component)&&window.history.go(-1),setTimeout((function(){t.element.removeClass("open"),t.settings.destroyOnClose&&t.destroy()}),200),this},calculateBoundaries:function(){var e=n.f.width(),t=this.element.width(),i=this.$el.width(),s=this.element.offset(),o=this.$el.offset();if(e-s.left<Math.floor(t)){var r=e-t-10,d=o.left+i/2-t/2;d+t+10<e&&(r=d),this.element.offset({left:r})}},destroy:function(){return this.trigger("destroy"),this.undelegateEvents(),this.stopListening(),this.element.remove(),this},setupAutoClose:function(){var e=this;this.settings.closeTimeout=setTimeout((function(){e.close(),clearTimeout()}),this.settings.autoCloseTimeout)},clearAutoClose:function(){clearTimeout(this.settings.closeTimeout),this.settings.closeTimeout=0},isOpen:function(){return $(this.element).hasClass("open")},onOutsideClick:function(e){if("click"===e.type){if((e.originalEvent.path||e.originalEvent.composedPath&&e.originalEvent.composedPath()||[]).indexOf(this.el)>-1)return!0;if(this.isOpen())return e.preventDefault(),this.close()}else if("keydown"===e.type&&27===e.keyCode&&this.isOpen())return e.preventDefault(),this.close();return!0},onHistoryPop:function(){var e;"dropdown"!==(null===(e=window.history.state)||void 0===e?void 0:e.component)&&this.close()},stopPropagation:function(e){e.stopPropagation()},render:function(){var e=this.model.toJSON();return this.element=$(this.baseTemplate(this.settings)),this.$el.append(this.element),this.setBody(this.template(e)),this}});t.a=s},"2/H9":function(e,t,i){"use strict";i.r(t);var n=i("PaP2"),s=i("x4dk"),o=i.n(s),r=i("g+ml"),d=i.n(r),a=Backbone.Model.extend({defaults:{sites:[{prefix:"uk",name:"United Kingdom",flag:o.a,currency:"GBP (&pound;)"},{prefix:"ie",name:"Ireland",flag:d.a,currency:"EUR (&euro;)"}],currentSite:"uk"},initialize:function(){TPS.config.currentSite.prefix&&this.set("currentSite",TPS.config.currentSite.prefix)}}),l=n.a.extend({template:'\n        <ul class="dropdown_body__links Currency_Lvl2" role="listbox">\n            {{ for (let i = 0; i < sites.length; i++) { }}\n            <li class="dropdown_body__link">\n                <a class="currency__change j-currency-change j-currency__change-uk"\n                    href="{{=(currentSite === sites[i].prefix ? \'#\' : \'/\')}}{{=sites[i].prefix === \'ie\' ? \'ie\' : \'\'}}"\n                    aria-label="{{=TPS.messages[\'redesign.accessibility.ariaLabel.currency.\' + sites[i].prefix]}}"\n                >\n                    <img src="{{=sites[i].flag}}"/>\n                    {{=sites[i].name}}: {{=sites[i].currency}}\n                </a>\n            </li>\n            {{ } }}\n        </ul>\n    ',model:new a,initialize:function(e){n.a.prototype.initialize.call(this,_.extend(e,{dropdownClass:"header_dropdown header_dropdown_currency",title:"Choose Your Currency<br />and Delivery Country"}))}});t.default=l},PaP2:function(e,t,i){"use strict";var n=i("1Y5N"),s=_.extend({},n.a.prototype.events,{"keydown a":"simulateClick"}),o=n.a.extend({preinitialize:function(){_.extend(this.events,s)},events:s,simulateClick:function(e){var t=e.key||e.keyCode;"Enter"!==t&&13!==t||$(e.target)[0].click()}});t.a=o},"g+ml":function(e,t,i){e.exports=i.p+"images/d7daafea865284eb6625e3676ab15464.png"},x4dk:function(e,t,i){e.exports=i.p+"images/9843345d853b5a2326e0549f110c7737.png"}}]);