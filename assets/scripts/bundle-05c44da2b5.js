!function e(t,a,o){function r(s,i){if(!a[s]){if(!t[s]){var l="function"==typeof require&&require;if(!i&&l)return l(s,!0);if(n)return n(s,!0);var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}var c=a[s]={exports:{}};t[s][0].call(c.exports,function(e){var a=t[s][1][e];return r(a?a:e)},c,c.exports,e,t,a,o)}return a[s].exports}for(var n="function"==typeof require&&require,s=0;s<o.length;s++)r(o[s]);return r}({"/home/travis/build/energy-data/africa-grid-explorer/app/assets/scripts/config.js":[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e("lodash.defaultsdeep"),r=function(e){return e&&e.__esModule?e:{default:e}}(o),n={local:e("./config/local.js"),logo:e("./config/logo.js"),production:e("./config/production.js"),staging:e("./config/staging.js")},s=n.local||{};(0,r.default)(s,n.production),a.default=s.default},{"./config/local.js":"/home/travis/build/energy-data/africa-grid-explorer/app/assets/scripts/config/local.js","./config/logo.js":"/home/travis/build/energy-data/africa-grid-explorer/app/assets/scripts/config/logo.js","./config/production.js":"/home/travis/build/energy-data/africa-grid-explorer/app/assets/scripts/config/production.js","./config/staging.js":"/home/travis/build/energy-data/africa-grid-explorer/app/assets/scripts/config/staging.js","lodash.defaultsdeep":"lodash.defaultsdeep"}],"/home/travis/build/energy-data/africa-grid-explorer/app/assets/scripts/config/local.js":[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={environment:"development"}},{}],"/home/travis/build/energy-data/africa-grid-explorer/app/assets/scripts/config/logo.js":[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=["╭──────────────────────────────────────╮","│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│","│░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░│","│░░░░░░░░░░░░░░░█░░█░░░░█░░░░░░░░░░░░░░│","│░░░░░░░░░░░░░░░██░░█░░██░░░░░░░░░░░░░░│","│░░░░░░░░░░░░░░░███░█░███░░░░░░░░░░░░░░│","│░░░░░░░░░░░░░░░███░████░░░░░░░░░░░░░░░│","│░░░░░░░░░░░░░░░███████░░░░░░█░░░█░░░░░│","│░░░░░░░░██░░░░░██████░░░░░██░░██░░░░░░│","│░░░░░█░░░██░░░░░█████░░░███░███░░░░░░░│","│░░░░░░██░░███░░░█████░░██████░░░░░░░░░│","│░░░░░░░░██░███░░█████░░████░░░░░░░░░░░│","│░░░░░░░░░██████░░████░███░░░░░░░░░░░░░│","│░░░░░░░░░░░░████░███░░█░░░░░░░░░░░░░░░│","│░░░░░░█████░░░░████░░░░░░░░░░░░░░░░░░░│","│░░░░░░░░██████░░░██░░░█░░░░░░░░░░░░░░░│","│░░░░░░░░░░░░████░█████░░░░░░░░░░░░░░░░│","│░░░░░░░░░░░░░░██████░░░░░░░░░░░░░░░░░░│","│░░░░░░░░░░░░░░░░░███░░░░░░░░░░░░░░░░░░│","╰──────────────────────────────────────╯"],r=[];o=o.map(function(e,t){return e.replace(/(^|[|│])|(░+)|(█+)/g,function(e,t,a,o){return t?(r.push("black"),"%c"+t):a?(r.push("#cf3f02"),"%c"+a):o||!e?(r.push("black"),"%c"+(o||"")):void 0})}).concat(["                                        ","%c           DEVELOPMENT SEED             "]).join("\n"),r=r.map(function(e){return"color: "+e}).concat(["color: #cf3f02; font-weight: bold"]),a.default=[o].concat(r)},{}],"/home/travis/build/energy-data/africa-grid-explorer/app/assets/scripts/config/production.js":[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e("./logo"),r=function(e){return e&&e.__esModule?e:{default:e}}(o);a.default={environment:"production",consoleMessage:r.default,mapboxToken:"pk.eyJ1IjoiZ3NkcG0iLCJhIjoiY2lqbmN5eG9mMDBndHVmbTU5Mmg1djF6MiJ9.QqFCD7tcmccysN8GUClW8w",dataLayer:"https://test-offgrid-mvt.s3.amazonaws.com/tiles/19f22355-d631-4b25-a3a3-7a2bfe776720-1f2050f1-695e-4422-a22a-52ef9e4a9192/data.tilejson"}},{"./logo":"/home/travis/build/energy-data/africa-grid-explorer/app/assets/scripts/config/logo.js"}],"/home/travis/build/energy-data/africa-grid-explorer/app/assets/scripts/config/staging.js":[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={environment:"staging"}},{}],"/home/travis/build/energy-data/africa-grid-explorer/app/assets/scripts/main.js":[function(e,t,a){"use strict";var o=e("./config"),r=function(e){return e&&e.__esModule?e:{default:e}}(o);console.log.apply(console,r.default.consoleMessage),console.log("Environment",r.default.environment),mapboxgl.accessToken=r.default.mapboxToken;mapboxgl.NavigationControl();if(mapboxgl.supported()){var n=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/light-v9",center:[60,2.867],zoom:1.5});!function(e,t){e.on("load",function(){fetch(t).then(function(e){return e.json()}).then(function(t){var a=t;a.type="vector",a.attribution='<a href="http://energydata.info">energydata.info</a>',e.addSource("data",a),e.fitBounds([[a.bounds[0],a.bounds[1]],[a.bounds[2],a.bounds[3]]],{padding:20}),e.addControl(new mapboxgl.NavigationControl,"top-left"),e.addLayer({id:"data",type:"line",source:"data","source-layer":"data_layer",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":{property:"voltage_kV",type:"interval",stops:[[0,"#0288D1"],[1,"#689F38"],[66,"#F57C00"],[225,"#5D4037"]]},"line-width":{stops:[[0,1],[5,2],[10,3],[15,5]]},"line-opacity":{property:"status",type:"categorical",stops:[["Planned",.7],["Construction",.7]]}}}),e.on("click",function(t){var a=n.queryRenderedFeatures(t.point,{layers:["data"]});if(a.length){var o=a[0];(new mapboxgl.Popup).setLngLat(n.unproject(t.point)).setHTML("<dl>\n            <dt>Status</dt><dd>"+o.properties.status+"</dd>\n            <dt>Voltage</dt><dd>"+o.properties.voltage_kV+"KV</dd>\n          </dl>").addTo(e)}}),e.on("mousemove",function(t){var a=n.queryRenderedFeatures(t.point,{layers:["data"]});e.getCanvas().style.cursor=a.length?"pointer":""}),document.getElementById("filter").addEventListener("click",function(e){if(e.target&&"status-filter"==e.target.className){var t=e.target.innerText.toLowerCase();switch(e.preventDefault(),t){case"all":n.setFilter("data",["!=","status","Decommissioned"]);break;case"planned":n.setFilter("data",["in","status","Planned","Construction"]);break;case"existing":n.setFilter("data",["==","status","Existing"])}document.querySelectorAll(".status-filter").forEach(function(e){e.classList.remove("active")}),e.target.classList.add("active")}})})})}(n,r.default.dataLayer)}else document.getElementById("map").innerHTML="Your browser does not support Mapbox GL";document.getElementById("modal-open").addEventListener("click",function(e){e.preventDefault();var t=document.getElementById("about-modal");t.classList.remove("modal-leave","modal-leave-active"),t.classList.add("modal-enter","modal-enter-active")}),document.querySelectorAll("#about-modal, #modal-dismiss").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=document.getElementById("about-modal");t.classList.remove("modal-enter","modal-enter-active"),t.classList.add("modal-leave","modal-leave-active")})}),document.getElementById("about-modal-inner").addEventListener("click",function(e){e.stopPropagation()})},{"./config":"/home/travis/build/energy-data/africa-grid-explorer/app/assets/scripts/config.js"}]},{},["/home/travis/build/energy-data/africa-grid-explorer/app/assets/scripts/main.js"]);