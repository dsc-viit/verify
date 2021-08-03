
import { useEffect, useState } from 'react';
import data from './assests/data.json';
function App() {
  const [md5, setmd5] = useState("");
  const [loading, setloading] = useState(null);
  useEffect(() => {

  }, [loading]);
  if (loading == false && md5 != "" && data[md5]) {
    console.log(data[md5]);
    return (
      <>
        <center>
          <img src={`https://dsc-viit.github.io/verify/${md5}.jpg`} />
          <p>{data[md5].name}</p>
          <p>{data[md5].role}</p>
          <p>{data[md5].tagline}</p>
          <p>{data[md5].during}</p>
          <p>{data[md5].academic_year}</p>
          <button onClick={(e) => {
            e.preventDefault();
            setloading(true);
            setmd5("");
          }} type="submit" class="btn btn-primary">Clear</button>
        </center>
      </>
    );
  } else
    return (
      <div className="container">
        <center>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Enter the MD5</label>
              <input value={md5} onChange={(e) => {
                setmd5(e.target.value);
              }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text">You will find it on the certificate</div>
            </div>
            <button onClick={(e) => {
              e.preventDefault();
              setloading(false);
            }} type="submit" class="btn btn-primary">verify</button>
          </form>
        </center>
      </div>
    );
}

export default App;
