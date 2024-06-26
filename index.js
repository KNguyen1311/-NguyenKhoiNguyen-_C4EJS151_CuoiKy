const images = [
    'bau.png',
    'ca.png',
    'cua.png',
    'ga.png',
    'huou.png',
    'tom.png'
];

let betCounts = [0, 0, 0, 0, 0, 0];
const maxTotalBets = 3;
const maxBetsPerImage = 2;


function getRandomImage() {
    const randomIndex = Math.floor(Math.random()* images.length);
    return images[randomIndex];
}

function startRandomSpinning() {


    const resultBoxes = document.querySelectorAll('.container .Box');
    const spinCount = 100;
    const interval = 50; 

    
    
    resultBoxes.forEach(box => {
      let count = 0;
      const spinner = setInterval(() => {
        const randomImage = getRandomImage();
        box.innerHTML = `<img src="${randomImage}" alt="Random Image">`;
        count++;
        if (count >= spinCount) {
          clearInterval(spinner);
        }
      }, interval);
    });
  }

  function placeBet(index) {
    const totalBets = betCounts.reduce((a, b) => a + b, 0);
  
    if (totalBets < maxTotalBets && betCounts[index] < maxBetsPerImage) {
      betCounts[index]++;
      document.getElementById(`bet${index + 1}-count`).innerText = betCounts[index];
    } else if (totalBets >= maxTotalBets) {
      alert('Tổng số lần cược đã đạt tối đa!');
    } else if (betCounts[index] >= maxBetsPerImage) {
      alert('Số lần cược đã đạt tối đa!');
    }
  }

  function Reset() {
    betCounts = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < betCounts.length; i++) {
      document.getElementById(`bet${i + 1}-count`).innerText = 0;
    }
  }



