
import { View,
   Text ,
   StyleSheet,
   ScrollView,
   KeyboardAvoidingView,
   Platform,Keyboard,
   TextInput,
   TouchableOpacity
} from "react-native";
import { Todo } from "./components/todo";
import { useState } from "react";

export default function App() {

const [task,setTask] = useState('')
const [taskItem,setTaskItem]= useState([])

const handleAddTask = () => {
   Keyboard.dismiss();
   setTaskItem([...taskItem, task]); // Corrected line
   setTask('');
 };

 const delTask =(index)=>{
    let itemsCopy =[...taskItem]
     itemsCopy.splice(index,1)
     setTaskItem(itemsCopy)
 }
  return (
    <>
   <View style={styles.container}>
    <ScrollView >
        <View>
           <Text style={styles.title}>To do List App </Text>
        </View>
        <View>
         {
            taskItem.map((item,index)=>{
                return  (
                  <Todo  item={item} delTask={delTask} index={index}   />
                )
            }
              
            )
         }
          
        </View>

      </ScrollView>

      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding":"height"}
         >
         <TextInput style={styles.input} placeholder="write a task"
          value={task}
           onChangeText={text => setTask(text)} />
           
          <TouchableOpacity  onPress={()=> handleAddTask()} >
            <View style={styles.addbtn}>
                  <Text style={styles.icon} >+</Text>
            </View>
          </TouchableOpacity>

      </KeyboardAvoidingView>
  </View>

     {/* write task */}
   
    </>
  );
}


const styles = StyleSheet.create({
   container:{
    flex:1,
     backgroundColor:'#f1f1f1'
   },
   title:{
    fontSize:24,
    fontWeight:'bold',
    margin:15,
   },
   
   input:{
      margin:25,
      position:'absolute',
       bottom:20,
       backgroundColor:"#fff",
       padding:15,
       width: '70%',
       borderWidth:2,
       borderColor:'#c0c0c0',
      fontSize:25,



   },
   addbtn:{
      height:60,
      width: 60,
      backgroundColor:'#fff',
      fontSize:15,
      position:'absolute',
      bottom:42,
      right:20,
      borderWidth:2,
      borderColor:'#c0c0c0',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:30,
     
   },
   icon:{
      fontSize:25,
   }
})