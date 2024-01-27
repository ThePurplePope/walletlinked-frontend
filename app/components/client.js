"use client";

import { useEffect, useState } from "react";

import Loading from "./loading";
import Default from "./default";

export default function Client() {
  const [loaded, setLoaded] = useState();

  useEffect(() => {
    if (!loaded) setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) console.log("loaded");
  }, [loaded]);

  return <div>{!loaded ? <Loading /> : <Default />}</div>;
}
