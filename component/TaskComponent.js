import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';


import { useRoute } from '@react-navigation/native';
//import { useNavigation } from '@react-navigation/native';



const TaskComponent = ({navigation}) => {
 



    //const navigation = useNavigation();

    const [documents, setDocuments] = useState(null);

    const [inputValue, setInputValue] = useState(null);

    const [update, setUpdate] = useState(false);

    const [usedIndexes, setUsedIndexes] = useState([]);

    const [score, setScore] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const [word, setWord] = useState('');
    //let rightAnswer = '';
    const [rightAnswer, setRightAnswer] = useState('');
    let randomIndex = 0;
    let c = 33;
    const [taskType, setTaskType] = useState('');
    //let taskType = '';
    const routePassedData = useRoute();

    const [elementColor, setElementColor] = useState('hsl(276, 42%, 33%)');

    //change it. create data in json file and write code below to retriev
    useEffect( ()=>{
      //get page info to decide which task is required
      let whichTask = routePassedData.params?.taskT;
      if(whichTask == 'words') {
        collectionFromDB = 'englishApp_tasks';
      }
      if(whichTask == 'riddles'){
        collectionFromDB = 'englishApp_riddles';
      }
        return () => {
          //I should return json data here I gues
        };
    }, [])
    
  //
  let endThis = false;
  const [end, setEnd] = useState(false);
  let docLength = 0;
  if(documents != null){
    docLength = Object.keys(documents).length;
  } 
  useEffect(() => {
    if(documents != null) {

      randomIndex = Math.floor(Math.random() * documents.length);
      let i = 0;
      
      while (true){
      //console.log(i);
        if(!usedIndexes.includes(randomIndex)){
          break;
        }
        
        randomIndex = Math.floor(Math.random() * documents.length);
        if(documents.length < i){
          //console.log(documents.length + 'Loooooool' + i);
          return () => {
            console.log("Run out of tasks");

  
          }
          //break;
        }

        i++;
      }

      
      
      console.log(documents[randomIndex])
      setWord(documents[randomIndex].eng);
      setRightAnswer(documents[randomIndex].lv);
      //setTaskType(documents[randomIndex].taskType);
      addUsedIndex(randomIndex);
      
    }
    
    return () => {
      setWord('n');
      console.log("values given")
    }
  }, [documents, update])
  

  //when there are no tasks left, do the thing
  if(word == 'n'){
    console.log('kaput');
    navigation.navigate('Results', { Score: score, WrongCount: wrongCount, totalPossible: docLength});     
    
  }

    
  

  const handleInputChange = (text) => {
    setInputValue(text);
  }
  
  




  
  
  useEffect(() => {
    console.log("SCORE: " + score);
    console.log("WRONGCOUNT: " + wrongCount);

    if(wrongCount == 5) {
      navigation.navigate('Results', { Score: score, WrongCount: wrongCount, totalPossible: docLength});
    }
  }, [score, wrongCount]);
  
  const handleSubmit = () => {
   if(inputValue.toLowerCase() == rightAnswer.toLowerCase()){
    
    
    setUpdate(!update);
    setInputValue('');
    setScore(score + 1);
    
   }
   if(inputValue.toLowerCase() != '' && inputValue.toLowerCase() != null && inputValue.toLowerCase() != rightAnswer.toLowerCase()) {
    wrongCount == 0 && setElementColor("hsl(42, 42%, 33%)");
    wrongCount == 1 && setElementColor("hsl(42, 60%, 43%)");
    wrongCount == 2 && setElementColor("hsl(32, 90%, 53%)");
    wrongCount > 3 && setElementColor("hsl(0, 100%, 43%)");
    setInputValue('');
    setWrongCount(wrongCount + 1);
    setUpdate(!update);
    
    
   }
  }
  //I populate array of used indexes to check if given task was used during one session
  const addUsedIndex = (index) => {
    setUsedIndexes([...usedIndexes, index]);
    console.log("index added");
  }


  //usedIndexes && console.log(usedIndexes);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      
      backgroundColor: '#f8ebff',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#494453',
      marginTop: 120,
      marginBottom: 50,
    },
    inputField:{
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
      marginBottom: 20,
      width: '60%'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%',
    },
    textInfo: {
      color: 'hsl(276, 42%, 33%)',
      marginTop: 20,
      fontSize: 16
    }
    
  });

  return (
    
    <View style={styles.container}>
        
      <Text style={styles.header}>{word && word}</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Enter your answer"
        onChangeText={handleInputChange}
        value={inputValue}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
      />

      <Text style={[styles.textInfo, {color: elementColor}]}>Wrong answers: {wrongCount} / 5</Text>

      <Text style={styles.textInfo}>Complete: {score} / {docLength}</Text>
     
    </View>
    
  );
};

export default TaskComponent;