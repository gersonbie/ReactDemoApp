import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: '#434343',
    fontWeight: 'bold',
  },
  input: {
    marginTop: 8,
    borderWidth: 2,
    borderColor: '#434343',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18,
  },
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  button: {
    padding: 16,
    backgroundColor: '#434343',
    borderRadius: 8,
    marginLeft: 16,
  },
  buttonText: {
    color: 'yellow',
    textTransform: 'uppercase',
    paddingHorizontal: 24,
  },
  circle: {
    width: 80,
    height: 80,
    borderWidth: 5,
    borderColor: '#b3bc5d',
    backgroundColor: '#f5ff81',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 60,
  },
  row: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
});
