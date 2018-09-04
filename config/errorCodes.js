const errorCodes = {
	"invalid_credentials": 422,
	"not_found": 404,
	"forbidden": 403,
	"internal_server_error": 500,
	"db_query_failed": 1000,
	"empty_user_id": 1001,
	"empty_book_id": 1002
}

module.exports = errorCodes;