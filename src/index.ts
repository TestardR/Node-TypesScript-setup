import express from "express";

const app = express();

interface Params {
  a: number;
  b: number;
}

const sub = (x: Params): number => {
  return x.a - x.b;
};

const add = (a: number, b?: number): number => {
  if (b) {
    return a + b;
  } else {
    return a;
  }
};

app.get("/", (req, res) => {
  res.send({ add: add(1), sub: sub({ a: 1, b: 2 }) });
});

app.listen(3000, () => {
  console.log("started");
});
