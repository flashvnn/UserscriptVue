// ==UserScript==
// @name         VueScript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match             *://*/*
// @require      https://unpkg.com/vue@2.6.10/dist/vue.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
	const DEBUG = true
	const createLogger = (console, tag) =>
		Object.keys(console)
			.map(k => [k, (...args) => (DEBUG ? console[k](tag + ': ' + args[0], ...args.slice(1)) : void 0)])
			.reduce((acc, [k, fn]) => ((acc[k] = fn), acc), {})
	const logger = createLogger(console, 'VueScript');
    const win = window;
   	const div = win.document.createElement('div')
	win.document.body.appendChild(div)

    const template = `
    <div id="app">
    {{ message }}
    </div>
    `.slice(1)
    var app = new Vue({
            data() {
                return {
                    message: 'Hello Vue!'
                }
            },
        template
    }).$mount(div);
    logger.log(`App message: %s`, app.message)
    setInterval(function(){
    app.message = new Date().toString()
    }, 1000);
})();
