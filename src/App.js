import Form from './components/Form';
import { FormProvider } from './context/FormContext';

//import StateTutorial from "./hookshooks/StateTutorial";

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center', fontSize: '40px'}}>React Hooks</h1>
      <FormProvider>
        <Form />
      </FormProvider>
      {/* <StateTutorial /> */}
    </div>
  );
}

export default App;
