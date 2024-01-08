import { View, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import TaskCard from "../../components/taskcard";
import FAB from "react-native-fab";
import Icon from "react-native-vector-icons/MaterialIcons";
import { kColors } from "./../../utils/kColors";

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = React.useState([]);
  function addTask(data) {
    let id = tasks.length === 0 ? 0 : tasks.length + 1 - 1;

    const taskObj = {
      id: id,
      title: data.title,
      tag: data.tag,
    };

    let newTasks = [...tasks, taskObj];

    newTasks.sort((a, b) => {
      if (a.id > b.id) {
        return -1;
      } else {
        return true;
      }
    });

    setTasks(newTasks);
  }

  function removeTask(id) {
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Image source={require("./../../../assets/logo.png")} />
      </View>
      <View style={styles.containerBody}>
        {tasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              title={task.title}
              tag={task.tag}
              id={task.id}
              removeTaskFunc={removeTask}
            />
          );
        })}

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
