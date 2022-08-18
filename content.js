chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  const filter = (condition, display) => {
    if (window.location.href.includes('https://www.freelancer.in/search/projects')
      || window.location.href.includes('https://www.freelancer.com/search/projects')
    ) {
      const cardList = document.getElementsByTagName('fl-project-contest-card');
      for (let index = 0; index < cardList.length; index++) {
        var rating = cardList[index].getElementsByClassName('ValueBlock')[0].innerHTML;
        if (rating > 0 && condition == 1) {
          cardList[index].style.display = display;
        } else if (rating == 0 && condition == 0) {
          cardList[index].style.display = display;
        }
      }
    } else {
      console.log("not working")
    }
  };

  if (request.task === 'show-rated') {
    if (request.switch_val == "1") {
      filter(1, 'block')
    } else {
      filter(1, 'none')
    }
  } else if (request.task === 'show-unrated') {
    if (request.switch_val == "0") {
      filter(0, 'none')
    } else {
      filter(0, 'block')
    }
  }

  const response = { status: 'done' };
  sendResponse(response);
});
