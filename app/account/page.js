import React from "react";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
};

export default async function page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);
  return <h2>Welcome, {firstName}</h2>;
}
