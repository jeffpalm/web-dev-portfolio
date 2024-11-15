import Stack from "./Stack";
import { writable } from "svelte/store";

export const visibility = writable(new Stack<string>());
