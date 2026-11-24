// One harbour scene: ships carry your word out and bring word home from far lands.
import { mkdirSync, writeFileSync } from "node:fs";

const sentence = "Think of a harbour where many ships sail out with your word and sail home again with word from lands far away, each one finding its way by the lighthouse.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
