// Create a connection to your Firebase database
var ref = new Firebase("https://amp-stats.firebaseio.com/txgarage/sponsors");
var trackedList = document.getElementById('list');
var totalsBox = document.getElementById('total');
var titanCampaign = [];

ref.on("value", function(snapshot) {
  var total = snapshot.numChildren();
  totalsBox.innerHTML = 'Total Ads Clicks: ' + total;
  trackedList.innerHTML = '';
  console.log(snapshot.val());
  var data = snapshot.forEach(function(child) {
    var message = child.val();
    // displaying all clicks
    trackedList.insertAdjacentHTML('beforeend', '<li>ad clicked - ' + message.date + ' - ' + message.page + ' - ' + message.link + '</li>');
    // setting up a campaign
    if(message.link === "nissanTitan") {
      titanCampaign.push(message);
    }
  });

  titanJulyTotals = document.getElementById('titan-july-totals');
  titanAugTotals = document.getElementById('titan-aug-totals');
  titanSeptTotals = document.getElementById('titan-sept-totals');
  titanOctTotals = document.getElementById('titan-oct-totals');
  titanNovTotals = document.getElementById('titan-nov-totals');
  titanDecTotals = document.getElementById('titan-dec-totals');

  var titanJuly = [];
  var titanAug = [];
  var titanSept = [];
  var titanOct = [];
  var titanNov = [];
  var titanDec = [];

  titanCampaign.forEach(function(item) {
    if(item.date > '06/30/2015' && item.date < '08/01/2015') {
      titanJuly.push(item);
    }
    if(item.date > '07/30/2015' && item.date < '09/01/2015') {
      titanAug.push(item);
    }
    if(item.date > '08/30/2015' && item.date < '10/01/2015') {
      titanSept.push(item);
    }
    if(item.date > '09/30/2015' && item.date < '11/01/2015') {
      titanOct.push(item);
    }
    if(item.date > '10/30/2015' && item.date < '12/01/2015') {
      titanNov.push(item);
    }
    if(item.date > '11/30/2015' && item.date < '01/01/2016') {
      titanDec.push(item);
    }
  });

  titanJulyTotals.insertAdjacentHTML('beforeend', orDash(titanJuly.length));
  titanAugTotals.insertAdjacentHTML('beforeend', orDash(titanAug.length));
  titanSeptTotals.insertAdjacentHTML('beforeend', orDash(titanAug.length));
  titanOctTotals.insertAdjacentHTML('beforeend', orDash(titanAug.length));
  titanNovTotals.insertAdjacentHTML('beforeend', orDash(titanAug.length));
  titanDecTotals.insertAdjacentHTML('beforeend', orDash(titanAug.length));

});

function orDash(value) {
  if(value > 0) {
    return value;
  }else{
    return ' - ';
  }
}
