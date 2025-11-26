// common/js/core.js

document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. 强力 CSS 补丁 (防止 JS 判断失误) ---
    // 如果是首页，强制隐藏所有 ID 为 generated-back-btn 的元素
    var style = document.createElement('style');
    style.innerHTML = `
        body.home-page #generated-back-btn { display: none !important; }
    `;
    document.head.appendChild(style);

    // --- 2. 按钮生成逻辑 ---
    // 只有 body 没有 "home-page" 类时才生成
    if (!document.body.classList.contains('home-page')) {
        
        var backBtn = document.createElement("button");
        backBtn.id = "generated-back-btn"; // 给个身份证，方便 CSS 瞄准
        backBtn.innerHTML = "← 返回列表";
        backBtn.onclick = function() { history.back(); };
        
        Object.assign(backBtn.style, {
            position: "fixed",
            top: "20px",
            left: "20px",
            zIndex: "99999",
            background: "#2c3e50",
            color: "white",
            border: "1px solid rgba(255,255,255,0.2)",
            padding: "8px 18px",
            borderRadius: "30px",
            fontSize: "14px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            transition: "transform 0.2s"
        });

        backBtn.onmouseover = function(){ this.style.transform = "scale(1.05)"; };
        backBtn.onmouseout = function(){ this.style.transform = "scale(1)"; };
        
        document.body.appendChild(backBtn);
    }

    // --- 3. 域名防护 ---
    (function(){
        var allowedDomains = ["localhost", "127.0.0.1", "github.io"];
        var currentDomain = window.location.hostname;
        if (window.location.protocol === 'file:') return;
        if (currentDomain === "") return;
        var isAllowed = false;
        for(var i=0; i<allowedDomains.length; i++){
            if(currentDomain.includes(allowedDomains[i])) { isAllowed = true; break; }
        }
    })();
});