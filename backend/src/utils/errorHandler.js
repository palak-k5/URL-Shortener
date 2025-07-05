export const errorHandler=(err,req,res,next)=>{
    if(err instanceof AppError)
    {
        return res.status(err.statusCode).json({
            success:false,
            message:err.message,
        });
    }
    console.error(err);
    res.status(500).json({
        success:false,
        message:err.message ||"Internal Server Error",
    });
};
export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }

  static BadRequest(message = 'Bad Request') {
    return new AppError(message, 400);
  }

  static Unauthorized(message = 'Unauthorized') {
    return new AppError(message, 401);
  }

  static Forbidden(message = 'Forbidden') {
    return new AppError(message, 403);
  }

  static NotFound(message = 'Not Found') {
    return new AppError(message, 404);
  }

  static Conflict(message = "Conflict") {
    return new AppError(message, 409);
  }

  static InternalServerError(message = "Internal Server Error") {
    return new AppError(message, 500);
  }
}
