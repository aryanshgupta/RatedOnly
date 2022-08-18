const rated_switch = document.getElementById('rated-switch');

const unrated_switch = document.getElementById('unrated-switch');

rated_switch.addEventListener('input', (e) => {

  let queryOptions = { active: true, currentWindow: true };

  chrome.tabs.query(queryOptions, tabs => {

    chrome.tabs.sendMessage(
      tabs[0].id,
      { task: 'show-rated', switch_val: e.target.value },
      function (response) {
        console.log("done");
      }
    );

  });

  rated_switch.value = e.target.value == "0" ? "1" : "0";
});

unrated_switch.addEventListener('input', (e) => {

  let queryOptions = { active: true, currentWindow: true };

  chrome.tabs.query(queryOptions, tabs => {

    chrome.tabs.sendMessage(
      tabs[0].id,
      { task: 'show-unrated', switch_val: e.target.value },
      function (response) {
        console.log("done");
      }
    );

  });

  unrated_switch.value = e.target.value == "0" ? "1" : "0";
});
