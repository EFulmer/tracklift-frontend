export function respHandler(resp) {
  if (resp.statusCode === 200) {
    return resp
  } else {
    alert('There was an error saving your data to the database.\n\nError:' + JSON.stringify(resp))
  }
}
