(()=>{"use strict";(()=>{function e(e,t){const n=document.evaluate(`//text()[contains(., "${e}")]`,document.body,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);for(let o=0;o<n.snapshotLength;o++){const s=n.snapshotItem(o),l=s.parentNode,i=(s.textContent||"").split(new RegExp(`(${e})`,"gi")),a=document.createDocumentFragment();i.forEach((n=>{if(n.toLowerCase()===e.toLowerCase()){const e=document.createElement("span");e.classList.add("highlight"),e.style.backgroundColor="yellow",e.style.cursor="help",e.style.position="relative",e.textContent=n;const o=document.createElement("span");o.classList.add("popup-info"),o.style.visibility="hidden",o.style.width="200px",o.style.backgroundColor="#555",o.style.color="#fff",o.style.textAlign="center",o.style.borderRadius="6px",o.style.padding="5px",o.style.position="absolute",o.style.zIndex="9999",o.style.bottom="100%",o.style.left="50%",o.style.transform="translateX(-50%)",o.style.opacity="0",o.style.transition="opacity 0.3s",o.textContent=t,e.appendChild(o),e.addEventListener("mouseenter",(()=>{o.style.visibility="visible",o.style.opacity="1"})),e.addEventListener("mouseleave",(()=>{o.style.visibility="hidden",o.style.opacity="0"})),a.appendChild(e)}else a.appendChild(document.createTextNode(n))})),l.replaceChild(a,s)}const o=document.createElement("style");o.textContent="\n    .highlight {\n      position: relative;\n      background-color: yellow;\n      cursor: help;\n    }\n    .popup-info {\n      visibility: hidden;\n      width: 200px;\n      background-color: #555;\n      color: #fff;\n      text-align: center;\n      border-radius: 6px;\n      padding: 5px;\n      position: absolute;\n      z-index: 9999;\n      bottom: 100%;\n      left: 50%;\n      transform: translateX(-50%);\n      opacity: 0;\n      transition: opacity 0.3s;\n    }\n  ",document.head.appendChild(o)}chrome.runtime.onMessage.addListener(((t,n,o)=>{var s,l;const i=t;switch(console.log("Received message from sender %s",n.id,t),i.type){case"highlightTactics":let t=i.data;for(let n of t)e(n.text,n.name+": "+n.reason);break;case"logToConsole":console.info(i.data);break;case"getSelectedText":const n=null!==(l=null===(s=window.getSelection())||void 0===s?void 0:s.toString())&&void 0!==l?l:"";console.info("Selected text",n),o({selectedText:n});break;default:console.warn("Unknown message type",i.type)}o(void 0),o({title:document.title,url:window.location.href})}))})()})();
//# sourceMappingURL=content.js.map