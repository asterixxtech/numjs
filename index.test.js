import { numerical, convert } from "./index";
import Benchmark from "benchmark";
import { withCodSpeed } from "@codspeed/benchmark.js-plugin";

const suite = withCodSpeed(new Benchmark.Suite());
numerical.Exp(9);
numerical.Mult(9, 8);
numerical.Squ(81);
convert.MInch(10);
