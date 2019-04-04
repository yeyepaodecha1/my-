
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"status_bar { height: var(--status-bar-height); width: 100%; background-color: #ff9800; }\n.",[1],"top_view { height: var(--status-bar-height); width: 100%; position: fixed; background-color: #ff9800; top: 0; z-index: 999; }\n",],undefined,{path:"./pages/tabBar/me/me.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/tabBar/me/me.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      