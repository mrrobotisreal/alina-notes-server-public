import express from "express";
import { init_db } from "./init_db.js";
init_db();
import cors from "cors";
// import { createServer } from "http";
// import { Server } from "socket.io";
import {
  storeNewNote,
  getAllNotes,
  getSettings,
  putSettings,
  saveBook,
  saveFont,
  saveLang,
  saveTheme,
} from "./controllers/User.js";

const app = express();
const SERVER_PORT = 9090;
// const SOCKET_PORT = 9091;

// const httpServer = createServer(app);
// const io = new Server(httpServer, {});
app.use(cors());
app.use(express.json());
app.use("/assets", express.static("assets"));

// io.on("connection", (socket) => {
//   console.log(`⚡️: socket ${socket.id} just connected!`);

//   socket.on("storeSocketId", async ({ id }) => {
//     console.log("id being stored is:", id);
//   });

//   socket.on("storeNewNote", async ({ note }) => {
//     console.log("NewNote:", note);
//   });

//   socket.on("getSectionNotes", async ({ section }) => {
//     console.log("Section:", section);
//     const sectionNotes = {
//       section: section,
//       notes: [
//         {
//           section: section,
//           note: "",
//           creationDate: 1692999647140,
//         },
//       ],
//     };
//     console.log("sectionNotes:", sectionNotes);
//   });

//   socket.on("getAllNotes", async () => {});

//   socket.on("disconnect", async () => {});
// });

// httpServer.listen(SOCKET_PORT, () =>
//   console.log(`Socket listening on port: ${SOCKET_PORT}`)
// );

app.get("/getAllNotes", async (req, res) => {
  const allNotes = await getAllNotes();

  res.send(allNotes);
});

app.post("/saveNote", async (req, res) => {
  const result = await storeNewNote(req.body);

  res.send(result);
});

app.get("/getSettings", async (_, res) => {
  const settings = await getSettings();

  res.send(settings);
});

app.post("/putSettings", async (req, res) => {
  const result = await putSettings(req.body.settings);

  res.send(result);
});

app.get("/getLang", async (req, res) => {
  const settings = await getSettings();

  res.send(settings.lang);
});

app.post("/saveLangSelection", async (req, res) => {
  const result = await saveLang(req.body.lang);

  res.send(result);
});

app.get("/getBook", async (req, res) => {
  const settings = await getSettings();

  res.send(settings.book);
});

app.post("/saveBookSelection", async (req, res) => {
  const result = await saveBook(req.body.book);

  res.send(result);
});

app.post("/getAlbumLength", async (req, res) => {
  let albumLength;

  switch (req.body.albumId) {
    case "austria":
      albumLength = "63";
      break;
    case "paris":
      albumLength = "31";
      break;
    case "portugal":
      albumLength = "40";
      break;
    case "portugal_photoshoot":
      albumLength = "0";
      break;
    case "frankfurt":
      albumLength = "0";
      break;
    default:
      albumLength = "0";
  }

  res.send(albumLength);
});

app.get("/getTheme", async (req, res) => {
  const settings = await getSettings();

  res.send(settings.theme);
});

app.post("/saveThemeSelection", async (req, res) => {
  const result = await saveTheme(req.body.theme);

  res.send(result);
});

app.get("/getFont", async (req, res) => {
  const settings = await getSettings();

  res.send(settings.font);
});

app.post("/saveFontSelection", async (req, res) => {
  const result = await saveFont(req.body.font);

  res.send(result);
});

app.listen(SERVER_PORT, () =>
  console.log(`Server listening on port: ${SERVER_PORT}`)
);
