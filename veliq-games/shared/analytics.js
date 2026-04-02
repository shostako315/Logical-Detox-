/**
 * Veliq Games - Analytics Module
 * Google Analytics 4 integration with custom game events.
 * Replace GA_MEASUREMENT_ID with your actual GA4 Measurement ID.
 */
(function () {
  var GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

  // Load gtag.js
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);

  // Custom game events
  window.VeliqAnalytics = {
    gameStart: function (gameName) {
      gtag('event', 'game_start', { game_name: gameName });
    },
    gameOver: function (gameName, score) {
      gtag('event', 'game_over', { game_name: gameName, score: score });
    },
    gameClear: function (gameName, score, rank) {
      gtag('event', 'game_clear', { game_name: gameName, score: score, rank: rank || '' });
    },
    shareClick: function (gameName, platform) {
      gtag('event', 'share_click', { game_name: gameName, platform: platform });
    }
  };
})();
