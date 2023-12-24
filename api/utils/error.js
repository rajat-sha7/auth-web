export const errorHandler = (statusCode, message) => {
    const error = new Error(message);
    error.message = message;
    error.statusCode = statusCode;
    return error;
}