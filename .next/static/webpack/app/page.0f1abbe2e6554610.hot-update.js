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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SubmitModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/dialog */ \"(app-pages-browser)/./src/components/ui/dialog.tsx\");\n/* harmony import */ var _barrel_optimize_names_AlertTriangle_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=AlertTriangle!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/triangle-alert.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction SubmitModal(param) {\n    let { unansweredQuestions, totalQuestions, onSubmit, onCancel } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const minimumRequired = Math.ceil(totalQuestions * 0.5);\n    const handleSubmit = ()=>{\n        if (unansweredQuestions < minimumRequired) {\n            setIsOpen(false);\n        } else {\n            onSubmit();\n            router;\n        }\n    };\n    const handleCancel = ()=>{\n        setIsOpen(false);\n        onCancel();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.Dialog, {\n        open: isOpen,\n        onOpenChange: setIsOpen,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogContent, {\n            className: \"sm:max-w-[425px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogHeader, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogTitle, {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertTriangle_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"h-6 w-6 text-yellow-500\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogDescription, {\n                    className: \"text-center py-4\",\n                    children: [\n                        \"You have (\",\n                        unansweredQuestions,\n                        \") Unanswered Questions,\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        \"\".concat(unansweredQuestions < minimumRequired ? \"Do you want to submit?\" : \"Sorry you want to complete atleast 50%\")\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_3__.DialogFooter, {\n                    className: \"sm:justify-center\",\n                    children: [\n                        unansweredQuestions < minimumRequired && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            type: \"submit\",\n                            className: \"bg-black text-white hover:bg-gray-800\",\n                            onClick: handleSubmit,\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            type: \"button\",\n                            variant: \"ghost\",\n                            onClick: handleCancel,\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\ELT Global\\\\exams\\\\src\\\\pages\\\\WarningModal.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(SubmitModal, \"mEi83NlPXQzy/XIDfTYWzOSvaHw=\");\n_c = SubmitModal;\nvar _c;\n$RefreshReg$(_c, \"SubmitModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9wYWdlcy9XYXJuaW5nTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVnQztBQUNlO0FBUWhCO0FBQ2E7QUFTN0IsU0FBU1MsWUFBWSxLQUE2RTtRQUE3RSxFQUFFQyxtQkFBbUIsRUFBRUMsY0FBYyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBb0IsR0FBN0U7O0lBQ2xDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNZ0Isa0JBQWtCQyxLQUFLQyxJQUFJLENBQUNQLGlCQUFpQjtJQUVuRCxNQUFNUSxlQUFlO1FBQ25CLElBQUlULHNCQUFzQk0saUJBQWlCO1lBQ3pDRCxVQUFVO1FBQ1osT0FBTztZQUNMSDtZQUNBUTtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxlQUFlO1FBQ25CTixVQUFVO1FBQ1ZGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1gseURBQU1BO1FBQUNvQixNQUFNUjtRQUFRUyxjQUFjUjtrQkFDbEMsNEVBQUNaLGdFQUFhQTtZQUFDcUIsV0FBVTs7OEJBQ3ZCLDhEQUFDbEIsK0RBQVlBOzhCQUNYLDRFQUFDQyw4REFBV0E7d0JBQUNpQixXQUFVO2tDQUNyQiw0RUFBQ2hCLHlGQUFhQTs0QkFBQ2dCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBRzdCLDhEQUFDcEIsb0VBQWlCQTtvQkFBQ29CLFdBQVU7O3dCQUFtQjt3QkFDbkNkO3dCQUFvQjtzQ0FDL0IsOERBQUNlOzs7Ozt3QkFDQyxHQUE4RyxPQUE1R2Ysc0JBQXNCTSxrQkFBbUIsMkJBQTJCOzs7Ozs7OzhCQUUxRSw4REFBQ1gsK0RBQVlBO29CQUFDbUIsV0FBVTs7d0JBQ3JCZCxzQkFBc0JNLGlDQUNyQiw4REFBQ2YseURBQU1BOzRCQUNMeUIsTUFBSzs0QkFDTEYsV0FBVTs0QkFDVkcsU0FBU1I7c0NBQ1Y7Ozs7OztzQ0FJSCw4REFBQ2xCLHlEQUFNQTs0QkFDTHlCLE1BQUs7NEJBQ0xFLFNBQVE7NEJBQ1JELFNBQVNOO3NDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBcER3Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1dhcm5pbmdNb2RhbC50c3g/YjQwZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcclxuaW1wb3J0IHtcclxuICBEaWFsb2csXHJcbiAgRGlhbG9nQ29udGVudCxcclxuICBEaWFsb2dEZXNjcmlwdGlvbixcclxuICBEaWFsb2dGb290ZXIsXHJcbiAgRGlhbG9nSGVhZGVyLFxyXG4gIERpYWxvZ1RpdGxlLFxyXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZGlhbG9nXCJcclxuaW1wb3J0IHsgQWxlcnRUcmlhbmdsZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcclxuXHJcbmludGVyZmFjZSBTdWJtaXRNb2RhbFByb3BzIHtcclxuICB1bmFuc3dlcmVkUXVlc3Rpb25zOiBudW1iZXIsXHJcbiAgdG90YWxRdWVzdGlvbnM6IG51bWJlcixcclxuICBvblN1Ym1pdDogKCkgPT4gdm9pZFxyXG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Ym1pdE1vZGFsKHsgdW5hbnN3ZXJlZFF1ZXN0aW9ucywgdG90YWxRdWVzdGlvbnMsIG9uU3VibWl0LCBvbkNhbmNlbCB9OiBTdWJtaXRNb2RhbFByb3BzKSB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgbWluaW11bVJlcXVpcmVkID0gTWF0aC5jZWlsKHRvdGFsUXVlc3Rpb25zICogMC41KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHVuYW5zd2VyZWRRdWVzdGlvbnMgPCBtaW5pbXVtUmVxdWlyZWQpIHtcclxuICAgICAgc2V0SXNPcGVuKGZhbHNlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb25TdWJtaXQoKVxyXG4gICAgICByb3V0ZXJcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbihmYWxzZSlcclxuICAgIG9uQ2FuY2VsKClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGlhbG9nIG9wZW49e2lzT3Blbn0gb25PcGVuQ2hhbmdlPXtzZXRJc09wZW59PlxyXG4gICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJzbTptYXgtdy1bNDI1cHhdXCI+XHJcbiAgICAgICAgPERpYWxvZ0hlYWRlcj5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxBbGVydFRyaWFuZ2xlIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC15ZWxsb3ctNTAwXCIgLz5cclxuICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgPC9EaWFsb2dIZWFkZXI+XHJcbiAgICAgICAgPERpYWxvZ0Rlc2NyaXB0aW9uIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB5LTRcIj5cclxuICAgICAgICAgIFlvdSBoYXZlICh7dW5hbnN3ZXJlZFF1ZXN0aW9uc30pIFVuYW5zd2VyZWQgUXVlc3Rpb25zLFxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICB7YCR7dW5hbnN3ZXJlZFF1ZXN0aW9ucyA8IG1pbmltdW1SZXF1aXJlZCA/IGBEbyB5b3Ugd2FudCB0byBzdWJtaXQ/YCA6IGBTb3JyeSB5b3Ugd2FudCB0byBjb21wbGV0ZSBhdGxlYXN0IDUwJWB9YH1cclxuICAgICAgICA8L0RpYWxvZ0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgIDxEaWFsb2dGb290ZXIgY2xhc3NOYW1lPVwic206anVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIHt1bmFuc3dlcmVkUXVlc3Rpb25zIDwgbWluaW11bVJlcXVpcmVkICYmIChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrIHRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9EaWFsb2dGb290ZXI+XHJcbiAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgIDwvRGlhbG9nPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkRpYWxvZyIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dEZXNjcmlwdGlvbiIsIkRpYWxvZ0Zvb3RlciIsIkRpYWxvZ0hlYWRlciIsIkRpYWxvZ1RpdGxlIiwiQWxlcnRUcmlhbmdsZSIsIlN1Ym1pdE1vZGFsIiwidW5hbnN3ZXJlZFF1ZXN0aW9ucyIsInRvdGFsUXVlc3Rpb25zIiwib25TdWJtaXQiLCJvbkNhbmNlbCIsImlzT3BlbiIsInNldElzT3BlbiIsIm1pbmltdW1SZXF1aXJlZCIsIk1hdGgiLCJjZWlsIiwiaGFuZGxlU3VibWl0Iiwicm91dGVyIiwiaGFuZGxlQ2FuY2VsIiwib3BlbiIsIm9uT3BlbkNoYW5nZSIsImNsYXNzTmFtZSIsImJyIiwidHlwZSIsIm9uQ2xpY2siLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/pages/WarningModal.tsx\n"));

/***/ })

});