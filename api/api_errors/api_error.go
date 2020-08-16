package api_errors

var NoError = ApiError {
	StatusCode: 200,
	Message: "",
}

type ApiError struct {
	StatusCode int `json:"statusCode"`
	Message string `json:"message"`
}

func (err ApiError) Error() string {
	return err.Message;
}
