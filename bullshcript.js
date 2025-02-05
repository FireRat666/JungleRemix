// Enables Interaction for all the browser windows by HBR
	  AFRAME.registerComponent("enable-interaction", { init: async function() { await window.AframeInjection.waitFor(this.el, "browser");
			this.el.browser.ToggleInteraction(true) 			} });


  setTimeout(() => { 
    let leaderboard = document.getElementById("leaderboardpage");
    leaderboard.browser.pageWidth=800;
    leaderboard.browser.pageHeight=1200;
    leaderboard.browser.ToggleKeyboard(0);
    console.log("Hopefully set browser page width and height");
  }, 10000); 
