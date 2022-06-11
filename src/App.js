import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/nav";
import Comment from "./component/comment";

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <div className="content">
        <div className="forum">
          <div className="topik">
            <h1>Solusi charger laptop tidak bisa mengisi daya batre</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              commodi aut eos deserunt, quisquam perspiciatis beatae saepe
              distinctio totam est esse iste molestias, sed doloremque corrupti
              mollitia expedita, incidunt voluptatibus aspernatur voluptas
              delectus at. Voluptatum, ipsam. Eos neque, aperiam nemo velit
              tempora laborum odit illum natus sed minus nostrum culpa.
            </p>
          </div>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <div className="tanggapan">
            <label>Email:</label>
            <input type="text" />
            <label>Komentar:</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="trending">
          <h1>Topik teratas</h1>
          <ul>
            <li>
              <a href="#"> Perbandingan windows 10 dan Window 11</a>
            </li>
            <li>
              <a href="#"> Beberapa hal yang diperhatikan dalam merakit PC</a>
            </li>
            <li>
              <a href="#"> Windows Defender sudah cukup aman?</a>
            </li>
            <li>
              <a href="#"> Chipset terbaik Tahun 2022</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
