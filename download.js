import https from 'https';
import fs from 'fs';

const file = fs.createWriteStream("public/logo.png");
https.get("https://drive.google.com/uc?export=download&id=1cP0FDx-mDiOfWN7Uo198Gkk9SwRXDxpB", function(response) {
  if (response.statusCode === 302 || response.statusCode === 303) {
    https.get(response.headers.location, function(redirectResponse) {
      redirectResponse.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log("Download completed");
      });
    });
  } else {
    response.pipe(file);
    file.on("finish", () => {
      file.close();
      console.log("Download completed");
    });
  }
});
