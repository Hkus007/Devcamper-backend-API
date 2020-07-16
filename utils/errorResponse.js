class ErrorResponse extends Error {
  constructor(massgae, statusCode) {
    super(massgae);
    this.statusCode = statusCode;
  }
}
module.exports = ErrorResponse;
