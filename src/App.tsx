import { Suspense, lazy, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import GlobalStyle from './styles/global';
import { RootState } from './redux/types';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./pages/Home'));
const Game = lazy(() => import('./pages/Game'));
const Lore = lazy(() => import('./pages/Lore'));
const Account = lazy(() => import('./pages/Account'));
const About = lazy(() => import('./pages/About'));
const News = lazy(() => import('./pages/News'));

const ToastWrapper = styled.div`
  .Toastify__close-button {
    width: auto;
  }
`;

const App = () => {
  const { errorMsg } = useSelector((state: RootState) => state);

  useEffect(() => {
    if (errorMsg) {
      toast.error(errorMsg, {
        position: 'top-right',
        autoClose: 4000,
        theme: 'colored',
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  }, [errorMsg]);

  return (
    <Router>
      <GlobalStyle />
      <Header />
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/lore" component={Lore} />
          <Route path="/account" component={Account} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
        </Switch>
      </Suspense>
      <ToastWrapper>
        <ToastContainer />
      </ToastWrapper>
      <Footer />
    </Router>
  );
};

export default App;
