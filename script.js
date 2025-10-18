function searchCategory() {
  const category = document.getElementById('vehicleCategory').value;
  if(category) {
    alert(`You searched for: ${category}`);
    // Future: redirect to filtered vehicles page
    // window.location.href = `vehicles.html?category=${category}`;
  } else {
    alert('Please select a vehicle type.');
  }
}
