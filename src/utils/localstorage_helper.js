const authenticated = 'wbuhhyfvfo' // isauthenticated

const set_token = (paylaod, token_name) => {
  const storage_key = get_localstorage_key_name(token_name)
  localStorage.setItem(storage_key, paylaod)
}

const get_token = (token_name) => {
  const storage_key = get_localstorage_key_name(token_name)
  const token = localStorage.getItem(storage_key)
  return token
}

const remove_token = (token_name) => {
  const storage_key = get_localstorage_key_name(token_name)
  localStorage.removeItem(storage_key)
}

const is_token_valid = (token_name) => {
  const token = get_token(token_name)
  return token == 'true' ? true : false
}

const get_localstorage_key_name = (token_name) => {
  return authenticated
}

export default {
  set_token,
  get_token,
  is_token_valid,
  remove_token
}
