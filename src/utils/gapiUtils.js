import { KEYUTIL, KJUR} from "jsrsasign"

const getJWT = () => {
  var key = KEYUTIL.getKey(process.env.GATSBY_KEY);
  var headers = { "alg": "RS256", "typ": "JWT" };
  var issued = Math.floor(new Date().getTime()/1000);

  var claims = {
      "iss": process.env.GATSBY_EMAIL,
      "scope": "https://www.googleapis.com/auth/spreadsheets",
      "aud": "https://www.googleapis.com/oauth2/v4/token",
      "exp": issued + 3600,
      "iat": issued
  };

  var jwt = KJUR.jws.JWS.sign(headers.alg, headers, JSON.stringify(claims), key);
  return jwt;
}

const getAccessToken = async () => {
  const jwt = await getJWT()
  var parameters = "grant_type=" + encodeURIComponent("urn:ietf:params:oauth:grant-type:jwt-bearer") + "&assertion=" + encodeURIComponent(jwt);
  const response = await fetch("https://www.googleapis.com/oauth2/v4/token", {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    body: parameters
  }
  )
  const data = await response.json()
  return data.access_token
}

export default getAccessToken;