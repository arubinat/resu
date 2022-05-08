// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8hVeF":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "5c3cf7e1285358ec";
module.bundle.HMR_BUNDLE_ID = "3efe2cbeabdb1b70";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5Msky":[function(require,module,exports) {
/**
 * Import dependencies from node_modules
 * see commented examples below
 */ var _bootstrap = require("bootstrap");
(function() {
    var university = "UOC";
    console.log("Hello, ".concat(university, "!"));
})();

},{"bootstrap":"iDAYj"}],"iDAYj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Alert", function() {
    return Alert;
});
parcelHelpers.export(exports, "Button", function() {
    return Button;
});
parcelHelpers.export(exports, "Carousel", function() {
    return Carousel;
});
parcelHelpers.export(exports, "Collapse", function() {
    return Collapse;
});
parcelHelpers.export(exports, "Dropdown", function() {
    return Dropdown;
});
parcelHelpers.export(exports, "Modal", function() {
    return Modal;
});
parcelHelpers.export(exports, "Offcanvas", function() {
    return Offcanvas;
});
parcelHelpers.export(exports, "Popover", function() {
    return Popover;
});
parcelHelpers.export(exports, "ScrollSpy", function() {
    return ScrollSpy;
});
parcelHelpers.export(exports, "Tab", function() {
    return Tab;
});
parcelHelpers.export(exports, "Toast", function() {
    return Toast;
});
parcelHelpers.export(exports, "Tooltip", function() {
    return Tooltip;
});
var _helpers = require("@swc/helpers");
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ var _core = require("@popperjs/core");
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ var MAX_UID = 1000000;
var MILLISECONDS_MULTIPLIER = 1000;
var TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)
var toType = function(obj) {
    if (obj === null || obj === undefined) return "".concat(obj);
    return ({
    }).toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */ var getUID = function(prefix) {
    do prefix += Math.floor(Math.random() * MAX_UID);
    while (document.getElementById(prefix))
    return prefix;
};
var getSelector = function(element) {
    var selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
        // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
        // `document.querySelector` will rightfully complain it is invalid.
        // See https://github.com/twbs/bootstrap/issues/32273
        if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) return null;
         // Just in case some CMS puts out a full URL with the anchor appended
        if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) hrefAttr = "#".concat(hrefAttr.split('#')[1]);
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
    }
    return selector;
};
var getSelectorFromElement = function(element) {
    var selector = getSelector(element);
    if (selector) return document.querySelector(selector) ? selector : null;
    return null;
};
var getElementFromSelector = function(element) {
    var selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
};
var getTransitionDurationFromElement = function(element) {
    if (!element) return 0;
     // Get transition-duration of the element
    var ref = window.getComputedStyle(element), transitionDuration = ref.transitionDuration, transitionDelay = ref.transitionDelay;
    var floatTransitionDuration = Number.parseFloat(transitionDuration);
    var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) return 0;
     // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
var triggerTransitionEnd = function(element) {
    element.dispatchEvent(new Event(TRANSITION_END));
};
var isElement = function(obj) {
    if (!obj || typeof obj !== 'object') return false;
    if (typeof obj.jquery !== 'undefined') obj = obj[0];
    return typeof obj.nodeType !== 'undefined';
};
var getElement = function(obj) {
    if (isElement(obj)) // it's a jQuery object or a node element
    return obj.jquery ? obj[0] : obj;
    if (typeof obj === 'string' && obj.length > 0) return document.querySelector(obj);
    return null;
};
var typeCheckConfig = function(componentName, config, configTypes) {
    Object.keys(configTypes).forEach(function(property) {
        var expectedTypes = configTypes[property];
        var value = config[property];
        var valueType = value && isElement(value) ? 'element' : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError("".concat(componentName.toUpperCase(), ": Option \"").concat(property, "\" provided type \"").concat(valueType, "\" but expected type \"").concat(expectedTypes, "\"."));
    });
};
var isVisible = function(element) {
    if (!isElement(element) || element.getClientRects().length === 0) return false;
    return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
};
var isDisabled = function(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
    if (element.classList.contains('disabled')) return true;
    if (typeof element.disabled !== 'undefined') return element.disabled;
    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};
var findShadowRoot = function(element) {
    if (!document.documentElement.attachShadow) return null;
     // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) return element;
     // when we don't find a shadow root
    if (!element.parentNode) return null;
    return findShadowRoot(element.parentNode);
};
var noop = function() {
};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */ var reflow = function(element) {
    // eslint-disable-next-line no-unused-expressions
    element.offsetHeight;
};
var getjQuery = function() {
    var jQuery = window.jQuery;
    if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) return jQuery;
    return null;
};
var DOMContentLoadedCallbacks = [];
var onDOMContentLoaded = function(callback1) {
    if (document.readyState === 'loading') {
        // add listener on the first call when the document is in loading state
        if (!DOMContentLoadedCallbacks.length) document.addEventListener('DOMContentLoaded', function() {
            DOMContentLoadedCallbacks.forEach(function(callback) {
                return callback();
            });
        });
        DOMContentLoadedCallbacks.push(callback1);
    } else callback1();
};
var isRTL = function() {
    return document.documentElement.dir === 'rtl';
};
var defineJQueryPlugin = function(plugin) {
    onDOMContentLoaded(function() {
        var $ = getjQuery();
        /* istanbul ignore if */ if ($) {
            var name = plugin.NAME;
            var JQUERY_NO_CONFLICT = $.fn[name];
            $.fn[name] = plugin.jQueryInterface;
            $.fn[name].Constructor = plugin;
            $.fn[name].noConflict = function() {
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
            };
        }
    });
};
var execute = function(callback) {
    if (typeof callback === 'function') callback();
};
var executeAfterTransition = function(callback, transitionElement) {
    var waitForTransition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    if (!waitForTransition) {
        execute(callback);
        return;
    }
    var durationPadding = 5;
    var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    var called = false;
    var handler = function(param) {
        var target = param.target;
        if (target !== transitionElement) return;
        called = true;
        transitionElement.removeEventListener(TRANSITION_END, handler);
        execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(function() {
        if (!called) triggerTransitionEnd(transitionElement);
    }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */ var getNextActiveElement = function(list, activeElement, shouldGetNext, isCycleAllowed) {
    var index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed
    if (index === -1) return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
    var listLength = list.length;
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) index = (index + listLength) % listLength;
    return list[Math.max(0, Math.min(index, listLength - 1))];
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
var stripNameRegex = /\..*/;
var stripUidRegex = /::\d+$/;
var eventRegistry = {
}; // Events storage
var uidEvent = 1;
var customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
};
var customEventsRegex = /^(mouseenter|mouseleave)/i;
var nativeEvents = new Set([
    'click',
    'dblclick',
    'mouseup',
    'mousedown',
    'contextmenu',
    'mousewheel',
    'DOMMouseScroll',
    'mouseover',
    'mouseout',
    'mousemove',
    'selectstart',
    'selectend',
    'keydown',
    'keypress',
    'keyup',
    'orientationchange',
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'pointerdown',
    'pointermove',
    'pointerup',
    'pointerleave',
    'pointercancel',
    'gesturestart',
    'gesturechange',
    'gestureend',
    'focus',
    'blur',
    'change',
    'reset',
    'select',
    'submit',
    'focusin',
    'focusout',
    'load',
    'unload',
    'beforeunload',
    'resize',
    'move',
    'DOMContentLoaded',
    'readystatechange',
    'error',
    'abort',
    'scroll'
]);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */ function getUidEvent(element, uid) {
    return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
}
function getEvent(element) {
    var uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {
    };
    return eventRegistry[uid];
}
function bootstrapHandler(element, fn) {
    return function handler(event) {
        event.delegateTarget = element;
        if (handler.oneOff) EventHandler.off(element, event.type, fn);
        return fn.apply(element, [
            event
        ]);
    };
}
function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
        var domElements = element.querySelectorAll(selector);
        for(var target = event.target; target && target !== this; target = target.parentNode){
            for(var i = domElements.length; i--;)if (domElements[i] === target) {
                event.delegateTarget = target;
                if (handler.oneOff) EventHandler.off(element, event.type, selector, fn);
                return fn.apply(target, [
                    event
                ]);
            }
        } // To please ESLint
        return null;
    };
}
function findHandler(events, handler) {
    var delegationSelector = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var uidEventList = Object.keys(events);
    for(var i = 0, len = uidEventList.length; i < len; i++){
        var event = events[uidEventList[i]];
        if (event.originalHandler === handler && event.delegationSelector === delegationSelector) return event;
    }
    return null;
}
function normalizeParams(originalTypeEvent, handler, delegationFn) {
    var delegation = typeof handler === 'string';
    var originalHandler = delegation ? delegationFn : handler;
    var typeEvent = getTypeEvent(originalTypeEvent);
    var isNative = nativeEvents.has(typeEvent);
    if (!isNative) typeEvent = originalTypeEvent;
    return [
        delegation,
        originalHandler,
        typeEvent
    ];
}
function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) return;
    if (!handler) {
        handler = delegationFn;
        delegationFn = null;
    } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (customEventsRegex.test(originalTypeEvent)) {
        var wrapFn = function(fn) {
            return function wrapFn(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) return fn.call(this, event);
            };
        };
        if (delegationFn) delegationFn = wrapFn(delegationFn);
        else handler = wrapFn(handler);
    }
    var ref = _helpers.slicedToArray(normalizeParams(originalTypeEvent, handler, delegationFn), 3), delegation = ref[0], originalHandler = ref[1], typeEvent = ref[2];
    var events = getEvent(element);
    var handlers = events[typeEvent] || (events[typeEvent] = {
    });
    var previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);
    if (previousFn) {
        previousFn.oneOff = previousFn.oneOff && oneOff;
        return;
    }
    var uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ''));
    var fn1 = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn1.delegationSelector = delegation ? handler : null;
    fn1.originalHandler = originalHandler;
    fn1.oneOff = oneOff;
    fn1.uidEvent = uid;
    handlers[uid] = fn1;
    element.addEventListener(typeEvent, fn1, delegation);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    var fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) return;
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    var storeElementEvent = events[typeEvent] || {
    };
    Object.keys(storeElementEvent).forEach(function(handlerKey) {
        if (handlerKey.includes(namespace)) {
            var event = storeElementEvent[handlerKey];
            removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
    });
}
function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
}
var EventHandler = {
    on: function(element, event, handler, delegationFn) {
        addHandler(element, event, handler, delegationFn, false);
    },
    one: function(element, event, handler, delegationFn) {
        addHandler(element, event, handler, delegationFn, true);
    },
    off: function(element, originalTypeEvent, handler, delegationFn) {
        if (typeof originalTypeEvent !== 'string' || !element) return;
        var ref = _helpers.slicedToArray(normalizeParams(originalTypeEvent, handler, delegationFn), 3), delegation = ref[0], originalHandler = ref[1], typeEvent = ref[2];
        var inNamespace = typeEvent !== originalTypeEvent;
        var events = getEvent(element);
        var isNamespace = originalTypeEvent.startsWith('.');
        if (typeof originalHandler !== 'undefined') {
            // Simplest case: handler is passed, remove that listener ONLY.
            if (!events || !events[typeEvent]) return;
            removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
            return;
        }
        if (isNamespace) Object.keys(events).forEach(function(elementEvent) {
            removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
        var storeElementEvent = events[typeEvent] || {
        };
        Object.keys(storeElementEvent).forEach(function(keyHandlers) {
            var handlerKey = keyHandlers.replace(stripUidRegex, '');
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                var event = storeElementEvent[keyHandlers];
                removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
            }
        });
    },
    trigger: function(element, event, args) {
        if (typeof event !== 'string' || !element) return null;
        var $ = getjQuery();
        var typeEvent = getTypeEvent(event);
        var inNamespace = event !== typeEvent;
        var isNative = nativeEvents.has(typeEvent);
        var jQueryEvent;
        var bubbles = true;
        var nativeDispatch = true;
        var defaultPrevented = false;
        var evt = null;
        if (inNamespace && $) {
            jQueryEvent = $.Event(event, args);
            $(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
        }
        if (isNative) {
            evt = document.createEvent('HTMLEvents');
            evt.initEvent(typeEvent, bubbles, true);
        } else evt = new CustomEvent(event, {
            bubbles: bubbles,
            cancelable: true
        });
         // merge custom information in our event
        if (typeof args !== 'undefined') Object.keys(args).forEach(function(key) {
            Object.defineProperty(evt, key, {
                get: function() {
                    return args[key];
                }
            });
        });
        if (defaultPrevented) evt.preventDefault();
        if (nativeDispatch) element.dispatchEvent(evt);
        if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') jQueryEvent.preventDefault();
        return evt;
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ var elementMap = new Map();
var Data = {
    set: function(element, key, instance) {
        if (!elementMap.has(element)) elementMap.set(element, new Map());
        var instanceMap = elementMap.get(element); // make it clear we only want one instance per element
        // can be removed later when multiple key/instances are fine to be used
        if (!instanceMap.has(key) && instanceMap.size !== 0) {
            // eslint-disable-next-line no-console
            console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
            return;
        }
        instanceMap.set(key, instance);
    },
    get: function(element, key) {
        if (elementMap.has(element)) return elementMap.get(element).get(key) || null;
        return null;
    },
    remove: function(element, key) {
        if (!elementMap.has(element)) return;
        var instanceMap = elementMap.get(element);
        instanceMap.delete(key); // free up element references if there are no instances left for an element
        if (instanceMap.size === 0) elementMap.delete(element);
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ var VERSION = '5.1.3';
var BaseComponent = /*#__PURE__*/ function() {
    "use strict";
    function BaseComponent(element) {
        _helpers.classCallCheck(this, BaseComponent);
        element = getElement(element);
        if (!element) return;
        this._element = element;
        Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    _helpers.createClass(BaseComponent, [
        {
            key: "dispose",
            value: function dispose() {
                var _this = this;
                Data.remove(this._element, this.constructor.DATA_KEY);
                EventHandler.off(this._element, this.constructor.EVENT_KEY);
                Object.getOwnPropertyNames(this).forEach(function(propertyName) {
                    _this[propertyName] = null;
                });
            }
        },
        {
            key: "_queueCallback",
            value: function _queueCallback(callback, element) {
                var isAnimated = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                executeAfterTransition(callback, element, isAnimated);
            }
        }
    ], [
        {
            key: "getInstance",
            value: /** Static */ function getInstance(element) {
                return Data.get(getElement(element), this.DATA_KEY);
            }
        },
        {
            key: "getOrCreateInstance",
            value: function getOrCreateInstance(element) {
                var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                };
                return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
            }
        },
        {
            key: "VERSION",
            get: function get() {
                return VERSION;
            }
        },
        {
            key: "NAME",
            get: function get() {
                throw new Error('You have to implement the static method "NAME", for each component!');
            }
        },
        {
            key: "DATA_KEY",
            get: function get() {
                return "bs.".concat(this.NAME);
            }
        },
        {
            key: "EVENT_KEY",
            get: function get() {
                return ".".concat(this.DATA_KEY);
            }
        }
    ]);
    return BaseComponent;
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ var enableDismissTrigger = function(component) {
    var method = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'hide';
    var clickEvent = "click.dismiss".concat(component.EVENT_KEY);
    var name = component.NAME;
    EventHandler.on(document, clickEvent, "[data-bs-dismiss=\"".concat(name, "\"]"), function(event) {
        if ([
            'A',
            'AREA'
        ].includes(this.tagName)) event.preventDefault();
        if (isDisabled(this)) return;
        var target = getElementFromSelector(this) || this.closest(".".concat(name));
        var instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
        instance[method]();
    });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ var NAME$d = 'alert';
var DATA_KEY$c = 'bs.alert';
var EVENT_KEY$c = ".".concat(DATA_KEY$c);
var EVENT_CLOSE = "close".concat(EVENT_KEY$c);
var EVENT_CLOSED = "closed".concat(EVENT_KEY$c);
var CLASS_NAME_FADE$5 = 'fade';
var CLASS_NAME_SHOW$8 = 'show';
var Alert = /**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ /*#__PURE__*/ function(BaseComponent) {
    "use strict";
    _helpers.inherits(Alert, BaseComponent);
    var _super = _helpers.createSuper(Alert);
    function Alert() {
        _helpers.classCallCheck(this, Alert);
        return _super.apply(this, arguments);
    }
    _helpers.createClass(Alert, [
        {
            key: "close",
            value: function close() {
                var _this = this;
                var closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
                if (closeEvent.defaultPrevented) return;
                this._element.classList.remove(CLASS_NAME_SHOW$8);
                var isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
                this._queueCallback(function() {
                    return _this._destroyElement();
                }, this._element, isAnimated);
            } // Private
        },
        {
            key: "_destroyElement",
            value: function _destroyElement() {
                this._element.remove();
                EventHandler.trigger(this._element, EVENT_CLOSED);
                this.dispose();
            } // Static
        }
    ], [
        {
            key: "NAME",
            get: // Getters
            function get() {
                return NAME$d;
            } // Public
        },
        {
            key: "jQueryInterface",
            value: function jQueryInterface(config) {
                return this.each(function() {
                    var data = Alert.getOrCreateInstance(this);
                    if (typeof config !== 'string') return;
                    if (data[config] === undefined || config.startsWith('_') || config === 'constructor') throw new TypeError("No method named \"".concat(config, "\""));
                    data[config](this);
                });
            }
        }
    ]);
    return Alert;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ enableDismissTrigger(Alert, 'close');
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Alert to jQuery only if jQuery is present
 */ defineJQueryPlugin(Alert);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ var NAME$c = 'button';
var DATA_KEY$b = 'bs.button';
var EVENT_KEY$b = ".".concat(DATA_KEY$b);
var DATA_API_KEY$7 = '.data-api';
var CLASS_NAME_ACTIVE$3 = 'active';
var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
var EVENT_CLICK_DATA_API$6 = "click".concat(EVENT_KEY$b).concat(DATA_API_KEY$7);
var Button = /**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ /*#__PURE__*/ function(BaseComponent) {
    "use strict";
    _helpers.inherits(Button, BaseComponent);
    var _super = _helpers.createSuper(Button);
    function Button() {
        _helpers.classCallCheck(this, Button);
        return _super.apply(this, arguments);
    }
    _helpers.createClass(Button, [
        {
            key: "toggle",
            value: function toggle() {
                // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
                this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
            } // Static
        }
    ], [
        {
            key: "NAME",
            get: // Getters
            function get() {
                return NAME$c;
            } // Public
        },
        {
            key: "jQueryInterface",
            value: function jQueryInterface(config) {
                return this.each(function() {
                    var data = Button.getOrCreateInstance(this);
                    if (config === 'toggle') data[config]();
                });
            }
        }
    ]);
    return Button;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function(event) {
    event.preventDefault();
    var button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    var data = Button.getOrCreateInstance(button);
    data.toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Button to jQuery only if jQuery is present
 */ defineJQueryPlugin(Button);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ function normalizeData(val) {
    if (val === 'true') return true;
    if (val === 'false') return false;
    if (val === Number(val).toString()) return Number(val);
    if (val === '' || val === 'null') return null;
    return val;
}
function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, function(chr) {
        return "-".concat(chr.toLowerCase());
    });
}
var Manipulator = {
    setDataAttribute: function(element, key, value) {
        element.setAttribute("data-bs-".concat(normalizeDataKey(key)), value);
    },
    removeDataAttribute: function(element, key) {
        element.removeAttribute("data-bs-".concat(normalizeDataKey(key)));
    },
    getDataAttributes: function(element) {
        if (!element) return {
        };
        var attributes = {
        };
        Object.keys(element.dataset).filter(function(key) {
            return key.startsWith('bs');
        }).forEach(function(key) {
            var pureKey = key.replace(/^bs/, '');
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
            attributes[pureKey] = normalizeData(element.dataset[key]);
        });
        return attributes;
    },
    getDataAttribute: function(element, key) {
        return normalizeData(element.getAttribute("data-bs-".concat(normalizeDataKey(key))));
    },
    offset: function(element) {
        var rect = element.getBoundingClientRect();
        return {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset
        };
    },
    position: function(element) {
        return {
            top: element.offsetTop,
            left: element.offsetLeft
        };
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ var NODE_TEXT = 3;
var SelectorEngine = {
    find: function(selector) {
        var element = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document.documentElement;
        var _instance;
        return (_instance = []).concat.apply(_instance, _helpers.toConsumableArray(Element.prototype.querySelectorAll.call(element, selector)));
    },
    findOne: function(selector) {
        var element = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document.documentElement;
        return Element.prototype.querySelector.call(element, selector);
    },
    children: function(element, selector) {
        var _instance;
        return (_instance = []).concat.apply(_instance, _helpers.toConsumableArray(element.children)).filter(function(child) {
            return child.matches(selector);
        });
    },
    parents: function(element, selector) {
        var parents = [];
        var ancestor = element.parentNode;
        while(ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT){
            if (ancestor.matches(selector)) parents.push(ancestor);
            ancestor = ancestor.parentNode;
        }
        return parents;
    },
    prev: function(element, selector) {
        var previous = element.previousElementSibling;
        while(previous){
            if (previous.matches(selector)) return [
                previous
            ];
            previous = previous.previousElementSibling;
        }
        return [];
    },
    next: function(element, selector) {
        var next = element.nextElementSibling;
        while(next){
            if (next.matches(selector)) return [
                next
            ];
            next = next.nextElementSibling;
        }
        return [];
    },
    focusableChildren: function(element) {
        var focusables = [
            'a',
            'button',
            'input',
            'textarea',
            'select',
            'details',
            '[tabindex]',
            '[contenteditable="true"]'
        ].map(function(selector) {
            return "".concat(selector, ":not([tabindex^=\"-\"])");
        }).join(', ');
        return this.find(focusables, element).filter(function(el) {
            return !isDisabled(el) && isVisible(el);
        });
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ var NAME$b = 'carousel';
var DATA_KEY$a = 'bs.carousel';
var EVENT_KEY$a = ".".concat(DATA_KEY$a);
var DATA_API_KEY$6 = '.data-api';
var ARROW_LEFT_KEY = 'ArrowLeft';
var ARROW_RIGHT_KEY = 'ArrowRight';
var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
var SWIPE_THRESHOLD = 40;
var Default$a = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
};
var DefaultType$a = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
};
var ORDER_NEXT = 'next';
var ORDER_PREV = 'prev';
var DIRECTION_LEFT = 'left';
var DIRECTION_RIGHT = 'right';
var _obj;
var KEY_TO_DIRECTION = (_obj = {
}, _helpers.defineProperty(_obj, ARROW_LEFT_KEY, DIRECTION_RIGHT), _helpers.defineProperty(_obj, ARROW_RIGHT_KEY, DIRECTION_LEFT), _obj);
var EVENT_SLIDE = "slide".concat(EVENT_KEY$a);
var EVENT_SLID = "slid".concat(EVENT_KEY$a);
var EVENT_KEYDOWN = "keydown".concat(EVENT_KEY$a);
var EVENT_MOUSEENTER = "mouseenter".concat(EVENT_KEY$a);
var EVENT_MOUSELEAVE = "mouseleave".concat(EVENT_KEY$a);
var EVENT_TOUCHSTART = "touchstart".concat(EVENT_KEY$a);
var EVENT_TOUCHMOVE = "touchmove".concat(EVENT_KEY$a);
var EVENT_TOUCHEND = "touchend".concat(EVENT_KEY$a);
var EVENT_POINTERDOWN = "pointerdown".concat(EVENT_KEY$a);
var EVENT_POINTERUP = "pointerup".concat(EVENT_KEY$a);
var EVENT_DRAG_START = "dragstart".concat(EVENT_KEY$a);
var EVENT_LOAD_DATA_API$2 = "load".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);
var EVENT_CLICK_DATA_API$5 = "click".concat(EVENT_KEY$a).concat(DATA_API_KEY$6);
var CLASS_NAME_CAROUSEL = 'carousel';
var CLASS_NAME_ACTIVE$2 = 'active';
var CLASS_NAME_SLIDE = 'slide';
var CLASS_NAME_END = 'carousel-item-end';
var CLASS_NAME_START = 'carousel-item-start';
var CLASS_NAME_NEXT = 'carousel-item-next';
var CLASS_NAME_PREV = 'carousel-item-prev';
var CLASS_NAME_POINTER_EVENT = 'pointer-event';
var SELECTOR_ACTIVE$1 = '.active';
var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
var SELECTOR_ITEM = '.carousel-item';
var SELECTOR_ITEM_IMG = '.carousel-item img';
var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
var SELECTOR_INDICATORS = '.carousel-indicators';
var SELECTOR_INDICATOR = '[data-bs-target]';
var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
var POINTER_TYPE_TOUCH = 'touch';
var POINTER_TYPE_PEN = 'pen';
var Carousel = /**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ /*#__PURE__*/ function(BaseComponent) {
    "use strict";
    _helpers.inherits(Carousel, BaseComponent);
    var _super = _helpers.createSuper(Carousel);
    function Carousel(element, config) {
        _helpers.classCallCheck(this, Carousel);
        var _this;
        _this = _super.call(this, element);
        _this._items = null;
        _this._interval = null;
        _this._activeElement = null;
        _this._isPaused = false;
        _this._isSliding = false;
        _this.touchTimeout = null;
        _this.touchStartX = 0;
        _this.touchDeltaX = 0;
        _this._config = _this._getConfig(config);
        _this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this._element);
        _this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
        _this._pointerEvent = Boolean(window.PointerEvent);
        _this._addEventListeners();
        return _this;
    }
    _helpers.createClass(Carousel, [
        {
            key: "next",
            value: function next() {
                this._slide(ORDER_NEXT);
            }
        },
        {
            key: "nextWhenVisible",
            value: function nextWhenVisible() {
                // Don't call next when the page isn't visible
                // or the carousel or its parent isn't visible
                if (!document.hidden && isVisible(this._element)) this.next();
            }
        },
        {
            key: "prev",
            value: function prev() {
                this._slide(ORDER_PREV);
            }
        },
        {
            key: "pause",
            value: function pause(event) {
                if (!event) this._isPaused = true;
                if (SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element)) {
                    triggerTransitionEnd(this._element);
                    this.cycle(true);
                }
                clearInterval(this._interval);
                this._interval = null;
            }
        },
        {
            key: "cycle",
            value: function cycle(event) {
                if (!event) this._isPaused = false;
                if (this._interval) {
                    clearInterval(this._interval);
                    this._interval = null;
                }
                if (this._config && this._config.interval && !this._isPaused) {
                    this._updateInterval();
                    this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
                }
            }
        },
        {
            key: "to",
            value: function to(index) {
                this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
                var activeIndex = this._getItemIndex(this._activeElement);
                if (index > this._items.length - 1 || index < 0) return;
                if (this._isSliding) {
                    var _this = this;
                    EventHandler.one(this._element, EVENT_SLID, function() {
                        return _this.to(index);
                    });
                    return;
                }
                if (activeIndex === index) {
                    this.pause();
                    this.cycle();
                    return;
                }
                var order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
                this._slide(order, this._items[index]);
            } // Private
        },
        {
            key: "_getConfig",
            value: function _getConfig(config) {
                config = _helpers.objectSpread({
                }, Default$a, Manipulator.getDataAttributes(this._element), typeof config === 'object' ? config : {
                });
                typeCheckConfig(NAME$b, config, DefaultType$a);
                return config;
            }
        },
        {
            key: "_handleSwipe",
            value: function _handleSwipe() {
                var absDeltax = Math.abs(this.touchDeltaX);
                if (absDeltax <= SWIPE_THRESHOLD) return;
                var direction = absDeltax / this.touchDeltaX;
                this.touchDeltaX = 0;
                if (!direction) return;
                this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
            }
        },
        {
            key: "_addEventListeners",
            value: function _addEventListeners() {
                var _this = this;
                if (this._config.keyboard) EventHandler.on(this._element, EVENT_KEYDOWN, function(event) {
                    return _this._keydown(event);
                });
                if (this._config.pause === 'hover') {
                    var _this1 = this;
                    EventHandler.on(this._element, EVENT_MOUSEENTER, function(event) {
                        return _this1.pause(event);
                    });
                    EventHandler.on(this._element, EVENT_MOUSELEAVE, function(event) {
                        return _this1.cycle(event);
                    });
                }
                if (this._config.touch && this._touchSupported) this._addTouchEventListeners();
            }
        },
        {
            key: "_addTouchEventListeners",
            value: function _addTouchEventListeners() {
                var _this = this;
                var hasPointerPenTouch = function(event) {
                    return _this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
                };
                var start = function(event) {
                    if (hasPointerPenTouch(event)) _this.touchStartX = event.clientX;
                    else if (!_this._pointerEvent) _this.touchStartX = event.touches[0].clientX;
                };
                var move = function(event) {
                    // ensure swiping with one touch and not pinching
                    _this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - _this.touchStartX;
                };
                var end = function(event1) {
                    if (hasPointerPenTouch(event1)) _this.touchDeltaX = event1.clientX - _this.touchStartX;
                    _this._handleSwipe();
                    if (_this._config.pause === 'hover') {
                        var _this2 = _this;
                        // If it's a touch-enabled device, mouseenter/leave are fired as
                        // part of the mouse compatibility events on first tap - the carousel
                        // would stop cycling until user tapped out of it;
                        // here, we listen for touchend, explicitly pause the carousel
                        // (as if it's the second time we tap on it, mouseenter compat event
                        // is NOT fired) and after a timeout (to allow for mouse compatibility
                        // events to fire) we explicitly restart cycling
                        _this.pause();
                        if (_this.touchTimeout) clearTimeout(_this.touchTimeout);
                        _this.touchTimeout = setTimeout(function(event) {
                            return _this2.cycle(event);
                        }, TOUCHEVENT_COMPAT_WAIT + _this._config.interval);
                    }
                };
                SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function(itemImg) {
                    EventHandler.on(itemImg, EVENT_DRAG_START, function(event) {
                        return event.preventDefault();
                    });
                });
                if (this._pointerEvent) {
                    EventHandler.on(this._element, EVENT_POINTERDOWN, function(event) {
                        return start(event);
                    });
                    EventHandler.on(this._element, EVENT_POINTERUP, function(event) {
                        return end(event);
                    });
                    this._element.classList.add(CLASS_NAME_POINTER_EVENT);
                } else {
                    EventHandler.on(this._element, EVENT_TOUCHSTART, function(event) {
                        return start(event);
                    });
                    EventHandler.on(this._element, EVENT_TOUCHMOVE, function(event) {
                        return move(event);
                    });
                    EventHandler.on(this._element, EVENT_TOUCHEND, function(event) {
                        return end(event);
                    });
                }
            }
        },
        {
            key: "_keydown",
            value: function _keydown(event) {
                if (/input|textarea/i.test(event.target.tagName)) return;
                var direction = KEY_TO_DIRECTION[event.key];
                if (direction) {
                    event.preventDefault();
                    this._slide(direction);
                }
            }
        },
        {
            key: "_getItemIndex",
            value: function _getItemIndex(element) {
                this._items = element && element.parentNode ? SelectorEngine.find(SELECTOR_ITEM, element.parentNode) : [];
                return this._items.indexOf(element);
            }
        },
        {
            key: "_getItemByOrder",
            value: function _getItemByOrder(order, activeElement) {
                var isNext = order === ORDER_NEXT;
                return getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
            }
        },
        {
            key: "_triggerSlideEvent",
            value: function _triggerSlideEvent(relatedTarget, eventDirectionName) {
                var targetIndex = this._getItemIndex(relatedTarget);
                var fromIndex = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));
                return EventHandler.trigger(this._element, EVENT_SLIDE, {
                    relatedTarget: relatedTarget,
                    direction: eventDirectionName,
                    from: fromIndex,
                    to: targetIndex
                });
            }
        },
        {
            key: "_setActiveIndicatorElement",
            value: function _setActiveIndicatorElement(element) {
                if (this._indicatorsElement) {
                    var activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE$1, this._indicatorsElement);
                    activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
                    activeIndicator.removeAttribute('aria-current');
                    var indicators = SelectorEngine.find(SELECTOR_INDICATOR, this._indicatorsElement);
                    for(var i = 0; i < indicators.length; i++)if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
                        indicators[i].classList.add(CLASS_NAME_ACTIVE$2);
                        indicators[i].setAttribute('aria-current', 'true');
                        break;
                    }
                }
            }
        },
        {
            key: "_updateInterval",
            value: function _updateInterval() {
                var element = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
                if (!element) return;
                var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
                if (elementInterval) {
                    this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
                    this._config.interval = elementInterval;
                } else this._config.interval = this._config.defaultInterval || this._config.interval;
            }
        },
        {
            key: "_slide",
            value: function _slide(directionOrOrder, element) {
                var _this = this;
                var order = this._directionToOrder(directionOrOrder);
                var activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
                var activeElementIndex = this._getItemIndex(activeElement);
                var nextElement = element || this._getItemByOrder(order, activeElement);
                var nextElementIndex = this._getItemIndex(nextElement);
                var isCycling = Boolean(this._interval);
                var isNext = order === ORDER_NEXT;
                var directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
                var orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
                var eventDirectionName = this._orderToDirection(order);
                if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE$2)) {
                    this._isSliding = false;
                    return;
                }
                if (this._isSliding) return;
                var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
                if (slideEvent.defaultPrevented) return;
                if (!activeElement || !nextElement) // Some weirdness is happening, so we bail
                return;
                this._isSliding = true;
                if (isCycling) this.pause();
                this._setActiveIndicatorElement(nextElement);
                this._activeElement = nextElement;
                var triggerSlidEvent = function() {
                    EventHandler.trigger(_this._element, EVENT_SLID, {
                        relatedTarget: nextElement,
                        direction: eventDirectionName,
                        from: activeElementIndex,
                        to: nextElementIndex
                    });
                };
                if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
                    var _this3 = this;
                    nextElement.classList.add(orderClassName);
                    reflow(nextElement);
                    activeElement.classList.add(directionalClassName);
                    nextElement.classList.add(directionalClassName);
                    var completeCallBack = function() {
                        nextElement.classList.remove(directionalClassName, orderClassName);
                        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
                        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
                        _this3._isSliding = false;
                        setTimeout(triggerSlidEvent, 0);
                    };
                    this._queueCallback(completeCallBack, activeElement, true);
                } else {
                    activeElement.classList.remove(CLASS_NAME_ACTIVE$2);
                    nextElement.classList.add(CLASS_NAME_ACTIVE$2);
                    this._isSliding = false;
                    triggerSlidEvent();
                }
                if (isCycling) this.cycle();
            }
        },
        {
            key: "_directionToOrder",
            value: function _directionToOrder(direction) {
                if (![
                    DIRECTION_RIGHT,
                    DIRECTION_LEFT
                ].includes(direction)) return direction;
                if (isRTL()) return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
                return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
            }
        },
        {
            key: "_orderToDirection",
            value: function _orderToDirection(order) {
                if (![
                    ORDER_NEXT,
                    ORDER_PREV
                ].includes(order)) return order;
                if (isRTL()) return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
                return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
            } // Static
        }
    ], [
        {
            key: "Default",
            get: function get() {
                return Default$a;
            }
        },
        {
            key: "NAME",
            get: function get() {
                return NAME$b;
            } // Public
        },
        {
            key: "carouselInterface",
            value: function carouselInterface(element, config) {
                var data = Carousel.getOrCreateInstance(element, config);
                var _config = data._config;
                if (typeof config === 'object') _config = _helpers.objectSpread({
                }, _config, config);
                var action = typeof config === 'string' ? config : _config.slide;
                if (typeof config === 'number') data.to(config);
                else if (typeof action === 'string') {
                    if (typeof data[action] === 'undefined') throw new TypeError("No method named \"".concat(action, "\""));
                    data[action]();
                } else if (_config.interval && _config.ride) {
                    data.pause();
                    data.cycle();
                }
            }
        },
        {
            key: "jQueryInterface",
            value: function jQueryInterface(config) {
                return this.each(function() {
                    Carousel.carouselInterface(this, config);
                });
            }
        },
        {
            key: "dataApiClickHandler",
            value: function dataApiClickHandler(event) {
                var target = getElementFromSelector(this);
                if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) return;
                var config = _helpers.objectSpread({
                }, Manipulator.getDataAttributes(target), Manipulator.getDataAttributes(this));
                var slideIndex = this.getAttribute('data-bs-slide-to');
                if (slideIndex) config.interval = false;
                Carousel.carouselInterface(target, config);
                if (slideIndex) Carousel.getInstance(target).to(slideIndex);
                event.preventDefault();
            }
        }
    ]);
    return Carousel;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
EventHandler.on(window, EVENT_LOAD_DATA_API$2, function() {
    var carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for(var i = 0, len = carousels.length; i < len; i++)Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */ defineJQueryPlugin(Carousel);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ var NAME$a = 'collapse';
var DATA_KEY$9 = 'bs.collapse';
var EVENT_KEY$9 = ".".concat(DATA_KEY$9);
var DATA_API_KEY$5 = '.data-api';
var Default$9 = {
    toggle: true,
    parent: null
};
var DefaultType$9 = {
    toggle: 'boolean',
    parent: '(null|element)'
};
var EVENT_SHOW$5 = "show".concat(EVENT_KEY$9);
var EVENT_SHOWN$5 = "shown".concat(EVENT_KEY$9);
var EVENT_HIDE$5 = "hide".concat(EVENT_KEY$9);
var EVENT_HIDDEN$5 = "hidden".concat(EVENT_KEY$9);
var EVENT_CLICK_DATA_API$4 = "click".concat(EVENT_KEY$9).concat(DATA_API_KEY$5);
var CLASS_NAME_SHOW$7 = 'show';
var CLASS_NAME_COLLAPSE = 'collapse';
var CLASS_NAME_COLLAPSING = 'collapsing';
var CLASS_NAME_COLLAPSED = 'collapsed';
var CLASS_NAME_DEEPER_CHILDREN = ":scope .".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE);
var CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
var WIDTH = 'width';
var HEIGHT = 'height';
var SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
var Collapse = /**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ /*#__PURE__*/ function(BaseComponent) {
    "use strict";
    _helpers.inherits(Collapse, BaseComponent);
    var _super = _helpers.createSuper(Collapse);
    function Collapse(element, config) {
        _helpers.classCallCheck(this, Collapse);
        var _this;
        _this = _super.call(this, element);
        _this._isTransitioning = false;
        _this._config = _this._getConfig(config);
        _this._triggerArray = [];
        var toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
        for(var i = 0, len = toggleList.length; i < len; i++){
            var elem = toggleList[i];
            var selector = getSelectorFromElement(elem);
            var filterElement = SelectorEngine.find(selector).filter(function(foundElem) {
                return foundElem === _this._element;
            });
            if (selector !== null && filterElement.length) {
                _this._selector = selector;
                _this._triggerArray.push(elem);
            }
        }
        _this._initializeChildren();
        if (!_this._config.parent) _this._addAriaAndCollapsedClass(_this._triggerArray, _this._isShown());
        if (_this._config.toggle) _this.toggle();
        return _this;
    }
    _helpers.createClass(Collapse, [
        {
            key: "toggle",
            value: function toggle() {
                if (this._isShown()) this.hide();
                else this.show();
            }
        },
        {
            key: "show",
            value: function show() {
                var _this = this;
                if (this._isTransitioning || this._isShown()) return;
                var actives = [];
                var activesData;
                if (this._config.parent) {
                    var children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
                    actives = SelectorEngine.find(SELECTOR_ACTIVES, this._config.parent).filter(function(elem) {
                        return !children.includes(elem);
                    }); // remove children if greater depth
                }
                var container = SelectorEngine.findOne(this._selector);
                if (actives.length) {
                    var tempActiveData = actives.find(function(elem) {
                        return container !== elem;
                    });
                    activesData = tempActiveData ? Collapse.getInstance(tempActiveData) : null;
                    if (activesData && activesData._isTransitioning) return;
                }
                var startEvent = EventHandler.trigger(this._element, EVENT_SHOW$5);
                if (startEvent.defaultPrevented) return;
                actives.forEach(function(elemActive) {
                    if (container !== elemActive) Collapse.getOrCreateInstance(elemActive, {
                        toggle: false
                    }).hide();
                    if (!activesData) Data.set(elemActive, DATA_KEY$9, null);
                });
                var dimension = this._getDimension();
                this._element.classList.remove(CLASS_NAME_COLLAPSE);
                this._element.classList.add(CLASS_NAME_COLLAPSING);
                this._element.style[dimension] = 0;
                this._addAriaAndCollapsedClass(this._triggerArray, true);
                this._isTransitioning = true;
                var complete = function() {
                    _this._isTransitioning = false;
                    _this._element.classList.remove(CLASS_NAME_COLLAPSING);
                    _this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
                    _this._element.style[dimension] = '';
                    EventHandler.trigger(_this._element, EVENT_SHOWN$5);
                };
                var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
                var scrollSize = "scroll".concat(capitalizedDimension);
                this._queueCallback(complete, this._element, true);
                this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
            }
        },
        {
            key: "hide",
            value: function hide() {
                var _this = this;
                if (this._isTransitioning || !this._isShown()) return;
                var startEvent = EventHandler.trigger(this._element, EVENT_HIDE$5);
                if (startEvent.defaultPrevented) return;
                var dimension = this._getDimension();
                this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
                reflow(this._element);
                this._element.classList.add(CLASS_NAME_COLLAPSING);
                this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
                var triggerArrayLength = this._triggerArray.length;
                for(var i = 0; i < triggerArrayLength; i++){
                    var trigger = this._triggerArray[i];
                    var elem = getElementFromSelector(trigger);
                    if (elem && !this._isShown(elem)) this._addAriaAndCollapsedClass([
                        trigger
                    ], false);
                }
                this._isTransitioning = true;
                var complete = function() {
                    _this._isTransitioning = false;
                    _this._element.classList.remove(CLASS_NAME_COLLAPSING);
                    _this._element.classList.add(CLASS_NAME_COLLAPSE);
                    EventHandler.trigger(_this._element, EVENT_HIDDEN$5);
                };
                this._element.style[dimension] = '';
                this._queueCallback(complete, this._element, true);
            }
        },
        {
            key: "_isShown",
            value: function _isShown() {
                var element = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._element;
                return element.classList.contains(CLASS_NAME_SHOW$7);
            } // Private
        },
        {
            key: "_getConfig",
            value: function _getConfig(config) {
                config = _helpers.objectSpread({
                }, Default$9, Manipulator.getDataAttributes(this._element), config);
                config.toggle = Boolean(config.toggle); // Coerce string values
                config.parent = getElement(config.parent);
                typeCheckConfig(NAME$a, config, DefaultType$9);
                return config;
            }
        },
        {
            key: "_getDimension",
            value: function _getDimension() {
                return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
            }
        },
        {
            key: "_initializeChildren",
            value: function _initializeChildren() {
                var _this = this;
                if (!this._config.parent) return;
                var children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
                SelectorEngine.find(SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(function(elem) {
                    return !children.includes(elem);
                }).forEach(function(element) {
                    var selected = getElementFromSelector(element);
                    if (selected) _this._addAriaAndCollapsedClass([
                        element
                    ], _this._isShown(selected));
                });
            }
        },
        {
            key: "_addAriaAndCollapsedClass",
            value: function _addAriaAndCollapsedClass(triggerArray, isOpen) {
                if (!triggerArray.length) return;
                triggerArray.forEach(function(elem) {
                    if (isOpen) elem.classList.remove(CLASS_NAME_COLLAPSED);
                    else elem.classList.add(CLASS_NAME_COLLAPSED);
                    elem.setAttribute('aria-expanded', isOpen);
                });
            } // Static
        }
    ], [
        {
            key: "Default",
            get: function get() {
                return Default$9;
            }
        },
        {
            key: "NAME",
            get: function get() {
                return NAME$a;
            } // Public
        },
        {
            key: "jQueryInterface",
            value: function jQueryInterface(config) {
                return this.each(function() {
                    var _config = {
                    };
                    if (typeof config === 'string' && /show|hide/.test(config)) _config.toggle = false;
                    var data = Collapse.getOrCreateInstance(this, _config);
                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') throw new TypeError("No method named \"".concat(config, "\""));
                        data[config]();
                    }
                });
            }
        }
    ]);
    return Collapse;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') event.preventDefault();
    var selector = getSelectorFromElement(this);
    var selectorElements = SelectorEngine.find(selector);
    selectorElements.forEach(function(element) {
        Collapse.getOrCreateInstance(element, {
            toggle: false
        }).toggle();
    });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Collapse to jQuery only if jQuery is present
 */ defineJQueryPlugin(Collapse);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ var NAME$9 = 'dropdown';
var DATA_KEY$8 = 'bs.dropdown';
var EVENT_KEY$8 = ".".concat(DATA_KEY$8);
var DATA_API_KEY$4 = '.data-api';
var ESCAPE_KEY$2 = 'Escape';
var SPACE_KEY = 'Space';
var TAB_KEY$1 = 'Tab';
var ARROW_UP_KEY = 'ArrowUp';
var ARROW_DOWN_KEY = 'ArrowDown';
var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
var REGEXP_KEYDOWN = new RegExp("".concat(ARROW_UP_KEY, "|").concat(ARROW_DOWN_KEY, "|").concat(ESCAPE_KEY$2));
var EVENT_HIDE$4 = "hide".concat(EVENT_KEY$8);
var EVENT_HIDDEN$4 = "hidden".concat(EVENT_KEY$8);
var EVENT_SHOW$4 = "show".concat(EVENT_KEY$8);
var EVENT_SHOWN$4 = "shown".concat(EVENT_KEY$8);
var EVENT_CLICK_DATA_API$3 = "click".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
var EVENT_KEYDOWN_DATA_API = "keydown".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
var EVENT_KEYUP_DATA_API = "keyup".concat(EVENT_KEY$8).concat(DATA_API_KEY$4);
var CLASS_NAME_SHOW$6 = 'show';
var CLASS_NAME_DROPUP = 'dropup';
var CLASS_NAME_DROPEND = 'dropend';
var CLASS_NAME_DROPSTART = 'dropstart';
var CLASS_NAME_NAVBAR = 'navbar';
var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
var SELECTOR_MENU = '.dropdown-menu';
var SELECTOR_NAVBAR_NAV = '.navbar-nav';
var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
var PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
var PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
var PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
var PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
var PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
var PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
var Default$8 = {
    offset: [
        0,
        2
    ],
    boundary: 'clippingParents',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null,
    autoClose: true
};
var DefaultType$8 = {
    offset: '(array|string|function)',
    boundary: '(string|element)',
    reference: '(string|element|object)',
    display: 'string',
    popperConfig: '(null|object|function)',
    autoClose: '(boolean|string)'
};
var Dropdown = /**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ /*#__PURE__*/ function(BaseComponent) {
    "use strict";
    _helpers.inherits(Dropdown, BaseComponent);
    var _super = _helpers.createSuper(Dropdown);
    function Dropdown(element, config) {
        _helpers.classCallCheck(this, Dropdown);
        var _this;
        _this = _super.call(this, element);
        _this._popper = null;
        _this._config = _this._getConfig(config);
        _this._menu = _this._getMenuElement();
        _this._inNavbar = _this._detectNavbar();
        return _this;
    }
    _helpers.createClass(Dropdown, [
        {
            key: "toggle",
            value: function toggle() {
                return this._isShown() ? this.hide() : this.show();
            }
        },
        {
            key: "show",
            value: function show() {
                var _instance;
                if (isDisabled(this._element) || this._isShown(this._menu)) return;
                var relatedTarget = {
                    relatedTarget: this._element
                };
                var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, relatedTarget);
                if (showEvent.defaultPrevented) return;
                var parent = Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar
                if (this._inNavbar) Manipulator.setDataAttribute(this._menu, 'popper', 'none');
                else this._createPopper(parent);
                 // If this is a touch-enabled device we add extra
                // empty mouseover listeners to the body's immediate children;
                // only needed because of broken event delegation on iOS
                // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
                if ('ontouchstart' in document.documentElement && !parent.closest(SELECTOR_NAVBAR_NAV)) (_instance = []).concat.apply(_instance, _helpers.toConsumableArray(document.body.children)).forEach(function(elem) {
                    return EventHandler.on(elem, 'mouseover', noop);
                });
                this._element.focus();
                this._element.setAttribute('aria-expanded', true);
                this._menu.classList.add(CLASS_NAME_SHOW$6);
                this._element.classList.add(CLASS_NAME_SHOW$6);
                EventHandler.trigger(this._element, EVENT_SHOWN$4, relatedTarget);
            }
        },
        {
            key: "hide",
            value: function hide() {
                if (isDisabled(this._element) || !this._isShown(this._menu)) return;
                var relatedTarget = {
                    relatedTarget: this._element
                };
                this._completeHide(relatedTarget);
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                if (this._popper) this._popper.destroy();
                _helpers.get(_helpers.getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
            }
        },
        {
            key: "update",
            value: function update() {
                this._inNavbar = this._detectNavbar();
                if (this._popper) this._popper.update();
            } // Private
        },
        {
            key: "_completeHide",
            value: function _completeHide(relatedTarget) {
                var _instance;
                var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4, relatedTarget);
                if (hideEvent.defaultPrevented) return;
                 // If this is a touch-enabled device we remove the extra
                // empty mouseover listeners we added for iOS support
                if ('ontouchstart' in document.documentElement) (_instance = []).concat.apply(_instance, _helpers.toConsumableArray(document.body.children)).forEach(function(elem) {
                    return EventHandler.off(elem, 'mouseover', noop);
                });
                if (this._popper) this._popper.destroy();
                this._menu.classList.remove(CLASS_NAME_SHOW$6);
                this._element.classList.remove(CLASS_NAME_SHOW$6);
                this._element.setAttribute('aria-expanded', 'false');
                Manipulator.removeDataAttribute(this._menu, 'popper');
                EventHandler.trigger(this._element, EVENT_HIDDEN$4, relatedTarget);
            }
        },
        {
            key: "_getConfig",
            value: function _getConfig(config) {
                config = _helpers.objectSpread({
                }, this.constructor.Default, Manipulator.getDataAttributes(this._element), config);
                typeCheckConfig(NAME$9, config, this.constructor.DefaultType);
                if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') // Popper virtual elements require a getBoundingClientRect method
                throw new TypeError("".concat(NAME$9.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
                return config;
            }
        },
        {
            key: "_createPopper",
            value: function _createPopper(parent) {
                if (typeof _core === 'undefined') throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
                var referenceElement = this._element;
                if (this._config.reference === 'parent') referenceElement = parent;
                else if (isElement(this._config.reference)) referenceElement = getElement(this._config.reference);
                else if (typeof this._config.reference === 'object') referenceElement = this._config.reference;
                var popperConfig = this._getPopperConfig();
                var isDisplayStatic = popperConfig.modifiers.find(function(modifier) {
                    return modifier.name === 'applyStyles' && modifier.enabled === false;
                });
                this._popper = _core.createPopper(referenceElement, this._menu, popperConfig);
                if (isDisplayStatic) Manipulator.setDataAttribute(this._menu, 'popper', 'static');
            }
        },
        {
            key: "_isShown",
            value: function _isShown() {
                var element = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._element;
                return element.classList.contains(CLASS_NAME_SHOW$6);
            }
        },
        {
            key: "_getMenuElement",
            value: function _getMenuElement() {
                return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
            }
        },
        {
            key: "_getPlacement",
            value: function _getPlacement() {
                var parentDropdown = this._element.parentNode;
                if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) return PLACEMENT_RIGHT;
                if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) return PLACEMENT_LEFT;
                 // We need to trim the value because custom properties can also include spaces
                var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
                if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
                return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
            }
        },
        {
            key: "_detectNavbar",
            value: function _detectNavbar() {
                return this._element.closest(".".concat(CLASS_NAME_NAVBAR)) !== null;
            }
        },
        {
            key: "_getOffset",
            value: function _getOffset() {
                var _this = this;
                var offset = this._config.offset;
                if (typeof offset === 'string') return offset.split(',').map(function(val) {
                    return Number.parseInt(val, 10);
                });
                if (typeof offset === 'function') return function(popperData) {
                    return offset(popperData, _this._element);
                };
                return offset;
            }
        },
        {
            key: "_getPopperConfig",
            value: function _getPopperConfig() {
                var defaultBsPopperConfig = {
                    placement: this._getPlacement(),
                    modifiers: [
                        {
                            name: 'preventOverflow',
                            options: {
                                boundary: this._config.boundary
                            }
                        },
                        {
                            name: 'offset',
                            options: {
                                offset: this._getOffset()
                            }
                        }
                    ]
                }; // Disable Popper if we have a static display
                if (this._config.display === 'static') defaultBsPopperConfig.modifiers = [
                    {
                        name: 'applyStyles',
                        enabled: false
                    }
                ];
                return _helpers.objectSpread({
                }, defaultBsPopperConfig, typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
            }
        },
        {
            key: "_selectMenuItem",
            value: function _selectMenuItem(param) {
                var key = param.key, target = param.target;
                var items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);
                if (!items.length) return;
                 // if target isn't included in items (e.g. when expanding the dropdown)
                // allow cycling to get the last item in case key equals ARROW_UP_KEY
                getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
            } // Static
        }
    ], [
        {
            key: "Default",
            get: function get() {
                return Default$8;
            }
        },
        {
            key: "DefaultType",
            get: function get() {
                return DefaultType$8;
            }
        },
        {
            key: "NAME",
            get: function get() {
                return NAME$9;
            } // Public
        },
        {
            key: "jQueryInterface",
            value: function jQueryInterface(config) {
                return this.each(function() {
                    var data = Dropdown.getOrCreateInstance(this, config);
                    if (typeof config !== 'string') return;
                    if (typeof data[config] === 'undefined') throw new TypeError("No method named \"".concat(config, "\""));
                    data[config]();
                });
            }
        },
        {
            key: "clearMenus",
            value: function clearMenus(event) {
                if (event && (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1)) return;
                var toggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);
                for(var i = 0, len = toggles.length; i < len; i++){
                    var context = Dropdown.getInstance(toggles[i]);
                    if (!context || context._config.autoClose === false) continue;
                    if (!context._isShown()) continue;
                    var relatedTarget = {
                        relatedTarget: context._element
                    };
                    if (event) {
                        var composedPath = event.composedPath();
                        var isMenuTarget = composedPath.includes(context._menu);
                        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) continue;
                         // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
                        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) continue;
                        if (event.type === 'click') relatedTarget.clickEvent = event;
                    }
                    context._completeHide(relatedTarget);
                }
            }
        },
        {
            key: "getParentFromElement",
            value: function getParentFromElement(element) {
                return getElementFromSelector(element) || element.parentNode;
            }
        },
        {
            key: "dataApiKeydownHandler",
            value: function dataApiKeydownHandler(event) {
                // If not input/textarea:
                //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
                // If input/textarea:
                //  - If space key => not a dropdown command
                //  - If key is other than escape
                //    - If key is not up or down => not a dropdown command
                //    - If trigger inside the menu => not a dropdown command
                if (/input|textarea/i.test(event.target.tagName) ? event.key === SPACE_KEY || event.key !== ESCAPE_KEY$2 && (event.key !== ARROW_DOWN_KEY && event.key !== ARROW_UP_KEY || event.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(event.key)) return;
                var isActive = this.classList.contains(CLASS_NAME_SHOW$6);
                if (!isActive && event.key === ESCAPE_KEY$2) return;
                event.preventDefault();
                event.stopPropagation();
                if (isDisabled(this)) return;
                var getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0];
                var instance = Dropdown.getOrCreateInstance(getToggleButton);
                if (event.key === ESCAPE_KEY$2) {
                    instance.hide();
                    return;
                }
                if (event.key === ARROW_UP_KEY || event.key === ARROW_DOWN_KEY) {
                    if (!isActive) instance.show();
                    instance._selectMenuItem(event);
                    return;
                }
                if (!isActive || event.key === SPACE_KEY) Dropdown.clearMenus();
            }
        }
    ]);
    return Dropdown;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Dropdown to jQuery only if jQuery is present
 */ defineJQueryPlugin(Dropdown);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
var SELECTOR_STICKY_CONTENT = '.sticky-top';
var ScrollBarHelper = /*#__PURE__*/ function() {
    "use strict";
    function ScrollBarHelper() {
        _helpers.classCallCheck(this, ScrollBarHelper);
        this._element = document.body;
    }
    _helpers.createClass(ScrollBarHelper, [
        {
            key: "getWidth",
            value: function getWidth() {
                // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
                var documentWidth = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - documentWidth);
            }
        },
        {
            key: "hide",
            value: function hide() {
                var width = this.getWidth();
                this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width
                this._setElementAttributes(this._element, 'paddingRight', function(calculatedValue) {
                    return calculatedValue + width;
                }); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
                this._setElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight', function(calculatedValue) {
                    return calculatedValue + width;
                });
                this._setElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight', function(calculatedValue) {
                    return calculatedValue - width;
                });
            }
        },
        {
            key: "_disableOverFlow",
            value: function _disableOverFlow() {
                this._saveInitialAttribute(this._element, 'overflow');
                this._element.style.overflow = 'hidden';
            }
        },
        {
            key: "_setElementAttributes",
            value: function _setElementAttributes(selector, styleProp, callback) {
                var _this = this;
                var scrollbarWidth = this.getWidth();
                var manipulationCallBack = function(element) {
                    if (element !== _this._element && window.innerWidth > element.clientWidth + scrollbarWidth) return;
                    _this._saveInitialAttribute(element, styleProp);
                    var calculatedValue = window.getComputedStyle(element)[styleProp];
                    element.style[styleProp] = "".concat(callback(Number.parseFloat(calculatedValue)), "px");
                };
                this._applyManipulationCallback(selector, manipulationCallBack);
            }
        },
        {
            key: "reset",
            value: function reset() {
                this._resetElementAttributes(this._element, 'overflow');
                this._resetElementAttributes(this._element, 'paddingRight');
                this._resetElementAttributes(SELECTOR_FIXED_CONTENT, 'paddingRight');
                this._resetElementAttributes(SELECTOR_STICKY_CONTENT, 'marginRight');
            }
        },
        {
            key: "_saveInitialAttribute",
            value: function _saveInitialAttribute(element, styleProp) {
                var actualValue = element.style[styleProp];
                if (actualValue) Manipulator.setDataAttribute(element, styleProp, actualValue);
            }
        },
        {
            key: "_resetElementAttributes",
            value: function _resetElementAttributes(selector, styleProp) {
                var manipulationCallBack = function(element) {
                    var value = Manipulator.getDataAttribute(element, styleProp);
                    if (typeof value === 'undefined') element.style.removeProperty(styleProp);
                    else {
                        Manipulator.removeDataAttribute(element, styleProp);
                        element.style[styleProp] = value;
                    }
                };
                this._applyManipulationCallback(selector, manipulationCallBack);
            }
        },
        {
            key: "_applyManipulationCallback",
            value: function _applyManipulationCallback(selector, callBack) {
                if (isElement(selector)) callBack(selector);
                else SelectorEngine.find(selector, this._element).forEach(callBack);
            }
        },
        {
            key: "isOverflowing",
            value: function isOverflowing() {
                return this.getWidth() > 0;
            }
        }
    ]);
    return ScrollBarHelper;
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ var Default$7 = {
    className: 'modal-backdrop',
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    isAnimated: false,
    rootElement: 'body',
    // give the choice to place backdrop under different elements
    clickCallback: null
};
var DefaultType$7 = {
    className: 'string',
    isVisible: 'boolean',
    isAnimated: 'boolean',
    rootElement: '(element|string)',
    clickCallback: '(function|null)'
};
var NAME$8 = 'backdrop';
var CLASS_NAME_FADE$4 = 'fade';
var CLASS_NAME_SHOW$5 = 'show';
var EVENT_MOUSEDOWN = "mousedown.bs.".concat(NAME$8);
var Backdrop = /*#__PURE__*/ function() {
    "use strict";
    function Backdrop(config) {
        _helpers.classCallCheck(this, Backdrop);
        this._config = this._getConfig(config);
        this._isAppended = false;
        this._element = null;
    }
    _helpers.createClass(Backdrop, [
        {
            key: "show",
            value: function show(callback) {
                if (!this._config.isVisible) {
                    execute(callback);
                    return;
                }
                this._append();
                if (this._config.isAnimated) reflow(this._getElement());
                this._getElement().classList.add(CLASS_NAME_SHOW$5);
                this._emulateAnimation(function() {
                    execute(callback);
                });
            }
        },
        {
            key: "hide",
            value: function hide(callback) {
                var _this = this;
                if (!this._config.isVisible) {
                    execute(callback);
                    return;
                }
                this._getElement().classList.remove(CLASS_NAME_SHOW$5);
                this._emulateAnimation(function() {
                    _this.dispose();
                    execute(callback);
                });
            } // Private
        },
        {
            key: "_getElement",
            value: function _getElement() {
                if (!this._element) {
                    var backdrop = document.createElement('div');
                    backdrop.className = this._config.className;
                    if (this._config.isAnimated) backdrop.classList.add(CLASS_NAME_FADE$4);
                    this._element = backdrop;
                }
                return this._element;
            }
        },
        {
            key: "_getConfig",
            value: function _getConfig(config) {
                config = _helpers.objectSpread({
                }, Default$7, typeof config === 'object' ? config : {
                }); // use getElement() with the default "body" to get a fresh Element on each instantiation
                config.rootElement = getElement(config.rootElement);
                typeCheckConfig(NAME$8, config, DefaultType$7);
                return config;
            }
        },
        {
            key: "_append",
            value: function _append() {
                var _this = this;
                if (this._isAppended) return;
                this._config.rootElement.append(this._getElement());
                EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, function() {
                    execute(_this._config.clickCallback);
                });
                this._isAppended = true;
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                if (!this._isAppended) return;
                EventHandler.off(this._element, EVENT_MOUSEDOWN);
                this._element.remove();
                this._isAppended = false;
            }
        },
        {
            key: "_emulateAnimation",
            value: function _emulateAnimation(callback) {
                executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
            }
        }
    ]);
    return Backdrop;
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ var Default$6 = {
    trapElement: null,
    // The element to trap focus inside of
    autofocus: true
};
var DefaultType$6 = {
    trapElement: 'element',
    autofocus: 'boolean'
};
var NAME$7 = 'focustrap';
var DATA_KEY$7 = 'bs.focustrap';
var EVENT_KEY$7 = ".".concat(DATA_KEY$7);
var EVENT_FOCUSIN$1 = "focusin".concat(EVENT_KEY$7);
var EVENT_KEYDOWN_TAB = "keydown.tab".concat(EVENT_KEY$7);
var TAB_KEY = 'Tab';
var TAB_NAV_FORWARD = 'forward';
var TAB_NAV_BACKWARD = 'backward';
var FocusTrap = /*#__PURE__*/ function() {
    "use strict";
    function FocusTrap(config) {
        _helpers.classCallCheck(this, FocusTrap);
        this._config = this._getConfig(config);
        this._isActive = false;
        this._lastTabNavDirection = null;
    }
    _helpers.createClass(FocusTrap, [
        {
            key: "activate",
            value: function activate() {
                var _this = this;
                var __config = this._config, trapElement = __config.trapElement, autofocus = __config.autofocus;
                if (this._isActive) return;
                if (autofocus) trapElement.focus();
                EventHandler.off(document, EVENT_KEY$7); // guard against infinite focus loop
                EventHandler.on(document, EVENT_FOCUSIN$1, function(event) {
                    return _this._handleFocusin(event);
                });
                EventHandler.on(document, EVENT_KEYDOWN_TAB, function(event) {
                    return _this._handleKeydown(event);
                });
                this._isActive = true;
            }
        },
        {
            key: "deactivate",
            value: function deactivate() {
                if (!this._isActive) return;
                this._isActive = false;
                EventHandler.off(document, EVENT_KEY$7);
            } // Private
        },
        {
            key: "_handleFocusin",
            value: function _handleFocusin(event) {
                var target = event.target;
                var trapElement = this._config.trapElement;
                if (target === document || target === trapElement || trapElement.contains(target)) return;
                var elements = SelectorEngine.focusableChildren(trapElement);
                if (elements.length === 0) trapElement.focus();
                else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) elements[elements.length - 1].focus();
                else elements[0].focus();
            }
        },
        {
            key: "_handleKeydown",
            value: function _handleKeydown(event) {
                if (event.key !== TAB_KEY) return;
                this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
            }
        },
        {
            key: "_getConfig",
            value: function _getConfig(config) {
                config = _helpers.objectSpread({
                }, Default$6, typeof config === 'object' ? config : {
                });
                typeCheckConfig(NAME$7, config, DefaultType$6);
                return config;
            }
        }
    ]);
    return FocusTrap;
}();
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ var NAME$6 = 'modal';
var DATA_KEY$6 = 'bs.modal';
var EVENT_KEY$6 = ".".concat(DATA_KEY$6);
var DATA_API_KEY$3 = '.data-api';
var ESCAPE_KEY$1 = 'Escape';
var Default$5 = {
    backdrop: true,
    keyboard: true,
    focus: true
};
var DefaultType$5 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean'
};
var EVENT_HIDE$3 = "hide".concat(EVENT_KEY$6);
var EVENT_HIDE_PREVENTED = "hidePrevented".concat(EVENT_KEY$6);
var EVENT_HIDDEN$3 = "hidden".concat(EVENT_KEY$6);
var EVENT_SHOW$3 = "show".concat(EVENT_KEY$6);
var EVENT_SHOWN$3 = "shown".concat(EVENT_KEY$6);
var EVENT_RESIZE = "resize".concat(EVENT_KEY$6);
var EVENT_CLICK_DISMISS = "click.dismiss".concat(EVENT_KEY$6);
var EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss".concat(EVENT_KEY$6);
var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss".concat(EVENT_KEY$6);
var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss".concat(EVENT_KEY$6);
var EVENT_CLICK_DATA_API$2 = "click".concat(EVENT_KEY$6).concat(DATA_API_KEY$3);
var CLASS_NAME_OPEN = 'modal-open';
var CLASS_NAME_FADE$3 = 'fade';
var CLASS_NAME_SHOW$4 = 'show';
var CLASS_NAME_STATIC = 'modal-static';
var OPEN_SELECTOR$1 = '.modal.show';
var SELECTOR_DIALOG = '.modal-dialog';
var SELECTOR_MODAL_BODY = '.modal-body';
var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
var Modal = /**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ /*#__PURE__*/ function(BaseComponent) {
    "use strict";
    _helpers.inherits(Modal, BaseComponent);
    var _super = _helpers.createSuper(Modal);
    function Modal(element, config) {
        _helpers.classCallCheck(this, Modal);
        var _this;
        _this = _super.call(this, element);
        _this._config = _this._getConfig(config);
        _this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, _this._element);
        _this._backdrop = _this._initializeBackDrop();
        _this._focustrap = _this._initializeFocusTrap();
        _this._isShown = false;
        _this._ignoreBackdropClick = false;
        _this._isTransitioning = false;
        _this._scrollBar = new ScrollBarHelper();
        return _this;
    }
    _helpers.createClass(Modal, [
        {
            key: "toggle",
            value: function toggle(relatedTarget) {
                return this._isShown ? this.hide() : this.show(relatedTarget);
            }
        },
        {
            key: "show",
            value: function show(relatedTarget) {
                var _this = this;
                if (this._isShown || this._isTransitioning) return;
                var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
                    relatedTarget: relatedTarget
                });
                if (showEvent.defaultPrevented) return;
                this._isShown = true;
                if (this._isAnimated()) this._isTransitioning = true;
                this._scrollBar.hide();
                document.body.classList.add(CLASS_NAME_OPEN);
                this._adjustDialog();
                this._setEscapeEvent();
                this._setResizeEvent();
                EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function() {
                    var _this4 = _this;
                    EventHandler.one(_this._element, EVENT_MOUSEUP_DISMISS, function(event) {
                        if (event.target === _this4._element) _this4._ignoreBackdropClick = true;
                    });
                });
                this._showBackdrop(function() {
                    return _this._showElement(relatedTarget);
                });
            }
        },
        {
            key: "hide",
            value: function hide() {
                var _this = this;
                if (!this._isShown || this._isTransitioning) return;
                var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
                if (hideEvent.defaultPrevented) return;
                this._isShown = false;
                var isAnimated = this._isAnimated();
                if (isAnimated) this._isTransitioning = true;
                this._setEscapeEvent();
                this._setResizeEvent();
                this._focustrap.deactivate();
                this._element.classList.remove(CLASS_NAME_SHOW$4);
                EventHandler.off(this._element, EVENT_CLICK_DISMISS);
                EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS);
                this._queueCallback(function() {
                    return _this._hideModal();
                }, this._element, isAnimated);
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                [
                    window,
                    this._dialog
                ].forEach(function(htmlElement) {
                    return EventHandler.off(htmlElement, EVENT_KEY$6);
                });
                this._backdrop.dispose();
                this._focustrap.deactivate();
                _helpers.get(_helpers.getPrototypeOf(Modal.prototype), "dispose", this).call(this);
            }
        },
        {
            key: "handleUpdate",
            value: function handleUpdate() {
                this._adjustDialog();
            } // Private
        },
        {
            key: "_initializeBackDrop",
            value: function _initializeBackDrop() {
                return new Backdrop({
                    isVisible: Boolean(this._config.backdrop),
                    // 'static' option will be translated to true, and booleans will keep their value
                    isAnimated: this._isAnimated()
                });
            }
        },
        {
            key: "_initializeFocusTrap",
            value: function _initializeFocusTrap() {
                return new FocusTrap({
                    trapElement: this._element
                });
            }
        },
        {
            key: "_getConfig",
            value: function _getConfig(config) {
                config = _helpers.objectSpread({
                }, Default$5, Manipulator.getDataAttributes(this._element), typeof config === 'object' ? config : {
                });
                typeCheckConfig(NAME$6, config, DefaultType$5);
                return config;
            }
        },
        {
            key: "_showElement",
            value: function _showElement(relatedTarget) {
                var _this = this;
                var isAnimated = this._isAnimated();
                var modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
                if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) // Don't move modal's DOM position
                document.body.append(this._element);
                this._element.style.display = 'block';
                this._element.removeAttribute('aria-hidden');
                this._element.setAttribute('aria-modal', true);
                this._element.setAttribute('role', 'dialog');
                this._element.scrollTop = 0;
                if (modalBody) modalBody.scrollTop = 0;
                if (isAnimated) reflow(this._element);
                this._element.classList.add(CLASS_NAME_SHOW$4);
                var transitionComplete = function() {
                    if (_this._config.focus) _this._focustrap.activate();
                    _this._isTransitioning = false;
                    EventHandler.trigger(_this._element, EVENT_SHOWN$3, {
                        relatedTarget: relatedTarget
                    });
                };
                this._queueCallback(transitionComplete, this._dialog, isAnimated);
            }
        },
        {
            key: "_setEscapeEvent",
            value: function _setEscapeEvent() {
                var _this = this;
                if (this._isShown) EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, function(event) {
                    if (_this._config.keyboard && event.key === ESCAPE_KEY$1) {
                        event.preventDefault();
                        _this.hide();
                    } else if (!_this._config.keyboard && event.key === ESCAPE_KEY$1) _this._triggerBackdropTransition();
                });
                else EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
            }
        },
        {
            key: "_setResizeEvent",
            value: function _setResizeEvent() {
                var _this = this;
                if (this._isShown) EventHandler.on(window, EVENT_RESIZE, function() {
                    return _this._adjustDialog();
                });
                else EventHandler.off(window, EVENT_RESIZE);
            }
        },
        {
            key: "_hideModal",
            value: function _hideModal() {
                var _this = this;
                this._element.style.display = 'none';
                this._element.setAttribute('aria-hidden', true);
                this._element.removeAttribute('aria-modal');
                this._element.removeAttribute('role');
                this._isTransitioning = false;
                this._backdrop.hide(function() {
                    document.body.classList.remove(CLASS_NAME_OPEN);
                    _this._resetAdjustments();
                    _this._scrollBar.reset();
                    EventHandler.trigger(_this._element, EVENT_HIDDEN$3);
                });
            }
        },
        {
            key: "_showBackdrop",
            value: function _showBackdrop(callback) {
                var _this = this;
                EventHandler.on(this._element, EVENT_CLICK_DISMISS, function(event) {
                    if (_this._ignoreBackdropClick) {
                        _this._ignoreBackdropClick = false;
                        return;
                    }
                    if (event.target !== event.currentTarget) return;
                    if (_this._config.backdrop === true) _this.hide();
                    else if (_this._config.backdrop === 'static') _this._triggerBackdropTransition();
                });
                this._backdrop.show(callback);
            }
        },
        {
            key: "_isAnimated",
            value: function _isAnimated() {
                return this._element.classList.contains(CLASS_NAME_FADE$3);
            }
        },
        {
            key: "_triggerBackdropTransition",
            value: function _triggerBackdropTransition() {
                var _this = this;
                var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
                if (hideEvent.defaultPrevented) return;
                var __element = this._element, classList = __element.classList, scrollHeight = __element.scrollHeight, style = __element.style;
                var isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed
                if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains(CLASS_NAME_STATIC)) return;
                if (!isModalOverflowing) style.overflowY = 'hidden';
                classList.add(CLASS_NAME_STATIC);
                this._queueCallback(function() {
                    classList.remove(CLASS_NAME_STATIC);
                    if (!isModalOverflowing) _this._queueCallback(function() {
                        style.overflowY = '';
                    }, _this._dialog);
                }, this._dialog);
                this._element.focus();
            } // ----------------------------------------------------------------------
        },
        {
            // the following methods are used to handle overflowing modals
            // ----------------------------------------------------------------------
            key: "_adjustDialog",
            value: function _adjustDialog() {
                var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
                var scrollbarWidth = this._scrollBar.getWidth();
                var isBodyOverflowing = scrollbarWidth > 0;
                if (!isBodyOverflowing && isModalOverflowing && !isRTL() || isBodyOverflowing && !isModalOverflowing && isRTL()) this._element.style.paddingLeft = "".concat(scrollbarWidth, "px");
                if (isBodyOverflowing && !isModalOverflowing && !isRTL() || !isBodyOverflowing && isModalOverflowing && isRTL()) this._element.style.paddingRight = "".concat(scrollbarWidth, "px");
            }
        },
        {
            key: "_resetAdjustments",
            value: function _resetAdjustments() {
                this._element.style.paddingLeft = '';
                this._element.style.paddingRight = '';
            } // Static
        }
    ], [
        {
            key: "Default",
            get: function get() {
                return Default$5;
            }
        },
        {
            key: "NAME",
            get: function get() {
                return NAME$6;
            } // Public
        },
        {
            key: "jQueryInterface",
            value: function jQueryInterface(config, relatedTarget) {
                return this.each(function() {
                    var data = Modal.getOrCreateInstance(this, config);
                    if (typeof config !== 'string') return;
                    if (typeof data[config] === 'undefined') throw new TypeError("No method named \"".concat(config, "\""));
                    data[config](relatedTarget);
                });
            }
        }
    ]);
    return Modal;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
    var _this = this;
    var target = getElementFromSelector(this);
    if ([
        'A',
        'AREA'
    ].includes(this.tagName)) event.preventDefault();
    EventHandler.one(target, EVENT_SHOW$3, function(showEvent) {
        var _this5 = _this;
        if (showEvent.defaultPrevented) // only register focus restorer if modal will actually get shown
        return;
        EventHandler.one(target, EVENT_HIDDEN$3, function() {
            if (isVisible(_this5)) _this5.focus();
        });
    }); // avoid conflict when clicking moddal toggler while another one is open
    var allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (allReadyOpen) Modal.getInstance(allReadyOpen).hide();
    var data = Modal.getOrCreateInstance(target);
    data.toggle(this);
});
enableDismissTrigger(Modal);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Modal to jQuery only if jQuery is present
 */ defineJQueryPlugin(Modal);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ var NAME$5 = 'offcanvas';
var DATA_KEY$5 = 'bs.offcanvas';
var EVENT_KEY$5 = ".".concat(DATA_KEY$5);
var DATA_API_KEY$2 = '.data-api';
var EVENT_LOAD_DATA_API$1 = "load".concat(EVENT_KEY$5).concat(DATA_API_KEY$2);
var ESCAPE_KEY = 'Escape';
var Default$4 = {
    backdrop: true,
    keyboard: true,
    scroll: false
};
var DefaultType$4 = {
    backdrop: 'boolean',
    keyboard: 'boolean',
    scroll: 'boolean'
};
var CLASS_NAME_SHOW$3 = 'show';
var CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
var OPEN_SELECTOR = '.offcanvas.show';
var EVENT_SHOW$2 = "show".concat(EVENT_KEY$5);
var EVENT_SHOWN$2 = "shown".concat(EVENT_KEY$5);
var EVENT_HIDE$2 = "hide".concat(EVENT_KEY$5);
var EVENT_HIDDEN$2 = "hidden".concat(EVENT_KEY$5);
var EVENT_CLICK_DATA_API$1 = "click".concat(EVENT_KEY$5).concat(DATA_API_KEY$2);
var EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(EVENT_KEY$5);
var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
var Offcanvas = /**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ /*#__PURE__*/ function(BaseComponent) {
    "use strict";
    _helpers.inherits(Offcanvas, BaseComponent);
    var _super = _helpers.createSuper(Offcanvas);
    function Offcanvas(element, config) {
        _helpers.classCallCheck(this, Offcanvas);
        var _this;
        _this = _super.call(this, element);
        _this._config = _this._getConfig(config);
        _this._isShown = false;
        _this._backdrop = _this._initializeBackDrop();
        _this._focustrap = _this._initializeFocusTrap();
        _this._addEventListeners();
        return _this;
    }
    _helpers.createClass(Offcanvas, [
        {
            key: "toggle",
            value: function toggle(relatedTarget) {
                return this._isShown ? this.hide() : this.show(relatedTarget);
            }
        },
        {
            key: "show",
            value: function show(relatedTarget) {
                var _this = this;
                if (this._isShown) return;
                var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$2, {
                    relatedTarget: relatedTarget
                });
                if (showEvent.defaultPrevented) return;
                this._isShown = true;
                this._element.style.visibility = 'visible';
                this._backdrop.show();
                if (!this._config.scroll) new ScrollBarHelper().hide();
                this._element.removeAttribute('aria-hidden');
                this._element.setAttribute('aria-modal', true);
                this._element.setAttribute('role', 'dialog');
                this._element.classList.add(CLASS_NAME_SHOW$3);
                var completeCallBack = function() {
                    if (!_this._config.scroll) _this._focustrap.activate();
                    EventHandler.trigger(_this._element, EVENT_SHOWN$2, {
                        relatedTarget: relatedTarget
                    });
                };
                this._queueCallback(completeCallBack, this._element, true);
            }
        },
        {
            key: "hide",
            value: function hide() {
                var _this = this;
                if (!this._isShown) return;
                var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$2);
                if (hideEvent.defaultPrevented) return;
                this._focustrap.deactivate();
                this._element.blur();
                this._isShown = false;
                this._element.classList.remove(CLASS_NAME_SHOW$3);
                this._backdrop.hide();
                var completeCallback = function() {
                    _this._element.setAttribute('aria-hidden', true);
                    _this._element.removeAttribute('aria-modal');
                    _this._element.removeAttribute('role');
                    _this._element.style.visibility = 'hidden';
                    if (!_this._config.scroll) new ScrollBarHelper().reset();
                    EventHandler.trigger(_this._element, EVENT_HIDDEN$2);
                };
                this._queueCallback(completeCallback, this._element, true);
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                this._backdrop.dispose();
                this._focustrap.deactivate();
                _helpers.get(_helpers.getPrototypeOf(Offcanvas.prototype), "dispose", this).call(this);
            } // Private
        },
        {
            key: "_getConfig",
            value: function _getConfig(config) {
                config = _helpers.objectSpread({
                }, Default$4, Manipulator.getDataAttributes(this._element), typeof config === 'object' ? config : {
                });
                typeCheckConfig(NAME$5, config, DefaultType$4);
                return config;
            }
        },
        {
            key: "_initializeBackDrop",
            value: function _initializeBackDrop() {
                var _this = this;
                return new Backdrop({
                    className: CLASS_NAME_BACKDROP,
                    isVisible: this._config.backdrop,
                    isAnimated: true,
                    rootElement: this._element.parentNode,
                    clickCallback: function() {
                        return _this.hide();
                    }
                });
            }
        },
        {
            key: "_initializeFocusTrap",
            value: function _initializeFocusTrap() {
                return new FocusTrap({
                    trapElement: this._element
                });
            }
        },
        {
            key: "_addEventListeners",
            value: function _addEventListeners() {
                var _this = this;
                EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function(event) {
                    if (_this._config.keyboard && event.key === ESCAPE_KEY) _this.hide();
                });
            } // Static
        }
    ], [
        {
            key: "NAME",
            get: function get() {
                return NAME$5;
            }
        },
        {
            key: "Default",
            get: function get() {
                return Default$4;
            } // Public
        },
        {
            key: "jQueryInterface",
            value: function jQueryInterface(config) {
                return this.each(function() {
                    var data = Offcanvas.getOrCreateInstance(this, config);
                    if (typeof config !== 'string') return;
                    if (data[config] === undefined || config.startsWith('_') || config === 'constructor') throw new TypeError("No method named \"".concat(config, "\""));
                    data[config](this);
                });
            }
        }
    ]);
    return Offcanvas;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
    var _this = this;
    var target = getElementFromSelector(this);
    if ([
        'A',
        'AREA'
    ].includes(this.tagName)) event.preventDefault();
    if (isDisabled(this)) return;
    EventHandler.one(target, EVENT_HIDDEN$2, function() {
        // focus on trigger when it is closed
        if (isVisible(_this)) _this.focus();
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open
    var allReadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (allReadyOpen && allReadyOpen !== target) Offcanvas.getInstance(allReadyOpen).hide();
    var data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$1, function() {
    return SelectorEngine.find(OPEN_SELECTOR).forEach(function(el) {
        return Offcanvas.getOrCreateInstance(el).show();
    });
});
enableDismissTrigger(Offcanvas);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */ defineJQueryPlugin(Offcanvas);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ var uriAttributes = new Set([
    'background',
    'cite',
    'href',
    'itemtype',
    'longdesc',
    'poster',
    'src',
    'xlink:href'
]);
var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */ var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */ var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
var allowedAttribute = function(attribute, allowedAttributeList) {
    var attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
        if (uriAttributes.has(attributeName)) return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
        return true;
    }
    var regExp = allowedAttributeList.filter(function(attributeRegex) {
        return attributeRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.
    for(var i = 0, len = regExp.length; i < len; i++){
        if (regExp[i].test(attributeName)) return true;
    }
    return false;
};
var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': [
        'class',
        'dir',
        'id',
        'lang',
        'role',
        ARIA_ATTRIBUTE_PATTERN
    ],
    a: [
        'target',
        'href',
        'title',
        'rel'
    ],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: [
        'src',
        'srcset',
        'alt',
        'title',
        'width',
        'height'
    ],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
    var _loop = function(i, len) {
        var _instance;
        var element = elements[i];
        var elementName = element.nodeName.toLowerCase();
        if (!Object.keys(allowList).includes(elementName)) {
            element.remove();
            return "continue";
        }
        var attributeList = (_instance = []).concat.apply(_instance, _helpers.toConsumableArray(element.attributes));
        var allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
        attributeList.forEach(function(attribute) {
            if (!allowedAttribute(attribute, allowedAttributes)) element.removeAttribute(attribute.nodeName);
        });
    };
    var _instance1;
    if (!unsafeHtml.length) return unsafeHtml;
    if (sanitizeFn && typeof sanitizeFn === 'function') return sanitizeFn(unsafeHtml);
    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var elements = (_instance1 = []).concat.apply(_instance1, _helpers.toConsumableArray(createdDocument.body.querySelectorAll('*')));
    for(var i = 0, len = elements.length; i < len; i++){
        var _ret = _loop(i, len);
        if (_ret === "continue") continue;
    }
    return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ var NAME$4 = 'tooltip';
var DATA_KEY$4 = 'bs.tooltip';
var EVENT_KEY$4 = ".".concat(DATA_KEY$4);
var CLASS_PREFIX$1 = 'bs-tooltip';
var DISALLOWED_ATTRIBUTES = new Set([
    'sanitize',
    'allowList',
    'sanitizeFn'
]);
var DefaultType$3 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(array|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacements: 'array',
    boundary: '(string|element)',
    customClass: '(string|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    allowList: 'object',
    popperConfig: '(null|object|function)'
};
var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: isRTL() ? 'right' : 'left'
};
var Default$3 = {
    animation: true,
    template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>",
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: [
        0,
        0
    ],
    container: false,
    fallbackPlacements: [
        'top',
        'right',
        'bottom',
        'left'
    ],
    boundary: 'clippingParents',
    customClass: '',
    sanitize: true,
    sanitizeFn: null,
    allowList: DefaultAllowlist,
    popperConfig: null
};
var Event$2 = {
    HIDE: "hide".concat(EVENT_KEY$4),
    HIDDEN: "hidden".concat(EVENT_KEY$4),
    SHOW: "show".concat(EVENT_KEY$4),
    SHOWN: "shown".concat(EVENT_KEY$4),
    INSERTED: "inserted".concat(EVENT_KEY$4),
    CLICK: "click".concat(EVENT_KEY$4),
    FOCUSIN: "focusin".concat(EVENT_KEY$4),
    FOCUSOUT: "focusout".concat(EVENT_KEY$4),
    MOUSEENTER: "mouseenter".concat(EVENT_KEY$4),
    MOUSELEAVE: "mouseleave".concat(EVENT_KEY$4)
};
var CLASS_NAME_FADE$2 = 'fade';
var CLASS_NAME_MODAL = 'modal';
var CLASS_NAME_SHOW$2 = 'show';
var HOVER_STATE_SHOW = 'show';
var HOVER_STATE_OUT = 'out';
var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
var SELECTOR_MODAL = ".".concat(CLASS_NAME_MODAL);
var EVENT_MODAL_HIDE = 'hide.bs.modal';
var TRIGGER_HOVER = 'hover';
var TRIGGER_FOCUS = 'focus';
var TRIGGER_CLICK = 'click';
var TRIGGER_MANUAL = 'manual';
var Tooltip = /**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ /*#__PURE__*/ function(BaseComponent) {
    "use strict";
    _helpers.inherits(Tooltip, BaseComponent);
    var _super = _helpers.createSuper(Tooltip);
    function Tooltip(element, config) {
        _helpers.classCallCheck(this, Tooltip);
        var _this;
        if (typeof _core === 'undefined') throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
        _this = _super.call(this, element); // private
        _this._isEnabled = true;
        _this._timeout = 0;
        _this._hoverState = '';
        _this._activeTrigger = {
        };
        _this._popper = null; // Protected
        _this._config = _this._getConfig(config);
        _this.tip = null;
        _this._setListeners();
        return _this;
    }
    _helpers.createClass(Tooltip, [
        {
            key: "enable",
            value: function enable() {
                this._isEnabled = true;
            }
        },
        {
            key: "disable",
            value: function disable() {
                this._isEnabled = false;
            }
        },
        {
            key: "toggleEnabled",
            value: function toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            }
        },
        {
            key: "toggle",
            value: function toggle(event) {
                if (!this._isEnabled) return;
                if (event) {
                    var context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger.click = !context._activeTrigger.click;
                    if (context._isWithActiveTrigger()) context._enter(null, context);
                    else context._leave(null, context);
                } else {
                    if (this.getTipElement().classList.contains(CLASS_NAME_SHOW$2)) {
                        this._leave(null, this);
                        return;
                    }
                    this._enter(null, this);
                }
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                clearTimeout(this._timeout);
                EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
                if (this.tip) this.tip.remove();
                this._disposePopper();
                _helpers.get(_helpers.getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
            }
        },
        {
            key: "show",
            value: function show() {
                var _this = this;
                var _classList, _instance;
                if (this._element.style.display === 'none') throw new Error('Please use show on visible elements');
                if (!(this.isWithContent() && this._isEnabled)) return;
                var showEvent = EventHandler.trigger(this._element, this.constructor.Event.SHOW);
                var shadowRoot = findShadowRoot(this._element);
                var isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);
                if (showEvent.defaultPrevented || !isInTheDom) return;
                 // A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
                // This will be removed later in favor of a `setContent` method
                if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector(SELECTOR_TOOLTIP_INNER).innerHTML) {
                    this._disposePopper();
                    this.tip.remove();
                    this.tip = null;
                }
                var tip = this.getTipElement();
                var tipId = getUID(this.constructor.NAME);
                tip.setAttribute('id', tipId);
                this._element.setAttribute('aria-describedby', tipId);
                if (this._config.animation) tip.classList.add(CLASS_NAME_FADE$2);
                var placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;
                var attachment = this._getAttachment(placement);
                this._addAttachmentClass(attachment);
                var container = this._config.container;
                Data.set(tip, this.constructor.DATA_KEY, this);
                if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
                    container.append(tip);
                    EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
                }
                if (this._popper) this._popper.update();
                else this._popper = _core.createPopper(this._element, tip, this._getPopperConfig(attachment));
                tip.classList.add(CLASS_NAME_SHOW$2);
                var customClass = this._resolvePossibleFunction(this._config.customClass);
                if (customClass) (_classList = tip.classList).add.apply(_classList, _helpers.toConsumableArray(customClass.split(' ')));
                 // If this is a touch-enabled device we add extra
                // empty mouseover listeners to the body's immediate children;
                // only needed because of broken event delegation on iOS
                // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
                if ('ontouchstart' in document.documentElement) (_instance = []).concat.apply(_instance, _helpers.toConsumableArray(document.body.children)).forEach(function(element) {
                    EventHandler.on(element, 'mouseover', noop);
                });
                var complete = function() {
                    var prevHoverState = _this._hoverState;
                    _this._hoverState = null;
                    EventHandler.trigger(_this._element, _this.constructor.Event.SHOWN);
                    if (prevHoverState === HOVER_STATE_OUT) _this._leave(null, _this);
                };
                var isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);
                this._queueCallback(complete, this.tip, isAnimated);
            }
        },
        {
            key: "hide",
            value: function hide() {
                var _this = this;
                var _instance;
                if (!this._popper) return;
                var tip = this.getTipElement();
                var complete = function() {
                    if (_this._isWithActiveTrigger()) return;
                    if (_this._hoverState !== HOVER_STATE_SHOW) tip.remove();
                    _this._cleanTipClass();
                    _this._element.removeAttribute('aria-describedby');
                    EventHandler.trigger(_this._element, _this.constructor.Event.HIDDEN);
                    _this._disposePopper();
                };
                var hideEvent = EventHandler.trigger(this._element, this.constructor.Event.HIDE);
                if (hideEvent.defaultPrevented) return;
                tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
                // empty mouseover listeners we added for iOS support
                if ('ontouchstart' in document.documentElement) (_instance = []).concat.apply(_instance, _helpers.toConsumableArray(document.body.children)).forEach(function(element) {
                    return EventHandler.off(element, 'mouseover', noop);
                });
                this._activeTrigger[TRIGGER_CLICK] = false;
                this._activeTrigger[TRIGGER_FOCUS] = false;
                this._activeTrigger[TRIGGER_HOVER] = false;
                var isAnimated = this.tip.classList.contains(CLASS_NAME_FADE$2);
                this._queueCallback(complete, this.tip, isAnimated);
                this._hoverState = '';
            }
        },
        {
            key: "update",
            value: function update() {
                if (this._popper !== null) this._popper.update();
            } // Protected
        },
        {
            key: "isWithContent",
            value: function isWithContent() {
                return Boolean(this.getTitle());
            }
        },
        {
            key: "getTipElement",
            value: function getTipElement() {
                if (this.tip) return this.tip;
                var element = document.createElement('div');
                element.innerHTML = this._config.template;
                var tip = element.children[0];
                this.setContent(tip);
                tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
                this.tip = tip;
                return this.tip;
            }
        },
        {
            key: "setContent",
            value: function setContent(tip) {
                this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TOOLTIP_INNER);
            }
        },
        {
            key: "_sanitizeAndSetContent",
            value: function _sanitizeAndSetContent(template, content, selector) {
                var templateElement = SelectorEngine.findOne(selector, template);
                if (!content && templateElement) {
                    templateElement.remove();
                    return;
                } // we use append for html objects to maintain js events
                this.setElementContent(templateElement, content);
            }
        },
        {
            key: "setElementContent",
            value: function setElementContent(element, content) {
                if (element === null) return;
                if (isElement(content)) {
                    content = getElement(content); // content is a DOM node or a jQuery
                    if (this._config.html) {
                        if (content.parentNode !== element) {
                            element.innerHTML = '';
                            element.append(content);
                        }
                    } else element.textContent = content.textContent;
                    return;
                }
                if (this._config.html) {
                    if (this._config.sanitize) content = sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
                    element.innerHTML = content;
                } else element.textContent = content;
            }
        },
        {
            key: "getTitle",
            value: function getTitle() {
                var title = this._element.getAttribute('data-bs-original-title') || this._config.title;
                return this._resolvePossibleFunction(title);
            }
        },
        {
            key: "updateAttachment",
            value: function updateAttachment(attachment) {
                if (attachment === 'right') return 'end';
                if (attachment === 'left') return 'start';
                return attachment;
            } // Private
        },
        {
            key: "_initializeOnDelegatedTarget",
            value: function _initializeOnDelegatedTarget(event, context) {
                return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
            }
        },
        {
            key: "_getOffset",
            value: function _getOffset() {
                var _this = this;
                var offset = this._config.offset;
                if (typeof offset === 'string') return offset.split(',').map(function(val) {
                    return Number.parseInt(val, 10);
                });
                if (typeof offset === 'function') return function(popperData) {
                    return offset(popperData, _this._element);
                };
                return offset;
            }
        },
        {
            key: "_resolvePossibleFunction",
            value: function _resolvePossibleFunction(content) {
                return typeof content === 'function' ? content.call(this._element) : content;
            }
        },
        {
            key: "_getPopperConfig",
            value: function _getPopperConfig(attachment) {
                var _this = this;
                var defaultBsPopperConfig = {
                    placement: attachment,
                    modifiers: [
                        {
                            name: 'flip',
                            options: {
                                fallbackPlacements: this._config.fallbackPlacements
                            }
                        },
                        {
                            name: 'offset',
                            options: {
                                offset: this._getOffset()
                            }
                        },
                        {
                            name: 'preventOverflow',
                            options: {
                                boundary: this._config.boundary
                            }
                        },
                        {
                            name: 'arrow',
                            options: {
                                element: ".".concat(this.constructor.NAME, "-arrow")
                            }
                        },
                        {
                            name: 'onChange',
                            enabled: true,
                            phase: 'afterWrite',
                            fn: function(data) {
                                return _this._handlePopperPlacementChange(data);
                            }
                        }
                    ],
                    onFirstUpdate: function(data) {
                        if (data.options.placement !== data.placement) _this._handlePopperPlacementChange(data);
                    }
                };
                return _helpers.objectSpread({
                }, defaultBsPopperConfig, typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
            }
        },
        {
            key: "_addAttachmentClass",
            value: function _addAttachmentClass(attachment) {
                this.getTipElement().classList.add("".concat(this._getBasicClassPrefix(), "-").concat(this.updateAttachment(attachment)));
            }
        },
        {
            key: "_getAttachment",
            value: function _getAttachment(placement) {
                return AttachmentMap[placement.toUpperCase()];
            }
        },
        {
            key: "_setListeners",
            value: function _setListeners() {
                var _this = this;
                var triggers = this._config.trigger.split(' ');
                triggers.forEach(function(trigger) {
                    var _this7 = _this;
                    if (trigger === 'click') EventHandler.on(_this._element, _this.constructor.Event.CLICK, _this._config.selector, function(event) {
                        return _this7.toggle(event);
                    });
                    else if (trigger !== TRIGGER_MANUAL) {
                        var _this6 = _this;
                        var eventIn = trigger === TRIGGER_HOVER ? _this.constructor.Event.MOUSEENTER : _this.constructor.Event.FOCUSIN;
                        var eventOut = trigger === TRIGGER_HOVER ? _this.constructor.Event.MOUSELEAVE : _this.constructor.Event.FOCUSOUT;
                        EventHandler.on(_this._element, eventIn, _this._config.selector, function(event) {
                            return _this6._enter(event);
                        });
                        EventHandler.on(_this._element, eventOut, _this._config.selector, function(event) {
                            return _this6._leave(event);
                        });
                    }
                });
                this._hideModalHandler = function() {
                    if (_this._element) _this.hide();
                };
                EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
                if (this._config.selector) this._config = _helpers.objectSpread({
                }, this._config, {
                    trigger: 'manual',
                    selector: ''
                });
                else this._fixTitle();
            }
        },
        {
            key: "_fixTitle",
            value: function _fixTitle() {
                var title = this._element.getAttribute('title');
                var originalTitleType = _helpers.typeOf(this._element.getAttribute('data-bs-original-title'));
                if (title || originalTitleType !== 'string') {
                    this._element.setAttribute('data-bs-original-title', title || '');
                    if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) this._element.setAttribute('aria-label', title);
                    this._element.setAttribute('title', '');
                }
            }
        },
        {
            key: "_enter",
            value: function _enter(event, context) {
                context = this._initializeOnDelegatedTarget(event, context);
                if (event) context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
                if (context.getTipElement().classList.contains(CLASS_NAME_SHOW$2) || context._hoverState === HOVER_STATE_SHOW) {
                    context._hoverState = HOVER_STATE_SHOW;
                    return;
                }
                clearTimeout(context._timeout);
                context._hoverState = HOVER_STATE_SHOW;
                if (!context._config.delay || !context._config.delay.show) {
                    context.show();
                    return;
                }
                context._timeout = setTimeout(function() {
                    if (context._hoverState === HOVER_STATE_SHOW) context.show();
                }, context._config.delay.show);
            }
        },
        {
            key: "_leave",
            value: function _leave(event, context) {
                context = this._initializeOnDelegatedTarget(event, context);
                if (event) context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                if (context._isWithActiveTrigger()) return;
                clearTimeout(context._timeout);
                context._hoverState = HOVER_STATE_OUT;
                if (!context._config.delay || !context._config.delay.hide) {
                    context.hide();
                    return;
                }
                context._timeout = setTimeout(function() {
                    if (context._hoverState === HOVER_STATE_OUT) context.hide();
                }, context._config.delay.hide);
            }
        },
        {
            key: "_isWithActiveTrigger",
            value: function _isWithActiveTrigger() {
                for(var trigger in this._activeTrigger){
                    if (this._activeTrigger[trigger]) return true;
                }
                return false;
            }
        },
        {
            key: "_getConfig",
            value: function _getConfig(config) {
                var dataAttributes = Manipulator.getDataAttributes(this._element);
                Object.keys(dataAttributes).forEach(function(dataAttr) {
                    if (DISALLOWED_ATTRIBUTES.has(dataAttr)) delete dataAttributes[dataAttr];
                });
                config = _helpers.objectSpread({
                }, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {
                });
                config.container = config.container === false ? document.body : getElement(config.container);
                if (typeof config.delay === 'number') config.delay = {
                    show: config.delay,
                    hide: config.delay
                };
                if (typeof config.title === 'number') config.title = config.title.toString();
                if (typeof config.content === 'number') config.content = config.content.toString();
                typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
                if (config.sanitize) config.template = sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
                return config;
            }
        },
        {
            key: "_getDelegateConfig",
            value: function _getDelegateConfig() {
                var config = {
                };
                for(var key in this._config)if (this.constructor.Default[key] !== this._config[key]) config[key] = this._config[key];
                 // In the future can be replaced with:
                // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
                // `Object.fromEntries(keysWithDifferentValues)`
                return config;
            }
        },
        {
            key: "_cleanTipClass",
            value: function _cleanTipClass() {
                var tip = this.getTipElement();
                var basicClassPrefixRegex = new RegExp("(^|\\s)".concat(this._getBasicClassPrefix(), "\\S+"), 'g');
                var tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);
                if (tabClass !== null && tabClass.length > 0) tabClass.map(function(token) {
                    return token.trim();
                }).forEach(function(tClass) {
                    return tip.classList.remove(tClass);
                });
            }
        },
        {
            key: "_getBasicClassPrefix",
            value: function _getBasicClassPrefix() {
                return CLASS_PREFIX$1;
            }
        },
        {
            key: "_handlePopperPlacementChange",
            value: function _handlePopperPlacementChange(popperData) {
                var state = popperData.state;
                if (!state) return;
                this.tip = state.elements.popper;
                this._cleanTipClass();
                this._addAttachmentClass(this._getAttachment(state.placement));
            }
        },
        {
            key: "_disposePopper",
            value: function _disposePopper() {
                if (this._popper) {
                    this._popper.destroy();
                    this._popper = null;
                }
            } // Static
        }
    ], [
        {
            key: "Default",
            get: function get() {
                return Default$3;
            }
        },
        {
            key: "NAME",
            get: function get() {
                return NAME$4;
            }
        },
        {
            key: "Event",
            get: function get() {
                return Event$2;
            }
        },
        {
            key: "DefaultType",
            get: function get() {
                return DefaultType$3;
            } // Public
        },
        {
            key: "jQueryInterface",
            value: function jQueryInterface(config) {
                return this.each(function() {
                    var data = Tooltip.getOrCreateInstance(this, config);
                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') throw new TypeError("No method named \"".concat(config, "\""));
                        data[config]();
                    }
                });
            }
        }
    ]);
    return Tooltip;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tooltip to jQuery only if jQuery is present
 */ defineJQueryPlugin(Tooltip);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ var NAME$3 = 'popover';
var DATA_KEY$3 = 'bs.popover';
var EVENT_KEY$3 = ".".concat(DATA_KEY$3);
var CLASS_PREFIX = 'bs-popover';
var Default$2 = _helpers.objectSpread({
}, Tooltip.Default, {
    placement: 'right',
    offset: [
        0,
        8
    ],
    trigger: 'click',
    content: '',
    template: "<div class=\"popover\" role=\"tooltip\"><div class=\"popover-arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>"
});
var DefaultType$2 = _helpers.objectSpread({
}, Tooltip.DefaultType, {
    content: '(string|element|function)'
});
var Event$1 = {
    HIDE: "hide".concat(EVENT_KEY$3),
    HIDDEN: "hidden".concat(EVENT_KEY$3),
    SHOW: "show".concat(EVENT_KEY$3),
    SHOWN: "shown".concat(EVENT_KEY$3),
    INSERTED: "inserted".concat(EVENT_KEY$3),
    CLICK: "click".concat(EVENT_KEY$3),
    FOCUSIN: "focusin".concat(EVENT_KEY$3),
    FOCUSOUT: "focusout".concat(EVENT_KEY$3),
    MOUSEENTER: "mouseenter".concat(EVENT_KEY$3),
    MOUSELEAVE: "mouseleave".concat(EVENT_KEY$3)
};
var SELECTOR_TITLE = '.popover-header';
var SELECTOR_CONTENT = '.popover-body';
var Popover = /**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ /*#__PURE__*/ function(Tooltip) {
    "use strict";
    _helpers.inherits(Popover, Tooltip);
    var _super = _helpers.createSuper(Popover);
    function Popover() {
        _helpers.classCallCheck(this, Popover);
        return _super.apply(this, arguments);
    }
    _helpers.createClass(Popover, [
        {
            key: "isWithContent",
            value: function isWithContent() {
                return this.getTitle() || this._getContent();
            }
        },
        {
            key: "setContent",
            value: function setContent(tip) {
                this._sanitizeAndSetContent(tip, this.getTitle(), SELECTOR_TITLE);
                this._sanitizeAndSetContent(tip, this._getContent(), SELECTOR_CONTENT);
            } // Private
        },
        {
            key: "_getContent",
            value: function _getContent() {
                return this._resolvePossibleFunction(this._config.content);
            }
        },
        {
            key: "_getBasicClassPrefix",
            value: function _getBasicClassPrefix() {
                return CLASS_PREFIX;
            } // Static
        }
    ], [
        {
            key: "Default",
            get: // Getters
            function get() {
                return Default$2;
            }
        },
        {
            key: "NAME",
            get: function get() {
                return NAME$3;
            }
        },
        {
            key: "Event",
            get: function get() {
                return Event$1;
            }
        },
        {
            key: "DefaultType",
            get: function get() {
                return DefaultType$2;
            } // Overrides
        },
        {
            key: "jQueryInterface",
            value: function jQueryInterface(config) {
                return this.each(function() {
                    var data = Popover.getOrCreateInstance(this, config);
                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') throw new TypeError("No method named \"".concat(config, "\""));
                        data[config]();
                    }
                });
            }
        }
    ]);
    return Popover;
}(Tooltip);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Popover to jQuery only if jQuery is present
 */ defineJQueryPlugin(Popover);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ var NAME$2 = 'scrollspy';
var DATA_KEY$2 = 'bs.scrollspy';
var EVENT_KEY$2 = ".".concat(DATA_KEY$2);
var DATA_API_KEY$1 = '.data-api';
var Default$1 = {
    offset: 10,
    method: 'auto',
    target: ''
};
var DefaultType$1 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
};
var EVENT_ACTIVATE = "activate".concat(EVENT_KEY$2);
var EVENT_SCROLL = "scroll".concat(EVENT_KEY$2);
var EVENT_LOAD_DATA_API = "load".concat(EVENT_KEY$2).concat(DATA_API_KEY$1);
var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
var CLASS_NAME_ACTIVE$1 = 'active';
var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
var SELECTOR_NAV_LINKS = '.nav-link';
var SELECTOR_NAV_ITEMS = '.nav-item';
var SELECTOR_LIST_ITEMS = '.list-group-item';
var SELECTOR_LINK_ITEMS = "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS, ", .").concat(CLASS_NAME_DROPDOWN_ITEM);
var SELECTOR_DROPDOWN$1 = '.dropdown';
var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
var METHOD_OFFSET = 'offset';
var METHOD_POSITION = 'position';
var ScrollSpy = /**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ /*#__PURE__*/ function(BaseComponent) {
    "use strict";
    _helpers.inherits(ScrollSpy, BaseComponent);
    var _super = _helpers.createSuper(ScrollSpy);
    function ScrollSpy(element, config) {
        _helpers.classCallCheck(this, ScrollSpy);
        var _this;
        _this = _super.call(this, element);
        _this._scrollElement = _this._element.tagName === 'BODY' ? window : _this._element;
        _this._config = _this._getConfig(config);
        _this._offsets = [];
        _this._targets = [];
        _this._activeTarget = null;
        _this._scrollHeight = 0;
        EventHandler.on(_this._scrollElement, EVENT_SCROLL, function() {
            return _this._process();
        });
        _this.refresh();
        _this._process();
        return _this;
    }
    _helpers.createClass(ScrollSpy, [
        {
            key: "refresh",
            value: function refresh() {
                var _this = this;
                var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
                var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
                var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
                this._offsets = [];
                this._targets = [];
                this._scrollHeight = this._getScrollHeight();
                var targets = SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target);
                targets.map(function(element) {
                    var targetSelector = getSelectorFromElement(element);
                    var target = targetSelector ? SelectorEngine.findOne(targetSelector) : null;
                    if (target) {
                        var targetBCR = target.getBoundingClientRect();
                        if (targetBCR.width || targetBCR.height) return [
                            Manipulator[offsetMethod](target).top + offsetBase,
                            targetSelector
                        ];
                    }
                    return null;
                }).filter(function(item) {
                    return item;
                }).sort(function(a, b) {
                    return a[0] - b[0];
                }).forEach(function(item) {
                    _this._offsets.push(item[0]);
                    _this._targets.push(item[1]);
                });
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                EventHandler.off(this._scrollElement, EVENT_KEY$2);
                _helpers.get(_helpers.getPrototypeOf(ScrollSpy.prototype), "dispose", this).call(this);
            } // Private
        },
        {
            key: "_getConfig",
            value: function _getConfig(config) {
                config = _helpers.objectSpread({
                }, Default$1, Manipulator.getDataAttributes(this._element), typeof config === 'object' && config ? config : {
                });
                config.target = getElement(config.target) || document.documentElement;
                typeCheckConfig(NAME$2, config, DefaultType$1);
                return config;
            }
        },
        {
            key: "_getScrollTop",
            value: function _getScrollTop() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
            }
        },
        {
            key: "_getScrollHeight",
            value: function _getScrollHeight() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            }
        },
        {
            key: "_getOffsetHeight",
            value: function _getOffsetHeight() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
            }
        },
        {
            key: "_process",
            value: function _process() {
                var scrollTop = this._getScrollTop() + this._config.offset;
                var scrollHeight = this._getScrollHeight();
                var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();
                if (this._scrollHeight !== scrollHeight) this.refresh();
                if (scrollTop >= maxScroll) {
                    var target = this._targets[this._targets.length - 1];
                    if (this._activeTarget !== target) this._activate(target);
                    return;
                }
                if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
                    this._activeTarget = null;
                    this._clear();
                    return;
                }
                for(var i = this._offsets.length; i--;){
                    var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);
                    if (isActiveTarget) this._activate(this._targets[i]);
                }
            }
        },
        {
            key: "_activate",
            value: function _activate(target) {
                this._activeTarget = target;
                this._clear();
                var queries = SELECTOR_LINK_ITEMS.split(',').map(function(selector) {
                    return "".concat(selector, "[data-bs-target=\"").concat(target, "\"],").concat(selector, "[href=\"").concat(target, "\"]");
                });
                var link = SelectorEngine.findOne(queries.join(','), this._config.target);
                link.classList.add(CLASS_NAME_ACTIVE$1);
                if (link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);
                else SelectorEngine.parents(link, SELECTOR_NAV_LIST_GROUP$1).forEach(function(listGroup) {
                    // Set triggered links parents as active
                    // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
                    SelectorEngine.prev(listGroup, "".concat(SELECTOR_NAV_LINKS, ", ").concat(SELECTOR_LIST_ITEMS)).forEach(function(item) {
                        return item.classList.add(CLASS_NAME_ACTIVE$1);
                    }); // Handle special case when .nav-link is inside .nav-item
                    SelectorEngine.prev(listGroup, SELECTOR_NAV_ITEMS).forEach(function(navItem) {
                        SelectorEngine.children(navItem, SELECTOR_NAV_LINKS).forEach(function(item) {
                            return item.classList.add(CLASS_NAME_ACTIVE$1);
                        });
                    });
                });
                EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
                    relatedTarget: target
                });
            }
        },
        {
            key: "_clear",
            value: function _clear() {
                SelectorEngine.find(SELECTOR_LINK_ITEMS, this._config.target).filter(function(node) {
                    return node.classList.contains(CLASS_NAME_ACTIVE$1);
                }).forEach(function(node) {
                    return node.classList.remove(CLASS_NAME_ACTIVE$1);
                });
            } // Static
        }
    ], [
        {
            key: "Default",
            get: function get() {
                return Default$1;
            }
        },
        {
            key: "NAME",
            get: function get() {
                return NAME$2;
            } // Public
        },
        {
            key: "jQueryInterface",
            value: function jQueryInterface(config) {
                return this.each(function() {
                    var data = ScrollSpy.getOrCreateInstance(this, config);
                    if (typeof config !== 'string') return;
                    if (typeof data[config] === 'undefined') throw new TypeError("No method named \"".concat(config, "\""));
                    data[config]();
                });
            }
        }
    ]);
    return ScrollSpy;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(window, EVENT_LOAD_DATA_API, function() {
    SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function(spy) {
        return new ScrollSpy(spy);
    });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .ScrollSpy to jQuery only if jQuery is present
 */ defineJQueryPlugin(ScrollSpy);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ var NAME$1 = 'tab';
var DATA_KEY$1 = 'bs.tab';
var EVENT_KEY$1 = ".".concat(DATA_KEY$1);
var DATA_API_KEY = '.data-api';
var EVENT_HIDE$1 = "hide".concat(EVENT_KEY$1);
var EVENT_HIDDEN$1 = "hidden".concat(EVENT_KEY$1);
var EVENT_SHOW$1 = "show".concat(EVENT_KEY$1);
var EVENT_SHOWN$1 = "shown".concat(EVENT_KEY$1);
var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY$1).concat(DATA_API_KEY);
var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
var CLASS_NAME_ACTIVE = 'active';
var CLASS_NAME_FADE$1 = 'fade';
var CLASS_NAME_SHOW$1 = 'show';
var SELECTOR_DROPDOWN = '.dropdown';
var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
var SELECTOR_ACTIVE = '.active';
var SELECTOR_ACTIVE_UL = ':scope > li > .active';
var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
var SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
var Tab = /**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ /*#__PURE__*/ function(BaseComponent) {
    "use strict";
    _helpers.inherits(Tab, BaseComponent);
    var _super = _helpers.createSuper(Tab);
    function Tab() {
        _helpers.classCallCheck(this, Tab);
        return _super.apply(this, arguments);
    }
    _helpers.createClass(Tab, [
        {
            key: "show",
            value: function show() {
                var _this = this;
                if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(CLASS_NAME_ACTIVE)) return;
                var previous;
                var target = getElementFromSelector(this._element);
                var listElement = this._element.closest(SELECTOR_NAV_LIST_GROUP);
                if (listElement) {
                    var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
                    previous = SelectorEngine.find(itemSelector, listElement);
                    previous = previous[previous.length - 1];
                }
                var hideEvent = previous ? EventHandler.trigger(previous, EVENT_HIDE$1, {
                    relatedTarget: this._element
                }) : null;
                var showEvent = EventHandler.trigger(this._element, EVENT_SHOW$1, {
                    relatedTarget: previous
                });
                if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) return;
                this._activate(this._element, listElement);
                var complete = function() {
                    EventHandler.trigger(previous, EVENT_HIDDEN$1, {
                        relatedTarget: _this._element
                    });
                    EventHandler.trigger(_this._element, EVENT_SHOWN$1, {
                        relatedTarget: previous
                    });
                };
                if (target) this._activate(target, target.parentNode, complete);
                else complete();
            } // Private
        },
        {
            key: "_activate",
            value: function _activate(element, container, callback) {
                var _this = this;
                var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? SelectorEngine.find(SELECTOR_ACTIVE_UL, container) : SelectorEngine.children(container, SELECTOR_ACTIVE);
                var active = activeElements[0];
                var isTransitioning = callback && active && active.classList.contains(CLASS_NAME_FADE$1);
                var complete = function() {
                    return _this._transitionComplete(element, active, callback);
                };
                if (active && isTransitioning) {
                    active.classList.remove(CLASS_NAME_SHOW$1);
                    this._queueCallback(complete, element, true);
                } else complete();
            }
        },
        {
            key: "_transitionComplete",
            value: function _transitionComplete(element, active, callback) {
                if (active) {
                    active.classList.remove(CLASS_NAME_ACTIVE);
                    var dropdownChild = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);
                    if (dropdownChild) dropdownChild.classList.remove(CLASS_NAME_ACTIVE);
                    if (active.getAttribute('role') === 'tab') active.setAttribute('aria-selected', false);
                }
                element.classList.add(CLASS_NAME_ACTIVE);
                if (element.getAttribute('role') === 'tab') element.setAttribute('aria-selected', true);
                reflow(element);
                if (element.classList.contains(CLASS_NAME_FADE$1)) element.classList.add(CLASS_NAME_SHOW$1);
                var parent = element.parentNode;
                if (parent && parent.nodeName === 'LI') parent = parent.parentNode;
                if (parent && parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)) {
                    var dropdownElement = element.closest(SELECTOR_DROPDOWN);
                    if (dropdownElement) SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(function(dropdown) {
                        return dropdown.classList.add(CLASS_NAME_ACTIVE);
                    });
                    element.setAttribute('aria-expanded', true);
                }
                if (callback) callback();
            } // Static
        }
    ], [
        {
            key: "NAME",
            get: // Getters
            function get() {
                return NAME$1;
            } // Public
        },
        {
            key: "jQueryInterface",
            value: function jQueryInterface(config) {
                return this.each(function() {
                    var data = Tab.getOrCreateInstance(this);
                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') throw new TypeError("No method named \"".concat(config, "\""));
                        data[config]();
                    }
                });
            }
        }
    ]);
    return Tab;
}(BaseComponent);
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if ([
        'A',
        'AREA'
    ].includes(this.tagName)) event.preventDefault();
    if (isDisabled(this)) return;
    var data = Tab.getOrCreateInstance(this);
    data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */ defineJQueryPlugin(Tab);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ var NAME = 'toast';
var DATA_KEY = 'bs.toast';
var EVENT_KEY = ".".concat(DATA_KEY);
var EVENT_MOUSEOVER = "mouseover".concat(EVENT_KEY);
var EVENT_MOUSEOUT = "mouseout".concat(EVENT_KEY);
var EVENT_FOCUSIN = "focusin".concat(EVENT_KEY);
var EVENT_FOCUSOUT = "focusout".concat(EVENT_KEY);
var EVENT_HIDE = "hide".concat(EVENT_KEY);
var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
var EVENT_SHOW = "show".concat(EVENT_KEY);
var EVENT_SHOWN = "shown".concat(EVENT_KEY);
var CLASS_NAME_FADE = 'fade';
var CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
var CLASS_NAME_SHOW = 'show';
var CLASS_NAME_SHOWING = 'showing';
var DefaultType = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
};
var Default = {
    animation: true,
    autohide: true,
    delay: 5000
};
var Toast = /**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ /*#__PURE__*/ function(BaseComponent) {
    "use strict";
    _helpers.inherits(Toast, BaseComponent);
    var _super = _helpers.createSuper(Toast);
    function Toast(element, config) {
        _helpers.classCallCheck(this, Toast);
        var _this;
        _this = _super.call(this, element);
        _this._config = _this._getConfig(config);
        _this._timeout = null;
        _this._hasMouseInteraction = false;
        _this._hasKeyboardInteraction = false;
        _this._setListeners();
        return _this;
    }
    _helpers.createClass(Toast, [
        {
            key: "show",
            value: function show() {
                var _this = this;
                var showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
                if (showEvent.defaultPrevented) return;
                this._clearTimeout();
                if (this._config.animation) this._element.classList.add(CLASS_NAME_FADE);
                var complete = function() {
                    _this._element.classList.remove(CLASS_NAME_SHOWING);
                    EventHandler.trigger(_this._element, EVENT_SHOWN);
                    _this._maybeScheduleHide();
                };
                this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
                reflow(this._element);
                this._element.classList.add(CLASS_NAME_SHOW);
                this._element.classList.add(CLASS_NAME_SHOWING);
                this._queueCallback(complete, this._element, this._config.animation);
            }
        },
        {
            key: "hide",
            value: function hide() {
                var _this = this;
                if (!this._element.classList.contains(CLASS_NAME_SHOW)) return;
                var hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
                if (hideEvent.defaultPrevented) return;
                var complete = function() {
                    _this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
                    _this._element.classList.remove(CLASS_NAME_SHOWING);
                    _this._element.classList.remove(CLASS_NAME_SHOW);
                    EventHandler.trigger(_this._element, EVENT_HIDDEN);
                };
                this._element.classList.add(CLASS_NAME_SHOWING);
                this._queueCallback(complete, this._element, this._config.animation);
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                this._clearTimeout();
                if (this._element.classList.contains(CLASS_NAME_SHOW)) this._element.classList.remove(CLASS_NAME_SHOW);
                _helpers.get(_helpers.getPrototypeOf(Toast.prototype), "dispose", this).call(this);
            } // Private
        },
        {
            key: "_getConfig",
            value: function _getConfig(config) {
                config = _helpers.objectSpread({
                }, Default, Manipulator.getDataAttributes(this._element), typeof config === 'object' && config ? config : {
                });
                typeCheckConfig(NAME, config, this.constructor.DefaultType);
                return config;
            }
        },
        {
            key: "_maybeScheduleHide",
            value: function _maybeScheduleHide() {
                var _this = this;
                if (!this._config.autohide) return;
                if (this._hasMouseInteraction || this._hasKeyboardInteraction) return;
                this._timeout = setTimeout(function() {
                    _this.hide();
                }, this._config.delay);
            }
        },
        {
            key: "_onInteraction",
            value: function _onInteraction(event, isInteracting) {
                switch(event.type){
                    case 'mouseover':
                    case 'mouseout':
                        this._hasMouseInteraction = isInteracting;
                        break;
                    case 'focusin':
                    case 'focusout':
                        this._hasKeyboardInteraction = isInteracting;
                        break;
                }
                if (isInteracting) {
                    this._clearTimeout();
                    return;
                }
                var nextElement = event.relatedTarget;
                if (this._element === nextElement || this._element.contains(nextElement)) return;
                this._maybeScheduleHide();
            }
        },
        {
            key: "_setListeners",
            value: function _setListeners() {
                var _this = this;
                EventHandler.on(this._element, EVENT_MOUSEOVER, function(event) {
                    return _this._onInteraction(event, true);
                });
                EventHandler.on(this._element, EVENT_MOUSEOUT, function(event) {
                    return _this._onInteraction(event, false);
                });
                EventHandler.on(this._element, EVENT_FOCUSIN, function(event) {
                    return _this._onInteraction(event, true);
                });
                EventHandler.on(this._element, EVENT_FOCUSOUT, function(event) {
                    return _this._onInteraction(event, false);
                });
            }
        },
        {
            key: "_clearTimeout",
            value: function _clearTimeout() {
                clearTimeout(this._timeout);
                this._timeout = null;
            } // Static
        }
    ], [
        {
            key: "DefaultType",
            get: function get() {
                return DefaultType;
            }
        },
        {
            key: "Default",
            get: function get() {
                return Default;
            }
        },
        {
            key: "NAME",
            get: function get() {
                return NAME;
            } // Public
        },
        {
            key: "jQueryInterface",
            value: function jQueryInterface(config) {
                return this.each(function() {
                    var data = Toast.getOrCreateInstance(this, config);
                    if (typeof config === 'string') {
                        if (typeof data[config] === 'undefined') throw new TypeError("No method named \"".concat(config, "\""));
                        data[config](this);
                    }
                });
            }
        }
    ]);
    return Toast;
}(BaseComponent);
enableDismissTrigger(Toast);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Toast to jQuery only if jQuery is present
 */ defineJQueryPlugin(Toast);

},{"@swc/helpers":"i7hqn","@popperjs/core":"8FZfg","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"i7hqn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyDecoratedDescriptor", ()=>_applyDecoratedDescriptorDefault.default
);
parcelHelpers.export(exports, "arrayWithHoles", ()=>_arrayWithHolesDefault.default
);
parcelHelpers.export(exports, "arrayWithoutHoles", ()=>_arrayWithoutHolesDefault.default
);
parcelHelpers.export(exports, "assertThisInitialized", ()=>_assertThisInitializedDefault.default
);
parcelHelpers.export(exports, "asyncGenerator", ()=>_asyncGeneratorDefault.default
);
parcelHelpers.export(exports, "asyncGeneratorDelegate", ()=>_asyncGeneratorDelegateDefault.default
);
parcelHelpers.export(exports, "asyncIterator", ()=>_asyncIteratorDefault.default
);
parcelHelpers.export(exports, "asyncToGenerator", ()=>_asyncToGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitAsyncGenerator", ()=>_awaitAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitValue", ()=>_awaitValueDefault.default
);
parcelHelpers.export(exports, "classCallCheck", ()=>_classCallCheckDefault.default
);
parcelHelpers.export(exports, "classNameTDZError", ()=>_classNameTdzErrorDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldGet", ()=>_classPrivateFieldGetDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldLooseBase", ()=>_classPrivateFieldLooseBaseDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldSet", ()=>_classPrivateFieldSetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodGet", ()=>_classPrivateMethodGetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodSet", ()=>_classPrivateMethodSetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecGet", ()=>_classStaticPrivateFieldSpecGetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecSet", ()=>_classStaticPrivateFieldSpecSetDefault.default
);
parcelHelpers.export(exports, "construct", ()=>_constructDefault.default
);
parcelHelpers.export(exports, "createClass", ()=>_createClassDefault.default
);
parcelHelpers.export(exports, "decorate", ()=>_decorateDefault.default
);
parcelHelpers.export(exports, "defaults", ()=>_defaultsDefault.default
);
parcelHelpers.export(exports, "defineEnumerableProperties", ()=>_defineEnumerablePropertiesDefault.default
);
parcelHelpers.export(exports, "defineProperty", ()=>_definePropertyDefault.default
);
parcelHelpers.export(exports, "extends", ()=>_extendsDefault.default
);
parcelHelpers.export(exports, "get", ()=>_getDefault.default
);
parcelHelpers.export(exports, "getPrototypeOf", ()=>_getPrototypeOfDefault.default
);
parcelHelpers.export(exports, "inherits", ()=>_inheritsDefault.default
);
parcelHelpers.export(exports, "inheritsLoose", ()=>_inheritsLooseDefault.default
);
parcelHelpers.export(exports, "initializerDefineProperty", ()=>_initializerDefinePropertyDefault.default
);
parcelHelpers.export(exports, "initializerWarningHelper", ()=>_initializerWarningHelperDefault.default
);
parcelHelpers.export(exports, "_instanceof", ()=>_instanceofDefault.default
);
parcelHelpers.export(exports, "interopRequireDefault", ()=>_interopRequireDefaultDefault.default
);
parcelHelpers.export(exports, "interopRequireWildcard", ()=>_interopRequireWildcardDefault.default
);
parcelHelpers.export(exports, "isNativeFunction", ()=>_isNativeFunctionDefault.default
);
parcelHelpers.export(exports, "iterableToArray", ()=>_iterableToArrayDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimit", ()=>_iterableToArrayLimitDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimitLoose", ()=>_iterableToArrayLimitLooseDefault.default
);
parcelHelpers.export(exports, "jsx", ()=>_jsxDefault.default
);
parcelHelpers.export(exports, "newArrowCheck", ()=>_newArrowCheckDefault.default
);
parcelHelpers.export(exports, "nonIterableRest", ()=>_nonIterableRestDefault.default
);
parcelHelpers.export(exports, "nonIterableSpread", ()=>_nonIterableSpreadDefault.default
);
parcelHelpers.export(exports, "objectSpread", ()=>_objectSpreadDefault.default
);
parcelHelpers.export(exports, "objectWithoutProperties", ()=>_objectWithoutPropertiesDefault.default
);
parcelHelpers.export(exports, "objectWithoutPropertiesLoose", ()=>_objectWithoutPropertiesLooseDefault.default
);
parcelHelpers.export(exports, "possibleConstructorReturn", ()=>_possibleConstructorReturnDefault.default
);
parcelHelpers.export(exports, "readOnlyError", ()=>_readOnlyErrorDefault.default
);
parcelHelpers.export(exports, "set", ()=>_setDefault.default
);
parcelHelpers.export(exports, "setPrototypeOf", ()=>_setPrototypeOfDefault.default
);
parcelHelpers.export(exports, "skipFirstGeneratorNext", ()=>_skipFirstGeneratorNextDefault.default
);
parcelHelpers.export(exports, "slicedToArray", ()=>_slicedToArrayDefault.default
);
parcelHelpers.export(exports, "slicedToArrayLoose", ()=>_slicedToArrayLooseDefault.default
);
parcelHelpers.export(exports, "superPropBase", ()=>_superPropBaseDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteral", ()=>_taggedTemplateLiteralDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteralLoose", ()=>_taggedTemplateLiteralLooseDefault.default
);
parcelHelpers.export(exports, "_throw", ()=>_throwDefault.default
);
parcelHelpers.export(exports, "toArray", ()=>_toArrayDefault.default
);
parcelHelpers.export(exports, "toConsumableArray", ()=>_toConsumableArrayDefault.default
);
parcelHelpers.export(exports, "toPrimitive", ()=>_toPrimitiveDefault.default
);
parcelHelpers.export(exports, "toPropertyKey", ()=>_toPropertyKeyDefault.default
);
parcelHelpers.export(exports, "typeOf", ()=>_typeOfDefault.default
);
parcelHelpers.export(exports, "wrapAsyncGenerator", ()=>_wrapAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "wrapNativeSuper", ()=>_wrapNativeSuperDefault.default
);
parcelHelpers.export(exports, "createSuper", ()=>_createSuperDefault.default
);
parcelHelpers.export(exports, "isNativeReflectConstruct", ()=>_isNativeReflectConstructDefault.default
);
var _applyDecoratedDescriptor = require("./_apply_decorated_descriptor");
var _applyDecoratedDescriptorDefault = parcelHelpers.interopDefault(_applyDecoratedDescriptor);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
var _asyncGeneratorDelegate = require("./_async_generator_delegate");
var _asyncGeneratorDelegateDefault = parcelHelpers.interopDefault(_asyncGeneratorDelegate);
var _asyncIterator = require("./_async_iterator");
var _asyncIteratorDefault = parcelHelpers.interopDefault(_asyncIterator);
var _asyncToGenerator = require("./_async_to_generator");
var _asyncToGeneratorDefault = parcelHelpers.interopDefault(_asyncToGenerator);
var _awaitAsyncGenerator = require("./_await_async_generator");
var _awaitAsyncGeneratorDefault = parcelHelpers.interopDefault(_awaitAsyncGenerator);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
var _classCallCheck = require("./_class_call_check");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _classNameTdzError = require("./_class_name_tdz_error");
var _classNameTdzErrorDefault = parcelHelpers.interopDefault(_classNameTdzError);
var _classPrivateFieldGet = require("./_class_private_field_get");
var _classPrivateFieldGetDefault = parcelHelpers.interopDefault(_classPrivateFieldGet);
var _classPrivateFieldLooseBase = require("./_class_private_field_loose_base");
var _classPrivateFieldLooseBaseDefault = parcelHelpers.interopDefault(_classPrivateFieldLooseBase);
var _classPrivateFieldSet = require("./_class_private_field_set");
var _classPrivateFieldSetDefault = parcelHelpers.interopDefault(_classPrivateFieldSet);
var _classPrivateMethodGet = require("./_class_private_method_get");
var _classPrivateMethodGetDefault = parcelHelpers.interopDefault(_classPrivateMethodGet);
var _classPrivateMethodSet = require("./_class_private_method_set");
var _classPrivateMethodSetDefault = parcelHelpers.interopDefault(_classPrivateMethodSet);
var _classStaticPrivateFieldSpecGet = require("./_class_static_private_field_spec_get");
var _classStaticPrivateFieldSpecGetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecGet);
var _classStaticPrivateFieldSpecSet = require("./_class_static_private_field_spec_set");
var _classStaticPrivateFieldSpecSetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecSet);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _createClass = require("./_create_class");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _decorate = require("./_decorate");
var _decorateDefault = parcelHelpers.interopDefault(_decorate);
var _defaults = require("./_defaults");
var _defaultsDefault = parcelHelpers.interopDefault(_defaults);
var _defineEnumerableProperties = require("./_define_enumerable_properties");
var _defineEnumerablePropertiesDefault = parcelHelpers.interopDefault(_defineEnumerableProperties);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _extends = require("./_extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _get = require("./_get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _inherits = require("./_inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _inheritsLoose = require("./_inherits_loose");
var _inheritsLooseDefault = parcelHelpers.interopDefault(_inheritsLoose);
var _initializerDefineProperty = require("./_initializer_define_property");
var _initializerDefinePropertyDefault = parcelHelpers.interopDefault(_initializerDefineProperty);
var _initializerWarningHelper = require("./_initializer_warning_helper");
var _initializerWarningHelperDefault = parcelHelpers.interopDefault(_initializerWarningHelper);
var _instanceof = require("./_instanceof");
var _instanceofDefault = parcelHelpers.interopDefault(_instanceof);
var _interopRequireDefault = require("./_interop_require_default");
var _interopRequireDefaultDefault = parcelHelpers.interopDefault(_interopRequireDefault);
var _interopRequireWildcard = require("./_interop_require_wildcard");
var _interopRequireWildcardDefault = parcelHelpers.interopDefault(_interopRequireWildcard);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _iterableToArrayLimit = require("./_iterable_to_array_limit");
var _iterableToArrayLimitDefault = parcelHelpers.interopDefault(_iterableToArrayLimit);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _jsx = require("./_jsx");
var _jsxDefault = parcelHelpers.interopDefault(_jsx);
var _newArrowCheck = require("./_new_arrow_check");
var _newArrowCheckDefault = parcelHelpers.interopDefault(_newArrowCheck);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
var _objectSpread = require("./_object_spread");
var _objectSpreadDefault = parcelHelpers.interopDefault(_objectSpread);
var _objectWithoutProperties = require("./_object_without_properties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
var _possibleConstructorReturn = require("./_possible_constructor_return");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _readOnlyError = require("./_read_only_error");
var _readOnlyErrorDefault = parcelHelpers.interopDefault(_readOnlyError);
var _set = require("./_set");
var _setDefault = parcelHelpers.interopDefault(_set);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
var _skipFirstGeneratorNext = require("./_skip_first_generator_next");
var _skipFirstGeneratorNextDefault = parcelHelpers.interopDefault(_skipFirstGeneratorNext);
var _slicedToArray = require("./_sliced_to_array");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _slicedToArrayLoose = require("./_sliced_to_array_loose");
var _slicedToArrayLooseDefault = parcelHelpers.interopDefault(_slicedToArrayLoose);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
var _taggedTemplateLiteral = require("./_tagged_template_literal");
var _taggedTemplateLiteralDefault = parcelHelpers.interopDefault(_taggedTemplateLiteral);
var _taggedTemplateLiteralLoose = require("./_tagged_template_literal_loose");
var _taggedTemplateLiteralLooseDefault = parcelHelpers.interopDefault(_taggedTemplateLiteralLoose);
var _throw = require("./_throw");
var _throwDefault = parcelHelpers.interopDefault(_throw);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toConsumableArray = require("./_to_consumable_array");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _wrapAsyncGenerator = require("./_wrap_async_generator");
var _wrapAsyncGeneratorDefault = parcelHelpers.interopDefault(_wrapAsyncGenerator);
var _wrapNativeSuper = require("./_wrap_native_super");
var _wrapNativeSuperDefault = parcelHelpers.interopDefault(_wrapNativeSuper);
var _createSuper = require("./_create_super");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _isNativeReflectConstruct = require("./_is_native_reflect_construct");
var _isNativeReflectConstructDefault = parcelHelpers.interopDefault(_isNativeReflectConstruct);

},{"./_apply_decorated_descriptor":"kUjfE","./_array_with_holes":"3Fs6J","./_array_without_holes":"92wkp","./_assert_this_initialized":"4RKeM","./_async_generator":"3vOBL","./_async_generator_delegate":"iH8c2","./_async_iterator":"dfcGn","./_async_to_generator":"gtp1H","./_await_async_generator":"3u2f6","./_await_value":"72mZg","./_class_call_check":"dkw3G","./_class_name_tdz_error":"dA9rW","./_class_private_field_get":"7ciJI","./_class_private_field_loose_base":"7z1Wv","./_class_private_field_set":"h9N0n","./_class_private_method_get":"eOv9c","./_class_private_method_set":"gXS99","./_class_static_private_field_spec_get":"70gnh","./_class_static_private_field_spec_set":"20wjo","./_construct":"3MXAi","./_create_class":"4quow","./_decorate":"3f5vk","./_defaults":"6U784","./_define_enumerable_properties":"4JBN9","./_define_property":"klMCc","./_extends":"kRBtR","./_get":"8MfPe","./_get_prototype_of":"jA9xD","./_inherits":"1ezFj","./_inherits_loose":"6AJAV","./_initializer_define_property":"dOAhY","./_initializer_warning_helper":"kS2m5","./_instanceof":"89ia7","./_interop_require_default":"9Jb8T","./_interop_require_wildcard":"ijiZH","./_is_native_function":"7EOCa","./_iterable_to_array":"10nOw","./_iterable_to_array_limit":"2XBEM","./_iterable_to_array_limit_loose":"6AgkF","./_jsx":"6ZSjO","./_new_arrow_check":"iDtv3","./_non_iterable_rest":"3FznJ","./_non_iterable_spread":"331nu","./_object_spread":"gMrCz","./_object_without_properties":"6fGD3","./_object_without_properties_loose":"8tbSF","./_possible_constructor_return":"jD4KX","./_read_only_error":"hzAaW","./_set":"62USd","./_set_prototype_of":"4MDuZ","./_skip_first_generator_next":"2N31T","./_sliced_to_array":"90sha","./_sliced_to_array_loose":"hgByP","./_super_prop_base":"dFwnO","./_tagged_template_literal":"bk6JI","./_tagged_template_literal_loose":"g1W8y","./_throw":"91WPX","./_to_array":"3M8BD","./_to_consumable_array":"jwW9j","./_to_primitive":"bVoSZ","./_to_property_key":"jaR27","./_type_of":"2mBYx","./_wrap_async_generator":"lbiHo","./_wrap_native_super":"jgShr","./_create_super":"6VQjN","./_is_native_reflect_construct":"4e5U6","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"kUjfE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc1 = {
    };
    Object["keys"](descriptor).forEach(function(key) {
        desc1[key] = descriptor[key];
    });
    desc1.enumerable = !!desc1.enumerable;
    desc1.configurable = !!desc1.configurable;
    if ('value' in desc1 || desc1.initializer) desc1.writable = true;
    desc1 = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator ? decorator(target, property, desc) || desc : desc;
    }, desc1);
    if (context && desc1.initializer !== void 0) {
        desc1.value = desc1.initializer ? desc1.initializer.call(context) : void 0;
        desc1.initializer = undefined;
    }
    if (desc1.initializer === void 0) {
        Object["defineProperty"](target, property, desc1);
        desc1 = null;
    }
    return desc1;
}
exports.default = _applyDecoratedDescriptor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"dBYYk":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3Fs6J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
exports.default = _arrayWithHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"92wkp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}
exports.default = _arrayWithoutHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"4RKeM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
exports.default = _assertThisInitialized;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"3vOBL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function AsyncGenerator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) back = back.next = request;
            else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg1) {
        try {
            var result = gen[key](arg1);
            var value = result.value;
            var wrappedAwait = value instanceof _awaitValueDefault.default;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) resume(front.key, front.arg);
        else back = null;
    }
    this._invoke = send;
    if (typeof gen.return !== "function") this.return = undefined;
}
exports.default = AsyncGenerator;
if (typeof Symbol === "function" && Symbol.asyncIterator) AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
    return this;
};
AsyncGenerator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
AsyncGenerator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
AsyncGenerator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};

},{"./_await_value":"72mZg","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"72mZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _AwaitValue(value) {
    this.wrapped = value;
}
exports.default = _AwaitValue;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"iH8c2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {
    }, waiting = false;
    function pump(key, value) {
        waiting = true;
        value = new Promise(function(resolve) {
            resolve(inner[key](value));
        });
        return {
            done: false,
            value: awaitWrap(value)
        };
    }
    if (typeof Symbol === "function" && Symbol.iterator) iter[Symbol.iterator] = function() {
        return this;
    };
    iter.next = function(value) {
        if (waiting) {
            waiting = false;
            return value;
        }
        return pump("next", value);
    };
    if (typeof inner.throw === "function") iter.throw = function(value) {
        if (waiting) {
            waiting = false;
            throw value;
        }
        return pump("throw", value);
    };
    if (typeof inner.return === "function") iter.return = function(value) {
        return pump("return", value);
    };
    return iter;
}
exports.default = _asyncGeneratorDelegate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"dfcGn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncIterator(iterable) {
    var method;
    if (typeof Symbol === "function") {
        if (Symbol.asyncIterator) {
            method = iterable[Symbol.asyncIterator];
            if (method != null) return method.call(iterable);
        }
        if (Symbol.iterator) {
            method = iterable[Symbol.iterator];
            if (method != null) return method.call(iterable);
        }
    }
    throw new TypeError("Object is not async iterable");
}
exports.default = _asyncIterator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"gtp1H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
exports.default = _asyncToGenerator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"3u2f6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function _awaitAsyncGenerator(value) {
    return new _awaitValueDefault.default(value);
}
exports.default = _awaitAsyncGenerator;

},{"./_await_value":"72mZg","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"dkw3G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
exports.default = _classCallCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"dA9rW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classNameTDZError(name) {
    throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys.");
}
exports.default = _classNameTDZError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"7ciJI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver).value;
}
exports.default = _classPrivateFieldGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"7z1Wv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
exports.default = _classPrivateFieldBase;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"h9N0n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    var descriptor = privateMap.get(receiver);
    if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
    return value;
}
exports.default = _classPrivateFieldSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"eOv9c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
exports.default = _classPrivateMethodGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"gXS99":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
}
exports.default = _classPrivateMethodSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"70gnh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
    return descriptor.value;
}
exports.default = _classStaticPrivateFieldSpecGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"20wjo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
    if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
    return value;
}
exports.default = _classStaticPrivateFieldSpecSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"3MXAi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function construct(Parent1, args1, Class1) {
    if (isNativeReflectConstruct()) construct = Reflect.construct;
    else construct = function construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return construct.apply(null, arguments);
}
function _construct(Parent, args, Class) {
    return construct.apply(null, arguments);
}
exports.default = _construct;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"4quow":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
exports.default = _createClass;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"3f5vk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
function _decorate(decorators, factory, superClass) {
    var r = factory(function initialize(O) {
        _initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = _decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
    _initializeClassElements(r.F, decorated.elements);
    return _runClassFinishers(r.F, decorated.finishers);
}
exports.default = _decorate;
function _createElementDescriptor(def) {
    var key = _toPropertyKeyDefault.default(def.key);
    var descriptor;
    if (def.kind === "method") {
        descriptor = {
            value: def.value,
            writable: true,
            configurable: true,
            enumerable: false
        };
        Object.defineProperty(def.value, "name", {
            value: _typeof(key) === "symbol" ? "" : key,
            configurable: true
        });
    } else if (def.kind === "get") descriptor = {
        get: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "set") descriptor = {
        set: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "field") descriptor = {
        configurable: true,
        writable: true,
        enumerable: true
    };
    var element = {
        kind: def.kind === "field" ? "field" : "method",
        key: key,
        placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
        descriptor: descriptor
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;
    return element;
}
function _coalesceGetterSetter(element, other) {
    if (element.descriptor.get !== undefined) other.descriptor.get = element.descriptor.get;
    else other.descriptor.set = element.descriptor.set;
}
function _coalesceClassElements(elements) {
    var newElements = [];
    var isSameElement = function isSameElement(other) {
        return other.kind === "method" && other.key === element.key && other.placement === element.placement;
    };
    for(var i = 0; i < elements.length; i++){
        var element = elements[i];
        var other1;
        if (element.kind === "method" && (other1 = newElements.find(isSameElement))) {
            if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other1.descriptor)) {
                if (_hasDecorators(element) || _hasDecorators(other1)) throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
                other1.descriptor = element.descriptor;
            } else {
                if (_hasDecorators(element)) {
                    if (_hasDecorators(other1)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + element.key + ").");
                    other1.decorators = element.decorators;
                }
                _coalesceGetterSetter(element, other1);
            }
        } else newElements.push(element);
    }
    return newElements;
}
function _hasDecorators(element) {
    return element.decorators && element.decorators.length;
}
function _isDataDescriptor(desc) {
    return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
}
function _initializeClassElements(F, elements) {
    var proto = F.prototype;
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            var placement = element.placement;
            if (element.kind === kind && (placement === "static" || placement === "prototype")) {
                var receiver = placement === "static" ? F : proto;
                _defineClassElement(receiver, element);
            }
        });
    });
}
function _initializeInstanceElements(O, elements) {
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            if (element.kind === kind && element.placement === "own") _defineClassElement(O, element);
        });
    });
}
function _defineClassElement(receiver, element) {
    var descriptor = element.descriptor;
    if (element.kind === "field") {
        var initializer = element.initializer;
        descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
    }
    Object.defineProperty(receiver, element.key, descriptor);
}
function _decorateClass(elements, decorators) {
    var newElements = [];
    var finishers = [];
    var placements = {
        static: [],
        prototype: [],
        own: []
    };
    elements.forEach(function(element) {
        _addElementPlacement(element, placements);
    });
    elements.forEach(function(element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = _decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
    });
    if (!decorators) return {
        elements: newElements,
        finishers: finishers
    };
    var result = _decorateConstructor(newElements, decorators);
    finishers.push.apply(finishers, result.finishers);
    result.finishers = finishers;
    return result;
}
function _addElementPlacement(element, placements, silent) {
    var keys = placements[element.placement];
    if (!silent && keys.indexOf(element.key) !== -1) throw new TypeError("Duplicated element (" + element.key + ")");
    keys.push(element.key);
}
function _decorateElement(element, placements) {
    var extras = [];
    var finishers = [];
    for(var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--){
        var keys = placements[element.placement];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = _fromElementDescriptor(element);
        var elementFinisherExtras = _toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
        element = elementFinisherExtras.element;
        _addElementPlacement(element, placements);
        if (elementFinisherExtras.finisher) finishers.push(elementFinisherExtras.finisher);
        var newExtras = elementFinisherExtras.extras;
        if (newExtras) {
            for(var j = 0; j < newExtras.length; j++)_addElementPlacement(newExtras[j], placements);
            extras.push.apply(extras, newExtras);
        }
    }
    return {
        element: element,
        finishers: finishers,
        extras: extras
    };
}
function _decorateConstructor(elements, decorators) {
    var finishers = [];
    for(var i = decorators.length - 1; i >= 0; i--){
        var obj = _fromClassDescriptor(elements);
        var elementsAndFinisher = _toClassDescriptor((0, decorators[i])(obj) || obj);
        if (elementsAndFinisher.finisher !== undefined) finishers.push(elementsAndFinisher.finisher);
        if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;
            for(var j = 0; j < elements.length - 1; j++)for(var k = j + 1; k < elements.length; k++){
                if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) throw new TypeError("Duplicated element (" + elements[j].key + ")");
            }
        }
    }
    return {
        elements: elements,
        finishers: finishers
    };
}
function _fromElementDescriptor(element) {
    var obj = {
        kind: element.kind,
        key: element.key,
        placement: element.placement,
        descriptor: element.descriptor
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    if (element.kind === "field") obj.initializer = element.initializer;
    return obj;
}
function _toElementDescriptors(elementObjects) {
    if (elementObjects === undefined) return;
    return _toArrayDefault.default(elementObjects).map(function(elementObject) {
        var element = _toElementDescriptor(elementObject);
        _disallowProperty(elementObject, "finisher", "An element descriptor");
        _disallowProperty(elementObject, "extras", "An element descriptor");
        return element;
    });
}
function _toElementDescriptor(elementObject) {
    var kind = String(elementObject.kind);
    if (kind !== "method" && kind !== "field") throw new TypeError("An element descriptor's .kind property must be either \"method\" or \"field\", but a decorator created an element descriptor with .kind \"" + kind + '"');
    var key = _toPropertyKeyDefault.default(elementObject.key);
    var placement = String(elementObject.placement);
    if (placement !== "static" && placement !== "prototype" && placement !== "own") throw new TypeError("An element descriptor's .placement property must be one of \"static\", \"prototype\" or \"own\", but a decorator created an element descriptor with .placement \"" + placement + '"');
    var descriptor = elementObject.descriptor;
    _disallowProperty(elementObject, "elements", "An element descriptor");
    var element = {
        kind: kind,
        key: key,
        placement: placement,
        descriptor: Object.assign({
        }, descriptor)
    };
    if (kind !== "field") _disallowProperty(elementObject, "initializer", "A method descriptor");
    else {
        _disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
        element.initializer = elementObject.initializer;
    }
    return element;
}
function _toElementFinisherExtras(elementObject) {
    var element = _toElementDescriptor(elementObject);
    var finisher = _optionalCallableProperty(elementObject, "finisher");
    var extras = _toElementDescriptors(elementObject.extras);
    return {
        element: element,
        finisher: finisher,
        extras: extras
    };
}
function _fromClassDescriptor(elements) {
    var obj = {
        kind: "class",
        elements: elements.map(_fromElementDescriptor)
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    return obj;
}
function _toClassDescriptor(obj) {
    var kind = String(obj.kind);
    if (kind !== "class") throw new TypeError("A class descriptor's .kind property must be \"class\", but a decorator created a class descriptor with .kind \"" + kind + '"');
    _disallowProperty(obj, "key", "A class descriptor");
    _disallowProperty(obj, "placement", "A class descriptor");
    _disallowProperty(obj, "descriptor", "A class descriptor");
    _disallowProperty(obj, "initializer", "A class descriptor");
    _disallowProperty(obj, "extras", "A class descriptor");
    var finisher = _optionalCallableProperty(obj, "finisher");
    var elements = _toElementDescriptors(obj.elements);
    return {
        elements: elements,
        finisher: finisher
    };
}
function _disallowProperty(obj, name, objectType) {
    if (obj[name] !== undefined) throw new TypeError(objectType + " can't have a ." + name + " property.");
}
function _optionalCallableProperty(obj, name) {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") throw new TypeError("Expected '" + name + "' to be a function");
    return value;
}
function _runClassFinishers(constructor, finishers) {
    for(var i = 0; i < finishers.length; i++){
        var newConstructor = (0, finishers[i])(constructor);
        if (newConstructor !== undefined) {
            if (typeof newConstructor !== "function") throw new TypeError("Finishers must return a constructor.");
            constructor = newConstructor;
        }
    }
    return constructor;
}

},{"./_to_array":"3M8BD","./_to_property_key":"jaR27","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"3M8BD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _toArray(arr) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _nonIterableRestDefault.default();
}
exports.default = _toArray;

},{"./_array_with_holes":"3Fs6J","./_iterable_to_array":"10nOw","./_non_iterable_rest":"3FznJ","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"10nOw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
exports.default = _iterableToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"3FznJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
exports.default = _nonIterableRest;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"jaR27":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
function _toPropertyKey(arg) {
    var key = _toPrimitiveDefault.default(arg, "string");
    return _typeOfDefault.default(key) === "symbol" ? key : String(key);
}
exports.default = _toPropertyKey;

},{"./_type_of":"2mBYx","./_to_primitive":"bVoSZ","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"2mBYx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}
exports.default = _typeof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"bVoSZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _toPrimitive(input, hint) {
    if (_typeOfDefault.default(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeOfDefault.default(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
exports.default = _toPrimitive;

},{"./_type_of":"2mBYx","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"6U784":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        var value = Object.getOwnPropertyDescriptor(defaults, key);
        if (value && value.configurable && obj[key] === undefined) Object.defineProperty(obj, key, value);
    }
    return obj;
}
exports.default = _defaults;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"4JBN9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineEnumerableProperties(obj, descs) {
    for(var key in descs){
        var desc = descs[key];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, key, desc);
    }
    if (Object.getOwnPropertySymbols) {
        var objectSymbols = Object.getOwnPropertySymbols(descs);
        for(var i = 0; i < objectSymbols.length; i++){
            var sym = objectSymbols[i];
            var desc = descs[sym];
            desc.configurable = desc.enumerable = true;
            if ("value" in desc) desc.writable = true;
            Object.defineProperty(obj, sym, desc);
        }
    }
    return obj;
}
exports.default = _defineEnumerableProperties;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"klMCc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _defineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"kRBtR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return extends_.apply(this, arguments);
}
function _extends() {
    return extends_.apply(this, arguments);
}
exports.default = _extends;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"8MfPe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function get(target1, property1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.get) get = Reflect.get;
    else get = function get(target, property, receiver) {
        var base = _superPropBaseDefault.default(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(receiver || target);
        return desc.value;
    };
    return get(target1, property1, receiver1);
}
function _get(target, property, reciever) {
    return get(target, property, reciever);
}
exports.default = _get;

},{"./_super_prop_base":"dFwnO","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"dFwnO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOfDefault.default(object);
        if (object === null) break;
    }
    return object;
}
exports.default = _superPropBase;

},{"./_get_prototype_of":"jA9xD","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"jA9xD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getPrototypeOf(o1) {
    getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return getPrototypeOf(o1);
}
function _getPrototypeOf(o) {
    return getPrototypeOf(o);
}
exports.default = _getPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"1ezFj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOfDefault.default(subClass, superClass);
}
exports.default = _inherits;

},{"./_set_prototype_of":"4MDuZ","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"4MDuZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setPrototypeOf(o1, p1) {
    setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return setPrototypeOf(o1, p1);
}
function _setPrototypeOf(o, p) {
    return setPrototypeOf(o, p);
}
exports.default = _setPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"6AJAV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
exports.default = _inheritsLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"dOAhY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
exports.default = _initializerDefineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"kS2m5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and set to use loose mode. To use proposal-class-properties in spec mode with decorators, wait for the next major version of decorators in stage 2.");
}
exports.default = _initializerWarningHelper;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"89ia7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) return right[Symbol.hasInstance](left);
    else return left instanceof right;
}
exports.default = _instanceof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"9Jb8T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = _interopRequireDefault;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"ijiZH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {
                };
                if (desc.get || desc.set) Object.defineProperty(newObj, key, desc);
                else newObj[key] = obj[key];
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
exports.default = _interopRequireWildcard;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"7EOCa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
exports.default = _isNativeFunction;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"2XBEM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
exports.default = _iterableToArrayLimit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"6AgkF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimitLoose(arr, i) {
    var _arr = [];
    for(var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;){
        _arr.push(_step.value);
        if (i && _arr.length === i) break;
    }
    return _arr;
}
exports.default = _iterableToArrayLimitLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"6ZSjO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var REACT_ELEMENT_TYPE;
function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;
    if (!props && childrenLength !== 0) props = {
        children: void 0
    };
    if (props && defaultProps) {
        for(var propName in defaultProps)if (props[propName] === void 0) props[propName] = defaultProps[propName];
    } else if (!props) props = defaultProps || {
    };
    if (childrenLength === 1) props.children = children;
    else if (childrenLength > 1) {
        var childArray = new Array(childrenLength);
        for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 3];
        props.children = childArray;
    }
    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key === undefined ? null : '' + key,
        ref: null,
        props: props,
        _owner: null
    };
}
exports.default = _createRawReactElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"iDtv3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) throw new TypeError("Cannot instantiate an arrow function");
}
exports.default = _newArrowCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"331nu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
exports.default = _nonIterableSpread;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"gMrCz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _definePropertyDefault.default(target, key, source[key]);
        });
    }
    return target;
}
exports.default = _objectSpread;

},{"./_define_property":"klMCc","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"6fGD3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLooseDefault.default(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
exports.default = _objectWithoutProperties;

},{"./_object_without_properties_loose":"8tbSF","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"8tbSF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
exports.default = _objectWithoutPropertiesLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"jD4KX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _possibleConstructorReturn(self, call) {
    if (call && (_typeOfDefault.default(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitializedDefault.default(self);
}
exports.default = _possibleConstructorReturn;

},{"./_assert_this_initialized":"4RKeM","./_type_of":"2mBYx","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"hzAaW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _readOnlyError(name) {
    throw new Error("\"" + name + "\" is read-only");
}
exports.default = _readOnlyError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"62USd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function set(target1, property1, value1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.set) set = Reflect.set;
    else set = function set(target, property, value, receiver) {
        var base = _superPropBaseDefault.default(target, property);
        var desc;
        if (base) {
            desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.set) {
                desc.set.call(receiver, value);
                return true;
            } else if (!desc.writable) return false;
        }
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
            if (!desc.writable) return false;
            desc.value = value;
            Object.defineProperty(receiver, property, desc);
        } else _definePropertyDefault.default(receiver, property, value);
        return true;
    };
    return set(target1, property1, value1, receiver1);
}
function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) throw new Error('failed to set property');
    return value;
}
exports.default = _set;

},{"./_define_property":"klMCc","./_super_prop_base":"dFwnO","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"2N31T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _skipFirstGeneratorNext(fn) {
    return function() {
        var it = fn.apply(this, arguments);
        it.next();
        return it;
    };
}
exports.default = _skipFirstGeneratorNext;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"90sha":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _slicedToArray(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArray;

},{"./_array_with_holes":"3Fs6J","./_iterable_to_array":"10nOw","./_non_iterable_rest":"3FznJ","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"hgByP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
function _slicedToArrayLoose(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayLimitLooseDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArrayLoose;

},{"./_array_with_holes":"3Fs6J","./_iterable_to_array_limit_loose":"6AgkF","./_non_iterable_rest":"3FznJ","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"bk6JI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
exports.default = _taggedTemplateLiteral;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"g1W8y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) raw = strings.slice(0);
    strings.raw = raw;
    return strings;
}
exports.default = _taggedTemplateLiteralLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"91WPX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _throw(e) {
    throw e;
}
exports.default = _throw;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"jwW9j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
function _toConsumableArray(arr) {
    return _arrayWithoutHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _nonIterableSpreadDefault.default();
}
exports.default = _toConsumableArray;

},{"./_array_without_holes":"92wkp","./_iterable_to_array":"10nOw","./_non_iterable_spread":"331nu","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"lbiHo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
function _wrapAsyncGenerator(fn) {
    return function() {
        return new _asyncGeneratorDefault.default(fn.apply(this, arguments));
    };
}
exports.default = _wrapAsyncGenerator;

},{"./_async_generator":"3vOBL","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"jgShr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function wrapNativeSuper(Class1) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    wrapNativeSuper = function wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunctionDefault.default(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _constructDefault.default(Class, arguments, _getPrototypeOfDefault.default(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOfDefault.default(Wrapper, Class);
    };
    return wrapNativeSuper(Class1);
}
function _wrapNativeSuper(Class) {
    return wrapNativeSuper(Class);
}
exports.default = _wrapNativeSuper;

},{"./_construct":"3MXAi","./_is_native_function":"7EOCa","./_get_prototype_of":"jA9xD","./_set_prototype_of":"4MDuZ","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"6VQjN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNativeReflectConstruct = require("./_is_native_reflect_construct");
var _isNativeReflectConstructDefault = parcelHelpers.interopDefault(_isNativeReflectConstruct);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _possibleConstructorReturn = require("./_possible_constructor_return");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstructDefault.default();
    return function _createSuperInternal() {
        var Super = _getPrototypeOfDefault.default(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOfDefault.default(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturnDefault.default(this, result);
    };
}
exports.default = _createSuper;

},{"./_is_native_reflect_construct":"4e5U6","./_get_prototype_of":"jA9xD","./_possible_constructor_return":"jD4KX","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"4e5U6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
exports.default = _isNativeReflectConstruct;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"8FZfg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", function() {
    return _createPopperJs.popperGenerator;
}) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "detectOverflow", function() {
    return _createPopperJs.detectOverflow;
});
parcelHelpers.export(exports, "createPopperBase", function() {
    return _createPopperJs.createPopper;
});
parcelHelpers.export(exports, "createPopper", function() {
    return _popperJs.createPopper;
}) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "createPopperLite", function() {
    return _popperLiteJs.createPopper;
});
var _enumsJs = require("./enums.js");
parcelHelpers.exportAll(_enumsJs, exports);
var _indexJs = require("./modifiers/index.js"); // eslint-disable-next-line import/no-unused-modules
parcelHelpers.exportAll(_indexJs, exports);
var _createPopperJs = require("./createPopper.js");
var _popperJs = require("./popper.js");
var _popperLiteJs = require("./popper-lite.js");

},{"./enums.js":"jsJ1r","./modifiers/index.js":"fP9Io","./createPopper.js":"8qvXu","./popper.js":"kiyYM","./popper-lite.js":"ditDC","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"jsJ1r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "top", function() {
    return top;
});
parcelHelpers.export(exports, "bottom", function() {
    return bottom;
});
parcelHelpers.export(exports, "right", function() {
    return right;
});
parcelHelpers.export(exports, "left", function() {
    return left;
});
parcelHelpers.export(exports, "auto", function() {
    return auto;
});
parcelHelpers.export(exports, "basePlacements", function() {
    return basePlacements;
});
parcelHelpers.export(exports, "start", function() {
    return start;
});
parcelHelpers.export(exports, "end", function() {
    return end;
});
parcelHelpers.export(exports, "clippingParents", function() {
    return clippingParents;
});
parcelHelpers.export(exports, "viewport", function() {
    return viewport;
});
parcelHelpers.export(exports, "popper", function() {
    return popper;
});
parcelHelpers.export(exports, "reference", function() {
    return reference;
});
parcelHelpers.export(exports, "variationPlacements", function() {
    return variationPlacements;
});
parcelHelpers.export(exports, "placements", function() {
    return placements;
});
parcelHelpers.export(exports, "beforeRead", function() {
    return beforeRead;
});
parcelHelpers.export(exports, "read", function() {
    return read;
});
parcelHelpers.export(exports, "afterRead", function() {
    return afterRead;
});
parcelHelpers.export(exports, "beforeMain", function() {
    return beforeMain;
});
parcelHelpers.export(exports, "main", function() {
    return main;
});
parcelHelpers.export(exports, "afterMain", function() {
    return afterMain;
});
parcelHelpers.export(exports, "beforeWrite", function() {
    return beforeWrite;
});
parcelHelpers.export(exports, "write", function() {
    return write;
});
parcelHelpers.export(exports, "afterWrite", function() {
    return afterWrite;
});
parcelHelpers.export(exports, "modifierPhases", function() {
    return modifierPhases;
});
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /*#__PURE__*/ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []); // modifiers that need to read the DOM
var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers
var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)
var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"fP9Io":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyStyles", function() {
    return _applyStylesJsDefault.default;
});
parcelHelpers.export(exports, "arrow", function() {
    return _arrowJsDefault.default;
});
parcelHelpers.export(exports, "computeStyles", function() {
    return _computeStylesJsDefault.default;
});
parcelHelpers.export(exports, "eventListeners", function() {
    return _eventListenersJsDefault.default;
});
parcelHelpers.export(exports, "flip", function() {
    return _flipJsDefault.default;
});
parcelHelpers.export(exports, "hide", function() {
    return _hideJsDefault.default;
});
parcelHelpers.export(exports, "offset", function() {
    return _offsetJsDefault.default;
});
parcelHelpers.export(exports, "popperOffsets", function() {
    return _popperOffsetsJsDefault.default;
});
parcelHelpers.export(exports, "preventOverflow", function() {
    return _preventOverflowJsDefault.default;
});
var _applyStylesJs = require("./applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _arrowJs = require("./arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _computeStylesJs = require("./computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _eventListenersJs = require("./eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _hideJs = require("./hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _offsetJs = require("./offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _popperOffsetsJs = require("./popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _preventOverflowJs = require("./preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);

},{"./applyStyles.js":"1injV","./arrow.js":"1sFOF","./computeStyles.js":"jSB8s","./eventListeners.js":"gWilp","./flip.js":"aG7wP","./hide.js":"bens7","./offset.js":"8DsKF","./popperOffsets.js":"494Es","./preventOverflow.js":"dhEl3","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"1injV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("../dom-utils/getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name1) {
        var style = state.styles[name1] || {
        };
        var attributes = state.attributes[name1] || {
        };
        var element = state.elements[name1]; // arrow is optional + virtual elements
        if (!_instanceOfJs.isHTMLElement(element) || !_getNodeNameJsDefault.default(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? '' : value);
        });
    });
}
function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: '0',
            top: '0',
            margin: '0'
        },
        arrow: {
            position: 'absolute'
        },
        reference: {
        }
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {
            };
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style1 = styleProperties.reduce(function(style, property) {
                style[property] = '';
                return style;
            }, {
            }); // arrow is optional + virtual elements
            if (!_instanceOfJs.isHTMLElement(element) || !_getNodeNameJsDefault.default(element)) return;
            Object.assign(element.style, style1);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect,
    requires: [
        'computeStyles'
    ]
};

},{"../dom-utils/getNodeName.js":"1RIfT","../dom-utils/instanceOf.js":"euczA","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"1RIfT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
}
exports.default = getNodeName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"euczA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isElement", function() {
    return isElement;
});
parcelHelpers.export(exports, "isHTMLElement", function() {
    return isHTMLElement;
});
parcelHelpers.export(exports, "isShadowRoot", function() {
    return isShadowRoot;
});
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function isElement(node) {
    var OwnElement = _getWindowJsDefault.default(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = _getWindowJsDefault.default(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') return false;
    var OwnElement = _getWindowJsDefault.default(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

},{"./getWindow.js":"6xkh7","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"6xkh7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getWindow(node) {
    if (node == null) return window;
    if (node.toString() !== '[object Window]') {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}
exports.default = getWindow;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"1sFOF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _containsJs = require("../dom-utils/contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _withinJs = require("../utils/within.js");
var _mergePaddingObjectJs = require("../utils/mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("../utils/expandToHashMap.js");
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js"); // eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({
    }, state.rects, {
        placement: state.placement
    })) : padding;
    return _mergePaddingObjectJsDefault.default(typeof padding !== 'number' ? padding : _expandToHashMapJsDefault.default(padding, _enumsJs.basePlacements));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = _getBasePlacementJsDefault.default(state.placement);
    var axis = _getMainAxisFromPlacementJsDefault.default(basePlacement);
    var isVertical = [
        _enumsJs.left,
        _enumsJs.right
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = _getLayoutRectJsDefault.default(arrowElement);
    var minProp = axis === 'y' ? _enumsJs.top : _enumsJs.left;
    var maxProp = axis === 'y' ? _enumsJs.bottom : _enumsJs.right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = _getOffsetParentJsDefault.default(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = _withinJs.within(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {
    }, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!_instanceOfJs.isHTMLElement(arrowElement)) console.error([
        'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
        'To use an SVG arrow, wrap it in an HTMLElement that will be used as',
        'the arrow.'
    ].join(' '));
    if (!_containsJsDefault.default(state.elements.popper, arrowElement)) {
        console.error([
            'Popper: "arrow" modifier\'s `element` must be a child of the popper',
            'element.'
        ].join(' '));
        return;
    }
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect,
    requires: [
        'popperOffsets'
    ],
    requiresIfExists: [
        'preventOverflow'
    ]
};

},{"../utils/getBasePlacement.js":"arRPr","../dom-utils/getLayoutRect.js":"5s4wU","../dom-utils/contains.js":"eka7n","../dom-utils/getOffsetParent.js":"6AmEu","../utils/getMainAxisFromPlacement.js":"8dbmJ","../utils/within.js":"lp4jK","../utils/mergePaddingObject.js":"c6Twb","../utils/expandToHashMap.js":"9J0nz","../enums.js":"jsJ1r","../dom-utils/instanceOf.js":"euczA","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"arRPr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
function getBasePlacement(placement) {
    return placement.split('-')[0];
}
exports.default = getBasePlacement;

},{"../enums.js":"jsJ1r","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"5s4wU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js"); // Returns the layout rect of an element relative to its offsetParent. Layout
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
function getLayoutRect(element) {
    var clientRect = _getBoundingClientRectJsDefault.default(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}
exports.default = getLayoutRect;

},{"./getBoundingClientRect.js":"fmtiV","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"fmtiV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
var _mathJs = require("../utils/math.js");
function getBoundingClientRect(element, includeScale) {
    if (includeScale === void 0) includeScale = false;
    var rect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (_instanceOfJs.isHTMLElement(element) && includeScale) {
        var offsetHeight = element.offsetHeight;
        var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
        // Fallback to 1 in case both values are `0`
        if (offsetWidth > 0) scaleX = _mathJs.round(rect.width) / offsetWidth || 1;
        if (offsetHeight > 0) scaleY = _mathJs.round(rect.height) / offsetHeight || 1;
    }
    return {
        width: rect.width / scaleX,
        height: rect.height / scaleY,
        top: rect.top / scaleY,
        right: rect.right / scaleX,
        bottom: rect.bottom / scaleY,
        left: rect.left / scaleX,
        x: rect.left / scaleX,
        y: rect.top / scaleY
    };
}
exports.default = getBoundingClientRect;

},{"./instanceOf.js":"euczA","../utils/math.js":"l31xC","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"l31xC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", function() {
    return max;
});
parcelHelpers.export(exports, "min", function() {
    return min;
});
parcelHelpers.export(exports, "round", function() {
    return round;
});
var max = Math.max;
var min = Math.min;
var round = Math.round;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"eka7n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && _instanceOfJs.isShadowRoot(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next)
    } // Give up, the result is false
    return false;
}
exports.default = contains;

},{"./instanceOf.js":"euczA","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"6AmEu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _isTableElementJs = require("./isTableElement.js");
var _isTableElementJsDefault = parcelHelpers.interopDefault(_isTableElementJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
function getTrueOffsetParent(element) {
    if (!_instanceOfJs.isHTMLElement(element) || _getComputedStyleJsDefault.default(element).position === 'fixed') return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
    var isIE = navigator.userAgent.indexOf('Trident') !== -1;
    if (isIE && _instanceOfJs.isHTMLElement(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = _getComputedStyleJsDefault.default(element);
        if (elementCss.position === 'fixed') return null;
    }
    var currentNode = _getParentNodeJsDefault.default(element);
    if (_instanceOfJs.isShadowRoot(currentNode)) currentNode = currentNode.host;
    while(_instanceOfJs.isHTMLElement(currentNode) && [
        'html',
        'body'
    ].indexOf(_getNodeNameJsDefault.default(currentNode)) < 0){
        var css = _getComputedStyleJsDefault.default(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || [
            'transform',
            'perspective'
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function getOffsetParent(element) {
    var window = _getWindowJsDefault.default(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && _isTableElementJsDefault.default(offsetParent) && _getComputedStyleJsDefault.default(offsetParent).position === 'static')offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && (_getNodeNameJsDefault.default(offsetParent) === 'html' || _getNodeNameJsDefault.default(offsetParent) === 'body' && _getComputedStyleJsDefault.default(offsetParent).position === 'static')) return window;
    return offsetParent || getContainingBlock(element) || window;
}
exports.default = getOffsetParent;

},{"./getWindow.js":"6xkh7","./getNodeName.js":"1RIfT","./getComputedStyle.js":"2muzQ","./instanceOf.js":"euczA","./isTableElement.js":"1RmXU","./getParentNode.js":"7W2Y5","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"2muzQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getComputedStyle(element) {
    return _getWindowJsDefault.default(element).getComputedStyle(element);
}
exports.default = getComputedStyle;

},{"./getWindow.js":"6xkh7","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"1RmXU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
function isTableElement(element) {
    return [
        'table',
        'td',
        'th'
    ].indexOf(_getNodeNameJsDefault.default(element)) >= 0;
}
exports.default = isTableElement;

},{"./getNodeName.js":"1RIfT","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"7W2Y5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _instanceOfJs = require("./instanceOf.js");
function getParentNode(element) {
    if (_getNodeNameJsDefault.default(element) === 'html') return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || element.parentNode || (_instanceOfJs.isShadowRoot(element) ? element.host : null) || // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    _getDocumentElementJsDefault.default(element) // fallback
    );
}
exports.default = getParentNode;

},{"./getNodeName.js":"1RIfT","./getDocumentElement.js":"8LTgc","./instanceOf.js":"euczA","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"8LTgc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instanceOfJs = require("./instanceOf.js");
function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((_instanceOfJs.isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
exports.default = getDocumentElement;

},{"./instanceOf.js":"euczA","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"8dbmJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getMainAxisFromPlacement(placement) {
    return [
        'top',
        'bottom'
    ].indexOf(placement) >= 0 ? 'x' : 'y';
}
exports.default = getMainAxisFromPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"lp4jK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "within", function() {
    return within;
});
parcelHelpers.export(exports, "withinMaxClamp", function() {
    return withinMaxClamp;
});
var _mathJs = require("./math.js");
function within(min, value, max) {
    return _mathJs.max(min, _mathJs.min(value, max));
}
function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
}

},{"./math.js":"l31xC","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"c6Twb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getFreshSideObjectJs = require("./getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
function mergePaddingObject(paddingObject) {
    return Object.assign({
    }, _getFreshSideObjectJsDefault.default(), paddingObject);
}
exports.default = mergePaddingObject;

},{"./getFreshSideObject.js":"jEwPM","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"jEwPM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}
exports.default = getFreshSideObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"9J0nz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {
    });
}
exports.default = expandToHashMap;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"jSB8s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapToStyles", function() {
    return mapToStyles;
});
var _enumsJs = require("../enums.js");
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getWindowJs = require("../dom-utils/getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("../dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _mathJs = require("../utils/math.js"); // eslint-disable-next-line import/no-unused-modules
var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function roundOffsetsByDPR(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: _mathJs.round(x * dpr) / dpr || 0,
        y: _mathJs.round(y * dpr) / dpr || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = _enumsJs.left;
    var sideY = _enumsJs.top;
    var win = window;
    if (adaptive) {
        var offsetParent = _getOffsetParentJsDefault.default(popper);
        var heightProp = 'clientHeight';
        var widthProp = 'clientWidth';
        if (offsetParent === _getWindowJsDefault.default(popper)) {
            offsetParent = _getDocumentElementJsDefault.default(popper);
            if (_getComputedStyleJsDefault.default(offsetParent).position !== 'static' && position === 'absolute') {
                heightProp = 'scrollHeight';
                widthProp = 'scrollWidth';
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        if (placement === _enumsJs.top || (placement === _enumsJs.left || placement === _enumsJs.right) && variation === _enumsJs.end) {
            sideY = _enumsJs.bottom;
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === _enumsJs.left || (placement === _enumsJs.top || placement === _enumsJs.bottom) && variation === _enumsJs.end) {
            sideX = _enumsJs.right;
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({
        }, commonStyles, (_Object$assign = {
        }, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({
    }, commonStyles, (_Object$assign2 = {
    }, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var transitionProperty = _getComputedStyleJsDefault.default(state.elements.popper).transitionProperty || '';
    if (adaptive && [
        'transform',
        'top',
        'right',
        'bottom',
        'left'
    ].some(function(property) {
        return transitionProperty.indexOf(property) >= 0;
    })) console.warn([
        'Popper: Detected CSS transitions on at least one of the following',
        'CSS properties: "transform", "top", "right", "bottom", "left".',
        '\n\n',
        'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
        'for smooth transitions, or remove these properties from the CSS',
        'transition declaration on the popper element if only transitioning',
        'opacity or background-color for example.',
        '\n\n',
        'We recommend using the popper element as a wrapper around an inner',
        'element that can have any CSS property transitioned for animations.'
    ].join(' '));
    var commonStyles = {
        placement: _getBasePlacementJsDefault.default(state.placement),
        variation: _getVariationJsDefault.default(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === 'fixed'
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({
    }, state.styles.popper, mapToStyles(Object.assign({
    }, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({
    }, state.styles.arrow, mapToStyles(Object.assign({
    }, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({
    }, state.attributes.popper, {
        'data-popper-placement': state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {
    }
};

},{"../enums.js":"jsJ1r","../dom-utils/getOffsetParent.js":"6AmEu","../dom-utils/getWindow.js":"6xkh7","../dom-utils/getDocumentElement.js":"8LTgc","../dom-utils/getComputedStyle.js":"2muzQ","../utils/getBasePlacement.js":"arRPr","../utils/getVariation.js":"aGPAH","../utils/math.js":"l31xC","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"aGPAH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getVariation(placement) {
    return placement.split('-')[1];
}
exports.default = getVariation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"gWilp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("../dom-utils/getWindow.js"); // eslint-disable-next-line import/no-unused-modules
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = _getWindowJsDefault.default(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
    });
    if (resize) window.addEventListener('resize', instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener('scroll', instance.update, passive);
        });
        if (resize) window.removeEventListener('resize', instance.update, passive);
    };
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {
    },
    effect: effect,
    data: {
    }
};

},{"../dom-utils/getWindow.js":"6xkh7","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"aG7wP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOppositePlacementJs = require("../utils/getOppositePlacement.js");
var _getOppositePlacementJsDefault = parcelHelpers.interopDefault(_getOppositePlacementJs);
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getOppositeVariationPlacementJs = require("../utils/getOppositeVariationPlacement.js");
var _getOppositeVariationPlacementJsDefault = parcelHelpers.interopDefault(_getOppositeVariationPlacementJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _computeAutoPlacementJs = require("../utils/computeAutoPlacement.js");
var _computeAutoPlacementJsDefault = parcelHelpers.interopDefault(_computeAutoPlacementJs);
var _enumsJs = require("../enums.js");
var _getVariationJs = require("../utils/getVariation.js"); // eslint-disable-next-line import/no-unused-modules
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
function getExpandedFallbackPlacements(placement) {
    if (_getBasePlacementJsDefault.default(placement) === _enumsJs.auto) return [];
    var oppositePlacement = _getOppositePlacementJsDefault.default(placement);
    return [
        _getOppositeVariationPlacementJsDefault.default(placement),
        oppositePlacement,
        _getOppositeVariationPlacementJsDefault.default(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = _getBasePlacementJsDefault.default(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        _getOppositePlacementJsDefault.default(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat(_getBasePlacementJsDefault.default(placement) === _enumsJs.auto ? _computeAutoPlacementJsDefault.default(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement1 = placements[i];
        var _basePlacement = _getBasePlacementJsDefault.default(placement1);
        var isStartVariation = _getVariationJsDefault.default(placement1) === _enumsJs.start;
        var isVertical = [
            _enumsJs.top,
            _enumsJs.bottom
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? 'width' : 'height';
        var overflow = _detectOverflowJsDefault.default(state, {
            placement: placement1,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? _enumsJs.right : _enumsJs.left : isStartVariation ? _enumsJs.bottom : _enumsJs.top;
        if (referenceRect[len] > popperRect[len]) mainVariationSide = _getOppositePlacementJsDefault.default(mainVariationSide);
        var altVariationSide = _getOppositePlacementJsDefault.default(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement1;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement1, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i1 = numberOfChecks; _i1 > 0; _i1--){
            var _ret = _loop(_i1);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: [
        'offset'
    ],
    data: {
        _skip: false
    }
};

},{"../utils/getOppositePlacement.js":"3x2GE","../utils/getBasePlacement.js":"arRPr","../utils/getOppositeVariationPlacement.js":"lntSL","../utils/detectOverflow.js":"croIc","../utils/computeAutoPlacement.js":"g8A0P","../enums.js":"jsJ1r","../utils/getVariation.js":"aGPAH","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"3x2GE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositePlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"lntSL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var hash = {
    start: 'end',
    end: 'start'
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
    });
}
exports.default = getOppositeVariationPlacement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"croIc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getClippingRectJs = require("../dom-utils/getClippingRect.js");
var _getClippingRectJsDefault = parcelHelpers.interopDefault(_getClippingRectJs);
var _getDocumentElementJs = require("../dom-utils/getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getBoundingClientRectJs = require("../dom-utils/getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _computeOffsetsJs = require("./computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
var _rectToClientRectJs = require("./rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _enumsJs = require("../enums.js");
var _instanceOfJs = require("../dom-utils/instanceOf.js");
var _mergePaddingObjectJs = require("./mergePaddingObject.js");
var _mergePaddingObjectJsDefault = parcelHelpers.interopDefault(_mergePaddingObjectJs);
var _expandToHashMapJs = require("./expandToHashMap.js"); // eslint-disable-next-line import/no-unused-modules
var _expandToHashMapJsDefault = parcelHelpers.interopDefault(_expandToHashMapJs);
function detectOverflow(state, options) {
    if (options === void 0) options = {
    };
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? _enumsJs.clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? _enumsJs.viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? _enumsJs.popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = _mergePaddingObjectJsDefault.default(typeof padding !== 'number' ? padding : _expandToHashMapJsDefault.default(padding, _enumsJs.basePlacements));
    var altContext = elementContext === _enumsJs.popper ? _enumsJs.reference : _enumsJs.popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = _getClippingRectJsDefault.default(_instanceOfJs.isElement(element) ? element : element.contextElement || _getDocumentElementJsDefault.default(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = _getBoundingClientRectJsDefault.default(state.elements.reference);
    var popperOffsets = _computeOffsetsJsDefault.default({
        reference: referenceClientRect,
        element: popperRect,
        strategy: 'absolute',
        placement: placement
    });
    var popperClientRect = _rectToClientRectJsDefault.default(Object.assign({
    }, popperRect, popperOffsets));
    var elementClientRect = elementContext === _enumsJs.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === _enumsJs.popper && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                _enumsJs.right,
                _enumsJs.bottom
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                _enumsJs.top,
                _enumsJs.bottom
            ].indexOf(key) >= 0 ? 'y' : 'x';
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}
exports.default = detectOverflow;

},{"../dom-utils/getClippingRect.js":"6X3LR","../dom-utils/getDocumentElement.js":"8LTgc","../dom-utils/getBoundingClientRect.js":"fmtiV","./computeOffsets.js":"lj1OF","./rectToClientRect.js":"fp090","../enums.js":"jsJ1r","../dom-utils/instanceOf.js":"euczA","./mergePaddingObject.js":"c6Twb","./expandToHashMap.js":"9J0nz","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"6X3LR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getViewportRectJs = require("./getViewportRect.js");
var _getViewportRectJsDefault = parcelHelpers.interopDefault(_getViewportRectJs);
var _getDocumentRectJs = require("./getDocumentRect.js");
var _getDocumentRectJsDefault = parcelHelpers.interopDefault(_getDocumentRectJs);
var _listScrollParentsJs = require("./listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _instanceOfJs = require("./instanceOf.js");
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _containsJs = require("./contains.js");
var _containsJsDefault = parcelHelpers.interopDefault(_containsJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _rectToClientRectJs = require("../utils/rectToClientRect.js");
var _rectToClientRectJsDefault = parcelHelpers.interopDefault(_rectToClientRectJs);
var _mathJs = require("../utils/math.js");
function getInnerBoundingClientRect(element) {
    var rect = _getBoundingClientRectJsDefault.default(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === _enumsJs.viewport ? _rectToClientRectJsDefault.default(_getViewportRectJsDefault.default(element)) : _instanceOfJs.isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : _rectToClientRectJsDefault.default(_getDocumentRectJsDefault.default(_getDocumentElementJsDefault.default(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element) {
    var clippingParents = _listScrollParentsJsDefault.default(_getParentNodeJsDefault.default(element));
    var canEscapeClipping = [
        'absolute',
        'fixed'
    ].indexOf(_getComputedStyleJsDefault.default(element).position) >= 0;
    var clipperElement = canEscapeClipping && _instanceOfJs.isHTMLElement(element) ? _getOffsetParentJsDefault.default(element) : element;
    if (!_instanceOfJs.isElement(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return _instanceOfJs.isElement(clippingParent) && _containsJsDefault.default(clippingParent, clipperElement) && _getNodeNameJsDefault.default(clippingParent) !== 'body';
    });
} // Gets the maximum area that the element is visible in due to any number of
function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent);
        accRect.top = _mathJs.max(rect.top, accRect.top);
        accRect.right = _mathJs.min(rect.right, accRect.right);
        accRect.bottom = _mathJs.min(rect.bottom, accRect.bottom);
        accRect.left = _mathJs.max(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}
exports.default = getClippingRect;

},{"../enums.js":"jsJ1r","./getViewportRect.js":"gyqDu","./getDocumentRect.js":"6jZWj","./listScrollParents.js":"bbheP","./getOffsetParent.js":"6AmEu","./getDocumentElement.js":"8LTgc","./getComputedStyle.js":"2muzQ","./instanceOf.js":"euczA","./getBoundingClientRect.js":"fmtiV","./getParentNode.js":"7W2Y5","./contains.js":"eka7n","./getNodeName.js":"1RIfT","../utils/rectToClientRect.js":"fp090","../utils/math.js":"l31xC","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"gyqDu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
function getViewportRect(element) {
    var win = _getWindowJsDefault.default(element);
    var html = _getDocumentElementJsDefault.default(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
        // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
        // errors due to floating point numbers, so we need to check precision.
        // Safari returns a number <= 0, usually < -1 when pinch-zoomed
        // Feature detection fails in mobile emulation mode in Chrome.
        // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
        // 0.001
        // Fallback here: "Not Safari" userAgent
        if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + _getWindowScrollBarXJsDefault.default(element),
        y: y
    };
}
exports.default = getViewportRect;

},{"./getWindow.js":"6xkh7","./getDocumentElement.js":"8LTgc","./getWindowScrollBarX.js":"aIxhy","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"aIxhy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return _getBoundingClientRectJsDefault.default(_getDocumentElementJsDefault.default(element)).left + _getWindowScrollJsDefault.default(element).scrollLeft;
}
exports.default = getWindowScrollBarX;

},{"./getBoundingClientRect.js":"fmtiV","./getDocumentElement.js":"8LTgc","./getWindowScroll.js":"ceLuy","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"ceLuy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
function getWindowScroll(node) {
    var win = _getWindowJsDefault.default(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}
exports.default = getWindowScroll;

},{"./getWindow.js":"6xkh7","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"6jZWj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _mathJs = require("../utils/math.js"); // Gets the entire size of the scrollable document area, even extending outside
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = _getDocumentElementJsDefault.default(element);
    var winScroll = _getWindowScrollJsDefault.default(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = _mathJs.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = _mathJs.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + _getWindowScrollBarXJsDefault.default(element);
    var y = -winScroll.scrollTop;
    if (_getComputedStyleJsDefault.default(body || html).direction === 'rtl') x += _mathJs.max(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}
exports.default = getDocumentRect;

},{"./getDocumentElement.js":"8LTgc","./getComputedStyle.js":"2muzQ","./getWindowScrollBarX.js":"aIxhy","./getWindowScroll.js":"ceLuy","../utils/math.js":"l31xC","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"bbheP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getScrollParentJs = require("./getScrollParent.js");
var _getScrollParentJsDefault = parcelHelpers.interopDefault(_getScrollParentJs);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = _getScrollParentJsDefault.default(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = _getWindowJsDefault.default(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], _isScrollParentJsDefault.default(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents(_getParentNodeJsDefault.default(target)));
}
exports.default = listScrollParents;

},{"./getScrollParent.js":"bPcLD","./getParentNode.js":"7W2Y5","./getWindow.js":"6xkh7","./isScrollParent.js":"bv8JC","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"bPcLD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getParentNodeJs = require("./getParentNode.js");
var _getParentNodeJsDefault = parcelHelpers.interopDefault(_getParentNodeJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
function getScrollParent(node) {
    if ([
        'html',
        'body',
        '#document'
    ].indexOf(_getNodeNameJsDefault.default(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if (_instanceOfJs.isHTMLElement(node) && _isScrollParentJsDefault.default(node)) return node;
    return getScrollParent(_getParentNodeJsDefault.default(node));
}
exports.default = getScrollParent;

},{"./getParentNode.js":"7W2Y5","./isScrollParent.js":"bv8JC","./getNodeName.js":"1RIfT","./instanceOf.js":"euczA","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"bv8JC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getComputedStyleJs = require("./getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = _getComputedStyleJsDefault.default(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
exports.default = isScrollParent;

},{"./getComputedStyle.js":"2muzQ","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"fp090":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function rectToClientRect(rect) {
    return Object.assign({
    }, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}
exports.default = rectToClientRect;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"lj1OF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getMainAxisFromPlacementJs = require("./getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _enumsJs = require("../enums.js");
function computeOffsets(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? _getBasePlacementJsDefault.default(placement) : null;
    var variation = placement ? _getVariationJsDefault.default(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case _enumsJs.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case _enumsJs.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case _enumsJs.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case _enumsJs.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? _getMainAxisFromPlacementJsDefault.default(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === 'y' ? 'height' : 'width';
        switch(variation){
            case _enumsJs.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case _enumsJs.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}
exports.default = computeOffsets;

},{"./getBasePlacement.js":"arRPr","./getVariation.js":"aGPAH","./getMainAxisFromPlacement.js":"8dbmJ","../enums.js":"jsJ1r","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"g8A0P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getVariationJs = require("./getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("./detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getBasePlacementJs = require("./getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {
    };
    var _options = options, placement1 = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enumsJs.placements : _options$allowedAutoP;
    var variation = _getVariationJsDefault.default(placement1);
    var placements = variation ? flipVariations ? _enumsJs.variationPlacements : _enumsJs.variationPlacements.filter(function(placement) {
        return _getVariationJsDefault.default(placement) === variation;
    }) : _enumsJs.basePlacements;
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) {
        allowedPlacements = placements;
        console.error([
            'Popper: The `allowedAutoPlacements` option did not allow any',
            'placements. Ensure the `placement` option matches the variation',
            'of the allowed placements.',
            'For example, "auto" cannot be used to allow "bottom-start".',
            'Use "auto-start" instead.'
        ].join(' '));
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = _detectOverflowJsDefault.default(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[_getBasePlacementJsDefault.default(placement)];
        return acc;
    }, {
    });
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}
exports.default = computeAutoPlacement;

},{"./getVariation.js":"aGPAH","../enums.js":"jsJ1r","./detectOverflow.js":"croIc","./getBasePlacement.js":"arRPr","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"bens7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        _enumsJs.top,
        _enumsJs.right,
        _enumsJs.bottom,
        _enumsJs.left
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = _detectOverflowJsDefault.default(state, {
        elementContext: 'reference'
    });
    var popperAltOverflow = _detectOverflowJsDefault.default(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({
    }, state.attributes.popper, {
        'data-popper-reference-hidden': isReferenceHidden,
        'data-popper-escaped': hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: [
        'preventOverflow'
    ],
    fn: hide
};

},{"../enums.js":"jsJ1r","../utils/detectOverflow.js":"croIc","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"8DsKF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distanceAndSkiddingToXY", function() {
    return distanceAndSkiddingToXY;
});
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _enumsJs = require("../enums.js"); // eslint-disable-next-line import/no-unused-modules
function distanceAndSkiddingToXY(placement, rects, offset1) {
    var basePlacement = _getBasePlacementJsDefault.default(placement);
    var invertDistance = [
        _enumsJs.left,
        _enumsJs.top
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset1 === 'function' ? offset1(Object.assign({
    }, rects, {
        placement: placement
    })) : offset1, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        _enumsJs.left,
        _enumsJs.right
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = _enumsJs.placements.reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
        return acc;
    }, {
    });
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: [
        'popperOffsets'
    ],
    fn: offset
};

},{"../utils/getBasePlacement.js":"arRPr","../enums.js":"jsJ1r","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"494Es":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _computeOffsetsJs = require("../utils/computeOffsets.js");
var _computeOffsetsJsDefault = parcelHelpers.interopDefault(_computeOffsetsJs);
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = _computeOffsetsJsDefault.default({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: 'absolute',
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {
    }
};

},{"../utils/computeOffsets.js":"lj1OF","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"dhEl3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js");
var _getBasePlacementJs = require("../utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _getMainAxisFromPlacementJs = require("../utils/getMainAxisFromPlacement.js");
var _getMainAxisFromPlacementJsDefault = parcelHelpers.interopDefault(_getMainAxisFromPlacementJs);
var _getAltAxisJs = require("../utils/getAltAxis.js");
var _getAltAxisJsDefault = parcelHelpers.interopDefault(_getAltAxisJs);
var _withinJs = require("../utils/within.js");
var _getLayoutRectJs = require("../dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _getOffsetParentJs = require("../dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _detectOverflowJs = require("../utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _getVariationJs = require("../utils/getVariation.js");
var _getVariationJsDefault = parcelHelpers.interopDefault(_getVariationJs);
var _getFreshSideObjectJs = require("../utils/getFreshSideObject.js");
var _getFreshSideObjectJsDefault = parcelHelpers.interopDefault(_getFreshSideObjectJs);
var _mathJs = require("../utils/math.js");
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = _detectOverflowJsDefault.default(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = _getBasePlacementJsDefault.default(state.placement);
    var variation = _getVariationJsDefault.default(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = _getMainAxisFromPlacementJsDefault.default(basePlacement);
    var altAxis = _getAltAxisJsDefault.default(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({
    }, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === 'y' ? _enumsJs.top : _enumsJs.left;
        var altSide = mainAxis === 'y' ? _enumsJs.bottom : _enumsJs.right;
        var len = mainAxis === 'y' ? 'height' : 'width';
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === _enumsJs.start ? referenceRect[len] : popperRect[len];
        var maxLen = variation === _enumsJs.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? _getLayoutRectJsDefault.default(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : _getFreshSideObjectJsDefault.default();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = _withinJs.within(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && _getOffsetParentJsDefault.default(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = _withinJs.within(tether ? _mathJs.min(min, tetherMin) : min, offset, tether ? _mathJs.max(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === 'x' ? _enumsJs.top : _enumsJs.left;
        var _altSide = mainAxis === 'x' ? _enumsJs.bottom : _enumsJs.right;
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === 'y' ? 'height' : 'width';
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            _enumsJs.top,
            _enumsJs.left
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? _withinJs.withinMaxClamp(_tetherMin, _offset, _tetherMax) : _withinJs.within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
exports.default = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: [
        'offset'
    ]
};

},{"../enums.js":"jsJ1r","../utils/getBasePlacement.js":"arRPr","../utils/getMainAxisFromPlacement.js":"8dbmJ","../utils/getAltAxis.js":"2ad5L","../utils/within.js":"lp4jK","../dom-utils/getLayoutRect.js":"5s4wU","../dom-utils/getOffsetParent.js":"6AmEu","../utils/detectOverflow.js":"croIc","../utils/getVariation.js":"aGPAH","../utils/getFreshSideObject.js":"jEwPM","../utils/math.js":"l31xC","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"2ad5L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
exports.default = getAltAxis;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"8qvXu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "popperGenerator", function() {
    return popperGenerator;
});
parcelHelpers.export(exports, "createPopper", function() {
    return createPopper;
});
parcelHelpers.export(exports, "detectOverflow", function() {
    return _detectOverflowJsDefault.default;
});
var _getCompositeRectJs = require("./dom-utils/getCompositeRect.js");
var _getCompositeRectJsDefault = parcelHelpers.interopDefault(_getCompositeRectJs);
var _getLayoutRectJs = require("./dom-utils/getLayoutRect.js");
var _getLayoutRectJsDefault = parcelHelpers.interopDefault(_getLayoutRectJs);
var _listScrollParentsJs = require("./dom-utils/listScrollParents.js");
var _listScrollParentsJsDefault = parcelHelpers.interopDefault(_listScrollParentsJs);
var _getOffsetParentJs = require("./dom-utils/getOffsetParent.js");
var _getOffsetParentJsDefault = parcelHelpers.interopDefault(_getOffsetParentJs);
var _getComputedStyleJs = require("./dom-utils/getComputedStyle.js");
var _getComputedStyleJsDefault = parcelHelpers.interopDefault(_getComputedStyleJs);
var _orderModifiersJs = require("./utils/orderModifiers.js");
var _orderModifiersJsDefault = parcelHelpers.interopDefault(_orderModifiersJs);
var _debounceJs = require("./utils/debounce.js");
var _debounceJsDefault = parcelHelpers.interopDefault(_debounceJs);
var _validateModifiersJs = require("./utils/validateModifiers.js");
var _validateModifiersJsDefault = parcelHelpers.interopDefault(_validateModifiersJs);
var _uniqueByJs = require("./utils/uniqueBy.js");
var _uniqueByJsDefault = parcelHelpers.interopDefault(_uniqueByJs);
var _getBasePlacementJs = require("./utils/getBasePlacement.js");
var _getBasePlacementJsDefault = parcelHelpers.interopDefault(_getBasePlacementJs);
var _mergeByNameJs = require("./utils/mergeByName.js");
var _mergeByNameJsDefault = parcelHelpers.interopDefault(_mergeByNameJs);
var _detectOverflowJs = require("./utils/detectOverflow.js");
var _detectOverflowJsDefault = parcelHelpers.interopDefault(_detectOverflowJs);
var _instanceOfJs = require("./dom-utils/instanceOf.js");
var _enumsJs = require("./enums.js");
var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === 'function');
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {
    };
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference1, popper1, options1) {
        if (options1 === void 0) options1 = defaultOptions;
        var state1 = {
            placement: 'bottom',
            orderedModifiers: [],
            options: Object.assign({
            }, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {
            },
            elements: {
                reference: reference1,
                popper: popper1
            },
            attributes: {
            },
            styles: {
            }
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state1,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === 'function' ? setOptionsAction(state1.options) : setOptionsAction;
                cleanupModifierEffects();
                state1.options = Object.assign({
                }, defaultOptions, state1.options, options);
                state1.scrollParents = {
                    reference: _instanceOfJs.isElement(reference1) ? _listScrollParentsJsDefault.default(reference1) : reference1.contextElement ? _listScrollParentsJsDefault.default(reference1.contextElement) : [],
                    popper: _listScrollParentsJsDefault.default(popper1)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = _orderModifiersJsDefault.default(_mergeByNameJsDefault.default([].concat(defaultModifiers, state1.options.modifiers))); // Strip out disabled modifiers
                state1.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                }); // Validate the provided modifiers so that the consumer will get warned
                var modifiers = _uniqueByJsDefault.default([].concat(orderedModifiers, state1.options.modifiers), function(_ref) {
                    var name = _ref.name;
                    return name;
                });
                _validateModifiersJsDefault.default(modifiers);
                if (_getBasePlacementJsDefault.default(state1.options.placement) === _enumsJs.auto) {
                    var flipModifier = state1.orderedModifiers.find(function(_ref2) {
                        var name = _ref2.name;
                        return name === 'flip';
                    });
                    if (!flipModifier) console.error([
                        'Popper: "auto" placements require the "flip" modifier be',
                        'present and enabled to work.'
                    ].join(' '));
                }
                var _getComputedStyle = _getComputedStyleJsDefault.default(popper1), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
                // cause bugs with positioning, so we'll warn the consumer
                if ([
                    marginTop,
                    marginRight,
                    marginBottom,
                    marginLeft
                ].some(function(margin) {
                    return parseFloat(margin);
                })) console.warn([
                    'Popper: CSS "margin" styles cannot be used to apply padding',
                    'between the popper and its reference element or boundary.',
                    'To replicate margin, use the `offset` modifier, as well as',
                    'the `padding` option in the `preventOverflow` and `flip`',
                    'modifiers.'
                ].join(' '));
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state1.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!areValidElements(reference, popper)) {
                    console.error(INVALID_ELEMENT_ERROR);
                    return;
                } // Store the reference and popper rects to be read by modifiers
                state1.rects = {
                    reference: _getCompositeRectJsDefault.default(reference, _getOffsetParentJsDefault.default(popper), state1.options.strategy === 'fixed'),
                    popper: _getLayoutRectJsDefault.default(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state1.reset = false;
                state1.placement = state1.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state1.orderedModifiers.forEach(function(modifier) {
                    return state1.modifiersData[modifier.name] = Object.assign({
                    }, modifier.data);
                });
                var __debug_loops__ = 0;
                for(var index = 0; index < state1.orderedModifiers.length; index++){
                    __debug_loops__ += 1;
                    if (__debug_loops__ > 100) {
                        console.error(INFINITE_LOOP_ERROR);
                        break;
                    }
                    if (state1.reset === true) {
                        state1.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state1.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {
                    } : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === 'function') state1 = fn({
                        state: state1,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state1;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: _debounceJsDefault.default(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state1);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference1, popper1)) {
            console.error(INVALID_ELEMENT_ERROR);
            return instance;
        }
        instance.setOptions(options1).then(function(state) {
            if (!isDestroyed && options1.onFirstUpdate) options1.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state1.orderedModifiers.forEach(function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {
                } : _ref3$options, effect = _ref3.effect;
                if (typeof effect === 'function') {
                    var cleanupFn = effect({
                        state: state1,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {
                    };
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var createPopper = /*#__PURE__*/ popperGenerator(); // eslint-disable-next-line import/no-unused-modules

},{"./dom-utils/getCompositeRect.js":"8b0JE","./dom-utils/getLayoutRect.js":"5s4wU","./dom-utils/listScrollParents.js":"bbheP","./dom-utils/getOffsetParent.js":"6AmEu","./dom-utils/getComputedStyle.js":"2muzQ","./utils/orderModifiers.js":"38gV8","./utils/debounce.js":"gQmR0","./utils/validateModifiers.js":"hFoUA","./utils/uniqueBy.js":"8PGlo","./utils/getBasePlacement.js":"arRPr","./utils/mergeByName.js":"1Btp8","./utils/detectOverflow.js":"croIc","./dom-utils/instanceOf.js":"euczA","./enums.js":"jsJ1r","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"8b0JE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getBoundingClientRectJs = require("./getBoundingClientRect.js");
var _getBoundingClientRectJsDefault = parcelHelpers.interopDefault(_getBoundingClientRectJs);
var _getNodeScrollJs = require("./getNodeScroll.js");
var _getNodeScrollJsDefault = parcelHelpers.interopDefault(_getNodeScrollJs);
var _getNodeNameJs = require("./getNodeName.js");
var _getNodeNameJsDefault = parcelHelpers.interopDefault(_getNodeNameJs);
var _instanceOfJs = require("./instanceOf.js");
var _getWindowScrollBarXJs = require("./getWindowScrollBarX.js");
var _getWindowScrollBarXJsDefault = parcelHelpers.interopDefault(_getWindowScrollBarXJs);
var _getDocumentElementJs = require("./getDocumentElement.js");
var _getDocumentElementJsDefault = parcelHelpers.interopDefault(_getDocumentElementJs);
var _isScrollParentJs = require("./isScrollParent.js");
var _isScrollParentJsDefault = parcelHelpers.interopDefault(_isScrollParentJs);
var _mathJs = require("../utils/math.js");
function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = _mathJs.round(rect.width) / element.offsetWidth || 1;
    var scaleY = _mathJs.round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = _instanceOfJs.isHTMLElement(offsetParent);
    var offsetParentIsScaled = _instanceOfJs.isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = _getDocumentElementJsDefault.default(offsetParent);
    var rect = _getBoundingClientRectJsDefault.default(elementOrVirtualElement, offsetParentIsScaled);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (_getNodeNameJsDefault.default(offsetParent) !== 'body' || _isScrollParentJsDefault.default(documentElement)) scroll = _getNodeScrollJsDefault.default(offsetParent);
        if (_instanceOfJs.isHTMLElement(offsetParent)) {
            offsets = _getBoundingClientRectJsDefault.default(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = _getWindowScrollBarXJsDefault.default(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}
exports.default = getCompositeRect;

},{"./getBoundingClientRect.js":"fmtiV","./getNodeScroll.js":"1Xz3K","./getNodeName.js":"1RIfT","./instanceOf.js":"euczA","./getWindowScrollBarX.js":"aIxhy","./getDocumentElement.js":"8LTgc","./isScrollParent.js":"bv8JC","../utils/math.js":"l31xC","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"1Xz3K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getWindowScrollJs = require("./getWindowScroll.js");
var _getWindowScrollJsDefault = parcelHelpers.interopDefault(_getWindowScrollJs);
var _getWindowJs = require("./getWindow.js");
var _getWindowJsDefault = parcelHelpers.interopDefault(_getWindowJs);
var _instanceOfJs = require("./instanceOf.js");
var _getHTMLElementScrollJs = require("./getHTMLElementScroll.js");
var _getHTMLElementScrollJsDefault = parcelHelpers.interopDefault(_getHTMLElementScrollJs);
function getNodeScroll(node) {
    if (node === _getWindowJsDefault.default(node) || !_instanceOfJs.isHTMLElement(node)) return _getWindowScrollJsDefault.default(node);
    else return _getHTMLElementScrollJsDefault.default(node);
}
exports.default = getNodeScroll;

},{"./getWindowScroll.js":"ceLuy","./getWindow.js":"6xkh7","./instanceOf.js":"euczA","./getHTMLElementScroll.js":"fSEJh","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"fSEJh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}
exports.default = getHTMLElementScroll;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"38gV8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _enumsJs = require("../enums.js"); // source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase
    return _enumsJs.modifierPhases.reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}
exports.default = orderModifiers;

},{"../enums.js":"jsJ1r","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"gQmR0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function debounce(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}
exports.default = debounce;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"hFoUA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _formatJs = require("./format.js");
var _formatJsDefault = parcelHelpers.interopDefault(_formatJs);
var _enumsJs = require("../enums.js");
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = [
    'name',
    'enabled',
    'phase',
    'fn',
    'effect',
    'requires',
    'options'
];
function validateModifiers(modifiers) {
    modifiers.forEach(function(modifier) {
        [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
        .filter(function(value, index, self) {
            return self.indexOf(value) === index;
        }).forEach(function(key) {
            switch(key){
                case 'name':
                    if (typeof modifier.name !== 'string') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
                    break;
                case 'enabled':
                    if (typeof modifier.enabled !== 'boolean') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
                    break;
                case 'phase':
                    if (_enumsJs.modifierPhases.indexOf(modifier.phase) < 0) console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enumsJs.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
                    break;
                case 'fn':
                    if (typeof modifier.fn !== 'function') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
                    break;
                case 'effect':
                    if (modifier.effect != null && typeof modifier.effect !== 'function') console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
                    break;
                case 'requires':
                    if (modifier.requires != null && !Array.isArray(modifier.requires)) console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
                    break;
                case 'requiresIfExists':
                    if (!Array.isArray(modifier.requiresIfExists)) console.error(_formatJsDefault.default(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
                    break;
                case 'options':
                case 'data':
                    break;
                default:
                    console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function(s) {
                        return "\"" + s + "\"";
                    }).join(', ') + "; but \"" + key + "\" was provided.");
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
                if (modifiers.find(function(mod) {
                    return mod.name === requirement;
                }) == null) console.error(_formatJsDefault.default(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
            });
        });
    });
}
exports.default = validateModifiers;

},{"./format.js":"7sBk7","../enums.js":"jsJ1r","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"7sBk7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function format(str) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
    return [].concat(args).reduce(function(p, c) {
        return p.replace(/%s/, c);
    }, str);
}
exports.default = format;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"8PGlo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function uniqueBy(arr, fn) {
    var identifiers = new Set();
    return arr.filter(function(item) {
        var identifier = fn(item);
        if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
        }
    });
}
exports.default = uniqueBy;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"1Btp8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function mergeByName(modifiers) {
    var merged1 = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({
        }, existing, current, {
            options: Object.assign({
            }, existing.options, current.options),
            data: Object.assign({
            }, existing.data, current.data)
        }) : current;
        return merged;
    }, {
    }); // IE11 does not support Object.values
    return Object.keys(merged1).map(function(key) {
        return merged1[key];
    });
}
exports.default = mergeByName;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"kiyYM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", function() {
    return createPopper;
}) // eslint-disable-next-line import/no-unused-modules
;
parcelHelpers.export(exports, "popperGenerator", function() {
    return _createPopperJs.popperGenerator;
});
parcelHelpers.export(exports, "defaultModifiers", function() {
    return defaultModifiers;
});
parcelHelpers.export(exports, "detectOverflow", function() {
    return _createPopperJs.detectOverflow;
});
parcelHelpers.export(exports, "createPopperLite", function() {
    return _popperLiteJs.createPopper;
}) // eslint-disable-next-line import/no-unused-modules
;
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var _offsetJs = require("./modifiers/offset.js");
var _offsetJsDefault = parcelHelpers.interopDefault(_offsetJs);
var _flipJs = require("./modifiers/flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _preventOverflowJs = require("./modifiers/preventOverflow.js");
var _preventOverflowJsDefault = parcelHelpers.interopDefault(_preventOverflowJs);
var _arrowJs = require("./modifiers/arrow.js");
var _arrowJsDefault = parcelHelpers.interopDefault(_arrowJs);
var _hideJs = require("./modifiers/hide.js");
var _hideJsDefault = parcelHelpers.interopDefault(_hideJs);
var _popperLiteJs = require("./popper-lite.js");
var _indexJs = require("./modifiers/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var defaultModifiers = [
    _eventListenersJsDefault.default,
    _popperOffsetsJsDefault.default,
    _computeStylesJsDefault.default,
    _applyStylesJsDefault.default,
    _offsetJsDefault.default,
    _flipJsDefault.default,
    _preventOverflowJsDefault.default,
    _arrowJsDefault.default,
    _hideJsDefault.default
];
var createPopper = /*#__PURE__*/ _createPopperJs.popperGenerator({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"8qvXu","./modifiers/eventListeners.js":"gWilp","./modifiers/popperOffsets.js":"494Es","./modifiers/computeStyles.js":"jSB8s","./modifiers/applyStyles.js":"1injV","./modifiers/offset.js":"8DsKF","./modifiers/flip.js":"aG7wP","./modifiers/preventOverflow.js":"dhEl3","./modifiers/arrow.js":"1sFOF","./modifiers/hide.js":"bens7","./popper-lite.js":"ditDC","./modifiers/index.js":"fP9Io","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}],"ditDC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", function() {
    return createPopper;
});
parcelHelpers.export(exports, "popperGenerator", function() {
    return _createPopperJs.popperGenerator;
});
parcelHelpers.export(exports, "defaultModifiers", function() {
    return defaultModifiers;
});
parcelHelpers.export(exports, "detectOverflow", function() {
    return _createPopperJs.detectOverflow;
});
var _createPopperJs = require("./createPopper.js");
var _eventListenersJs = require("./modifiers/eventListeners.js");
var _eventListenersJsDefault = parcelHelpers.interopDefault(_eventListenersJs);
var _popperOffsetsJs = require("./modifiers/popperOffsets.js");
var _popperOffsetsJsDefault = parcelHelpers.interopDefault(_popperOffsetsJs);
var _computeStylesJs = require("./modifiers/computeStyles.js");
var _computeStylesJsDefault = parcelHelpers.interopDefault(_computeStylesJs);
var _applyStylesJs = require("./modifiers/applyStyles.js");
var _applyStylesJsDefault = parcelHelpers.interopDefault(_applyStylesJs);
var defaultModifiers = [
    _eventListenersJsDefault.default,
    _popperOffsetsJsDefault.default,
    _computeStylesJsDefault.default,
    _applyStylesJsDefault.default
];
var createPopper = /*#__PURE__*/ _createPopperJs.popperGenerator({
    defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

},{"./createPopper.js":"8qvXu","./modifiers/eventListeners.js":"gWilp","./modifiers/popperOffsets.js":"494Es","./modifiers/computeStyles.js":"jSB8s","./modifiers/applyStyles.js":"1injV","@parcel/transformer-js/src/esmodule-helpers.js":"dBYYk"}]},["8hVeF","5Msky"], "5Msky", "parcelRequire6352")

//# sourceMappingURL=galeria.abdb1b70.js.map
