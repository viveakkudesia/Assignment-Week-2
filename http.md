HTTP Basics
HTTP (Hypertext Transfer Protocol) is the foundation of any data exchange on the web, and it follows a request-response model between a client and server.

1. HTTP Methods
GET: Retrieve data from the server.
POST: Submit data to the server.
PUT: Update data on the server.
DELETE: Remove data from the server.
2. HTTP Status Codes
200 OK: The request succeeded.
201 Created: The resource was successfully created.
400 Bad Request: The server could not understand the request due to invalid syntax.
404 Not Found: The requested resource was not found.
500 Internal Server Error: The server encountered an unexpected condition.
3. HTTP Headers
Headers provide additional information about the request or response.

Content-Type: Indicates the media type (e.g., application/json, text/html).
Authorization: Contains credentials for authenticating a client.
Cache-Control: Directs caching behavior.
4. Request and Response
Request: Sent by the client to request data.
Example: GET /todos
Response: Sent by the server in response to a request.
Contains headers, a status code, and an optional body (data).
5. Body vs. Query Params
Query Parameters: Appended to the URL (/todos?id=1).
Request Body: Sent with POST/PUT requests, often in JSON or form data format.
