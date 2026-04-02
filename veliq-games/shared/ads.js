/**
 * Veliq Games - Ads Module
 * Google AdSense integration with interstitial support.
 * Replace ca-pub-XXXXXXXXXXXXXXXX with your AdSense publisher ID.
 */
(function () {
  var AD_CLIENT = 'ca-pub-XXXXXXXXXXXXXXXX';
  var playCount = 0;

  // Load AdSense script
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + AD_CLIENT;
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);

  window.VeliqAds = {
    /**
     * Show a standard ad unit in the given container.
     * @param {string} containerId - ID of the ad container element.
     */
    showAd: function (containerId) {
      var container = document.getElementById(containerId);
      if (!container) return;
      container.innerHTML =
        '<ins class="adsbygoogle" style="display:block" data-ad-client="' + AD_CLIENT + '" data-ad-slot="XXXXXXXXXX" data-ad-format="auto" data-full-width-responsive="true"></ins>';
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        // AdSense not loaded
      }
    },

    /**
     * Show interstitial ad every 5 plays.
     */
    showInterstitial: function () {
      playCount++;
      if (playCount % 5 !== 0) return;
      var overlay = document.createElement('div');
      overlay.id = 'veliq-interstitial';
      overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:10000;display:flex;flex-direction:column;align-items:center;justify-content:center;';
      overlay.innerHTML =
        '<div style="background:#111;border:1px solid #C9A84C;border-radius:12px;padding:24px;max-width:360px;width:90%;text-align:center;">' +
        '<p style="color:#C9A84C;font-size:14px;margin:0 0 16px;">広告</p>' +
        '<ins class="adsbygoogle" style="display:block" data-ad-client="' + AD_CLIENT + '" data-ad-slot="XXXXXXXXXX" data-ad-format="auto" data-full-width-responsive="true"></ins>' +
        '<button onclick="document.getElementById(\'veliq-interstitial\').remove()" style="margin-top:16px;padding:10px 32px;background:#C9A84C;color:#000;border:none;border-radius:6px;font-size:16px;cursor:pointer;">閉じる</button>' +
        '</div>';
      document.body.appendChild(overlay);
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    },

    incrementPlayCount: function () {
      playCount++;
    },

    getPlayCount: function () {
      return playCount;
    }
  };
})();
