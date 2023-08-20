const formDOM = document.querySelector('.card-form')

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  
  const tresc = document.getElementById('tresc').value
  const typ = document.getElementById('typ').value
  const ilosc = document.getElementById('ilosc').value
  const kara = document.getElementById('kara').value

  try {
    await axios.post('api/v1/cards', { tresc, typ, ilosc, kara })
    console.log(tresc, typ, ilosc, kara);
  } catch (error) {
    formAlertDOM.style.display = 'block'
    formAlertDOM.innerHTML = 'błąd, sprónój ponownie później'
    console.log('blad');
  }
  setTimeout(() => {
    formAlertDOM.style.display = 'none'
    formAlertDOM.classList.remove('text-succes')
  }, 3000)
})