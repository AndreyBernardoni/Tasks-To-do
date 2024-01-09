import { View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import TaskCard from "../../components/taskcard";
import FAB from "react-native-fab";
import Icon from "react-native-vector-icons/MaterialIcons";
import { kColors } from "./../../utils/kColors";
import { ScrollView } from "react-native";
import Loading from "./../../components/loading";
import auth from "@react-native-firebase/auth";
import { randomId } from "../../utils/randomId";
import firestore from "@react-native-firebase/firestore";

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [loadingTasks, setLoadingTasks] = useState(true);

  const userUID = auth().currentUser.uid;

  async function updateCheckTask(id, checkStatus) {
    await firestore()
      .collection(userUID)
      .doc(id)
      .update({
        isChecked: checkStatus,
      })
      .then(() => {
        console.log("Task updated!");
      });
  }

  function addTask(data) {
    const taskObj = {
      id: randomId(),
      title: data.title,
      tag: data.tag,
      isChecked: false,
    };

    firestore()
      .collection(userUID)
      .doc(taskObj.id)
      .set(taskObj)
      .then(() => {
        console.log("Task added!");
      });

    setTasks([taskObj, ...tasks]);
  }

  function removeTask(id) {
    let newTasks = tasks.filter((task) => task.id !== id);
    firestore()
      .collection(userUID)
      .doc(id)
      .delete()
      .then(() => {
        console.log("Task deleted!");
      });
    setTasks(newTasks);
  }

  useEffect(() => {
    function getTasksInFirestore() {
      firestore()
        .collection(userUID)
        .get()
        .then(({ docs }) => {
          let tasksResponse = [];
          docs.map((item) => tasksResponse.push(item.data()));
          setTasks(tasksResponse);
        });
      setLoadingTasks(false);
    }
    getTasksInFirestore();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Image source={require("./../../../assets/logo.png")} />
      </View>
      <View style={styles.containerBody}>
        {loadingTasks ? (
          <Loading text="Carregando tarefas..." />
        ) : (
          <ScrollView
            contentContainerStyle={{ paddingBottom: 50 }}
            showsVerticalScrollIndicator={false}
          >
            {tasks.map((task) => {
              return (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  tag={task.tag}
                  id={task.id}
                  checked={task.isChecked}
                  removeTaskFunc={removeTask}
                  updateCheckTaskFunc={updateCheckTask}
                />
              );
            })}
          </ScrollView>
        )}

        <FAB
          buttonColor={kColors.kPrimary}
          iconTextColor="#FFFFFF"
          onClickAction={() => {
            navigation.navigate("CreateTask", {
              tasks: tasks,
              addTaskFunc: addTask,
            });
          }}
          iconTextComponent={<Icon name="add" />}
        />
      </View>
    </View>
  );
}
