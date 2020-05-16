(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/app/components.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["content"];
function AppComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_10_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const c_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.activateCompo(c_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", (ctx_r1.active == null ? null : ctx_r1.active.name) === c_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c_r3.name, " ");
} }
class AppComponent {
    constructor(facResolver) {
        this.facResolver = facResolver;
        this.components = [];
    }
    ngOnInit() {
        this.components = _components__WEBPACK_IMPORTED_MODULE_1__["default"].getData();
    }
    ngAfterViewInit() {
        this.activateCompo(this.components[0]);
    }
    getPix(str) {
        return +str.split('px')[0];
    }
    prev(p, $event) {
        const target = $event.target;
        const rect = window.getComputedStyle(target);
        const space = target.offsetWidth + this.getPix(rect.marginInlineStart) + this.getPix(rect.marginInlineEnd);
        const visibleWidth = p.offsetWidth - (space * 2);
        const remainingScroll = p.scrollWidth - (p.scrollLeft + visibleWidth);
        p.scrollBy({
            behavior: 'smooth',
            left: -(remainingScroll - visibleWidth > 0 ? visibleWidth : remainingScroll)
        });
    }
    next(p, $event) {
        const target = $event.target;
        const rect = window.getComputedStyle(target);
        const space = target.offsetWidth + this.getPix(rect.marginInlineStart) + this.getPix(rect.marginInlineEnd);
        const visibleWidth = p.offsetWidth - (space * 2);
        const remainingScroll = p.scrollWidth - (p.scrollLeft + visibleWidth);
        p.scrollBy({
            behavior: 'smooth',
            left: remainingScroll - visibleWidth > 0 ? visibleWidth : remainingScroll
        });
    }
    activateCompo(c) {
        this.content.clear();
        const factory = this.facResolver.resolveComponentFactory(c.compo);
        this.content.createComponent(factory);
        this.active = c;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 15, vars: 1, consts: [[1, "c-nav"], [1, "c-brand"], [1, "wrapper"], [1, "scrollbar"], ["nav", ""], [1, "nav", "prev", 3, "click"], [1, "content"], ["role", "button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "nav", "next", 3, "click"], [1, "c-content"], ["content", ""], ["role", "button", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Component Builder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.prev(_r0, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2190");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_li_10_Template, 2, 3, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.next(_r0, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "main", 9, 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.components);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["* {\n  box-sizing: border-box;\n}\n\nbody {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.c-nav {\n  background-color: #e6e6e6;\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  box-shadow: 0px 1px 1px 0px #dbd6d6;\n}\n\n.c-nav .c-brand {\n  font-size: 1.1rem;\n  max-width: 25%;\n  flex: 0 0 auto;\n  display: block;\n  margin: 0;\n}\n\n.c-nav .wrapper {\n  display: flex;\n  overflow: hidden;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  flex: 1 1 auto;\n  align-items: flex-start;\n}\n\n.c-nav .wrapper .scrollbar {\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n  overflow-x: scroll;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  flex: 1 1 auto;\n  margin-bottom: -1rem;\n  align-items: center;\n}\n\n.c-nav .wrapper .scrollbar div.nav {\n  position: -webkit-sticky;\n  position: sticky;\n  cursor: pointer;\n  margin-left: 1rem;\n  width: 32px;\n  height: 32px;\n  font-size: 20px;\n  border-radius: 100%;\n  background-color: #fff;\n  padding: 0 0.95rem;\n  display: flex;\n  line-height: 1;\n  align-items: center;\n  justify-content: center;\n}\n\n.c-nav .wrapper .scrollbar div.nav.prev {\n  left: -14px;\n}\n\n.c-nav .wrapper .scrollbar div.nav.next {\n  right: -14px;\n}\n\n.c-nav .wrapper .content {\n  height: 100%;\n  width: 100%;\n}\n\n.c-nav .wrapper ul {\n  color: #888;\n  display: flex;\n  list-style: none;\n  padding: 0.5rem 0;\n  margin: 0;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  flex: 1 1 auto;\n  overflow: hidden;\n  overflow-x: auto;\n  align-items: center;\n}\n\n.c-nav .wrapper ul > li {\n  cursor: pointer;\n  white-space: nowrap;\n  background-color: rgba(255, 255, 255, 0.7);\n  border-radius: 10rem;\n  border: 1px solid rgba(255, 255, 255, 0.7);\n  padding: 0.25rem 1rem;\n  margin-left: 1rem;\n  box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.2);\n  text-transform: capitalize;\n}\n\n.c-nav .wrapper ul > li.active {\n  background-color: cornflowerblue;\n  border-color: cornflowerblue;\n  color: #fff;\n}\n\n.c-nav .wrapper ul > li.nav {\n  position: -webkit-sticky;\n  position: sticky;\n  width: 32px;\n  height: 32px;\n  font-size: 20px;\n  border-radius: 100%;\n  background-color: #fff;\n  padding: 0.25rem 0.95rem;\n  display: flex;\n  line-height: 1;\n  align-items: center;\n  justify-content: center;\n}\n\n.c-nav .wrapper ul > li.prev {\n  left: -14px;\n}\n\n.c-nav .wrapper ul > li.next {\n  right: -14px;\n}\n\n@media (max-width: 768px) {\n  .c-nav .wrapper .scrollbar {\n    margin-bottom: 0rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fub255bW91cy9kZXYvdnNjb2RlLXFtbC9uZy1jdXN0b20tY29tcG9uZW50cy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURDQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtBQ0VGOztBRERFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDR0o7O0FEREU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDR0o7O0FERkk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNJTjs7QURITTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNLUjs7QURKUTtFQUNFLFdBQUE7QUNNVjs7QURKUTtFQUNFLFlBQUE7QUNNVjs7QURGSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDSU47O0FERkk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNJTjs7QURGTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQ0FBQTtFQUNBLDBCQUFBO0FDSVI7O0FESFE7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0tWOztBREhRO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0tWOztBREhRO0VBQ0UsV0FBQTtBQ0tWOztBREhRO0VBQ0UsWUFBQTtBQ0tWOztBREVBO0VBQ0U7SUFDRSxtQkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHkge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jLW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggMHB4ICNkYmQ2ZDY7XG4gIC5jLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBtYXgtd2lkdGg6IDI1JTtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIC5zY3JvbGxiYXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTFyZW07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZGl2Lm5hdiB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMCAwLjk1cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICYucHJldiB7XG4gICAgICAgICAgbGVmdDogLTE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgJi5uZXh0IHtcbiAgICAgICAgICByaWdodDogLTE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRlbnQge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAmID4gbGkge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmZmLCAkYWxwaGE6IDAuNyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvcjogI2ZmZiwgJGFscGhhOiAwLjcpO1xuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICAgICYubmF2IHtcbiAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC45NXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgJi5wcmV2IHtcbiAgICAgICAgICBsZWZ0OiAtMTRweDtcbiAgICAgICAgfVxuICAgICAgICAmLm5leHQge1xuICAgICAgICAgIHJpZ2h0OiAtMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmMtbmF2IC53cmFwcGVyIC5zY3JvbGxiYXIge1xuICAgIG1hcmdpbi1ib3R0b206IDByZW07XG4gIH1cbn1cbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYy1uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IDBweCAjZGJkNmQ2O1xufVxuLmMtbmF2IC5jLWJyYW5kIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIG1heC13aWR0aDogMjUlO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbn1cbi5jLW5hdiAud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uYy1uYXYgLndyYXBwZXIgLnNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogLTFyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYy1uYXYgLndyYXBwZXIgLnNjcm9sbGJhciBkaXYubmF2IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDAuOTVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jLW5hdiAud3JhcHBlciAuc2Nyb2xsYmFyIGRpdi5uYXYucHJldiB7XG4gIGxlZnQ6IC0xNHB4O1xufVxuLmMtbmF2IC53cmFwcGVyIC5zY3JvbGxiYXIgZGl2Lm5hdi5uZXh0IHtcbiAgcmlnaHQ6IC0xNHB4O1xufVxuLmMtbmF2IC53cmFwcGVyIC5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jLW5hdiAud3JhcHBlciB1bCB7XG4gIGNvbG9yOiAjODg4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgbWFyZ2luOiAwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleDogMSAxIGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYy1uYXYgLndyYXBwZXIgdWwgPiBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uYy1uYXYgLndyYXBwZXIgdWwgPiBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgYm9yZGVyLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uYy1uYXYgLndyYXBwZXIgdWwgPiBsaS5uYXYge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC45NXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmMtbmF2IC53cmFwcGVyIHVsID4gbGkucHJldiB7XG4gIGxlZnQ6IC0xNHB4O1xufVxuLmMtbmF2IC53cmFwcGVyIHVsID4gbGkubmV4dCB7XG4gIHJpZ2h0OiAtMTRweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jLW5hdiAud3JhcHBlciAuc2Nyb2xsYmFyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICB9XG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/elements */ "./node_modules/@angular/elements/__ivy_ngcc__/fesm2015/elements.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/app/components.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _test2_test2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test2/test2.component */ "./src/app/test2/test2.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");










class AppModule {
    constructor(injector) {
        this.injector = injector;
        _components__WEBPACK_IMPORTED_MODULE_5__["default"].getData().forEach(c => {
            this.addCustomComponent(c.name, c.compo);
        });
    }
    addCustomComponent(name, c) {
        const el = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_4__["createCustomElement"])(c, { injector: this.injector });
        customElements.define(name, el);
    }
    // necessary
    ngDoBootstrap(appRef) {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])()) {
            appRef.bootstrap(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]);
        }
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"])); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _test2_test2_component__WEBPACK_IMPORTED_MODULE_7__["Test2Component"],
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _test2_test2_component__WEBPACK_IMPORTED_MODULE_7__["Test2Component"],
                    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ],
                providers: [],
                entryComponents: [_test2_test2_component__WEBPACK_IMPORTED_MODULE_7__["Test2Component"]]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components.ts":
/*!*******************************!*\
  !*** ./src/app/components.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test2_test2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test2/test2.component */ "./src/app/test2/test2.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/app/utils.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");



const components = [
    ['welcome-page', _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]],
    _test2_test2_component__WEBPACK_IMPORTED_MODULE_0__["Test2Component"]
];
Object.defineProperty(components, 'getData', {
    enumerable: true,
    value() {
        const result = [];
        for (const c of this) {
            let compo;
            let name;
            if (c instanceof Array) {
                name = c[0];
                compo = c[1];
            }
            else {
                name = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getComponentTag"])(c);
                compo = c;
            }
            result.push({ name, compo });
        }
        return result;
    }
});
/* harmony default export */ __webpack_exports__["default"] = (components);


/***/ }),

/***/ "./src/app/test2/test2.component.ts":
/*!******************************************!*\
  !*** ./src/app/test2/test2.component.ts ***!
  \******************************************/
/*! exports provided: Test2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test2Component", function() { return Test2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Test2Component {
    constructor() {
    }
    ngOnInit() {
    }
}
Test2Component.ɵfac = function Test2Component_Factory(t) { return new (t || Test2Component)(); };
Test2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Test2Component, selectors: [["custom-test2"]], decls: 22, vars: 0, consts: [[1, "text-center", "mt-4", "font-weight-light"], [1, "text-center"], [1, "form-signin"], ["src", "https://raw.githubusercontent.com/twbs/bootstrap/v4.5.0/site/docs/4.5/assets/brand/bootstrap-solid.svg", "alt", "", "width", "72", "height", "72", 1, "mb-4"], [1, "h3", "mb-3", "font-weight-normal"], ["for", "inputEmail", 1, "sr-only"], ["type", "email", "id", "inputEmail", "placeholder", "Email address", "required", "", "autofocus", "", 1, "form-control", "mb-3"], ["for", "inputPassword", 1, "sr-only"], ["type", "password", "id", "inputPassword", "placeholder", "Password", "required", "", 1, "form-control"], [1, "checkbox", "mb-3"], ["type", "checkbox", "value", "remember-me"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block"], [1, "mt-5", "mb-3", "text-muted"]], template: function Test2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Simple Testing Sign In page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00A9 2017-2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fub255bW91cy9kZXYvdnNjb2RlLXFtbC9uZy1jdXN0b20tY29tcG9uZW50cy9zcmMvYXBwL3Rlc3QyL3Rlc3QyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZXN0Mi90ZXN0Mi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90ZXN0Mi90ZXN0Mi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXNpZ25pbntcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzMwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbiIsIi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Test2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'custom-test2',
                templateUrl: './test2.component.html',
                styleUrls: ['./test2.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/utils.ts":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! exports provided: getComponentTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentTag", function() { return getComponentTag; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

function getComponentTag(c) {
    try {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])()) {
            const componentDeco = c.decorators.find(d => d.type.prototype.ngMetadataName.toLowerCase() === 'component');
            return componentDeco.args.reduce((a, arg) => (Object.assign(Object.assign({}, a), arg)), {}).selector;
        }
        else {
            return c.ɵcmp.selectors[0][0];
        }
    }
    catch (e) {
        throw new Error('Unable to get Component selector for "' + c + '"');
    }
}


/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_2__);




class WelcomeComponent {
    constructor() {
        // headings = new Map<string, string>();
        this.md = new markdown_it__WEBPACK_IMPORTED_MODULE_2__();
    }
    ngOnInit() {
        this.getReadMe();
    }
    ngAfterViewInit() {
    }
    getReadMe() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.readMe = yield (yield fetch('https://raw.githubusercontent.com/parasharrajat/ng-custom-components/master/README.md', {
                method: 'get',
            })).text();
            // const headingsReg = /^#+(?<heading>.+)(?<content>[^#]*)/m;
        });
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["pop-welcome"]], decls: 5, vars: 1, consts: [[1, "container"], [1, "text-center", "mt-4"], [1, "page", 3, "innerHtml"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Welcome To Component Builder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx.md.render(ctx.readMe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    } }, styles: [".page img {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fub255bW91cy9kZXYvdnNjb2RlLXFtbC9uZy1jdXN0b20tY29tcG9uZW50cy9zcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UgaW1ne1xuICBkaXNwbGF5OiBub25lO1xufVxuIiwiLnBhZ2UgaW1nIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'pop-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");


// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/anonymous/dev/vscode-qml/ng-custom-components/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map