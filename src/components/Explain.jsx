import lls from "../assets/lls.png";

function Explain() {
  return (
    <div className="explain">
      <h1>local storage list</h1>
      <img src={lls} />
      <p>
        <b>
          <a
            href="https://jmolsl.netlify.app/"
            target="_blank"
          >
            only list version here
          </a>
        </b>
      </p>
      <p>
        task list made with react applying kiss principle (keep simple stupid)
        in the{" "}
        <a
          href="https://github.com/joaquinmetayer/localstoragelist"
          target="_blank"
        >
          code
        </a>{" "}
        and the ux/ui.
      </p>
      <p>
        refresh the page? no problem, this use the local storage for saved your
        tasks list.
      </p>
      <p>ligth and dark mode depending on the theme of your operating system</p>
      <p>
        easy to use, write in the input and press enter to add task... delete
        task? click to "dlt" (delete) text.
      </p>
      <p>
        see the code by <a href="https://joaquinmetayer.com">@joaquinmetayer</a>{" "}
        <a
          href="https://github.com/joaquinmetayer/localstoragelist"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <p>enjoy it!</p>
    </div>
  );
}

export default Explain;
