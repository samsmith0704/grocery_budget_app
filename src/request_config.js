const accessToken =
  "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJidWRnZXRhcHAyLTEwNzg0ZTk2YjM0YmIxMWIxMGIxNWYzMWZhNDM4M2EwNDYyNzYyMjM0MjEwMzEwODQ0NiIsImV4cCI6MTY1NDg4MDcxMSwiaWF0IjoxNjU0ODc4OTA2LCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjkyNjAxZDY0LTI2N2UtNTk5Ny1iMjRmLTVkZjM2MTM1NmM5NiIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjU0ODc4OTExNDY3MDkwOTYxLCJhenAiOiJidWRnZXRhcHAyLTEwNzg0ZTk2YjM0YmIxMWIxMGIxNWYzMWZhNDM4M2EwNDYyNzYyMjM0MjEwMzEwODQ0NiJ9.qT5pUgJFYOlGpYl3K5YsCV9srl0TXxvv_cPRK7a1uhZWUh-82OMwi2Ip1zY76S3UD3vYvv8NVud2oIhD_uKgpFlj6pyqxcWHs9LguIqEYHIE5q_-HhuLCmOxM0esJFGuWJZ3w5Nw5935GAt_h1pC9_0KXzKgUB2EzJMsOH1c31Rsyo37N__i50U0IAd8QUFjvW0-CHSDF0eJU9A26k0fLkTE-JINWSco7r58k2Xvx9UEdwhzy6pu_qNiN4Mgk0pQyCg8sAOMSm9qOfAqI9MJVIdc8k4yyTJQhcZO83e-Nbu0FOo3bPkcOs7aLxH9jPg6hmXC6yd0x9giGqPSQKMDGA";
const headers = {
  Authorization: `Bearer ${accessToken}`,
  Accept: "application/json",
};

export { accessToken, headers };
