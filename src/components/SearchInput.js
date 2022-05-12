import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Global from '../constants/globalStyles';
import { useGlobalContext } from '../store/context';
const SearchInput = () => {
  const { setTermo } = useGlobalContext();

  return (
    <View style={styles.outerContainer}>
      <View style={styles.inputContainer}>
        <Ionicons name="search-sharp" size={24} color='#b3b3b3' />
        <TextInput
          selectionColor={Global.colors.colorPrimary}
          style={styles.input}
          placeholder='Procurar...'
          onChangeText={setTermo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  inputContainer: {
    backgroundColor: Global.colors.colorLightGray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
});

export default SearchInput;
