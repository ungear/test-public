(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{"1Y5N":function(e,t,s){"use strict";s("vxnP");var o=s("hsyc"),i=Backbone.View.extend({baseTemplate:_.template('\n        <div class="dropdown j-dropdown {{=dropdownClass}}" role="tooltip" aria-hidden="true">\n            <div class="dropdown_head">\n                <h4 class="dropdown_head__title">{{=title}}</h4>\n                <div class="dropdown_head__close j-dropdown-close"></div>\n            </div>\n            <div class="dropdown_body"></div>\n            <div class="dropdown_footer"></div>\n        </div>\n    '),events:{"click .j-dropdown-close":"close","click .dropdown":"stopPropagation","touchstart .dropdown":"stopPropagation",mouseleave:"close",mouseenter:"clearAutoClose"},defaults:{destroyOnClose:!0,show:!0,autoCloseTimeout:0,closeTimeout:0,title:"dropdown"},preinitialize:function(e){var t;this.events=_.extend(this.events,i.prototype.events),this.useHistory=null!==(t=e.useHistory)&&void 0!==t?t:window.matchMedia(TPS.config.mobileBreakpoint).matches},initialize:function(e){var t=this;return this.settings=_.extend({},this.defaults,e),this.onOutsideClick=this.onOutsideClick.bind(this),this.onHistoryPop=this.onHistoryPop.bind(this),this.close=this.close.bind(this),setTimeout(function(){o.f.on("click.dropdownOutside keydown.dropdownOutside",this.onOutsideClick)}.bind(this),0),this.template&&(this.template=_.template(this.template),this.render()),"number"==typeof this.settings.autoCloseTimeout&&this.settings.autoCloseTimeout>0&&this.setupAutoClose(this.settings.autoCloseTimeout),this.settings.show&&requestAnimationFrame((function(){return t.show()})),this},setTitle:function(e){return this.element.find(".dropdown_head__title").html(e),this},setHead:function(e){return this.element.find(".dropdown_head").html(e),this},setBody:function(e){return this.element.find(".dropdown_body").html(e),this},setFooter:function(e){return this.element.find(".dropdown_footer").html(e),this},show:function(){var e=this;return this.trigger("open"),this.element.addClass("open").attr({"aria-hidden":!1}),requestAnimationFrame((function(){return e.element.addClass("transition")})),this.calculateBoundaries(),this.useHistory&&(window.history.pushState({component:"dropdown",name:this.settings.title},null),window.addEventListener("popstate",this.onHistoryPop)),this},close:function(){var e,t=this;return this.trigger("close"),this.clearAutoClose(),this.element.removeClass("transition").attr({"aria-hidden":!0}),o.f.off(".dropdownOutside"),window.removeEventListener("popstate",this.onHistoryPop),this.useHistory&&"dropdown"===(null===(e=window.history.state)||void 0===e?void 0:e.component)&&window.history.go(-1),setTimeout((function(){t.element.removeClass("open"),t.settings.destroyOnClose&&t.destroy()}),200),this},calculateBoundaries:function(){var e=o.f.width(),t=this.element.width(),s=this.$el.width(),i=this.element.offset(),n=this.$el.offset();if(e-i.left<Math.floor(t)){var r=e-t-10,a=n.left+s/2-t/2;a+t+10<e&&(r=a),this.element.offset({left:r})}},destroy:function(){return this.trigger("destroy"),this.undelegateEvents(),this.stopListening(),this.element.remove(),this},setupAutoClose:function(){var e=this;this.settings.closeTimeout=setTimeout((function(){e.close(),clearTimeout()}),this.settings.autoCloseTimeout)},clearAutoClose:function(){clearTimeout(this.settings.closeTimeout),this.settings.closeTimeout=0},isOpen:function(){return $(this.element).hasClass("open")},onOutsideClick:function(e){if("click"===e.type){if((e.originalEvent.path||e.originalEvent.composedPath&&e.originalEvent.composedPath()||[]).indexOf(this.el)>-1)return!0;if(this.isOpen())return e.preventDefault(),this.close()}else if("keydown"===e.type&&27===e.keyCode&&this.isOpen())return e.preventDefault(),this.close();return!0},onHistoryPop:function(){var e;"dropdown"!==(null===(e=window.history.state)||void 0===e?void 0:e.component)&&this.close()},stopPropagation:function(e){e.stopPropagation()},render:function(){var e=this.model.toJSON();return this.element=$(this.baseTemplate(this.settings)),this.$el.append(this.element),this.setBody(this.template(e)),this}});t.a=i},Hwyp:function(e,t,s){"use strict";s.r(t);var o=s("PaP2"),i=s("nH/H"),n=o.a.extend({template:'\n        <ul class="dropdown_body__links" role="listbox">\n            <li class="dropdown_body__link j-use_location">\n                <a href="#" aria-label="{{=messages.useCurrent}}">\n                    <span class="icon icon_crosshair"></span>\n                    {{=messages.useCurrent}}\n                </a>\n            </li>\n            <li class="dropdown_body__link">\n                <a href="{{=links.allStores}}" aria-label="{{=messages.seeAll}}">\n                    <span class="icon icon_map-pin"></span>\n                    {{=messages.seeAll}}\n                </a>\n            </li>\n        </ul>\n    ',initialize:function(){o.a.prototype.initialize.call(this,{title:this.model.get("title"),dropdownClass:"header_dropdown header_dropdown__store_finder"}),this.renderSearch()},close:function(){this.useLocationClicked||this.$("#postal-code").is(":focus")||o.a.prototype.close.call(this)}});_.extend(n.prototype,i.a),t.default=n},PaP2:function(e,t,s){"use strict";var o=s("1Y5N"),i=_.extend({},o.a.prototype.events,{"keydown a":"simulateClick"}),n=o.a.extend({preinitialize:function(){_.extend(this.events,i)},events:i,simulateClick:function(e){var t=e.key||e.keyCode;"Enter"!==t&&13!==t||$(e.target)[0].click()}});t.a=n},"nH/H":function(e,t,s){"use strict";var o=s("Xapy"),i=Backbone.Model.extend({defaults:{title:TPS.messages["redesign.store.finder.menu.title"],messages:{useCurrent:TPS.messages["redesign.store.finder.menu.use.current.location"],seeAll:TPS.messages["redesign.store.finder.menu.see.all.stores"]},links:{allStores:o.a.ALL_STORES}}});t.a={footerTemplate:'\n        <form class="store_finder-search_form j-search_form" method="get"\n              action="'.concat(o.c.STORE_FINDER,'"\n              role="search"\n          >\n            <span class="icon icon_search"></span>\n            <input type="search" id="postal-code" name="postal-code" placeholder="Insert postcode..." aria-label="').concat(TPS.messages["redesign.accessibility.ariaLabel.enterPostcode"],'"/>\n            <input type="hidden" name="useLocation" value="false" />\n        </form>\n    '),events:{"keydown .j-search_form":"useUserPostcode","click .j-search_form":"preventDefault","click .j-use_location":"useLocation"},model:new i,renderSearch:function(e){e?e.append(this.footerTemplate):this.setFooter(this.footerTemplate)},useLocation:function(e){var t=this;e.preventDefault(),"geolocation"in navigator?(this.useLocationClicked=!0,navigator.geolocation.getCurrentPosition((function(e){t.$(".j-search_form").find("[name=useLocation]").val("true").end().submit()}),(function(e){t.model.set({error:e})}))):this.model.set("error","Geolocation is not available")},useUserPostcode:function(e){var t=e.key||e.keyCode;"Enter"!==t&&13!==t||this.$(".j-search_form").submit()},preventDefault:function(e){e.preventDefault()}}}}]);