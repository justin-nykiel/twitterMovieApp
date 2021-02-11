import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Layout from './components/Layout';

function App() {
  const hitBackend = () => {
    axios.get('/test')
    .then((response) => {
    console.log(response.data)
    })
    }

  return (
    <>
    <Layout>
    </Layout>
      <button onClick={hitBackend}>Send request</button>
    </>
  );
}

export default App;
