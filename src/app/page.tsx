
import { Metadata } from "next";
import EntryMiddleware from "./Entry/middleware";

export const metadata: Metadata = {
  title:
    "Kshitij Assessment Portal",
  description: "Go through and grow through",
};

export default function Home() {
  return (
    <>
        <EntryMiddleware />
    </>
  );
}
