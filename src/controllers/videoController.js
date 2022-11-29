const fakeUser = {
  username: "Nicolas",
  loggedIn: true,
};

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", fakeUser });
};

// render(파일명, 보내고자 하는 변수)
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
