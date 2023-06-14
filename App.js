import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView, TextInput } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
      <View style={{ backgroundColor: '#44E690', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ borderRadius: 50 }}>
            <Image source={require('./assets/user.jpg')} style={{ width: 50, height: 50, borderRadius: 25 }} />
          </View>
          <View>
            <Image source={require('./assets/logofigma.png')} style={{ width: 50, height: 50 }} />
          </View>
          <View style={{ marginLeft: 10 }}>
            <TouchableOpacity onPress={() => {}}>
              <Image source={require('./assets/1077035.png')} style={{ width: 25, height: 25 }} />
            </TouchableOpacity>
              {/* <Picker>
                <Picker.Item label="Menu" value="Menu" />
                <Picker.Item label="Diego" value="opcao1" />
                <Picker.Item label="Quenga" value="opcao2" />
                <Picker.Item label="Daniel" value="opcao3" />
                <Picker.Item label="Viado" value="opcao4" />
              </Picker> */}
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput style={{ backgroundColor: '#fff', borderRadius: 10, padding: 5 }} placeholder="Pesquisar por cursos" />
        </View>
      </View>

      <View style={{ backgroundColor: '#44E690', padding: 10 }}>
        <Text style={{ color: '#fff', fontSize: 18 }}>Categorias</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
        <TouchableOpacity style={{ width: 83, height: 100, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/frontend_icon.png')} style={{ width: 70, height: 70 }} />
          <Text>Front-end</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 83, height: 100, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/backend_icon.png')} style={{ width: 70, height: 70 }} />
          <Text>Back-end</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 83, height: 100, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/icon_bd.png')} style={{ width: 70, height: 70 }} />
          <Text>BD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 83, height: 100, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/design_icon.png')} style={{ width: 70, height: 70 }} />
          <Text>Design</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={{ backgroundColor: '#44E690', padding: 10 }}>
        <Text style={{ color: '#fff', fontSize: 18 }}>Cursos Populares</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
        <TouchableOpacity style={{ width: 300, height: 200 }}>
          <Image source={require('./assets/imagem_2023-05-29_113212928.png')} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 300, height: 200 }}>
          <Image source={require('./assets/design_icon.png')} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 300, height: 200 }}>
          <Image source={require('./assets/design_icon.png')} style={{ width: '100%', height: '100%' }} />
        </TouchableOpacity>
      </ScrollView>

      <View style={{ backgroundColor: '#44E690', padding: 10 }}>
        <Text style={{ color: '#fff', fontSize: 18 }}>Design</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
        <TouchableOpacity style={{ width: 300, height: 200, backgroundColor: '#44E690', borderRadius: 10 }}>
          <Image source={require('./assets/imagem_2023-05-29_113319526.png')} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
          <Text>Bootcampinho UI UX | Curso Gratuito</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 300, height: 200, backgroundColor: '#44E690', borderRadius: 10 }}>
          <Image source={require('./assets/imagem_2023-05-29_113400744.png')} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
          <Text>Curso Completo de Photoshop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 300, height: 200, backgroundColor: '#44E690', borderRadius: 10 }}>
          <Image source={require('./assets/design_icon.png')} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
          <Text>Curso de UX e UI Design</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 300, height: 200, backgroundColor: '#44E690', borderRadius: 10 }}>
          {/* <Image source={require('./assets/design_icon.png')} style={{ width: '100%', height: '100%', borderRadius: 10 }} /> */}
          <Text>Design Gráfico</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={{ backgroundColor: '#44E690', padding: 10 }}>
        <Text style={{ color: '#fff', fontSize: 18 }}>Python</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
        <TouchableOpacity style={{ width: 300, height: 200, backgroundColor: '#44E690', borderRadius: 10 }}>
          <Image source={require('./assets/imagem_2023-05-29_113742911.png')} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
          <Text>Python 3 - Mundo 1 [40 horas]</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 300, height: 200, backgroundColor: '#44E690', borderRadius: 10 }}>
          <Image source={require('./assets/imagem_2023-05-29_113814696.png')} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
          <Text>Python para iniciantes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 300, height: 200, backgroundColor: '#44E690', borderRadius: 10 }}>
          <Image source={require('./assets/design_icon.png')} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
          <Text>Python para iniciantes</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
