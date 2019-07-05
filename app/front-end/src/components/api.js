import config from "../config/config";

const getVideos = async () => {
  const response = await fetch(`${config.development.backendUrl}/getVideos`, {
    method: "get",
    mode: "cors"
  });
  let json = await response.json();
  return json;
};

const getVideo = async () => {
  const response = await fetch(`${config.development.backendUrl}/getVideo`, {
    method: "get",
    mode: "cors"
  });
  let json = await response.json();
  return json;
};

const addVideo = async data => {
  const response = await fetch(`${config.development.backendUrl}/addVideo`, {
    method: "post",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  });

  let primaryKey = await response.json();
  return primaryKey;
};

export { getVideos, getVideo, addVideo };
