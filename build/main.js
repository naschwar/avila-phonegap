webpackJsonp([0],{

/***/ 137:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 137;

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__radio_radio__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_content__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__video_video__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xml2js__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_rest_api_rest_api__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TabsPage = (function () {
    function TabsPage(http, restApiProvider) {
        this.http = http;
        this.restApiProvider = restApiProvider;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__radio_radio__["a" /* RadioPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__content_content__["a" /* ContentPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__["a" /* SchedulePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__video_video__["a" /* VideoPage */];
        this.requestPosts();
        this.requestEvents();
        this.requestNowPlaying();
    }
    TabsPage.prototype.requestPosts = function () {
        var _this = this;
        this.restApiProvider.requestInfo("posts", "page=1")
            .subscribe(function (posts) {
            _this.restApiProvider.posts = posts;
            for (var _i = 0, _a = _this.restApiProvider.posts; _i < _a.length; _i++) {
                var post = _a[_i];
                _this.requestByline(post.byline[0]);
                _this.requestCategory(post.categories[0]);
            }
        }, function (error) { return console.log(error); });
    };
    TabsPage.prototype.requestByline = function (id) {
        var _this = this;
        this.restApiProvider.requestInfo("byline/" + id, "")
            .subscribe(function (byline) { return _this.restApiProvider.bylines[byline["id"]] = byline["name"]; }, function (error) { return console.log(error); });
    };
    TabsPage.prototype.requestCategory = function (id) {
        var _this = this;
        this.restApiProvider.requestInfo("categories/" + id, "")
            .subscribe(function (category) { return _this.restApiProvider.categories[category["id"]] = category["name"]; }, function (error) { return console.log(error); });
    };
    TabsPage.prototype.requestEvents = function () {
        var _this = this;
        this.restApiProvider.requestEvent("events", "")
            .subscribe(function (events) {
            _this.restApiProvider.events = events["events"];
        }, function (error) { return console.log(error); });
    };
    TabsPage.prototype.requestNowPlaying = function () {
        var _this = this;
        this.restApiProvider.requestNowPlaying()
            .subscribe(function (nowPlaying) {
            Object(__WEBPACK_IMPORTED_MODULE_6_xml2js__["parseString"])(nowPlaying, function (err, result) {
                this.restApiProvider.nowPlaying = result;
            });
        }, function (error) { return _this.restApiProvider.nowPlaying = null; });
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/penax/avila/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabIcon="radio"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="paper"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab4Root" tabIcon="mic"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/penax/avila/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_7__providers_rest_api_rest_api__["a" /* RestApiProvider */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RadioPage = (function () {
    function RadioPage() {
    }
    RadioPage.prototype.startAudio = function () {
        var audioPlayer = document.getElementById('player');
        audioPlayer.play();
    };
    RadioPage.prototype.stopAudio = function () {
        var audioPlayer = document.getElementById('player');
        audioPlayer.pause();
    };
    return RadioPage;
}());
RadioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-radio',template:/*ion-inline-start:"/home/penax/avila/src/pages/radio/radio.html"*/'<ion-header>\n</ion-header>\n\n<ion-content class="radio-page" padding>\n  <div class="img-wrapper">\n    <img src="assets/img/kcpr.jpg" alt="KCPR logo"/>\n  </div>\n  <div class="buttons">\n    <audio id="player">\n      <source src=\'http://129.65.35.106:8000/KCPRMP3\' type="audio/mpeg" /> \n    </audio>\n    <button ion-button icon-only clear (click)="startAudio()" color="dark">\n      <ion-icon name="play">\n      </ion-icon> \n    </button>\n    <button ion-button icon-only clear (click)="stopAudio()" color="dark">\n      <ion-icon name="square">\n      </ion-icon>\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/penax/avila/src/pages/radio/radio.html"*/
    }),
    __metadata("design:paramtypes", [])
], RadioPage);

//# sourceMappingURL=radio.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_detail_post_detail__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_api_rest_api__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentPage = (function () {
    function ContentPage(navCtrl, restApiProvider) {
        this.navCtrl = navCtrl;
        this.restApiProvider = restApiProvider;
        this.posts = [];
        this.bylines = [];
        this.categories = [];
    }
    ContentPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.restApiProvider.getPosts().subscribe(function (value) {
            _this.posts = value;
        });
        this.restApiProvider.getBylines().subscribe(function (value) {
            _this.bylines = value;
        });
        this.restApiProvider.getCategories().subscribe(function (value) {
            _this.categories = value;
        });
    };
    /*
  doInfinite(infiniteScroll) {
    this.page = this.page+1;
    setTimeout(() => {
      this.restApi.getUsers(this.page)
         .subscribe(
           res => {
             this.data = res;
             this.perPage = this.data.per_page;
             this.totalData = this.data.total;
             this.totalPage = this.data.total_pages;
             for(let i=0; i<this.data.data.length; i++) {
               this.users.push(this.data.data[i]);
             }
           },
           error =>  this.errorMessage = <any>error);

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }
     */
    ContentPage.prototype.itemTapped = function (event, item) {
        // go to the post detail page
        // pass session data
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__post_detail_post_detail__["a" /* PostDetailPage */], {
            item: item
        });
    };
    return ContentPage;
}());
ContentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-content',template:/*ion-inline-start:"/home/penax/avila/src/pages/content/content.html"*/'<ion-header>\n</ion-header>\n\n<ion-content class="content-page" padding>\n  <ion-list>\n    <button ion-item detail-none *ngFor="let post of posts" (click)="itemTapped($event, post)">\n      <img src="{{ post.better_featured_image.source_url }}"/>\n      <div id="wrapper">\n        <ion-title text-wrap text-uppercase [innerHTML]="post.title.rendered"></ion-title>\n        <div id="byline">\n          <span id="author" [innerHTML]="bylines[post.byline[0]]"></span>\n          <span id="divider">/</span>\n          <span id="category" [innerHTML]="categories[post.categories[0]]"></span>\n        </div>\n      </div>\n    </button>\n  </ion-list>\n  <!--\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="page < totalPage">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  `-->\n</ion-content>\n'/*ion-inline-end:"/home/penax/avila/src/pages/content/content.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_api_rest_api__["a" /* RestApiProvider */]])
], ContentPage);

//# sourceMappingURL=content.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostDetailPage = (function () {
    function PostDetailPage(navParams) {
        this.navParams = navParams;
        this.selectedItem = navParams.get('item');
    }
    return PostDetailPage;
}());
PostDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-postdetail',template:/*ion-inline-start:"/home/penax/avila/src/pages/post-detail/post-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <img src="{{ selectedItem.better_featured_image.source_url }}"/>\n  <ion-title text-wrap text-uppercase [innerHTML]="selectedItem.title.rendered"></ion-title>\n  <p [innerHTML]="selectedItem.content.rendered"></p>\n  -->\n</ion-content>\n'/*ion-inline-end:"/home/penax/avila/src/pages/post-detail/post-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], PostDetailPage);

//# sourceMappingURL=post-detail.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_detail_event_detail__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SchedulePage = (function () {
    function SchedulePage(navCtrl, loadingCtrl, restApiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.restApiProvider = restApiProvider;
        this.programming = "now_playing";
        this.events = [];
        this.restApiProvider.requestInfo("pages", "include=4638")
            .subscribe(function (schedule) { return _this.schedule = _this.getCurrentDay(schedule[0]["content"]["rendered"]); });
    }
    SchedulePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.restApiProvider.getEvents().subscribe(function (value) {
            _this.events = value;
        });
        this.restApiProvider.getNowPlaying().subscribe(function (value) {
            _this.nowPlaying = value;
        });
    };
    SchedulePage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__event_detail_event_detail__["a" /* EventDetailPage */], {
            item: item
        });
    };
    SchedulePage.prototype.getCurrentDay = function (schedule) {
        var string = schedule + '';
        var scheduleArray = string.split("<h2>");
        var d = new Date();
        var n = d.getDay();
        return ("<h2>" + scheduleArray[n + 1]);
    };
    return SchedulePage;
}());
SchedulePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-schedule',template:/*ion-inline-start:"/home/penax/avila/src/pages/schedule/schedule.html"*/'<ion-header>\n</ion-header>\n\n<ion-content class="schedule-page">\n\n  <div padding>\n    <ion-segment [(ngModel)]="programming">\n      <ion-segment-button value="now_playing">\n        Now Playing\n      </ion-segment-button>\n      <ion-segment-button value="shows">\n        Shows\n      </ion-segment-button>\n      <ion-segment-button value="events">\n        Events\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  \n  <div [ngSwitch]="programming">\n    <ion-list *ngSwitchCase="\'now_playing\'"> \n      <ion-item>\n      </ion-item>\n    </ion-list>\n\n    <div *ngSwitchCase="\'shows\'">\n      <div class="schedule" [innerHTML]="schedule">\n      </div>\n    </div>\n\n    <ion-list *ngSwitchCase="\'events\'">\n      <button *ngFor="let event of events" (click)="itemTapped($event, event)" [innerHTML]="event.title">\n      </button>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/penax/avila/src/pages/schedule/schedule.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */]])
], SchedulePage);

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventDetailPage = (function () {
    function EventDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedItem = navParams.get('item');
    }
    return EventDetailPage;
}());
EventDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event-detail',template:/*ion-inline-start:"/home/penax/avila/src/pages/event-detail/event-detail.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-title text-wrap text-uppercase [innerHTML]="selectedItem.title"></ion-title>\n  <img src="{{ selectedItem.image.url }}"/>\n  <p [innerHTML]="selectedItem.description"></p>\n</ion-content>\n'/*ion-inline-end:"/home/penax/avila/src/pages/event-detail/event-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], EventDetailPage);

//# sourceMappingURL=event-detail.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_youtube_service_youtube_service__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoPage = (function () {
    function VideoPage(navCtrl, youtubeService, loadingCtrl, sanitizer) {
        this.navCtrl = navCtrl;
        this.youtubeService = youtubeService;
        this.loadingCtrl = loadingCtrl;
        this.sanitizer = sanitizer;
        this.videos = [];
        this.findVideos();
    }
    VideoPage.prototype.findVideos = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({});
        loading.present();
        this.youtubeService.getVideos().subscribe(function (videos) {
            _this.videos = videos.items;
            for (var _i = 0, _a = _this.videos; _i < _a.length; _i++) {
                var video = _a[_i];
                _this.convertDate(video.snippet.publishedAt);
            }
            loading.dismiss();
        }, function (err) {
            console.log(err);
        });
    };
    VideoPage.prototype.sanitizeUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + url);
    };
    VideoPage.prototype.convertDate = function (date) {
        var d = new Date(date);
        var retString;
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        retString = monthNames[d.getMonth()] + " " + d.getDay() + " " + d.getFullYear();
        return retString;
    };
    return VideoPage;
}());
VideoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-video',template:/*ion-inline-start:"/home/penax/avila/src/pages/video/video.html"*/'<ion-content>\n  <ion-list>\n      <div class="card">\n          <ion-item *ngFor="let video of videos, let i=index">\n              <div class="video-container">\n                <iframe [src]="sanitizeUrl(video.id.videoId)" frameborder="0" width="560" height="315" allowfullscreen="allowfullscreen"></iframe>\n              </div>\n              <div class="video-info-container">\n                <h2 [innerHTML]="video.snippet.title"></h2>\n                <p [innerHTML]="convertDate(video.snippet.publishedAt)"></p>\n              </div>\n          </ion-item>\n      </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/penax/avila/src/pages/video/video.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_youtube_service_youtube_service__["a" /* YoutubeServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_youtube_service_youtube_service__["a" /* YoutubeServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
], VideoPage);

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YoutubeServiceProvider = (function () {
    function YoutubeServiceProvider(http) {
        this.http = http;
        this.googleToken = "AIzaSyCGfEUsM_DJzwqSjEeqWoVNpgNxPv5yHq8";
        this.maxResults = 10;
        this.channelId = 'UCeb_E0tdRLTthfcpOYjNjjQ';
        this.url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet';
    }
    YoutubeServiceProvider.prototype.getVideos = function () {
        return this.http.get(this.url + '&channelId=' + this.channelId + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken)
            .map(function (res) { return res.json(); });
    };
    return YoutubeServiceProvider;
}());
YoutubeServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], YoutubeServiceProvider);

//# sourceMappingURL=youtube-service.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(259);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_radio_radio__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_content_content__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_event_detail_event_detail__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_schedule_schedule__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_video_video__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_post_detail_post_detail__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_rest_api_rest_api__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_youtube_service_youtube_service__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













/* added modules */




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_radio_radio__["a" /* RadioPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_content_content__["a" /* ContentPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_event_detail_event_detail__["a" /* EventDetailPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_schedule_schedule__["a" /* SchedulePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_video_video__["a" /* VideoPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_post_detail_post_detail__["a" /* PostDetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_radio_radio__["a" /* RadioPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_content_content__["a" /* ContentPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_event_detail_event_detail__["a" /* EventDetailPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_schedule_schedule__["a" /* SchedulePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_video_video__["a" /* VideoPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_post_detail_post_detail__["a" /* PostDetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__providers_rest_api_rest_api__["a" /* RestApiProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_youtube_service_youtube_service__["a" /* YoutubeServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/penax/avila/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/penax/avila/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the RestApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var RestApiProvider = (function () {
    function RestApiProvider(http) {
        this.http = http;
        this.url = "https://www.kcpr.org/wp-json/wp/v2/";
        this.posts = [];
        this.bylines = [];
        this.categories = [];
        this.events = [];
    }
    RestApiProvider.prototype.requestInfo = function (endpoint, query) {
        var searchUrl;
        if (query.length == 0) {
            searchUrl = this.url + endpoint;
        }
        else {
            searchUrl = this.url + endpoint + "?" + query;
        }
        return this.http.get(searchUrl)
            .retry(5)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestApiProvider.prototype.requestEvent = function (endpoint, query) {
        var searchUrl;
        if (query.length == 0) {
            searchUrl = "http://kcpr.org/wp-json/tribe/events/v1/" + endpoint;
        }
        else {
            searchUrl = "http://kcpr.org/wp-json/tribe/events/v1/" + endpoint + "?" + query;
        }
        return this.http.get(searchUrl)
            .retry(5)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestApiProvider.prototype.requestNowPlaying = function () {
        return this.http.get("http://spinitron.com/radio/rss.php?station=kcpr")
            .retry(5)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestApiProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    RestApiProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RestApiProvider.prototype.getPosts = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.posts);
    };
    RestApiProvider.prototype.getBylines = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.bylines);
    };
    RestApiProvider.prototype.getCategories = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.categories);
    };
    RestApiProvider.prototype.getEvents = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.events);
    };
    RestApiProvider.prototype.getSchedule = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.schedule);
    };
    RestApiProvider.prototype.getNowPlaying = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.nowPlaying);
    };
    return RestApiProvider;
}());
RestApiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], RestApiProvider);

//# sourceMappingURL=rest-api.js.map

/***/ })

},[241]);
//# sourceMappingURL=main.js.map