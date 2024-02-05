import FormikForm from "./components/FormikForm";
import Multiuser from "./components/Multiuser";
import folders from "./components/ImplementFolder/data";
import Folder from "./components/ImplementFolder/Folder";

function App() {
  return (
    <>
      <Multiuser />
      <FormikForm />
      <h1>Implement Folder System in React</h1>
      <Folder folders={folders} />
    </>
  );
}

export default App;
