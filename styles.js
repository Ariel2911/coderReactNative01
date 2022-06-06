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
    borderBottomColor:'violet',
    borderBottomWidth: 1,
    flex: 0.85,
  },
  list: {
    marginTop: 20,
    borderWidth: 1,
    borderTopWidth: 16,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    borderColor: 'blue',
  },
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
  modalContent: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 150,
    margin: 16,

  },
  modalTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  modalTitle: {

  },
});
