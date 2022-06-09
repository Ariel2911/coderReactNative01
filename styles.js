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
  list: {
    marginTop: 20,
    borderWidth: 1,
    borderTopWidth: 16,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    borderColor: 'blue',
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
});
