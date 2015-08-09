(function() {
  var campaign = {
    campaigns: ['nissanTitan', 'google'],
    init: function() {
      // get the dom
      this.dom();
      // bind any events...
      // render to page
      this.render();
    },
    dom: function() {
      this.el = document.getElementById('campaigns');
    },
    render: function() {
      var _this = this;
      this.el.insertAdjacentHTML('beforeend', '<h2>Campaigns</h2>');
      this.campaigns.forEach(function(campaign) {
        _this.el.insertAdjacentHTML('beforeend', '<a href=# class="btn">'+campaign+'</a>');
      });
      console.log(this.campaigns);
    }
  }

  campaign.init();

})();
