export default function TodoBody(props) {
  const { Task, Status, DeleteTask, ChangeTask } = props;
  return (
    <tbody>
      <tr>
        <td>{Task}</td>
        <td>{Status}</td>
        <td>
          <button onClick={DeleteTask}>Delete</button>
        </td>
        <td>
          <button onClick={ChangeTask}>Toggle</button>
        </td>
      </tr>
    </tbody>
  );
}
