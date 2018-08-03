

const profile = {
  name: 'Jorah Mormont',
  address: '123 Blueberry Hill',
  state: 'Bear Island',
  city: 'Beartown',
  zip: 27410,
  avatar: 'https://vignette.wikia.nocookie.net/gameofthrones/images/f/f5/706_Jorah_Profile.png'
}

function getProfileUpdate() {
  return {
    state: 'Mereen'
  }
}

function updateProfile(obj) {
  return Object.assign({}, profile, obj)
}

const newProfile = updateProfile(getProfileUpdate());

console.log(newProfile)