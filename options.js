let fromText = document.getElementById("fromField");
let toText = document.getElementById("toField");
let setButton = document.getElementById("button");
let clearButton = document.getElementById("clear");

setButton.addEventListener("click", function() {
  chrome.storage.sync.set({fromStored: fromText.value, toStored: toText.value});
});

clearButton.addEventListener("click", function () {
  chrome.storage.sync.clear();
  fromText.value = "";
  toText.value = "";
})
