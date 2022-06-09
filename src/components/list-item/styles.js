import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemList: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  deleteButton: {
    marginStart: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    color: 'red',
    backgroundColor: 'red',
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: '900',
    color: 'white',
  }, 
});
