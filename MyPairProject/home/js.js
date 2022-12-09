function welcome() {
   alert("Welcome to watch TN")
}
welcome();


var series = {
   "nouba": "../drama/html.html#nouba",
   "harga": "../drama/html.html#harga",
   "douar": "../drama/html.html#douar",
   "mnamet aroussia": "../drama/html.html#mnamet_aroussia",
   "sayd errim": "../drama/html.html#sayd_errim",
   "choufli hal": "../comedy/html.html#choufli_hal",
   "nsibti laaziza": "../comedy/html.html#nsibti_laaziza",
   "kan ya makenech": "../comedy/html.html#kan_ya_makenech",
   "superette azayyez": "../comedy/html.html#superette_azayyez",
   "boulice hala aadia": "../comedy/html.html#boulice_hala_aadia",
   "slides": "../home/html.html#slides"
   };

function search(keyword) {
  var keywords = Object.keys(series);
   if (keywords.indexOf(keyword) === -1)
      {
      alert("TV show doesn't exist yet");
     } 
   else{
      window.location = series[keyword];
   }
}



