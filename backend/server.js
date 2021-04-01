import express from "express";
import mongoose from "mongoose";
import Pusher from "pusher";
import cors from "cors";
import Messages from "./dbMessages.js";

const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1179318",
  key: "826d6dd4bf38d1bb46b3",
  secret: "601e512860427ad8e4d0",
  cluster: "eu",
  useTLS: true,
});

app.use(express.json());
app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });

const connection_url =
  "mongodb+srv://madeen:123@whatsapp.si8em.mongodb.net/whatsappdb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("DB Connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    // console.log(change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      console.log(messageDetails);
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        received: messageDetails.received,
        timestamp: messageDetails.timestamp,
      });
    } else {
      console.log("Error Triggering Pusher");
    }
  });
});

app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/messages/sync", (req, res) => {
  const dbMessage = req.body;

  Messages.find(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => console.log(`Listing ${port}`));
