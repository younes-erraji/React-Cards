function Data() {
  const request = new XMLHttpRequest();
  let obj;
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      obj = JSON.parse(this.responseText);
    }
  };
  request.open("GET", "./members.json");
  request.send();
  return obj;
}

export default Data;
