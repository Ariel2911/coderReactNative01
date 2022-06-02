import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#fff',
    paddingTop:40,
    marginHorizontal: 20,
    marginVertical: 40,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderStyle: 'solid',
    borderBottomColor:'red',
    borderBottomWidth: 1,
    flex: 0.85,
  },
  list: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'red',
  },
  itemList: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
