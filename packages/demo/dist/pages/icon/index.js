(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/icon/index"],{

/***/ "../../node_modules/babel-loader/lib/index.js!./src/pages/icon/index.tsx":
/*!********************************************************************************************************!*\
  !*** /Users/obito/Desktop/demo/taro-color-ui/node_modules/babel-loader/lib!./src/pages/icon/index.tsx ***!
  \********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_color_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! taro-color-ui */ "../../node_modules/taro-color-ui/dist/index.umd.js");
/* harmony import */ var taro_color_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__);




var Icon = function Icon() {
  var gridData = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    var icons = [{
      name: "appreciate"
    }, {
      name: "check"
    }, {
      name: "close"
    }, {
      name: "edit"
    }, {
      name: "emoji"
    }, {
      name: "favorfill"
    }, {
      name: "favor"
    }, {
      name: "loading"
    }, {
      name: "locationfill"
    }, {
      name: "location"
    }, {
      name: "phone"
    }, {
      name: "roundcheckfill"
    }, {
      name: "roundcheck"
    }, {
      name: "roundclosefill"
    }, {
      name: "roundclose"
    }, {
      name: "roundrightfill"
    }, {
      name: "roundright"
    }, {
      name: "search"
    }, {
      name: "taxi"
    }, {
      name: "timefill"
    }, {
      name: "time"
    }, {
      name: "unfold"
    }, {
      name: "warnfill"
    }, {
      name: "warn"
    }, {
      name: "camerafill"
    }, {
      name: "camera"
    }, {
      name: "commentfill"
    }, {
      name: "comment"
    }, {
      name: "likefill"
    }, {
      name: "like"
    }, {
      name: "notificationfill"
    }, {
      name: "notification"
    }, {
      name: "order"
    }, {
      name: "samefill"
    }, {
      name: "same"
    }, {
      name: "deliver"
    }, {
      name: "evaluate"
    }, {
      name: "pay"
    }, {
      name: "send"
    }, {
      name: "shop"
    }, {
      name: "ticket"
    }, {
      name: "back"
    }, {
      name: "cascades"
    }, {
      name: "discover"
    }, {
      name: "list"
    }, {
      name: "more"
    }, {
      name: "scan"
    }, {
      name: "settings"
    }, {
      name: "questionfill"
    }, {
      name: "question"
    }, {
      name: "shopfill"
    }, {
      name: "form"
    }, {
      name: "pic"
    }, {
      name: "filter"
    }, {
      name: "footprint"
    }, {
      name: "top"
    }, {
      name: "pulldown"
    }, {
      name: "pullup"
    }, {
      name: "right"
    }, {
      name: "refresh"
    }, {
      name: "moreandroid"
    }, {
      name: "deletefill"
    }, {
      name: "refund"
    }, {
      name: "cart"
    }, {
      name: "qrcode"
    }, {
      name: "remind"
    }, {
      name: "delete"
    }, {
      name: "profile"
    }, {
      name: "home"
    }, {
      name: "cartfill"
    }, {
      name: "discoverfill"
    }, {
      name: "homefill"
    }, {
      name: "message"
    }, {
      name: "addressbook"
    }, {
      name: "link"
    }, {
      name: "lock"
    }, {
      name: "unlock"
    }, {
      name: "vip"
    }, {
      name: "weibo"
    }, {
      name: "activity"
    }, {
      name: "friendaddfill"
    }, {
      name: "friendadd"
    }, {
      name: "friendfamous"
    }, {
      name: "friend"
    }, {
      name: "goods"
    }, {
      name: "selection"
    }, {
      name: "explore"
    }, {
      name: "present"
    }, {
      name: "squarecheckfill"
    }, {
      name: "square"
    }, {
      name: "squarecheck"
    }, {
      name: "round"
    }, {
      name: "roundaddfill"
    }, {
      name: "roundadd"
    }, {
      name: "add"
    }, {
      name: "notificationforbidfill"
    }, {
      name: "explorefill"
    }, {
      name: "fold"
    }, {
      name: "game"
    }, {
      name: "redpacket"
    }, {
      name: "selectionfill"
    }, {
      name: "similar"
    }, {
      name: "appreciatefill"
    }, {
      name: "infofill"
    }, {
      name: "info"
    }, {
      name: "forwardfill"
    }, {
      name: "forward"
    }, {
      name: "rechargefill"
    }, {
      name: "recharge"
    }, {
      name: "vipcard"
    }, {
      name: "voice"
    }, {
      name: "voicefill"
    }, {
      name: "friendfavor"
    }, {
      name: "wifi"
    }, {
      name: "share"
    }, {
      name: "wefill"
    }, {
      name: "we"
    }, {
      name: "lightauto"
    }, {
      name: "lightforbid"
    }, {
      name: "lightfill"
    }, {
      name: "camerarotate"
    }, {
      name: "light"
    }, {
      name: "barcode"
    }, {
      name: "flashlightclose"
    }, {
      name: "flashlightopen"
    }, {
      name: "searchlist"
    }, {
      name: "service"
    }, {
      name: "sort"
    }, {
      name: "down"
    }, {
      name: "mobile"
    }, {
      name: "mobilefill"
    }, {
      name: "copy"
    }, {
      name: "countdownfill"
    }, {
      name: "countdown"
    }, {
      name: "noticefill"
    }, {
      name: "notice"
    }, {
      name: "upstagefill"
    }, {
      name: "upstage"
    }, {
      name: "babyfill"
    }, {
      name: "baby"
    }, {
      name: "brandfill"
    }, {
      name: "brand"
    }, {
      name: "choicenessfill"
    }, {
      name: "choiceness"
    }, {
      name: "clothesfill"
    }, {
      name: "clothes"
    }, {
      name: "creativefill"
    }, {
      name: "creative"
    }, {
      name: "female"
    }, {
      name: "keyboard"
    }, {
      name: "male"
    }, {
      name: "newfill"
    }, {
      name: "new"
    }, {
      name: "pullleft"
    }, {
      name: "pullright"
    }, {
      name: "rankfill"
    }, {
      name: "rank"
    }, {
      name: "bad"
    }, {
      name: "cameraadd"
    }, {
      name: "focus"
    }, {
      name: "friendfill"
    }, {
      name: "cameraaddfill"
    }, {
      name: "apps"
    }, {
      name: "paintfill"
    }, {
      name: "paint"
    }, {
      name: "picfill"
    }, {
      name: "refresharrow"
    }, {
      name: "colorlens"
    }, {
      name: "markfill"
    }, {
      name: "mark"
    }, {
      name: "presentfill"
    }, {
      name: "repeal"
    }, {
      name: "album"
    }, {
      name: "peoplefill"
    }, {
      name: "people"
    }, {
      name: "servicefill"
    }, {
      name: "repair"
    }, {
      name: "file"
    }, {
      name: "repairfill"
    }, {
      name: "taoxiaopu"
    }, {
      name: "weixin"
    }, {
      name: "attentionfill"
    }, {
      name: "attention"
    }, {
      name: "commandfill"
    }, {
      name: "command"
    }, {
      name: "communityfill"
    }, {
      name: "community"
    }, {
      name: "read"
    }, {
      name: "calendar"
    }, {
      name: "cut"
    }, {
      name: "magic"
    }, {
      name: "backwardfill"
    }, {
      name: "playfill"
    }, {
      name: "stop"
    }, {
      name: "tagfill"
    }, {
      name: "tag"
    }, {
      name: "group"
    }, {
      name: "all"
    }, {
      name: "backdelete"
    }, {
      name: "hotfill"
    }, {
      name: "hot"
    }, {
      name: "post"
    }, {
      name: "radiobox"
    }, {
      name: "rounddown"
    }, {
      name: "upload"
    }, {
      name: "writefill"
    }, {
      name: "write"
    }, {
      name: "radioboxfill"
    }, {
      name: "punch"
    }, {
      name: "shake"
    }, {
      name: "move"
    }, {
      name: "safe"
    }, {
      name: "activityfill"
    }, {
      name: "crownfill"
    }, {
      name: "crown"
    }, {
      name: "goodsfill"
    }, {
      name: "messagefill"
    }, {
      name: "profilefill"
    }, {
      name: "sound"
    }, {
      name: "sponsorfill"
    }, {
      name: "sponsor"
    }, {
      name: "upblock"
    }, {
      name: "weblock"
    }, {
      name: "weunblock"
    }, {
      name: "my"
    }, {
      name: "myfill"
    }, {
      name: "emojifill"
    }, {
      name: "emojiflashfill"
    }, {
      name: "flashbuyfill"
    }, {
      name: "text"
    }, {
      name: "goodsfavor"
    }, {
      name: "musicfill"
    }, {
      name: "musicforbidfill"
    }, {
      name: "card"
    }, {
      name: "triangledownfill"
    }, {
      name: "triangleupfill"
    }, {
      name: "roundleftfill-copy"
    }, {
      name: "font"
    }, {
      name: "title"
    }, {
      name: "recordfill"
    }, {
      name: "record"
    }, {
      name: "cardboardfill"
    }, {
      name: "cardboard"
    }, {
      name: "formfill"
    }, {
      name: "coin"
    }, {
      name: "cardboardforbid"
    }, {
      name: "circlefill"
    }, {
      name: "circle"
    }, {
      name: "attentionforbid"
    }, {
      name: "attentionforbidfill"
    }, {
      name: "attentionfavorfill"
    }, {
      name: "attentionfavor"
    }, {
      name: "titles"
    }, {
      name: "icloading"
    }, {
      name: "full"
    }, {
      name: "mail"
    }, {
      name: "peoplelist"
    }, {
      name: "goodsnewfill"
    }, {
      name: "goodsnew"
    }, {
      name: "medalfill"
    }, {
      name: "medal"
    }, {
      name: "newsfill"
    }, {
      name: "newshotfill"
    }, {
      name: "newshot"
    }, {
      name: "news"
    }, {
      name: "videofill"
    }, {
      name: "video"
    }, {
      name: "exit"
    }, {
      name: "skinfill"
    }, {
      name: "skin"
    }, {
      name: "moneybagfill"
    }, {
      name: "usefullfill"
    }, {
      name: "usefull"
    }, {
      name: "moneybag"
    }, {
      name: "redpacket_fill"
    }, {
      name: "subscription"
    }, {
      name: "loading1"
    }, {
      name: "github"
    }, {
      name: "global"
    }, {
      name: "settingsfill"
    }, {
      name: "back_android"
    }, {
      name: "expressman"
    }, {
      name: "evaluate_fill"
    }, {
      name: "group_fill"
    }, {
      name: "play_forward_fill"
    }, {
      name: "deliver_fill"
    }, {
      name: "notice_forbid_fill"
    }, {
      name: "fork"
    }, {
      name: "pick"
    }, {
      name: "wenzi"
    }, {
      name: "ellipse"
    }, {
      name: "qr_code"
    }, {
      name: "dianhua"
    }, {
      name: "cuIcon"
    }, {
      name: "loading2"
    }, {
      name: "btn"
    }];
    return icons.map(function (i) {
      return {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuIcon"], {
          value: i.name
        }),
        name: i.name
      };
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuNavigation"], {
    color: "#fff",
    bgColor: "linear-gradient(135deg, #79F1A4 10%, #0E5CAD 100%)",
    leftSolt: "\u8FD4\u56DE"
  }, "\u56FE\u6807"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(taro_color_ui__WEBPACK_IMPORTED_MODULE_2__["CuGrid"], {
    data: gridData
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),

/***/ "./src/pages/icon/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/icon/index.tsx ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "../../node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/babel-loader/lib!./index.tsx */ "../../node_modules/babel-loader/lib/index.js!./src/pages/icon/index.tsx");


var config = {"navigationStyle":"custom"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/icon/index', {}, config || {}))



/***/ })

},[["./src/pages/icon/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map