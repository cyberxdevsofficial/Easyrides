function searchCategory(){
  const category = document.getElementById('vehicleCategory').value;
  if(category){
    alert(`You searched for: ${category}`);
  } else {
    alert('Please select a vehicle type.');
  }
}

function toggleMenu(){
  const nav = document.querySelector('.navbar .nav-links');
  nav.classList.toggle('show');
}
