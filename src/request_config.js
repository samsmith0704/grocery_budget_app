const accessToken =
  "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJidWRnZXRhcHAyLTEwNzg0ZTk2YjM0YmIxMWIxMGIxNWYzMWZhNDM4M2EwNDYyNzYyMjM0MjEwMzEwODQ0NiIsImV4cCI6MTY1NTMxMzQ0NSwiaWF0IjoxNjU1MzExNjQwLCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjkyNjAxZDY0LTI2N2UtNTk5Ny1iMjRmLTVkZjM2MTM1NmM5NiIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjU1MzExNjQ1NzYxOTk5NTM0LCJhenAiOiJidWRnZXRhcHAyLTEwNzg0ZTk2YjM0YmIxMWIxMGIxNWYzMWZhNDM4M2EwNDYyNzYyMjM0MjEwMzEwODQ0NiJ9.Lnr-hxFk3x4rOk3KoisVYMd1efjd_GnSERgyJoEptys1Wwho8r4rDm1pynWfnVdphaXVnng6fX8VCNZQJO4xxCxOS_lFn1eTzOGerw1az7b_D5lJElWLyyfpy6ZQDcLNFaRp2lOaocze8OjZkyMePw6oWYzBoBM2qoDNvxSKQSltK2GIHV5tFepUxutOCNL5v28UKrvBWIXPykYD31mfXjPcr1uWeevqEyTcHw_zNkDNGiIEbVC8fyjhv8DKBZTJow_oGEC8gALansFCZyx9M-ByM6BZ9tlRcB-NFyLe8FiVxg-7EtRq0Jv9PqDvrIad2APuPbFTUezaA_r_bbhf2g";
const headers = {
  Authorization: `Bearer ${accessToken}`,
  Accept: "application/json",
};

export { accessToken, headers };
