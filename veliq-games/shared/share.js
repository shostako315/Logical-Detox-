/**
 * Veliq Games - Share Module
 * Social sharing for X (Twitter), LINE, and URL copy.
 */
(function () {
  window.VeliqShare = {
    /**
     * Share on X (Twitter).
     * @param {string} text - Share text.
     * @param {string} url - Page URL.
     * @param {string} gameName - Game name for analytics.
     */
    shareTwitter: function (text, url, gameName) {
      if (window.VeliqAnalytics) VeliqAnalytics.shareClick(gameName, 'twitter');
      var shareUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url);
      window.open(shareUrl, '_blank', 'width=550,height=420');
    },

    /**
     * Share on LINE.
     * @param {string} text - Share text.
     * @param {string} url - Page URL.
     * @param {string} gameName - Game name for analytics.
     */
    shareLINE: function (text, url, gameName) {
      if (window.VeliqAnalytics) VeliqAnalytics.shareClick(gameName, 'line');
      var shareUrl = 'https://social-plugins.line.me/lineit/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text);
      window.open(shareUrl, '_blank');
    },

    /**
     * Copy URL to clipboard.
     * @param {string} url - URL to copy.
     * @param {string} gameName - Game name for analytics.
     * @param {function} [callback] - Optional callback after copy.
     */
    copyURL: function (url, gameName, callback) {
      if (window.VeliqAnalytics) VeliqAnalytics.shareClick(gameName, 'copy');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function () {
          if (callback) callback(true);
        }).catch(function () {
          VeliqShare._fallbackCopy(url, callback);
        });
      } else {
        VeliqShare._fallbackCopy(url, callback);
      }
    },

    _fallbackCopy: function (text, callback) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;opacity:0;';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        if (callback) callback(true);
      } catch (e) {
        if (callback) callback(false);
      }
      document.body.removeChild(ta);
    },

    /**
     * Build share text from template.
     * @param {string} template - Text with {key} placeholders.
     * @param {Object} data - Key-value pairs for replacement.
     * @returns {string}
     */
    buildText: function (template, data) {
      var result = template;
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          result = result.replace(new RegExp('\\{' + key + '\\}', 'g'), data[key]);
        }
      }
      return result;
    }
  };
})();
