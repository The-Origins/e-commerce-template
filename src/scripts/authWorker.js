class AuthWorker {
  formatString(string = "", divider = "/", spacing = 2) {
    const regex = new RegExp(`.{1,${spacing}}`, "g");
    return string.match(regex).join(divider);
  }
}

export default AuthWorker