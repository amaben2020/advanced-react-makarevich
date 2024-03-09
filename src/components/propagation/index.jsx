import { useEffect } from "react";

const PropagationEvent = () => {
  useEffect(() => {
    document.getElementById("b-tag").addEventListener("click", (e) => {
      console.log(e);
      e.stopPropagation();
      alert("Clicked");
    });

    document.getElementById("p-tag").addEventListener("click", (e) => {
      console.log(e);
      alert("Paragraph Clicked");
    });
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.ctrlKey) {
        alert("Continuing!");
      }
    });
  }, []);
  return (
    <div>
      PropagationEvent
      <div
        style={{
          background: "purple",
          padding: 40,
          margin: "20px 10px",
        }}
      >
        <p id="p-tag">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
          recusandae iste, deserunt aut quos soluta, tempore optio sequi
          veritatis eius delectus, consequuntur ducimus fugiat rerum provident
          sit repudiandae dignissimos nisi!
          <button
            id="b-tag"
            style={{
              border: "1px solid white",
              padding: 20,
              borderRadius: 10,
              margin: 20,
            }}
          >
            Click Me
          </button>
        </p>
      </div>
    </div>
  );
};

export default PropagationEvent;
