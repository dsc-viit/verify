import React from 'react';
import { useEffect, useState } from 'react';
import data from './assests/data.json';
import { images } from './images';
function App() {
  const [md5, setmd5] = useState("");
  const [loading, setloading] = useState(null);
  useEffect(() => {

  }, [loading]);
  if (loading === false && (data[md5] === null || data[md5] === undefined)) {
    setloading(true);
    setmd5("");

    alert('Invalid md5');
    return <div></div>;
  }
  else if (loading === false && md5 !== "" && data[md5]) {
    return (
      <div>
        <center>
          <img src={images[md5]} alt={data[md5].name} />
          <p>{data[md5].name}</p>
          <p>{data[md5].role}</p>
          <p>{data[md5].tagline}</p>
          <p>{data[md5].during}</p>
          <p>{data[md5].academic_year}</p>
          <button onClick={(e) => {
            e.preventDefault();
            setloading(true);
            setmd5("");
          }} type="submit" className="btn btn-primary">Clear</button>
        </center>
      </div>
    );
  } else
    return (
      <div className="container">
        <center>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputtext1" className="form-label">Enter the MD5</label>
              <input value={md5} onChange={(e) => {
                setmd5(e.target.value);
              }} type="text" className="form-control" />
              <div id="textHelp" className="form-text">You will find it on the certificate</div>
            </div>
            <button onClick={(e) => {
              e.preventDefault();
              setloading(false);
            }} type="submit" className="btn btn-primary">verify</button>
          </form>
        </center>
      </div>
    );
}

export default App;
