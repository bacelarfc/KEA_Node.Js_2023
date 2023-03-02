let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval);
  
  const birthdayInput = document.getElementById('birthday');
  const countdownDiv = document.getElementById('countdown');
  const secoundCountdownDiv = document.getElementById('second-countdown');
  const minDate = new Date(birthdayInput.min);
  const maxDate = new Date(birthdayInput.max);
  
  const birthday = new Date(birthdayInput.value);
  if (isNaN(birthday.getTime()) || birthday < minDate || birthday > maxDate) {
    countdownDiv.innerText = 'The date input is not valid';
    secoundCountdownDiv.innerHTML = '';
    return;
  }

  const now = new Date();
  const nextBirthday = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
  if (nextBirthday < now) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }
  const timeDifference = nextBirthday.getTime() - now.getTime();
  const age = now.getFullYear() - birthday.getFullYear();
  
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  secoundCountdownDiv.innerHTML = `You are turning ${age} years old! &#127881`;

  countdownInterval = setInterval(() => {
    const now = new Date();
    const nextBirthday = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
    if (nextBirthday < now) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    
    const seconds = Math.floor(timeDifference / 1000) % 60;
    const minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    countdownDiv.innerHTML = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;
  }, 1000);
}