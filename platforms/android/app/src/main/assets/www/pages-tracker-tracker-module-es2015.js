(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tracker-tracker-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracker/tracker.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracker/tracker.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"upper_div\">\n      <div #map id=\"map\" class=\"map\"></div>\n    </div>\n    <div class=\"lower_div\">\n      <ion-label class=\"head_lbl\">{{'Order on the Way' | translate}}</ion-label>\n\n      <div class=\"driver_detail_div\">\n        <div class=\"back_image\" [style.backgroundImage]=\"'url('+dCover+')'\"></div>\n        <div style=\"padding-left: 20px;\">\n          <ion-label class=\"boy_name\">{{dName}}</ion-label>\n          <ion-label class=\"address\">{{restAddress}}</ion-label>\n          <ion-button (click)=\"callDriver()\" size=\"small\" fill=\"outline\">\n            {{'CALL' | translate}}\n          </ion-button>\n        </div>\n      </div>\n\n      <ion-label class=\"order_detail\">{{totalOrders.length}} {{'Items to deliver' | translate }}<span\n          style=\"color: var(--ion-color-primary);position: absolute;right: 20px;\">{{grandTotal}}{{getCurrency()}}</span>\n      </ion-label>\n      <ion-label class=\"order_detail\">{{'Order Status' | translate}}<span class=\"order_status\">PAID</span></ion-label>\n\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/tracker/tracker-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/tracker/tracker-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TrackerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerPageRoutingModule", function() { return TrackerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tracker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracker.page */ "./src/app/pages/tracker/tracker.page.ts");




const routes = [
    {
        path: '',
        component: _tracker_page__WEBPACK_IMPORTED_MODULE_3__["TrackerPage"]
    }
];
let TrackerPageRoutingModule = class TrackerPageRoutingModule {
};
TrackerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrackerPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tracker/tracker.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/tracker/tracker.module.ts ***!
  \*************************************************/
/*! exports provided: TrackerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerPageModule", function() { return TrackerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tracker_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tracker-routing.module */ "./src/app/pages/tracker/tracker-routing.module.ts");
/* harmony import */ var _tracker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tracker.page */ "./src/app/pages/tracker/tracker.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let TrackerPageModule = class TrackerPageModule {
};
TrackerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _tracker_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrackerPageRoutingModule"]
        ],
        declarations: [_tracker_page__WEBPACK_IMPORTED_MODULE_6__["TrackerPage"]]
    })
], TrackerPageModule);



/***/ }),

/***/ "./src/app/pages/tracker/tracker.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/tracker/tracker.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.main_content_div .upper_div {\n  height: 60vh;\n}\n.main_content_div .upper_div #map {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .lower_div {\n  height: 40vh;\n  padding: 20px;\n}\n.main_content_div .lower_div ion-label {\n  display: block;\n}\n.main_content_div .lower_div .head_lbl {\n  font-weight: 600;\n  font-size: 20px;\n  margin-top: 10px;\n}\n.main_content_div .lower_div .driver_detail_div {\n  margin-top: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  position: relative;\n}\n.main_content_div .lower_div .driver_detail_div .back_image {\n  height: 50px !important;\n  width: 50px !important;\n  border-radius: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-width: 50px;\n}\n.main_content_div .lower_div .driver_detail_div .boy_name {\n  font-weight: 600;\n}\n.main_content_div .lower_div .driver_detail_div .address {\n  color: gray;\n  width: 80%;\n}\n.main_content_div .lower_div .driver_detail_div ion-button {\n  position: absolute;\n  right: -3px;\n  top: -5px;\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .lower_div .order_detail {\n  font-weight: bold;\n  margin-top: 20px;\n}\n.main_content_div .lower_div .order_status {\n  background: var(--ion-color-primary);\n  position: absolute;\n  right: 20px;\n  color: white;\n  padding: 3px 8px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhY2tlci9EOlxcZGVsaXZlcnlfcmFwaXRyYXZlbFxcZGVsaXZlcnlfcmFwaXRyYXZlbC9zcmNcXGFwcFxccGFnZXNcXHRyYWNrZXJcXHRyYWNrZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90cmFja2VyL3RyYWNrZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7QUNFUjtBRERRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNHWjtBREFJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNFUjtBRERRO0VBQ0ksY0FBQTtBQ0daO0FERFE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0daO0FEQVE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ0VaO0FERFk7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDR2hCO0FERFk7RUFDSSxnQkFBQTtBQ0doQjtBRERZO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUNHaEI7QUREWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDR2hCO0FEQ1E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDQ1o7QURDUTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWNrZXIvdHJhY2tlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLnVwcGVyX2RpdntcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAjbWFwe1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxvd2VyX2RpdntcbiAgICAgICAgaGVpZ2h0OiA0MHZoO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRfbGJse1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZHJpdmVyX2RldGFpbF9kaXZ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoIDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3lfbmFtZXtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFkZHJlc3N7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtM3B4O1xuICAgICAgICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9yZGVyX2RldGFpbHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAub3JkZXJfc3RhdHVze1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB9XG4gICAgfSAgIFxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9kaXYge1xuICBoZWlnaHQ6IDYwdmg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXBwZXJfZGl2ICNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiB7XG4gIGhlaWdodDogNDB2aDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5oZWFkX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmRyaXZlcl9kZXRhaWxfZGl2IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuZHJpdmVyX2RldGFpbF9kaXYgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5kcml2ZXJfZGV0YWlsX2RpdiAuYm95X25hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuZHJpdmVyX2RldGFpbF9kaXYgLmFkZHJlc3Mge1xuICBjb2xvcjogZ3JheTtcbiAgd2lkdGg6IDgwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmRyaXZlcl9kZXRhaWxfZGl2IGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtM3B4O1xuICB0b3A6IC01cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAub3JkZXJfZGV0YWlsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5vcmRlcl9zdGF0dXMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tracker/tracker.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tracker/tracker.page.ts ***!
  \***********************************************/
/*! exports provided: TrackerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerPage", function() { return TrackerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");






let TrackerPage = class TrackerPage {
    constructor(route, api, adb, util) {
        this.route = route;
        this.api = api;
        this.adb = adb;
        this.util = util;
        this.latOri = '';
        this.longOri = '';
        this.latDest = '';
        this.longDest = '';
        this.id = '';
        this.dName = '';
        this.restAddress = '';
        this.dCover = '';
        this.phone = '';
        this.status = '';
        this.totalOrders = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log('data=>', data);
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
                this.getOrder();
            }
        });
    }
    callDriver() {
        // window.open('tel:' + this.phone);
        window.open('https://api.whatsapp.com/send?phone=91' + this.phone);
    }
    getOrder() {
        this.util.show();
        this.api.getOrderById(this.id).then((data) => {
            this.util.hide();
            console.log(data);
            if (data) {
                this.dName = data.dId.fullname;
                this.dCover = data.uid.coverImage;
                this.dId = data.dId.uid;
                this.restAddress = data.address.address;
                this.phone = data.dId.phone;
                this.status = data.status;
                this.grandTotal = data.grandTotal;
                this.totalOrders = JSON.parse(data.order);
                // this.getDriverInfo();
                console.log('my order', this.totalOrders);
                this.loadMap(parseFloat(data.address.lat), parseFloat(data.address.lng), parseFloat(data.vid.lat), parseFloat(data.vid.lng));
            }
        }, error => {
            console.log('error in orders', error);
            this.util.hide();
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log('error in order', error);
            this.util.hide();
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    changeMarkerPosition(marker, map) {
        var latlng = new google.maps.LatLng(this.driverLat, this.driverLng);
        map.setCenter(latlng);
        marker.setPosition(latlng);
        console.log("Updating runner position");
    }
    loadMap(latOri, lngOri, latDest, lngDest) {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay = new google.maps.DirectionsRenderer();
        var bounds = new google.maps.LatLngBounds;
        var origin1 = { lat: parseFloat(latOri), lng: parseFloat(lngOri) };
        var destinationA = { lat: latDest, lng: lngDest };
        var destinationIcon = 'https://chart.googleapis.com/chart?' +
            'chst=d_map_pin_letter&chld=D|FF0000|000000';
        var originIcon = 'https://chart.googleapis.com/chart?' +
            'chst=d_map_pin_letter&chld=O|FFFF00|000000';
        var map = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: latOri, lng: lngOri },
            disableDefaultUI: true,
            zoom: 10
        });
        const custPos = new google.maps.LatLng(latOri, lngOri);
        const restPos = new google.maps.LatLng(latDest, lngDest);
        const icon = {
            url: 'assets/icon.png',
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor
        };
        var marker = new google.maps.Marker({
            map: map,
            position: custPos,
            animation: google.maps.Animation.DROP,
            icon: icon,
        });
        var markerCust = new google.maps.Marker({
            map: map,
            position: restPos,
            animation: google.maps.Animation.DROP,
        });
        marker.setMap(map);
        markerCust.setMap(map);
        directionsDisplay.setMap(map);
        // directionsDisplay.setOptions({ suppressMarkers: true });
        directionsDisplay.setOptions({
            polylineOptions: {
                strokeWeight: 4,
                strokeOpacity: 1,
                strokeColor: 'red'
            },
            suppressMarkers: true
        });
        var geocoder = new google.maps.Geocoder;
        var service = new google.maps.DistanceMatrixService;
        service.getDistanceMatrix({
            origins: [origin1],
            destinations: [destinationA],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        }, function (response, status) {
            if (status !== 'OK') {
                alert('Error was: ' + status);
            }
            else {
                var originList = response.originAddresses;
                var destinationList = response.destinationAddresses;
                var outputDiv = document.getElementById('output');
                // outputDiv.innerHTML = '';
                // deleteMarkers(markersArray);
                var showGeocodedAddressOnMap = function (asDestination) {
                    var icon = asDestination ? destinationIcon : originIcon;
                    return function (results, status) {
                        if (status === 'OK') {
                            map.fitBounds(bounds.extend(results[0].geometry.location));
                            // markersArray.push(new google.maps.Marker({
                            //   map: map,
                            //   position: results[0].geometry.location,
                            //   icon: icon
                            // }));
                        }
                        else {
                            alert('Geocode was not successful due to: ' + status);
                        }
                    };
                };
                directionsService.route({
                    origin: origin1,
                    destination: destinationA,
                    travelMode: 'DRIVING'
                }, function (response, status) {
                    if (status === 'OK') {
                        directionsDisplay.setDirections(response);
                    }
                    else {
                        window.alert('Directions request failed due to ' + status);
                    }
                });
                for (var i = 0; i < originList.length; i++) {
                    var results = response.rows[i].elements;
                    geocoder.geocode({ 'address': originList[i] }, showGeocodedAddressOnMap(false));
                    for (var j = 0; j < results.length; j++) {
                        geocoder.geocode({ 'address': destinationList[j] }, showGeocodedAddressOnMap(true));
                    }
                }
            }
        });
        this.interval = setInterval(() => {
            this.changeMarkerPosition(marker, map);
        }, 12000);
    }
    ionViewDidLeave() {
        console.log('leaae');
        clearInterval(this.interval);
    }
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
};
TrackerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], TrackerPage.prototype, "mapElement", void 0);
TrackerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tracker',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tracker.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracker/tracker.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tracker.page.scss */ "./src/app/pages/tracker/tracker.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
], TrackerPage);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=pages-tracker-tracker-module-es2015.js.map