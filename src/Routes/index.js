import { include } from "named-urls";

export const ROUTES = {
  USERNAME: include("/vanhaile1798", {
    TIMELINE: "",
    ABOUT: "about",
    FRIENDS: "friends",
    PHOTOS: "photos"
  })
};
