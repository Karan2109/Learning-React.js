import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is running...");
// });

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "First Joke",
      content: "Why did the chicken cross the road? To get to the other side!",
    },
    {
      id: 2,
      title: "Second Joke",
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 3,
      title: "Third Joke",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 4,
      title: "Fourth Joke",
      content:
        "Why don't skeletons fight each other? They don't have the guts!",
    },
    {
      id: 5,
      title: "Fifth Joke",
      content: "What do you call fake spaghetti? An impasta!",
    },
  ];
  res.send(jokes);
  //   res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
