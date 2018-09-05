const errorCodes = {
	"invalid_credentials": 422,
	"not_found": 404,
	"forbidden": 403,
	"internal_server_error": 500,
	"db_query_failed": 1000,
	"empty_response": 1001,
	"empty_user_id": 1002,
	"empty_book_id": 1003,
	"user_not_found": 1004,
	"book_not_found": 1005
}

module.exports = errorCodes;