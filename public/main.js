const homeTeamButtonClickEvent = () => {
  console.log('button was clicked')
  const currentValue = document.querySelector('.home-team-name').value
  console.log(currentValue)
  document.querySelector('.home-team').textContent=currentValue
}

const awayTeamButtonClickEvent = () => {
  console.log('button was clicked')
  const currentValue = document.querySelector('.away-team-name').value
  console.log(currentValue)
  document.querySelector('.away-team').textContent=currentValue
}

const homeAdd1ButtonClickEvent = () => {
  console.log('button was clicked')
  const currentValue = parseInt(document.querySelector('.home-score').textContent)
  console.log(currentValue)
  document.querySelector('.home-score').textContent=currentValue + 1
}

const homeSubtract1ButtonClickEvent = () => {
  console.log('button was clicked')
  const currentValue = parseInt(document.querySelector('.home-score').textContent)
  console.log(currentValue)
  document.querySelector('.home-score').textContent=currentValue - 1
}

const awayAdd1ButtonClickEvent = () => {
  console.log('button was clicked')
  const currentValue = parseInt(document.querySelector('.away-score').textContent)
  console.log(currentValue)
  document.querySelector('.away-score').textContent=currentValue + 1
}

const awaySubtract1ButtonClickEvent = () => {
  console.log('button was clicked')
  const currentValue = parseInt(document.querySelector('.away-score').textContent)
  console.log(currentValue)
  document.querySelector('.away-score').textContent=currentValue - 1
}

document.querySelector('.home-team-name-button').addEventListener('click', homeTeamButtonClickEvent)
document.querySelector('.away-team-name-button').addEventListener('click', awayTeamButtonClickEvent)
document.querySelector('.home-add-1-button').addEventListener('click', homeAdd1ButtonClickEvent)
document.querySelector('.home-subtract-1-button').addEventListener('click', homeSubtract1ButtonClickEvent)
document.querySelector('.away-add-1-button').addEventListener('click', awayAdd1ButtonClickEvent)
document.querySelector('.away-subtract-1-button').addEventListener('click', awaySubtract1ButtonClickEvent)
