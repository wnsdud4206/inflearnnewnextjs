export default function CounterLetDocumentPage() {
  const onClickCountUp = () => {
    const count = Number(document.getElementById("qqq").innerText) + 1;
    document.getElementById("qqq").innerText = count;
  };
  const onClickCountDown = () => {
    const count = Number(document.getElementById("qqq").innerText) - 1;
    document.getElementById("qqq").innerText = count;
  };

  return (
    <div>
      <div id="qqq">0</div>
      <button onClick={onClickCountUp}>up</button>
      <button onClick={onClickCountDown}>down</button>
    </div>
  );
}
