"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/pages/WarningModal.tsx":
/*!************************************!*\
  !*** ./src/pages/WarningModal.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubmitModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _barrel_optimize_names_AlertTriangle_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/triangle-alert.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction SubmitModal(param) {\n    let { unansweredQuestions, totalQuestions, onSubmit, onCancel } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const minimumRequired = Math.ceil(totalQuestions * 0.5);\n    const handleSubmit = ()=>{\n        if (unansweredQuestions < minimumRequired) {\n            setIsOpen(false);\n        } else {\n            onSubmit();\n        }\n    };\n    const handleCancel = ()=>{\n        setIsOpen(false);\n        onCancel();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog, {\n        open: isOpen,\n        onOpenChange: setIsOpen,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogContent, {\n            className: \"sm:max-w-[425px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogHeader, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"h-6 w-6 text-yellow-500\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogDescription, {\n                    className: \"text-center py-4\",\n                    children: [\n                        \"You have (\",\n                        unansweredQuestions,\n                        \") Unanswered Questions,\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        \"$Do you want to submit?\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogFooter, {\n                    className: \"sm:justify-center\",\n                    children: [\n                        unansweredQuestions < minimumRequired && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            type: \"submit\",\n                            className: \"bg-black text-white hover:bg-gray-800\",\n                            onClick: handleSubmit,\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            type: \"button\",\n                            variant: \"ghost\",\n                            onClick: handleCancel,\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(SubmitModal, \"mEi83NlPXQzy/XIDfTYWzOSvaHw=\");\n_c = SubmitModal;\nvar _c;\n$RefreshReg$(_c, \"SubmitModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9wYWdlcy9XYXJuaW5nTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVnQztBQUNlO0FBUWhCO0FBQ2E7QUFTN0IsU0FBU1MsWUFBWSxLQUE2RTtRQUE3RSxFQUFFQyxtQkFBbUIsRUFBRUMsY0FBYyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBb0IsR0FBN0U7O0lBQ2xDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNZ0Isa0JBQWtCQyxLQUFLQyxJQUFJLENBQUNQLGlCQUFpQjtJQUVuRCxNQUFNUSxlQUFlO1FBQ25CLElBQUlULHNCQUFzQk0saUJBQWlCO1lBQ3pDRCxVQUFVO1FBQ1osT0FBTztZQUNMSDtRQUNGO0lBQ0Y7SUFFQSxNQUFNUSxlQUFlO1FBQ25CTCxVQUFVO1FBQ1ZGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1gseURBQU1BO1FBQUNtQixNQUFNUDtRQUFRUSxjQUFjUDtrQkFDbEMsNEVBQUNaLGdFQUFhQTtZQUFDb0IsV0FBVTs7OEJBQ3ZCLDhEQUFDakIsK0RBQVlBOzhCQUNYLDRFQUFDQyw4REFBV0E7d0JBQUNnQixXQUFVO2tDQUNyQiw0RUFBQ2YseUZBQWFBOzRCQUFDZSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUc3Qiw4REFBQ25CLG9FQUFpQkE7b0JBQUNtQixXQUFVOzt3QkFBbUI7d0JBQ25DYjt3QkFBb0I7c0NBQy9CLDhEQUFDYzs7Ozs7d0JBQ0M7Ozs7Ozs7OEJBRUosOERBQUNuQiwrREFBWUE7b0JBQUNrQixXQUFVOzt3QkFDckJiLHNCQUFzQk0saUNBQ3JCLDhEQUFDZix5REFBTUE7NEJBQ0x3QixNQUFLOzRCQUNMRixXQUFVOzRCQUNWRyxTQUFTUDtzQ0FDVjs7Ozs7O3NDQUlILDhEQUFDbEIseURBQU1BOzRCQUNMd0IsTUFBSzs0QkFDTEUsU0FBUTs0QkFDUkQsU0FBU047c0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FuRHdCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvV2FybmluZ01vZGFsLnRzeD9iNDBlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIlxyXG5pbXBvcnQge1xyXG4gIERpYWxvZyxcclxuICBEaWFsb2dDb250ZW50LFxyXG4gIERpYWxvZ0Rlc2NyaXB0aW9uLFxyXG4gIERpYWxvZ0Zvb3RlcixcclxuICBEaWFsb2dIZWFkZXIsXHJcbiAgRGlhbG9nVGl0bGUsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9kaWFsb2dcIlxyXG5pbXBvcnQgeyBBbGVydFRyaWFuZ2xlIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xyXG5cclxuaW50ZXJmYWNlIFN1Ym1pdE1vZGFsUHJvcHMge1xyXG4gIHVuYW5zd2VyZWRRdWVzdGlvbnM6IG51bWJlcixcclxuICB0b3RhbFF1ZXN0aW9uczogbnVtYmVyLFxyXG4gIG9uU3VibWl0OiAoKSA9PiB2b2lkXHJcbiAgb25DYW5jZWw6ICgpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VibWl0TW9kYWwoeyB1bmFuc3dlcmVkUXVlc3Rpb25zLCB0b3RhbFF1ZXN0aW9ucywgb25TdWJtaXQsIG9uQ2FuY2VsIH06IFN1Ym1pdE1vZGFsUHJvcHMpIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBtaW5pbXVtUmVxdWlyZWQgPSBNYXRoLmNlaWwodG90YWxRdWVzdGlvbnMgKiAwLjUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBpZiAodW5hbnN3ZXJlZFF1ZXN0aW9ucyA8IG1pbmltdW1SZXF1aXJlZCkge1xyXG4gICAgICBzZXRJc09wZW4oZmFsc2UpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvblN1Ym1pdCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc09wZW4oZmFsc2UpXHJcbiAgICBvbkNhbmNlbCgpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERpYWxvZyBvcGVuPXtpc09wZW59IG9uT3BlbkNoYW5nZT17c2V0SXNPcGVufT5cclxuICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwic206bWF4LXctWzQyNXB4XVwiPlxyXG4gICAgICAgIDxEaWFsb2dIZWFkZXI+XHJcbiAgICAgICAgICA8RGlhbG9nVGl0bGUgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQteWVsbG93LTUwMFwiIC8+XHJcbiAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDwvRGlhbG9nSGVhZGVyPlxyXG4gICAgICAgIDxEaWFsb2dEZXNjcmlwdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS00XCI+XHJcbiAgICAgICAgICBZb3UgaGF2ZSAoe3VuYW5zd2VyZWRRdWVzdGlvbnN9KSBVbmFuc3dlcmVkIFF1ZXN0aW9ucyxcclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAge2AkRG8geW91IHdhbnQgdG8gc3VibWl0P2B9XHJcbiAgICAgICAgPC9EaWFsb2dEZXNjcmlwdGlvbj5cclxuICAgICAgICA8RGlhbG9nRm9vdGVyIGNsYXNzTmFtZT1cInNtOmp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICB7dW5hbnN3ZXJlZFF1ZXN0aW9ucyA8IG1pbmltdW1SZXF1aXJlZCAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjayB0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktODAwXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRGlhbG9nRm9vdGVyPlxyXG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICA8L0RpYWxvZz5cclxuICApXHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJEaWFsb2ciLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nRGVzY3JpcHRpb24iLCJEaWFsb2dGb290ZXIiLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsIkFsZXJ0VHJpYW5nbGUiLCJTdWJtaXRNb2RhbCIsInVuYW5zd2VyZWRRdWVzdGlvbnMiLCJ0b3RhbFF1ZXN0aW9ucyIsIm9uU3VibWl0Iiwib25DYW5jZWwiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtaW5pbXVtUmVxdWlyZWQiLCJNYXRoIiwiY2VpbCIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNhbmNlbCIsIm9wZW4iLCJvbk9wZW5DaGFuZ2UiLCJjbGFzc05hbWUiLCJiciIsInR5cGUiLCJvbkNsaWNrIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/pages/WarningModal.tsx\n"));

/***/ })

});