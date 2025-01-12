import { useEffect, useState } from "react";

export const AccessToken = () => {
  const [accessToken, setAccessToken] = useState(null);
  const clientID = "f8d16b8865324d74b15e5d8717c16de3";
  const clientSecret = "88c56bff983a4455ac8c2d4549ac85b8";
  const [loading, setLoading] = useState(false);

  const authString = `${clientID}:${clientSecret}`;
  const base64Auth = btoa(authString);

  const getAccessToken = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          Authorization: `Basic ${base64Auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials", // Tipo de autorización
      });

      if (!response.ok) {
        throw new Error("Failed to get access token");
      }

      const data = await response.json();
      console.log("Access Token:", data.access_token); // Muestra el token

      setAccessToken(data.access_token); // Guarda el token en el estado
    } catch (error) {
      console.error("Error al obtener el token de acceso:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  return null;
};
