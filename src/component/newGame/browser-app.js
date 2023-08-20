import axios from "axios"

const playersDOM = document.querySelector('.players')
  const loadingDOM = document.querySelector('.loading-text')
  const formDOM = document.querySelector('.player-form')
  const playerInputDOM = document.querySelector('.player-input')
  const formAlertDOM = document.querySelector('.form-alert')

  const showPlayers = async () => {
    loadingDOM.style.visibility = 'visible'
    try {
      const {
        data: { players },
      } = await axios.get('api/v1/players')
      console.log('players');
      console.log(players);
      if (players.length < 1) {
        playersDOM.innerHTML = '<h5 className = "empty-list"> Nie ma żadnych graczy </h5>'
        loadingDOM.style.visibility = 'hidden'
        return
      }
      const allPlayers = players
        .map((player) => {
          const { playerName, playerID } = player
          return `<div class="single-player">
          <h5><span><i class="far fa-check-circle"></i></span>${playerName}</h5>
          <div class="task-links">
          
          
          
          <!-- edit link -->
          <a href="task.html?id=${playerID}"  class="edit-link">
          <i class="fas fa-edit"></i>
          </a>
          <!-- delete btn -->
          <button type="button" class="delete-btn" data-id="${playerID}">
          <i class="fas fa-trash"></i>
          </button>
          </div>
          </div>`
        }).join('')
      playersDOM.innerHTML = allPlayers
    } catch (error) {
      playersDOM.innerHTML = '<h5 class="empty-list">Wystąpił błąd, spróbuj ponownie później...</h5> <br /> ' + error
      console.log('players');
    }
    loadingDOM.style.visibility = 'hidden'
  }

  showPlayers()