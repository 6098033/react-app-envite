import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-bar">
          <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/009a7704-668c-4c20-8a03-6007b9bc6b56/Nav_Bar_variants.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220219T231617Z&X-Amz-Expires=86400&X-Amz-Signature=55f4cae44c6a6bba25a8acf4377a33a760e3a3da96e70416842556044d4d93dd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Nav%2520Bar_landing%2520page.png%22&x-id=GetObject" alt="navbar"></img>
        </div>

        <div className="welcome"><h3>Facebook events without Facebook</h3></div>
        <div className="description"><p>Easyly host and share events with your friends across any social media</p></div>
        <div className="create-btn">
          <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fca5fa8e-b50a-449d-940e-53dc195d9b77/Create_event_button.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220219T231607Z&X-Amz-Expires=86400&X-Amz-Signature=f42fd411204c05537c4256c3b9d15c74b6544f6d3b914d37dceb394b480924a1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Create%2520event%2520button.png%22&x-id=GetObject" alt="create button"></img>
        </div>
        <div className="icons">
          <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9b4c1956-76ee-4541-9575-1ef573abe012/Social_Media_icons.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220219T231705Z&X-Amz-Expires=86400&X-Amz-Signature=5c38653a9c84ac8a3566c4935ce8e97cea462e9b2ba3b414cdf475244ab0b45f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Social%2520Media%2520icons.png%22&x-id=GetObject" alt="social media icon"></img>
          <div className="flex">
            <div className="img1">
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3439181c-ee6b-4c5b-b17c-fd94f760995d/Left.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220219T231641Z&X-Amz-Expires=86400&X-Amz-Signature=e9ccf66b5bd531790121cf947d26f19d2b43eb4b684f5db6e729898b6f88028c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Product%2520Image%2520%252F%2520Left.png%22&x-id=GetObject" alt="image1"></img>
            </div>
            <div className="img2">
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e851bcf9-0e0e-413d-bfa2-cf4700e62e94/Middle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220219T231648Z&X-Amz-Expires=86400&X-Amz-Signature=715c542c9ecb811498a67a6129f5fb613f6729ad58345ad4a2ce1330fbb9e0db&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Product%2520Image%2520%252F%2520Middle.png%22&x-id=GetObject" alt="image2"></img>
            </div>
            <div className="img3">
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1cbdd110-373a-4327-a214-98ce8c550b36/Right.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220219T231657Z&X-Amz-Expires=86400&X-Amz-Signature=1c5ce21f7f2169197d8fc50e77414d1adcd10e732ceb5300e0af5383b6718804&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Product%2520Image%2520%252F%2520Right.png%22&x-id=GetObject" alt="image3"></img>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
