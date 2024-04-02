const data = [
  {
    star: 5,
    count: 95020,
  },
  {
    star: 4,
    count: 60710,
  },
  {
    star: 3,
    count: 15060,
  },
  {
    star: 2,
    count: 8700,
  },
  {
    star: 1,
    count: 5020,
  },
];

function getRatingCountTotal() {
  return data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.count;
  }, 0);
}

function getTotalRatingBasedOnStars() {
  return data.reduce((accumulator, rating) => {
    return accumulator + rating.count * rating.star;
  }, 0);
}

function getAverageStarRating() {
  return (getTotalRatingBasedOnStars() / getRatingCountTotal()).toFixed(1);
}

console.log(getAverageStarRating());

data.forEach((rating) => {
  let barWidth = Math.ceil((rating.count / getRatingCountTotal()) * 100);
  let rating_progress = `
        <div class="rating__progress-value">
            <p>${rating.star} <span class="star">&#9733;</span></p>
            <div class="progress">
              <div class="bar" style="width: ${barWidth}%"></div>
            </div>
            <p>${rating.count.toLocaleString()}</p>
          </div>
        `;

  document.querySelector(".rating__progress").innerHTML += rating_progress;
});

document.querySelector(".rating__average p").innerHTML =
  getRatingCountTotal().toLocaleString();

document.querySelector(".rating__average h1").innerHTML =
  getAverageStarRating();

document.querySelector(".rating__average .star-inner").style.width = `${
  (getAverageStarRating() / 5) * 100
}%`;
