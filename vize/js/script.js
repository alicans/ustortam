$(document).ready(function () {

    $('#universite a img').hover(function () { /* universite id'li div içerisindeki linkli resim üzerine gelinirse */
        $('.egeuni').removeClass('hide'); /* egeuni div'inin classındaki hide class'ını kaldır. (görünür hale getir)*/
    }, function () {
        $('.egeuni').addClass('hide'); /* egeuni div'ine hide class'ını ekle. (görünürlükten çıkar)*/
    });

     $('#posta a img').hover(function () { /* posta id'li div içerisindeki linkli resim üzerine gelinirse */
        $('.egeposta').removeClass('hide');/* egeposta div'inin classındaki hide class'ını kaldır. (görünür hale getir)*/
    }, function () {
        $('.egeposta').addClass('hide');/* egeposta div'ine hide class'ını ekle. (görünürlükten çıkar)*/
    });

 	$('#tel a img').hover(function () { /* tel id'li div içerisindeki linkli resim üzerine gelinirse */
        $('.egetel').removeClass('hide');/* egetel div'inin classındaki hide class'ını kaldır. (görünür hale getir)*/
    }, function () {
        $('.egetel').addClass('hide');/* egetel div'ine hide class'ını ekle. (görünürlükten çıkar)*/
    });

 	$('#duyuru a img').hover(function () { /* duyuru id'li div içerisindeki linkli resim üzerine gelinirse */
        $('.egeduyuru').removeClass('hide');/* egeduyuru div'inin classındaki hide class'ını kaldır. (görünür hale getir)*/
    }, function () {
        $('.egeduyuru').addClass('hide');/* egeduyuru div'ine hide class'ını ekle. (görünürlükten çıkar)*/
    });

 	$('#mezun a img').hover(function () { /* mezun id'li div içerisindeki linkli resim üzerine gelinirse */
        $('.mezunlar').removeClass('hide');/* mezunlar div'inin classındaki hide class'ını kaldır. (görünür hale getir)*/
    }, function () {
        $('.mezunlar').addClass('hide');/* mezunlar div'ine hide class'ını ekle. (görünürlükten çıkar)*/
    });

     	$('#harita a img').hover(function () { /* harita id'li div içerisindeki linkli resim üzerine gelinirse */
        $('.egeharita').removeClass('hide');/* egeharita div'inin classındaki hide class'ını kaldır. (görünür hale getir)*/
    }, function () {
        $('.egeharita').addClass('hide');/* egeharita div'ine hide class'ını ekle. (görünürlükten çıkar)*/
    });

	$('#sosyal img').hover(function () { /* harita id'li div içerisindeki linkli resim üzerine gelinirse */
        $('.sosyalmedya').removeClass('hide');/* egeharita div'inin classındaki hide class'ını kaldır. (görünür hale getir)*/
    });
});



(function (global) {

var dc = {};

var homeHtml = "snippets/home-snippet.html";
var categoriesTitleHtml = "";
var categoryHtml = "snippets/egitim-snippet.html";
var donemHtml = "snippets/donem-snippet.html";
var sinifHtml = "snippets/sinif-snippet.html";

var personelHtml = "snippets/personel-snippet.html";
var personelKatHtml = "snippets/personelkat-snippet.html";

var egitimUrl = "data/egitim.json";
var personelUrl = "data/personel.json";
var personelKatUrl = "data/personelKategori.json";
var donemUrl = "data/donem.json";
var sinifUrl = "data/sinif.json";

var menuItemsTitleHtml = "snippets/menu-items-title.html";
var menuItemHtml = "snippets/menu-item.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// Return substitute of '{{propName}}'
// with propValue in given 'string'
var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
}


// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});



// Load the menu categories view
dc.loadSinif = function () {

showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    sinifUrl,
    buildAndShowSinifHTML);

};


// Load the menu categories view
dc.loadDonem = function () {

showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    donemUrl,
    buildAndShowDonemsHTML);

};

// Load the menu categories view
dc.loadEgitim = function () {

  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    egitimUrl,
    buildAndShowCategoriesHTML);

};

// Load the menu categories view
dc.loadPersonel = function () {

  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    personelKatUrl,
    buildAndShowPersonelsHTML);

};

// Load the menu categories view
dc.loadPersonel2 = function () {

  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    personelUrl,
    buildAndShowPersonel2HTML);

};




// Builds HTML for the categories page based on the data
// from the server
function buildAndShowCategoriesHTML (categories) {
  // Load title snippet of categories page
  $ajaxUtils.sendGetRequest(
    categoriesTitleHtml,
    function (categoriesTitleHtml) {
      // Retrieve single category snippet
      $ajaxUtils.sendGetRequest(
        categoryHtml,
        function (categoryHtml) {


          var categoriesViewHtml =
            buildCategoriesViewHtml(categories,
                                    "<h2 id='menu-categories-title' class='text-center'>EĞİTİM</h2>",
                                    categoryHtml);
          insertHtml("#main-content", categoriesViewHtml);
        },
        false);
    },
    false);
}

// Builds HTML for the categories page based on the data
// from the server
function buildAndShowPersonelsHTML (a) {
  // Load title snippet of categories page
  $ajaxUtils.sendGetRequest(
    categoriesTitleHtml,
    function (categoriesTitleHtml) {
      // Retrieve single category snippet
      $ajaxUtils.sendGetRequest(
        personelKatHtml,
        function (categoryHtml) {


          var categoriesViewHtml =
            buildPersonelsViewHtml(a,
                                    "<h2 id='menu-categories-title' class='text-center'>PERSONEL</h2>",
                                    categoryHtml);
          insertHtml("#main-content", categoriesViewHtml);
        },
        false);
    },
    false);
}

// Builds HTML for the categories page based on the data
// from the server
function buildAndShowPersonel2HTML (a) {
  // Load title snippet of categories page
  $ajaxUtils.sendGetRequest(
    categoriesTitleHtml,
    function (categoriesTitleHtml) {
      // Retrieve single category snippet
      $ajaxUtils.sendGetRequest(
        personelHtml,
        function (categoryHtml) {


          var categoriesViewHtml =
            buildPersonel2ViewHtml(a,
                                    "<h2 id='menu-categories-title' class='text-center'>PERSONEL</h2>",
                                    categoryHtml);
          insertHtml("#main-content", categoriesViewHtml);
        },
        false);
    },
    false);
}




// Builds HTML for the categories page based on the data
// from the server
function buildAndShowDonemsHTML (donems) {
  // Load title snippet of categories page
  $ajaxUtils.sendGetRequest(
    categoriesTitleHtml,
    function (categoriesTitleHtml) {
      // Retrieve single category snippet
      $ajaxUtils.sendGetRequest(
        donemHtml,
        function (categoryHtml) {


          var categoriesViewHtml =
            buildDonemsViewHtml(donems,
                                    "<h2 id='menu-categories-title' class='text-center'>DÖNEM</h2>",
                                    categoryHtml);
          insertHtml("#main-content", categoriesViewHtml);
        },
        false);
    },
    false);
}

// Builds HTML for the categories page based on the data
// from the server
function buildAndShowSinifHTML (sinifs) {
  // Load title snippet of categories page
  $ajaxUtils.sendGetRequest(
    categoriesTitleHtml,
    function (categoriesTitleHtml) {
      // Retrieve single category snippet
      $ajaxUtils.sendGetRequest(
        sinifHtml,
        function (categoryHtml) {


          var categoriesViewHtml =
            buildSinifsViewHtml(sinifs,
                                    "<h2 id='menu-categories-title' class='text-center'>SINIF</h2>",
                                    categoryHtml);
          insertHtml("#main-content", categoriesViewHtml);
        },
        false);
    },
    false);
}

// Using categories data and snippets html
// build categories view HTML to be inserted into page
function buildSinifsViewHtml(categories, 
                                 categoriesTitleHtml,
                                 categoryHtml) {

  var finalHtml = "";
  finalHtml += "<section class='row'><div id='home-tiles' class='row'>";


    // Insert category values
    var html = categoryHtml;
    finalHtml += html;
  

  finalHtml += "</div><!-- End of #home-tiles --></section>";
  return finalHtml;
}

// Using categories data and snippets html
// build categories view HTML to be inserted into page
function buildDonemsViewHtml(categories, 
                                 categoriesTitleHtml,
                                 categoryHtml) {

  var finalHtml = categoriesTitleHtml;
  finalHtml += "<section class='row'><div id='home-tiles' class='row'>";

  // Loop over categories
  for (var i = 0; i < categories.length; i++) {
    // Insert category values
    var html = categoryHtml;
    var donem = "" + categories[i].donem;
    html = insertProperty(html, "donem", donem);
    finalHtml += html;
  }

  finalHtml += "</div><!-- End of #home-tiles --></section>";
  return finalHtml;
}


// Using categories data and snippets html
// build categories view HTML to be inserted into page
function buildPersonelsViewHtml(categories, 
                                 categoriesTitleHtml,
                                 categoryHtml) {

  var finalHtml = categoriesTitleHtml;
  finalHtml += "<section class='row'><div id='home-tiles' class='row'>";


     // Loop over categories
  for (var i = 0; i < categories.length; i++) {
    // Insert category values
    var html = categoryHtml;
    var kategori = "" + categories[i].kategori;
    html = insertProperty(html, "kategori", kategori);
    finalHtml += html;
  }


  finalHtml += "</div><!-- End of #home-tiless --></section>";
  return finalHtml;
}

// Using categories data and snippets html
// build categories view HTML to be inserted into page
function buildPersonel2ViewHtml(categories, 
                                 categoriesTitleHtml,
                                 categoryHtml,kategori) {

  var finalHtml = categoriesTitleHtml;
  finalHtml += "<section class='row'><div id='home-tiles' class='row'>";


     // Loop over categories
  for (var i = 0; i < categories.length; i++) {
    // Insert category values
    var html = categoryHtml;
    var resim = "" + categories[i].resim;
    var isim = "" + categories[i].isim;
    var unvan = "" + categories[i].unvan;
    var telefon = "" + categories[i].telefon;
    var eposta = "" + categories[i].eposta;
    html = insertProperty(html, "resim", resim);
    html = insertProperty(html, "isim", isim);
    html = insertProperty(html, "unvan", unvan);
    html = insertProperty(html, "telefon", telefon);
    html = insertProperty(html, "eposta", eposta);
    finalHtml += html;
  }


  finalHtml += "</div><!-- End of #home-tiless --></section>";
  return finalHtml;
}

// Using categories data and snippets html
// build categories view HTML to be inserted into page
function buildCategoriesViewHtml(categories, 
                                 categoriesTitleHtml,
                                 categoryHtml) {

  var finalHtml = categoriesTitleHtml;
  finalHtml += "<section class='row'><div id='home-tiles' class='row'>";

  // Loop over categories
  for (var i = 0; i < categories.length; i++) {
    // Insert category values
    var html = categoryHtml;
    var tur = "" + categories[i].tur;
    var isim = categories[i].isim;
    html = insertProperty(html, "tur", tur);
    html = insertProperty(html, "isim", isim);
    finalHtml += html;
  }

  finalHtml += "</div><!-- End of #home-tiles --></section>";
  return finalHtml;
}


// Builds HTML for the single category page based on the data
// from the server
function buildAndShowMenuItemsHTML (categoryMenuItems) {
  // Load title snippet of menu items page
  $ajaxUtils.sendGetRequest(
    menuItemsTitleHtml,
    function (menuItemsTitleHtml) {
      // Retrieve single menu item snippet
      $ajaxUtils.sendGetRequest(
        menuItemHtml,
        function (menuItemHtml) {

          var menuItemsViewHtml =
            buildMenuItemsViewHtml(categoryMenuItems,
                                   menuItemsTitleHtml,
                                   menuItemHtml);
          insertHtml("#main-content", menuItemsViewHtml);
        },
        false);
    },
    false);
}


// Using category and menu items data and snippets html
// build menu items view HTML to be inserted into page
function buildMenuItemsViewHtml(categoryMenuItems,
                                menuItemsTitleHtml,
                                menuItemHtml) {

  menuItemsTitleHtml = insertProperty(menuItemsTitleHtml,"name", categoryMenuItems.isim);
  menuItemsTitleHtml = insertProperty(menuItemsTitleHtml, "special_instructions", categoryMenuItems.unvan);
  var finalHtml = menuItemsTitleHtml;
  finalHtml += "<section class='row'>";

  // Loop over menu items
  var menuItems = categoryMenuItems;
  var catShortName = categoryMenuItems.telefon;
  for (var i = 0; i < menuItems.length; i++) {
    // Insert menu item values
    var html = menuItemHtml;
    html =insertProperty(html, "short_name", menuItems[i].short_name);
    html =insertProperty(html,"catShortName",catShortName);
    html =insertItemPrice(html,"price_small",menuItems[i].price_small);
    html =insertItemPortionName(html,"small_portion_name",menuItems[i].small_portion_name);
    html =insertItemPrice(html,"price_large",menuItems[i].price_large);
    html =insertItemPortionName(html,"large_portion_name",menuItems[i].large_portion_name);
    html =insertProperty(html,"name",menuItems[i].name);
    html =insertProperty(html,"description",menuItems[i].description);

    // Add clearfix after every second menu item
    if (i % 2 != 0) {
      html +=
        "<div class='clearfix visible-lg-block visible-md-block'></div>";
    }

    finalHtml += html;
  }

  finalHtml += "</section>";
  return finalHtml;
}


// Appends price with '$' if price exists
function insertItemPrice(html,
                         pricePropName,
                         priceValue) {
  // If not specified, replace with empty string
  if (!priceValue) {
    return insertProperty(html, pricePropName, "");;
  }

  priceValue = "$" + priceValue.toFixed(2);
  html = insertProperty(html, pricePropName, priceValue);
  return html;
}


// Appends portion name in parens if it exists
function insertItemPortionName(html,
                               portionPropName,
                               portionValue) {
  // If not specified, return original string
  if (!portionValue) {
    return insertProperty(html, portionPropName, "");
  }

  portionValue = "(" + portionValue + ")";
  html = insertProperty(html, portionPropName, portionValue);
  return html;
}


global.$dc = dc;

})(window);
