export function respHandler(resp) {
  if (resp.statusCode === 200) {
    const workoutID = resp.body.id
    this.setState({workoutID: workoutID})
    if (this.state.lifts.isEmpty()) {
      this.setState({lifts: this.state.lifts.push(Map())})
    }
  } else {
    alert('There was an error saving your data to the database.\n\nError:' + JSON.stringify(resp))
  }
}
