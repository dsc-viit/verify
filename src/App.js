import React from 'react';
import { useEffect, useState } from 'react';
import data from './assests/data.json';
import { images } from './images';
function importAll(r) {
  return r.keys().map(r);
}
function download(fileUrl, fileName) {
  var a = document.createElement("a");
  a.href = fileUrl;
  a.setAttribute("download", fileName);
  a.click();
}
function App() {
  const certificates = importAll(require.context('./assests/certificates', false, /\.(pdf|svg)$/));

  console.log(certificates);
  const [md5, setmd5] = useState(window.location.search.replace('?id=', ""));
  const [loading, setloading] = useState(null);
  useEffect(() => {
  }, [loading]);
  useEffect(() => {
    setmd5(window.location.search.replace('?id=', ""));
    if (data[md5] !== null) {
      setloading(false);
    }
  }, []);
  if (loading === false && (data[md5] === null || data[md5] === undefined)) {
    setloading(true);
    setmd5("");

    alert('Invalid md5');
    return <div></div>;
  }
  else if (loading === false && md5 !== "" && data[md5]) {
    var path = [];
    certificates.forEach((i) => {
      var st = `${i.default}`;
      if (st.includes(md5))
        path.push(st);
    });
    console.log(path);
    return (
      <div className="container">
        <img className="rounded mx-auto d-block" src={path[1]} alt={data[md5].name} />
        <center>
          <div className="row" >
            <div className="col-auto pt-2 pb-4 m-2">
              <center>
                <button onClick={(e) => {
                  e.preventDefault();
                  download(path[1], data[md5].name);
                }} type="submit" className="btn btn-primary">Download svg</button>
              </center>
            </div>
            <div className="col-auto pt-2 pb-4 m-2">
              <center>
                <button onClick={(e) => {
                  e.preventDefault();
                  download(path[0], data[md5].name);
                }} type="submit" className="btn btn-primary">Download pdf</button>
              </center>
            </div>
          </div>
        </center>
        <div className="row" >
          <div className="col">
            <img style={{
              height: 400,
            }} className="rounded mx-auto d-block" src={images[md5]} alt={data[md5].name} />
          </div>
          <div className="col">
            <p>{data[md5].name}</p>
            <p>{data[md5].role}</p>
            <p>{data[md5].tagline}</p>
            <p>{data[md5].during}</p>
            <p>{data[md5].academic_year}</p>
          </div>
        </div >

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
