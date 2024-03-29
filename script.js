// FOR OPENING AND CLOSING MENU IN PHONE
function openMenu() {
  const nav = document.querySelector(".right_nav_links_menu");
  nav.classList.toggle("open");
}

// FOR INCREASING THE PERCENTAGE VALUE
var current_Value = 0;
var total_Value = 100;
var percentage_html = document.querySelector(".prctg_html");

function updatePercentage() {
  if (current_Value <= total_Value) {
    percentage_html.textContent = current_Value + "%";
    current_Value += 1;
  } else {
    clearInterval(intervalId);
  }
}
var intervalId = setInterval(updatePercentage, 20);

var current_Value_css = 0;
var total_Value_css = 100;
var percentage_css = document.querySelector(".prctg_css");
function updatePercentage_css() {
  if (current_Value_css <= total_Value_css) {
    percentage_css.textContent = current_Value_css + "%";
    current_Value_css += 1;
  } else {
    clearInterval(intervalId);
  }
}
var intervalId = setInterval(updatePercentage_css, 20);

var current_Value_js = 0;
var total_Value_js = 100;
var percentage_js = document.querySelector(".prctg_js");
function updatePercentage_js() {
  if (current_Value_js <= total_Value_js) {
    percentage_js.textContent = current_Value_js + "%";
    current_Value_js += 1;
  } else {
    clearInterval(intervalId);
  }
}
var intervalId = setInterval(updatePercentage_js, 50);

var current_Value_react = 0;
var total_Value_react = 85;
var percentage_react = document.querySelector(".prctg_react");
function updatePercentage_react() {
  if (current_Value_react <= total_Value_react) {
    percentage_react.textContent = current_Value_react + "%";
    current_Value_react += 1;
  } else {
    clearInterval(intervalId);
  }
}
var intervalId = setInterval(updatePercentage_react, 20);

var current_Value_node = 0;
var total_Value_node = 85;
var percentage_node = document.querySelector(".prctg_node");
function updatePercentage_node() {
  if (current_Value_node <= total_Value_node) {
    percentage_node.textContent = current_Value_node + "%";
    current_Value_node += 1;
  } else {
    clearInterval(intervalId);
  }
}
var intervalId = setInterval(updatePercentage_node, 20);

var current_Value_mongo = 0;
var total_Value_mongo = 80;
var percentage_mongo = document.querySelector(".prctg_mongo");
function updatePercentage_mongo() {
  if (current_Value_mongo <= total_Value_mongo) {
    percentage_mongo.textContent = current_Value_mongo + "%";
    current_Value_mongo += 1;
  } else {
    clearInterval(intervalId);
  }
}
var intervalId = setInterval(updatePercentage_mongo, 20);

var current_Value_js = 0;
var total_Value_js = 95;
var percentage_js = document.querySelector(".prctg_js");
function updatePercentage_js() {
  if (current_Value_js <= total_Value_js) {
    percentage_js.textContent = current_Value_js + "%";
    current_Value_js += 1;
  } else {
    clearInterval(intervalId);
  }
}
var intervalId = setInterval(updatePercentage_js, 13);


