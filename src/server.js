const express = require("express");
const cors = require("cors");
const User = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const snapshot = await User.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.get("/:id", async (req, res) => {
  let list=[];
  const snapshot = await User.where('id', '==', req.params.id).get();
if (snapshot.empty) {
  res.send('No matching documents.');
  return;
}  

snapshot.forEach(doc => {
  list.push(doc.data())
});
res.send(list);
});

app.post("/create", async (req, res) => {
  const data = req.body;
  console.log("DATA", data);
  await User.doc(data.id).set(data);
  res.send({ msg: "User Added" });
});

app.put("/update", async (req, res) => {
  const id = req.body.id;
  const data = req.body;
  console.log("Päivitetään", data)
  await User.doc(id).update({car:data.car});
  res.send({ msg: "Updated" });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log("POISTETAAN,")
  await User.doc(id).delete();
  res.send({ msg: "Deleted" });
});

app.patch("/patch/", async (req, res) => {
  const id = req.body.id;
  const data = req.body;
  console.log("Patchataan", data)
  await User.doc(id).update(data);
  res.send({ msg: "Updated" });
});


app.listen(3001, () => console.log("Up & RUnning 3001"));
