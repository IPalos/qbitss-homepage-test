"use strict";
(self["webpackChunkpk2_angular"] = self["webpackChunkpk2_angular"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ 1796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ 4696);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppComponent = /*#__PURE__*/function () {
  function AppComponent(renderer, router, document, element, location) {
    (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);

    this.renderer = renderer;
    this.router = router;
    this.document = document;
    this.element = element;
    this.location = location;
  }

  (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      var navbar = this.element.nativeElement.children[0].children[0];
      this._router = this.router.events.filter(function (event) {
        return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd;
      }).subscribe(function (event) {
        if (window.outerWidth > 991) {
          window.document.children[0].scrollTop = 0;
        } else {
          window.document.activeElement.scrollTop = 0;
        }

        _this.navbar.sidebarClose();
      });
      this.renderer.listen('window', 'scroll', function (event) {
        var number = window.scrollY;

        if (number > 150 || window.pageYOffset > 150) {
          // add logic
          navbar.classList.remove('navbar-transparent');
        } else {
          // remove logic
          navbar.classList.add('navbar-transparent');
        }
      });
      var ua = window.navigator.userAgent;
      var trident = ua.indexOf('Trident/');

      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      if (version) {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('ie-background');
      }
    }
  }, {
    key: "removeFooter",
    value: function removeFooter() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice(1);

      if (titlee === 'signup' || titlee === 'nucleoicons') {
        return false;
      } else {
        return true;
      }
    }
  }]);

  return AppComponent;
}();

AppComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location
  }];
};

AppComponent.propDecorators = {
  navbar: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__.NavbarComponent]
  }]
};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ 6738);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ 4696);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/footer/footer.component */ 5227);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ 5642);
/* harmony import */ var _sections_sections_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/sections.module */ 4065);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /*#__PURE__*/(0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _components_components_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsModule, _sections_sections_module__WEBPACK_IMPORTED_MODULE_7__.SectionsModule, _app_routing__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule],
  providers: [],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
})], AppModule);


/***/ }),

/***/ 6738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.component */ 782);
/* harmony import */ var _sections_security_security_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/security/security.component */ 7967);
/* harmony import */ var _sections_software_software_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/software/software.component */ 848);
/* harmony import */ var _sections_data_center_data_center_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/data-center/data-center.component */ 7571);
/* harmony import */ var _sections_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/about-us/about-us.component */ 4349);
/* harmony import */ var _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/contact/contact.component */ 350);
/* harmony import */ var _sections_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/page-not-found/page-not-found.component */ 556);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: '#/**',
  component: _sections_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__.PageNotFoundComponent
}, {
  path: 'home',
  component: _components_components_component__WEBPACK_IMPORTED_MODULE_2__.ComponentsComponent
}, {
  path: 'security',
  component: _sections_security_security_component__WEBPACK_IMPORTED_MODULE_3__.SecurityComponent
}, {
  path: 'software',
  component: _sections_software_software_component__WEBPACK_IMPORTED_MODULE_4__.SoftwareComponent
}, {
  path: 'contact',
  component: _sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__.ContactComponent
}, {
  path: 'datacenter',
  component: _sections_data_center_data_center_component__WEBPACK_IMPORTED_MODULE_5__.DataCenterComponent
}, {
  path: 'aboutUs',
  component: _sections_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__.AboutUsComponent
}];

var AppRoutingModule = /*#__PURE__*/(0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});

AppRoutingModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: []
})], AppRoutingModule);


/***/ }),

/***/ 782:
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsComponent": function() { return /* binding */ ComponentsComponent; }
/* harmony export */ });
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _components_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.component.html?ngResource */ 5733);
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_src_app_components_components_component_ts_css_ngResource_home_ignacio_Documents_qbitss_homepage_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICBuZ2ItcHJvZ3Jlc3NiYXIgewogICAgICAgIG1hcmdpbi10b3A6IDVyZW07CiAgICB9CiAgICA_3D_home_ignacio_Documents_qbitss_homepage_src_app_components_components_component_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/components/components.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBuZ2ItcHJvZ3Jlc3NiYXIgewogICAgICAgIG1hcmdpbi10b3A6IDVyZW07CiAgICB9CiAgICA%3D!./src/app/components/components.component.ts */ 837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsComponent = /*#__PURE__*/function () {
  function ComponentsComponent(renderer) {
    (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ComponentsComponent);

    this.renderer = renderer;
    this.page = 4;
    this.page1 = 5;
  }

  (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ComponentsComponent, [{
    key: "isWeekend",
    value: function isWeekend(date) {
      var d = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;
    }
  }, {
    key: "isDisabled",
    value: function isDisabled(date, current) {
      return date.month !== current.month;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var input_group_focus = document.getElementsByClassName('form-control');
      var input_group = document.getElementsByClassName('input-group');

      var _loop = function _loop(i) {
        input_group[i].children[0].addEventListener('focus', function () {
          input_group[i].classList.add('input-group-focus');
        });
        input_group[i].children[0].addEventListener('blur', function () {
          input_group[i].classList.remove('input-group-focus');
        });
      };

      for (var i = 0; i < input_group.length; i++) {
        _loop(i);
      }
    }
  }]);

  return ComponentsComponent;
}();

ComponentsComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2
  }];
};

ComponentsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-components',
  template: _components_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_home_ignacio_Documents_qbitss_homepage_src_app_components_components_component_ts_css_ngResource_home_ignacio_Documents_qbitss_homepage_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICBuZ2ItcHJvZ3Jlc3NiYXIgewogICAgICAgIG1hcmdpbi10b3A6IDVyZW07CiAgICB9CiAgICA_3D_home_ignacio_Documents_qbitss_homepage_src_app_components_components_component_ts__WEBPACK_IMPORTED_MODULE_3__]
})], ComponentsComponent);


/***/ }),

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": function() { return /* binding */ ComponentsModule; }
/* harmony export */ });
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-nouislider */ 858);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ 4307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.component */ 782);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/modal.component */ 385);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ComponentsModule = /*#__PURE__*/(0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ComponentsModule() {
  (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ComponentsModule);
});

ComponentsModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, ng2_nouislider__WEBPACK_IMPORTED_MODULE_2__.NouisliderModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_10__.JwBootstrapSwitchNg2Module],
  declarations: [_components_component__WEBPACK_IMPORTED_MODULE_3__.ComponentsComponent, _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.NgbdModalComponent, _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.NgbdModalContent],
  entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.NgbdModalContent],
  exports: [_components_component__WEBPACK_IMPORTED_MODULE_3__.ComponentsComponent, _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.NgbdModalComponent, _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.NgbdModalContent]
})], ComponentsModule);


/***/ }),

/***/ 385:
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbdModalComponent": function() { return /* binding */ NgbdModalComponent; },
/* harmony export */   "NgbdModalContent": function() { return /* binding */ NgbdModalContent; }
/* harmony export */ });
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.component.html?ngResource */ 539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NgbdModalContent = /*#__PURE__*/(0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function NgbdModalContent(activeModal) {
  (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NgbdModalContent);

  this.activeModal = activeModal;
});

NgbdModalContent.ctorParameters = function () {
  return [{
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal
  }];
};

NgbdModalContent.propDecorators = {
  name: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }]
};
NgbdModalContent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-modal-content',
  template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Aviso de Privacidad</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Muy lejos, tras las monta\xF1as de la palabra, lejos de los pa\xEDses Vokalia y Consonantia, viven los textos ciegos. Separados, viven en Bookmarksgrove, justo en la costa de la Sem\xE1ntica, un gran oc\xE9ano ling\xFC\xEDstico. Un peque\xF1o r\xEDo llamado Duden fluye junto a su lugar y lo abastece de la regelialia necesaria. Es un pa\xEDs paradis\xEDaco, en el que las partes tostadas de las frases vuelan hasta la boca. Incluso el todopoderoso Pointing no tiene ning\xFAn control sobre los textos ciegos es una vida casi no ortogr\xE1fica Un d\xEDa, sin embargo, una peque\xF1a l\xEDnea de texto ciego con el nombre de Lorem Ipsum decidi\xF3 partir hacia el lejano Mundo de la Gram\xE1tica.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Aceptar</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <!--<button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>-->\n        </div>\n    </div>\n    "
})], NgbdModalContent);


var NgbdModalComponent = /*#__PURE__*/function () {
  function NgbdModalComponent(modalService) {
    (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NgbdModalComponent);

    this.modalService = modalService;
  }

  (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(NgbdModalComponent, [{
    key: "open",
    value: function open() {
      var modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.name = 'World';
    }
  }]);

  return NgbdModalComponent;
}();

NgbdModalComponent.ctorParameters = function () {
  return [{
    type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal
  }];
};

NgbdModalComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-modal-component',
  template: _modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__
})], NgbdModalComponent);


/***/ }),

/***/ 4349:
/*!*********************************************************!*\
  !*** ./src/app/sections/about-us/about-us.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsComponent": function() { return /* binding */ AboutUsComponent; }
/* harmony export */ });
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _about_us_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us.component.html?ngResource */ 1373);
/* harmony import */ var _about_us_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us.component.scss?ngResource */ 7774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AboutUsComponent = /*#__PURE__*/function () {
  function AboutUsComponent() {
    (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutUsComponent);
  }

  (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutUsComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return AboutUsComponent;
}();

AboutUsComponent.ctorParameters = function () {
  return [];
};

AboutUsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-about-us',
  template: _about_us_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_about_us_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], AboutUsComponent);


/***/ }),

/***/ 350:
/*!*******************************************************!*\
  !*** ./src/app/sections/contact/contact.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": function() { return /* binding */ ContactComponent; }
/* harmony export */ });
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component.html?ngResource */ 7419);
/* harmony import */ var _contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component.scss?ngResource */ 3773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emailjs-com */ 6309);
/* harmony import */ var alertify_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! alertify.js */ 4428);
/* harmony import */ var alertify_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(alertify_js__WEBPACK_IMPORTED_MODULE_5__);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContactComponent = /*#__PURE__*/function () {
  function ContactComponent() {
    (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContactComponent);

    this.test = new Date();
  }

  (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ContactComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "sendEmail",
    value: function sendEmail(e) {
      e.preventDefault();
      emailjs_com__WEBPACK_IMPORTED_MODULE_4__["default"].sendForm('service_qbitss', 'template_ubhxla4', e.target, 'user_g9d2UU94BIwtkSWPM8r7C').then(function (result) {
        alertify_js__WEBPACK_IMPORTED_MODULE_5__.alert('Envio Exitoso', 'Gracias por contactarnos!', function () {});
      }, function (error) {
        console.log(error.text);
        alertify_js__WEBPACK_IMPORTED_MODULE_5__.error('Error message');
        alertify_js__WEBPACK_IMPORTED_MODULE_5__.alert('Error', 'Oooh, algo salio mal', function () {});
      });
    }
  }]);

  return ContactComponent;
}();

ContactComponent.ctorParameters = function () {
  return [];
};

ContactComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-contact',
  template: _contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], ContactComponent);


/***/ }),

/***/ 7571:
/*!***************************************************************!*\
  !*** ./src/app/sections/data-center/data-center.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataCenterComponent": function() { return /* binding */ DataCenterComponent; }
/* harmony export */ });
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _data_center_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-center.component.html?ngResource */ 3371);
/* harmony import */ var _data_center_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-center.component.scss?ngResource */ 7274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DataCenterComponent = /*#__PURE__*/function () {
  function DataCenterComponent() {
    (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DataCenterComponent);
  }

  (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DataCenterComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return DataCenterComponent;
}();

DataCenterComponent.ctorParameters = function () {
  return [];
};

DataCenterComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-data-center',
  template: _data_center_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_data_center_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], DataCenterComponent);


/***/ }),

/***/ 556:
/*!*********************************************************************!*\
  !*** ./src/app/sections/page-not-found/page-not-found.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": function() { return /* binding */ PageNotFoundComponent; }
/* harmony export */ });
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _page_not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component.html?ngResource */ 2299);
/* harmony import */ var _page_not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found.component.scss?ngResource */ 964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PageNotFoundComponent = /*#__PURE__*/function () {
  function PageNotFoundComponent() {
    (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PageNotFoundComponent);
  }

  (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PageNotFoundComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return PageNotFoundComponent;
}();

PageNotFoundComponent.ctorParameters = function () {
  return [];
};

PageNotFoundComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-page-not-found',
  template: _page_not_found_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_page_not_found_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], PageNotFoundComponent);


/***/ }),

/***/ 4065:
/*!*********************************************!*\
  !*** ./src/app/sections/sections.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionsModule": function() { return /* binding */ SectionsModule; }
/* harmony export */ });
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ 350);
/* harmony import */ var _security_security_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security/security.component */ 7967);
/* harmony import */ var _software_software_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./software/software.component */ 848);
/* harmony import */ var _data_center_data_center_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-center/data-center.component */ 7571);
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us/about-us.component */ 4349);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 556);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var SectionsModule = /*#__PURE__*/(0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SectionsModule() {
  (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SectionsModule);
});

SectionsModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule],
  declarations: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent, _security_security_component__WEBPACK_IMPORTED_MODULE_3__.SecurityComponent, _software_software_component__WEBPACK_IMPORTED_MODULE_4__.SoftwareComponent, _data_center_data_center_component__WEBPACK_IMPORTED_MODULE_5__.DataCenterComponent, _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__.AboutUsComponent, _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__.PageNotFoundComponent]
})], SectionsModule);


/***/ }),

/***/ 7967:
/*!*********************************************************!*\
  !*** ./src/app/sections/security/security.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityComponent": function() { return /* binding */ SecurityComponent; }
/* harmony export */ });
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _security_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security.component.html?ngResource */ 1324);
/* harmony import */ var _security_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security.component.scss?ngResource */ 6326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SecurityComponent = /*#__PURE__*/function () {
  function SecurityComponent() {
    (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SecurityComponent);
  }

  (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SecurityComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return SecurityComponent;
}();

SecurityComponent.ctorParameters = function () {
  return [];
};

SecurityComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-security',
  template: _security_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_security_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], SecurityComponent);


/***/ }),

/***/ 848:
/*!*********************************************************!*\
  !*** ./src/app/sections/software/software.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoftwareComponent": function() { return /* binding */ SoftwareComponent; }
/* harmony export */ });
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _software_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./software.component.html?ngResource */ 2490);
/* harmony import */ var _software_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./software.component.scss?ngResource */ 5377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SoftwareComponent = /*#__PURE__*/function () {
  function SoftwareComponent() {
    (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SoftwareComponent);
  }

  (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SoftwareComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return SoftwareComponent;
}();

SoftwareComponent.ctorParameters = function () {
  return [];
};

SoftwareComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-software',
  template: _software_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_software_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], SoftwareComponent);


/***/ }),

/***/ 5227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 6968);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 3489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FooterComponent = /*#__PURE__*/function () {
  function FooterComponent() {
    (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FooterComponent);

    this.test = new Date();
  }

  (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FooterComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return FooterComponent;
}();

FooterComponent.ctorParameters = function () {
  return [];
};

FooterComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-footer',
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], FooterComponent);


/***/ }),

/***/ 4696:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.html?ngResource */ 9734);
/* harmony import */ var _navbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component.scss?ngResource */ 7943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);



var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NavbarComponent = /*#__PURE__*/function () {
  function NavbarComponent(location, element) {
    (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavbarComponent);

    this.location = location;
    this.element = element;
    this.sidebarVisible = false;
  }

  (0,_home_ignacio_Documents_qbitss_homepage_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NavbarComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var navbar = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }
  }, {
    key: "sidebarOpen",
    value: function sidebarOpen() {
      var toggleButton = this.toggleButton;
      var html = document.getElementsByTagName('html')[0]; // console.log(html);
      // console.log(toggleButton, 'toggle');

      setTimeout(function () {
        toggleButton.classList.add('toggled');
      }, 500);
      html.classList.add('nav-open');
      this.sidebarVisible = true;
    }
  }, {
    key: "sidebarClose",
    value: function sidebarClose() {
      var html = document.getElementsByTagName('html')[0]; // console.log(html);

      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      html.classList.remove('nav-open');
    }
  }, {
    key: "sidebarToggle",
    value: function sidebarToggle() {
      var toggleButton = this.toggleButton;
      var body = document.getElementsByTagName('body')[0];

      if (this.sidebarVisible === false) {
        this.sidebarOpen();
      } else {
        this.sidebarClose();
      }
    }
  }, {
    key: "isContact",
    value: function isContact() {
      var titlee = this.location.prepareExternalUrl(this.location.path());

      if (titlee.charAt(0) === '#') {
        titlee = titlee.slice(1);
      }

      if (titlee === '/contact') {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return NavbarComponent;
}();

NavbarComponent.ctorParameters = function () {
  return [{
    type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef
  }];
};

NavbarComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-navbar',
  template: _navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_navbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], NavbarComponent);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
  production: false
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/*!

 =========================================================
 * Qbitss 2022
 =========================================================

 * Copyright 2020 KumikoSan
 * Licensed under MIT

 =========================================================

 *
 */





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 837:
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/components/components.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICBuZ2ItcHJvZ3Jlc3NiYXIgewogICAgICAgIG1hcmdpbi10b3A6IDVyZW07CiAgICB9CiAgICA%3D!./src/app/components/components.component.ts ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQiIsImZpbGUiOiJjb21wb25lbnRzLmNvbXBvbmVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIG5nYi1wcm9ncmVzc2JhciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgfVxuICAgICJdfQ== */";

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 7774:
/*!**********************************************************************!*\
  !*** ./src/app/sections/about-us/about-us.component.scss?ngResource ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC11cy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 3773:
/*!********************************************************************!*\
  !*** ./src/app/sections/contact/contact.component.scss?ngResource ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 7274:
/*!****************************************************************************!*\
  !*** ./src/app/sections/data-center/data-center.component.scss?ngResource ***!
  \****************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLWNlbnRlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 964:
/*!**********************************************************************************!*\
  !*** ./src/app/sections/page-not-found/page-not-found.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 6326:
/*!**********************************************************************!*\
  !*** ./src/app/sections/security/security.component.scss?ngResource ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN1cml0eS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 5377:
/*!**********************************************************************!*\
  !*** ./src/app/sections/software/software.component.scss?ngResource ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2Z0d2FyZS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 3489:
/*!****************************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss?ngResource ***!
  \****************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 7943:
/*!****************************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss?ngResource ***!
  \****************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ (function(module) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\n";

/***/ }),

/***/ 5733:
/*!*****************************************************************!*\
  !*** ./src/app/components/components.component.html?ngResource ***!
  \*****************************************************************/
/***/ (function(module) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header section-dark\"style=\"background-image: url('assets/img/home1.jpg')\">\n       <!-- style=\"background-color: #170666;\" \n        <div class=\"content-center\" id=\"carousel\">\n            <div class=\"container\">              \n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <div class=\"card page-carousel\">\n                            <ngb-carousel>\n                                <ng-template ngbSlide>\n                                    <img src=\"assets/img/home2vista.jpg\" >\n                                   \n                                </ng-template>\n                                <ng-template ngbSlide>\n                                    <img src=\"assets/img/home-3-vista.jpg\" >\n                                   \n                                </ng-template>\n                                <ng-template ngbSlide>\n                                    <img src=\"assets/img/home1.jpg\" >\n                                    \n                                </ng-template>\n                            </ngb-carousel>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n       \n        <div class=\"content-center\">\n            <div class=\"container\">\n                <div class=\"title-brand\">                   \n                    <h2 class=\"presentation-title\">Innovación y flexibilidad</h2>                 \n                </div>\n                <h2 class=\"presentation-subtitle text-left\">en servicios de tecnología de la Información</h2>\n            </div>\n            <div class=\"col mt-2 text-left pt-3\" routerLinkActive=\"active\">\n                <a [routerLink]=\"['/contact']\" class=\"btn btn-cotton-candy btn-lg\">Más información</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"main\">\n    \n        <div class=\"section text-center\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 mr-auto ml-auto\">\n                        <h2 class=\"title\">Servicios</h2>\n                      \n                    </div>\n                </div>\n                <br/><br/>\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <div class=\"info\">\n                            <h5 class=\"description pt-5\">Transforma la nueva  normalidad en innovación, adaptando tus proyectos a los cambios del mercado mediante la incorporación de nuevas tecnologías y procesos de TI.</h5>\n                            <br>\n                            <!--<a  class=\"btn btn-danger btn-round\">See Details</a>-->\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <a [routerLink]=\"['/software']\">\n                            <div class=\"info\">\n                                <div class=\"icon icon-principal animate__animated\">\n                                    <img src=\"assets/img/icons/icono-software.png\">\n                                </div>\n                                <div class=\"description\">\n                                    <h4 class=\"info-title\">Software</h4>\n                                </div>\n                            </div>\n                        </a>\n                       \n                    </div>\n                    <div class=\"col-md-3\">\n                        <a [routerLink]=\"['/datacenter']\">\n                            <div class=\"info\">\n                                <div class=\"icon icon-principal animate__animated\">\n                                    <img src=\"assets/img/icons/icono-datos.png\">\n                                </div>\n                                <div class=\"description\">\n                                    <h4 class=\"info-title\">Centro de Datos</h4>\n                                </div>\n                            </div>\n                        </a>\n                       \n                    </div>\n                    <div class=\"col-md-3\">\n                        <a [routerLink]=\"['/security']\">\n                            <div class=\"info\">\n                                <div class=\"icon icon-principal animate__animated\">\n                                    <img src=\"assets/img/icons/icono-seguridad.png\">\n                                </div>\n                                <div class=\"description\">\n                                    <h4 class=\"info-title\">Seguridad</h4>\n                                </div>\n                            </div>\n                        </a>\n                       \n                    </div>\n                 \n                </div>\n    \n            </div>\n        </div>\n\n        <div class=\"section\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                       \n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-image section-login\" style=\"background-image: url('assets/img/bg-1.png');\">\n            <div class=\"container\">\n                <h2 class=\"title text-center pt-3\">Beneficios</h2>\n                <div class=\"row\">\n                    \n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">                       \n                       \n                        <div class=\"card glass\">   \n                            <img src=\"assets/img/icons/Grupo 337.svg\" style=\"width: 70px; height: 70px;\">                       \n                                <h6 class=\"h6-ml text-white\">Optimiza tu negocio</h6>\n                                <span class=\"text-white\">Obtén una ventaja tecnológica e inteligente en tus operaciones.\n                                </span>                                                  \n                        </div>                     \n                       \n                        <div class=\"card glass\">   \n                            <img src=\"assets/img/icons/Grupo 338.svg\" style=\"width: 70px; height: 70px;\">                       \n                                <h6 class=\"h6-ml text-white\">Herramientas inteligentes</h6>\n                                <span class=\"text-white\">crea experiencias digitales en aplicaciones que profundicen la lealtad de tus usuarios para con tus productos y servicios.\n                                </span>                                                  \n                        </div>\n                                           \n\n                    </div>\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <div class=\"card glass\">   \n                            <img src=\"assets/img/icons/Grupo 336.svg\" style=\"width: 70px; height: 70px;\">                       \n                                <h6 class=\"h6-ml text-white\">Seguridad y control</h6>\n                                <span class=\"text-white\">Protege a tu organización, aterriza tus políticas y procesos. </span>                                                  \n                        </div>\n                        <div class=\"card glass\">   \n                            <img src=\"assets/img/icons/Grupo 339.svg\" style=\"width: 70px; height: 70px;\">                       \n                                <h6 class=\"h6-ml text-white\">Escalabilidad, agilidad y flexibilidad</h6>\n                                <span class=\"text-white\">accionamos y entendemos rapidamiente la evolución de nuestros clientes.</span>                                                  \n                        </div> \n                        <!--<img src=\"assets/img/istockphoto-1150199386.jpg\" class=\"img-rounded img-rounded-bg img-responsive\">-->                \n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-cotton-sugar\">\n            <div class=\"container\">\n                <div class=\"row example-page\">\n                    <div class=\"col text-center\" routerLinkActive=\"active\">\n                        <h1 class=\"text-white\">¿Tienes dudas?</h1>                                               \n                    </div>\n                    <div class=\"col pt-5\">\n                        <a [routerLink]=\"['/contact']\" class=\"btn btn-cotton-candy btn-round \">Contáctanos</a> \n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n        \n    </div>\n</div>\n";

/***/ }),

/***/ 539:
/*!******************************************************************!*\
  !*** ./src/app/components/modal/modal.component.html?ngResource ***!
  \******************************************************************/
/***/ (function(module) {

module.exports = "<!--<p>You can pass an existing component as content of the modal window. In this case remember to add content component\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>-->\n\n\n<span class=\"aviso-privacidad\" (click)=\"open()\" style=\" cursor: pointer;\">Aviso de Privacidad</span>\n";

/***/ }),

/***/ 1373:
/*!**********************************************************************!*\
  !*** ./src/app/sections/about-us/about-us.component.html?ngResource ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('assets/img/img-nosotros.jpg');\">\n        <!--<div class=\"filter\"></div>-->\n        <div class=\"container\">\n            <div class=\"motto text-center\">\n                \n            </div>\n        </div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center \">\n                    <h6 class=\"description\">Misión</h6>\n                    <p class=\"text-muted\">Materializamos las ideas de nuestros clientes y los acompañamos en su camino al éxito, empleando tecnología para crear servicios que nos permitan implementar sus estrategias empresariales, optimizar sus recursos y maximizar sus resultados.</p>\n                    <br />\n                    \n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center \">\n                    <h6 class=\"description\">Visión</h6>\n                    <p class=\"text-muted\">Qbitss es un aliado/socio de negocio en tecnología altamente especializada, flexible, confiable y con elevados estándares de seguridad y confidencialidad.\n                     Somos una empresa global, innovadora y disruptiva que construye relaciones de largo plazo con su entorno y la sociedad en general.\n                    </p>\n                    <br />\n                    \n                </div>\n            </div>\n            <h6 class=\"description text-center\">Nuestros valores</h6>\n\n            <div class=\"row pt-5\">                \n                <div class=\"col-6 col-md-4\">\n                    <div class=\"owner\">\n                       \n                        <div class=\"avatar\">\n                            <img src=\"assets/img/faces/retos.png\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                        </div>\n                        <div class=\"name\">\n                            <h4 class=\"title\">Convicción y pasión por los retos <br /></h4>                    \n                        </div>\n                    </div> \n                </div>\n                <div class=\"col-6 col-md-4\">\n                    <div class=\"owner\">\n                \n                        <div class=\"avatar\">\n                            <img src=\"assets/img/faces/innovacion.png\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                        </div>\n                        <div class=\"name\">\n                            <h4 class=\"title\">Innovación <br /></h4>                    \n                        </div>\n                    </div>  \n                </div>\n                <div class=\"col-6 col-md-4\">\n                    <div class=\"owner\">                \n                        <div class=\"avatar\">\n                            <img src=\"assets/img/faces/confiabilidad.png\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                        </div>\n                        <div class=\"name\">\n                            <h4 class=\"title\">Confiabilidad <br /></h4>                    \n                        </div>\n                    </div>  \n                </div>\n            </div>                   \n            <div class=\"row pt-3\">\n                <div class=\"col-6\">\n                    <div class=\"owner\">\n                        <div class=\"avatar\">\n                            <img src=\"assets/img/faces/transparencia.png\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                        </div>\n                        <div class=\"name\">\n                            <h4 class=\"title\">Transparencia <br /></h4>                    \n                        </div>\n                    </div>  \n                </div>\n                <div class=\"col-6\">\n                    <div class=\"owner\">\n                        <div class=\"avatar\">\n                            <img src=\"assets/img/faces/adaptabilidad.png\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                        </div>\n                        <div class=\"name\">\n                            <h4 class=\"title\">Adaptabilidad <br /></h4>                    \n                        </div>\n                    </div> \n                </div>\n              </div>\n                 \n            \n                 \n           \n                  \n          \n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 7419:
/*!********************************************************************!*\
  !*** ./src/app/sections/contact/contact.component.html?ngResource ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = "\n\n<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background: transparent\">\n        <!--<div class=\"filter\"></div>    -->    \n    </div>\n    <div class=\"container text-center\">            \n        <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                <h2 class=\"title\">Conecta con Qbitss</h2>\n                <p class=\"description\">Permitenos ayudarte con el ecosistema tecnologico empresarial, deja que nuestro equipo de expertos te ayude a crear una solución integral a la medida.</p>\n            </div>\n        </div>       \n        <div class=\"row justify-content-md-center sharing-area text-center pt-5 pb-5\">           \n           <!-- <div class=\"text-center col-md-12 col-lg-8\">\n                <a href=\"#\" class=\"btn btn-twitter-bg twitter-sharrre btn-round\" rel=\"tooltip\" title=\"Tweet!\">\n                    <i class=\"fa fa-twitter\"></i> Twitter\n                </a>\n                <a href=\"#\" class=\"btn btn-facebook-bg facebook-sharrre btn-round\" rel=\"tooltip\" title=\"Danos Like!\">\n                    <i class=\"fa fa-facebook-square\"></i> Facebook\n                </a>\n                <a href=\"#\" class=\"btn btn-linkedin-bg btn-linkedin sharrre btn-round\" rel=\"tooltip\" title=\"Buscanos Linkedin\">\n                    <i class=\"fa fa-linkedin\"></i> Linkedin\n                </a>\n            </div>-->\n        </div>\n    </div>\n    <div class=\"section landing-section mt-auto\" >\n        <div class=\"container\" style=\"background-image: url('assets/img/mapa.png');\">\n            <div class=\"row\">\n                <div class=\"col-md-6 mr-auto ml-auto\">\n                    <div class=\"card card-register\">\n                        <h5 class=\" pb-5\">Nuestros medios de contacto</h5>\n                        <table class=\"table text-purple\">                           \n                            <tbody>\n                              <tr>\n                                <th scope=\"row\"><img src=\"assets/img/icons/Grupo 341.png\" style=\"width: 30px; height: 30px;\"></th>\n                                <td>551423698</td>                           \n                                \n                              </tr>\n                              <tr>\n                                <th scope=\"row\"><img src=\"assets/img/icons/Grupo 342.png\" style=\"width: 30px; height: 30px;\"></th>\n                                <td>CDMX</td>\n                                \n                                \n                              </tr>\n                              <tr>\n                                <th scope=\"row\"><img src=\"assets/img/icons/Grupo 343.png\" style=\"width: 30px; height: 30px;\"></th>\n                                <td>info@qbitss.com</td>\n                                \n                                \n                              </tr>\n                            </tbody>\n                          </table>\n                    </div>\n                </div>\n                <div class=\"col-md-6 mr-auto ml-auto\">\n                    <h2 class=\"text-center\">Contacto</h2>\n                    <form class=\"contact-form\" (submit)=\"sendEmail($event)\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Nombre</label>\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"><i class=\"nc-icon nc-single-02\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Nombre\"  name=\"user_name\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label>Correo electronico</label>\n                                <div class=\"input-group\" >\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\">  <i class=\"nc-icon nc-email-85\"></i></span>\n                                    </div>\n                                    <input type=\"email\" name=\"user_email\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <label>Me interesa:</label>\n                                <select class=\"form-control\" id=\"exampleFormControlSelect1\" name=\"select\">\n                                    <option>Desarrollo de Software </option>\n                                    <option>Centro de datos</option>\n                                    <option>Seguridad Informática</option>\n                                  </select>\n                            </div>\n                        </div>\n                        <label>Para asistirte mejor, describe cómo podemos ayudarte:</label>\n                        <textarea class=\"form-control\" name=\"message\" rows=\"4\" placeholder=\"Cuéntenos cómo podemos ayudarte\"></textarea>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 mr-auto ml-auto\">\n                                <input class=\"btn btn-cotton-candy btn-lg\" type=\"submit\" value=\"Enviar\">\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 3371:
/*!****************************************************************************!*\
  !*** ./src/app/sections/data-center/data-center.component.html?ngResource ***!
  \****************************************************************************/
/***/ (function(module) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('assets/img/bg-2.jpg');\">\n    <!--<div class=\"filter\"></div>-->\n    <div id=\"circled1\" class=\"circle-section circle-uno\"></div>\n    <div id=\"circled3\" class=\"circle-section circle-tres\"></div>\n    <div id=\"circled2\" class=\"circle-section circle-dos\"></div>\n    \n    <div class=\"container container-glass\">\n        <div class=\"glass-panel\">\n            <h1>Centro de Datos</h1>\n            <br />\n            <p>Nos enfocamos en proporcionar servicios de soporte que colaboren en la continuidad de operación de nuestros clientes, \n                identificando tus necesidades y problemáticas, y ofreciendo una respuesta eficiente e integral. </p>\n            <div class=\"glass-toolbar\">\n              <a href=\"#\" target=\"_blank\" class=\"glass-button\">Conoce más</a>\n            </div>\n          </div>\n       <!-- <div class=\"motto text-left\">\n            <h1>Centro de Datos</h1>\n            <h5>Start designing your landing page here.</h5>\n            <br />\n            <button type=\"button\" class=\"btn btn-outline-neutral btn-round\">Más información</button>\n        </div>-->\n    </div>\n</div>\n<div class=\"main\">\n    <div class=\"section section-nude text-center\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"title\">Centro de Datos </h2>\n                    <h5 class=\"description\">Nos enfocamos en proporcionar servicios de soporte que colaboren en la continuidad de operación de nuestros clientes, identificando tus necesidades y problemáticas, y ofreciendo una respuesta eficiente e integral. Siendo estos los servicios.</h5>\n                    <br>\n                   \n                </div>\n            </div>\n            <br/><br/>\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-primary animate__animated\">\n                            <i class=\"nc-icon nc-email-85\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Mesa de ayuda primer y segundo nivel</h4>\n                            <p class=\"description\">Gestionamos y medimos los activos digitales del ecosistema de TI a través del servicio de monitoreo integral, que permite actuar de manera rápida y controlada ante cualquier falla con los servicios de NOC y SOC.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-primary animate__animated\">\n                            <i class=\"nc-icon nc-settings\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Soporte a la producción.</h4>\n                            <p class=\"description\">Soluciones basadas en nubes híbridas que benefician el balance de carga de trabajo y  sensibilidad de la informacion.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-primary animate__animated\">\n                            <i class=\"nc-icon nc-settings-gear-65\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Soporte a la operación.</h4>\n                            <p class=\"description\">Maximiza tu presupuesto y reduce tus costos albergando tu equipo de TI con nuestro servicio de piso blanco.</p>\n                        </div>\n                    </div>\n                </div>\n              \n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"section text-center\">\n        <div class=\"container\">\n            \n            <!--<div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">                      \n                        <div class=\"card-block\">                           \n                            <p class=\"card-description text-center text-muted\">\n                                \n                            </p>\n                        </div>\n                      \n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">                      \n                        <div class=\"card-block\">                           \n                            <p class=\"card-description text-center text-muted\">\n                                \n                            </p>\n                        </div>\n                      \n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"card card-profile card-plain\">                      \n                        <div class=\"card-block\">                           \n                            <p class=\"card-description text-center text-muted\">\n                                \n                            </p>\n                        </div>\n                      \n                    </div>\n                </div>              \n            </div>-->\n            <h2 class=\"title\">Contacta ahora con un especialista Qbitss</h2>\n        </div>\n    </div>\n\n</div>\n";

/***/ }),

/***/ 2299:
/*!**********************************************************************************!*\
  !*** ./src/app/sections/page-not-found/page-not-found.component.html?ngResource ***!
  \**********************************************************************************/
/***/ (function(module) {

module.exports = "<h2>Page Not Found</h2>\n<p>We couldn't find that page! Not even with x-ray vision.</p>\n";

/***/ }),

/***/ 1324:
/*!**********************************************************************!*\
  !*** ./src/app/sections/security/security.component.html?ngResource ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('assets/img/bg-1.jpg');\">\n    <div id=\"circles1\" class=\"circle-section circle-uno\"></div>\n    <div id=\"circles3\" class=\"circle-section circle-tres\"></div>\n    <div id=\"circles2\" class=\"circle-section circle-dos\"></div>\n    \n    <div class=\"container container-glass\">\n        <div class=\"glass-panel\">\n            <h1>Seguridad</h1>\n            <br />\n            <p>Nuestros especialistas pueden tomar la administración de tus soluciones y equipos de seguridad con el fin de responder, \n                gestionar, mantener y desarrollar planes de acción frente a escenarios adversos.</p>\n            <div class=\"glass-toolbar\">\n              <a href=\"#\" target=\"_blank\" class=\"glass-button\">Conoce más</a>\n            </div>\n          </div>\n \n    </div>\n</div>\n<div class=\"main\">\n    <div class=\"section section-nude text-center\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"title\">Seguridad</h2>\n                    <h5 class=\"description\">Creamos soluciones enfocadas en seguridad para mantener tu organización protegida, cumpliendo con políticas y procesos.</h5>\n                    <br>\n                   \n                </div>\n            </div>\n            <br/><br/>\n            <div class=\"row\">               \n                <div class=\"col-md-4\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-security animate__animated\">\n                            <i class=\"nc-icon nc-box\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Análisis Forense.</h4>\n                            <p class=\"description\">Prepárate para reducir el impacto de un incidente de seguridad. </p>\n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-security animate__animated\">\n                            <i class=\"nc-icon nc-laptop\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Hacking a SOC’s.</h4>\n                            <p class=\"description\">Evalúa tus medidas de seguridad actuales frente a un ataque real controlado, de SOC o tu equipo interno de seguridad. </p>\n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-security animate__animated\">\n                            <i class=\"nc-icon nc-paper\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Cumplimiento y Normatividad. </h4>\n                            <p class=\"description\">Alinea tu organización desde tus políticas internas hasta el control, implementando los estándares internacionales ISO 27000, Ley Federal de Protección de datos personales en posesión de los particulares (LFPDPPP), Manejo de ISO 27001, 9001, 20000.</p>\n                            \n                        </div>\n                    </div>\n                </div>\n             \n               \n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"section text-center\">\n        <div class=\"container\">\n            \n            <h2 class=\"title\">Contacta ahora con un especialista Qbitss</h2>\n        </div>\n    </div>\n\n</div>";

/***/ }),

/***/ 2490:
/*!**********************************************************************!*\
  !*** ./src/app/sections/software/software.component.html?ngResource ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('assets/img/bg-3.jpg');\">\n    <div id=\"circlef1\" class=\"circle-section circle-uno\"></div>\n    <div id=\"circlef3\" class=\"circle-section circle-tres\"></div>\n    <div id=\"circlef2\" class=\"circle-section circle-dos\"></div>\n    \n    <div class=\"container container-glass\">\n        <div class=\"glass-panel\">\n            <h1>Software</h1>\n            <br />\n            <p>Detras de cada gran desarrollo hay un gran flujo de trabajo. Nuestras soluciones en un modelo de fábrica de software está basada \n                en las necesidades de nuestros clientes aunado a nuestra experiencia en múltiples proyectos. </p>\n            <div class=\"glass-toolbar\">\n              <a href=\"#\" target=\"_blank\" class=\"glass-button\">Conoce más</a>\n            </div>\n          </div>\n \n    </div>\n</div>\n<div class=\"main\">\n    <div class=\"section section-nude text-center\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"title\">Desarrollo de software</h2>\n                    <h5 class=\"description\">Capacidades de entrega y procesos robustos para garantizar que la ejecución del proyecto se mueva de forma coherente.</h5>\n                    <br>\n                    \n                </div>\n            </div>\n            <br/><br/>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-qbitss animate__animated\">\n                            <i class=\"nc-icon nc-album-2\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Comunicación asertiva.</h4>\n                            <p class=\"description\">Busca que la competencia multifuncional crezca para tener un grupo de recursos en constante crecimiento que se pueda implementar a través de verticales y entornos de proyectos.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-qbitss animate__animated\">\n                            <i class=\"nc-icon nc-bulb-63\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Prevención y/o Mitigación de Riesgos y Problemas.</h4>\n                            <p class=\"description\">Procesos de recopilación de métricas en todos los dominios funcionales para aumentar la eficiencia.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-qbitss animate__animated \">\n                            <i class=\"nc-icon nc-chart-bar-32\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Escalamiento de Problemas y Riesgos.</h4>\n                            <p class=\"description\"> Economía de escala.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"info\">\n                        <div class=\"icon icon-qbitss animate__animated\">\n                            <i class=\"nc-icon nc-sun-fog-29\"></i>\n                        </div>\n                        <div class=\"description\">\n                            <h4 class=\"info-title\">Gestión del proyecto día a día.</h4>\n                            <p class=\"description\">Ofrecemos un enfoque de servicios robusto para garantizar la disponibilidad constante y mejora continua.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"section  text-center\">\n        <div class=\"container \">\n           \n            <!--<div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card card-profile card-plain\">                       \n                        <div class=\"card-block\">                          \n                            <p class=\"card-description text-center text-muted\">\n                                \n                            </p>\n                        </div>                      \n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card card-profile card-plain\">                       \n                        <div class=\"card-block\">                          \n                            <p class=\"card-description text-center text-muted\">\n                               \n                            </p>\n                        </div>                      \n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card card-profile card-plain\">                       \n                        <div class=\"card-block\">                          \n                            <p class=\"card-description text-center text-muted\">\n                                \n                            </p>\n                        </div>                      \n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card card-profile card-plain\">                       \n                        <div class=\"card-block\">                          \n                            <p class=\"card-description text-center text-muted\">\n                                \n                            </p>\n                        </div>                      \n                    </div>\n                </div>\n\n             \n            </div>-->\n            <h2 class=\"title\">Contacta ahora con un especialista Qbitss</h2>\n        </div>\n    </div>\n\n</div>";

/***/ }),

/***/ 6968:
/*!****************************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html?ngResource ***!
  \****************************************************************/
/***/ (function(module) {

module.exports = "<div class=\"section\" style=\"background-image: url(assets/img/waveshape-top-blue.svg); background-size: cover;\"></div>\n<footer class=\"footer\">\n    <div class=\"container\">\n\n        <div class=\"row\"> \n            <div class=\"col-md-6\">\n                <nav class=\"footer-nav\">\n                    <ul>\n                        <!--<li><a href=\"#\">ENGLISH</a></li>--><!--Cuando deba traducir la página rootear todo lo nuevo y enlazar desde aquí--> \n                        <li><a href=\"#\">Únete al Equipo</a></li>\n                        <app-modal-component></app-modal-component>\n                        <!--<li><a href=\"#\">Aviso de Privacidad</a></li>-->\n                        \n                        <li></li>\n                        <li></li>\n                    </ul>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <nav class=\"footer-nav ml-auto\">\n                    <!--Descomentar esta lista para agregar las redes sociales-->\n                    <!--<ul>\n                       \n                        <li class=\"nav-item\" >\n                            <a class=\"nav-link\" rel=\"tooltip\" title=\"Siguenos en Twitter\" data-placement=\"bottom\" href=\"https://twitter.com/\" target=\"_blank\">\n                                <i class=\"fa fa-twitter\"></i>\n                                <p class=\"d-lg-none\">Twitter</p>\n                            </a>\n                        </li>\n                        <li class=\"nav-item\" >\n                            <a class=\"nav-link\" rel=\"tooltip\" title=\"Like en Facebook\" data-placement=\"bottom\" href=\"https://www.facebook.com/\" target=\"_blank\">\n                                <i class=\"fa fa-facebook-square\"></i>\n                                <p class=\"d-lg-none\">Facebook</p>\n                            </a>\n                        </li>\n                        <li class=\"nav-item\" >\n                            <a class=\"nav-link\" rel=\"tooltip\" title=\"Buscanos en LinkedIn\" data-placement=\"bottom\" href=\"https://mx.linkedin.com/\" target=\"_blank\">\n                                <i class=\"fa fa-linkedin\"></i>\n                                <p class=\"d-lg-none\">LinkedIn</p>\n                            </a>\n                        </li>\n                    </ul>-->\n                </nav>  \n            </div>          \n                     \n        </div>\n        <div class=\"row\">\n            <div class=\"credits\">\n                <span class=\"copyright\">\n                    copyright© {{test | date: 'yyyy'}}, Qbitss Solutions | Todos los derechos reservados\n                </span>\n            </div>\n        </div>\n       \n    </div>\n</footer>\n";

/***/ }),

/***/ 9734:
/*!****************************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html?ngResource ***!
  \****************************************************************/
/***/ (function(module) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">            \n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse \" id=\"navbarToggler\" *ngIf=\"!isContact()\">\n            <ul class=\"navbar-nav ml-auto\">             \n\n                <li class=\"nav-item\" >\n                    <a [routerLink]=\"['/software']\" class=\"nav-link\">Software</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a [routerLink]=\"['/datacenter']\" class=\"nav-link\">Centro de datos</a>\n                </li>\n                <li class=\"nav-item\" >\n                    <a [routerLink]=\"['/security']\" class=\"nav-link\">Seguridad</a>\n                </li>\n                <li>\n                    <a class=\"navbar-brand qbitss-logo\" [routerLink]=\"['/home']\" ><img src=\"assets/img/logo_digital.png\" style=\"width: 100px; height: 20px;\"></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a [routerLink]=\"['/contact']\" class=\"nav-link\">Contacto</a>\n                </li>\n                <li class=\"nav-item\" >\n                    <a [routerLink]=\"['/aboutUs']\" class=\"nav-link\">Nosotros</a>\n                </li>\n                <li class=\"nav-item\" >\n                    <a  class=\"nav-link\" ><i class=\"nc-icon nc-zoom-split\"></i> </a>\n                </li>\n               \n            </ul>\n        </div>\n        <div class=\"navbar-collapse \" id=\"navbarToggler\" *ngIf=\"isContact()\" >\n            <ul class=\"navbar-nav ml-auto\">             \n\n                <li class=\"nav-item \" >\n                    <a [routerLink]=\"['/software']\" class=\"nav-link text-muted\">Software</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a [routerLink]=\"['/datacenter']\" class=\"nav-link text-muted\">Centro de datos</a>\n                </li>\n                <li class=\"nav-item\" >\n                    <a [routerLink]=\"['/security']\" class=\"nav-link text-muted\">Seguridad</a>\n                </li>\n                <li>\n                    <a class=\"navbar-brand qbitss-logo\" [routerLink]=\"['/home']\" ><img src=\"assets/img/logo_digital.png\" style=\"width: 100px; height: 20px;\"></a>\n                </li>\n                <li class=\"nav-item\">\n                    <a [routerLink]=\"['/contact']\" class=\"nav-link text-muted\">Contacto</a>\n                </li>\n                <li class=\"nav-item\" >\n                    <a [routerLink]=\"['/aboutUs']\" class=\"nav-link text-muted\">Nosotros</a>\n                </li>\n                <!--buscador sin desarrollo porque no hay mucho que buscar XD-->\n                <li class=\"nav-item\" >\n                    <a  class=\"nav-link text-muted\" ><i class=\"nc-icon nc-zoom-split\"></i> </a>\n                </li>\n               \n            </ul>\n        </div>\n\n    </div>\n</nav>\n";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map