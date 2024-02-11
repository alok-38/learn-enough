document.getElementById('checkBtn').addEventListener('click', function() {
    var age = parseInt(document.getElementById('ageInput').value);
  
    if (!isNaN(age)) {
      if (age >= 18) {
        document.getElementById('result').textContent = 'You are eligible to vote!';
      } else {
        document.getElementById('result').textContent = 'You are not old enough to vote.';
      }
    } else {
      document.getElementById('result').textContent = 'Please enter a valid age.';
    }
  });
  