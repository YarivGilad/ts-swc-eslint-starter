import log from "@ajar/marker";
import { saySomething } from "./myModule.js";

const response = saySomething("hello");
log.magenta(response);
