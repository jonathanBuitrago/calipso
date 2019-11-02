export const fancyHeader = title => ({
  title,
  headerTitleStyle: {
    fontWeight: "200",
    fontSize: 30,
    color: "#076EC4"
  },
  headerStyle: {
    backgroundColor: "#FFFFFF",
    shadowColor: "transparent",
    elevation: 0,
    borderBottomWidth: 0
  }
});

export const emptyHeader = () => ({
  title: "",
  headerTitleStyle: {
    fontWeight: "200",
    fontSize: 30,
    color: "#111D4A"
  },
  headerStyle: {
    backgroundColor: "#FFFFFF",
    shadowColor: "transparent",
    elevation: 0,
    borderBottomWidth: 0
  }
});
